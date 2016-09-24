import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity } from 'react-native';
import NavigationBar from '../NavigationBar';
import Coin from '../Coin';
import Button from '../Button';
var styles = require('../styles');
export default class StartPage extends Component {
  render() {
    return (
      <View style={styles.body}>
        <NavigationBar back={()=>{return this.props.back()}}/>
        <Coin pic="merge"/>
        <View style={[styles.buttonContainer,styles.startPageButtonContainers]} >
        <Button text="Play Now" tint="bright" onclick={()=>{return this.props.nav("GameSettings")}}/>
        <Button text="Achievements" onclick={()=>{return this.props.nav("Achievements")}}/>
        <Button text="Instructions" onclick={()=>{return this.props.nav("Instructions")}}/>
        <Button text="Log Out" tint="pale" willKillMe={true} onclick={()=>{return this.props.nav("LogOut")}}/>
        </View>
      </View>
      )
  }
}
