import React, {Component, useEffect} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, SafeAreaView,Text} from 'react-native';
import {colors} from '../../theme/colors';
import {getData,postData} from '../../store/actions/LoginAction'
import LocalData from '../../config/StorageLocal';
const HomeScreen=(props)=> {
  useEffect(()=>{
  //   let data=[{
  //     name: "paul rudd",
  //     id: 101
  // },];
  //   props.dispatch(postData(data)).then((res)=>{
  //     console.log('res:-',res);
  //     localValues(res);
  //   })
  },[])

const localValues=async(data)=>{
  await LocalData.setLoginData(data);
  let res = await LocalData.getLoginData()
    console.log('login data from local storage:',res);
}
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.titleStyle}>Welcome Home</Text>
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
