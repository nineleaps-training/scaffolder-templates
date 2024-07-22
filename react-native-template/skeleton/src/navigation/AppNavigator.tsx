import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { AuthNavigation } from './stacks/authStack';
import { HomeNavigation } from './stacks/homeStack';

export const AppNavigator = (): ReactElement => {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <View style={styles.flex}>
          <HomeNavigation />
        </View>
      ) : (
        <View style={styles.flex}>
          <AuthNavigation />
        </View>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
