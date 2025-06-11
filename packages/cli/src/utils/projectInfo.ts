import chalk from 'chalk';
import { readManifest } from './manifest.js';

export async function showProjectInfo(): Promise<void> {
  try {
    const manifest = await readManifest();
    
    console.log(chalk.blue('📋 Project Information'));
    console.log(chalk.gray('='.repeat(50)));
    
    console.log(`${chalk.yellow('Name:')} ${manifest.name}`);
    console.log(`${chalk.yellow('Framework:')} ${manifest.framework}`);
    console.log(`${chalk.yellow('Architecture:')} ${manifest.architecture}`);
    console.log(`${chalk.yellow('ORM:')} ${manifest.orm || 'None'}`);
    console.log(`${chalk.yellow('Features:')} ${manifest.features.join(', ') || 'None'}`);
    console.log(`${chalk.yellow('Created:')} ${new Date(manifest.createdAt).toLocaleDateString()}`);
    console.log(`${chalk.yellow('CLI Version:')} ${manifest.cliVersion}`);
    
  } catch (error) {
    throw new Error(`Failed to read project info: ${(error as Error).message}`);
  }
}