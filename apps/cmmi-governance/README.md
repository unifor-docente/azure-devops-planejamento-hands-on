# Sistema Governamental

Miniapp da equipe com processo CMMI.

## Backlog sugerido

- Epic: Sistema Governamental
- Requirement: Controle de acesso por perfil
- Change Request: Alteracao da politica de autenticacao
- Task: Atualizar regras de permissao

## Mudancas simples para a pratica

1. Alterar uma politica de aprovacao em `app.js`.
2. Adicionar uma nova solicitacao formal.
3. Rodar a pipeline `.azuredevops/pipelines/cmmi.yml`.
4. Discutir governanca, historico e rastreabilidade no Azure Boards.

## Comando local

```bash
node scripts/validate-project.mjs apps/cmmi-governance
node scripts/build.mjs apps/cmmi-governance
```

