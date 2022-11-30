import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomHeader from '../../components/DrawerMenu';
import AppBottomNavigator from '../appBottom/AppBottomNavigator';
import DummyNavigator from '../dummyNavigators/dummyNavigator';
import SettingsNavigator from '../settingsNavigator/settingsNavigator';
import HomeScreen from '../../features/dummyScreens/HomeScreen';
import { colors } from '../../theme/colors';

const Drawer = createDrawerNavigator();
const AppDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="AppBottomNavigator"
      headerMode={'none'}
      headerShown={false}
      useLegacyImplementation={false}
     drawerContent={(props) => <CustomHeader {...props} />}
      >
        
      <Drawer.Screen
        name="Base Model"
        options={{
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: true,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
        component={AppBottomNavigator}
      />
       {/* <Drawer.Screen
        name="Home"
        // options={{
        //   headerShown: true,
        //   gestureEnabled: true,
        //   gestureDirection: 'horizontal',
        // }}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        component={HomeScreen}
      /> */}
      <Drawer.Screen
        name="DummyNavigator"
        options={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
        component={DummyNavigator}
      />
      {/* <Drawer.Screen
        name="SettingsNavigator"
        options={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
        component={SettingsNavigator}
      /> */}
    </Drawer.Navigator>
  );
};

export default AppDrawerNavigator;
