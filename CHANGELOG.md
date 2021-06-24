# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [6.1.0](https://github.com/moxystudio/jest-config/compare/v6.0.0...v6.1.0) (2021-06-24)


### Features

* **jest-config-base:** add json5 support ([#41](https://github.com/moxystudio/jest-config/issues/41)) ([f6898b0](https://github.com/moxystudio/jest-config/commit/f6898b017a15833d65bad3aa9ec494529749b8a7))



## [6.0.0](https://github.com/moxystudio/jest-config/compare/v5.3.0...v6.0.0) (2021-05-26)


### ⚠ BREAKING CHANGES

* migrate @testing-library/react-native support to v7+
where Callstack's react-native-testing-library has been merged into.

### Bug Fixes

* jest-native peer dep on react-native and migrate to ntl v7 ([55ace1b](https://github.com/moxystudio/jest-config/commit/55ace1b043edcae919812646ec99c5972ae46961))



## [5.3.0](https://github.com/moxystudio/jest-config/compare/v5.2.0...v5.3.0) (2021-04-22)


### Features

* **base config:** add gltf file transform ([#34](https://github.com/moxystudio/jest-config/issues/34)) ([6e3ec3c](https://github.com/moxystudio/jest-config/commit/6e3ec3c907b0a47b3bea9a48a52b7001e16e0880))



## [5.2.0](https://github.com/moxystudio/jest-config/compare/v5.1.0...v5.2.0) (2021-02-07)


### Features

* add typeahead watch plugin ([c8cd450](https://github.com/moxystudio/jest-config/commit/c8cd450025bc387e35ab13a9cc7d01e2695d683e))



## 5.1.0 (2020-06-17)

* feat: add native testing library setup ([07e7912](https://github.com/moxystudio/jest-config/commit/07e7912))





## 5.0.0 (2020-06-15)

* chore: fix READMEs headings ([e8aeb6b](https://github.com/moxystudio/jest-config/commit/e8aeb6b))
* chore: fix READMEs syntax ([d83581f](https://github.com/moxystudio/jest-config/commit/d83581f))
* chore: modularize repository into several packages ([235c105](https://github.com/moxystudio/jest-config/commit/235c105))
* chore: setup Node.js CI with Actions (#23) ([c166020](https://github.com/moxystudio/jest-config/commit/c166020)), closes [#23](https://github.com/moxystudio/jest-config/issues/23)





# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.2.1](https://github.com/moxystudio/jest-config/compare/v4.2.0...v4.2.1) (2020-06-05)


### Bug Fixes

* ignore known enzyme/jsdom warnings emitted in React Native ([9f97533](https://github.com/moxystudio/jest-config/commit/9f97533be936c634134dfec32ff4f63ca046406c))
* use require.resolve to include React Native setup file ([1f09586](https://github.com/moxystudio/jest-config/commit/1f09586707b1b8cea07d67ed46ab295bf81f5e5b))

## [4.2.0](https://github.com/moxystudio/jest-config/compare/v4.1.0...v4.2.0) (2020-05-06)


### Features

* support jest v26 ([091332b](https://github.com/moxystudio/jest-config/commit/091332bbc4366c3f17a770f7530171753e6ccedc))

## [4.1.0](https://github.com/moxystudio/jest-config/compare/v4.0.1...v4.1.0) (2020-04-28)


### Features

* add node single context environment ([#20](https://github.com/moxystudio/jest-config/issues/20)) ([5d32005](https://github.com/moxystudio/jest-config/commit/5d3200554b1f0bf2b10d456864a9d578a09bcdd1))


### Bug Fixes

* add enzyme matchers to react native enhancer ([#19](https://github.com/moxystudio/jest-config/issues/19)) ([f2375f7](https://github.com/moxystudio/jest-config/commit/f2375f70058b57e84b83e2fbb5b98583719c2d21))
* move animated mock to react native enhancer ([#18](https://github.com/moxystudio/jest-config/issues/18)) ([8798738](https://github.com/moxystudio/jest-config/commit/879873885d2846854be52a8ccb31253e6b68b7b2))

### [4.0.1](https://github.com/moxystudio/jest-config/compare/v4.0.0...v4.0.1) (2020-03-23)


### Bug Fixes

* remove unused dependency ([59b7d11](https://github.com/moxystudio/jest-config/commit/59b7d119023234271e9deba8e25d4d7bb945696c))

## [4.0.0](https://github.com/moxystudio/jest-config/compare/v3.0.0...v4.0.0) (2020-03-23)


### ⚠ BREAKING CHANGES

* the base configuration no longer contains transforms nor mappings other than JavaScript files
* baseConfig and enhancers are now factories
* enhancers now validate if the test environment is correctly set
* withEnzyme now has mandatory target argument
* compose now accepts baseConfig as the first argument and enhancers are spread-ed after it

### Features

* add react-native enhancers ([#16](https://github.com/moxystudio/jest-config/issues/16)) ([df9d662](https://github.com/moxystudio/jest-config/commit/df9d662cae3c29aea0c548b82ab31c48c4ad8a4d))


### Bug Fixes

* fix testMatch pattern to not accept jsx ([#13](https://github.com/moxystudio/jest-config/issues/13)) ([55dc8b0](https://github.com/moxystudio/jest-config/commit/55dc8b0f80566fd8f5f7237229221e01d012bbbf))

## [3.0.0](https://github.com/moxystudio/jest-config/compare/v2.1.0...v3.0.0) (2020-03-20)


### ⚠ BREAKING CHANGES

* no longer detect .spec.js files (#12)

### Features

* no longer detect .spec.js files ([#12](https://github.com/moxystudio/jest-config/issues/12)) ([379d462](https://github.com/moxystudio/jest-config/commit/379d4629a757792a64f1b427b7f773b5125bfcf7))

## [2.1.0](https://github.com/moxystudio/jest-config/compare/v2.0.2...v2.1.0) (2020-03-14)


### Features

* add jestConfig to baseConfig ([#10](https://github.com/moxystudio/jest-config/issues/10)) ([b86a4ad](https://github.com/moxystudio/jest-config/commit/b86a4ad65531e473a3b07b6fe25d346781746c15))

### [2.0.2](https://github.com/moxystudio/jest-config/compare/v2.0.1...v2.0.2) (2020-03-10)

### [2.0.1](https://github.com/moxystudio/jest-config/compare/v2.0.0...v2.0.1) (2020-03-10)


### Bug Fixes

* remove peer dependency warning about react ([2aef3a0](https://github.com/moxystudio/jest-config/commit/2aef3a0876fb9a3a5c8abd5f2b2b108d6a53dbb5))

## [2.0.0](https://github.com/moxystudio/jest-config/compare/v1.4.1...v2.0.0) (2020-02-21)


### ⚠ BREAKING CHANGES

* withWeb addon no longer comes with RTL by default

### Features

* add support for enzyme ([#8](https://github.com/moxystudio/jest-config/issues/8)) ([ec260d2](https://github.com/moxystudio/jest-config/commit/ec260d2ba39afebaf8d5ba4d0086081500edbeb4))

### [1.4.1](https://github.com/moxystudio/jest-config/compare/v1.4.0...v1.4.1) (2020-01-23)


### Bug Fixes

* fix previous commit ([c792db4](https://github.com/moxystudio/jest-config/commit/c792db4c66ca3073722a9a5573a9f5b8cfa36e41))

## [1.4.0](https://github.com/moxystudio/jest-config/compare/v1.3.0...v1.4.0) (2020-01-23)


### Features

* ignore docusaurus in the web addon ([008d17f](https://github.com/moxystudio/jest-config/commit/008d17fbdda27dd2d1aa64a2e81024a217ffee0a))

## [1.3.0](https://github.com/moxystudio/jest-config/compare/v1.2.0...v1.3.0) (2020-01-22)


### Features

* support jest@15 ([312e86a](https://github.com/moxystudio/jest-config/commit/312e86a248939cbcabc238ddd2770ff1ebcd1a89))

## [1.2.0](https://github.com/moxystudio/jest-config/compare/v1.1.1...v1.2.0) (2019-12-17)


### Features

* add api to collect coverage from in the web addon ([923150f](https://github.com/moxystudio/jest-config/commit/923150f2395c16bc430886ea23b56c1751b238e6))

### [1.1.1](https://github.com/moxystudio/jest-config/compare/v1.1.0...v1.1.1) (2019-11-21)


### Bug Fixes

* transformers not generating interop code ([#5](https://github.com/moxystudio/jest-config/issues/5)) ([7047b45](https://github.com/moxystudio/jest-config/commit/7047b45847d2a3dd85b3561dcd2ab9070c58e2a3))

## [1.1.0](https://github.com/moxystudio/jest-config/compare/v1.0.2...v1.1.0) (2019-11-07)


### Features

* implement rtl addon ([#3](https://github.com/moxystudio/jest-config/issues/3)) ([3d73965](https://github.com/moxystudio/jest-config/commit/3d739657ec957d5c3e025474aadd70a86ad4d2ee))


### Bug Fixes

* add missing babel-jest dependency ([db1c38e](https://github.com/moxystudio/jest-config/commit/db1c38efb7ae2ec5297182f02b684e29d37dc690))

### [1.0.2](https://github.com/moxystudio/jest-config/compare/v1.0.1...v1.0.2) (2019-11-05)


### Bug Fixes

* add repo to package.json ([7e0d554](https://github.com/moxystudio/jest-config/commit/7e0d5543afd7b24ad3770e5be99896074eef28c8))

### [1.0.1](https://github.com/moxystudio/jest-config/compare/v1.0.0...v1.0.1) (2019-11-05)

## 1.0.0 (2019-11-05)


### Features

* initial implementation ([b07a971](https://github.com/moxystudio/jest-config/commit/b07a97139483872b5267eab2d7bc3363db9f7157))
