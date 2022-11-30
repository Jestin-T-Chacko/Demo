import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, SafeAreaView, ImageBackground,Text} from 'react-native';
import {colors} from '../../theme/colors';
import LottieView from 'lottie-react-native';

const SplashScreen=(props)=> {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
        <LottieView
                  style={{width: 100, height: 100}}
                  source={require('./../../assets/animations/LoaderAnimation.json')}
                  autoPlay={true}
                />
          <Text style={styles.titleStyle}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  // const mapStateToProps = (state) => {
  //   console.log('login data from store ::---', state);
  //   return {
  //     loginData: state.loginData,
  //   };
  // };
export default connect()(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
  },
  titleStyle: {
    color: colors.secondaryColor,
    fontSize: 20,
  }
});
