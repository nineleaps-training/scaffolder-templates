import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from '@navigation/AppNavigator';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'} />
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;
