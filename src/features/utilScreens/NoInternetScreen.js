import React, {Component, useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, Dimensions, TouchableOpacity,Text} from 'react-native';
//import TextWithFont from '../../theme/fonts/TextWithFont';
import {colors} from '../../theme/colors';
//import NormalButton from '../../components/ButtonComponents/NormalButton';
import NetInfo from '@react-native-community/netinfo';
import RNRestart from 'react-native-restart';

const InternetScreen =()=> {
  useEffect(()=>{
   // checkInternet();
  },[])

checkInternet = () => {
    NetInfo.fetch().then((state) => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      if (state.isConnected === true) {
        RNRestart.Restart();
      }
    });
  };
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
          <View style={{alignItems: 'center'}}>
            {/* <LottieView
              style={{
                width: Dimensions.get('window').width / 2,
                height: Dimensions.get('window').height / 3,
              }}
              source={require('../../assets/animation/offline_animation.json')}
              autoPlay={true}
            /> */}
          </View>
          <View style={{padding: 10}}>
            <Text>You are offline.please check your internet connection..!</Text>
          </View>
          <View style={{position: 'absolute', bottom: 50}}>
            <TouchableOpacity>
              <Text>Reload</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

export default InternetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FC',
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.whiteTextColor,
  },
  titleStyle: {
    color: colors.whiteTextColor,
    fontSize: 20,
  },
  subTitleStyle: {
    color: colors.whiteTextColor,
    fontSize: 14,
  },
  textcontainer: {
    padding: 10,
  },
});
