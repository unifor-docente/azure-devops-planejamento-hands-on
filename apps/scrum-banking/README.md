# Aplicativo Bancario PIX

Miniapp da equipe com processo Scrum.

## Backlog sugerido

- Epic: Aplicativo Bancario
- Feature: Transferencia PIX
- Product Backlog Item: Permitir transferencia instantanea entre contas
- Product Backlog Item: Validar chave PIX antes de confirmar envio

## Mudancas simples para a pratica

1. Alterar o limite permitido em `app.js`.
2. Adicionar uma regra de validacao simples.
3. Rodar a pipeline `.azuredevops/pipelines/scrum.yml`.
4. Atualizar o board da sprint e observar o burndown.

## Comando local

```bash
node scripts/validate-project.mjs apps/scrum-banking
node scripts/build.mjs apps/scrum-banking
```

