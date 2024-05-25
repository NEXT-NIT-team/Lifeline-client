/** @format */

import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "../../component/Text";
import useAuth from "../../hooks/useAuth";
import { TouchableOpacity } from "react-native-gesture-handler";
import BaseSafeAreaView from "../../component/BaseSafeAreaView";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import colors from "../../theme/colors";

import Home from "./Home";
import ChatBot from "./ChatBot";
import Appointements from './appointement'

const tabs = [
	{
		name: "main",
		iconName: "home",
		IconProvider: Ionicons,
	},
	{
		name: "chat",
		iconName: "chatbox-ellipses-outline",
		IconProvider: Ionicons
	},
	{
		name: "appointements",
		iconName: "newspaper-outline",
		IconProvider: Ionicons
	}
];

const Tab = createBottomTabNavigator();

const Index = () => {
	const { clear } = useAuth();

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {

					const index = tabs.findIndex((t) => t.name == route.name);
					const { iconName, IconProvider } = tabs[index];
					return <IconProvider name={iconName} color={color} size={size} />;
				},
				tabBarActiveTintColor: colors.primary,
				tabBarInactiveTintColor: "gray",
				tabBarShowLabel: false,
			})}
		>
			<Tab.Screen name="main" component={Home} options={{headerShown: false}} />
			<Tab.Screen name="chat" component={ChatBot} options={{headerShown: false}} />
			<Tab.Screen name="appointements" component={Appointements} options={{headerShown: false}} />
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({});

export default Index;
