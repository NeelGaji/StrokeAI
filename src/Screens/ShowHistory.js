import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";

const db = getFirestore();

const ShowHistory = ({ route }) => {
  const { recordId } = route.params;

  const [history, setHistory] = useState([]);

  useEffect(() => {
    // console.log("*****");
    // console.log(recordId);
    const fetchData = async () => {
      try {
        const userRef = doc(collection(db, "users"), recordId);
        const userDoc = await getDoc(userRef);

        // console.log(userDoc.data());
        const dateAndTime = new Date(userDoc.data().currentDate);
        const formattedDateTime =
          dateAndTime.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          });

          setHistory([
          {
            id: userDoc.id,
            ...userDoc.data(),
            dateAndTime: formattedDateTime,
          },
        ]);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>History:</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => (
          <View>
            <Text>{`Gender: ${item.gender}`}</Text>
            <Text>{`Age: ${item.age}`}</Text>
            <Text>{`Hyper Tension: ${item.hyper}`}</Text>
            <Text>{`Heart Disease: ${item.heart}`}</Text>
            <Text>{`Maratial Status: ${item.married}`}</Text>
            <Text>{`Residence type: ${item.residence}`}</Text>
            <Text>{`Avg Glucose Level: ${item.glucose}`}</Text>
            <Text>{`BMI : ${item.bmi}`}</Text>
            <Text>{`Work Type : ${item.work}`}</Text>
            <Text>{`Smoking Status : ${item.smoke}`}</Text>
            <Text>{`Last CheckUp : ${item.dateAndTime}`}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ShowHistory;
