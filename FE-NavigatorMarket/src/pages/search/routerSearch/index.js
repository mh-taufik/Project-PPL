import React from 'react';
//import {createAppContainer} from 'react-navigation';
import {createMaterialTopnavigator} from 'react-navigation-tabs';
import {createNativeStackNavigator} from 'react-navigation-stack';
import {friend,forum,event,market} from '../pages';
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopnavigator();

const MainSearch=() => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Friend" component={friend} options={{headerShown:false}} />
            <Tab.Screen name="Forum" component={forum} options={{headerShown:false}}/>
            <Tab.Screen name="Event" component={event} options={{headerShown:false}}/>
            <Tab.Screen name="Market" component={market} options={{headerShown:false}}/>
        </Tab.Navigator>
    )
}

const RouterSearch=() => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainSearch" component={MainSearch} options={{headerShown:false}}/>
      </Stack.Navigator>
    )
}

export default RouterSearch

