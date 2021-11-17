import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import MyStack from './components/navigator';
import { NovaSquare_400Regular } from '@expo-google-fonts/nova-square'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Anurati': require('./assets/fonts/anurati.otf'),
    'NovaSquare': NovaSquare_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
         <MyStack />
         <StatusBar style="auto" />
      </NavigationContainer>

      // <SafeAreaView style={{
      //   flex: 1,
      //   alignItems: 'center',
      //   justifyContent: 'center',
      // }}>
      //   <Text>my_app</Text>
      // </SafeAreaView>
    );
  }
}
