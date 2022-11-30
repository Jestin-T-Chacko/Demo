import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../../theme/colors';
import {getTabBarVisibility} from '../../utils/bottomNavigationHide';
import HomeScreen from '../../features/dummyScreens/HomeScreen'
import SettingsNavigator from '../settingsNavigator/settingsNavigator';
import DummyNavigator from '../dummyNavigators/dummyNavigator';

const Bottom = createBottomTabNavigator();
const AppBottomNavigator = () => {
  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={{
        activeTintColor: colors.secondaryColor,
        inactiveTintColor: colors.secondaryColor,
        //tabBarStyle:{backgroundColor:colors.primaryColor},
        showLabel: true,
        style: {
          height: 70,
        },
      }}>
      
      <Bottom.Screen
        name={'Menu'}
        component={DummyNavigator}
        options={({route}) => ({
          headerShown:false,
          tabBarLabel: 'Menu',
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({route, focused}) => (
            <View style={styles.menuView}>
              {
                focused ? (
                  <Image
                    source={require('../../assets/images/MoreIconActive.png')}
                    style={{width: 28, height: 7}}></Image>
                ) : (
                  <Image
                    source={require('../../assets/images/MoreIcon.png')}
                    style={{width: 28, height: 7}}></Image>
                )
              }
            </View>
          ),
        })}
      />
      <Bottom.Screen
        name={'Home'}
        component={HomeScreen}
        options={({route}) => ({
          headerShown:false,
          tabBarLabel: 'Home',
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({route, focused}) => (
            <View style={styles.menuView}>
              {
                focused ? (
                  // <HomeIconActive width={22} height={23} />
                  <Image
                    source={require('../../assets/images/HomeIconActive.png')}
                    style={{width: 22, height: 23}}></Image>
                ) : (
                  <Image
                    source={require('../../assets/images/HomeIcon.png')}
                    style={{width: 22, height: 23}}></Image>
                )
                // <HomeIcon width={22} height={23} />
              }
            </View>
          ),
        })}
      />
      <Bottom.Screen
        name={'Settings'}
        component={SettingsNavigator}
        options={({route}) => ({
          headerShown:false,
          tabBarLabel: 'Settings',
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({route, focused}) => (
            <View style={styles.menuView}>
               {
                focused ? (
                  // <HomeIconActive width={22} height={23} />
                  <Image
                    source={require('../../assets/images/HomeIconActive.png')}
                    style={{width: 22, height: 23}}></Image>
                ) : (
                  <Image
                    source={require('../../assets/images/MyAccountIcon.png')}
                    style={{width: 22, height: 23}}></Image>
                )
                // <HomeIcon width={22} height={23} />
              }
            </View>
          ),
        })}
      />
    </Bottom.Navigator>
  );
  
};

export default AppBottomNavigator;
const styles = StyleSheet.create({
  menuView: {
    justifyContent: 'space-around',
    alignItems: 'center',
    //flex:1,
    paddingVertical: 15,
    //backgroundColor:'yellow'
  },
  menuText: {
    //fontSize: 14,
    //fontFamily: Fonts.RobotoRegular,
    textAlign: 'center',
    color:'red'
  },
});

