/** @format */

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import useAuth from "./src/hooks/useAuth";

// auth
import AuthPanel from "./src/screens/Auth";
import Login from "./src/screens/Auth/Login";
import Register from './src/screens/Auth/register'
import Credentials from "./src/screens/Auth/register/Credentials";

// Home
import Home from "./src/screens/main"
const Stack = createStackNavigator();

function StackNavigation() {
	const { auth, isLogged } = useAuth();

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={"Auth"}>
				{isLogged ? (
					<>
            <Stack.Screen name="Home" component={Home}  options={{headerShown: false}}/>
          </>
				) : (
					<>
						<Stack.Screen
							name="Auth"
							component={AuthPanel}
							options={{ headerShown: false }}
						/>
						<Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Credentials" component={Credentials} />
 					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default StackNavigation;
