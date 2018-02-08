import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import { COLOR_LIGHT } from "../styles/constants";

export default class Button extends React.Component {
  buttonStyle() {
    return {
      height: this.props.height || 32,
      width: this.props.width,
    };
  }

  textStyle() {
    return {
      fontSize: this.props.height / 2,
    };
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={[styles.button, this.buttonStyle()]}>
          <Text style={this.textStyle()}>{this.props.children}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR_LIGHT,
    borderRadius: 8,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
