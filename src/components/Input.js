import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { COLOR_LIGHT } from "../styles/constants";

export default class Input extends React.Component {

  styles() {
    return {
      height: this.props.height || 32,
      width: this.props.width,
    };
  }

  render() {
    return (
      <TextInput
        placeholder={this.props.placeholder}
        style={[styles.input, this.styles()]}
        value={this.props.value}
        underlineColorAndroid='transparent'
        onTextChange={this.props.onTextChange}
      />
    );
  }
}


const styles = StyleSheet.create({
  input: {
    backgroundColor: COLOR_LIGHT,
    borderRadius: 8,
    padding: 8,
  },
});
