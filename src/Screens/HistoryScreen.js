import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  addDoc,
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore();

const HistoryScreen = ({ navigation }) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userRef = collection(db, "users");
      const userId = getAuth().currentUser.uid;

      const q = query(userRef, where("createdBy", "==", userId));
      const querySnapshot = await getDocs(q);

      const fetchedRecords = [];
      let index = 0;
      querySnapshot.forEach((doc) => {
        const modelResult = index % 2 === 0 ? "Yes" : "No";
        fetchedRecords.push({ id: doc.id, ...doc.data(), modelResult });
        index++;
      });

      setRecords(fetchedRecords);
    };
    fetchData();
  }, []);
  // const navigation = useNavigation();

  // Get the model result from the Django server
  const modelResult = "Yes";

  let cardColor = "#FFFFFF"; // Default color
  // Change the color based on the model result
  if (modelResult === "Yes") {
    cardColor = "red";
  } else if (modelResult === "No") {
    cardColor = "green";
  }

  return (
    <View style={styles.container}>
      {records &&
        records.map((record) => (
          <TouchableOpacity
            key={record.id}
            style={[
              styles.cardContainer,
              {
                backgroundColor: record.modelResult === "Yes" ? "red" : "green",
              },
            ]}
            onPress={() =>
              navigation.navigate("Details", { recordId: record.id })
            }
          >
            <View>
              <Text style={styles.heading}>Stroke</Text>
              <Text style={styles.paragraph}>{record.modelResult}</Text>
            </View>
          </TouchableOpacity>
        ))}
    </View>
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
    color: "white",
  },
});

export default HistoryScreen;
