import pkg from 'enquirer';
const { prompt } = pkg;

interface InputQuestion {
  type: 'input';
  name: string;
  message: string;
  initial?: string;
}

interface SelectQuestion {
  type: 'select';
  name: string;
  message: string;
  choices: (string | { name: string; value: string })[];
}

interface MultiSelectQuestion {
  type: 'multiselect';
  name: string;
  message: string;
  choices: (string | { name: string; value: string })[];
}
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
  try {
    console.log(chalk.yellow('📋 Let\'s set up your project!'));
    
    const answers = await prompt<PromptAnswers>([
      {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?',
        initial: options.projectName || 'my-api',
        validate: (value: string) => {
          if (!value.length) return 'Project name is required';
          if (!/^[a-z0-9-]+$/.test(value)) return 'Project name can only contain lowercase letters, numbers, and hyphens';
          return true;
        }
      } as InputQuestion,
      {
        type: 'select',
        name: 'language',
        message: 'Choose your language:',
        choices: [
          'javascript',
          'typescript'
        ],
        initial: options.language || 'javascript'
      } as SelectQuestion,
      {
        type: 'select',
        name: 'framework',
        message: 'Choose your framework:',
        choices: [
          'express',
          'fastify'
        ],
        initial: options.framework || 'express'
      } as SelectQuestion,
      {
        type: 'select',
        name: 'architecture',
        message: 'Choose your architecture:',
        choices: [
          'mvc',
          'layered'
        ],
        initial: options.architecture || 'mvc'
      } as SelectQuestion,
      {
        type: 'select',
        name: 'orm',
        message: 'Choose your ORM/ODM:',
        choices: [
          'none',
          'mongoose',
          'prisma'
        ],
        initial: 'none'
      } as SelectQuestion,
      {
        type: 'select',
        name: 'database',
        message: 'Choose your database:',
        choices: [
          'mongodb',
          'postgresql'
        ],
        initial: 'mongodb'
      } as SelectQuestion,
      {
        type: 'multiselect',
        name: 'features',
        message: 'Select features to include:',
        choices: [
          'auth',
          'logger', 
          'cors',
          'rateLimit',
          'validation'
        ],
        initial: []
      } as MultiSelectQuestion
    ]);

    const config: ProjectConfig = {
      projectName: answers.projectName.toLowerCase(),
      language: answers.language,
      framework: answers.framework,
      architecture: answers.architecture,
      orm: answers.orm,
      database: answers.database,
      features: answers.features || [],
      createdAt: new Date().toISOString(),
      cliVersion: '1.0.0'
    };

    console.log(chalk.blue('📝 Configuration:'));
    console.log(JSON.stringify(config, null, 2));

    // // Validate configuration
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
    console.log(chalk.yellow(`📁 cd ${config.projectName}`));
    console.log(chalk.yellow('📦 npm install'));
    console.log(chalk.yellow('🚀 npm run dev'));
  } catch (error) {
    console.error(chalk.red('❌ Error creating project:'), error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  }
}