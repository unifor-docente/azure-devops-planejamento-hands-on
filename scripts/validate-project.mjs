import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const requiredFiles = ['index.html', 'styles.css', 'app.js', 'project.json', 'README.md'];
const requiredJsonFields = ['id', 'name', 'process', 'scenario', 'workItemTypes', 'metrics'];

export function validateProject(appPath) {
  const errors = [];

  if (!appPath) {
    errors.push('Informe o caminho do miniapp.');
    return errors;
  }

  for (const file of requiredFiles) {
    const filePath = join(appPath, file);
    if (!existsSync(filePath)) {
      errors.push(`Arquivo obrigatorio ausente: ${filePath}`);
    }
  }

  const configPath = join(appPath, 'project.json');
  if (!existsSync(configPath)) {
    return errors;
  }

  let config;
  try {
    config = JSON.parse(readFileSync(configPath, 'utf8'));
  } catch (error) {
    errors.push(`JSON invalido em ${configPath}: ${error.message}`);
    return errors;
  }

  for (const field of requiredJsonFields) {
    if (!config[field]) {
      errors.push(`Campo obrigatorio ausente em ${configPath}: ${field}`);
    }
  }

  if (!Array.isArray(config.workItemTypes) || config.workItemTypes.length < 3) {
    errors.push(`${configPath} deve declarar ao menos 3 tipos de work item.`);
  }

  if (!Array.isArray(config.metrics) || config.metrics.length < 2) {
    errors.push(`${configPath} deve declarar ao menos 2 metricas.`);
  }

  const indexPath = join(appPath, 'index.html');
  if (existsSync(indexPath) && config?.name) {
    const html = readFileSync(indexPath, 'utf8');
    if (!html.includes(config.name)) {
      errors.push(`${indexPath} deve exibir o nome "${config.name}".`);
    }
  }

  return errors;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const appPath = process.argv[2];
  const errors = validateProject(appPath);

  if (errors.length > 0) {
    console.error(errors.join('\n'));
    process.exitCode = 1;
  } else {
    console.log(`Miniapp validado: ${appPath}`);
  }
}

