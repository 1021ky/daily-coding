#!/usr/bin/env node

import { Command } from 'commander';
import { doSomething } from '@App/application/services/doSomething';

const program = new Command();

program
  .name('my-cli-tool')
  .description('An example CLI tool built with TypeScript')
  .version('1.0.0');

console.log("123")