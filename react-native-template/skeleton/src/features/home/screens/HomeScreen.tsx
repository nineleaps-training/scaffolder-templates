import React, { FC, ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from '@components/Header';

const HomeScreen: FC = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default HomeScreen;
