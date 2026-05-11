# Processo Basic

## Cenario

Projeto: Portal do Cliente.

Objetivo: criar uma experiencia simples para o cliente acompanhar solicitacoes e
status de atendimento.

Hierarquia do processo:

```text
Epic
└── Issue
    └── Task
```

## Backlog sugerido

| Tipo | Titulo | Estado inicial | Responsavel sugerido |
| --- | --- | --- | --- |
| Epic | Implantar Portal do Cliente | To Do | Gerente do projeto |
| Issue | Tela de Login | To Do | Analista 1 |
| Task | Criar formulario de autenticacao | To Do | Dev 1 |
| Task | Validar mensagem de erro de login | To Do | QA |
| Issue | Consulta de Solicitacoes | Doing | Analista 2 |
| Task | Exibir lista de solicitacoes mockadas | Doing | Dev 2 |
| Task | Revisar texto da tela inicial | To Do | UX |
| Issue | Publicacao do Portal | Done | DevOps |
| Task | Configurar pipeline do portal | Done | DevOps |

## Tags sugeridas

- `mvp`
- `blocked`
- `customer-visible`

## Perguntas para discussao

- O processo Basic e suficiente para projetos grandes?
- A hierarquia Epic, Issue e Task da visibilidade adequada ao gerente?
- Quais indicadores seriam mais uteis: throughput, cycle time ou burndown?

## Dashboard recomendado

- Query Results: issues abertas.
- Chart for Work Items: issues por estado.
- Build History: pipeline `basic-portal`.
- Markdown: objetivo do MVP e riscos.

