"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// jest.config.ts
const ts_jest_1 = require("ts-jest");
const jestConfig = {
    // [...]
    roots: ['<rootDir>'],
    modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
    moduleNameMapper: (0, ts_jest_1.pathsToModuleNameMapper)(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),
};
exports.default = jestConfig;
