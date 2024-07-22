# Project Structure

## What & Why

- <https://www.developerway.com/posts/react-project-structure>
- <https://scrimba.com/articles/react-project-structure/>
- <https://www.robinwieruch.de/react-folder-structure/>
- <https://blog.webdevsimplified.com/2022-07/react-folder-structure/>

## Project structure in Template

```sh
.
├── assets
│   ├── fonts
│   ├── icons
│   └── images
├── components
├── contexts
├── features
│   ├── feature1
│   └── feature2
├── helpers
├── hooks
├── domain
│   ├── models
│   └── repositories
├── navigation
├── network
├── services
└── styles
```

### Features

We recommend splitting the application into features, and grouping them under the `features` package. Examples could include *technical* features like **authentication**, but also *business-related* features. For instance, in an e-commerce application, **checkout**, **payments**, etc. could be some of the features. Within each *feature* package, you can have feature specific components, contexts, models, etc.

For simpler applications, you could replace the `features` package with a simple `screens` package to keep the **Screen** components here.

### Components

This is where the majority of the UI code is expected to reside. Depending on the size and complexity of your project, this package could be further split into sub-packages, ranging from simple bespoke grouping to using the [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/).

We recommend you keep your tests, styles, stories, etc. co-located with the component. Ex: For a **Button** component, the folder could look like this:

```sh
.
├── components
│   ├── Button
│       ├── index.tsx
│       ├── styles.ts
│       ├── button.test.tsx
│       └── ...
```

### Hooks

Custom hooks used in the application go here. You could also leverage 3rd-party packages like [react-use](https://github.com/streamich/react-use) and [useHooks](https://usehooks.com/).

### Contexts

Custom Contexts and Providers go here. Please note that it is recommended to keep certain contexts within a package, instead of moving it here. Ex: It would be better to keep the `ThemeContext` inside the **styles** package, `RouteContext` within the **navigation/routing** package, etc.

### Navigation / Routing

This is where we recommend you manage the routing-related logic. Hooks, Contexts, models & interfaces, etc. related to navigation/routing should be managed here. Please note that you could have some of the routes managed from within the **features** package and later injected into the **navigation** package interfaces.

### Network

Network/API related code should be managed here. API interceptors, interfaces, etc. belong here. Think of this to be the wrapper around the underlying network library - `axios`, `fetch`, etc.

### Services

Services could be specialized or domain/feature specific. For example, `CookieService`, `StorageService`, etc. would provide specialized abstractions on interactions with Cookies, LocalStorage, etc.
Domain services would be wrappers around the domain specific APIs and use-cases. Ex: `UserService` would have all the API calls related to `User` feature. You could also keep these services within the **features** package, if they are not used in other features.

### Helpers

Helper or Utility classes/function would reside here. Ex: DateHelpers, etc.

### Domain/Models

Custom types, interfaces & enums used in the application would be managed here. These could include your View Models and API models. Please note that these models are expected to be used app-wide or across features.

### Domain/Repositories

Repositories map to the backend API endpoints. Any request/response model transformations are expected to be done here.

### Styles

This is where you would manage your app-wide styles. Your theme context, definitions, style macros, style variables, etc. would reside here.

### Assets

This is where *static* files like images, fonts, etc. are kept. These are expected to be used app-wide.
