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
      ctx.refs.nameInput.focus();
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

    return (
      <View>
        <TouchableWithoutFeedback onPressIn={this.clear}>
          <View style={clearDivStyle}></View>
        </TouchableWithoutFeedback>
        <View style={styles.searchInputView} elevation={5}>
          <TextInput
            style={[styles.searchInput,textStyle]}
            onChangeText={(t) => this.setState({text:t})}
            value={this.state.text}
            underlineColorAndroid="white"
            onBlur={this.checkEmpty}
            onFocus={this.props.focusFunc}
            ref="nameInput"
            onSubmitEditing={this.props.fin}
            type={this.props.type}
          />
        </View>
      </View>
    );
  }
}
