import chalk from 'chalk';
import { readManifest, updateManifest } from './manifest.js';
import type { Feature, ProjectConfig } from '../types/index.js';

export async function addFeature(featureName: string): Promise<void> {
  console.log(chalk.blue(`🔧 Adding feature: ${featureName}`));
  
  try {
    const manifest = await readManifest();
    
    if (manifest.features.includes(featureName as Feature)) {
      console.log(chalk.yellow(`⚠️  Feature ${featureName} is already installed`));
      return;
    }
    
    // Add feature-specific logic here
    switch (featureName) {
      case 'auth':
        await addAuthFeature(manifest);
        break;
      case 'logger':
        await addLoggerFeature(manifest);
        break;
      case 'cors':
        await addCorsFeature(manifest);
        break;
      default:
        throw new Error(`Unknown feature: ${featureName}`);
    }
    
    // Update manifest
    const updatedFeatures = [...manifest.features, featureName as Feature];
    await updateManifest({ features: updatedFeatures });
    
    console.log(chalk.green(`✅ Feature ${featureName} added successfully!`));
    
  } catch (error) {
    throw new Error(`Failed to add feature ${featureName}: ${(error as Error).message}`);
  }
}

async function addAuthFeature(manifest: ProjectConfig): Promise<void> {
  // Implementation for adding auth feature
  console.log(chalk.blue('📦 Installing auth dependencies...'));
  // Add auth-related files and configurations
}

async function addLoggerFeature(manifest: ProjectConfig): Promise<void> {
  // Implementation for adding logger feature
  console.log(chalk.blue('📦 Installing logger dependencies...'));
  // Add logger-related files and configurations
}

async function addCorsFeature(manifest: ProjectConfig): Promise<void> {
  // Implementation for adding CORS feature
  console.log(chalk.blue('📦 Installing CORS dependencies...'));
  // Add CORS-related configurations
}