import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity } from 'react-native';
import NavigationBar from '../NavigationBar';
import Coin from '../Coin';
import Button from '../Button';
var styles = require('../styles');
export default class Achievements extends Component {
  constructor(props){
      super(props);
      this.state={
        wins:69,
        achs:[
              {
                desc:"Blah1",
                pic:"fivesy",
                got:false
              },
              {
                desc:"Blah2",
                pic:"group",
                got:false
              },
              {
                desc:"Blah3",
                pic:"merge",
                got:false
              },
              {
                desc:"Blah4",
                pic:"party",
                got:true
              },
              {
                desc:"Blah5",
                pic:"welcome",
                got:true
              },
              {
                desc:"Blah6",
                pic:"thumbsy",
                got:false
              },
              {
                desc:"Blah7",
                pic:"righto",
                got:false
              },
              {
                desc:"Blah8",
                pic:"woot",
                got:false
              }
            ]
      }
  }

  _onPressButton(input) {
    console.log()
  }

  render() {
    return (
      <View style={styles.body}>
        <NavigationBar back={()=>{return this.props.back()}}/>
        <View>
          <Coin pic="dickens"/>
          <Text style={styles.numWins}>{this.state.wins}</Text>
        </View>
        <View style={styles.achieveTextView}>
          <Text style={[styles.lobbyText, styles.smallText]}>KEK</Text>
        </View>

          <View style={styles.buttonColumn}>
            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={()=>{this._onPressButton(0)}}>
                <Coin pic={this.state.achs[0].pic} small="true" fade={!this.state.achs[0].got}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this._onPressButton(1)}}>
                <Coin pic={this.state.achs[1].pic} small="true" fade={!this.state.achs[1].got}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this._onPressButton(2)}}>
                <Coin pic={this.state.achs[2].pic} small="true" fade={!this.state.achs[2].got}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this._onPressButton(3)}}>
                <Coin pic={this.state.achs[3].pic} small="true" fade={!this.state.achs[3].got}/>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={()=>{this._onPressButton(4)}}>
                <Coin pic={this.state.achs[4].pic} small="true" fade={!this.state.achs[4].got}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this._onPressButton(5)}}>
                <Coin pic={this.state.achs[5].pic} small="true" fade={!this.state.achs[5].got}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this._onPressButton(6)}}>
                <Coin pic={this.state.achs[6].pic} small="true" fade={!this.state.achs[6].got}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this._onPressButton(7)}}>
                <Coin pic={this.state.achs[7].pic} small="true" fade={!this.state.achs[7].got}/>
              </TouchableOpacity>
            </View>
          </View>
      </View>
      )
  }
}
