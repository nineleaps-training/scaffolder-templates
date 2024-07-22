# Persistent Storage
Certain information needs to be persisted across app restarts. We recommend using [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) for this purpose. It is a simple, unencrypted, asynchronous, persistent, key-value storage system that is global to the app.

## LocalStorage
Install the package:
```shell
yarn add @react-native-async-storage/async-storage
```

Navigate to the `ios` folder and install the pods

```shell
cd ios
pod install
```

### Create a wrapper class for accessing the storage
Create a file `src/helpers/LocalStorage.ts` with the following content:
```ts
import AsyncStorage from '@react-native-community/async-storage';

class LocalStorage {
  public get = async <T>(key: string): Promise<T | null> => {
    const value: string | null = await AsyncStorage.getItem(key);
    if (!value) {
      return null;
    }

    return JSON.parse(value) as T;
  };

  public set = async <T>(key: string, data: T): Promise<void> => {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  };

  public remove = async (key: string): Promise<void> => {
    await AsyncStorage.removeItem(key);
  };

  public reset = async (): Promise<void> => {
    await AsyncStorage.clear();
  };

  public clear = async (keys?: string[]): Promise<void> => {
    await AsyncStorage.multiRemove(keysToRemove || []);
  };
}

const localStorage = new LocalStorage();
export { localStorage as LocalStorage };
```

### Local Storage keys
As LocalStorage could be used across the app, its also important to centralize the list of keys that are used in the app.

To do this, add this to the above file:
```ts
// src/helpers/LocalStorage.ts

// ...

export const LocalStorageKeys = {
  TOKEN: '@user_token'
};

export type LocalStorageKeysType = keyof typeof LocalStorageKeys;
```

### Usage
```ts
import { LocalStorage, LocalStorageKeys } from '@helpers/LocalStorage';

const token = await LocalStorage.get<string>(LocalStorageKeys.TOKEN);

await LocalStorage.set<Record<string, any>>(AsyncLLocalStorageKeys.USER, { id: 1, name: 'John Doe' });
```

## Secure Storage
Certain information needs to be persisted across app restarts, but also needs to be encrypted. AsyncStorage is not encrypted, so it is not ideal for this. For this, create a separate helper class `SecureStorage.ts`.

You could evaluate the following:
https://medium.com/@talsec/safeguarding-your-data-in-react-native-secure-storage-solutions-97fce1db97e0
