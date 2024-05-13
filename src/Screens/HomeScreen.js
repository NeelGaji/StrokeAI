import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

import { SelectList } from 'react-native-dropdown-select-list'

import {
  getAuth} from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
export const firebaseConfig = {
  apiKey: "AIzaSyDZE3_st-r3Lvt2nwLQrK16xd8Pth-NJy0",
  authDomain: "strokeai-cf087.firebaseapp.com",
  projectId: "strokeai-cf087",
  storageBucket: "strokeai-cf087.appspot.com",
  messagingSenderId: "280541356221",
  appId: "1:280541356221:web:4dd279e679c560737fd7d4",
  measurementId: "G-RNS3GN8V9X",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

const HomeScreen = () => {

  const [selected, setSelected] = useState("");
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);
  const [hyper, setHyper] = useState(null);
  const [heart, setHeart] = useState(null);
  const [married, setMarried] = useState(null);
  const [residence, setResidence] = useState(null);
  const [glucose, setGlucose] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [work, setWork] = useState(null);
  const [smoke, setSmoke] = useState(null);

  useEffect(() => {
    // Check if the user is signed in
    const user = getAuth().currentUser;
    if (!user) {
      // Navigate to the sign-in screen
      // You can replace 'SignInScreen' with the appropriate screen name
      navigation.navigate('SignInScreen');
    }
  }, []);

  const add = async () => {
    try {
      // console.log(getAuth().currentUser);
      const createdBy = getAuth().currentUser.uid
      const email = getAuth().currentUser.email
      await addDoc(collection(db, "users"), {
        gender,
        createdBy,
        age,
        email,
        hyper,
        heart,
        married,
        residence,
        glucose,
        bmi,
        work,
        smoke,
      });
      console.log(gender);
      console.log("Document added successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

 
  return(
    <ScrollView style={styles.formContainer}>

    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
    <Text style={styles.formLabel}>Gender</Text>
    <SelectList 
        setSelected={(val) => setGender(val)} 
        data={[{key:'1', value:'Male'},{key:'2', value:'Female'}]} 
        save="value"
    />
    </View>

    <View style={{ marginTop:10, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
    <Text style={styles.formLabel}>Age</Text>
    <TextInput
          style={styles.input} 
          keyboardType="numeric"
          placeholder="Enter your age"
          value={age} 
          onChangeText={(text) => setAge(text)} 
        />
    </View>

    <View style={{ marginTop:10, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
    <Text style={styles.formLabel}>Hyper Tension</Text>
    <SelectList 
        setSelected={(val) => setHyper(val)} 
        data={[{key:'1', value:'Yes'},{key:'0', value:'No'}]} 
        save="value"
    />
    </View>
    <View style={{ marginTop:10, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
    <Text style={styles.formLabel}>Heart Disease</Text>
    <SelectList 
        setSelected={(val) => setHeart(val)} 
        data={[{key:'1', value:'Yes'},{key:'0', value:'No'}]} 
        save="value"
    />
    </View>
    <View style={{ marginTop:10, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
    <Text style={styles.formLabel}>Ever Married</Text>
    <SelectList 
        setSelected={(val) => setMarried(val)} 
        data={[{key:'1', value:'Yes'},{key:'0', value:'No'}]} 
        save="value"
    />
    </View>
    <View style={{ marginTop:10, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
    <Text style={styles.formLabel}>Residence Type</Text>
    <SelectList 
        setSelected={(val) => setResidence(val)} 
        data={[{key:'1', value:'Rural'},{key:'0', value:'Urban'}]} 
        save="value"
    />
    </View>
    <View style={{ marginTop:10, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
    <Text style={styles.formLabel}>Average Glucose Level</Text>
    <TextInput
          style={styles.input} // Apply input style for consistency
          keyboardType="numeric"
          placeholder="Enter your glucose level"
          value={glucose} // Bind the state value
          onChangeText={(text) => setGlucose(text)} // Update state on input change
        />
    </View>
    <View style={{ marginTop:10, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
    <Text style={styles.formLabel}>BMI</Text>
    <TextInput
          style={styles.input} 
          keyboardType="numeric"
          placeholder="Enter your bmi"
          value={bmi} 
          onChangeText={(text) => setBmi(text)} 
        />
    </View>
    <View style={{ marginTop:10, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
    <Text style={styles.formLabel}>Work Type</Text>
    <SelectList 
        setSelected={(val) => setWork(val)} 
        data={[{key:'1', value:'Private'},{key:'2', value:'Self Employed'},{key:'3', value:'Govt Job'},{key:'4', value:'Children'},{key:'5', value:'Never Worked'}]} 
        save="value"
    />
    </View>
    <View style={{ marginTop:10, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
    <Text style={styles.formLabel}>Smoking Status</Text>
    <SelectList 
        setSelected={(val) => setSmoke(val)} 
        data={[{key:'1', value:'Formerly Smokes'},{key:'2', value:'Never Smokes'},{key:'3', value:'Smokes'},{key:'4', value:'Unknown'}]} 
        save="value"
    />
    </View>
    <View style={{ marginTop: 20 }}>
        <Button 
        title="Submit"  
        
        onPress={add}/>
      </View>
    </ScrollView>
  )

};


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  tabText: {
    fontSize: 24,
    marginBottom: 16,
  },
  formContainer: {
    marginVertical: 16,
    marginLeft:20,
    marginRight:20,
  },
  formLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
});

export default HomeScreen;
