module.exports = {
  "roots": [
    "."
  ],
  "testMatch": [
    "test/unit/**/*.+(ts|tsx|js)",
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "moduleNameMapper": {
    "^@App/(.*)$": "<rootDir>/src/$1"
  },
}