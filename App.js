import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {Header} from "./src/components/Header/Header";
import {Main} from "./src/components/Main/Main";
import {Footer} from "./src/components/Footer/Footer";

export default function App() {

	return (
		<View style={styles.container}>
			<StatusBar />
			<Header title='Получатель' />
			<Main	/>
			<Footer />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		minHeight: '100%',
	},
});
