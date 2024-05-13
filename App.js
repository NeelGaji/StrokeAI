import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {getDatabase} from 'firebase/database'; 

import HomeScreen from "./src/Screens/HomeScreen";
import HistoryScreen from "./src/Screens/HistoryScreen";
import ResourcesScreen from "./src/Screens/ResourcesScreen";

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

// const databaseURL = 'https://strokeai-cf087-default-rtdb.firebaseio.com/';
const db = getFirestore();


const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthentication = async () => {

    // const docRef = await addDoc(collection(db, "users"), {
    //   email: email,
    //   // Other user details
    // });

    const auth = getAuth(app);
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User signed in successfully!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created successfully!");
      }
    } catch (error) {
      console.error("Authentication error:", error.message);
    }
  };


  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>{isLogin ? "Sign In" : "Sign Up"}</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button
          title={isLogin ? "Sign In" : "Sign Up"}
          onPress={handleAuthentication}
          color="#3498db"
        />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Need an account? Sign Up"
            : "Already have an account? Sign In"}
        </Text>
      </View>
    </View>
  );
};

const ProfileScreen = ({ navigation }) => {
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

  const add = async () => {
    try {
      const createdBy = getAuth().currentUser.uid
      // console.log(createdBy);
      await addDoc(collection(db, "users"), {
        name: test.name,
        age: test.age,
        createdBy
      });
      console.log("Document added successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }
  
  const bring = async () =>{
    try{
      // console.log(currentUser)
      const user_id = getAuth().currentUser.uid;
      const namr = getAuth().currentUser.name;
      console.log(getAuth().currentUser);
       
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.tabText}>Logout Screen</Text>
      <Button title="Logout" onPress={handleLogout} color="#e74c3c" />
      <Button title="add" onPress={add} color="#444" />
      <Button title="bring" onPress={bring} color="#444" />

      
    </View>
  );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Stroke Prediction"
        component={HomeScreen}
        options={{
          tabBarLabel: "Predict",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="hospital-o" color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="history" color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Educational Resources"
        component={ResourcesScreen}
        options={{
          tabBarLabel: "Resouces",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="book" color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={{ title: "StrokeAI" }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
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
  authContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  toggleText: {
    color: "#3498db",
    textAlign: "center",
  },
  tabText: {
    fontSize: 24,
  },
});

export default App;
