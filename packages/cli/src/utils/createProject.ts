import pkg from 'enquirer';
const { prompt } = pkg;
import chalk from 'chalk';
import path from 'path';
import { fileURLToPath } from 'url';
import { createProjectStructure } from './fileOps.js';
import { validateConfig } from './validation.js';
import { generateManifest } from './manifest.js';
import type { CreateProjectOptions, PromptAnswers, ProjectConfig } from '../types/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createProject(options: CreateProjectOptions = {}): Promise<void> {
  console.log(chalk.yellow('📋 Let\'s set up your project!'));
  
  const answers = await prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your project name?',
      initial: options.name || 'my-api',
      validate: (value: string) => value.length > 0 || 'Project name is required'
    },
    {
      type: 'select',
      name: 'framework',
      message: 'Choose your framework:',
      choices: [
        { name: 'Express', value: 'express' }
      ],
      initial: options.framework || 'express'
    },
    {
      type: 'select',
      name: 'architecture',
      message: 'Choose your architecture:',
      choices: [
        { name: 'MVC (Model-View-Controller)', value: 'mvc' },
        { name: 'MVC + Service + Repository', value: 'mvc-service-repo' }
      ],
      initial: options.architecture || 'mvc'
    },
    {
      type: 'select',
      name: 'orm',
      message: 'Choose your ORM/ODM:',
      choices: [
        { name: 'None', value: 'none' },
        { name: 'Mongoose (MongoDB)', value: 'mongoose' },
        { name: 'Prisma', value: 'prisma' }
      ],
      initial: 'none'
    },
    {
      type: 'multiselect',
      name: 'features',
      message: 'Select features to include:',
      choices: [
        { name: 'Authentication (JWT)', value: 'auth' },
        { name: 'Logger (Winston)', value: 'logger' },
        { name: 'CORS', value: 'cors' },
        { name: 'Rate Limiting', value: 'rateLimit' },
        { name: 'Input Validation', value: 'validation' }
      ]
    }
  ]) as PromptAnswers;

  const config: ProjectConfig = {
    name: answers.projectName,
    framework: answers.framework,
    architecture: answers.architecture,
    orm: answers.orm,
    features: answers.features,
    createdAt: new Date().toISOString(),
    cliVersion: '1.0.0'
  };

  console.log(chalk.blue('📝 Configuration:'));
  console.log(JSON.stringify(config, null, 2));

  // Validate configuration
  const isValid = await validateConfig(config);
  if (!isValid) {
    throw new Error('Invalid configuration');
  }

  // Create project structure
  console.log(chalk.green('🏗️  Creating project structure...'));
  await createProjectStructure(config);

  // Generate manifest file
  console.log(chalk.green('📄 Generating manifest file...'));
  await generateManifest(config);

  console.log(chalk.green('✅ Project created successfully!'));
  console.log(chalk.yellow(`📁 cd ${answers.projectName}`));
  console.log(chalk.yellow('📦 npm install'));
  console.log(chalk.yellow('🚀 npm run dev'));
}