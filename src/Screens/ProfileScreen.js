import {View, Text, TextInput, Button, StyleSheet, ScrollView} from "react-native";
import React, { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
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

const ProfileScreen = ({ }) => {
  const handleLogout = async () => {
    const auth = getAuth(app);
    try {
      await signOut(auth);
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };
  const test = {
    name: 'Kunjall',
    age: 22
  }

  // const add = async () => {
  //   try {
  //     const createdBy = getAuth().currentUser.uid
  //     // console.log(createdBy);
  //     await addDoc(collection(db, "users"), {
  //       name: test.name,
  //       age: test.age,
  //       createdBy
  //     });
  //     console.log("Document added successfully!");
  //   } catch (error) {
  //     console.error("Error adding document: ", error);
  //   }
  // }
  
  // const bring = async () =>{
  //   try{
  //     // console.log(currentUser)
  //     const user_id = getAuth().currentUser.uid;
  //     const namr = getAuth().currentUser.name;
  //     console.log(getAuth().currentUser);
       
  //   }
  //   catch(error){
  //     console.log(error);
  //   }
  // }
  return (
    <View style={styles.container}>
      {/* <Image source=require('assets/user.png')> */}
      <View>
      <Text style={styles.detail}>Logout Screen</Text>
      <Text style={styles.information}>Logout Screen</Text>
      </View>
      
      <Text style={styles.tabText}>Logout Screen</Text>
      <Button title="Logout" onPress={handleLogout} color="#e74c3c" />
      {/* <Button title="add" onPress={add} color="#444" />
      <Button title="bring" onPress={bring} color="#444" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  tabText: {
    fontSize: 24,
  },
  detail:{
    fontWeight: 'bold'

  },
  information:{

  }
});

export default ProfileScreen;

//maybe not using for later

