import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity } from 'react-native';
var styles = require('./styles');
var nav;
export default class NavigationBar extends Component {
  _onPressButton() {
      console.log("You tapped the button!");
      nav.push({
        page: <HomePage/> ,
        index:0
      });
  }

  render() {
    if(this.props.back!==undefined){
      return (
        <View style={styles.navigationView}>
        <TouchableOpacity style = {styles.backTouch} onPress={this.props.back}>
          <Image style={styles.backBtn} source={require('./images/backArrow.png')}/>
        </TouchableOpacity>
          <Image style={styles.arrowTitle} source={require('./images/title.png')}/>
        </View>
      )
    }else{
      return(
          <View style={styles.fullCenter}>
            <Image style={styles.centerTitle} source={require('./images/title.png')}/>
          </View>

      )
    }

  }
}
