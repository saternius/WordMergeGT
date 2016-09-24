import React, { Component, PropTypes } from 'react';
import { View, Text,TextInput, TouchableHighlight,Navigator, Image, TouchableOpacity } from 'react-native';
import NavigationBar from '../NavigationBar';
import Coin from '../Coin';
import Button from '../Button';
import MyInput from '../MyInput';
var styles = require('../styles');
export default class LoginPage extends Component {
  constructor(props) {
      super(props);
      var ctx = this;

    this.inputs = ["username","password"];

    //TODO: make a validity checker
    this.isValid = function(string){
      return true;
    }

    this.focusOnNextValid = function(){
      for(var i=ctx.inputs.length-1; i>-1; i--){
        if(ctx.refs[ctx.inputs[i]].state.text === ctx.refs[ctx.inputs[i]].state.placeholder){
          ctx.refs[ctx.inputs[i]].clearAndFocus();
        }
      }
    }

    this.submit = function(id){
        var el = ctx.refs[id];
        if(ctx.isValid(el.state.text)){
            ctx.focusOnNextValid();
        }
    }

    this.inputFocused = function(id){
        //Nothing
    }

    this.inputBlurFunc = function(){
      //Nothing
    }
  }

  render() {
    return (
      <View style={styles.body}>
        <NavigationBar back={()=>{return this.props.back()}}/>
        <Coin pic="welcome"/>
        <View style={styles.inputContainerLogin}>
            <MyInput type="text" text="Username" ref="username" fin={()=>{return this.submit("username")}} focusFunc={()=>{return this.inputFocused("username")}} blurFunc={this.inputBlurFunc}/>
            <MyInput type="password" text="Password" ref="password" fin={()=>{return this.submit("password")}} focusFunc={()=>{return this.inputFocused("password")}} blurFunc={this.inputBlurFunc}/>
            <View style={styles.submitBtn}>
                <Button text="Login" onclick={()=>{return this.props.nav("StartPage")}}/>
            </View>
        </View>
      </View>
      )
  }
}
