import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';
import { projects } from '../scripts/projects.mjs';
import { validateProject } from '../scripts/validate-project.mjs';

test('monorepo contem quatro projetos didaticos', () => {
  assert.equal(projects.length, 4);
  assert.deepEqual(
    projects.map((project) => project.process),
    ['Basic', 'Agile', 'Scrum', 'CMMI']
  );
});

for (const project of projects) {
  test(`${project.id} possui configuracao valida`, () => {
    assert.deepEqual(validateProject(project.appPath), []);

    const config = JSON.parse(readFileSync(join(project.appPath, 'project.json'), 'utf8'));
    assert.equal(config.id, project.id);
    assert.equal(config.process, project.process);
    assert.ok(config.metrics.length >= 2);
  });
}

test('cada projeto possui pipeline dedicado', () => {
  for (const project of projects) {
    assert.ok(existsSync(project.pipelinePath), `Pipeline ausente: ${project.pipelinePath}`);
    const yaml = readFileSync(project.pipelinePath, 'utf8');
    assert.ok(yaml.includes(project.appPath), `Pipeline nao referencia ${project.appPath}`);
  }
});

