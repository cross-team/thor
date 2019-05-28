/* eslint-disable max-len */
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
const base = require('../../jest.config.base.js');
const pack = require('./package');

module.exports = {
  ...base,
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['<rootDir>/packages/franklin-thor/src/**/*.{js,jsx,mjs}'],
  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 20,
      lines: 20,
      statements: 20,
    },
  },
  displayName: pack.name,
  name: pack.name,
  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/packages/franklin-thor/src'],
  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: ['<rootDir>/packages/franklin-thor/enzyme.config.js'],
  // Whether to use watchman for file crawling
  watchman: true,
  setupFilesAfterEnv: ['jest-enzyme'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'enzyme',
};
