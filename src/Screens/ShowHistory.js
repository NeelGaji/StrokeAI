import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const db = getFirestore();

const ShowHistory = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'users'));
          const data = querySnapshot.docs.map((doc) => {
            console.log(doc.data()); // Log the data received from Firestore
            return { id: doc.id, ...doc.data(), dateAndTime: new Date(doc.data().dateAndTime).toLocaleString() };
          });
          setHistory(data);
        } catch (error) {
          console.error('Error fetching documents: ', error);
        }
      };

        fetchData();
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
                        <Text>{`Last CheckUp : ${item.currentDate}`}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default ShowHistory;
