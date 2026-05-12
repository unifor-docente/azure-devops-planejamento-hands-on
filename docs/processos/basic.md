# Processo Basic

## Cenario

Projeto: Portal do Cliente.

Objetivo: criar uma experiencia simples para o cliente acompanhar solicitacoes,
status de atendimento, comunicados e evidencias basicas de entrega.

Hierarquia do processo:

```text
Epic
└── Issue
    └── Task
```

O processo Basic deve mostrar simplicidade operacional. Ele e bom para equipes
que precisam de visibilidade rapida, poucos niveis de controle e baixa
cerimonia.

## Campos que a equipe deve preencher

Use o guia `docs/campos-work-items.md` como referencia.

Preenchimento minimo:

- Title
- Description
- State
- Assigned To
- Priority
- Effort, quando disponivel
- Tags
- Criterios de aceite na descricao
- Relacionamento entre Epic, Issues e Tasks

## Escala sugerida

Prioridade:

- `1`: essencial para o MVP.
- `2`: importante para a demonstracao.
- `3`: melhoria ou complemento.
- `4`: pode ficar fora.

Effort:

- `1`: ajuste simples.
- `2`: tarefa pequena.
- `3`: tarefa media.
- `5`: item com varias etapas.
- `8`: item grande para a aula.

## Backlog realista

Crie os itens abaixo no Azure Boards. Depois relacione cada Task a sua Issue e
cada Issue ao Epic.

| ID | Tipo | Pai | Titulo | Prioridade | Effort | Estado inicial | Tags |
| --- | --- | --- | --- | --- | --- | --- | --- |
| B-EPIC-01 | Epic | - | Implantar Portal do Cliente | 1 | 34 | To Do | `mvp` |
| B-ISS-01 | Issue | B-EPIC-01 | Login do cliente | 1 | 8 | To Do | `mvp`, `customer-visible` |
| B-TASK-01 | Task | B-ISS-01 | Criar formulario de autenticacao | 1 | 3h | To Do | `frontend` |
| B-TASK-02 | Task | B-ISS-01 | Validar mensagem de erro de login | 2 | 2h | To Do | `quality` |
| B-TASK-03 | Task | B-ISS-01 | Revisar texto da tela de login | 3 | 1h | To Do | `ux` |
| B-ISS-02 | Issue | B-EPIC-01 | Consulta de solicitacoes | 1 | 8 | Doing | `mvp`, `customer-visible` |
| B-TASK-04 | Task | B-ISS-02 | Exibir lista de solicitacoes mockadas | 1 | 3h | Doing | `frontend` |
| B-TASK-05 | Task | B-ISS-02 | Adicionar status visual das solicitacoes | 2 | 2h | To Do | `ux` |
| B-TASK-06 | Task | B-ISS-02 | Validar contadores do painel | 2 | 2h | To Do | `quality` |
| B-ISS-03 | Issue | B-EPIC-01 | Comunicados ao cliente | 2 | 5 | To Do | `customer-visible` |
| B-TASK-07 | Task | B-ISS-03 | Criar area de comunicado operacional | 2 | 2h | To Do | `frontend` |
| B-TASK-08 | Task | B-ISS-03 | Definir mensagem de indisponibilidade | 3 | 1h | To Do | `content` |
| B-ISS-04 | Issue | B-EPIC-01 | Evidencia de entrega pela pipeline | 1 | 5 | To Do | `pipeline` |
| B-TASK-09 | Task | B-ISS-04 | Conferir artefato publicado | 1 | 1h | To Do | `pipeline` |
| B-TASK-10 | Task | B-ISS-04 | Registrar link da execucao da pipeline | 1 | 1h | To Do | `pipeline` |
| B-ISS-05 | Issue | B-EPIC-01 | Ajustes de acessibilidade | 3 | 3 | To Do | `accessibility` |
| B-TASK-11 | Task | B-ISS-05 | Revisar contraste e textos dos botoes | 3 | 2h | To Do | `ux` |

## Detalhes para preencher

### B-EPIC-01: Implantar Portal do Cliente

Descricao:

> Disponibilizar uma versao demonstravel do Portal do Cliente para acompanhar
> solicitacoes, reduzir duvidas de atendimento e criar uma evidencia de entrega
> via pipeline no Azure DevOps.

Criterios de aceite:

- Pelo menos 3 Issues filhas criadas.
- Pelo menos 1 Issue em `Doing`.
- Pelo menos 1 Task em `Done`.
- Pipeline executada pela equipe.
- Artefato publicado identificado.

### B-ISS-01: Login do cliente

Descricao:

> Permitir que o cliente veja uma tela inicial de login, mesmo sem autenticacao
> real, para representar o primeiro fluxo do portal.

Criterios de aceite:

- Formulario de login visivel.
- Mensagem de erro definida para credenciais invalidas.
- Texto revisado para linguagem clara.

### B-ISS-02: Consulta de solicitacoes

Descricao:

> Exibir solicitacoes recentes com status para que o cliente entenda o andamento
> do atendimento.

Criterios de aceite:

- Lista de solicitacoes aparece no miniapp.
- Cada solicitacao tem status.
- Contadores do painel batem com os dados exibidos.

### B-ISS-03: Comunicados ao cliente

Descricao:

> Criar um espaco para comunicados simples, como indisponibilidade, prazo de
> atendimento ou aviso operacional.

Criterios de aceite:

- Comunicado possui titulo e mensagem curta.
- Texto evita termos tecnicos.
- Item pode ficar fora do MVP se a equipe justificar.

### B-ISS-04: Evidencia de entrega pela pipeline

Descricao:

> Usar a pipeline como evidencia de que o trabalho foi validado, gerou artefato
> e passou pelo deploy simulado.

Criterios de aceite:

- Pipeline executada em `homologacao`.
- Artefato `basic-portal-site` localizado.
- Link da execucao registrado no work item.

## Simulacao obrigatoria

1. Marque `B-TASK-06` com a tag `blocked`.
2. Mova `B-ISS-02` para `Doing`.
3. Mova `B-TASK-09` para `Done` depois de conferir o artefato.
4. Execute a pipeline com a nota `Portal validado pela equipe Basic`.

## Perguntas para discussao

- O processo Basic e suficiente para projetos grandes?
- A hierarquia Epic, Issue e Task da visibilidade adequada ao gerente?
- Quais indicadores seriam mais uteis: throughput, cycle time ou historico da pipeline?

## Dashboard recomendado

- Query Results: Issues abertas.
- Chart for Work Items: Issues por estado.
- Build History: pipeline `basic-portal`.
- Markdown: objetivo do MVP, riscos e link da pipeline.

