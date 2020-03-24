# Nanos app

![](./data/preview.gif)

## Setup

-   Install dependencies

```sh
npm i
```

-   Make sure you have all required dependencies

```sh
npx checkmate
```

-   Install pods (make sure you are inside ios folder)

```sh
pod install
```

-   Launch application

```sh
react-native (run-ios / run-android)
```

## Libraries highlights

-   `@react-navigation` - used as main navigation library, nice choose between flexibility and performance.
-   `styled-components` - the main tool for styles.
-   `redux` - used for state management in combination with `@reduxjs/toolkit` that help in boilerplate reducing.
-   `axios`, `lodash`, `react-native-iphone-x-helper` - pack of small utils.
-   `i18n-js` and `react-native-localize` - used for internationalization.
-   `react-native-config` - used to expose environment variables to follow [12-FactorApp](https://12factor.net/config).
-   `react-native-fast-image` - replaced build-in image library since it offers performance improvements and cache feature.
-   `victory-native`, `react-native-svg` - used for charts.
-   `prettier`, `husky`, `lint-staged` - pre-commit linting, validation and formatting.
