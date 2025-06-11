import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';
import chalk from 'chalk';
import type { ProjectConfig } from '../types/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createProjectStructure(config: ProjectConfig): Promise<void> {
  const projectPath = path.join(process.cwd(), config.name);
  
  // Check if directory already exists
  if (await fs.pathExists(projectPath)) {
    throw new Error(`Directory ${config.name} already exists`);
  }

  // Create project directory
  await fs.ensureDir(projectPath);

  // Get template path
  const templatePath = path.join(__dirname, '..', '..', 'templates', `${config.framework}-${config.architecture}`);
  
  if (!(await fs.pathExists(templatePath))) {
    throw new Error(`Template for ${config.framework}-${config.architecture} not found`);
  }

  // Copy template files
  await copyTemplate(templatePath, projectPath, config);
  
  console.log(chalk.green(`✅ Project structure created at ${projectPath}`));
}

async function copyTemplate(templatePath: string, projectPath: string, config: ProjectConfig): Promise<void> {
  const items = await fs.readdir(templatePath);
  
  for (const item of items) {
    const srcPath = path.join(templatePath, item);
    const destPath = path.join(projectPath, item);
    const stat = await fs.stat(srcPath);
    
    if (stat.isDirectory()) {
      await fs.ensureDir(destPath);
      await copyTemplate(srcPath, destPath, config);
    } else {
      // Process template files
      if (item.endsWith('.ejs')) {
        const templateContent = await fs.readFile(srcPath, 'utf8');
        const renderedContent = ejs.render(templateContent, config);
        const outputPath = destPath.replace('.ejs', '');
        await fs.writeFile(outputPath, renderedContent);
      } else {
        await fs.copy(srcPath, destPath);
      }
    }
  }
}

export async function addFileToProject(filePath: string, content: string): Promise<void> {
  await fs.ensureFile(filePath);
  await fs.writeFile(filePath, content);
}

export async function fileExists(filePath: string): Promise<boolean> {
  return await fs.pathExists(filePath);
}