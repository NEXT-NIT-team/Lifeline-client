/** @format */

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TextInput from "../../../component/TextInput";
import Text from "../../../component/Text";
import BaseSafeAreaView from "../../../component/BaseSafeAreaView";
import colors from "../../../theme/colors";
import Button from "../../../component/Button";
import AuthAPI from "../../../api/auth";
import useAuth from "../../../hooks/useAuth";

const Credentials = ({ navigation, route }) => {
  const {set} = useAuth()
	const [firstname, setFirstname] = useState<string>("");
	const [lastname, setlastname] = useState<string>("");
	const [phoneNumber, setphoneNumber] = useState<string>("");
	const [email, setemail] = useState<string>("");
	const [password, setpassword] = useState<string>("");

	console.log(route.params);

	const handleSignIn = () => {
		AuthAPI.signup({
			details: route.params,
			firstname,
			lastname,
			tel: phoneNumber,
			email,
			password,
      role: "Client"
		})
    .then(data => set(data))
    .catch()
	};

	return (
		<BaseSafeAreaView style={styles.container}>
			<View style={styles.main}>
				<Text style={styles.headLine}>Sign Up</Text>
				<View style={styles.form}>
					<View style={styles.input}>
						<Text type="secondary" style={styles.label}>
							First name
						</Text>
						<TextInput
							value={firstname}
							onChangeText={setFirstname}
							placeholder="jan"
						/>
					</View>
					<View style={styles.input}>
						<Text type="secondary" style={styles.label}>
							Last name
						</Text>
						<TextInput
							value={lastname}
							onChangeText={setlastname}
							placeholder="kowalski"
						/>
					</View>
					<View style={styles.input}>
						<Text type="secondary" style={styles.label}>
							phone number
						</Text>
						<TextInput
							value={phoneNumber}
							onChangeText={setphoneNumber}
							keyboardType="number-pad"
							placeholder="0123456789"
						/>
					</View>
					<View style={styles.input}>
						<Text type="secondary" style={styles.label}>
							email
						</Text>
						<TextInput
							value={email}
							onChangeText={setemail}
							placeholder="example@xyz.com"
						/>
					</View>

					<View style={styles.input}>
						<Text type="secondary" style={styles.label}>
							password
						</Text>
						<TextInput
							value={password}
							onChangeText={setpassword}
							placeholder="my awsome password"
						/>
					</View>
				</View>
			</View>
			<Button title="Sign IN" onPress={handleSignIn} />
		</BaseSafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: "space-between",
		paddingHorizontal: 24,
		gap: 12,
	},
	main: {
		gap: 24,
	},
	headLine: {
		textAlign: "center",
		fontSize: 28,
		fontWeight: "bold",
		color: colors.primary,
		marginBottom: 8,
	},
	form: {
		gap: 8,
	},
	input: {},
	label: {
		fontSize: 16,
		fontWeight: "500",
	},
});

export default Credentials;
