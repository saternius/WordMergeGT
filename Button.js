import React, { Component, PropTypes } from 'react';
import { View, Text,TouchableWithoutFeedback, TouchableHighlight,Navigator, Image, TouchableOpacity } from 'react-native';

var styles = require('./styles');

export default class Button extends Component {
	constructor(props) {
		super(props);
    	var ctx = this;
    	this.state = {pressed: false};
    	this.pressed = function(){
    		ctx.props.onclick();
    		ctx.setState({pressed:true});

    	}
    	this.released = function(){
				if(!ctx.props.willKillMe){
	    		setTimeout(function(){
	    			ctx.setState({pressed:false});
	    		},500);
				}
    	}
	}

  render() {
 	var tint;
 	var tintBottom;
 	var sideImage;
	var extraBottomStyle = styles.inlineView;
	var pressedConfirmStyle = styles.pressedBtn;
 	var btnTextStyle = [styles.buttonText];
  	switch(this.props.tint){
  		default:
  			break;
  		case "pale":
  			tint = styles.paleButton;
  			tintBottom = styles.paleBottom;
  			break;
			case "bright":
				tint = styles.brightButton;
				tintBottom = styles.brightBottom;
				break;
  		case "facebook":
  			tint = styles.fbButton;
  			tintBottom = styles.fbBottom;
  			sideImage = <Image style={styles.buttonImage} source={require('./images/fbIcon.png')}/>;
  			btnTextStyle.push(styles.fbText);
  			break;
			case "chal":
				tint = styles.redButton;
				tintBottom = styles.redBottom;
				extraBottomStyle = styles.smallBtn;
				btnTextStyle.push(styles.smallBtnTxt);
				pressedConfirmStyle = styles.pressedSmall;
				break;
  	}
  	var pressedStyle;
  	if(this.state.pressed){
  		pressedStyle = pressedConfirmStyle;
  	}



    return (
    	<View>
    	<View style={[styles.button, styles.buttonBottom, tintBottom, extraBottomStyle]}>
    		<Text style={btnTextStyle}>{" "}</Text>
    	</View>
    	<TouchableWithoutFeedback onPressIn={this.pressed} onPressOut={this.released}>
	   			<View style={[styles.button, tint, extraBottomStyle,pressedStyle]}>
		    		{sideImage}
		    		<Text style={btnTextStyle}>{this.props.text}</Text>
	    		</View>
    	</TouchableWithoutFeedback>
    	</View>

      )
  }
}
