import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity } from 'react-native';
import NavigationBar from '../NavigationBar';
import Coin from '../Coin';
import Button from '../Button';
import MyInput from '../MyInput';
var styles = require('../styles');
export default class LobbyMake extends Component {

  render() {
    return (
      <View style={styles.body}>
        <NavigationBar back={()=>{return this.props.back()}}/>
        <Coin pic="fivesy"/>
        <View style={[styles.buttonContainer,styles.waitContainer]} >
            <View style = {[styles.lobbyTextView]}>
              <Text style={[styles.lobbyText, styles.mediumText]}>Enter The Room Code</Text>
            </View>
            <View style = {[styles.lobbyTextView]}>
              <MyInput type="text" text="Room Code" ref="code" fin={()=>{}} focusFunc={()=>{}} blurFunc={()=>{}}/>
            </View>
        </View>

        <View style={[styles.buttonContainer,styles.startPageButtonContainers,styles.break]} >
          <Button text="Join Room" onclick={()=>{return this.props.nav("LogOut")}}/>
        </View>
      </View>
      )
  }
}
