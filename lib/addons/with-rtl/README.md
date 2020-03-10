# withRTL

An addon for [`jest-config`](https://www.github.com/moxystudio/jest-config) for projects developed with [React Testing Library](https://github.com/testing-library/react-testing-library).

If you're already using [`withWeb`](../with-web/), you don't need to include this addon.

## Usage

To use addons, use the `compose` function that comes with this package. **Keep in mind**, the first item should always be the default configuration, `baseConfig`! Here's an example of using `compose` to include this addon:

```js
const { compose, baseConfig, withRTL } = require('@moxy/jest-config');

module.exports = compose([baseConfig, withRTL]);
```

## What's included in `withRTL`?

- **Extended matchers:** Make DOM assertions easier and clearer by using [jest-dom](https://github.com/testing-library/jest-dom).
