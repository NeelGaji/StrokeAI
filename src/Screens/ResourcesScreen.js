import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';

const ResourcesScreen = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.tabText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore recusandae, rem quia delectus et reiciendis molestias harum laudantium accusamus beatae eaque ea! Enim officiis, quisquam facilis harum explicabo sequi a!</Text>
        <Text>Some information goes here regarding stroke and how to treat it.</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#f0f0f0',
    },
    tabText: {
      fontSize: 24,
    }
  });
  export default ResourcesScreen;