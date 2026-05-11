# Processo Scrum

## Cenario

Projeto: Aplicativo Bancario PIX.

Objetivo: entregar uma funcionalidade pequena de transferencia PIX em uma sprint
curta, com validacao e acompanhamento por burndown.

Hierarquia do processo:

```text
Epic
└── Feature
    └── Product Backlog Item
        └── Task
```

## Backlog sugerido

| Tipo | Titulo | Estado inicial | Estimativa sugerida |
| --- | --- | --- | --- |
| Epic | Aplicativo Bancario | New | Produto |
| Feature | Transferencia PIX | Approved | Alta |
| Product Backlog Item | Permitir transferencia instantanea entre contas | Committed | 8 pontos |
| Task | Criar formulario de chave PIX e valor | To Do | 3 horas |
| Task | Implementar validacao de chave PIX | In Progress | 3 horas |
| Task | Exibir resumo da transferencia | To Do | 2 horas |
| Product Backlog Item | Bloquear valores acima do limite piloto | Approved | 3 pontos |
| Task | Configurar regra de limite | To Do | 1 hora |

## Sprint sugerida

Nome: `Sprint 01 - PIX`.

Datas: usar a semana da aula.

Capacidade: cada integrante pode assumir 2 a 4 horas simbolicas para simular o
uso de capacity.

## Perguntas para discussao

- O burndown ajuda a enxergar atraso antes do fim da sprint?
- Qual diferenca pratica entre Product Backlog Item e User Story?
- O time conseguiu deixar claro o que esta dentro e fora da sprint?

## Dashboard recomendado

- Sprint Burndown.
- Sprint Capacity.
- Query Results: PBIs comprometidos.
- Build History: pipeline `scrum-banking`.

