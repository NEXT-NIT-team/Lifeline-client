/** @format */

import React, { ReactNode } from "react";
import {
	StyleSheet,
	SafeAreaView,
	StyleProp,
	ViewStyle,
	ScrollView,
} from "react-native";
import colors from "../theme/colors";
import BaseSafeAreaView from "./BaseSafeAreaView";

const BaseScrollView = ({
	children,
	style,
	...props
}: {
	children?: ReactNode;
	style?: StyleProp<ViewStyle>;
}) => {
	return (
		<BaseSafeAreaView>
			<ScrollView {...props} style={styles.container}>{children}</ScrollView>
		</BaseSafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.baseBackground,
		paddingHorizontal: 24,
		paddingVertical: 16,
	},
});

export default BaseScrollView;
