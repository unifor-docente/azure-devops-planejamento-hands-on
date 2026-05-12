# Roteiro Hands-on: Azure DevOps para Planejamento de Projetos

## Objetivo

Simular um projeto real no Azure DevOps usando Boards, backlog, sprints,
pipelines, consultas e dashboards. O codigo esta em um monorepo publico no
GitHub para que a equipe concentre o esforco na gestao do projeto.

A pratica da quarta-feira, 13/05/2026, deve ir alem de "criar cards". Cada
equipe deve preencher work items com contexto, prioridade, estimativa, criterios
de aceite, responsaveis, tags, relacionamento e evidencia de pipeline.

## Divisao da turma

| Equipe | Processo | Projeto no Azure DevOps | Guia detalhado |
| --- | --- | --- | --- |
| 1 | Basic | `01-basic-portal` | `docs/processos/basic.md` |
| 2 | Agile | `02-agile-delivery` | `docs/processos/agile.md` |
| 3 | Scrum | `03-scrum-banking` | `docs/processos/scrum.md` |
| 4 | CMMI | `04-cmmi-governance` | `docs/processos/cmmi.md` |

Os projetos ja foram criados pelo instrutor com o processo correto. Cada equipe
deve trabalhar dentro do seu projeto, usando a pipeline ja configurada como
evidencia de entrega.

## Ponto de partida da aula

Antes dos alunos iniciarem, o instrutor ja deve ter:

- Criado os 4 projetos no Azure DevOps.
- Configurado uma pipeline para cada projeto.
- Executado a primeira pipeline de cada equipe.
- Confirmado que cada pipeline publicou um artefato.

Os alunos nao precisam criar repositorio, configurar Terraform, criar recursos
Azure ou fazer deploy real. A pratica simula a entrega usando pipeline, artefato
e logs.

## Materiais que cada equipe deve abrir

1. `docs/campos-work-items.md`: explica campos, prioridade, estimativas,
   criterios de aceite e Definition of Done.
2. O guia do processo da equipe em `docs/processos`.
3. `docs/templates/checklist-projeto.md`: checklist final.
4. `docs/templates/dashboard-markdown.md`: texto base para o dashboard.

## Parte 1: Acessar o projeto da equipe

Tempo sugerido: 10 minutos.

1. Acesse `https://dev.azure.com/`.
2. Entre na organizacao indicada pelo instrutor.
3. Abra o projeto da sua equipe.
4. Confirme se o menu Boards esta disponivel.
5. Acesse Pipelines e abra a primeira execucao criada pelo instrutor.
6. Verifique os logs das etapas de teste, validacao, build e deploy simulado.
7. Abra o artefato publicado pela pipeline.

Checklist:

- Projeto correto aberto.
- Processo correto identificado.
- Primeira execucao da pipeline localizada.
- Artefato publicado identificado.

## Parte 2: Entender campos e regras de preenchimento

Tempo sugerido: 15 minutos.

Cada equipe deve ler o guia `docs/campos-work-items.md` e combinar como vai
preencher os itens.

Campos obrigatorios para a aula:

- `Title`: nome curto e claro.
- `Description`: problema, contexto e escopo.
- `Assigned To`: responsavel pelo proximo passo.
- `Priority`: importancia do item.
- `Story Points`, `Effort`, `Size` ou `Remaining Work`, conforme o processo.
- `Acceptance Criteria`: condicoes objetivas para aceitar a entrega.
- `Tags`: marcadores para filtro e dashboard.
- `Parent/Child`: relacionamento entre os niveis do backlog.

Regra pratica:

- Se o campo existir no Azure Boards, preencha o campo.
- Se o campo nao existir no processo, coloque a informacao na descricao.

## Parte 3: Criar backlog realista

Tempo sugerido: 45 minutos.

Cada equipe deve seguir o guia detalhado do seu processo:

- Basic: `docs/processos/basic.md`
- Agile: `docs/processos/agile.md`
- Scrum: `docs/processos/scrum.md`
- CMMI: `docs/processos/cmmi.md`

Quantidade minima esperada:

| Processo | Minimo esperado |
| --- | --- |
| Basic | 1 Epic, 5 Issues, 10 Tasks |
| Agile | 1 Epic, 3 Features, 6 User Stories, 10 Tasks |
| Scrum | 1 Epic, 2 Features, 6 PBIs, 9 Tasks |
| CMMI | 1 Epic, 4 Requirements, 5 Change Requests, 9 Tasks |

Checklist de qualidade do backlog:

- Itens possuem descricao realista.
- Itens possuem prioridade.
- Itens possuem estimativa.
- Itens possuem criterios de aceite.
- Tasks estao relacionadas ao item pai correto.
- Pelo menos um item representa risco, bloqueio ou dependencia.
- Pelo menos um item registra evidencia de pipeline.

## Parte 4: Refinar, priorizar e estimar

