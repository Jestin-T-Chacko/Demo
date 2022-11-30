import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//import PrimaryHeader from '../../components/common/PrimaryHeader';
import SettingsScreen from '../../features/dummyScreens/SettingsScreen';
const Settings = createStackNavigator();
const SettingsNavigator = () => {
  return (
    <Settings.Navigator presentation="modal" initialRouteName="SettingsScreen">
      <Settings.Screen
        name={'SettingsScreen'}
        component={SettingsScreen}
        options={{  headerShown: false}}
        // options={{
        //   header: (props) => (
        //     <PrimaryHeader
        //       navigation={props.navigation}
        //       title="Plans"
        //       {...props}
        //     />
        //   ),
        // }}
      />  
    </Settings.Navigator>
  );
};
export default SettingsNavigator;
