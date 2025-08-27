import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  globals: { 'ts-jest': { useESM: true } },
  moduleNameMapper: {
    '^@empathy/shared$': '<rootDir>/../shared/src'
  },
  rootDir: '.',
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['<rootDir>/test/**/*.spec.ts']
};

export default config;
