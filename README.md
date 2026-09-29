# Azure DevOps Planejamento Hands-on

Monorepo didatico para uma aula de Azure DevOps com foco em planejamento,
rastreabilidade, dashboards e pipeline. A turma pode usar o mesmo repositorio no
GitHub e cada equipe trabalha em um projeto do Azure DevOps com um processo
diferente.

## Equipes e cenarios

| Equipe | Processo | Miniapp | Caminho | Pipeline |
| --- | --- | --- | --- | --- |
| 1 | Basic | Portal do Cliente | `apps/basic-portal` | `.azuredevops/pipelines/basic.yml` |
| 2 | Agile | Sistema de Delivery | `apps/agile-delivery` | `.azuredevops/pipelines/agile.yml` |
| 3 | Scrum | Aplicativo Bancario PIX | `apps/scrum-banking` | `.azuredevops/pipelines/scrum.yml` |
| 4 | CMMI | Sistema Governamental | `apps/cmmi-governance` | `.azuredevops/pipelines/cmmi.yml` |

## Como usar na aula

1. Cada equipe trabalha em um projeto do Azure DevOps com o seu processo:
   Basic, Agile, Scrum ou CMMI.
2. O projeto ja traz este repositorio, a pipeline da equipe e a sprint da aula.
3. Cada equipe cria o backlog seguindo o guia do seu processo em `docs/processos`.
4. A equipe executa a pipeline e registra a evidencia de entrega no backlog.
5. Cada equipe monta um dashboard com widgets de Boards e Pipelines.

O codigo e propositalmente simples. A aula deve concentrar a atencao nos
artefatos de gestao: backlog, hierarquia de work items, estados, sprint,
rastreabilidade, consultas, dashboards e indicadores.

## Materiais da aula (29/09/2026)

- `slides/Apresentacao_Azure_DevOps_2026-09-29.pptx` (e versao em PDF).
- `praticas/Proposta_Aula_Pratica_AzureDevOps_UNIFOR_2026-09-29.pdf` (e versao
  em DOCX): guia da aula pratica, com passo a passo, pagina de cada equipe,
  checklist de entrega e criterios de avaliacao.

## Modelo de pipeline

As pipelines usam o repositorio publico do GitHub como fonte e nao exigem
Service Connection de Azure, assinatura Azure, Terraform ou deploy real.

Cada pipeline executa:

- testes automatizados;
- validacao do miniapp;
- build estatico;
- publicacao de artefato;
- deploy simulado apenas com logs didaticos;
- parametros manuais para ambiente simulado e nota de entrega.

## Validacao local

Nao ha dependencias externas. Com Node.js 20 ou superior:

```bash
npm test
npm run validate
npm run build
```

O build gera uma pasta `dist` com os quatro miniapps estaticos.

## Material de apoio

- `docs/roteiro-hands-on.md`: roteiro principal para os alunos.
- `docs/campos-work-items.md`: guia de campos, estimativas e criterios.
- `docs/dashboard-passo-a-passo.md`: instrucoes claras para consultas, graficos e dashboards.
- `docs/processos/*.md`: backlog e tarefas por processo.
- `docs/queries/*.wiql`: consultas sugeridas para Azure Boards.
- `docs/templates/dashboard-markdown.md`: texto para widget Markdown do dashboard.
