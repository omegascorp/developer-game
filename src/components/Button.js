import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import {COLOR_DARK, COLOR_LIGHT} from "../styles/constants";

export default class Button extends React.Component {
  buttonColor() {
    return this.props.color || COLOR_LIGHT;
  }

  buttonStyle() {
    return {
      height: this.props.height || 32,
      width: this.props.width,
      backgroundColor: this.buttonColor(),
    };
  }

  textStyle() {
    return {
      fontSize: this.props.height / 2,
      color: this.buttonColor() === COLOR_LIGHT ? COLOR_DARK : COLOR_LIGHT,
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
