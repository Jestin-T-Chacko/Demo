import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
const Joi = require('joi-react-native');
import LocalData from '../../config/StorageLocal';
import validationSchema from '../../config/validationSchema';
import { colors } from '../../theme/colors';


const SignUp = props => {
  var errorFlag=null;
  const initialValues = [];
  const [userName, onChangeUsername] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [confirmPassword, onChangeConfirmPassword] = useState('');
  const [errorInfo, inputError] = useState(initialValues);
  const [loginData, setLogin] = useState(initialValues);

  useEffect(() => {
    getLoginData();
  }, []);

  const getLoginData = async () => {
    try {
      const jsonValue = await LocalData.getLoginData();
      setLogin(jsonValue != null ? jsonValue : initialValues);
    } catch (e) {
      // error reading value
    }
  };
  // const schema = {
  //   userName: Joi.string().label('Name').required(),
  //   email: Joi.string().label('Email-ID').email().required(),
  //   password: Joi.string().label('Password').required(),
  //   confirmPassword: Joi.any()
  //     .label('Confirm Password')
  //     .valid(Joi.ref('password'))
  //     .required()
  //     .options({language: {any: {allowOnly: 'must match Password'}}}),
  // };

  const onPressSignIn = async () => {
    await validate();
    await setData();
  };

  const setData = async() => {
    let flag = 0;
    if (errorFlag == null || errorFlag==initialValues) {
      flag=1;
    }
     if (flag == 1 ) {
      let data = {id: loginData.length,name: userName, email: email, password: password};
      loginData.push(data);
      setLogin(loginData)
      storeData(loginData);
      props.navigation.replace('Login');
    }
  };
  const storeData = async value => {
    try {
      await LocalData.setLoginData(value);
    } catch (e) {
      // saving error
    }
  };

  const validate = async () => {
    const validateValues = {
      userName: userName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    await Joi.validate(validateValues, validationSchema.registerSchema, error => {
      errorFlag=error ? error.details : null;
      inputError(error ? error.details : null);
    });
  };

  return (
    <SafeAreaView style={styles.containerView}>
      <View style={styles.innerContainer}>
      <View style={styles.loginHeader}>
        <Text style={styles.loginHeaderText}>Sign In</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUsername}
          value={userName}
          placeholder="Name"
          placeholderTextColor={colors.textNotFocus}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
          placeholderTextColor={colors.textNotFocus}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor={colors.textNotFocus}
         // keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeConfirmPassword}
          value={confirmPassword}
          secureTextEntry={true}
          placeholder="Confirm Password"
          placeholderTextColor={colors.textNotFocus}
          //keyboardType="email-address"
        />
        <Text style={styles.errorText}>
          {errorInfo !== null && errorInfo.length > 0
            ? errorInfo[0].message
            : ''}
        </Text>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => onPressSignIn()}>
          <Text style={{color:colors.secondaryColor}}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
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

  input: {
    width: 250,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    color:colors.blackTextColor,
    borderColor:colors.textNotFocus,
    padding: 10,
    backgroundColor:colors.secondaryColor
  },
  buttonView: {
    margin: 10,
    width: 100,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginHeader:{
    paddingVertical:10,
  },
  loginHeaderText:{
    color:colors.primaryColor,
    fontSize:20,
    //fontFamily:Fonts.RobotoRegular
  },
  errorText:{
    color:colors.error, 
    fontSize:12,
  },
});
export default SignUp;
