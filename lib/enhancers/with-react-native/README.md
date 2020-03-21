# withReactNative

An addon for [`jest-config`](https://www.github.com/moxystudio/jest-config) for projects built with [ReactNative](https://www.npmjs.com/package/react-native).

⚠️ This enhancer requires you to have [`react-native`](https://www.npmjs.com/package/react-native) installed on your project.

## Usage

To use enhancers, use the `compose` function that comes with this package. **Keep in mind**, the first item should always be the default configuration, `baseConfig`! Here's an example of using `compose` to include this addon:

```js
const { compose, baseConfig, withReactNative } = require('@moxy/jest-config');

module.exports = compose([baseConfig, withReactNative]);
```

## What's included in `withReactNative`?

- **React Native Jest preset:** Adds [`react-native/jest-preset`](https://github.com/facebook/react-native/blob/master/jest-preset.js) into the jest config.
