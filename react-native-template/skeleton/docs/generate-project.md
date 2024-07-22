# Generate a new project using React Native CLI

1. Ensure the development environment is correctly setup. Follow the steps in [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup)

2. Use/install the latest LTS version of node

    Search for `node lts`. On `https://nodejs.org/en` you'll get to see the latest LTS version. At the time of writing this documentation, the latest LTS version of node is **20.9.0**

    **Install [nvm](https://github.com/nvm-sh/nvm), if you don't already have it.**

    Install and switch to the LTS version
    ```sh
    nvm install v20.9.0
    nvm use v20.9.0
    ```

3. Add `.nvmrc` file with node version. This enables an easy way of installing/switching the node version when working on the project
    ```shell
    echo "v20.9.0" > .nvmrc
    ```

    ```sh
    # to install the node version
    nvm install
  
    # to switch to the node version
    nvm use
    ```

4. Install `yarn` if you do not have it already.

    ```sh
    npm install -g yarn
    ```

5. Use [React Native CLI](https://reactnative.dev/docs/environment-setup?#creating-a-new-application) to scaffold the application.

   Replace `MyApp` with the name of your app

   ```sh
   npx react-native@latest init MyApp
   ```

6. Add the following to **package.json**, to ensure the correct version of node is used when running the project.

    ```json
      "engines": {
        "node": "20.9.0",
        "npm": "^9"
      }
    ```

   Most package managers use `engines.node` to ensure your local version is compatible with the constraints.

7. Verify if the project is set up correctly by running the project on iOS & Android

    ```sh
    yarn start
   
    # or
    yarn ios
    yarn android
    ```
8. Update `README.md` & `.gitignore` as needed

## Useful Tips
1. In case you want to update your App name & bundle identifier, you can use [react-native-rename](https://www.npmjs.com/package/react-native-rename).

    ```sh
    npx react-native-rename "My New App" -b com.mycompany.mynewapp
    ```
