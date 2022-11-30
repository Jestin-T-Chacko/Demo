import React, {Component, useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, SafeAreaView, ImageBackground,Text,TextInput} from 'react-native';
import {colors} from '../../theme/colors';
//import {getData,postData} from '../../store/actions/LoginAction'
import LocalData from '../../config/StorageLocal';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Fonts from '../../utils/Fonts';
// import validationSchema from '../../config/validationSchema';
// import validation from '../../config/validationFunction'
const Joi = require('joi-react-native');
import { FormItem } from 'react-native-form-component';
const Login=(props)=> {
  var errorFlag=[];
    const initialValues = [];
    const [userName, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');
    const [loginData, setLoginData] = useState(initialValues);
    const [errorInfo, setError] = useState(initialValues);
    const [error,inputError]=useState('')
  useEffect(()=>{
    getData();
   //setError(initialValues);   
  },[])

  const getData = async () => {
    try {
      const jsonValue = await LocalData.getLoginData();
      console.log('json value:-',jsonValue)
     setLoginData(jsonValue != null ?jsonValue:initialValues);
    } catch (e) {
      // error reading value
    }
  };

  // const schema = {
  //   userName:  Joi.string().label('Username').email().required(),
  //   password: Joi.string().label('Password').required(),
  // };

  const onPressLogin = async() => {
    await validate();
    await setLogin()
  };

  const setLogin=async()=>{
    let flag = 0;
    if (errorFlag == null || errorFlag==initialValues) {
      flag=1;
    }
    if(flag==1 && loginData.length>0){
      loginData.forEach(item => {
        if (item.email == userName && item.password == password) {
          setError(initialValues);
          props.navigation.navigate('AppDrawerNavigator');
        }
        else {
          inputError('Invalid Username or Password');
           }
      });
    }else {
      await inputError('Invalid login-Id');
       }
  }

  const onPressSignIn = () => {
    setError('');
    props.navigation.navigate('Register');
  };

  const validate = async () => {
    const validateValues = {
      userName: userName,
      password: password,
    };
    // await Joi.validate(validateValues, validationSchema.loginSchema, error => {
    //   errorFlag=error ? error.details : null;
    //   setError(error ? error.details : null);
    // });
    //  let value= await dispatch(validation(validateValues,validationSchema.loginSchema));
    //  console.log('value:',value)
  };

 
  return (
    <SafeAreaView style={styles.containerView}>
      <View style={styles.innerContainer}>
        <View style={styles.loginHeader}>
        <Text style={styles.loginHeaderText}>Login</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUsername}
          value={userName}
          placeholder="Email"
          placeholderTextColor={colors.textNotFocus}
          keyboardType="email-address"
        />
        {/* <FormItem
    //label="Email"
    isRequired
    value={userName}
    onChangeText={(userName) => onChangeUsername(userName)}
    textInputStyle={styles.input}
    //floatingLabel={true}
  /> */}
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor={colors.textNotFocus}
          // keyboardType="email-address"
        />
        <Text style={styles.errorText}> {errorInfo !== null && errorInfo.length > 0
            ? errorInfo[0].message
            : error}</Text>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => onPressLogin()}>
          <Text style={styles.loginStyle}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          //style={styles.buttonView}
          onPress={() => onPressSignIn()}>
          <Text style={styles.signInStyle}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  //console.log('login data from store:-',state)
    return {
      loginStore: state.loginData,
    };
  };
export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.primaryColor
  },
  innerContainer: {
    margin:20,
    padding:20,
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondaryColor,
    elevation:3
  },
  buttonContainer: {
    flex: 2,
  },
  input: {
    width: 250,
    height: 40,
    margin: 12,
    color:colors.blackTextColor,
    borderWidth: 1,
    borderRadius: 5,
    borderColor:colors.textNotFocus,
    backgroundColor:colors.secondaryColor,
    padding: 10,
  },
  loginHeader:{
    paddingVertical:10,
  },
  loginHeaderText:{
    color:colors.primaryColor,
    fontSize:20,
   // fontFamily:Fonts.RobotoRegular
  },
  errorText:
  {
    color: 'red', 
    marginTop: 5,
    fontSize:12,
  },
  signInStyle: {
    color: colors.primaryColor,
    //fontSize: 12,
  },
  loginStyle: {
    color: colors.primaryColor,
    fontSize: 16,
  },
  buttonView: {
    margin: 20,
    width: 100,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.textNotFocus,
    backgroundColor: colors.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    //elevation: 1,
  },
});

  

