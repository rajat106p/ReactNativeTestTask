import React from 'react';
import AppStack from './appRoute';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Route = () => {

  return (
    <Stack.Navigator
    initialRouteName='BottomTabs'
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      {AppStack(Stack)}
    </Stack.Navigator>
  );
};

export default Route;
