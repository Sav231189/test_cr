import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native'
import {Timer} from "../Timer/Timer";
import {ProductItem} from "../ProductItem/ProductItem";

export function Main(props) {
	return (
		<View style={styles.Main}>
			<Timer dataEnd={'02/05/2021 00:00:00 AM'}/>
			<ScrollView style={styles.content} >
				<ProductItem title='Подсвечник на 3 свечи бронза 25 см'
										 code="Арт./Код: 668093" price='724,50'
										 count='100' allCount='300'
				/>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	Main: {
		flex: 1,
		marginVertical: 72,
	},
	content: {
		width: '100%',
		backgroundColor: '#fff',
	},
});

