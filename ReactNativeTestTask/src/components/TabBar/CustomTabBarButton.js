import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {useTheme} from '@react-navigation/native';
import Svg, {Path} from 'react-native-svg';
import { COLORS } from '../../constant/colors';

const CustomTabBarButton = props => {
  const {colors} = useTheme();
  const styles = GetStyles();
  const {
    route,
    children,
    accessibilityState,
    onPress,
    name,
    inactiveTintColor,
  } = props;

  if (accessibilityState.selected) {
    return (
      <View style={styles.btnWrapper}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              styles.svgGapFiller,
              {
                borderTopLeftRadius: route === 'Home' ? 10 : 0,
              },
            ]}
          />
          <Svg viewBox="162.714 132 75.3 82.325" width={75.3} height={82.325}>
            <Path
              d="M237.914 132v80.81l-75.2.515V132c4.1 0 7.4 3.1 7.9 7.1 2.1 14.6 14.6 25.9 29.8 25.9 15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.White}
              data-bx-origin="0.5 0.540984"
            />
          </Svg>
          <View
            style={[
              styles.svgGapFiller,
              {
                borderTopRightRadius: route === 'More' ? 10 : 0,
              },
            ]}
          />
        </View>

        <TouchableOpacity
          onPress={onPress}
          style={[styles.activeBtn]}>
          <View>{children}</View>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View
        style={[
          styles.inactiveBtn,
          {
            borderTopLeftRadius: name === 'Home' ? 10 : 0,
            borderTopRightRadius: name === 'More' ? 10 : 0,
          },
        ]}>
        <TouchableOpacity
          onPress={onPress}
          style={{top: Platform.OS === 'ios' ? -25 : -20}}>
          <View style={styles.children}>{children}</View>
          <Text
            style={{
              marginTop: -15,
              color: COLORS.Black60,
            }}>
            {name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default CustomTabBarButton;

const GetStyles = () => {

  return (styles = StyleSheet.create({
    btnWrapper: {
      flex: 1,
      alignItems: 'center',
    },
    children: {
      paddingTop: Platform.OS === 'ios' ? 15 : 0,
    },
    activeBtn: {
      flex: 1,
      position: 'absolute',
      top: -22,
      width: 50,
      height: 50,
      borderRadius: 50 / 2,
      backgroundColor: COLORS.Black100,
      alignItems: 'center',
      justifyContent: 'center',

      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,

      elevation: 28,
      shadowColor: COLORS.Black90,
      borderColor: 'transparent',
    },
    inactiveBtn: {
      flex: 1,
      backgroundColor: COLORS.White,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80,
      top: 0,
    },
    svgGapFiller: {
      flex: 1,
      backgroundColor: COLORS.White,
      marginHorizontal: -2,
      height: 80,
    },
  }));
};
