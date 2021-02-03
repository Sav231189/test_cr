import React,{useRef,useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";
import leftArrowImg from '../../images/leftArrow.png'
import Svg, { Defs, ClipPath, Path } from "react-native-svg"


export function ProductSlider(props) {
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
		leftArrow.current.scrollTo({x: x-82, y: 0, animated: true,});};
	const rightArrowClick = () => {
		leftArrow.current.scrollTo({x: x+82, y: 0, animated: true,});};


	return (
		<View style={styles.ProductSlider}>
			<TouchableOpacity onPress={leftArrowClick} style={styles.arrowsLeft}>
				<Svg
					width={12}
					height={74}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="-1 -4 10 70"
					{...props}
				>
					<Defs>
						<ClipPath id="prefix__a">
							<Path d="M8 32V0L0 16z" fill="#fff" />
						</ClipPath>
					</Defs>
					<Path d="M8 32V0L0 16z" fill="#e6e6e6" />
					<Path
						d="M8 32v0V0v0L0 16v0z"
						fill="none"
						stroke="#e6e6e6"
						strokeMiterlimit={20}
						strokeWidth={2}
						clipPath='url("#a")'
					/>
				</Svg>
			</TouchableOpacity>
			<ScrollView onScroll={(e)=>setX(e.nativeEvent.contentOffset.x)} ref={leftArrow} style={styles.slider} snapToInterval={85} horizontal={true} disableIntervalMomentum={true}>
				{arr.map((el,index) => {
					return <View key={index} style={styles.sliderItem}>
						<Text >{el.price}</Text>
						<Text >{el.number}</Text>
					</View>
				})}
			</ScrollView>
			<TouchableOpacity onPress={rightArrowClick} style={styles.arrowsRight}>
				<Svg
					width={12}
					height={82}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 10 66"
				>
					<Defs>
						<ClipPath id="prefix__a">
							<Path d="M0 0v32l8-16z" fill="#fff" />
						</ClipPath>
					</Defs>
					<Path d="M0 0v32l8-16z" fill="#e6e6e6" />
					<Path
						d="M0 0v32l8-16v0z"
						fill="none"
						stroke="#e6e6e6"
						strokeMiterlimit={20}
						strokeWidth={2}
						clipPath='url("#a")'
					/>
				</Svg>
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
	slider: {
		flexDirection: 'row',
	},
	arrowsRight: {
		paddingRight: 15,
		paddingLeft: 5,
	},
	arrowsLeft: {
		paddingRight: 5,
		paddingLeft: 15,
		marginLeft: -20,
	},
	sliderItem: {
		width: 76,
		paddingHorizontal: 18,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#e6e6e6',
		marginHorizontal: 3,
	},
});
