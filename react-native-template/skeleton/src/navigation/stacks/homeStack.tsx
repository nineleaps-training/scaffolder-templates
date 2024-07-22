import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from '../types';
import HomeScreen from '@features/home/screens/HomeScreen';

type HomeStackParams = {
  [Screens.Home]: undefined;
};

const HomeStack = createStackNavigator<HomeStackParams>();

export const HomeNavigation = (): ReactElement => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name={Screens.Home} component={HomeScreen} />
    </HomeStack.Navigator>
  );
};
