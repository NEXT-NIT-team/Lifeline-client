/** @format */

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Text from "../../component/Text";
import BaseSafeAreaView from "../../component/BaseSafeAreaView";
import TextInput from "../../component/TextInput";
import colors from "../../theme/colors";
import Button from "../../component/Button";
import {
	NavigationProp,
	ParamListBase,
	RouteProp,
} from "@react-navigation/native";
import AuthAPI from '../../api/auth'
import useAuth from "../../hooks/useAuth";

const Login = ({
	navigation,
	router,
}: any
// {
// 	navigation: NavigationProp<ReactNavigation.RootParamList>;
// 	router: RouteProp<ParamListBase>;
// }
) => {

	const {set} = useAuth()

  const [email, setemail] = useState<string>("manipulatorrika@gmail.com")
  const [password, setPassword] = useState<string>("123456789Rika")
  const [errorMessage, setErrorMessage] = useState<string>("")

	const handleSubmit = () => {
    AuthAPI.login({email, password})
		.then(e => {
			set(e)
		})
		.catch(e => console.log(e))
  };

	return (
		<BaseSafeAreaView style={styles.container}>
			<View style={styles.main}>
				<Text style={styles.headLine}>Sign In</Text>
				<View style={styles.form}>
					<View style={styles.input}>
						<Text type="secondary" style={styles.label}>
							Email
						</Text>
						<TextInput value={email} onChangeText={setemail} placeholder="example@xyz.com" />
					</View>
					<View style={styles.input}>
						<Text type="secondary" style={styles.label}>
							Password
						</Text>
						<TextInput
							value={password}
              // onChange={setPassword}
							onChangeText={setPassword}
							secureTextEntry={true}
							placeholder="ex: i'mawsome"
						/>
					</View>
				</View>
			</View>

			<View style={styles.actions}>
				<Button title="Sign In" onPress={handleSubmit} />
				<View style={styles.SignUpLink}>
					<Text type="secondary">Don't have an account? </Text>
					<Text style={styles.link}>Sign Up</Text>
				</View>
			</View>
		</BaseSafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		gap: 8,
	},
	headLine: {
		textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 8,
	},
  main: {},
  form: {
    gap: 8
  },
  input: {

  },
  label: {
    fontSize: 16,
    fontWeight: "500"
  },
  actions: {
  },
  SignUpLink: {
    flexDirection: "row",
    alignSelf: "center"
  }, 
  link: {
    color: colors.primary
  }
});

export default Login;
