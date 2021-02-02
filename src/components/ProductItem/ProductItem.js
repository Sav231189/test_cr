import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import candlestickImg from "../../images/candlestick.png";
import basket_addImg from "../../images/basket_add.png";
import {ProductSlider} from "./ProductSlider";

export function ProductItem(props) {
	return (
		<View style={styles.ProductItem}>
			<Image source={candlestickImg}/>
			<View style={styles.main}>
				<Text style={styles.title}>{props.title}</Text>
				<View style={styles.priceBlock}>
					<View style={styles.price}>
						<Text style={styles.priceText}>{props.price} ₽</Text>
						<ProductSlider />
					</View>
					<TouchableOpacity style={styles.basketBtn}>
						<Image source={basket_addImg}/>
					</TouchableOpacity>
				</View>
				<View style={styles.supInfo}>
					<Text style={styles.supInfoText}>Нужно выкупить:
						<Text style={styles.supInfoCountText}> {props.count} </Text>
					</Text>
					<Text style={styles.supInfoText}>Выкуплено:
						<Text style={styles.supInfoCountText}> {props.allCount} </Text>
					</Text>
				</View>
				<Text style={styles.code}>{props.code}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	ProductItem: {
		alignItems: 'center',
	},
	main: {
		width: '100%',
		paddingHorizontal: 24,
		borderTopWidth: 1,
		borderTopColor: '#393939',
	},
	title: {
		marginTop: 10,
		color: '#393939',
		// fontFamily: 'SF-UI-Text-Semibold',
		fontSize: 16,
		fontWeight: '400',
		textAlign: 'left',
	},
	priceBlock: {
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	price: {
		textAlign: 'left',
		maxWidth: '80%',
	},
	priceText: {
		color: '#393939',
		// fontFamily: 'SF-UI-Text-Semibold',
		fontSize: 20,
		fontWeight: '700',
		textAlign: 'left',
	},
	basketBtn: {},
	supInfo: {
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: '#393939',
		paddingBottom: 16,
	},
	supInfoText: {
		color: '#89888d',
		// fontFamily: 'SF-UI-Text-Semibold',
		fontSize: 12,
		fontWeight: '400',
		textAlign: 'left',
	},
	supInfoCountText: {
		color: '#393939',
		// fontFamily: 'SF-UI-Text-Semibold',
		fontSize: 12,
		fontWeight: '700',
		textAlign: 'left',
	},
	code: {
		paddingVertical: 13,
		color: '#89888d',
		// fontFamily: 'SF-UI-Text-Semibold',
		fontSize: 12,
		fontWeight: '400',
		textAlign: 'left',
	},
});
