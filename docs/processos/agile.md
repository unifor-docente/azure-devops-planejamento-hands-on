# Processo Agile

## Cenario

Projeto: Sistema de Delivery.

Objetivo: permitir que o cliente acompanhe o pedido em tempo real e que a equipe
melhore o fluxo de atendimento.

Hierarquia do processo:

```text
Epic
└── Feature
    └── User Story
        └── Task
```

## Backlog sugerido

| Tipo | Titulo | Estado inicial | Valor sugerido |
| --- | --- | --- | --- |
| Epic | Sistema de Delivery | New | Produto |
| Feature | Gestao de Pedidos | Active | Alta |
| User Story | Como cliente, desejo acompanhar meu pedido em tempo real | Active | 8 story points |
| Task | Exibir linha do tempo do pedido | Active | 3 horas |
| Task | Atualizar previsao de entrega | New | 2 horas |
| User Story | Como atendente, desejo atualizar o status do pedido | New | 5 story points |
| Task | Criar acao de avancar status | New | 2 horas |
| Feature | Comunicacao com Cliente | New | Media |
| User Story | Como cliente, desejo receber uma mensagem quando o pedido sair para entrega | New | 3 story points |

## Criterios de aceite sugeridos

- Cliente visualiza status atual do pedido.
- Cliente entende a previsao de entrega.
- Atendente consegue avancar o status sem alterar codigo complexo.
- Pipeline gera artefato do miniapp.

## Perguntas para discussao

- O que muda quando a equipe usa User Stories em vez de Issues?
- Como a metrica Velocity pode apoiar planejamento?
- O Cumulative Flow mostra gargalos com clareza?

## Dashboard recomendado

- Velocity.
- Cumulative Flow Diagram.
- Query Results: user stories ativas.
- Build History: pipeline `agile-delivery`.

