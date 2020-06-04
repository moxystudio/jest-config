This README contains documentation for the following enhancers:

- [withEnzymeWeb](#withenzymeweb)
- [withEnzymeReactNative](#withenzymereactnative)

# withEnzymeWeb

An enhancer for Web projects tested with [Enzyme](https://github.com/airbnb/enzyme).

## What's included?

- **Automatic adapter setup**: Setups the enzyme adapter automatically based on the desired one.
- **Wrapper snapshotting**: Ability to snapshot Enzyme wrappers by using [enzyme-to-json](https://www.npmjs.com/package/enzyme-to-json).
- **Extended matchers**: Make assertions easier and clearer by using `jest-enzyme` [matchers](https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme#assertions).

## Usage

To use this enhancer, use the `compose` function that comes with this package. **Keep in mind**, the first item should always be the base configuration!

```js
const { compose, baseConfig, withEnzymeWeb } = require('@moxy/jest-config');

module.exports = compose(
    baseConfig(),
    withEnzymeWeb('enzyme-adapter-react-16'),
);
```

⚠️ Note that you **must install** the Enzyme adapter yourself. In the example above, you would have to install `enzyme-adapter-react-16`:

```sh
$ npm install --save-dev enzyme-adapter-react-16
```

# withEnzymeReactNative

An enhancer for React Native projects tested with [Enzyme](https://github.com/airbnb/enzyme).

## What's included?

- **Automatic adapter setup**: Setups the enzyme adapter automatically based on the desired one.
- **Wrapper snapshotting**: Ability to snapshot Enzyme wrappers by using [enzyme-to-json](https://www.npmjs.com/package/enzyme-to-json).
- **Ignore certain warnings and errors**: [Ignore warnings and errors](https://github.com/enzymejs/enzyme/issues/831) produced by React due to the fact that we are using JSDOM in React Native, as [prescribed](https://enzymejs.github.io/enzyme/docs/guides/react-native.html) by Enzyme.
- **Extended matchers**: Make assertions easier and clearer by using `jest-enzyme` [matchers](https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme#assertions). Only React Native-compatible matchers are installed:
    - `toBeDisabled()`
    - `toBeEmptyRender()`
    - `toExist()`
    - `toContainMatchingElement()`
    - `toContainMatchingElements()`
    - `toContainExactlyOneMatchingElement()`
    - `toContainReact()`
    - `toHaveDisplayName()`
    - `toHaveProp()`
    - `toHaveRef()`
    - `toHaveState()`
    - `toIncludeText()`
    - `toMatchElement()`
    - `toMatchSelector()`

## Usage

To use this enhancer, use the `compose` function that comes with this package. **Keep in mind**, the first item should always be the base configuration!

```js
const { compose, baseConfig, withEnzymeReactNative } = require('@moxy/jest-config');

module.exports = compose(
    baseConfig(),
    withEnzymeReactNative('enzyme-adapter-react-16', options),
);
```

⚠️ Note that you **must install** the Enzyme adapter yourself. In the example above, you would have to install `enzyme-adapter-react-16`:

### options

#### ignoreExtraMessagePatterns

Type: `Array`
Default: `[]`

An array of regexp pattern strings that are matched against errors or warnings emitted by React and filtered out. There are several messages which already ignored by default. This option allows to exclude additional messages if necessary.

```sh
$ npm install --save-dev enzyme-adapter-react-16
```

