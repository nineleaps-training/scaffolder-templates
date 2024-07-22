import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from '../types';
import LoginScreen from '@features/auth/screens/LoginScreen';

type AuthStackParams = {
  [Screens.Login]: undefined;
};

const AuthStack = createStackNavigator<AuthStackParams>();

export const AuthNavigation = (): ReactElement => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name={Screens.Login} component={LoginScreen} />
    </AuthStack.Navigator>
  );
};
