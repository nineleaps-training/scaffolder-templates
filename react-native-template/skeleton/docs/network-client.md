# Network Client

Network client is a wrapper around the popular network libraries like axios, fetch, etc. It provides a unified interface to make network requests.
The choice of the network library is based on the following considerations:

1. Should be popular and well maintained.
2. Should be easy to add interceptors for requests & responses
3. Should be easy to handle errors
4. Should be easy to add custom headers
5. Should be easy to configure the timeouts, etc.
6. Should be easy to mock the network requests for testing
7. Should have support for types

Based on the above considerations, we have chosen **axios** as the default network library. However, you can easily change it to any other library of your choice.

1. Add `axios` as a dependency to your project.

    ```shell
    yarn add axios
    ```

2. Add the following files to `src/network` module
    - ApiClient.ts
      - Wrapper class around the network library
    - AuthHelper.ts
      - Helper class to handle authentication related logic
    - ApiError.ts
      - Custom error class to handle network errors


### Note:
The above files are just a starting point. Feel free to add more helper classes to handle other common network related logic like caching, etc.
