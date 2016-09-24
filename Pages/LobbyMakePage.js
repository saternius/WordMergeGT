import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity } from 'react-native';
import NavigationBar from '../NavigationBar';
import Coin from '../Coin';
import Button from '../Button';
var styles = require('../styles');
export default class LobbyMake extends Component {

  render() {
    return (
      <View style={styles.body}>
        <NavigationBar back={()=>{return this.props.back()}}/>
        <Coin pic="alone"/>
        <View style={[styles.buttonContainer,styles.waitContainer]} >
            <View style = {[styles.lobbyTextView]}>
              <Text style={[styles.lobbyText, styles.mediumText]}>Room Code</Text>
            </View>
            <View style = {[styles.lobbyTextView]}>
              <Text style={[styles.lobbyText, styles.largeText]}>RCHDSLM</Text>
            </View>
        </View>
      </View>
      )
  }
}
