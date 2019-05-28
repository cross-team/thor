module.exports = {
  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx'],
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['(tests/.*.mock).(js?|jsx?)$'],
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  // The root directory that Jest should scan for tests and modules within
  rootDir: '../..',
  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  // The regexp pattern Jest uses to detect test files
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|jsx?)$',
  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  // Indicates whether each individual test should be reported during the run
  verbose: false,
};
