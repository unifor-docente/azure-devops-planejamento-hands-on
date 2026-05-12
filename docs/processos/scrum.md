# Processo Scrum

## Cenario

Projeto: Aplicativo Bancario PIX.

Objetivo: entregar uma funcionalidade pequena de transferencia PIX em uma sprint
curta, com validacao, limite operacional, evidencia de pipeline e acompanhamento
por burndown.

Hierarquia do processo:

```text
Epic
└── Feature
    └── Product Backlog Item
        └── Task
```

O processo Scrum deve mostrar planejamento de sprint, Product Backlog Items
priorizados, capacidade do time, estimativa e acompanhamento de trabalho
restante.

## Campos que a equipe deve preencher

Use o guia `docs/campos-work-items.md` como referencia.

Preenchimento minimo:

- Title
- Description
- Acceptance Criteria
- Assigned To
- Priority
- Effort nos Product Backlog Items
- Remaining Work nas Tasks
- Iteration Path com a sprint da aula
- Tags
- Relacionamento entre Epic, Features, PBIs e Tasks

## Escala sugerida

Effort dos PBIs:

- `1`: ajuste pequeno.
- `2`: regra simples.
- `3`: PBI pequeno.
- `5`: PBI medio.
- `8`: PBI grande para a sprint.
- `13`: grande demais; quebrar antes de colocar na sprint.

Remaining Work das Tasks:

- Use horas simbolicas.
- Cada integrante pode assumir de `2h` a `4h` para simular capacidade.
- Ao mover uma Task para `Done`, atualize Remaining Work para `0`.

## Sprint sugerida

Nome: `Sprint 01 - PIX`.

Datas: usar a semana da aula pratica.

Meta da sprint:

> Validar uma transferencia PIX simulada com chave, valor, limite piloto,
> resumo de confirmacao e evidencia de pipeline.

Capacidade simbolica:

| Papel | Capacidade sugerida |
| --- | --- |
| Product Owner | 2h |
| Dev 1 | 4h |
| Dev 2 | 4h |
| QA | 3h |
| DevOps | 2h |

## Backlog realista

Crie os itens abaixo no Azure Boards. Coloque na `Sprint 01 - PIX` apenas os PBIs
marcados como `Sprint 01`. Os itens `Futuro` ficam no product backlog.

| ID | Tipo | Pai | Titulo | Prioridade | Effort/Tempo | Iteration | Estado inicial | Tags |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S-EPIC-01 | Epic | - | Aplicativo Bancario | 1 | Produto | Backlog | New | `mvp` |
| S-FEAT-01 | Feature | S-EPIC-01 | Transferencia PIX | 1 | Alta | Sprint 01 | Approved | `mvp` |
| S-PBI-01 | Product Backlog Item | S-FEAT-01 | Permitir transferencia instantanea entre contas | 1 | 8 | Sprint 01 | Committed | `customer-visible` |
| S-TASK-01 | Task | S-PBI-01 | Criar formulario de chave PIX e valor | 1 | 3h | Sprint 01 | To Do | `frontend` |
| S-TASK-02 | Task | S-PBI-01 | Implementar validacao de chave PIX | 1 | 3h | Sprint 01 | In Progress | `quality` |
| S-TASK-03 | Task | S-PBI-01 | Exibir resumo da transferencia | 2 | 2h | Sprint 01 | To Do | `frontend` |
| S-PBI-02 | Product Backlog Item | S-FEAT-01 | Bloquear valores acima do limite piloto | 1 | 3 | Sprint 01 | Approved | `risk` |
| S-TASK-04 | Task | S-PBI-02 | Configurar regra de limite de R$ 500 | 1 | 1h | Sprint 01 | To Do | `business-rule` |
| S-TASK-05 | Task | S-PBI-02 | Validar mensagem de limite excedido | 2 | 1h | Sprint 01 | To Do | `quality` |
| S-PBI-03 | Product Backlog Item | S-FEAT-01 | Registrar comprovante visual da operacao | 2 | 5 | Sprint 01 | Approved | `customer-visible` |
| S-TASK-06 | Task | S-PBI-03 | Definir campos do comprovante | 2 | 1h | Sprint 01 | To Do | `content` |
| S-TASK-07 | Task | S-PBI-03 | Conferir layout do resumo final | 2 | 2h | Sprint 01 | To Do | `ux` |
| S-PBI-04 | Product Backlog Item | S-FEAT-01 | Evidenciar entrega pela pipeline | 1 | 3 | Sprint 01 | Approved | `pipeline` |
| S-TASK-08 | Task | S-PBI-04 | Conferir artefato `scrum-banking-site` | 1 | 1h | Sprint 01 | To Do | `pipeline` |
| S-TASK-09 | Task | S-PBI-04 | Registrar link da execucao da pipeline | 1 | 1h | Sprint 01 | To Do | `pipeline` |
| S-FEAT-02 | Feature | S-EPIC-01 | Beneficiarios Favoritos | 3 | Media | Futuro | New | `future` |
| S-PBI-05 | Product Backlog Item | S-FEAT-02 | Salvar chave PIX como favorita | 3 | 8 | Futuro | New | `future` |
| S-PBI-06 | Product Backlog Item | S-FEAT-02 | Enviar comprovante por e-mail | 4 | 5 | Futuro | New | `future` |

