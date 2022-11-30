import React from 'react';
import {connect} from 'react-redux';
//import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppDrawerNavigator from './appDrawer/AppDrawerNavigator';
//import AppBottomNavigator from './appBottom/AppBottomNavigator';
import LoginScreen from '../features/dummyScreens/Login';
import RegisterScreen from '../features/dummyScreens/RegisterScreen';

const Stack = createNativeStackNavigator();
const RootStackContainer = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen" headerShown={'none'}>
      <Stack.Screen 
      name="Login" 
      options={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
      component={LoginScreen} />
      <Stack.Screen 
      name="Register" 
      options={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
      component={RegisterScreen} />
      <Stack.Screen 
      name="AppDrawerNavigator" 
      options={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
      component={AppDrawerNavigator} />

      
    </Stack.Navigator>
  );
};
export default RootStackContainer;
