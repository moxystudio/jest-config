# jest-config

[![Build Status][build-status-image]][build-status-url] [![Coverage Status][codecov-image]][codecov-url]

[build-status-url]:https://github.com/moxystudio/jest-config/actions
[build-status-image]:https://img.shields.io/github/workflow/status/moxystudio/jest-config/Node%20CI/master
[codecov-url]:https://codecov.io/gh/moxystudio/jest-config
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/jest-config/master.svg

MOXY's set of [Jest](https://jestjs.io/) configuration packages to be used across several JavaScript projects.

## How it works

This package contains two sets of Jest configurations to be used in JavaScript projects:

- the **base** configuration, which defines standard settings to be shared by all projects.
- the **enhancers**, which contain settings targeted to specific testing frameworks and enviroments, such as: browsers, React Native, Enzyme, Testing Library, etc..

For more information on how to use each package and their respective configurations, please refer to the READMEs by following the links below. You may also check the examples listed in [Typical configs](#typical-configs) below to see learn how the packages may be combined for the most common scenarios.

### Base config

The base config is published as [`@moxy/jest-config-base`](packages/jest-config-base). Check out its README to learn how to use it.

### Enhancer configs

There are several **enhancer** packages, which are intended to be used in conjunction with the **base** configuration:

- [`@moxy/jest-config-web`](packages/jest-config-web) - If you're developing a web project.
- [`@moxy/jest-config-react-native`](packages/jest-config-react-native) - If you're developing a [React Native](https://reactnative.dev/) app.
- [`@moxy/jest-config-enzyme`](packages/jest-config-enzyme) - If you're using [Enzyme](https://enzymejs.github.io/enzyme/) framework.
- [`@moxy/jest-config-testing-library`](packages/jest-config-testing-library) - If you're using [React Testing Library (RTL)](https://github.com/testing-library/react-testing-library) or [Native Testing Library (NTL)](https://github.com/testing-library/native-testing-library) frameworks.

# Typical configs

<details>
  <summary>Node.js project</summary>

  ```js
  const { baseConfig } = require('@moxy/jest-config-base');
    
  module.exports = baseConfig('node');
  ```

</details>

<details>
  <summary>Web project with Enzyme</summary>

  ```js
  const { compose, baseConfig } = require('@moxy/jest-config-base');
  const withWeb = require('@moxy/jest-config-web');
  const { withEnzymeWeb } = require('@moxy/jest-config-enzyme');
    
  module.exports = compose(
    baseConfig(),
    withWeb(),
    withEnzymeWeb('enzyme-adapter-react-16'), // ⚠️ Always after .withWeb
  );
  ```

</details>

<details>
  <summary>Web project with RTL</summary>

  ```js
  const { compose, baseConfig } = require('@moxy/jest-config-base');
  const withWeb = require('@moxy/jest-config-web');
  const { withRTL } = require('@moxy/jest-config-testing-library');
    
  module.exports = compose(
    baseConfig(),
    withWeb(),
    withRTL(), // ⚠️ Always after .withWeb
  );
  ```

</details>

<details>
  <summary>React Native project with Enzyme</summary>

  ```js
  const { compose, baseConfig } = require('@moxy/jest-config-base');
  const withReactNative = require('@moxy/jest-config-react-native');
  const { withEnzymeReactNative } = require('@moxy/jest-config-enzyme');
    
  module.exports = compose(
    baseConfig(),
    withReactNative(),
    withEnzymeReactNative('enzyme-adapter-react-16'), // ⚠️ Always after .withReactNative
  );
  ```

</details>

<details>
  <summary>React Native project with NTL</summary>

  ```js
  const { compose, baseConfig } = require('@moxy/jest-config-base');
  const withReactNative = require('@moxy/jest-config-react-native');
  const { withNTL } = require('@moxy/jest-config-testing-library');
    
  module.exports = compose(
    baseConfig('node'),
    withReactNative(),
    withNTL(), // ⚠️ Always after .withReactNative
  );
  ```
    
</details>

## Older versions

If you want to read the change log of an older version, please check [here](https://github.com/moxystudio/jest-config/blob/v4.2.1/CHANGELOG.md).

## License

Released under the [MIT License](https://opensource.org/licenses/mit-license.php).
