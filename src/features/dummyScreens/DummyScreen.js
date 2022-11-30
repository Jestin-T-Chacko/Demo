import React, {Component, useEffect} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, SafeAreaView, ImageBackground,Text} from 'react-native';
import {colors} from '../../theme/colors';

const HomeScreen=(props)=> {
  useEffect(()=>{
  },[])
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.titleStyle}>Dummy Screen</Text>
        </View>
      </SafeAreaView>
    );
  }

  const mapStateToProps = (state) => {
    return {
      loginData: state.loginData,
    };
  };
export default connect(mapStateToProps)(HomeScreen);

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
    color: colors.whiteTextColor,
    fontSize: 20,
  }
});
