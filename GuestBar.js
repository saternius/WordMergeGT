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
      this.state={name:"Guest_69"};
  }
  //
  render() {
      var guestTextStyle = [styles.guestText];
      if(this.props.profileDetails.name.length>14){
        guestTextStyle.push(styles.smallerGuestText);
      }
      return(
          <View>
            <View style={styles.guestBarView}>
              <View>
                <Image style={[styles.guestBarImage,{borderRadius:10}]} source={this.props.profileDetails.pic}/>

              </View>
              <View>
                <Text style={guestTextStyle}>{this.props.profileDetails.name+" ("+this.props.profileDetails.wins+")"}</Text>
              </View>
            </View>
            <View style={styles.guestBarShadow}></View>

          </View>
        )
      }


}
