import React, { Component, PropTypes } from 'react';
import { View, Text, ScrollView, TouchableHighlight,Navigator, Image, TouchableOpacity } from 'react-native';
import NavigationBar from '../NavigationBar';
import SearchInput from '../SearchInput';
import FriendResult from '../FriendResult';
var styles = require('../styles');
export default class LobbyAny extends Component {
  constructor(props){
    super(props);
    this.friends = [
        {id:0,name:"Richard Stallman",wins:"69",pic:require('../images/stall.png')},
        {id:1,name:"Tai Lopez",wins:"27",pic:require('../images/tai.png')},
    ]

  }
  render() {

    var makeChallange = (fid)=>{
      console.log("fid: "+fid);
      console.log(this.friends[fid]);
      this.props.nav("LobbyFriend",this.friends[fid]);
    }

    return (
      <View style={styles.body}>
        <NavigationBar back={()=>{return this.props.back()}}/>
        <View style={styles.searchBarView}>
          <SearchInput text="Search Friends" ref="search" fin={()=>{}} focusFunc={()=>{}} blurFunc={()=>{}}/>
        </View>
        <ScrollView style={styles.friendResultContainer}>
          {
            this.friends.map((item) => (
                <FriendResult pic={item.pic} key={item.id} name={item.name} wins={item.wins} onclick={()=>{makeChallange(item.id)}}/>
            ))
          }
          <Text style={styles.mediumText}> </Text>
        </ScrollView>
      </View>
      )
  }
}
