import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity,Animated } from 'react-native';
import NavigationBar from '../NavigationBar';
import Button from '../Button';
import GuestBar from '../GuestBar';
import InputBar from '../InputBar';
import TimeBar from '../TimeBar';
import WordContainer from '../WordContainer';
import WordBubble from '../WordBubble';
import Flasher from '../Flasher';
var styles = require('../styles');

export default class LobbyAny extends Component {
  constructor(props){
    super(props);
    this.state={
        myWords:[],
        guestWords:[],
        numWords:0,
        guestTyping:false,
        wordRecieved:false,
        submittedWord:false,

    }


    var shiftBubbles = (myWords,preTag)=>{
      if(myWords.length<=1){
        return;
      }
      var margin = 5;
      var lastBubble = this.refs[preTag+(myWords.length-1)];
      var xShift = lastBubble.getBubbleWidth()+margin;
      for(var i=0; i<myWords.length-1;i++){
        var index = (i+1);
        var bubble = this.refs[preTag+index];
        var newX = bubble.state.x+xShift;

        Animated.spring(
         bubble.state.xShift,
         {
           toValue: -newX,
           friction: 6,
         }
        ).start();
        bubble.setState({x:newX})
      }
    }



    var handleIfWordsMatch = ()=>{

      if(this.state.guestWords[this.state.numWords].word === this.state.myWords[this.state.numWords].word){
          //handleWin
      }else{
          this.refs["flasher"].flashFailure();
      }

    }

    var revealAndCheckMatch = ()=>{
      var guestBubble = this.refs["gBub_"+(this.state.guestWords.length)];
      if(guestBubble!==undefined){
        guestBubble.setState({hide:false});
      }
      this.refs["timeBar"].setState({timeLeft:600});

      handleIfWordsMatch();
      this.setState({
        guestTyping:false,
        wordRecieved:false,
        submittedWord:false,
        numWords:(this.state.numWords+1),
      })
    }

    var updateState = (p)=>{
      if(p){
        this.setState({
                submittedWord:true,
                myWords:this.state.myWords,
        });
      }else{
        this.setState({
          wordRecieved:true,
          guestTyping:false,
          guestWords:this.state.guestWords,
        });
      }
    }


    var pushWord = (wordArray,w,p)=>{
      var nW = this.state.numWords;
      var yDir = p?-1:1;
      var h = !p && !this.state.submittedWord;
      wordArray.push({
        id:(nW+1),
        word:w,
        x:0,
        y:(19*nW)*yDir-5,
        color: "rgb("+(222-nW*3)+","+(222-nW*22)+","+Math.max(0,130-nW*15)+")",
        shadowColor: "rgb("+(170-nW*3)+","+(170-nW*22)+","+Math.max(0,130-nW*15)+")",
        hide: h,
      })

      updateState(p);

      if((p && this.state.wordRecieved)||(!p && this.state.submittedWord)){
        revealAndCheckMatch();
      }

      if(p){
          shiftBubbles(wordArray,"bub_");
      }else{
          shiftBubbles(this.state.guestWords,"gBub_");
      }
    }


    this.recieveWord = (w)=>{
      pushWord(this.state.guestWords,w);
    }

    this.submitWord = (w)=>{
      this.refs["myInput"].clearInput();
      pushWord(this.state.myWords,w,true);
    }

    this.guestStartsTyping = ()=>{
      this.setState({guestTyping:true});
    }

    this.guestStopsTyping = ()=>{
      this.setState({guestTyping:false});
    }


    this.simulateGame = ()=>{

      var startTyping = ()=>{
        this.guestStartsTyping();
      }

      var stopTyping = ()=>{
        this.guestStopsTyping();
      }

      setTimeout(startTyping,200);
      setTimeout(stopTyping,350);
      setTimeout(startTyping,470);
      setTimeout(()=>{this.recieveWord("Lamborghini")},600);

    }

    this.simulateGame();
  }




  render() {
    var myWords;

    var guestActionStyle = [styles.guestTypeContainer];
    var guestActionTextStyle = [styles.guestTypeText];
    var guestFullContainerStyle = [styles.fullGuestBubbleContainer];
    var typing=this.state.guestTyping;
    var guestText = this.props.friend.name + " is typing...";
    if(typing){
      guestFullContainerStyle.push({top:100});
    }else{
      guestActionTextStyle.push(styles.hiddenGameText);
      guestText = "";
      guestFullContainerStyle.push({top:70});
    }

    return (
        <View style={{width:360,height:620}}>

          <Flasher ref="flasher"/>

          <View style={[styles.body,styles.transparent]}>
            <GuestBar profileDetails={this.props.friend}/>
            <View style={guestActionStyle}>
              <Text style={guestActionTextStyle}>
                {guestText}
              </Text>
            </View>

            <View style={guestFullContainerStyle}>
              {
                this.state.guestWords.map((word) => (
                  <WordBubble ref={"gBub_"+word.id} key={"gBubble_"+word.id} word={word.word} num={this.state.numWords} x={word.x} y={word.y} color={word.color} shadowColor={word.shadowColor} id={word.id} guest={true} hide={word.hide}/>
                ))
              }
            </View>

            <View style={styles.fullBubbleContainer}>
            {
              this.state.myWords.map((word) => (
                <WordBubble ref={"bub_"+word.id} key={"bubble_"+word.id} word={word.word} num={this.state.numWords} x={word.x} y={word.y} color={word.color} shadowColor={word.shadowColor} id={word.id} guest={false}/>
              ))
            }
            </View>
            <TimeBar ref="timeBar"/>
            <InputBar ref="myInput" onSubmit={this.submitWord} hideInput={this.state.submittedWord} guest={this.props.friend.name}/>
          </View>
        </View>
      )
  }
}
