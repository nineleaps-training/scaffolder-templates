import React, { FC, ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LoginScreen: FC = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
