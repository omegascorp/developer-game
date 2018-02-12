import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppView from './src/views/AppView';

export default class App extends React.Component {
  render() {
    return (
      <AppView />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
