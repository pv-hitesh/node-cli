import fs from 'fs-extra';
import path from 'path';
import type { ProjectConfig } from '../types/index.js';

export async function generateManifest(config: ProjectConfig): Promise<void> {
  const manifestPath = path.join(process.cwd(), config.projectName, 'boiler.config.json');
  await fs.writeJSON(manifestPath, config, { spaces: 2 });
}

export async function readManifest(projectPath: string = process.cwd()): Promise<ProjectConfig> {
  const manifestPath = path.join(projectPath, 'boiler.config.json');
  
  if (!(await fs.pathExists(manifestPath))) {
    throw new Error('No boiler.config.json found. This doesn\'t appear to be a boilerplate project.');
  }
  
  return await fs.readJSON(manifestPath);
}

export async function updateManifest(updates: Partial<ProjectConfig>, projectPath: string = process.cwd()): Promise<ProjectConfig> {
  const manifest = await readManifest(projectPath);
  const updatedManifest = { ...manifest, ...updates };
  
  const manifestPath = path.join(projectPath, 'boiler.config.json');
  await fs.writeJSON(manifestPath, updatedManifest, { spaces: 2 });
  
  return updatedManifest;
}