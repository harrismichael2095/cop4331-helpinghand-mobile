import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import  Home from './screens/homePage'
import Login from './screens/login'
import  coordinatorSignup from './screens/coordinatorSignup'
import  volunteerSignup from './screens/volunteerSignup'

const AppStack = createStackNavigator();
export default function Navigator(){

    return (
    <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: true }} >

    <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="Login" component={Login} />
    
    </AppStack.Navigator>

    </NavigationContainer>
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
