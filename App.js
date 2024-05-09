import React, { useState, useEffect } from 'react';

import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { initializeApp } from 'firebase/app';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

import firebaseConfig from './firebaseConfig';
const app = initializeApp(firebaseConfig);



const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthentication = async () => {
    const auth = getAuth(app);
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in successfully!');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('User created successfully!');
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  return (
    <View style={styles.authContainer}>
       <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>

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
        <Button title={isLogin ? 'Sign In' : 'Sign Up'} onPress={handleAuthentication} color="#3498db" />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
        </Text>
      </View>
    </View>
  );
}

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tabText}>Home Screen </Text>
    </View>
  );
}

const LogoutScreen = ({ navigation }) => {
  const handleLogout = async () => {
    const auth = getAuth(app);
    try {
      await signOut(auth);
      console.log('User logged out successfully!');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tabText}>Logout Screen</Text>
      <Button title="Logout" onPress={handleLogout} color="#e74c3c" />
    </View>
  );
}

const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tabText}>Info Screen</Text>
      <Text>Some information goes here...</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Info" component={InfoScreen} />
      <Tab.Screen name="Logout" component={LogoutScreen} />
    </Tab.Navigator>
  );
}

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
          <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={{ title: 'Authentication' }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  authContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  toggleText: {
    color: '#3498db',
    textAlign: 'center',
  },
  tabText: {
    fontSize: 24,
  }
});

export default App;
