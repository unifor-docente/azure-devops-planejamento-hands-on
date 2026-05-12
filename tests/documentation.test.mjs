import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { projects } from '../scripts/projects.mjs';

test('roteiro principal existe e referencia todos os processos', () => {
  const path = 'docs/roteiro-hands-on.md';
  assert.ok(existsSync(path));
  const content = readFileSync(path, 'utf8');

  for (const project of projects) {
    assert.ok(content.includes(project.process));
  }
});

test('guia de campos dos work items existe', () => {
  assert.ok(existsSync('docs/campos-work-items.md'));
});

test('cada processo possui guia e consulta WIQL', () => {
  const slugs = ['basic', 'agile', 'scrum', 'cmmi'];

  for (const slug of slugs) {
    assert.ok(existsSync(`docs/processos/${slug}.md`), `Guia ausente: ${slug}`);
    assert.ok(existsSync(`docs/queries/${slug}-work-items.wiql`), `WIQL ausente: ${slug}`);
  }
});
