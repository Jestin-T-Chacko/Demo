import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {colors} from '../theme/colors';
import {connect} from 'react-redux';

const DrawerMenu = (props) => {
  const guestUser = [
    {
      icon: 'Dummy',
      title: 'Dummy',
      screen: 'DummyNavigator',
    }
  ];

  const onPressUser = async (item, itemIndex) => {
    if (item.screen != '') {
      props.navigation.navigate(item.screen);
    }
    props.navigation.closeDrawer();
  };

  return (
    <View style={[styles.container]}>
      {/* <LogoutModal
        logOut={modalVisible}
        confirmLogOut={() => confirmLogOut()}
        closeModal={() => closeModal()}
        title={'Exit from App'}
        subtitle={'Do you really want to logout from Medetuit?'}
        btn_left={'Logout'}
        btn_right={'Cancel'}
      /> */}
       <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding:10
              }}>
              <Text style={{color:'red',fontSize:18}}>Base Model</Text>
        </View>
      
      <View style={styles.list}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View showsVerticalScrollIndicator={false}>
            { guestUser.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.listItem}
                      onPress={() => onPressUser(item, index)}>
                      <View style={styles.drawerRow}>
                        <Text style={{color:colors.primaryColor}}>{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
          </View>
        </ScrollView>
        <View style={{position: 'absolute', bottom: 5, right: 10}}>
        <Text style={{color:colors.primaryColor}}>Base Model 0.01</Text>
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    loginData: state.login
  };
};
export default connect(mapStateToProps)(DrawerMenu);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  imageViewStyle: {width: 167, height: 27, resizeMode: 'contain'},

  headerContainer: {
    height: 133,
    backgroundColor: colors.primaryColor,
    padding: 15,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    borderColor: '#FFF',
    borderWidth: 2,
  },
  profileContainer: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subProfileContainer: {
    paddingLeft: 12,
    paddingVertical: 5,
    flex: 1,
    justifyContent: 'center',
  },
  editProfile: {
    marginTop: 5,
    padding: 3,
    borderWidth: 1,
    borderColor: colors.whiteTextColor,
    width: 69,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  smallText: {
    color: '#88cdb1',
    fontSize: 12,
   // fontFamily: Fonts.HelveticaNeueRegular,
  },
  nameText: {
    marginTop: 1,
    color: colors.blackTextColor,
    fontSize: 17,
   // fontFamily: Fonts.HelveticaNeueMedium,
  },
  headerContent: {
    // paddingHorizontal: 12,
    // paddingVertical: 8,
  },
  list: {
    flex: 1,
    marginTop: 12,
    paddingBottom: 20,
    //backgroundColor: 'red'
  },
  listItem: {
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    //backgroundColor: 'yellow'
  },
  listmenuText: {
    fontSize: 13,
    //fontFamily: Fonts.RobotoMedium,
    color: colors.primaryColor,
    paddingHorizontal: 12,
  },
  drawerRow: {
    marginLeft: 15,
    borderBottomColor: '#00000029',
    borderBottomWidth: 1,
    width: '85%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
});
