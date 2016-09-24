import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight,Navigator, Image, TouchableOpacity } from 'react-native';
import NavigationBar from '../NavigationBar';
import Coin from '../Coin';
import Button from '../Button';
var styles = require('../styles');
export default class HomePage extends Component {
  render() {
    console.log("won: "+this.props.won);
    var imageStyle = [{top:15,width:180,height:180, borderRadius:30, borderWidth:1,borderColor:"#003838"}];
    var nameStyle = [styles.lobbyText,{fontWeight:"bold",top:20,fontSize:35,color:"#c7c7c7"}];
    var won = this.props.won;

    var bgColor = won?"#660002":"#ab151c";
    var topMsg = won?"YOU BOTH WON!":"YOU BOTH LOST.."
    var pic = this.props.friend.pic;
    return (
      <View style={[styles.body,{backgroundColor:"#006666"}]}>
        <View style={{width:360,height:50,backgroundColor:bgColor, justifyContent:"center",flexDirection:"row"}}>
        <Text style={[styles.lobbyText,{fontSize:28,top:5,color:"#fafafa"}]}>{topMsg}</Text>
        </View>
        <Image style={imageStyle} source={this.props.friend.pic}/>
        <Text style={nameStyle}>{this.props.friend.name+" ("+this.props.friend.wins+")"}</Text>
        <View style={[styles.buttonContainer,{top:110}]} >
        <Button text="Offer Rematch" tint="bright" onclick={()=>{}}/>
        <Button text="+ Friend Request"  onclick={()=>{}}/>
        <Button text="Leave" tint="pale" onclick={()=>{}}/>
        </View>
      </View>
      )
  }
}
