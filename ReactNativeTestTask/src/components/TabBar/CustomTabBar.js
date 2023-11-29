import {BottomTabBar} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { COLORS } from '../../constant/colors';

const CustomTabBar = props => {
  return (
    <>
      <View style={styles.tabBar} />
      <BottomTabBar {...props}/>
    </>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: Platform.OS === 'ios' ? 0 : 0,
    height: 45,
    backgroundColor: COLORS.White,
    shadowColor: COLORS.White
  },
});
