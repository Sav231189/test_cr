import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import candlestickImg from "../../images/candlestick.png";
import * as SVG from "react-native-svg"
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
						<SVG.Svg
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							width={51}
							height={51}
							viewBox="0 0 51 51"
							{...props}
						>
							<SVG.Image
								width={51}
								height={51}
								xlinkHref="data:image/png;base64,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"
							/>
						</SVG.Svg>
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
