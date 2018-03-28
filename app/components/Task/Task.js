import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Container } from 'native-base';

export default class Task extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10
    }
});
