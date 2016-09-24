import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity, StyleSheet } from 'react-native';
var styles = require('./styles');
var nav;
export default class TimeBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      timeLeft:600,
    }
    var tickDown = ()=>{
      var newState = this.state.timeLeft-1;
      this.setState({timeLeft:newState});
    }

    setInterval(tickDown,100);
  }

  render() {
      var dW = Math.floor(360*(this.state.timeLeft/600));
      
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
