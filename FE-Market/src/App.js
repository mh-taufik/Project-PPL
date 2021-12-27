import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './code/HomeScreen';
import ResultScreen from './code/ResultScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Result" component={ResultScreen} options={{headerLeft:null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;