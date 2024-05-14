import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";

const ResourcesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tabText}>
        A stroke occurs when blood flow to a part of the brain is interrupted or
        reduced, depriving brain tissue of oxygen and nutrients. Without oxygen,
        brain cells can die within minutes.
      </Text>
      <Text style={styles.tabText}>
        Act FAST 
      
        A - Arms: Ask the person to raise both arms. Does one arm drift
        downward? S - Speech: Ask the person to repeat a simple phrase. Is their
        speech slurred or strange? T - Time: If you observe any of these signs,
        it's time to call emergency services immediately.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  tabText: {
    fontSize: 24,
  },
});
export default ResourcesScreen;
