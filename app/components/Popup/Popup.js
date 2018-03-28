import React, { Component } from 'react';
import { ListView, View, TextInput } from 'react-native';
import PopupDialog, { DialogTitle, DialogButton } from 'react-native-popup-dialog';

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  show(editInfo) {
    if (editInfo) {
      this.editRowId = editInfo.rowId;
      this.setState({
        text: editInfo.taskName
      });
    }
    this.popupDialog.show();
  }

  dismiss() {
    this.popupDialog.dismiss();
  }

  render() {
    return (
      <PopupDialog
        width={0.7}
        height={0.3}
        containerStyle={{ alignItems: 'center' }}
        dialogTitle={<DialogTitle title={this.props.title} />}
        ref={popupDialog => {
          this.popupDialog = popupDialog;
        }}
      >
        <View style={{ height: '100%', backgroundColor: 'rgba(0,0,0,0)' }}>
          <TextInput 
            style={{ margin: 10 }} 
            placeholder="Task Name"
            value={this.state.text}
            onChangeText={text => this.setState({ text })} 
          />
          <DialogButton
            text="Submit"
            onPress={() => {
              this.props.submit(this.state.text, this.editRowId);
              this.popupDialog.dismiss();
            }}
          />
        </View>
      </PopupDialog>
    );
  }
}
