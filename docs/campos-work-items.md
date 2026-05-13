# Guia de Campos dos Work Items

Use este guia antes de criar ou editar os itens no Azure Boards. O objetivo e
preencher o backlog como um projeto real, nao apenas criar uma lista de tarefas.

Nem todos os processos exibem exatamente os mesmos campos. Quando um campo nao
aparecer na tela, registre a informacao na descricao do work item ou em um
comentario.

## Campos principais

| Campo | O que significa | Como preencher |
| --- | --- | --- |
| Title | Nome curto do trabalho | Comece com verbo ou resultado esperado. Ex: `Validar chave PIX antes do envio`. |
| Description | Contexto, problema e escopo | Explique o motivo do item, quem se beneficia e o que esta dentro do escopo. |
| State | Situacao atual do item | Use conforme o processo: `New`, `Active`, `Committed`, `To Do`, `Doing`, `Done`, `Closed`, `Proposed`. |
| Assigned To | Pessoa responsavel pelo proximo passo | Evite deixar itens importantes sem responsavel. |
| Area | Parte do produto ou equipe responsavel | Use a area padrao do projeto, salvo se o instrutor orientar criar subareas. |
| Iteration | Sprint, ciclo ou fase de trabalho | Coloque itens priorizados na sprint/ciclo da aula. Deixe itens futuros no backlog. |
| Tags | Marcadores para filtragem | Use poucas tags uteis: `mvp`, `blocked`, `risk`, `audit`, `customer-visible`, `pipeline`. |
| Priority | Ordem de importancia | Use `1` para urgente/critico, `2` para alto valor, `3` para medio, `4` para baixo. |
| Acceptance Criteria | Condicoes para aceitar a entrega | Liste criterios objetivos que permitam dizer se o item esta pronto. |
| Discussion | Historico de decisoes | Registre impedimentos, decisoes e combinados importantes. |

## Estimativas e valor

| Campo | Onde costuma aparecer | O que representa | Como preencher |
| --- | --- | --- | --- |
| Story Points | Agile, em User Story | Tamanho relativo da historia | Use Fibonacci simples: `1`, `2`, `3`, `5`, `8`, `13`. |
| Effort | Scrum, Basic ou alguns templates | Tamanho relativo do item | Use como pontos relativos quando estiver em PBI ou Issue. Em Epic, preencha somente se o processo expuser esse campo; no Basic, mantenha Effort nas Issues. |
| Original Estimate | Task | Estimativa inicial de horas | Informe horas simbolicas. Ex: `2`, `4`, `6`. |
| Remaining Work | Task | Trabalho restante em horas | Atualize quando mover a tarefa no board. |
| Completed Work | Task | Trabalho ja concluido em horas | Preencha quando uma tarefa for finalizada. |
| Business Value | Feature, PBI, Requirement | Valor para negocio/usuario | Use escala `1` a `100`; quanto maior, mais valor. |
| Risk | CMMI ou campos personalizados | Risco de prazo, escopo ou conformidade | Use `1` alto, `2` medio, `3` baixo, se o campo existir. |

## Como estimar

Use estimativa relativa. O objetivo e comparar o tamanho entre itens, nao prever
com precisao absoluta.

Escala sugerida:

| Valor | Significado pratico |
| --- | --- |
| 1 | Muito pequeno, ajuste simples. |
| 2 | Pequeno, pouca incerteza. |
| 3 | Medio, exige validacao. |
| 5 | Maior, envolve mais de uma etapa. |
| 8 | Grande, pode precisar quebrar. |
| 13 | Muito grande, provavelmente deve virar mais de um item. |

Regra para a aula: se um item parecer `13`, a equipe deve discutir se ele deve
ser dividido.

## Como priorizar

Use a combinacao de valor, risco e dependencia.

| Prioridade | Quando usar |
| --- | --- |
| 1 | Bloqueia a entrega, tem alto valor ou reduz risco critico. |
| 2 | Importante para o MVP, mas nao bloqueia tudo. |
| 3 | Complementar, melhora a experiencia ou governanca. |
| 4 | Desejavel, pode ficar fora da primeira entrega. |

## Definition of Ready

Um item esta pronto para entrar na sprint/ciclo quando:

- tem titulo claro;
- tem descricao suficiente;
- possui responsavel;
- tem prioridade;
- tem estimativa;
- possui criterios de aceite;
- esta relacionado ao item pai correto.

## Definition of Done

Um item pode ir para `Done` ou `Closed` quando:

- os criterios de aceite foram atendidos;
- as tarefas filhas foram concluidas ou justificadas;
- a pipeline da equipe rodou com sucesso;
- o artefato foi publicado;
- o historico do item registra a evidencia ou decisao final.
