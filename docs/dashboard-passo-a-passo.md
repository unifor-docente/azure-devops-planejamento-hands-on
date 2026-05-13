# Dashboard Passo a Passo

Use este guia quando for montar o dashboard da equipe no Azure DevOps.

Importante: os arquivos `.wiql` em `docs/queries` sao referencias para ajudar a
montar as consultas. O dashboard nao usa WIQL diretamente. O fluxo mais simples
para a turma e criar consultas pela interface do Azure Boards, salvar em
`Shared Queries` e depois usar essas consultas nos widgets.

## Antes de comecar

Confirme estes pontos:

- Voce esta dentro do projeto correto da sua equipe.
- Voce consegue acessar Boards, Queries, Pipelines e Dashboards.
- A pipeline da equipe ja tem pelo menos uma execucao.
- O backlog da equipe ja tem work items em estados diferentes.
- As consultas que serao usadas no dashboard devem ficar em `Shared Queries`,
  nao em `My Queries`.

## Parte 1: Criar uma pasta de consultas

1. Acesse Boards.
2. Clique em Queries.
3. Em `Shared Queries`, crie uma pasta chamada `Dashboard da Equipe`.
4. Se nao conseguir criar a pasta, peca ajuda ao instrutor. Pode ser permissao.

## Parte 2: Criar a consulta principal

Todos os grupos devem comecar pelo mesmo caminho:

1. Acesse Boards > Queries.
2. Clique em New Query.
3. Escolha o tipo `Flat list of work items`.
4. Monte as clausulas usando a tabela da sua equipe abaixo.
5. Clique em Run query para testar.
6. Clique em Column Options e ajuste as colunas recomendadas.
7. Clique em Save query as.
8. Salve em `Shared Queries > Dashboard da Equipe`.

Se aparecer `My Queries` como local de salvamento, troque para `Shared Queries`.
Consultas em `My Queries` nao sao adequadas para o dashboard da equipe.

Campos recomendados nas colunas:

- ID
- Work Item Type
- Title
- State
- Assigned To
- Priority
- Tags
- Story Points, Effort, Size ou Remaining Work, quando existir no processo

## Consultas sugeridas por processo

## Equipe 1: Basic

Projeto: `01-basic-portal`

Objetivo do dashboard: acompanhar Issues do Portal do Cliente, tarefas
bloqueadas e evidencia da pipeline.

### Consulta principal

Nome da consulta: `Basic - Itens ativos`

Clausulas:

| Campo | Operador | Valor |
| --- | --- | --- |
| Team Project | = | @Project |
| Work Item Type | In | Epic, Issue, Task |
| State | <> | Done |

Colunas recomendadas:

- ID
- Work Item Type
- Title
- State
- Assigned To
- Priority
- Effort
- Activity
- Remaining Work
- Tags

Ordem sugerida:

1. Work Item Type
2. Priority
3. State

### Consultas adicionais

Crie tambem estas consultas se houver tempo:

| Nome | Clausulas |
| --- | --- |
| `Basic - Bloqueados` | Team Project = @Project; Tags Contains `blocked`; State <> Done |
| `Basic - Pipeline` | Team Project = @Project; Tags Contains `pipeline` |
| `Basic - MVP` | Team Project = @Project; Tags Contains `mvp`; State <> Done |

### Graficos recomendados

| Titulo do grafico | Widget ou aba Charts | Configuracao |
| --- | --- | --- |
| Issues por estado | Chart for Work Items | Query: `Basic - Itens ativos`; Group by: `State`; Chart: Column |
| Trabalho por responsavel | Chart for Work Items | Query: `Basic - Itens ativos`; Group by: `Assigned To`; Chart: Bar |
| Composicao do backlog | Chart for Work Items | Query: `Basic - Itens ativos`; Group by: `Work Item Type`; Chart: Pie |

### Widgets obrigatorios

- Markdown com objetivo, riscos e link da pipeline.
- Query Results usando `Basic - Itens ativos`.
- Chart for Work Items: Issues por estado.
- Chart for Work Items: Trabalho por responsavel.
- Build History da pipeline `basic-portal`.

## Equipe 2: Agile

Projeto: `02-agile-delivery`

Objetivo do dashboard: acompanhar User Stories, valor por Feature, gargalos no
fluxo e evidencia da pipeline.

### Consulta principal

Nome da consulta: `Agile - Historias e tarefas ativas`

Clausulas:

| Campo | Operador | Valor |
| --- | --- | --- |
| Team Project | = | @Project |
| Work Item Type | In | Epic, Feature, User Story, Task |
| State | <> | Closed |

Colunas recomendadas:

- ID
- Work Item Type
- Title
- State
- Assigned To
- Priority
- Story Points
- Business Value
- Tags

Ordem sugerida:

1. Work Item Type
2. Priority
3. State

### Consultas adicionais

| Nome | Clausulas |
| --- | --- |
| `Agile - User Stories ativas` | Team Project = @Project; Work Item Type = User Story; State <> Closed |
| `Agile - Bloqueados` | Team Project = @Project; Tags Contains `blocked`; State <> Closed |
| `Agile - Pipeline` | Team Project = @Project; Tags Contains `pipeline` |

