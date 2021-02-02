import React from 'react';
import backImg from '../../images/backImg.png'
import {View,StyleSheet,Text,TouchableOpacity,Image} from "react-native";

export const Header = (props) => {
	return (
		<View style={styles.Header}>
			<TouchableOpacity style={styles.backBtn} onPress={()=>{}}>
				<Image style={styles.backImg} source={backImg}/>
			</TouchableOpacity>
			<Text style={styles.title}>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	Header: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		height: 72,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'center',
		backgroundColor: '#ff3200',
		paddingBottom: 12,
	},
	backBtn: {
		position: "absolute",
		left: 20,
		top: 40,
		width: 18,
		height: 18,
	},
	backImg: {
		width: '100%',
		height: '100%',
	},
	title: {
		color: '#ffffff',
		// fontFamily: 'SF-UI-Text-Semibold',
		fontSize: 16,
		fontWeight: '400',
	}
});
