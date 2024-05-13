import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Picker } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { SelectList } from 'react-native-dropdown-select-list'

import {
  getAuth} from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";

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

  const add = async () => {
    try {
      const createdBy = getAuth().currentUser.uid
      await addDoc(collection(db, "users"), {
        gender,
        createdBy
      });
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
        save="key"
    />
    </View>
    <View style={{ marginTop:10, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
    <Text style={styles.formLabel}>Age</Text>
    <TextInput
      keyboardType="numeric"
      placeholder="Enter your age"
    />
    </View>
    <View style={{ marginTop:10, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
    <Text style={styles.formLabel}>Hyper Tension</Text>
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={[{key:'1', value:'Yes'},{key:'0', value:'No'}]} 
        save="key"
    />
    </View>
    <View style={{ marginTop:10, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
    <Text style={styles.formLabel}>Heart Disease</Text>
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={[{key:'1', value:'Yes'},{key:'0', value:'No'}]} 
        save="key"
    />
    </View>
    <View style={{ marginTop:10, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
    <Text style={styles.formLabel}>Ever Married</Text>
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={[{key:'1', value:'Yes'},{key:'0', value:'No'}]} 
        save="key"
    />
    </View>
    <View style={{ marginTop:10, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
    <Text style={styles.formLabel}>Residence Type</Text>
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={[{key:'1', value:'Rural'},{key:'0', value:'Urban'}]} 
        save="key"
    />
    </View>
    <View style={{ marginTop:10, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
    <Text style={styles.formLabel}>Average Glucose Level</Text>
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={[{key:'2', value:'Male'},{key:'1', value:'Female'}]} 
        save="key"
    />
    </View>
    <View style={{ marginTop:10, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
    <Text style={styles.formLabel}>BMI</Text>
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={[{key:'2', value:'Male'},{key:'1', value:'Female'}]} 
        save="key"
    />
    </View>
    <View style={{ marginTop:10, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
    <Text style={styles.formLabel}>Work Type</Text>
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={[{key:'1', value:'Private'},{key:'2', value:'Self Employed'},{key:'3', value:'Govt Job'},{key:'4', value:'Children'},{key:'5', value:'Never Worked'}]} 
        save="key"
    />
    </View>
    <View style={{ marginTop:10, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
    <Text style={styles.formLabel}>Smoking Status</Text>
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={[{key:'1', value:'Formerly Smokes'},{key:'2', value:'Never Smokes'},{key:'3', value:'Smokes'},{key:'4', value:'Unknown'}]} 
        save="key"
    />
    </View>
    <View style={{ marginTop: 20 }}>
        <Button title="Submit"  onPress={add}/>
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
