import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { projects } from './projects.mjs';
import { validateProject } from './validate-project.mjs';

const requestedAppPath = process.argv[2];
const selectedProjects = requestedAppPath
  ? projects.filter((project) => project.appPath === requestedAppPath)
  : projects;

if (requestedAppPath && selectedProjects.length === 0) {
  console.error(`Miniapp nao encontrado na lista de projetos: ${requestedAppPath}`);
  process.exit(1);
}

if (!requestedAppPath) {
  rmSync('dist', { recursive: true, force: true });
}

mkdirSync('dist', { recursive: true });

for (const project of selectedProjects) {
  const errors = validateProject(project.appPath);
  if (errors.length > 0) {
    console.error(errors.join('\n'));
    process.exit(1);
  }

  const config = JSON.parse(readFileSync(join(project.appPath, 'project.json'), 'utf8'));
  const target = join('dist', project.id);
  rmSync(target, { recursive: true, force: true });
  mkdirSync(target, { recursive: true });

  for (const file of ['index.html', 'styles.css', 'app.js', 'project.json', 'README.md']) {
    cpSync(join(project.appPath, file), join(target, basename(file)));
  }

  writeFileSync(
    join(target, 'build-info.json'),
    JSON.stringify(
      {
        id: project.id,
        process: project.process,
        generatedAt: new Date().toISOString(),
        sourcePath: project.appPath,
        suggestedArtifact: `${project.id}-site`
      },
      null,
      2
    )
  );

  writeFileSync(
    join(target, 'summary.html'),
    renderSummary(config),
    'utf8'
  );

  console.log(`Build gerado: ${target}`);
}

function renderSummary(config) {
  const metricList = config.metrics
    .map((metric) => `<li><strong>${metric.name}</strong>: ${metric.goal}</li>`)
    .join('');

  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${config.name} - Resumo</title>
  <link rel="stylesheet" href="./styles.css">
</head>
<body>
  <main class="shell">
    <section class="hero">
      <p class="eyebrow">${config.process}</p>
      <h1>${config.name}</h1>
      <p>${config.scenario}</p>
    </section>
    <section class="panel">
      <h2>Metricas esperadas</h2>
      <ul>${metricList}</ul>
    </section>
  </main>
</body>
</html>`;
}

