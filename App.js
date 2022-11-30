if (__DEV__) {
  import('./src/utils/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

import React, {Component, Fragment, useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  View,
  StatusBarIOS,
  NativeModules,
  Platform,
} from 'react-native';
import store from './src/store/configureStore';
import {Provider} from 'react-redux';
import {colors} from './src/theme/colors';
import NavigationStack from './src/navigations/NavigationStack';
const {StatusBarManager} = NativeModules;
const THEME_COLOR = '#285E29';

const App =()=> {
  const [statusBarHeight,setStatusBarHeight]=useState(20);
  useEffect(()=>{
    console.log('platform:',Platform.OS)
  if (Platform.OS === 'ios') {
      StatusBarManager.getHeight((response) =>
        setStatusBarHeight(response.height)
      );
    }
    },[])
    return (
      <Provider store={store}>
        {Platform.OS === 'ios' ? (
          <SafeAreaView
            style={[styles.StatusBar, {height: statusBarHeight}]}
          />
        ) : null}
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={colors.primaryColor}
        />
         <NavigationStack /> 
      </Provider>
    );
  }
const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: 'THEME_COLOR',
  },
  bottomSafeArea: {
    flex: 1,
  },
  StatusBar: {
    flex: 0,
    backgroundColor: colors.primaryColor,
  },
});
export default App;
