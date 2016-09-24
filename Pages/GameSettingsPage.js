import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity } from 'react-native';
import NavigationBar from '../NavigationBar';
import Coin from '../Coin';
import Button from '../Button';
var styles = require('../styles');
export default class GameSettings extends Component {
  render() {
    return (
      <View style={styles.body}>
        <NavigationBar back={()=>{return this.props.back()}}/>
        <Coin pic="group"/>
        <View style={[styles.buttonContainer,styles.startPageButtonContainers]} >
          <Button text="Any Match" tint="bright" onclick={()=>{return this.props.nav("LobbyAny")}}/>
          <Button text="Make Room" onclick={()=>{return this.props.nav("LobbyMake")}}/>
          <Button text="Join Room" onclick={()=>{return this.props.nav("LobbyJoin")}}/>
          <Button text="Challange" tint="facebook" onclick={()=>{return this.props.nav("Challange")}}/>
        </View>
      </View>
      )
  }
}
