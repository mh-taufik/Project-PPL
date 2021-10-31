import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { feed, goals, home, profile,search} from '../pages';
const Stack =createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MainApp = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={feed} options={{headerShown:false}} />
            <Tab.Screen name="Search" component={search} options={{headerShown:false}}/>
            <Tab.Screen name="Home" component={home} options={{headerShown:false}}/>
            <Tab.Screen name="Goals" component={goals} options={{headerShown:false}}/>
            <Tab.Screen name="Profile" component={profile} options={{headerShown:false}}/>
      </Tab.Navigator>
    )
}
const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown:false}}/>
      </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
