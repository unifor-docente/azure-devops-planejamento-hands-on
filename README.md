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

1. Publique este diretorio como um repositorio publico no GitHub, por exemplo
   `azure-devops-planejamento-hands-on`. (Concluído)
2. No Azure DevOps, cada equipe cria um projeto usando o processo sorteado:
   Basic, Agile, Scrum ou CMMI.
3. Cada equipe cria o backlog seguindo o roteiro em `docs/processos`.
4. Cada equipe cria uma pipeline apontando para o YAML correspondente ao seu
   processo. (Concluído)
5. Cada equipe monta um dashboard com widgets de Boards e Pipelines.

O codigo e propositalmente simples. A aula deve concentrar a atencao nos
artefatos de gestao: backlog, hierarquia de work items, estados, sprint,
rastreabilidade, consultas, dashboards e indicadores.

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
- `docs/guia-instrutor.md`: preparo e conducao da atividade.
- `docs/campos-work-items.md`: guia de campos, estimativas e criterios.
- `docs/processos/*.md`: backlog e tarefas por processo.
- `docs/queries/*.wiql`: consultas sugeridas para Azure Boards.
- `docs/templates/dashboard-markdown.md`: texto para widget Markdown do dashboard.
