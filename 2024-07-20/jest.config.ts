module.exports = {
  "roots": [
    "."
  ],
  "testMatch": [
    "test/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "moduleNameMapper": {
    "^@App/(.*)$": "<rootDir>/src/$1"
  },
}