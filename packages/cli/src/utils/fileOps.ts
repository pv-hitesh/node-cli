import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';
import chalk from 'chalk';
import type { ProjectConfig } from '../types/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createProjectStructure(config: ProjectConfig): Promise<void> {
  const projectPath = path.join(process.cwd(), config.projectName);
  
  // Check if directory already exists
  if (await fs.pathExists(projectPath)) {
    throw new Error(`Directory ${config.projectName} already exists`);
  }

  // Create project directory
  await fs.ensureDir(projectPath);

  // Define template paths based on config
  const baseTemplatePath = path.join(__dirname, '..', '..', 'templates', 'base');
  const languageTemplatePath = path.join(__dirname, '..', '..', 'templates', 'languages', config.language);
  const frameworkTemplatePath = path.join(__dirname, '..', '..', 'templates', 'frameworks', config.framework);
  const architectureTemplatePath = path.join(__dirname, '..', '..', 'templates', 'architectures', config.architecture);
  const ormTemplatePath = config.orm !== 'none' ? path.join(__dirname, '..', '..', 'templates', 'orms', config.orm) : null;
  const databaseTemplatePath = path.join(__dirname, '..', '..', 'templates', 'databases', config.database);

  // Ensure all required template paths exist
  const requiredPaths = [baseTemplatePath, languageTemplatePath, frameworkTemplatePath, architectureTemplatePath, databaseTemplatePath];
  if (ormTemplatePath) requiredPaths.push(ormTemplatePath);

  for (const p of requiredPaths) {
    if (!(await fs.pathExists(p))) {
      throw new Error(`Template path not found: ${p}`);
    }
  }

  // Copy base template files first
  await copyTemplate(baseTemplatePath, projectPath, config);

  // Copy language-specific template files
  await copyTemplate(languageTemplatePath, projectPath, config);

  // Copy framework-specific template files
  await copyTemplate(frameworkTemplatePath, projectPath, config);

  // Copy architecture-specific template files
  await copyTemplate(architectureTemplatePath, projectPath, config);

  // Copy ORM-specific template files if selected
  if (ormTemplatePath) {
    await copyTemplate(ormTemplatePath, projectPath, config);
  }

  // Copy database-specific template files
  await copyTemplate(databaseTemplatePath, projectPath, config);
  
  console.log(chalk.green(`✅ Project structure created at ${projectPath}`));
}

async function copyTemplate(templatePath: string, projectPath: string, config: ProjectConfig): Promise<void> {
  // console.log(chalk.cyan(`Copying templates from: ${templatePath}`));
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