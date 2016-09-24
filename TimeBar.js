import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity, StyleSheet } from 'react-native';
var styles = require('./styles');
var nav;
export default class TimeBar extends Component {
  constructor(props){
    super(props);
    this.fullTime = 300;
    this.state = {
      timeLeft:this.fullTime,
    }
    var tickDown = ()=>{
      var newState = this.state.timeLeft-1;
      this.setState({timeLeft:newState});
    }
    this.resetTimer = ()=>{
      this.setState({timeLeft:this.fullTime})
    }

    setInterval(tickDown,100);
  }

  render() {
      var dW = Math.floor(360*(this.state.timeLeft/this.fullTime));

      var dStyle = StyleSheet.create({
        fillWidth: {
          width: dW,
        }
      });

      return(
        <View style={styles.timeBarContainer}>
            <View style={styles.timeBarBG}/>
            <View style={[styles.timeBar,dStyle.fillWidth]}/>
        </View>
        )
      }


}
