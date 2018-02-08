import React from 'react';
import { View } from 'react-native';

export default class Space extends React.Component {
  style() {
    return {
      height: this.props.size || 32,
      width: this.props.size || 32,
    };
  }

  render() {
    return (
      <View style={this.style()} />
    );
  }
}
