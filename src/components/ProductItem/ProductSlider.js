import React,{useRef,useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export function ProductSlider() {
	let arr = [
		{price: '600', number: 'more'},
		{price: '700', number: 'more'},
		{price: '200', number: 'more'},
		{price: '200', number: 'more'},
		{price: '200', number: 'more'},
		{price: '200', number: 'more'},
		{price: '200', number: 'more'},
	];

	const [x,setX] = useState(0);
	const leftArrow = useRef(null);

	const leftArrowClick = () => {
		leftArrow.current.scrollTo({x: x-85, y: 0, animated: true,});};
	const rightArrowClick = () => {
		leftArrow.current.scrollTo({x: x+85, y: 0, animated: true,});};


	return (
		<View style={styles.ProductSlider}>
			<TouchableOpacity onPress={leftArrowClick}>
				<View style={styles.leftArrow}  />
			</TouchableOpacity>
			<ScrollView onMomentumScrollEnd={(e)=>setX(e.nativeEvent.contentOffset.x)} ref={leftArrow} style={styles.slider} snapToInterval={85} horizontal={true} disableIntervalMomentum={true}>
				{arr.map((el,index) => {
					return <View key={index} style={styles.sliderItem}>
						<Text >{el.price}</Text>
						<Text >{el.number}</Text>
					</View>
				})}
			</ScrollView>
			<TouchableOpacity onPress={rightArrowClick}>
				<View style={styles.rightArrow}/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	ProductSlider: {
		marginTop: 10,
		height: 42,
		flexDirection: 'row',
	},
	leftArrow: {
		height: '100%',
		width: 12,
		borderTopWidth: 21,
		borderBottomWidth: 21,
		borderStyle: 'solid',
		borderColor: 'transparent',
		borderRightWidth: 12,
		borderRightColor: '#e6e6e6',
		marginRight: 5,
	},
	slider: {
		flexDirection: 'row',
	},
	sliderItem: {
		minWidth: 75,
		paddingHorizontal: 18,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#e6e6e6',
		marginHorizontal: 5,
	},
	rightArrow: {
		height: '100%',
		width: 12,
		borderTopWidth: 21,
		borderBottomWidth: 21,
		borderStyle: 'solid',
		borderColor: 'transparent',
		borderLeftWidth: 12,
		borderLeftColor: '#e6e6e6',
		marginLeft: 5,
	},
});
