import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity } from 'react-native';
import NavigationBar from '../NavigationBar';
import Coin from '../Coin';
import Button from '../Button';
var styles = require('../styles');
export default class Instructions extends Component {

  render() {
    return (
      <View style={styles.body}>
        <NavigationBar back={()=>{return this.props.back()}}/>
        <View>
          <Coin pic="instruct"/>
        </View>
      </View>
      )
  }
}
