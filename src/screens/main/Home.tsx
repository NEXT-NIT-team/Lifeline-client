/** @format */

import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import BaseScrollView from "../../component/baseScrollview";
import useAuth from "../../hooks/useAuth";
import Text from "../../component/Text";
import colors from "../../theme/colors";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
	const { auth } = useAuth();

	return (
		<BaseScrollView>
			{/* Header */}
			<View style={[styles.headers]}>
				<Text style={styles.headlines}>Welcome back {auth.user?.name}</Text>
				<Octicons name="bell" size={20} color="black" />
			</View>

			{/* METERIC */}
			<View style={styles.meteric}>
				<View style={styles.metricBox}>
					<Text style={styles.metricLabel}>Heart Rate</Text>
					<Text style={styles.metricValue}>215rpm</Text>
				</View>
				<View style={styles.metricBox}>
					<Text style={styles.metricLabel}>Diastolic</Text>
					<Text style={styles.metricValue}>70mm Hg</Text>
				</View>
				<View style={styles.metricBox}>
					<Text style={styles.metricLabel}>systolic</Text>
					<Text style={styles.metricValue}>119mmHg</Text>
				</View>
			</View>

			{/* RECENT DIAGS */}
			<View style={styles.recentDiag}>
				<View style={styles.recentDiagHeader}>
					<Text style={styles.recentDiagHeaderText}>Recent Diagnostics</Text>
					<Text style={[styles.recentDiagHeaderText, { fontSize: 12 }]}>
						View All
					</Text>
				</View>
				<View>
					<View style={styles.diagCard}>
						<View style={styles.firstLine}>
							<Image
								source={require("../../../assets/doctor_avatar.jpeg")}
								style={{ width: 40, height: 40, borderRadius: 6 }}
							/>
							<View style={styles.docInfo}>
								<Text style={styles.doctName}>Dr.Eleanor Pena</Text>
								<Text style={styles.doctjob}>pediatrics</Text>
							</View>
							<Text style={styles.review}>(220 review)</Text>
						</View>
						<View style={styles.secondLine}>
							<View style={styles.time}>
								<Entypo
									name="calendar"
									style={styles.timeIcon}
									size={16}
									color="black"
								/>
								<Text style={styles.timeValue}>24 Mar</Text>
							</View>
							<View style={styles.time}>
								<Ionicons
									style={styles.timeIcon}
									name="time-outline"
									size={16}
									color="black"
								/>
								<Text style={styles.timeValue}>16:00</Text>
							</View>
						</View>
					</View>
					<View style={[styles.diagCard, { backgroundColor: colors.red }]}>
						<View style={styles.firstLine}>
							<Image
								source={require("../../../assets/doctor_avatar.jpeg")}
								style={{ width: 40, height: 40, borderRadius: 6 }}
							/>
							<View style={styles.docInfo}>
								<Text style={styles.doctName}>Dr.Eleanor Pena</Text>
								<Text style={styles.doctjob}>pediatrics</Text>
							</View>
							<Text style={styles.review}>(220 review)</Text>
						</View>
						<View style={styles.secondLine}>
							<View style={styles.time}>
								<Entypo
									name="calendar"
									style={styles.timeIcon}
									size={16}
									color="black"
								/>
								<Text style={styles.timeValue}>24 Mar</Text>
							</View>
							<View style={styles.time}>
								<Ionicons
									style={styles.timeIcon}
									name="time-outline"
									size={16}
									color="black"
								/>
								<Text style={styles.timeValue}>16:00</Text>
							</View>
						</View>
					</View>
				</View>
			</View>

			{/* Devices */}
			<View style={styles.recentDiag}>
				<View style={styles.recentDiagHeader}>
					<Text style={styles.recentDiagHeaderText}>Devices</Text>
				</View>
				<ScrollView horizontal>
					<View style={styles.devicesContainer}>
						<View style={styles.deviceCard}>
							<Feather name="watch" size={32} color="black" />
							<Text style={styles.deviceName}>Smart Watch</Text>
						</View>
						<View style={styles.deviceCard}>
							<Fontisto name="heartbeat" size={32} color="black" />
							<Text style={styles.deviceName}>Smart Watch</Text>
						</View>

						<View style={styles.deviceCard}>
							<Entypo name="plus" size={32} color="black" />
							<Text style={styles.deviceName}>Add More</Text>
						</View>
					</View>
				</ScrollView>
			</View>

			{/* Doctors */}
			<View style={styles.recentDiag}>
				<View style={styles.recentDiagHeader}>
					<Text style={styles.recentDiagHeaderText}>Doctors</Text>
					<Text style={[styles.recentDiagHeaderText, { fontSize: 12 }]}>
						View All
					</Text>
				</View>
				<ScrollView>
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
				</ScrollView>
			</View>
		</BaseScrollView>
	);
};

const styles = StyleSheet.create({
	headers: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 20,
	},
	headlines: {
		fontSize: 25,
	},
	meteric: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	metricBox: {
		alignItems: "center",
	},
	metricLabel: {
		fontWeight: "600",
		fontSize: 10,
		color: colors.blue,
	},
	metricValue: {
		fontWeight: "600",
		fontSize: 16,
		color: colors.blue,
	},
	// Recent diag
	recentDiag: {
		marginTop: 32,
	},
	recentDiagHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 20,
	},
	recentDiagHeaderText: {
		fontWeight: "500",
		fontSize: 16,
	},
	diagCard: {
		width: "100%",
		backgroundColor: colors.blue,
		padding: 16,
		gap: 13,
		marginBottom: 16,
		borderRadius: 10,
		shadowColor: "#000",
	},
	firstLine: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
	},
	docInfo: {},
	doctName: {
		color: "white",
		fontSize: 18,
		fontWeight: "400",
	},
	doctjob: {
		fontWeight: "500",
		fontSize: 12,
		color: colors.white,
	},
	review: {
		color: "#e0eaf9",
	},
	secondLine: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
	},
	time: {
		flexDirection: "row",
		gap: 8,
	},
	timeIcon: {
		color: colors.white,
	},
	timeValue: {
		color: colors.white,
	},
	// Devices
	devicesContainer: {
		flexDirection: "row",
		gap: 12,
	},
	deviceCard: {
		width: 118,
		height: 118,
		justifyContent: "center",
		alignItems: "center",
		gap: 26,
		backgroundColor: colors.background,
		borderRadius: 14,
	},
	deviceName: {
		fontSize: 16,
		fontWeight: "500",
	},
	// Doctors
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

export default Home;
