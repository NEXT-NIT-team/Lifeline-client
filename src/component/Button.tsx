/** @format */

import {
	TouchableOpacity,
	TouchableOpacityProps,
	Text,
	StyleSheet,
} from "react-native";
import { useNavigation } from "expo-router";


import colors from "../theme/colors";

interface ButtonProps extends TouchableOpacityProps {
	type?: "default" | "secondary";
	title: string;
}

export default function Button({
	type = "default",
	title,
	...props
}: ButtonProps) {
	return (
		<TouchableOpacity
			{...props}
      onPress={props.onPress}
			style={[style.button, type == "default" ? style.primary : style.secondary, props.style]}
		>
			<Text style={[style.text, {color: type == "default" ? colors.white : colors.primary}]}>{title}</Text>
		</TouchableOpacity>
	);
}

const style = StyleSheet.create({
	text: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 16,
	},
	button: {
		borderRadius: 18,
		paddingVertical: 16,
		paddingHorizontal: 8,
	},
	primary: {
		backgroundColor: colors.primary,
		color: colors.white,
	},
  secondary: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
  }
});
