This README contains documentation for the following enhancers:

- [withRTL](#withrtl)

# withRTL

An enhancer for Web projects tested with [React Testing Library](https://github.com/testing-library/react-testing-library).

## What's included?

- **Extended matchers:** Make assertions easier and clearer by using [jest-dom](https://github.com/testing-library/jest-dom).

## Usage

To use this enhancer, use the `compose` function that comes with this package. **Keep in mind**, the first item should always be the base configuration!

```js
const { compose, baseConfig, withRTL } = require('@moxy/jest-config');

module.exports = compose(
    baseConfig(),
    withRTL(),
);
```
