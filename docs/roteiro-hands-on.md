# Roteiro Hands-on: Azure DevOps para Planejamento de Projetos

## Objetivo

Simular um projeto real no Azure DevOps usando Boards, backlog, sprints,
pipelines, consultas e dashboards. O codigo esta em um monorepo publico no
GitHub para que a equipe concentre o esforco na gestao do projeto.

## Divisao da turma

| Equipe | Processo | Projeto no Azure DevOps | YAML da pipeline |
| --- | --- | --- | --- |
| 1 | Basic | `01-basic-portal` | `.azuredevops/pipelines/basic.yml` |
| 2 | Agile | `02-agile-delivery` | `.azuredevops/pipelines/agile.yml` |
| 3 | Scrum | `03-scrum-banking` | `.azuredevops/pipelines/scrum.yml` |
| 4 | CMMI | `04-cmmi-governance` | `.azuredevops/pipelines/cmmi.yml` |

Cada equipe deve criar o projeto usando exatamente o processo sorteado. O
objetivo e comparar como a estrutura de work items muda entre Basic, Agile,
Scrum e CMMI.

## Parte 1: Criar o projeto

Tempo sugerido: 10 minutos.

1. Acesse `https://dev.azure.com/`.
2. Entre na organizacao indicada pelo instrutor.
3. Crie um novo projeto.
4. Selecione o processo recebido pela equipe.
5. Mantenha o projeto privado, salvo se o instrutor orientar diferente.
6. Confirme se o menu Boards esta disponivel.

Checklist:

- Projeto criado com o processo correto.
- Membros da equipe adicionados.
- Area e Iteration padrao conferidas em Project settings.

## Parte 2: Montar o backlog

Tempo sugerido: 25 minutos.

Abra o arquivo do seu processo em `docs/processos`:

- Basic: `docs/processos/basic.md`
- Agile: `docs/processos/agile.md`
- Scrum: `docs/processos/scrum.md`
- CMMI: `docs/processos/cmmi.md`

Crie a hierarquia indicada no Azure Boards. O foco e perceber como cada processo
organiza o trabalho:

| Processo | Hierarquia principal |
| --- | --- |
| Basic | Epic → Issue → Task |
| Agile | Epic → Feature → User Story → Task |
| Scrum | Epic → Feature → Product Backlog Item → Task |
| CMMI | Epic → Requirement → Change Request → Task |

Checklist:

- Pelo menos 1 item de nivel alto criado.
- Pelo menos 2 itens intermediarios criados.
- Pelo menos 4 tarefas criadas.
- Responsaveis atribuidos.
- Prioridade, esforco ou story points preenchidos quando o processo permitir.

## Parte 3: Configurar Board e Sprint

Tempo sugerido: 15 minutos.

1. Acesse Boards.
2. Mova alguns itens entre estados para simular andamento.
3. Crie uma sprint ou selecione a sprint atual.
4. Inclua pelo menos 3 itens na sprint.
5. Atribua tarefas aos integrantes da equipe.

Sugestao de simulacao:

- Um item ainda nao iniciado.
- Um item em andamento.
- Um item concluido.
- Um item bloqueado, usando tag `blocked`.

## Parte 4: Criar a pipeline

Tempo sugerido: 15 minutos.

1. Acesse Pipelines.
2. Clique em New pipeline.
3. Escolha GitHub.
4. Selecione o monorepo publico da aula.
5. Escolha Existing Azure Pipelines YAML file.
6. Informe o YAML correspondente a equipe.
7. Execute a pipeline.
8. Na execucao manual, escolha o ambiente simulado e preencha a nota da entrega.

Nao e necessario criar assinatura Azure, Service Connection de Azure Resource
Manager, Terraform ou recurso real na Azure. A unica autorizacao esperada e a
conexao do Azure DevOps com o repositorio GitHub.

O pipeline demonstra cinco pontos:

- Executa testes de verificacao do monorepo.
- Valida o miniapp da equipe.
- Publica um artefato estatico para evidenciar a entrega.
- Executa um deploy simulado, apenas para demonstrar logs e historico.
- Permite que cada equipe registre uma nota de entrega no momento da execucao.

Sugestao para a primeira execucao:

- Ambiente simulado: `homologacao`.
- Nota da entrega: `Primeira validacao da equipe no Azure DevOps`.

## Parte 5: Criar consultas e dashboard

Tempo sugerido: 20 minutos.

1. Acesse Boards > Queries.
2. Crie uma consulta com base no arquivo `.wiql` do seu processo em
   `docs/queries`.
3. Salve como consulta compartilhada.
4. Acesse Dashboards.
5. Crie um dashboard da equipe.
6. Adicione widgets.

Widgets sugeridos:

- Markdown: cole o texto de `docs/templates/dashboard-markdown.md`.
- Query Results: itens ativos da equipe.
- Chart for Work Items: itens por estado.
- Sprint Burndown: quando houver sprint configurada.
- Cumulative Flow Diagram: para visualizar gargalos.
- Build History: historico da pipeline.

## Parte 6: Fechamento da equipe

Tempo sugerido: 10 minutos.

Cada equipe apresenta em 3 minutos:

1. Como o processo organiza o trabalho.
2. Qual hierarquia de work items foi criada.
3. Qual metrica do dashboard ajuda mais o gerente de projetos.
4. O que a pipeline evidencia sobre entrega e rastreabilidade.

## Entregaveis esperados

- Projeto Azure DevOps criado com o processo correto.
- Backlog com hierarquia coerente.
- Sprint ou board com itens em estados diferentes.
- Pipeline executada pelo menos uma vez.
- Dashboard com pelo menos 4 widgets.
- Breve explicacao da equipe sobre a diferenca do seu processo.
