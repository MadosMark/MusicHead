import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './navigation/navigator';




export default function App() {
  return (
   
      <NavigationContainer >
       <MyStack />
       <StatusBar style="auto" />
      </NavigationContainer>

  );
}


