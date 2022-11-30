import AsyncStorage from '@react-native-async-storage/async-storage';
const LocalData = {
  setLoginData: async (data) => {
    try {
      // AsyncStorage.clear();
      console.log('login data to local:-',data)
      await AsyncStorage.setItem('LoginData', JSON.stringify(data));
    } catch (e) {
      // saving error
    }
  },
  getLoginData: async () => {
    try {
      const value = await AsyncStorage.getItem('LoginData');
      const data = JSON.parse(value);
      console.log('login data from local:-',data)
      return data;
    } catch (e) {
      // error reading value
    }
  },
}
  export default LocalData;
