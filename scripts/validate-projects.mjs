import { projects } from './projects.mjs';
import { validateProject } from './validate-project.mjs';

const errors = [];

for (const project of projects) {
  const projectErrors = validateProject(project.appPath);
  errors.push(...projectErrors.map((error) => `[${project.id}] ${error}`));
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Projetos validados: ${projects.length}`);
}

