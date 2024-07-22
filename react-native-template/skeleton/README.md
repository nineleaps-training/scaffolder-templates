# React Native Template
This project aims to be a foundation for react-native applications. It provides a clear and organized structure, with recommendations for required implementations.

This is a [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Prerequisites

- [Node.js 20.9.0](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [yarn](https://yarnpkg.com))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 15](https://developer.apple.com/xcode)
- [Cocoapods](https://cocoapods.org)
- [JDK 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Getting Started

#### 1. Clone the repository

   ```sh
   git clone https://github.com/nineleaps-training/react-native-template
   ```

#### 2. Install dependencies

   ```sh
   yarn install
   ```

#### 3. Start the Metro Server

   First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.
   
   To start Metro, run the following command from the _root_ of your React Native project:
   
   ```bash
   yarn start
   ```

#### 4. Run the Application

   Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:
   
   ##### For Android
   
   ```bash
   yarn android
   ```

   ##### For iOS
   
   ```bash
   yarn ios
   ```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Useful Commands

#### 1. Run lint

  ```sh
  yarn lint
  ```

#### 2. Run lint with auto-fix

  ```sh
  yarn lint --fix
  ```
