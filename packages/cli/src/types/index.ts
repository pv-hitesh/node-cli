export interface ProjectConfig {
  projectName: string;
  language: 'javascript' | 'typescript';
  framework: 'express' | 'fastify';
  architecture: 'mvc' | 'layered';
  orm: 'none' | 'mongoose' | 'prisma';
  database: 'mongodb' | 'postgresql';
  features: Feature[];
  createdAt: string;
  cliVersion: string;
}

export type Feature = 'auth' | 'logger' | 'cors' | 'rateLimit' | 'validation' | 'swagger' | 'testing';

export interface CreateProjectOptions {
  projectName?: string;
  language?: string;
  framework?: string;
  architecture?: string;
  orm?: string;
  database?: string;
}

export interface PromptAnswers {
  projectName: string;
  language: ProjectConfig['language'];
  framework: ProjectConfig['framework'];
  architecture: ProjectConfig['architecture'];
  orm: ProjectConfig['orm'];
  database: ProjectConfig['database'];
  features: Feature[];
}