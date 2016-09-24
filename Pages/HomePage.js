import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity } from 'react-native';
import NavigationBar from '../NavigationBar';
import Coin from '../Coin';
import Button from '../Button';
var styles = require('../styles');
export default class HomePage extends Component {
  render() {
    return (
      <View style={styles.body}>
        <NavigationBar/>
        <Coin/>
        <View style={styles.buttonContainer} >
        <Button text="Login" onclick={()=>{return this.props.nav("Login")}}/>
        <Button text="Sign Up" tint="pale" onclick={()=>{return this.props.nav("SignUp")}}/>
        <Button text="Connect" tint="facebook" onclick={()=>{return this.props.nav("ConnectFB")}}/>
        </View>
      </View>
      )
  }
}
