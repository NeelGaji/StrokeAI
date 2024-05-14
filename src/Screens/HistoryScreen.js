import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";


const HistoryScreen = ({ navigation }) => {
	// const navigation = useNavigation();

  // Get the model result from the Django server
  const modelResult = "No"; 


  let cardColor = "#FFFFFF"; // Default color
  // Change the color based on the model result
  if (modelResult === "Yes") {
    cardColor = "red";
  } else if (modelResult === "No") {
    cardColor = "green";
  }

  return (
	<TouchableOpacity onPress={() => navigation.navigate('Details')}>
		<View style={styles.container} >
		<View style={[styles.cardContainer, { backgroundColor: cardColor }]}>
			<Text style={styles.heading}>Prediction</Text>
			<Text style={styles.paragraph}>{modelResult}</Text>
		</View>
		</View>
	</TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 15,
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10, // Required for Android
    width: 370,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    justifyContent: "flex-start",
    backgroundColor: "#F5F5F5",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 8,
    color: "white",
  },
  paragraph: {
    fontSize: 17,
    lineHeight: 23,
    paddingRight: 20,
	color:"white",
  },
});

export default HistoryScreen;