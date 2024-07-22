# Navigation

[React Navigation](https://reactnavigation.org/) is the recommended library for navigation in React Native apps. It is easy to use, customizable and has support for web, iOS and Android.

## Installation
Follow https://reactnavigation.org/docs/getting-started to install the required dependencies.

```shell
yarn add @react-navigation/native
yarn add react-native-screens react-native-safe-area-context
```

Navigate to the `ios` folder and install the pods

```shell
cd ios
pod install
```

`react-native-screens` package requires one additional configuration step to properly work on Android devices. Edit **MainActivity.java** with the following changes:

```java
//...
import android.os.Bundle;

public class MainActivity extends ReactActivity {
  // ...
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  // ...
}
```

### Add Stack Navigation
In most applications, you will need to add a stack navigator to group screens into stacks and handle the navigation between them. See https://reactnavigation.org/docs/stack-navigator for more details.

```shell
yarn add @react-navigation/stack

yarn add react-native-gesture-handler
```

Add the following to the top of `index.js` file
```js
import 'react-native-gesture-handler';
// rest of the imports

// ...
```

Navigate to the `ios` folder and install the pods

```shell
cd ios
pod install
```

### (Optional) Add Bottom Tabs Navigation
See https://reactnavigation.org/docs/tab-based-navigation for more details.
```shell
yarn add @react-navigation/bottom-tabs
```

## Screens
Screens are the components that are rendered when a navigation action occurs. They are usually placed in the `src/screens` folder, or `src/features/<feature-name>/screens` folder.

Screens are identified by a unique name, which is used to navigate to the screen. The name is usually the same as the component name, but it can be different if required. We recommend using an enum to store the screen names.

```ts
// src/navigation/types.ts
export enum Screens {
  Login = 'Login',
  Home = 'Home'
}
```

## Navigation Stacks
Its common to group screens into different stacks. For example, you could have a `AuthStack` for all the authentication related screens, and a `HomeStack` for all the screens related to the home page. Similar to screens, we recommend using an enum to store the stack names.

```ts
// src/navigation/types.ts
export enum Stacks {
  Auth = 'AuthStack',
  Home = 'HomeStock'
}
```
**Note**: Suffix all stack names with `Stack` to avoid naming conflicts with screens.

### Managing Stacks
We recommend creating a separate file to manage each stack.  All stacks should be added to `src/navigation/stacks` folder. For example, you could create a `authStack.tsx` file to manage the `AuthStack`.

```tsx
// src/navigation/stacks/authStack.tsx
import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screens, WebviewScreenParams } from '../types';
import LoginScreen from '@features/auth/screens/LoginScreen';

type AuthStackParams = {
  [Screens.Login]: undefined;
};

const AuthStack = createStackNavigator<AuthStackParams>();

export const AuthNavigation = (): ReactElement => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={Screens.Login} component={LoginScreen} />
    </AuthStack.Navigator>
  );
};
```

## App Navigation
The `AppNavigator` component is the root component for the app. It is responsible for rendering the navigation stacks and handling the navigation state. It should be placed in the `src/navigation` folder.

```tsx
// src/navigation/AppNavigator.tsx
import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthNavigation } from './stacks/authStack';
import { HomeNavigation } from './stacks/homeStack';

export const AppNavigator = (): ReactElement => {
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <SafeAreaView style={styles.flex}>
          <HomeNavigation />
        </SafeAreaView>
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
```

### Update App.tsx

```tsx
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

```




