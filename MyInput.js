import React, { Component } from 'react';
import {TouchableWithoutFeedback, View, AppRegistry, TextInput, Text } from 'react-native';
var styles = require('./styles');

export default class MyInput extends Component {

  constructor(props) {
    super(props);
    var ctx = this;
    this.state = { text: 'Useless Placeholder' };
    this.state.text = this.props.text;
    this.state.placeholder = this.props.text;
    this.clear = function(){
      ctx.setState({removeDiv:true,text:""})
    }

    this.clearAndFocus = function(){
      ctx.clear();
      ctx.refs.nameInput.focus();
    }

    this.clearAndBlur = function(){
      ctx.clear();
      ctx.refs.nameInput.blur();
    }

    this.checkEmpty = function(){
      if(ctx.state.text === ""){
        ctx.setState({removeDiv:false,text:ctx.state.placeholder})
      }
      ctx.props.blurFunc();
    }




  }

  render() {
    var clearDivStyle = styles.clearDivActive;
    var textStyle;

    if(this.state.removeDiv){
      clearDivStyle = styles.clearDivHidden;
      textStyle = styles.defaultInputFocus;
    }
    var isPass = (this.props.type==="password" && this.state.text!==this.state.placeholder);

    var textView = [styles.defaultInputView];
    if(this.props.type==="gameInput"){
      textView.push(styles.gameInputView);
      textStyle=styles.gameInputText;
        if(this.state.removeDiv){
          textStyle = styles.gameTextInputFocus;
        }
    }

    return (
      <View>
        <TouchableWithoutFeedback onPressIn={this.clearAndFocus}>
          <View style={clearDivStyle}></View>
        </TouchableWithoutFeedback>
        <View style={textView}>
          <TextInput
            style={[styles.defaultInput,textStyle]}
            onChangeText={(t) => this.setState({text:t})}
            value={this.state.text}
            underlineColorAndroid="#e3e3e3"
            onBlur={this.checkEmpty}
            onFocus={this.props.focusFunc}
            ref="nameInput"
            onSubmitEditing={()=>{this.props.fin(this.state.text)}}
            type={this.props.type}
            secureTextEntry={isPass}
          />
        </View>
      </View>
    );
  }
}
