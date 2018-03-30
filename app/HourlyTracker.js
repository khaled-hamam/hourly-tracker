import React, { Component } from 'react';
import { ListView, View, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content, Button, Icon, Text, Body, Title } from 'native-base';
import PopupDialog, { DialogTitle, DialogButton } from 'react-native-popup-dialog';

import TaskList from './components/Task/TaskList';
import Popup from './components/Popup/Popup';

import { addTask, deleteTask, editTask } from './actions';

class HourlyTracker extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this._addTask = this._addTask.bind(this);
    this._deleteTask = this._deleteTask.bind(this);
    this._editTask = this._editTask.bind(this);
  }

  _addTask(taskName) {
    // Validating Input
    taskName = taskName.trim();
    if (!taskName) {
      Alert.alert('You should enter a task name.');
      return;
    }

    // Adding to the Current Tasks List
    this.props.addTask(taskName);
  }

  _deleteTask(rowId) {
    Alert.alert(`Delete ${this.props.tasks[rowId]}`, 'Are you sure you want to delete this task?', [
      { text: 'Cancel' },
      { text: 'OK', onPress: () => this.props.deleteTask(rowId) }
    ]);
  }

  _editTask(taskName, rowId) {
    // Validating Input
    taskName = taskName.trim();
    if (!taskName) {
      Alert.alert('You should enter a task name.');
      return;
    }

    // Editing in the Current Tasks List
    this.props.editTask(rowId, taskName);
  }

  render() {
    return (
      <Container>
        <Header noShadow style={{ backgroundColor: '#fff' }}>
          <Body>
            <Title style={{ color: '#000' }}>Tasks</Title>
          </Body>
        </Header>
        <Content>
          <TaskList tasks={this.props.tasks} deleteTask={this._deleteTask} editTask={this._editTask} />
        </Content>
        <Button
          rounded
          style={{ position: 'absolute', bottom: 40, right: 20, width: 60, height: 60, justifyContent: 'center' }}
          onPress={() => this.addPopup.show()}
        >
          <Icon name="md-add" />
        </Button>

        <Popup
          title="Add Task"
          submit={this._addTask}
          ref={addPopup => {
            this.addPopup = addPopup;
          }}
        />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { addTask, deleteTask, editTask })(HourlyTracker);
