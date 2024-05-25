/** @format */

import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Text from "../../component/Text";
import BaseSafeAreaView from "../../component/BaseSafeAreaView";
import colors from "../../theme/colors";

const Appointement = () => {
	return (
		<BaseSafeAreaView>
			<View style={{height: "45%", backgroundColor: colors.primary, justifyContent: "center", alignItems: "center", gap: 8, borderBottomEndRadius}}>
				<Text style={{color: "white", fontSize: 25, fontWeight: "600", textAlign: "center"}}>Thank you</Text>
				<Text style={{color: "white", fontSize: 16, fontWeight: "400", textAlign: "center"}}>
					Your visit has been successfully reserved, please pay for it to get an
					appointment with the selected doctor
				</Text>
			</View>
			<View style={styles.doctorCard}>
				<View style={styles.doctorInfo}>
					<Image
						source={require("../../../assets/doctor_avatar.jpeg")}
						style={{ width: 40, height: 40, borderRadius: 6 }}
					/>
					<View>
						<Text style={styles.doctorName}>Dr. Floyd Miles</Text>
						<Text type="secondary" style={styles.doctorJob}>
							Pediatrics
						</Text>
					</View>
				</View>
				<Text style={styles.doctorReview}>(123 review)</Text>
			</View>
		</BaseSafeAreaView>
	);
};

const styles = StyleSheet.create({
  doctorCard: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 12,
		backgroundColor: colors.background,
		borderRadius: 14,
    marginBottom: 8
	},
	doctorInfo: {
		flexDirection: "row",
		gap: 8,
	},
	doctorName: {
		fontSize: 16,
		fontWeight: "400",
	},
	doctorJob: {
		fontSize: 14,
		fontWeight: "500",
	},
	doctorReview: {},
});

export default Appointement;
