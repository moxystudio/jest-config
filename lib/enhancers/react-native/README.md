# withReactNative

An enhancer for projects built with [React Native](https://reactnative.dev/).

⚠️ This enhancer requires you to have [`react-native`](https://www.npmjs.com/package/react-native) installed in your project.

## What's included?

- **React Native Jest preset:** Adds [`react-native/jest-preset`](https://github.com/facebook/react-native/blob/master/jest-preset.js) to configure the environment.
- **Transform**: Allows importing common files used in React Native projects, such as fonts, images and videos.

## Usage

To use this enhancer, use the `compose` function that comes with this package. **Keep in mind**, the first item should always be the base configuration!

```js
const { compose, baseConfig, withReactNative } = require('@moxy/jest-config');

module.exports = compose(
    baseConfig('node'),
    withReactNative(),
);
```

The enhancer accepts an options object as the first argument with the following keys:

- `transformModules`: A function that allows you to add (or remove) modules to be transformed by Babel. It has the following signature `(patterns) => newPatterns`, where the default `patterns` are `['(jest-)?react-native(-.*)?/', '@react-native-community/']`.

To showcase the usefulness of `transformModules`, let's pretend that you use [React Navigation](https://reactnavigation.org/) in your project. You would need to compile its packages to make them work in Jest, so you would add them to `transformModules` like so:

```js
const { compose, baseConfig, withReactNative } = require('@moxy/jest-config');

module.exports = compose(
    baseConfig('node'),
    withReactNative({
        transformModules: (patterns) => [...patterns, '@react-navigation/'],
    }),
);
```
