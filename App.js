import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {Header} from "./src/components/Header/Header";
import {Footer} from "./src/components/Footer/Footer";
import {Main} from "./src/components/Main/Main";
import {Basket, Home, Message, Profile} from "./src/components/fackComponent";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import {navigationRef} from './RootNavigation';

export default function App() {
	return (
		<NavigationContainer ref={navigationRef}>
			<StatusBar backgroundColor={'#ff3200'}/>
			<Header title='Получатель'/>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{title: '', headerShown: false, animationEnabled: false}}

				/>
				<Stack.Screen
					name="Main"
					component={Main}
					options={{title: '', headerShown: false, animationEnabled: false}}
				/>
				<Stack.Screen
					name="Message"
					component={Message}
					options={{title: '', headerShown: false, animationEnabled: false}}
				/>
				<Stack.Screen
					name="Basket"
					component={Basket}
					options={{title: '', headerShown: false, animationEnabled: false}}
				/>
				<Stack.Screen
					name="Profile"
					component={Profile}
					options={{title: '', headerShown: false, animationEnabled: false}}
				/>
			</Stack.Navigator>
			<Footer/>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
});
