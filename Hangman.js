import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity } from 'react-native';

var styles = require('./styles');
export default class Hangman extends Component {

  render() {
    var pic = require('./images/woot.png');

    var viewStyle = [styles.center,{top:282,left:188, width:100,height:100, position:"absolute", zIndex:0}];
    var imageStyle = [styles.coin,{width:50,height:50,position:"absolute", zIndex:0}];
    if(this.props.small=="true"){
      imageStyle.push(styles.smallCoin);
    }
    if(this.props.fade){
      imageStyle.push(styles.faded);
    }
    return (
    	<View style={viewStyle}>
    	<Image style={imageStyle} source={pic}/>
    	</View>
      )
  }
}
