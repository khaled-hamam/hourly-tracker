import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { List, ListItem, Button, Icon } from 'native-base';

import Task from './Task';
import Popup from '../Popup/Popup';

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      taskList: this.props.tasks
    };
  }

  _deleteTask(secId, rowId, rowMap) {
    // TODO: Delete in the AsyncStorage
    // TODO: Making a Confirm Alert before Deletion
    // Deleting from the UI
    rowMap[`${secId}${rowId}`].props.closeRow();
    // Deleting in the Current Tasks List
    const newData = [...this.state.taskList];
    newData.splice(rowId, 1);
    this.setState({ taskList: newData });
  }

  _editTask(taskName, rowId) {
    // TODO: Edit in the AsyncStorage

    // Editing in the Current Tasks List
    let newData = [...this.state.taskList];
    newData[rowId] = taskName;
    this.setState({ taskList: newData });
  }

  render() {
    return (
      <View>
        <List
          dataSource={this.ds.cloneWithRows(this.props.tasks)}
          renderRow={data => (
            <ListItem>
              <Task name={data} />
            </ListItem>
          )}
          renderLeftHiddenRow={(data, secId, rowId) => (
            <Button
              onPress={() => {
                this.editPopup.show({taskName: this.props.taskList[rowId], rowId});
              }}
            >
              <Icon active name="md-create" />
            </Button>
          )}
          renderRightHiddenRow={(data, secId, rowId, rowMap) => (
            <Button full danger onPress={() => this._deleteTask(secId, rowId, rowMap)}>
              <Icon active name="md-trash" />
            </Button>
          )}
          leftOpenValue={75}
          rightOpenValue={-75}
        />
        <Popup
          title='Edit Task'
          submit={this._editTask.bind(this)}
          ref={editPopup => {
            this.editPopup = editPopup;
          }}
        />
      </View>
    );
  }
}
