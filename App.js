import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import Quiz from './screens/Quiz/Quiz';
import Result from './screens/Result/Result';


export default function App() {
  return (
    <View style={styles.container}>
     <HomeScreen />
     {/* <Quiz /> */}
     {/* <Result /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
