'use strict';

const { withRTL, withNTL } = require('.');

describe('withRTL', () => {
    const buildConfig = () => ({
        testEnvironment: 'jsdom',
        setupFilesAfterEnv: ['foo'],
    });

    it('should match snapshot', () => {
        expect(withRTL()(buildConfig())).toMatchSnapshot();
    });

    it('should throw if testEnvironment is not jsdom', () => {
        const config = {
            ...buildConfig(),
            testEnvironment: 'node',
        };

        expect(() => withRTL()(config)).toThrow(/expected testEnvironment to be set to "jsdom"/i);
    });
});

describe('withNTL', () => {
    const buildConfig = () => ({
        testEnvironment: 'node',
        setupFilesAfterEnv: ['foo'],
        setupFiles: ['bar'],
        snapshotSerializers: ['baz'],
    });

    it('should match snapshot', () => {
        expect(withNTL()(buildConfig())).toMatchSnapshot();
    });

    it('should throw if testEnvironment is not node', () => {
        const config = {
            ...buildConfig(),
            testEnvironment: 'jsdom',
        };

        expect(() => withNTL()(config)).toThrow(/expected testEnvironment to be set to "node"/i);
    });
});

