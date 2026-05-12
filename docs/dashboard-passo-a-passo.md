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

1. Acesse Boards > Queries.
2. Clique em New Query.
3. Escolha o tipo `Flat list of work items`.
4. Crie as clausulas da consulta conforme o processo da equipe.
5. Clique em Run query para testar.
6. Ajuste as colunas exibidas.
7. Salve em `Shared Queries > Dashboard da Equipe`.

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

### Basic

Nome da consulta: `Basic - Itens ativos`

Clausulas:

| Campo | Operador | Valor |
| --- | --- | --- |
| Team Project | = | @Project |
| Work Item Type | In | Epic, Issue, Task |
| State | <> | Done |

Colunas extras recomendadas:

- Priority
- Effort
- Tags

### Agile

Nome da consulta: `Agile - Historias e tarefas ativas`

Clausulas:

| Campo | Operador | Valor |
| --- | --- | --- |
| Team Project | = | @Project |
| Work Item Type | In | Epic, Feature, User Story, Task |
| State | <> | Closed |

Colunas extras recomendadas:

- Priority
- Story Points
- Business Value
- Tags

### Scrum

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

Colunas extras recomendadas:

- Priority
- Effort
- Remaining Work
- Tags

### CMMI

Nome da consulta: `CMMI - Requisitos e mudancas ativas`

Clausulas:

| Campo | Operador | Valor |
| --- | --- | --- |
| Team Project | = | @Project |
| Work Item Type | In | Epic, Requirement, Change Request, Task |
| State | <> | Closed |

Colunas extras recomendadas:

- Priority
- Risk
- Size
- Tags

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
