module.exports = {
  "roots": [
    "."
  ],
  "testMatch": [
    "src/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "moduleNameMapper": {
    "^@App/(.*)$": "<rootDir>/src/$1"
  },
}