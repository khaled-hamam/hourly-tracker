import React, { Component } from 'react';
import { ListView, View, TextInput } from 'react-native';
import { Container, Header, Content, Button, Icon, Text, Body, Title } from 'native-base';
import PopupDialog, { DialogTitle, DialogButton } from 'react-native-popup-dialog';

import TaskList from './components/Task/TaskList';
import Popup from './components/Popup/Popup';

const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];

export default class HourlyTracker extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      taskList: tasks
    };
  }

  _addTask(taskName) {
    // Validating Input (Checking for Duplicate)
    if (!this._validateTaskName(taskName)) {
      alert('Task names cannot be repeated.');
      return;
    }

    // TODO: Add in the AsyncStorage
    // Adding to the Current Tasks List
    const newData = [...this.state.taskList];
    newData.splice(0, 0, taskName);
    this.setState({ taskList: newData });
  }

  _validateTaskName(taskName) {
    // TODO: Check in the AsyncStorage
    // Check Duplicate Task Names
    if (this.state.taskList.indexOf(taskName) != -1)
      // Duplicate Found
      return false;

    return true; // No Duplicate
  }

  render() {
    return (
      <Container>
        <Content>
          <Header noShadow style={{ backgroundColor: '#fff' }}>
            <Body>
              <Title style={{ color: '#000' }}>Tasks</Title>
            </Body>
          </Header>

          <TaskList tasks={this.state.taskList} />
        </Content>
        <Button
          rounded
          style={{ position: 'absolute', bottom: 40, right: 20, width: 60, height: 60, justifyContent: 'center' }}
          onPress={() => {
            this.addPopup.show();
          }}
        >
          <Icon name="md-add" />
        </Button>

        <Popup
          title='Add Task'
          submit={this._addTask.bind(this)}
          ref={addPopup => {
            this.addPopup = addPopup;
          }}
        />
      </Container>
    );
  }
}
