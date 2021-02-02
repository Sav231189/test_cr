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
			<TouchableOpacity style={styles.homeBtn} onPress={() => {}}>
				<Image source={homeImg}/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.listBtn} onPress={() => {}}>
				<Image source={listImg}/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.messageBtn} onPress={() => {}}>
				<Image source={messageImg}/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.basketBtn} onPress={() => {}}>
				<Image source={basketImg}/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.profileBtn} onPress={() => {}}>
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
	homeBtn:{},
	listBtn:{},
	messageBtn:{},
	basketBtn:{},
	profileBtn:{},
});
