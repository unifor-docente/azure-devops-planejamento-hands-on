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

Os projetos ja foram criados pelo instrutor com o processo correto. Cada equipe
deve trabalhar dentro do seu projeto, usando a pipeline ja configurada como
evidencia de entrega.

## Ponto de partida da aula

Antes dos alunos iniciarem, o instrutor ja deve ter:

- Criado os 4 projetos no Azure DevOps.
- Configurado uma pipeline para cada projeto.
- Executado a primeira pipeline de cada equipe.
- Confirmado que cada pipeline publicou um artefato.

Os alunos nao precisam criar repositorio, configurar Terraform, criar recursos
Azure ou fazer deploy real. A pratica simula a entrega usando pipeline, artefato
e logs.

## Parte 1: Acessar o projeto da equipe

Tempo sugerido: 10 minutos.

1. Acesse `https://dev.azure.com/`.
2. Entre na organizacao indicada pelo instrutor.
3. Abra o projeto da sua equipe.
4. Confirme se o menu Boards esta disponivel.
5. Acesse Pipelines e abra a primeira execucao criada pelo instrutor.
6. Verifique os logs das etapas de teste, validacao, build e deploy simulado.
7. Abra o artefato publicado pela pipeline.

Checklist:

- Projeto correto aberto.
- Processo correto identificado.
- Primeira execucao da pipeline localizada.
- Artefato publicado identificado.

## Atividades por equipe

Cada equipe deve criar o backlog abaixo e depois complementar com detalhes,
responsaveis, estados, tags e criterios de aceite.

### Equipe 1: Basic

Projeto: `01-basic-portal`

Processo: Basic

Hierarquia:

```text
Epic -> Issue -> Task
```

Crie estes work items:

| Tipo | Titulo |
| --- | --- |
| Epic | Implantar Portal do Cliente |
| Issue | Tela de Login |
| Task | Criar formulario de autenticacao |
| Task | Validar mensagem de erro de login |
| Issue | Consulta de Solicitacoes |
| Task | Exibir lista de solicitacoes mockadas |
| Issue | Publicacao do Portal |
| Task | Conferir artefato da pipeline |

Missao da equipe:

- Mostrar que o Basic e simples e direto.
- Mover pelo menos uma Issue para `Doing`.
- Mover pelo menos uma Task para `Done`.
- Marcar uma Task com a tag `blocked`.
- Executar a pipeline `basic-portal` novamente em `homologacao`.

### Equipe 2: Agile

Projeto: `02-agile-delivery`

Processo: Agile

Hierarquia:

```text
Epic -> Feature -> User Story -> Task
```

Crie estes work items:

| Tipo | Titulo |
| --- | --- |
| Epic | Sistema de Delivery |
| Feature | Gestao de Pedidos |
| User Story | Como cliente, desejo acompanhar meu pedido em tempo real |
| Task | Exibir linha do tempo do pedido |
| Task | Atualizar previsao de entrega |
| User Story | Como atendente, desejo atualizar o status do pedido |
| Task | Criar acao de avancar status |
| Feature | Comunicacao com Cliente |

Missao da equipe:

- Mostrar como User Stories representam valor para o usuario.
- Preencher story points nas User Stories, quando disponivel.
- Mover uma User Story para `Active`.
- Mover uma Task para `Closed`.
- Executar a pipeline `agile-delivery` novamente em `homologacao`.

### Equipe 3: Scrum

Projeto: `03-scrum-banking`

Processo: Scrum

Hierarquia:

```text
Epic -> Feature -> Product Backlog Item -> Task
```

Crie estes work items:

| Tipo | Titulo |
| --- | --- |
| Epic | Aplicativo Bancario |
| Feature | Transferencia PIX |
| Product Backlog Item | Permitir transferencia instantanea entre contas |
| Task | Criar formulario de chave PIX e valor |
| Task | Implementar validacao de chave PIX |
| Task | Exibir resumo da transferencia |
| Product Backlog Item | Bloquear valores acima do limite piloto |
| Task | Configurar regra de limite |

Missao da equipe:

- Criar ou usar a sprint `Sprint 01 - PIX`.
- Colocar pelo menos 2 PBIs dentro da sprint.
- Preencher esforco ou estimativa, quando disponivel.
- Mostrar o Burndown ou explicar por que ainda nao ha dados suficientes.
- Executar a pipeline `scrum-banking` novamente em `homologacao`.

### Equipe 4: CMMI

Projeto: `04-cmmi-governance`

Processo: CMMI

Hierarquia:

```text
Epic -> Requirement -> Change Request -> Task
```

Crie estes work items:

| Tipo | Titulo |
| --- | --- |
| Epic | Sistema Governamental |
| Requirement | Controle de acesso por perfil |
| Change Request | Alteracao da politica de autenticacao |
| Task | Atualizar regras de permissao |
| Task | Registrar criterio de auditoria |
| Change Request | Exigir dupla aprovacao para perfil administrador |
| Task | Ajustar tela de solicitacoes de mudanca |
| Requirement | Historico de aprovacoes |

Missao da equipe:

- Mostrar como CMMI aumenta formalidade e rastreabilidade.
- Preencher descricao e justificativa nos Requirements ou Change Requests.
- Relacionar Tasks aos Requirements ou Change Requests.
- Usar a tag `audit` em pelo menos um item.
- Executar a pipeline `cmmi-governance` novamente em `homologacao`.

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
2. Abra a pipeline da sua equipe.
3. Clique em Run pipeline.
4. Na execucao manual, escolha o ambiente simulado e preencha a nota da entrega.
5. Execute a pipeline.
6. Ao final, abra os logs e identifique cada etapa.
7. Abra o artefato publicado.

Se a pipeline ainda nao aparecer para a equipe, use o fluxo alternativo:

1. Clique em New pipeline.
2. Escolha GitHub.
3. Selecione o monorepo publico da aula.
4. Escolha Existing Azure Pipelines YAML file.
5. Informe o YAML correspondente a equipe.
6. Execute a pipeline.

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

Sugestao para a segunda execucao:

- Ambiente simulado: `producao-demo`.
- Nota da entrega: `Entrega simulada para apresentacao`.

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
4. O que mudou entre a primeira execucao da pipeline e a execucao feita pela equipe.
5. O que a pipeline evidencia sobre entrega e rastreabilidade.

## Entregaveis esperados

- Projeto Azure DevOps criado com o processo correto.
- Backlog com hierarquia coerente.
- Sprint ou board com itens em estados diferentes.
- Pipeline executada pelo menos uma vez.
- Dashboard com pelo menos 4 widgets.
- Breve explicacao da equipe sobre a diferenca do seu processo.