### Graficos recomendados

| Titulo do grafico | Widget ou aba Charts | Configuracao |
| --- | --- | --- |
| User Stories por estado | Chart for Work Items | Query: `Agile - User Stories ativas`; Group by: `State`; Chart: Column |
| Story Points por estado | Chart for Work Items | Query: `Agile - User Stories ativas`; Aggregation: Sum de `Story Points`; Group by: `State`; Chart: Column |
| Trabalho por responsavel | Chart for Work Items | Query: `Agile - Historias e tarefas ativas`; Group by: `Assigned To`; Chart: Bar |
| Itens por tipo | Chart for Work Items | Query: `Agile - Historias e tarefas ativas`; Group by: `Work Item Type`; Chart: Pie |

Se o Azure DevOps nao permitir somar `Story Points`, confirme se `Story Points`
esta nas colunas da consulta e salve novamente.

### Widgets obrigatorios

- Markdown com objetivo, riscos e link da pipeline.
- Query Results usando `Agile - Historias e tarefas ativas`.
- Chart for Work Items: User Stories por estado.
- Chart for Work Items: Trabalho por responsavel ou Story Points por estado.
- Cumulative Flow Diagram, se disponivel.
- Build History da pipeline `agile-delivery`.

## Equipe 3: Scrum

Projeto: `03-scrum-banking`

Objetivo do dashboard: acompanhar a `Sprint 01 - PIX`, PBIs comprometidos,
Remaining Work, burndown e evidencia da pipeline.

### Consulta principal

Nome da consulta: `Scrum - Sprint 01`

Clausulas:

| Campo | Operador | Valor |
| --- | --- | --- |
| Team Project | = | @Project |
| Work Item Type | In | Epic, Feature, Product Backlog Item, Task |
| State | <> | Done |
| Iteration Path | Under | Sprint 01 - PIX |

Se a sprint ainda nao existir, remova temporariamente a clausula de Iteration
Path, salve a consulta e adicione a sprint depois.

Colunas recomendadas:

- ID
- Work Item Type
- Title
- State
- Assigned To
- Priority
- Effort
- Original Estimate
- Remaining Work
- Completed Work
- Tags

Ordem sugerida:

1. Priority
2. Work Item Type
3. State

### Consultas adicionais

| Nome | Clausulas |
| --- | --- |
| `Scrum - PBIs da Sprint` | Team Project = @Project; Work Item Type = Product Backlog Item; Iteration Path Under `Sprint 01 - PIX` |
| `Scrum - Tasks abertas` | Team Project = @Project; Work Item Type = Task; State <> Done; Iteration Path Under `Sprint 01 - PIX` |
| `Scrum - Pipeline` | Team Project = @Project; Tags Contains `pipeline` |

### Graficos recomendados

| Titulo do grafico | Widget ou aba Charts | Configuracao |
| --- | --- | --- |
| PBIs por estado | Chart for Work Items | Query: `Scrum - PBIs da Sprint`; Group by: `State`; Chart: Column |
| Tasks por responsavel | Chart for Work Items | Query: `Scrum - Tasks abertas`; Group by: `Assigned To`; Chart: Bar |
| Remaining Work por estado | Chart for Work Items | Query: `Scrum - Tasks abertas`; Aggregation: Sum de `Remaining Work`; Group by: `State`; Chart: Column |
| Composicao da sprint | Chart for Work Items | Query: `Scrum - Sprint 01`; Group by: `Work Item Type`; Chart: Pie |

Se o burndown ficar vazio, confira se:

- a sprint tem data de inicio e fim;
- PBIs e Tasks estao dentro da sprint;
- Tasks possuem `Remaining Work`;
- a equipe mudou estados ou atualizou trabalho restante.

### Widgets obrigatorios

- Markdown com meta da sprint, riscos e link da pipeline.
- Query Results usando `Scrum - Sprint 01`.
- Chart for Work Items: PBIs por estado.
- Chart for Work Items: Remaining Work por estado.
- Sprint Burndown, se houver dados suficientes.
- Build History da pipeline `scrum-banking`.

## Equipe 4: CMMI

Projeto: `04-cmmi-governance`

Objetivo do dashboard: acompanhar Requirements, Change Requests, riscos,
evidencias de auditoria e pipeline.

### Consulta principal

Nome da consulta: `CMMI - Requisitos e mudancas ativas`

Clausulas:

| Campo | Operador | Valor |
| --- | --- | --- |
| Team Project | = | @Project |
| Work Item Type | In | Epic, Requirement, Change Request, Task |
| State | <> | Closed |

Colunas recomendadas:

- ID
- Work Item Type
- Title
- State
- Assigned To
- Priority
- Risk
- Size
- Tags

Ordem sugerida:

1. Priority
2. Risk
3. Work Item Type
4. State

### Consultas adicionais

