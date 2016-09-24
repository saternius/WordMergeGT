import React, { Component } from 'react';
import {TouchableWithoutFeedback, View, AppRegistry, TextInput } from 'react-native';
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
    }
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPressIn={this.clear}>
          <View style={clearDivStyle}></View>
        </TouchableWithoutFeedback>

        <View style={styles.defaultInputView}>
          <TextInput
            style={[styles.defaultInput,textStyle]}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            underlineColorAndroid="#e3e3e3"
            onBlur={this.checkEmpty}
            ref="nameInput"
          />
        </View>
      </View>
    );
  }
}
