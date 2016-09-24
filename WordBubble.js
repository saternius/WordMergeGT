import React, { Component, PropTypes } from 'react';
import { View, Text,TouchableWithoutFeedback, TouchableHighlight,Navigator, Image, TouchableOpacity, StyleSheet } from 'react-native';

var styles = require('./styles');

export default class WordBubble extends Component {
	constructor(props){
			super(props);
			console.log("x: "+this.props.x);
			this.state = {
				x:this.props.x,
				y:this.props.y,
				fresh:this.props.fresh,
			}
			console.log("constructed.")
	}
  render() {
		var bubbleStyle = [styles.bubbleStyle];
		var bubbleShadow= [styles.bubbleShadow];
		var bubbleTextStyle = [styles.bubbleTextStyle];
		var containerStyle = [styles.bubbleContainer];
		var dStyle = StyleSheet.create({
			changePos: {
				position:"absolute",
				left: this.state.x,
				top: this.state.y,
			}
		});

		var bubblePosStyle = [styles.centerContent];
		bubblePosStyle.push(dStyle.changePos);

		console.log("rendered");
    return (
			<View style={containerStyle}>
	    	<View style={bubblePosStyle}>
					<View style={bubbleShadow} elevation={5}>
						<Text style={bubbleTextStyle}>{this.props.word}</Text>
					</View>

					<View style={bubbleStyle} elevation={6}>
		    		<Text style={bubbleTextStyle}>{this.props.word}</Text>
		    	</View>
	    	</View>
			</View>
      )
  }
}
