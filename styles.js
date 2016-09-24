'use strict';

import {
  StyleSheet
 } from 'react-native';

module.exports = StyleSheet.create({
	body:{
		backgroundColor:"#006666",
		flex:1,
		alignItems:"center",
    position: "relative"
	},
	navigationView:{
		backgroundColor:"#004647",
		width: 360,
		height: 55,
		position: "relative"
	},
	backBtn:{
		height:30,
		width:30,
		left:10,
		top:12,
		position: "absolute",
		zIndex: 5
	},
	backTouch:{
		width:100,
		height:50
	},
	centerTitle:{
		top:9,
		left:10,
		height:40,
		width:250
	},
	arrowTitle:{
		right:20,
		top:9,
		height:40,
		width:250,
		position: "absolute"
	},
	fullCenter:{
		alignItems:'center',
		backgroundColor:"#004647",
		width: 360,
		height: 55,
	},
	coin:{
		width:200,
		height:200,
	},
  smallCoin:{
    width:75,
    height:75,
  },
	center:{
		top:30,
		alignItems:'center'
	},
	button:{
		alignItems: 'center',
		backgroundColor: "#007556",
		paddingLeft:1,
		paddingRight:1,
		paddingTop:10,
		paddingBottom:10,
		borderRadius: 5
	},
  buttonRow:{
    width:340,
    flexDirection:"row",
    justifyContent: 'space-between',
    height:110,
    top:130
  },
  buttonColumn:{

  },
	buttonBottom:{
		backgroundColor: "#00523d",
		top:5,
		left:0,
		zIndex:0,
		position: "absolute",
		paddingLeft:135,
		paddingRight:135,
	},
	buttonContainer:{
		top:60,
		justifyContent: 'space-between',
		height:200,
	},
	inputContainerSignUp:{
		top:50,
		justifyContent: 'space-between',
		height:275,
	},
  inputContainerLogin:{
    top:65,
    justifyContent: 'space-between',
    height:175,
  },
	buttonText:{
		fontSize:27,
		fontWeight:'bold',
		fontFamily: "Trebuchet",
		color:"#FDF5D3",
		textAlign: 'center',
		width:270,
	},
	paleButton:{
		backgroundColor: "#437a53",
	},
	paleBottom:{
		backgroundColor: "#3f6645",
	},
  brightButton:{
    backgroundColor: "#498f36",
  },
  brightBottom:{
  	backgroundColor: "#467a1f",
  },
  redButton:{
		backgroundColor: "#660200",
    width:180,
    height:42,
    left:95,
    top:9,
	},
	redBottom:{
		backgroundColor: "#360000",
    width:50,
    height:42,
    left:95,
    top:13,
    paddingLeft:0,
    paddingRight:0
	},
  smallBtn:{
    width:180,
    height:42,
  },
  smallBtnTxt:{
    top:-3,
    fontSize:21
  },
	fbButton:{
		backgroundColor: "#005a7a",
	},
	fbBottom:{
		backgroundColor: "#004269",
	},
	fbText:{
		left:18
	},
	buttonImage:{
		width:30,
		height:30,
		position:"absolute",
		top:14,
		left:50,
	},
	inlineView:{
		 flexDirection: 'row',
		 justifyContent: 'space-between',
	},
	pressedBtn:{
		top:5,
		opacity:.5
	},
  pressedSmall:{
    top:14,
    opacity:.5,
  },
	defaultInputView:{
		borderRadius: 10,
		paddingTop:0,
		paddingBottom:0,
		paddingLeft:15,
		paddingRight:15,
		backgroundColor: "#e3e3e3",
		marginHorizontal: 20,
	  borderColor: 'black',
		borderWidth: 1,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 10,
    shadowOpacity: 1.0,
    alignItems:"center",
	},
	defaultInput:{
		fontSize:20,
		fontWeight:'bold',
		fontFamily: "Trebuchet",
		textAlign: 'center',
		width:240,
		paddingTop:5,
		paddingBottom:5,
		color:"#b3b3b3",
	},
  searchInput:{
    fontSize:20,
    fontWeight:'bold',
    fontFamily: "Trebuchet",
    textAlign: 'center',
    width:300,
    paddingTop:5,
    paddingBottom:5,
    color:"#b3b3b3",
  },
  searchInputView:{
		borderRadius: 20,
		paddingTop:0,
		paddingBottom:0,
		paddingLeft:15,
		paddingRight:15,
		backgroundColor: "white",
		marginHorizontal: 20,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 10,
    shadowOpacity: 1.0,
    alignItems:"center",
	},
	defaultInputFocus:{
		color:"black",
	},
	clearDivActive:{
		width:270,
		height:48,
		backgroundColor:"red",
		position:"absolute",
		zIndex:2,
		opacity:.01
	},
	clearDivHidden:{
		width:270,
		height:48,
		backgroundColor:"red",
		position:"absolute",
		zIndex:-1,
		opacity:.01
	},
	submitBtn:{
		top:15,
		left:20,
		width:270,
	},
	nothing:{

	},
  invisibleText:{
    color: "#e3e3e3",
  },
  passwordOverlayText:{
    top:4,
    fontSize:22,
    zIndex:5,
    fontWeight:"bold",
    position:"relative",
    alignItems:"center",
    textAlign:"center",
    flexDirection:"row",
  },
  hiddenPassTextView:{
    width:272,
    height:48,
    position:"absolute",
    zIndex:2,
    opacity:1,
    left:21,
    alignItems:"center",
    flexDirection:"row",
    textAlign:"center",
    justifyContent: 'center',

  },
  startPageButtonContainers:{
    height:270
  },
  lobbyText:{
    color:"#abc2c0",
    fontWeight:"bold",
    fontFamily:"Trebuchet",
    textShadowColor:"#171f1f",
    textShadowOffset:{width:1,height:1},
    textShadowRadius:10,

  },
  smallText:{
    fontSize:20,
  },
  mediumText:{
    fontSize:25,
  },
  largeText:{
    fontSize:60,
  },
  disp:{
    backgroundColor:"red"
  },
  waitContainer:{
    height:105,
  },
  lobbyTextView:{
    //backgroundColor:"red",
    top:0,
    bottom:0,
    alignItems:'center',
  },
  searchBarView:{
    top:10,

  },
  friendResultContainer:{
    top:30,
    backgroundColor:"#1e9e9e",
    padding:10,
    borderRadius:4
  },
  friendResultDiv:{
    backgroundColor:"#e8fffd",
    width:310,
    height:90,
    borderRadius:5,
    marginBottom:14,
    paddingLeft:7
  },
  boxShadowTitle:{
    width:80,
    height:80,
    top:5,
    left:5,
    position:"absolute",
    zIndex:5,
  },
  friendImageDiv:{

  },
  friendTextDiv:{
    right:0,
  },
  friendNameText:{
    fontSize:20,
    fontWeight:"bold",
    fontFamily:"Trebuchet",
    left:95,
    top:8,
    color:"#006666",
  },
  numWins:{
    position:"absolute",
    fontFamily:"Trebuchet",
    fontWeight:"bold",
    fontSize:25,
    top:78,
    left:86,
  },
  faded:{
    opacity:.35,
  },
  achieveTextView:{
    position:"absolute",
    width:360,
    top:300,
    backgroundColor:"#005757",
    alignItems:"center",
    flexDirection:"row",
    justifyContent: 'center',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:60,
    paddingRight:60,
  },
  achieveContainer:{
    height:600,
  },
  break:{
    top:80,
  },
  gameBGColor:{
    backgroundColor:"#c2eded",
  //  backgroundColor: "#c9f5f5",
  },
  guestBarView:{
    backgroundColor: "#2f4f4d",
    width:360,
    height:65,
    flexDirection:"row",
    justifyContent:"center",
  },
  guestText:{
    fontSize:35,
    fontFamily:"Trebuchet",
    fontWeight:"bold",
    textShadowColor:"#171f1f",
    textShadowOffset:{width:1,height:1},
    textShadowRadius:10,
    color:"#cfcfcf",
    top:10,
  },
  smallerGuestText:{
    fontSize:25,
    top:18
  },
  guestBarShadow:{
    width:360,
    height:6,
    backgroundColor: "#13453e",
  },
  guestBarImage:{
    width:55,
    height:55,
    top:7,
    marginRight:20,
  },
  guestCircleShadow:{
    width:63,
    height:63,
    top:2,
    left:-5,
    position:"absolute",
    zIndex:5,
  },
  inputView:{
    position:"absolute",
    zIndex:69,
    width:360,
    height:70,
    top:5,
    backgroundColor:"#2f4f4c",
  },
  inputBoxShadow:{
    position:"absolute",
    width:360,
    height:10,
    backgroundColor: "#13453e",
  },
  gameInputView:{
    top:8,
    borderRadius:22,
    width:342,
    left:-12,
    padding:0,
    height:48,
  },
  gameInputText:{
    color:"#b4b8b8",
    fontSize:28,
    margin:0,
    padding:0,
    top:-6,
  },
  gameTextInputFocus:{
    color:"#2f3030",
    fontSize:28,
    margin:0,
    padding:0,
    top:-6,
  },
  timeBar:{
    backgroundColor:"red",
    position:"absolute",
    width:360,
    height:10,
    zIndex:3,
  },
  timeBarBG:{
    backgroundColor:"white",
    position:"absolute",
    width:360,
    height:10,
    zIndex:1,
  },
  timeBarContainer:{
    position:"absolute",
    width:360,
    height:10,
    top:535,
    zIndex:1000,
  },
  wordContainer:{
    width:360,
    height:70,
    top:470,
    left:0,
    position:"absolute",
    zIndex:5,
    backgroundColor:"#bae6e6"
  },
  onTop:{
    position:"absolute",
    zIndex:99999
  },
  centerContent:{
    position:"absolute",
    left:0,
    top:172,
    zIndex:999,
    height:70,
    paddingRight:10,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:0,
    width:200,
  },
  centerGuestContent:{
//    backgroundColor:"rgba(255,0,0,.2)",
    position:"absolute",
    left:0,
    top:0,
    zIndex:999,
    height:240,
    paddingRight:10,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:0,
    width:200,
  },
  bubbleStyle:{
    position:"absolute",
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5,
    borderRadius:10,
    backgroundColor:"#e69100",

  },
  bubbleShadow:{
    position:"absolute",
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5,
    borderRadius:10,
    top:13,
    left:2,
    backgroundColor:"#a16000",
  },
  bubbleTextStyle:{
    fontSize:28,
    fontFamily:"Trebuchet",
    fontWeight:"bold",
  },
  bubbleContainer:{
    position:"absolute",
    width:180,
    height:240,
    right:0,
  },
  bubblePastContainer:{
    backgroundColor:"#9dd692",
    position:"absolute",
    right:180,
    top:0,
    width:150,
    padding:5,
    height:240,
    flex:1,
    flexWrap: 'wrap',
    flexDirection:"row",
    justifyContent: 'flex-end'
  },
  fullBubbleContainer:{
  //  backgroundColor: "#c9f5f5",
  //  backgroundColor:"#c2eded",
    position:"absolute",
    zIndex:1,
    top:305,
    left:0,
    width:360,
    height:235,
    flexDirection:"row",
  },
  fullGuestBubbleContainer:{
  //  backgroundColor: "#c9f5f5",
  //  backgroundColor:"#c2eded",
    position:"absolute",
    zIndex:1,
    top:100,
    left:0,
    width:360,
    height:235,
    flexDirection:"row",
  },
  guestTypeContainer:{
    position:"absolute",
    top:70,
    left:0,
    zIndex:999,
    width:360,
    backgroundColor:"#c2eded",
  },
  guestTypeText:{
    fontSize:20,
    fontFamily:"Trebuchet",
    fontWeight:"bold",
    color:"#75999c",

  },
  hiddenGameText:{
    color:"#c9f5f5"
  },
  centerInputBar:{
  //  backgroundColor:"red",
    flexDirection:"row",
    justifyContent:"center",
    top:14,
  },
  inputBarText:{
    fontSize:26,
    fontFamily:"Trebuchet",
    color:"#f7ffff",
    fontWeight:"bold",
    textShadowColor:"#171f1f",
    textShadowOffset:{width:1,height:1},
    textShadowRadius:10,

  },
  gameBody:{
    backgroundColor:"transparent",
		flex:1,
    position: "relative"
  },
  flasher:{
    width:360,
    height:620,
    position:"absolute",
    backgroundColor:"#c9f5f5",
    zIndex:0,
  }

});
