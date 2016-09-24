import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class MyScene extends Component {
  static get defaultProps() {
    return {
      title: 'MyScene'
    };
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <TouchableHighlight onPress={this.props.onForward}>
        <Text>Button</Text>
      </TouchableHighlight>
    )
  }
}