Tempo sugerido: 25 minutos.

Cada equipe deve revisar o backlog criado e responder:

1. O que entra no MVP?
2. O que fica para depois?
3. Qual item tem maior valor?
4. Qual item tem maior risco?
5. Algum item esta grande demais?
6. Algum item depende de outro?

Ajustes obrigatorios:

- Ordenar os itens por prioridade.
- Quebrar item estimado como `13` ou muito grande.
- Marcar pelo menos uma tag de controle:
  - `blocked`
  - `risk`
  - `audit`
  - `pipeline`
  - `customer-visible`
- Registrar pelo menos uma decisao em Discussion ou comentario.

## Parte 5: Configurar Board, sprint ou ciclo

Tempo sugerido: 25 minutos.

1. Acesse Boards.
2. Mova itens entre estados para simular andamento.
3. Atribua responsaveis.
4. Ajuste Remaining Work ou Completed Work em pelo menos uma Task, quando
   disponivel.
5. Para Scrum, crie ou use a sprint `Sprint 01 - PIX`.
6. Para Agile, use o board e acompanhe fluxo por estado.
7. Para CMMI, destaque Requirements e Change Requests em estados diferentes.
8. Para Basic, destaque simplicidade e throughput.

Sugestao de simulacao:

- Um item ainda nao iniciado.
- Um item em andamento.
- Um item concluido.
- Um item bloqueado.

## Parte 6: Executar pipeline e registrar evidencia

Tempo sugerido: 20 minutos.

1. Acesse Pipelines.
2. Abra a pipeline da sua equipe.
3. Clique em Run pipeline.
4. Na execucao manual, escolha o ambiente simulado.
5. Preencha a nota da entrega.
6. Execute a pipeline.
7. Ao final, abra os logs e identifique cada etapa.
8. Abra o artefato publicado.
9. Copie o link da execucao e registre em um work item com tag `pipeline`.

Nao e necessario criar assinatura Azure, Service Connection de Azure Resource
Manager, Terraform ou recurso real na Azure. A unica autorizacao esperada e a
conexao do Azure DevOps com o repositorio GitHub.

Execucao sugerida:

- Ambiente simulado: `homologacao`.
- Nota da entrega: usar a nota indicada no guia do processo.

Execucao opcional para apresentacao:

- Ambiente simulado: `producao-demo`.
- Nota da entrega: `Entrega simulada para apresentacao`.

## Parte 7: Criar consultas e dashboard

Tempo sugerido: 30 minutos.

Use o guia `docs/dashboard-passo-a-passo.md`. Ele substitui a tentativa de
montar dashboard colando WIQL diretamente.

Fluxo correto:

1. Acesse Boards > Queries.
2. Crie uma consulta pela interface do Azure Boards.
3. Use o tipo `Flat list of work items`.
4. Salve a consulta em `Shared Queries > Dashboard da Equipe`.
5. Crie graficos na aba Charts da consulta ou pelo widget Chart for Work Items.
6. Acesse Dashboards.
7. Crie um dashboard da equipe.
8. Adicione widgets usando a consulta salva.

Os arquivos `.wiql` em `docs/queries` continuam uteis como referencia dos
filtros, mas o aluno nao precisa colar WIQL no dashboard.

Widgets sugeridos:

- Markdown: cole o texto de `docs/templates/dashboard-markdown.md`.
- Query Results: itens ativos da equipe.
- Chart for Work Items: itens por estado.
- Sprint Burndown: quando houver sprint configurada.
- Cumulative Flow Diagram: para visualizar gargalos.
- Build History: historico da pipeline.

O dashboard deve responder pelo menos 3 perguntas:

- O que esta em andamento?
- O que esta bloqueado?
- O que foi entregue ou validado pela pipeline?
- Qual item tem maior prioridade?
- Qual metrica ajuda mais o gerente de projetos?

## Parte 8: Fechamento da equipe

Tempo sugerido: 20 minutos.

Cada equipe apresenta em 4 minutos:

1. Como o processo organiza o trabalho.
2. Qual hierarquia de work items foi criada.
3. Como a equipe priorizou e estimou.
4. Qual item representa maior risco ou dependencia.
5. Qual metrica do dashboard ajuda mais o gerente de projetos.
6. O que mudou entre a primeira execucao da pipeline e a execucao feita pela equipe.
7. O que a pipeline evidencia sobre entrega e rastreabilidade.

## Entregaveis esperados

- Backlog realista com hierarquia coerente.
- Work items com descricao, prioridade, estimativa e criterios de aceite.
- Board com itens em estados diferentes.
- Sprint, ciclo ou fluxo configurado conforme o processo.
- Pipeline executada pela equipe.
- Link da execucao registrado em work item.
- Artefato publicado identificado.
- Dashboard com pelo menos 4 widgets.
- Apresentacao curta comparando processo, backlog, metrica e pipeline.
