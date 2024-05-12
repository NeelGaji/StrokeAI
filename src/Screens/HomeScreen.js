import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Picker } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { SelectList } from 'react-native-dropdown-select-list'


const HomeScreen = () => {

  const [selected, setSelected] = useState("");
  
  const data = [
      {key:'1', value:'not skibidi', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]

  return(
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    />
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
