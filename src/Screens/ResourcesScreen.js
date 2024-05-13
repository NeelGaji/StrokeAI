import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import React, { useState, useEffect } from "react";


const ResourcesScreen = () => {
  return (
    
    <ScrollView style={styles.container}>
      <Text style={styles.tabTitle}>What is a Stroke?</Text>
      <Text style={styles.tabText}>
      A stroke happens when blood flow to part of your brain is interrupted. This can be caused by a blockage (ischemic stroke) or a burst blood vessel (hemorrhagic stroke). Without enough blood, brain cells start to die within minutes, leading to problems with how your body functions.{"\n"}
      </Text>
      <Text style={styles.tabTitle}>Act FAST!</Text>
      <Text style={styles.tabText}>
      If you think someone is having a stroke, remember the acronym FAST:{"\n"}
      • F - Face: Ask the person to smile. Does one side of their face droop?{"\n"}
      • A - Arms: Ask the person to raise both arms. Does one arm drift downward?{"\n"}
      • S - Speech: Ask the person to speak a simple sentence. Is their speech slurred or difficult to understand?{"\n"}
      • T - Time: If you observe any of these signs, call emergency services immediately. Time is critical in stroke treatment.{"\n"}
      </Text>
      <Text style={styles.tabTitle}>Signs of Stroke</Text>
      <Text style={styles.tabText}>
        Warning signs of stroke can appear suddenly and include:{"\n"}
        • Face drooping: One side of the face may droop or feel numb.{"\n"}
        • Arm weakness: You may have difficulty raising one arm or it may feel weak.{"\n"}
        • Speech difficulty: Your speech may be slurred or difficult to understand.{"\n"}
        • Trouble seeing: You may experience sudden vision problems in one or both eyes.{"\n"}
        • Severe headache: A sudden and severe headache can be a sign of stroke, especially if accompanied by other symptoms.{"\n"}
        • Sudden dizziness or confusion: You may feel dizzy or confused for no apparent reason.{"\n"}
      </Text>
      <Text style={styles.tabTitle}>Preventitive Measures</Text>
      <Text style={styles.tabText}>
      Maintain a Healthy Lifestyle:{"\n"}
        • Diet: Eat a healthy diet rich in fruits, vegetables, and whole grains. Limit unhealthy fats, processed foods, and added sugars. Consider following dietary plans like the DASH diet, which emphasizes fruits, vegetables, and low-fat dairy products and is proven to help lower blood pressure.{"\n"}
        • Exercise: Engage in regular physical activity. Aim for at least 150 minutes of moderate-intensity exercise or 75 minutes of vigorous-intensity exercise per week. Even small increases in activity can be beneficial.{"\n"}
        • Weight Management: Maintain a healthy weight. Obesity is a major risk factor for stroke.{"\n"}
        • Smoking Cessation: If you smoke, quitting is one of the most important steps you can take to reduce your stroke risk. Smoking damages blood vessels and increases the risk of blood clots.{"\n"}
        • Alcohol Moderation: Limit alcohol consumption. Excessive alcohol intake can raise blood pressure and increase stroke risk.{"\n"}
        {"\n"}
        
        Manage Underlying Health Conditions:{"\n"}
        • High Blood Pressure: High blood pressure is a leading risk factor for stroke. Work with your doctor to monitor and control your blood pressure through medication and lifestyle changes.{"\n"}
        • High Cholesterol: High cholesterol levels can contribute to plaque buildup in arteries, increasing stroke risk. Manage cholesterol levels through a healthy diet, exercise, and medication if needed.{"\n"}
        • Diabetes: Diabetes can damage blood vessels and increase stroke risk. Manage diabetes by maintaining healthy blood sugar levels through diet, exercise, and medication.
        {"\n"}{"\n"}
        Other Preventive Measures:{"\n"}
        • Sleep: Aim for 7-8 hours of quality sleep each night. Poor sleep can contribute to high blood pressure and other risk factors for stroke.{"\n"}
        • Manage Stress: Chronic stress can contribute to high blood pressure and other stroke risk factors. Practice stress management techniques like meditation, yoga, or deep breathing exercises.{"\n"}
        • Regular Checkups: Schedule regular checkups with your doctor to monitor your health and identify potential risk factors early on.{"\n"}
        • Aspirin Therapy (Consult Doctor): In some cases, low-dose aspirin therapy might be recommended by a doctor to help prevent blood clots, but this should be discussed with a healthcare professional to determine if it's right for you considering potential side effects.
        {"\n"}{"\n"}
        Remember, even small changes to your lifestyle can significantly reduce your risk of stroke. By adopting healthy habits and managing underlying health conditions, you can take control of your stroke prevention and live a healthier life.
      </Text>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 26,
    backgroundColor: "#f0f0f0",
  },
  tabText: {
    fontSize: 20,
  },
  tabTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline'
  },
});
export default ResourcesScreen;
