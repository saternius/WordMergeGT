import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
var styles = require('./styles');
export default class Flasher extends Component {
  constructor(props){
    super(props);
    this.state = {
      colorShift:new Animated.Value(300),
    }

    this.flashFailure = ()=>{
      this.state.colorShift.setValue(0);
      Animated.timing(
         this.state.colorShift,
         {
           toValue: 300,
           duration:800,
         }
       ).start();
    }
  }

  render() {
      var color = this.state.colorShift.interpolate({
          inputRange: [0, 300],
          outputRange: ['rgba(255, 0, 0, 1)','rgba(201, 245, 245, 1)']
      });

      return(
        <Animated.View style = {[styles.body,styles.gameBGColor,styles.flasher,

          {
              backgroundColor:color
          }

        ]}>

        </Animated.View>
        )
      }


}
