import * as React from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from "react-native";
import Svg, { Image } from "react-native-svg"
import * as RootNavigation from "../../../RootNavigation";

export const Header = (props) => {
	return (
		<View style={styles.Header}>
			<TouchableOpacity style={styles.backBtn} onPress={() => RootNavigation.goBack()}>
				<Svg
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					width={18}
					height={18}
					viewBox="0 0 18 18"
				>
					<Image
						width={18}
						height={18}
						xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABU0lEQVQ4T63UP6jPYRTH8ddHMhpsd5DZIInllsGfhYVEXTdlYDUoZbGKMhmsTBTFwGTxr4wk2WwWl9UoOTq/vr/b1+0n8vud7Tw9z/ucz/N5zhMboqo24ThO4SCWhi1reIGHeJzk5/hoxklV7cUd7MJLPMWnYc8OHMEBfMC5JG+n59dBVXUMD/AGF5K839ht51W1G7ewDytJnvT6BDR08npo+3yS77Mg07Wq2oLbg/z93VmGO3mHbzg8C1JVXXAnPib5MRRv2DNsxZ4GncCjSTJDTlVtw10cxbUkV0adtcxu4mSD7rUzSQ7NcHB5uLftaJfOJun961FVz7HWoM+4meTGqFJLuYTr2IyvOJOkpfwWVXUZFxtUOJ2kHZtEVV3FVEI/g9UkX/7g4gru/wvo1VDor6CFSVvYZS/M/h7S+R/kwkZkZPn8QzuCzf+NjGD/9bH9AvaK4a8xA5hhAAAAAElFTkSuQmCC"
					/>
				</Svg>
			</TouchableOpacity>
			<Text style={styles.title}>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	Header: {
		// position: 'absolute',
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
		left: 5,
		top: 25,
		width: 48,
		height: 48,
		justifyContent: 'center',
		alignItems: 'center'
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
