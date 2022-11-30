import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//import PrimaryHeader from '../../components/common/PrimaryHeader';
import DummyScreen from '../../features/dummyScreens/DummyScreen'
const Dummy = createStackNavigator();
const DummyNavigator = () => {
  return (
    <Dummy.Navigator presentation="modal" initialRouteName="DummyScreen">
      <Dummy.Screen
        name={'DummyScreen'}
        component={DummyScreen}
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
    </Dummy.Navigator>
  );
};
export default DummyNavigator;
