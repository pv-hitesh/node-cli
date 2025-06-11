import Ajv from 'ajv';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import type { ProjectConfig } from '../types/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ajv = new Ajv();

let schema: any;

async function loadSchema(): Promise<any> {
  if (!schema) {
    const schemaPath = path.join(__dirname, '..', '..', 'schemas', 'boiler.config.schema.json');
    schema = await fs.readJSON(schemaPath);
  }
  return schema;
}

export async function validateConfig(config: ProjectConfig): Promise<boolean> {
  const configSchema = await loadSchema();
  const validate = ajv.compile(configSchema);
  const valid = validate(config);
  
  if (!valid) {
    console.error('Configuration validation errors:', validate.errors);
    return false;
  }
  
  return true;
}