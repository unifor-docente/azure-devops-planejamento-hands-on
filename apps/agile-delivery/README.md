# Sistema de Delivery

Miniapp da equipe com processo Agile.

## Backlog sugerido

- Epic: Sistema de Delivery
- Feature: Gestao de Pedidos
- User Story: Como cliente, desejo acompanhar meu pedido em tempo real
- User Story: Como atendente, desejo atualizar o status do pedido

## Mudancas simples para a pratica

1. Alterar a previsao de entrega em `app.js`.
2. Adicionar uma nova etapa da jornada do pedido.
3. Rodar a pipeline `.azuredevops/pipelines/agile.yml`.
4. Usar o dashboard para discutir lead time, velocity e gargalos.

## Comando local

```bash
node scripts/validate-project.mjs apps/agile-delivery
node scripts/build.mjs apps/agile-delivery
```

