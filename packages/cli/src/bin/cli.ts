#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { createProject } from '../utils/createProject.js';
import { addFeature } from '../utils/addFeature.js';
import { showProjectInfo } from '../utils/projectInfo.js';

const program = new Command();

program
  .name('boilerplate-cli')
  .description('CLI tool to generate backend API boilerplates')
  .version('1.0.0');

program
  .command('create')
  .description('Create a new project boilerplate')
  .option('-n, --name <name>', 'project name')
  .option('-f, --framework <framework>', 'framework (express)')
  .option('-a, --architecture <architecture>', 'architecture (mvc, mvc-service-repo)')
  .action(async (options) => {
    try {
      console.log(chalk.blue('🚀 Welcome to Boilerplate CLI!'));
      await createProject(options);
    } catch (error) {
      console.error(chalk.red('Error creating project:'), (error as Error).message);
      process.exit(1);
    }
  });

// program
//   .command('add <feature>')
//   .description('Add a feature to existing project')
//   .action(async (feature: string) => {
//     try {
//       await addFeature(feature);
//     } catch (error) {
//       console.error(chalk.red('Error adding feature:'), (error as Error).message);
//       process.exit(1);
//     }
//   });

// program
//   .command('info')
//   .description('Show project information')
//   .action(async () => {
//     try {
//       await showProjectInfo();
//     } catch (error) {
//       console.error(chalk.red('Error showing project info:'), (error as Error).message);
//       process.exit(1);
//     }
//   });

program.parse();