## Detalhes para preencher

### S-PBI-01: Permitir transferencia instantanea entre contas

Descricao:

> Como cliente bancario, desejo informar chave PIX e valor para simular uma
> transferencia instantanea e visualizar se a operacao esta pronta para
> confirmacao.

Criterios de aceite:

- Formulario possui chave PIX e valor.
- Chave invalida exibe mensagem compreensivel.
- Valor valido gera resumo de transferencia.
- Tasks filhas possuem Remaining Work.

### S-PBI-02: Bloquear valores acima do limite piloto

Descricao:

> Como banco, desejo limitar a transferencia piloto para reduzir risco na
> demonstracao e deixar claro que existe uma regra de negocio.

Criterios de aceite:

- Valor acima de R$ 500 e bloqueado.
- Mensagem informa o limite.
- Equipe explica a regra no board.

### S-PBI-03: Registrar comprovante visual da operacao

Descricao:

> Como cliente, desejo ver um resumo da transferencia para conferir valor e
> situacao antes da confirmacao final.

Criterios de aceite:

- Resumo mostra valor validado.
- Texto diferencia sucesso e erro.
- Layout e legivel em desktop.

### S-PBI-04: Evidenciar entrega pela pipeline

Descricao:

> Como time Scrum, desejamos evidenciar que a sprint gerou uma entrega
> verificavel por pipeline.

Criterios de aceite:

- Pipeline executada em `homologacao`.
- Artefato `scrum-banking-site` localizado.
- Link da execucao registrado no PBI.

## Simulacao obrigatoria

1. Coloque `S-PBI-01`, `S-PBI-02`, `S-PBI-03` e `S-PBI-04` na `Sprint 01 - PIX`.
2. Mova `S-TASK-02` para `In Progress`.
3. Mova `S-TASK-08` para `Done` depois de conferir o artefato.
4. Atualize Remaining Work de uma Task concluida para `0`.
5. Execute a pipeline com a nota `Incremento PIX validado pela equipe Scrum`.

## Perguntas para discussao

- O burndown ajuda a enxergar atraso antes do fim da sprint?
- Qual diferenca pratica entre Product Backlog Item e User Story?
- O time conseguiu deixar claro o que esta dentro e fora da sprint?
- Algum PBI ficou grande demais para a sprint?

## Dashboard recomendado

- Sprint Burndown.
- Sprint Capacity.
- Query Results: PBIs comprometidos.
- Chart for Work Items: Tasks por estado.
- Build History: pipeline `scrum-banking`.

