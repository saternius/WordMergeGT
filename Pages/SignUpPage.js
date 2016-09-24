import React, { Component, PropTypes } from 'react';
import { View, Text,TextInput, TouchableHighlight,Navigator, Image, TouchableOpacity } from 'react-native';
import NavigationBar from '../NavigationBar';
import Coin from '../Coin';
import Button from '../Button';
import MyInput from '../MyInput';
var styles = require('../styles');
export default class SignUpPage extends Component {
  constructor(props) {
      super(props);
      var ctx = this;

    this.inputs = ["email","username","password","conf"];

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
        <View style={styles.inputContainerSignUp}>
            <MyInput type="text" text="Email Address" ref="email" fin={()=>{return this.submit("email")}} focusFunc={()=>{return this.inputFocused("email")}} blurFunc={this.inputBlurFunc}/>
            <MyInput type="text" text="Username" ref="username" fin={()=>{return this.submit("username")}} focusFunc={()=>{return this.inputFocused("username")}} blurFunc={this.inputBlurFunc}/>
            <MyInput type="password" text="Password" ref="password" fin={()=>{return this.submit("password")}} focusFunc={()=>{return this.inputFocused("password")}} blurFunc={this.inputBlurFunc}/>
            <MyInput type="password" text="Confirm Password" ref="conf" fin={()=>{return this.submit("conf")}} focusFunc={()=>{return this.inputFocused("conf")}} blurFunc={this.inputBlurFunc}/>
            <View style={styles.submitBtn}>
                <Button text="Submit" tint="pale" onclick={()=>{}}/>
            </View>
        </View>
      </View>
      )
  }
}
