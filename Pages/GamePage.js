import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity } from 'react-native';
import NavigationBar from '../NavigationBar';
import Button from '../Button';
import GuestBar from '../GuestBar';
import InputBar from '../InputBar';
import TimeBar from '../TimeBar';
import WordContainer from '../WordContainer';
import WordBubble from '../WordBubble';
var styles = require('../styles');
export default class LobbyAny extends Component {
  constructor(props){
    super(props);
    this.state={
        words:[],
        numWords:0,
    }

    var shiftBubbles  = ()=>{
      if(this.state.words.length<=1){
        return;
      }

      this.state.words[this.state.words.length-2].fresh = false;

    }


    var pushWord = (w)=>{
        this.refs["myInput"].clearInput();
        var xPos=0;
        var yPos=178;

        this.state.words.push({
            id:(this.state.numWords+1),
            word:w,
            x:xPos,
            y:yPos,
            fresh: true
        });

        shiftBubbles();

        this.setState({
                words:this.state.words,
                numWords:(this.state.numWords+1),
        });
    }

    this.submitWord = (word)=>{
      pushWord(word);
    }

  }



  render() {
    var words;
    console.log(this.state.words);
    return (
        <View style={[styles.body,styles.gameBGColor]}>
          <GuestBar profileDetails={this.props.friend}/>
          <View style={styles.fullBubbleContainer}>
          {
            this.state.words.map((word) => (
              <WordBubble key={"bubble_"+word.id} word={word.word} num={this.state.numWords} x={word.x} y={word.y} fresh={word.fresh}/>
            ))
          }

          </View>
          <TimeBar/>
          <InputBar ref="myInput" onSubmit={this.submitWord}/>
        </View>
      )
  }
}
