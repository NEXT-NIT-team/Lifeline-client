/** @format */

import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigation from "./StackNavigator";

// contexts
import AuthProvider from "./src/contexts/AuthContext";
import { AxiosInterceptor } from "./src/api/utils";

export default function App() {
	LogBox.ignoreAllLogs()
	return (
		<SafeAreaProvider>
			<AuthProvider>
				<AxiosInterceptor>
					<StackNavigation />
				</AxiosInterceptor>
			</AuthProvider>
		</SafeAreaProvider>
	);
}
