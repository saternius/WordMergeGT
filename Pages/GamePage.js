import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity, Animated, ScrollView } from 'react-native';
import NavigationBar from '../NavigationBar';
import Button from '../Button';
import GuestBar from '../GuestBar';
import InputBar from '../InputBar';
import TimeBar from '../TimeBar';
import WordContainer from '../WordContainer';
import WordBubble from '../WordBubble';
import Flasher from '../Flasher';
import Hangman from '../Hangman';
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
        totGuestShift:0,
        totMyShift:0,
    }



    var shiftBubbles = (myWords,p)=>{

      if(myWords.length<=1){
        return;
      }
      var margin = 5;
      var preTag = p?"bub_":"gBub_";
      var oTag = (!p)?"bub_":"gBub_";
      var lastBubble = this.refs[preTag+(myWords.length-1)];
      var gBubble = this.refs[oTag+(myWords.length-1)];
      var gShift = gBubble.getBubbleWidth()+margin;
      var xShift = lastBubble.getBubbleWidth()+margin;

      if(p){
        this.state.totMyShift+=(xShift+18);
      }else{
        this.state.totGuestShift+=(gShift+18);
      }

      for(var i=0; i<myWords.length-1;i++){
        var index = (i+1);
        var bubble = this.refs[preTag+index];
        var g_bubble = this.refs[oTag+index];
        var newX = Math.max(bubble.state.x+xShift,g_bubble.state.x+gShift);
        if(!bubble.shifted){
            this.animateBubbleShift(bubble, g_bubble, newX);
        }
        bubble.shifted = !bubble.shifted;
        g_bubble.shifted = !g_bubble.shifted;
      }
    }

    this.animateBubbleShift = (bubble, g_bubble, newX)=>{
      Animated.spring(
       bubble.state.xShift,
       {
         toValue: -newX,
         friction: 6,
       }
      ).start();

      Animated.spring(
       g_bubble.state.xShift,
       {
         toValue: -newX,
         friction: 6,
       }
      ).start();

      bubble.setState({x:newX});
      g_bubble.setState({x:newX});
    }


    this.handleLoss = ()=>{
      console.log("YOU LOSE!");
      setTimeout(()=>{

        //adding lose bubbles
        var w = "YOU LOST";
        var details = {
          id:69,
          word:w,
          x:0,
          color: "rgb(180,0,0)",
          shadowColor: "rgb(60,0,0)",
          hide: false,
        }




        var gD = details;
        gD["y"] = (160);
        this.state.guestWords.push(gD);

        var myD = JSON.parse(JSON.stringify(details));
        myD["y"] = (-160);
        this.state.myWords.push(myD);

        this.setState({
          guestWords:this.state.guestWords,
          myWords:this.state.myWords,
        });
        shiftBubbles(this.state.guestWords,false);
        shiftBubbles(this.state.myWords,true);


        setTimeout(()=>{
          this.props.nav("Results",{friend:this.props.friend,won:false});
        },1000);

      },1500);
    }


    var handleIfWordsMatch = ()=>{

      if(this.state.guestWords[this.state.numWords].word === this.state.myWords[this.state.numWords].word){
          //handleWin
      }else{
          this.refs["flasher"].flashFailure();
      }



      if(this.state.numWords<5){
        if(this.simulatedGame!=null){
          this.simulatedGame.nextRound();
        }
        this.setState({
          guestTyping:false,
          wordRecieved:false,
          submittedWord:false,
          numWords:(this.state.numWords+1),
        })
      }else{
        this.handleLoss();
      }

    }

    var revealAndCheckMatch = ()=>{
      var guestBubble = this.refs["gBub_"+(this.state.guestWords.length)];
      if(guestBubble!==undefined){
        guestBubble.setState({hide:false});
      }
      this.refs["timeBar"].resetTimer();

      handleIfWordsMatch();

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
        y:(25*nW)*yDir-5,
        color: "rgb("+(222-nW*6)+","+(222-nW*38)+","+Math.max(0,130-nW*25)+")",
        shadowColor: "rgb("+(170-nW*6)+","+(170-nW*38)+","+Math.max(0,130-nW*25)+")",
        hide: h,
      })

      shiftBubbles(wordArray,p);
      updateState(p);

      if((p && this.state.wordRecieved)||(!p && this.state.submittedWord)){
        revealAndCheckMatch();
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


    var ctx = this;
    var simulateGame = (function(){

      var startTyping = ()=>{
        ctx.guestStartsTyping();
      }

      var stopTyping = ()=>{
        ctx.guestStopsTyping();
      }

      setTimeout(startTyping,2000);
      setTimeout(stopTyping,3500);
      setTimeout(startTyping,4700);
      var lopezWords = ["Lamborghini","Garage","books","knowledge","power","Hollywood","tedXTalks","47$","fuelUnit","mentors"];

      setTimeout(()=>{ctx.recieveWord(lopezWords[0])},6000);
      var i=0;
      this.nextRound = ()=>{
        setTimeout(startTyping,4000);
        setTimeout(()=>{ctx.recieveWord(lopezWords[i])},5500);
        i++;
      }


    });

    this.simulatedGame = new simulateGame();
  }




  render() {
    var myWords;

    var guestActionStyle = [styles.guestTypeContainer];
    var guestActionTextStyle = [styles.guestTypeText];
    var guestFullContainerStyle = [styles.fullGuestBubbleContainer,{position:"relative",width:360,height:232,top:0,right:0,zIndex:10}];
    var myFullContainerStyle = [styles.fullBubbleContainer,{position:"absolute",width:360,height:232,top:232,right:0,zIndex:10}];
    var typing=this.state.guestTyping;
    var guestText = this.props.friend.name + " is typing...";
    if(typing){
      guestFullContainerStyle.push({top:20});
    }else{
      guestActionTextStyle.push(styles.hiddenGameText);
      guestText = "";
      guestFullContainerStyle.push({top:0});
    }

    var topWidth = Math.max(this.state.totGuestShift+180,this.state.totMyShift+180,360);
    guestFullContainerStyle.push({width:topWidth});
    myFullContainerStyle.push({width:topWidth});
    return (
        <View style={{width:360,height:620}}>

          <Flasher ref="flasher"/>
          <GuestBar profileDetails={this.props.friend}/>
          <View style={guestActionStyle}>
            <Text style={guestActionTextStyle}>
              {guestText}
            </Text>
          </View>
            <Hangman/>
          <ScrollView ref="bubbleScroller" horizontal={true} style={[styles.gameBody,{position:"absolute",width:360,height:640,padding:0}]} contentContainerStyle={{}}
          onContentSizeChange={(contentWidth, contentHeight)=>{
            this.refs["bubbleScroller"].scrollTo({x:contentWidth});
          }}>


           <View style={guestFullContainerStyle}>
              {
                this.state.guestWords.map((word) => (
                  <WordBubble ref={"gBub_"+word.id} key={"gBubble_"+word.id} word={word.word} num={this.state.numWords} x={word.x} y={word.y} color={word.color} shadowColor={word.shadowColor} id={word.id} guest={true} hide={word.hide}/>
                ))
              }
           </View>

           <View style={myFullContainerStyle}>
            {
              this.state.myWords.map((word) => (
                <WordBubble ref={"bub_"+word.id} key={"bubble_"+word.id} word={word.word} num={this.state.numWords} x={word.x} y={word.y} color={word.color} shadowColor={word.shadowColor} id={word.id} guest={false}/>
              ))
            }
          </View>

          </ScrollView>

          <TimeBar ref="timeBar"/>
          <InputBar ref="myInput" onSubmit={this.submitWord} hideInput={this.state.submittedWord} guest={this.props.friend.name}/>
        </View>
      )
  }
}
