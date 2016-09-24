import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
 } from 'react-native';

import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import StartPage from './Pages/StartPage';
import GameSettingsPage from './Pages/GameSettingsPage';
import LobbyAnyPage from './Pages/LobbyAnyPage';
import LobbyMakePage from './Pages/LobbyMakePage';
import LobbyJoinPage from './Pages/LobbyJoinPage';
import FriendsPage from './Pages/FriendsPage';
import AchievementsPage from './Pages/AchievementsPage';
import InstructionsPage from './Pages/InstructionsPage';
import GamePage from './Pages/GamePage';

var styles = require('./styles');

class AwesomeProject extends Component {

  render() {
    return (
       <Navigator
          initialRoute={{
            page: "GamePage",
            data:{ id: 1, name: 'Tai Lopez', wins: '27', pic: require('./images/tai.png') }
        }}
          renderScene={(route, navigator) => {

          navigate = function(p,d){
            if(p === "LogOut"){
              navigator.popToTop();
            }else{
              navigator.push({
                  page: p,
                  data:d
                });
            }
          };

          back = function(){
              navigator.pop();
          };

          switch(route.page){
            case "Home":
                return (<HomePage nav={navigate}/>);
            case "Login":
                return (<LoginPage nav={navigate} back={back}/>);
            case "SignUp":
                return (<SignUpPage nav={navigate} back={back}/>);
            case "StartPage":
                return (<StartPage nav={navigate} back={back}/>);
            case "GameSettings":
                return (<GameSettingsPage nav={navigate} back={back}/>);
            case "LobbyAny":
                return (<LobbyAnyPage nav={navigate} back={back}/>);
            case "LobbyFriend":
                return (<LobbyAnyPage nav={navigate} back={back} friend={route.data}/>);
            case "LobbyMake":
                return (<LobbyMakePage nav={navigate} back={back}/>);
            case "LobbyJoin":
                return (<LobbyJoinPage nav={navigate} back={back}/>);
            case "Challange":
                return (<FriendsPage nav={navigate} back={back}/>);
            case "Achievements":
                return (<AchievementsPage nav={navigate} back={back}/>);
            case "Instructions":
                return (<InstructionsPage nav={navigate} back={back}/>);
            case "GamePage":
                return (<GamePage nav={navigate} back={back} friend={route.data}/>);
            default:
                return(<StartPage nav={navigate} back={back}/>);
          }

        }}
    />
    )
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
