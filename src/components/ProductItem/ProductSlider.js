import React from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";

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
	return (
		<View style={styles.ProductSlider}>
			<View style={styles.leftArrow}/>
			<ScrollView style={styles.slider} horizontal={true} disableIntervalMomentum={true}>
				{arr.map((el,index) => {
					return <View key={index} style={styles.sliderItem}>
						<Text >{el.price}</Text>
						<Text >{el.number}</Text>
					</View>
				})}
			</ScrollView>
			<View style={styles.rightArrow}/>
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
