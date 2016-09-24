import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity } from 'react-native';
import MyInput from './MyInput';
var styles = require('./styles');
var nav;
export default class InputBar extends Component {
  constructor(props){
    super(props);
    this.clearInput = ()=>{
      this.refs["myInput"].clearAndBlur();
    }
  }
  _onPressButton() {
      console.log("You tapped the button!");
      nav.push({
        page: <HomePage/> ,
        index:0
      });
      this.state={name:"Guest_69"};
  }

  render() {
      var barContent;
      if(this.props.hideInput){
        barContent =
            <View style={styles.centerInputBar}>
              <Text style={styles.inputBarText}>
                {"Waiting on "+this.props.guest}
              </Text>
            </View>;
      }else{
        barContent = <MyInput type="gameInput" text="Type A Word!" ref="myInput" fin={this.props.onSubmit} focusFunc={()=>{}} blurFunc={()=>{}}/>;
      }
      return(
          <View>
            <View style={styles.inputView}>
              {barContent}
            </View>
            <View style={styles.inputBoxShadow}>
            </View>
          </View>
        )
      }


}
