/** @format */

import React, { useState } from "react";
import {
	StyleSheet,
	TextInput,
	View,
	Image,
	TouchableOpacity,
} from "react-native";
import BaseSafeAreaView from "../../component/BaseSafeAreaView";
import { ScrollView } from "react-native-gesture-handler";

import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../theme/colors";
import Text from "../../component/Text";

const messages = [
	{
		content: "Hello, how are you feeling? Did you manage to buy medicines?",
		isBotMessage: true,
		hasAttachement: false,
		attachement: undefined,
	},
	{
		content: "Hello, yes. Only now my headaches have intensified",
		isBotMessage: false,
		hasAttachement: false,
		attachement: undefined,
	},
	{
		content: "Please describe your pain",
		isBotMessage: true,
		hasAttachement: false,
		attachement: undefined,
	},
	{
		content: undefined,
		isBotMessage: false,
		hasAttachement: true,
		attachement: require("../../../assets/skinpimple.jpg"),
	},
	{
		content: undefined,
		isBotMessage: false,
		hasAttachement: true,
		attachement: require("../../../assets/voiceMessage.jpg"),
	},
	{
		content:
			"You have an appointment on /05/26/24 at 12:00 AM with Dr. Floyd Miles",
		isBotMessage: true,
		hasAttachement: false,
		attachement: undefined,
	},
];

const ChatBot = ({navigation}) => {
	const [message, setMessage] = useState([]);

	return (
		<BaseSafeAreaView>
			<ScrollView style={{ height: "85%" }}>
				{messages.map((m, index) => (
					<View
						style={{
							flexDirection: m.isBotMessage ? "row" : "row-reverse",
							marginBottom: 24,
							gap: 12,
							alignItems: "flex-end",
						}}
					>
						<Image
							source={
								m.isBotMessage
									? require("../../../assets/chatAssistance.jpg")
									: require("../../../assets/user_avatar.jpg")
							}
							style={{ borderRadius: 9999, width: 48, height: 48 }}
						/>
						{m.hasAttachement ? (
							<Image source={m.attachement} style={{}} />
						) : (
							<Text
								style={{
									width: "65%",
									backgroundColor: m.isBotMessage ? colors.blue : colors.white,
									padding: 16,
									borderRadius: 25,
								}}
							>
								{m.content}
							</Text>
						)}
					</View>
				))}
			</ScrollView>
			<TouchableOpacity onPress={() => navigation.navigate("appointements")}>
				<Text
					style={{
						textAlign: "center",
						textDecorationStyle: "solid",
						textDecorationColor: colors.blue,
						color: colors.blue,
						textDecorationLine: "underline",
					}}
				>
					go to appointement page
				</Text>
			</TouchableOpacity>
			<View
				style={{
					width: "100%",
					height: "12%",
					justifyContent: "center",
				}}
			>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						gap: 12,
					}}
				>
					<TextInput
						value=""
						placeholder="How are u feeling today"
						style={{
							backgroundColor: colors.gray,
							fontSize: 14,
							fontWeight: "500",
							paddingVertical: 12,
							paddingHorizontal: 8,
							borderRadius: 10,
							width: "60%",
						}}
					/>
					<View style={{ flexDirection: "row", gap: 8, width: "10%" }}>
						<TouchableOpacity>
							<FontAwesome
								name="microphone"
								size={22}
								color={colors.textGray}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Entypo name="attachment" size={22} color={colors.textGray} />
						</TouchableOpacity>
					</View>
					<TouchableOpacity>
						<MaterialCommunityIcons
							name="send"
							size={24}
							color="white"
							style={{
								backgroundColor: colors.primary,
								padding: 8,
								borderRadius: 25,
							}}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</BaseSafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default ChatBot;
