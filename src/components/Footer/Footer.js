import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import homeImg from '../../images/home.png'
import listImg from '../../images/list.png'
import messageImg from '../../images/message.png'
import basketImg from '../../images/list.png'
import profileImg from '../../images/profile.png'

export function Footer() {
	return (
		<View style={styles.footer}>
			<TouchableOpacity onPress={() => {}}>
				<Image source={homeImg}/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {}}>
				<Image source={listImg}/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {}}>
				<Image source={messageImg}/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {}}>
				<Image source={basketImg}/>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {}}>
				<Image source={profileImg}/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	footer: {
		height: 72,
		width: '100%',
		paddingHorizontal: 30,
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: "center",
		borderTopWidth: 1,
		borderTopColor: '#393939',
	},
});
