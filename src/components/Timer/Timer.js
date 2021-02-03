import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from "react-native";
import timeImg from "../../images/time.png";

export function Timer(props) {

	const [remainingTime, setRemainingTime]
		= useState((new Date(props.dataEnd) - new Date().getTime()) / 1000);
	let days = remainingTime > 0 ? parseInt(remainingTime / 86400) : 0;
	let hours = remainingTime > 0 ? parseInt(remainingTime % 86400 / 3600) : 0;
	let minutes = remainingTime > 0 ? parseInt(remainingTime % 86400 % 3600 / 60) : 0;
	let seconds = remainingTime > 0 ? parseInt(remainingTime % 86400 % 3600 % 60) : 0;

	useEffect(() => {
		let timer = setInterval(() => setRemainingTime(prev => prev - 1), 1000);
		return () => clearInterval(timer)
	}, []);

	return (
		<View style={styles.Timer}>
			<Image style={styles.timeImg} source={timeImg}/>
			<View>
				<Text style={styles.timeTitle}>ОСТАЛОСЬ</Text>
				<Text style={styles.time}>{days} ДНЯ : {hours} ЧАСОВ : {minutes} МИНУТ : {seconds}  </Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	Timer: {
		height: 60,
		width: '100%',
		backgroundColor: '#ff6600',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	timeImg: {
		marginHorizontal: 20,
	},
	timeTitle: {
		color: '#ffffff',
		// fontFamily: 'SF-UI-Text-Semibold',
		fontSize: 10,
	},
	time: {
		color: '#ffffff',
		fontSize: 14,
	},
});
