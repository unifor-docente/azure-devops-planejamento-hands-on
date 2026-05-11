# Processo CMMI

## Cenario

Projeto: Sistema Governamental.

Objetivo: controlar acessos por perfil com mais formalidade, registrando
requisitos, solicitacoes de mudanca, tarefas e evidencias.

Hierarquia do processo:

```text
Epic
└── Requirement
    └── Change Request
        └── Task
```

## Backlog sugerido

| Tipo | Titulo | Estado inicial | Observacao |
| --- | --- | --- | --- |
| Epic | Sistema Governamental | Proposed | Programa |
| Requirement | Controle de acesso por perfil | Active | Requisito funcional |
| Change Request | Alteracao da politica de autenticacao | Active | Mudanca aprovada em comite |
| Task | Atualizar regras de permissao | Active | Implementacao |
| Task | Registrar criterio de auditoria | Proposed | Governanca |
| Change Request | Exigir dupla aprovacao para perfil administrador | Proposed | Mudanca pendente |
| Task | Ajustar tela de solicitacoes de mudanca | Proposed | Interface |
| Requirement | Historico de aprovacoes | Proposed | Requisito de auditoria |

## Campos e praticas recomendadas

- Preencher descricao e justificativa.
- Usar tag `audit`.
- Relacionar Tasks ao Requirement ou Change Request.
- Registrar decisoes importantes nos comentarios do work item.

## Perguntas para discussao

- Quando a formalidade do CMMI agrega valor?
- O que a rastreabilidade protege em projetos regulados?
- Quais indicadores ajudam mais: lead time de mudanca ou requisitos ativos?

## Dashboard recomendado

- Query Results: requirements ativos.
- Chart for Work Items: change requests por estado.
- Markdown: riscos, aprovacoes e governanca.
- Build History: pipeline `cmmi-governance`.

