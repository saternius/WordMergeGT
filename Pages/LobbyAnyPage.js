import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity } from 'react-native';
import NavigationBar from '../NavigationBar';
import Coin from '../Coin';
import Button from '../Button';
var styles = require('../styles');
export default class LobbyAny extends Component {

  constructor(props){
      super(props);
      this.state = {dots: 0, startGame:false};
      // Toggle the state every second
      this.dotMaker = setInterval(() => {
          this.setState({dots:(this.state.dots+1)});
      }, 500);


      var startGame = ()=>{
        console.log("It's party time!");
        this.setState({startGame:true});
        setTimeout(()=>{
          this.props.nav("GamePage",{ id: 1, name: 'Tai Lopez', wins: '27', pic: require('../images/tai.png') });
        },150);
      }

      //TODO: Remove this bullcrap and add actual networking funcitonalities
      setTimeout(function(){
        startGame();
      },2000);
  }

  componentWillUnmount(){
    clearInterval(this.dotMaker);
  }

  render() {
    var dots = "";
    for(var i=0; i<this.state.dots%5;i++){
      dots+=".";
    }
    var subject = this.props.friend === undefined?"another player":this.props.friend.name
    var coinPic = this.state.startGame?"party":"alone";
    return (
      <View style={styles.body}>
        <NavigationBar back={()=>{return this.props.back()}}/>
        <Coin pic={coinPic}/>
        <View style={[styles.buttonContainer,styles.startPageButtonContainer]} >
            <Text style={[styles.lobbyText, styles.smallText]}>{"Waiting for "+subject+" to join"+dots}</Text>
        </View>
      </View>
      )
  }
}
