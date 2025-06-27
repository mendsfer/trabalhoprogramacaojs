
/** @type {import('jest').Config} */
module.exports = {
  
  clearMocks: true,

  collectCoverage: true,

  collectCoverageFrom: ['src/**/*.js'],

  coverageDirectory: 'reports/coverage',

  coverageProvider: 'babel',

  coverageReporters: ['text', 'lcov'],

  setupFiles: ['<rootDir>/test/setup.js'],

  testEnvironment: 'jest-environment-jsdom',

  testPathIgnorePatterns: ['/node_modules/', '/e2e/'],

  transform: {},

};
