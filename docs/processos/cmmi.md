# Processo CMMI

## Cenario

Projeto: Sistema Governamental.

Objetivo: controlar acessos por perfil com formalidade, registrando requisitos,
solicitacoes de mudanca, riscos, evidencias e rastreabilidade para auditoria.

Hierarquia do processo:

```text
Epic
└── Feature
    └── Requirement
        └── Task

Requirement ── Change Request
```

O processo CMMI deve mostrar governanca. Ele e mais pesado que Basic, Agile e
Scrum, mas ajuda quando o projeto exige historico, aprovacao, conformidade e
auditoria. Use Features para agrupar Requirements no nivel de portfolio. Use
Change Requests como itens formais relacionados aos Requirements quando houver
mudanca de escopo, regra ou politica.

## Campos que a equipe deve preencher

Use o guia `docs/campos-work-items.md` como referencia.

Preenchimento minimo:

- Title
- Description
- Acceptance Criteria ou criterios na descricao
- Assigned To
- Priority
- Risk, quando disponivel
- Business Value, quando disponivel
- Size, quando disponivel
- Discipline, Original Estimate, Remaining Work e Completed Work nas Tasks,
  quando disponivel
- Tags
- Justificativa nos Change Requests
- Relacionamento entre Epic, Features, Requirements, Tasks e Change Requests

## Escala sugerida

Prioridade:

- `1`: requisito legal, seguranca ou bloqueio critico.
- `2`: alto impacto operacional.
- `3`: importante para governanca.
- `4`: melhoria futura.

Risk:

- `1`: alto risco de seguranca, auditoria ou prazo.
- `2`: risco medio.
- `3`: baixo risco.

Size:

- `1`: simples.
- `2`: pequeno.
- `3`: medio.
- `5`: grande.
- `8`: muito grande para a aula.

Tasks no CMMI:

- Use Discipline para indicar a disciplina da tarefa.
- Use Original Estimate para a estimativa inicial.
- Use Remaining Work para o trabalho restante.
- Use Completed Work ao concluir a Task.

## Backlog realista

Crie os itens abaixo no Azure Boards. Depois relacione Requirements a Features,
Tasks aos Requirements e Change Requests aos Requirements correspondentes.

Para Tasks, use `OE` como Original Estimate, `RW` como Remaining Work e `CW`
como Completed Work.

| ID | Tipo | Pai | Titulo | Prioridade | Planejamento e risco | Trabalho da Task | Estado inicial | Tags |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C-EPIC-01 | Epic | - | Sistema Governamental | 1 | - | - | Proposed | `mvp`, `audit` |
| C-FEAT-01 | Feature | C-EPIC-01 | Governanca de acessos administrativos | 1 | Business Value 100 | - | Active | `mvp`, `audit` |
| C-REQ-01 | Requirement | C-FEAT-01 | Controle de acesso por perfil | 1 | Risk 1; Size 8 | - | Active | `audit`, `security` |
| C-CR-01 | Change Request | C-REQ-01 | Alteracao da politica de autenticacao | 1 | Risk 1; justificativa obrigatoria | - | Active | `security` |
| C-TASK-01 | Task | C-REQ-01 | Atualizar regras de permissao | 1 | - | Discipline Development; OE 3; RW 3; CW 0 | Active | `security` |
| C-TASK-02 | Task | C-REQ-01 | Registrar criterio de auditoria | 1 | - | Discipline Analysis; OE 2; RW 2; CW 0 | Proposed | `audit` |
| C-TASK-03 | Task | C-CR-01 | Revisar impacto da mudanca | 2 | - | Discipline Analysis; OE 2; RW 2; CW 0 | Proposed | `risk` |
| C-CR-02 | Change Request | C-REQ-01 | Exigir dupla aprovacao para perfil administrador | 1 | Risk 1; justificativa obrigatoria | - | Proposed | `approval` |
| C-TASK-04 | Task | C-CR-02 | Documentar fluxo de aprovacao | 1 | - | Discipline User Education; OE 2; RW 2; CW 0 | Proposed | `audit` |
| C-TASK-05 | Task | C-CR-02 | Ajustar tela de solicitacoes de mudanca | 2 | - | Discipline Development; OE 3; RW 3; CW 0 | Proposed | `frontend` |
| C-REQ-02 | Requirement | C-FEAT-01 | Historico de aprovacoes | 2 | Risk 2; Size 5 | - | Proposed | `audit` |
| C-CR-03 | Change Request | C-REQ-02 | Registrar data, responsavel e justificativa da aprovacao | 2 | Risk 2; justificativa obrigatoria | - | Proposed | `audit` |
| C-TASK-06 | Task | C-REQ-02 | Definir campos minimos do historico | 2 | - | Discipline Analysis; OE 2; RW 2; CW 0 | Proposed | `governance` |
| C-TASK-07 | Task | C-CR-03 | Registrar exemplo de evidencia no work item | 2 | - | Discipline User Education; OE 1; RW 1; CW 0 | Proposed | `evidence` |
| C-FEAT-02 | Feature | C-EPIC-01 | Evidencias e auditoria operacional | 2 | Business Value 80 | - | Active | `pipeline`, `audit` |
| C-REQ-03 | Requirement | C-FEAT-02 | Evidencia de entrega por pipeline | 2 | Risk 2; Size 3 | - | Active | `pipeline`, `audit` |
| C-CR-04 | Change Request | C-REQ-03 | Incluir execucao de pipeline como evidencia de validacao | 2 | Risk 2; justificativa obrigatoria | - | Active | `pipeline` |
| C-TASK-08 | Task | C-REQ-03 | Conferir artefato `cmmi-governance-site` | 2 | - | Discipline Test; OE 1; RW 1; CW 0 | Proposed | `pipeline` |
| C-TASK-09 | Task | C-CR-04 | Registrar link da execucao da pipeline | 2 | - | Discipline User Education; OE 1; RW 1; CW 0 | Proposed | `evidence` |
| C-REQ-04 | Requirement | C-FEAT-02 | Relatorio de acessos administrativos | 3 | Risk 3; Size 8 | - | Proposed | `future` |
| C-CR-05 | Change Request | C-REQ-04 | Adicionar filtros por periodo e perfil | 4 | Risk 3; justificativa obrigatoria | - | Proposed | `future` |

