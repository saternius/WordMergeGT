import React, { Component, PropTypes } from 'react';
import { View, Text,TouchableWithoutFeedback, TouchableHighlight,Navigator, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';

var styles = require('./styles');

export default class WordBubble extends Component {
	constructor(props){
			super(props);

			this.state = {
				x:this.props.x,
				y:this.props.y,
				fresh:this.props.fresh,
				xShift: new Animated.Value(0),
				yShift: new Animated.Value(0),
				color:this.props.color,
				shadowColor:this.props.shadowColor,
				hide: this.props.hide,
				guest:this.props.guest,
				shifted:false,
			}

			this.shifted = false;

			this.getBubbleWidth = ()=>{
				return this.bubbleWidth;
			}

			this.measureSize = (event)=>{
  			var {x, y, width, height} = event.nativeEvent.layout;
				this.bubbleWidth = width;

			}
	}
	componentDidMount() {
		var startPos = this.state.guest?-50:50;
		this.state.yShift.setValue(startPos);
		Animated.spring(
		 this.state.yShift,
		 {
			 toValue: this.state.y,
			 friction: 6,
		 }
		).start();
	}

  render() {

		var bubbleStyle = [styles.bubbleStyle,{backgroundColor:this.state.color}];
		var bubbleShadow= [styles.bubbleShadow,{backgroundColor:this.state.shadowColor}];
		var bubbleTextStyle = [styles.bubbleTextStyle];
		var containerStyle = [styles.bubbleContainer];
		var bubblePosStyle = this.props.guest?[styles.centerGuestContent]:[styles.centerContent];
		var wordDisp = this.state.hide?"?????":this.props.word;
		var pic = this.state.guest?require('./images/arrowHeadDown.png'):require('./images/arrowHeadUp.png');
		var picStyle = this.state.guest?{
			position:"absolute",
			width:20,
			height:20,
			left:23,
			top:51,
			zIndex:10,
		}:{
			position:"absolute",
			width:20,
			height:20,
			left:23,
			top:171,
			zIndex:10,
		};

	//	console.log(this.state.yShift._value+":"+this.state.xShift._value);
    return (
			<Animated.View style={[containerStyle,
				{
          transform: [
            {translateX: this.state.xShift},
						{translateY: this.state.yShift}
          ]
        }
			]}>
	    	<View style={bubblePosStyle}>
					<View onLayout={this.measureSize} style={bubbleShadow} elevation={5}>
						<Text style={bubbleTextStyle}>{wordDisp}</Text>
					</View>

					<View style={bubbleStyle} elevation={6}>
		    		<Text style={bubbleTextStyle}>{wordDisp}</Text>
		    	</View>
	    	</View>

				<View>
	    	<Image style={picStyle} source={pic}/>
	    	</View>
			</Animated.View>
      )
  }
}
