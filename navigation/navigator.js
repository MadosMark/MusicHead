import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Quiz from '../screens/Quiz/Quiz';
import Result from '../screens/Result/Result';
import React from 'react';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" 
      component={HomeScreen}
      options={{headerShown: false}} />
      <Stack.Screen name="Quiz" 
      component={Quiz} 
      options={{headerShown: false}}/>
      <Stack.Screen name="Result" 
      component={Result} 
      options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default MyStack;