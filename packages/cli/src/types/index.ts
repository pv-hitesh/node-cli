export interface ProjectConfig {
  name: string;
  framework: 'express' | 'fastify' | 'hono';
  architecture: 'mvc' | 'mvc-service-repo' | 'clean' | 'hexagonal';
  orm?: 'none' | 'mongoose' | 'prisma' | 'sequelize' | 'typeorm';
  features: Feature[];
  createdAt: string;
  cliVersion: string;
}

export type Feature = 'auth' | 'logger' | 'cors' | 'rateLimit' | 'validation' | 'swagger' | 'testing';

export interface CreateProjectOptions {
  name?: string;
  framework?: string;
  architecture?: string;
}

export interface PromptAnswers {
  projectName: string;
  framework: ProjectConfig['framework'];
  architecture: ProjectConfig['architecture'];
  orm: ProjectConfig['orm'];
  features: Feature[];
}