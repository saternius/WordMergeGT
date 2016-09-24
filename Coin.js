import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity } from 'react-native';

var styles = require('./styles');
export default class Coin extends Component {
  render() {
    var pic;
    switch(this.props.pic){
      default:
          pic = require('./images/icon.png');
          break;
      case "welcome":
          pic = require('./images/welcome.png');
          break;
      case "alone":
          pic = require('./images/alone.png');
          break;
      case "dickens":
          pic = require('./images/dickens.png');
          break;
      case "fivesy":
          pic = require('./images/fivesy.png');
          break;
      case "group":
          pic = require('./images/group.png');
          break;
      case "merge":
          pic = require('./images/merge.png');
          break;
      case "party":
          pic = require('./images/party.png');
          break;
      case "righto":
          pic = require('./images/righto.png');
          break;
      case "thumbsy":
          pic = require('./images/thumbsy.png');
          break;
      case "woot":
          pic = require('./images/woot.png');
          break;
      case "instruct":
          pic = require('./images/instructions.png');
          break;
    }
    //

    var viewStyle = [styles.center];
    var imageStyle = [styles.coin];
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
