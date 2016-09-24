import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity } from 'react-native';
var styles = require('./styles');
import Button from './Button';

export default class FriendResult extends Component {
  render() {

      return(
          <View style={styles.friendResultDiv} elevation={5}>
            <View style={styles.friendImageDiv}>
              <Image style={styles.boxShadowTitle} source={this.props.pic}/>
              <Image style={styles.boxShadowTitle} source={require('./images/boxShadow.png')}/>
            </View>
            <View style={styles.friendTextDiv}>
              <Text style={styles.friendNameText}>{this.props.name+"("+this.props.wins+")"}</Text>
              <Button width="50" height="25" tint="chal" text="Challange" onclick={this.props.onclick}/>
            </View>
          </View>
      )

  }
}
