module.exports = {
  testEnvironment: 'node',
  clearMocks: true,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      diagnostic: true,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  testMatch: ['**/*.spec.(js|ts)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
