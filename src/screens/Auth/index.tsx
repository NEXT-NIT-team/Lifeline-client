/** @format */

import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import Button from "../../component/Button";
import colors from "../../theme/colors";
import BaseSafeAreaView from "../../component/BaseSafeAreaView";

const AuthPanel = ({
  navigation,
  router,
}: any
// {
//   navigation: NavigationProp<ReactNavigation.RootParamList>;
//   router: RouteProp<ParamListBase>;
// }
) => {
	return (
		<BaseSafeAreaView style={styles.container}>
			<Text style={styles.headline}>Welcome to Life-Line</Text>
			<Image source={require("../../../assets/illustrator/authBanner.png")} />
			<View style={styles.actions}>
				<Button title="Login" onPress={() => navigation.navigate("Login")} />
				<Button
					title="Register"
					type="secondary"
					onPress={() => navigation.navigate("Register")}
				/>
			</View>
		</BaseSafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 24,
		gap: 12,
	},
	headline: {
		fontSize: 24,
		textAlign: "center",
		fontWeight: "bold",
		color: colors.primary,
	},
  actions: {
    width: "75%",
    alignSelf: "center",
    gap: 4
  },
});

export default AuthPanel;