## Detalhes para preencher

### C-REQ-01: Controle de acesso por perfil

Descricao:

> O sistema deve controlar acesso por perfil para reduzir risco de acesso
> indevido e permitir rastreabilidade em auditorias.

Criterios de aceite:

- Perfis administrativos exigem aprovacao.
- Mudancas de politica possuem Change Request relacionado.
- Tasks registram evidencia ou justificativa.
- Pelo menos uma tag `audit` aplicada.

### C-CR-01: Alteracao da politica de autenticacao

Justificativa:

> A politica atual nao evidencia quem aprovou mudancas de permissao. A mudanca
> proposta cria trilha minima de auditoria.

Criterios de aceite:

- Regras de permissao descritas.
- Impacto da mudanca registrado.
- Criterio de auditoria documentado.

### C-CR-02: Exigir dupla aprovacao para perfil administrador

Justificativa:

> Perfis administrativos aumentam risco operacional e devem passar por dupla
> aprovacao antes da ativacao.

Criterios de aceite:

- Fluxo de aprovacao documentado.
- Responsavel pela aprovacao definido.
- Risco classificado como alto.

### C-REQ-02: Historico de aprovacoes

Descricao:

> O sistema deve manter historico minimo para que uma auditoria consiga
> identificar data, responsavel, justificativa e status da aprovacao.

Criterios de aceite:

- Campos minimos definidos.
- Exemplo de evidencia registrado no Azure Boards.
- Relacao com Feature e Change Request criada.

### C-REQ-03: Evidencia de entrega por pipeline

Descricao:

> A equipe deve usar a pipeline como evidencia de validacao tecnica e registrar
> o artefato publicado como parte da rastreabilidade.

Criterios de aceite:

- Pipeline executada em `homologacao`.
- Artefato `cmmi-governance-site` localizado.
- Link da execucao registrado em um work item.

## Simulacao obrigatoria

1. Use a tag `audit` em pelo menos 3 itens.
2. Mova `C-REQ-01` para `Active`.
3. Mova `C-TASK-08` para `Closed` depois de conferir o artefato e atualize
   Remaining Work para `0` e Completed Work para `1`.
4. Registre uma justificativa em `C-CR-02`.
5. Execute a pipeline com a nota `Evidencia registrada pela equipe CMMI`.

## Perguntas para discussao

- Quando a formalidade do CMMI agrega valor?
- O que a rastreabilidade protege em projetos regulados?
- Quais indicadores ajudam mais: lead time de mudanca ou requisitos ativos?
- O esforco adicional de preencher justificativas e riscos trouxe mais clareza?

## Dashboard recomendado

- Query Results: Requirements ativos.
- Chart for Work Items: Features por estado.
- Chart for Work Items: Change Requests por estado.
- Markdown: riscos, aprovacoes e governanca.
- Build History: pipeline `cmmi-governance`.
