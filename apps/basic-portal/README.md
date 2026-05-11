# Portal do Cliente

Miniapp da equipe com processo Basic.

## Backlog sugerido

- Epic: Implantar Portal do Cliente
- Issue: Tela de Login
- Issue: Consulta de Solicitacoes
- Issue: Publicacao do Portal

## Mudancas simples para a pratica

1. Alterar um texto em `index.html`.
2. Incluir uma nova solicitacao em `app.js`.
3. Executar a pipeline `.azuredevops/pipelines/basic.yml`.
4. Relacionar a alteracao ao work item usando comentario no commit ou PR.

## Comando local

```bash
node scripts/validate-project.mjs apps/basic-portal
node scripts/build.mjs apps/basic-portal
```

