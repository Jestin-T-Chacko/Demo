import React, {Component, useEffect, useState} from 'react';
import {StyleSheet,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import InternetScreen from '../features/utilScreens/NoInternetScreen';
import RootStackContainer from './RootStackContainer';
import SplashScreen from '../features/dummyScreens/SplashScreen';
import LoginScreen from '../features/dummyScreens/LoginScreen';
import AppDrawerNavigator from './appDrawer/AppDrawerNavigator';
const THEME_COLOR = '#285E29';

const NavigationStack =()=> {
  const [loading,setLoading]=useState(true);
  const [isConnected,setConnected]=useState(false);
  useEffect(()=>{
   splashTime();
   checkInternet();
  },[])

  const splashTime = () => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  };
  const checkInternet = () => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected === true) {
        setConnected(true)
      } else {
        setConnected(false)
      }
    });
  };

  if (loading) {
      return <SplashScreen />;
    } else if (isConnected) {
      return (
        <NavigationContainer>
          <RootStackContainer />
        </NavigationContainer>
      );
    } else {
      return <InternetScreen />;
  }
}
export default connect()(NavigationStack);

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: THEME_COLOR,
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: THEME_COLOR,
  },
});
