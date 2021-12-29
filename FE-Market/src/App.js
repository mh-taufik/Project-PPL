import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './code/HomeScreen';
import ResultScreen from './code/ResultScreen';
import { TouchableOpacity,Image,View } from 'react-native';
import SearchBar from './code/HomeComponent/SearchBar';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{headerShown:false}}/>
        <Stack.Screen 
          name="Result" 
          component={ResultScreen} 
          options={{
              headerRight: () => (
                <View style={{paddingBottom:20}}>
                  <View>
                    <TouchableOpacity onPress={()=> alert('This is a button!')}>
                      <Image style={{left:'88%'}}
                        source={require("./icon/mail.png")}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{top:'10%'}}>
                    <SearchBar/>
                  </View>
                </View>
              ),
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;