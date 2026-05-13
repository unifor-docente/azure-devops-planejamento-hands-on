# Processo Agile

## Cenario

Projeto: Sistema de Delivery.

Objetivo: permitir que o cliente acompanhe o pedido em tempo real, que o
atendente atualize o fluxo operacional e que o gestor enxergue progresso,
gargalos e valor entregue.

Hierarquia do processo:

```text
Epic
└── Feature
    └── User Story
        └── Task
```

O processo Agile deve mostrar gestao orientada a produto. O foco esta em valor
para o usuario, historias bem descritas, criterios de aceite e fluxo visual.

## Campos que a equipe deve preencher

Use o guia `docs/campos-work-items.md` como referencia.

Preenchimento minimo:

- Title
- Description
- Acceptance Criteria
- Assigned To
- Priority
- Story Points nas User Stories
- Business Value nas Features, quando disponivel
- Activity, Original Estimate, Remaining Work e Completed Work nas Tasks,
  quando disponivel
- Tags
- Relacionamento entre Epic, Features, User Stories e Tasks

## Escala sugerida

Story Points:

- `1`: texto, ajuste visual ou regra simples.
- `2`: tarefa pequena com pouca incerteza.
- `3`: historia simples com validacao.
- `5`: historia com mais de um comportamento.
- `8`: historia grande para a aula, mas ainda aceitavel.
- `13`: grande demais; discutir quebra.

Business Value:

- `100`: essencial para o MVP.
- `80`: alto valor para usuario ou operacao.
- `50`: util para acompanhamento.
- `20`: melhoria desejavel.

Tasks no Agile:

- Use Activity para separar desenvolvimento, teste, design, conteudo ou deploy.
- Use Original Estimate para a estimativa inicial.
- Use Remaining Work para o trabalho restante.
- Use Completed Work ao concluir a Task.

## Backlog realista

Crie os itens abaixo no Azure Boards. Depois relacione cada Task a sua User
Story, cada User Story a sua Feature e cada Feature ao Epic.

Para Tasks, use `OE` como Original Estimate, `RW` como Remaining Work e `CW`
como Completed Work.

| ID | Tipo | Pai | Titulo | Prioridade | Planejamento | Trabalho da Task | Estado inicial | Tags |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A-EPIC-01 | Epic | - | Sistema de Delivery | 1 | - | - | New | `mvp` |
| A-FEAT-01 | Feature | A-EPIC-01 | Gestao de Pedidos | 1 | Business Value 100 | - | Active | `mvp` |
| A-US-01 | User Story | A-FEAT-01 | Como cliente, desejo acompanhar meu pedido em tempo real | 1 | Story Points 8 | - | Active | `customer-visible` |
| A-TASK-01 | Task | A-US-01 | Exibir linha do tempo do pedido | 1 | - | Activity Development; OE 3; RW 3; CW 0 | Active | `frontend` |
| A-TASK-02 | Task | A-US-01 | Atualizar previsao de entrega | 1 | - | Activity Development; OE 2; RW 2; CW 0 | New | `frontend` |
| A-TASK-03 | Task | A-US-01 | Validar status atual no resumo do pedido | 2 | - | Activity Testing; OE 2; RW 2; CW 0 | New | `quality` |
| A-US-02 | User Story | A-FEAT-01 | Como atendente, desejo atualizar o status do pedido | 1 | Story Points 5 | - | New | `operation` |
| A-TASK-04 | Task | A-US-02 | Criar acao de avancar status | 1 | - | Activity Development; OE 2; RW 2; CW 0 | New | `frontend` |
| A-TASK-05 | Task | A-US-02 | Bloquear avanco apos pedido entregue | 2 | - | Activity Testing; OE 2; RW 2; CW 0 | New | `quality` |
| A-FEAT-02 | Feature | A-EPIC-01 | Comunicacao com Cliente | 2 | Business Value 80 | - | New | `customer-visible` |
| A-US-03 | User Story | A-FEAT-02 | Como cliente, desejo receber aviso quando o pedido sair para entrega | 2 | Story Points 5 | - | New | `notification` |
| A-TASK-06 | Task | A-US-03 | Definir texto do aviso de saida para entrega | 2 | - | Activity Documentation; OE 1; RW 1; CW 0 | New | `content` |
| A-TASK-07 | Task | A-US-03 | Simular alerta visual no miniapp | 2 | - | Activity Development; OE 2; RW 2; CW 0 | New | `frontend` |
| A-US-04 | User Story | A-FEAT-02 | Como cliente, desejo ver prazo estimado de entrega atualizado | 2 | Story Points 3 | - | New | `customer-visible` |
| A-TASK-08 | Task | A-US-04 | Revisar regra de exibicao do tempo estimado | 2 | - | Activity Development; OE 2; RW 2; CW 0 | New | `frontend` |
| A-FEAT-03 | Feature | A-EPIC-01 | Acompanhamento Operacional | 3 | Business Value 50 | - | New | `management` |
| A-US-05 | User Story | A-FEAT-03 | Como gerente, desejo visualizar gargalos por status do pedido | 3 | Story Points 8 | - | New | `dashboard` |
| A-TASK-09 | Task | A-US-05 | Criar query de pedidos por estado | 3 | - | Activity Documentation; OE 2; RW 2; CW 0 | New | `query` |
| A-TASK-10 | Task | A-US-05 | Adicionar grafico no dashboard da equipe | 3 | - | Activity Design; OE 2; RW 2; CW 0 | New | `dashboard` |
| A-US-06 | User Story | A-FEAT-03 | Como equipe, desejo evidenciar entrega pela pipeline | 1 | Story Points 3 | - | New | `pipeline` |
| A-TASK-11 | Task | A-US-06 | Conferir artefato `agile-delivery-site` | 1 | - | Activity Deployment; OE 1; RW 1; CW 0 | New | `pipeline` |
| A-TASK-12 | Task | A-US-06 | Registrar link da execucao da pipeline | 1 | - | Activity Deployment; OE 1; RW 1; CW 0 | New | `pipeline` |

