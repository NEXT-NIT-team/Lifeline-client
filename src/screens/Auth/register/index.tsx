/** @format */

import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Text from "../../../component/Text";
import BaseSafeAreaView from "../../../component/BaseSafeAreaView";

import { FontAwesome } from "@expo/vector-icons";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import colors from "../../../theme/colors";
import Button from "../../../component/Button";
const Index = ({ navigation }) => {
	const [isMale, setIsMale] = useState<boolean>(true);
	const [date, setDate] = useState<Date>(new Date());
	const [height, setHeight] = useState<number>(0);
	const [weight, setWeight] = useState<number>(0);

	const showDatePicker = async () => {
		DateTimePickerAndroid.open({
			value: date,
			onChange(event, Date) {
				if (event.type === "dismissed") {
					return;
				}
				setDate(Date!);
			},
		});
	};

	const handleContinue = () => {
		navigation.navigate("Credentials", { isMale, dob: date, height, weight });
	};

	return (
		<BaseSafeAreaView style={styles.container}>
			<View style={styles.main}>
				<Text style={styles.headline}>A little about yourself</Text>
				<View style={styles.genderSection}>
					<Text style={styles.title}>Your Gender</Text>
					<View style={styles.genderActions}>
						<TouchableOpacity
							style={[styles.actionButton]}
							onPress={() => setIsMale(true)}
						>
							<View
								style={[
									styles.buttonIcon,
									{ backgroundColor: isMale ? colors.primary : colors.white },
								]}
							>
								<FontAwesome
									name="male"
									size={24}
									color={isMale ? colors.white : colors.text}
								/>
							</View>
							<Text
								style={[
									styles.buttonLabel,
									{ color: isMale ? colors.primary : colors.text },
								]}
							>
								Male
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={[styles.actionButton]}
							onPress={() => setIsMale(false)}
						>
							<View
								style={[
									styles.buttonIcon,
									{ backgroundColor: !isMale ? colors.primary : colors.white },
								]}
							>
								<FontAwesome
									name="female"
									size={24}
									color={!isMale ? colors.white : colors.text}
								/>
							</View>
							<Text
								style={[
									styles.buttonLabel,
									{ color: !isMale ? colors.primary : colors.text },
								]}
							>
								Female
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View>
					<Text style={styles.title}>Your birthday</Text>
					<TouchableOpacity
						onPress={() => {
							showDatePicker();
						}}
					>
						<Text>{date.toString()}</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.input}>
					<Text type="secondary" style={styles.label}>
						Height
					</Text>
					<TextInput
						value={height.toString()}
						onChangeText={(value) => setHeight(parseInt(value) || 0)}
						keyboardType="numeric"
						placeholder="cm"
					/>
				</View>
				<View style={styles.input}>
					<Text type="secondary" style={styles.label}>
						Weight
					</Text>
					<TextInput
						value={weight.toString()}
						onChangeText={(value) => setWeight(parseInt(value) || 0)}
						keyboardType="numeric"
						placeholder="kg"
					/>
				</View>
			</View>
			<Button title="continue" onPress={handleContinue} />
		</BaseSafeAreaView>
	);
};

const styles = StyleSheet.create({
	headline: {
		fontSize: 28,
		fontWeight: "400",
		textAlign: "center",
	},
	container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    gap: 12,
  },
	main: {
    gap: 24
  },
	genderSection: {
		gap: 8,
	},
	title: {
		fontSize: 18,
		fontWeight: "600",
	},
	genderActions: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	actionButton: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
		backgroundColor: colors.gray,
		padding: 8,
		borderRadius: 18,
	},
	buttonIcon: {
		padding: 24,
		borderRadius: 13,
	},
	buttonLabel: {
		fontSize: 18,
		fontWeight: "600",
	},
	input: {},
	label: {
		fontSize: 16,
		fontWeight: "500",
	},
});

export default Index;