| Nome | Clausulas |
| --- | --- |
| `CMMI - Requirements ativos` | Team Project = @Project; Work Item Type = Requirement; State <> Closed |
| `CMMI - Change Requests ativos` | Team Project = @Project; Work Item Type = Change Request; State <> Closed |
| `CMMI - Auditoria` | Team Project = @Project; Tags Contains `audit`; State <> Closed |
| `CMMI - Pipeline` | Team Project = @Project; Tags Contains `pipeline` |

### Graficos recomendados

| Titulo do grafico | Widget ou aba Charts | Configuracao |
| --- | --- | --- |
| Requirements por estado | Chart for Work Items | Query: `CMMI - Requirements ativos`; Group by: `State`; Chart: Column |
| Change Requests por estado | Chart for Work Items | Query: `CMMI - Change Requests ativos`; Group by: `State`; Chart: Column |
| Itens por risco | Chart for Work Items | Query: `CMMI - Requisitos e mudancas ativas`; Group by: `Risk`; Chart: Bar |
| Itens de auditoria por tipo | Chart for Work Items | Query: `CMMI - Auditoria`; Group by: `Work Item Type`; Chart: Pie |

Se o campo `Risk` nao aparecer, use `Priority` ou `Work Item Type` no grafico e
registre o risco na descricao dos itens.

### Widgets obrigatorios

- Markdown com riscos, aprovacoes, governanca e link da pipeline.
- Query Results usando `CMMI - Requisitos e mudancas ativas`.
- Chart for Work Items: Requirements por estado.
- Chart for Work Items: Change Requests por estado.
- Chart for Work Items: Itens de auditoria por tipo.
- Build History da pipeline `cmmi-governance`.

## Parte 3: Criar graficos a partir da consulta

1. Abra a consulta salva em `Shared Queries`.
2. Confirme que ela retorna resultados.
3. Clique na aba Charts.
4. Clique em New chart.
5. Crie pelo menos dois graficos:
   - Itens por estado.
   - Itens por responsavel ou por tipo de work item.
6. Salve os graficos.

Sugestoes de graficos:

| Grafico | Tipo | Group by | Uso |
| --- | --- | --- | --- |
| Itens por estado | Column ou Pie | State | Ver fluxo e gargalos. |
| Itens por responsavel | Bar | Assigned To | Ver distribuicao de trabalho. |
| Itens por tipo | Pie | Work Item Type | Ver composicao do backlog. |
| Itens por prioridade | Bar | Priority | Ver foco da equipe. |
| Trabalho restante | Column | State | Usar soma de Remaining Work quando disponivel. |

Se o campo nao aparecer no `Group by`, volte na consulta, adicione o campo nas
colunas, salve e tente criar o grafico novamente.

## Parte 4: Criar ou abrir o dashboard

1. Acesse Dashboards.
2. Crie um dashboard chamado `Dashboard - Nome da Equipe`.
3. Clique em Edit.
4. Abra o catalogo de widgets.

## Parte 5: Adicionar widgets obrigatorios

Adicione pelo menos estes widgets:

| Widget | Configuracao |
| --- | --- |
| Markdown | Cole o conteudo de `docs/templates/dashboard-markdown.md`. |
| Query Results | Selecione a consulta principal salva em `Shared Queries`. |
| Chart for Work Items | Selecione a consulta principal e configure grafico por `State`. |
| Chart for Work Items | Configure grafico por `Assigned To`, `Priority` ou `Work Item Type`. |
| Build History | Selecione a pipeline da equipe. |

Para Scrum, adicione tambem:

- Sprint Burndown, se a sprint estiver configurada com datas e itens.

Para CMMI, adicione tambem:

- Chart for Work Items por `Work Item Type` ou `State`, destacando Requirements
  e Change Requests.

## Parte 6: Conferir o dashboard

O dashboard deve responder:

- O que esta em andamento?
- O que esta bloqueado?
- Quem esta responsavel por cada frente?
- Qual item tem maior prioridade?
- O que foi validado pela pipeline?
- Existe evidencia de artefato publicado?

## Problemas comuns

| Problema | Causa provavel | Como resolver |
| --- | --- | --- |
| A consulta nao aparece no widget | Foi salva em `My Queries` | Salve em `Shared Queries`. |
| O grafico nao aparece no dashboard | A consulta nao e `Flat list` | Crie uma nova consulta do tipo `Flat list of work items`. |
| O campo nao aparece no Group by | Campo nao esta nas colunas da consulta | Adicione o campo em Column Options e salve. |
| Widget mostra erro de permissao | Falta permissao na query ou dashboard | Peca ao instrutor para liberar permissao. |
| Burndown vazio | Sprint sem datas ou sem itens | Configure Iteration e mova PBIs/Tasks para a sprint. |
| Pipeline nao aparece no Build History | Pipeline nao foi executada no projeto | Execute a pipeline uma vez e atualize o dashboard. |

## Resultado esperado

Ao final, cada equipe deve ter:

- Uma pasta `Dashboard da Equipe` em `Shared Queries`.
- Pelo menos uma consulta principal salva.
- Pelo menos dois graficos baseados nessa consulta.
- Um dashboard com Markdown, Query Results, graficos e Build History.
- Evidencia clara da relacao entre backlog, fluxo de trabalho e pipeline.
