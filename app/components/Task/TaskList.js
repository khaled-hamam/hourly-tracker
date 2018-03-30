import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { List, ListItem, Button, Icon } from 'native-base';

import Task from './Task';
import Popup from '../Popup/Popup';

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  render() {
    return (
      <View>
        <List
          dataSource={this.ds.cloneWithRows(this.props.tasks)}
          renderRow={task => (
            <ListItem>
              <Task name={task} />
            </ListItem>
          )}
          renderLeftHiddenRow={(data, secId, rowId, rowMap) => (
            <Button
              onPress={() => {
                // Closing the Button
                rowMap[`${secId}${rowId}`].props.closeRow();
                this.editPopup.show({ taskName: this.props.tasks[rowId], rowId });
              }}
            >
              <Icon active name="md-create" />
            </Button>
          )}
          renderRightHiddenRow={(data, secId, rowId, rowMap) => (
            <Button
              full
              danger
              onPress={() => {
                // Closing the Button
                rowMap[`${secId}${rowId}`].props.closeRow();
                this.props.deleteTask(rowId);
              }}
            >
              <Icon active name="md-trash" />
            </Button>
          )}
          leftOpenValue={75}
          rightOpenValue={-75}
        />
        <Popup
          title="Edit Task"
          submit={this.props.editTask}
          ref={editPopup => {
            this.editPopup = editPopup;
          }}
        />
      </View>
    );
  }
}