## Detalhes para preencher

### A-US-01: Como cliente, desejo acompanhar meu pedido em tempo real

Descricao:

> O cliente precisa entender em qual etapa o pedido esta para reduzir contato
> com atendimento e aumentar previsibilidade da entrega.

Criterios de aceite:

- Linha do tempo mostra pelo menos 4 etapas.
- Uma etapa aparece como atual.
- Previsao de entrega e exibida de forma clara.
- A historia tem 8 story points ou deve ser quebrada pela equipe.

### A-US-02: Como atendente, desejo atualizar o status do pedido

Descricao:

> O atendente precisa simular a mudanca de status do pedido para demonstrar a
> operacao do fluxo.

Criterios de aceite:

- Botao de avancar status aparece no miniapp.
- Status muda sem recarregar a pagina.
- Pedido entregue nao deve avancar novamente.

### A-US-03: Como cliente, desejo receber aviso quando o pedido sair para entrega

Descricao:

> O cliente deve perceber quando o pedido saiu para entrega, mesmo que a
> notificacao seja apenas uma simulacao visual.

Criterios de aceite:

- Texto do aviso definido.
- Aviso usa linguagem simples.
- Equipe registra se a notificacao real ficaria fora do MVP.

### A-US-05: Como gerente, desejo visualizar gargalos por status do pedido

Descricao:

> O gerente precisa enxergar onde os pedidos ficam acumulados para agir antes do
> atraso chegar ao cliente.

Criterios de aceite:

- Query salva em Shared Queries.
- Grafico adicionado ao dashboard.
- Equipe explica qual estado representa gargalo.

### A-US-06: Como equipe, desejo evidenciar entrega pela pipeline

Descricao:

> A equipe deve usar a pipeline como evidencia de validacao, build, artefato e
> deploy simulado.

Criterios de aceite:

- Pipeline executada em `homologacao`.
- Artefato `agile-delivery-site` localizado.
- Link da execucao registrado na User Story.

## Simulacao obrigatoria

1. Mova `A-US-01` para `Active`.
2. Mova `A-TASK-01` para `Closed` quando a equipe conferir o miniapp e atualize
   Remaining Work para `0` e Completed Work para `3`.
3. Marque `A-TASK-05` com a tag `blocked`.
4. Execute a pipeline com a nota `Fluxo de delivery validado pela equipe Agile`.

## Perguntas para discussao

- O que muda quando a equipe usa User Stories em vez de Issues?
- Como Story Points ajudam previsibilidade sem virar estimativa em horas?
- O Cumulative Flow mostra gargalos com clareza?

## Dashboard recomendado

- Velocity.
- Cumulative Flow Diagram.
- Query Results: User Stories ativas.
- Chart for Work Items: User Stories por estado.
- Build History: pipeline `agile-delivery`.
