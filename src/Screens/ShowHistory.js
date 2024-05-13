import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';


const Stack = createStackNavigator();

const ShowHistory = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
        </View>
      );
};

export default ShowHistory;
