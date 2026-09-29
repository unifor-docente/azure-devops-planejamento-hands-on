# Guia do Instrutor

## Preparacao antes da aula

1. Publique este diretorio em um repositorio publico no GitHub.
2. Crie ou confirme a organizacao no Azure DevOps.
3. Configure o billing da organizacao (ver "Acessos e licencas").
4. Crie os 4 projetos, cada um com o processo da equipe. Os alunos nao criam
   projetos: eles entram direto no projeto da propria equipe.
5. Crie e execute uma vez a pipeline de cada projeto.
6. Convide os alunos e compartilhe o link do GitHub e da organizacao.
7. Teste o acesso com uma conta de aluno em janela anonima: abrir o projeto,
   criar um work item, mover um card e executar a pipeline.
8. Deixe uma conta com permissao de administrador preparada para destravar
   acesso a GitHub/Azure Pipelines se necessario.

## Acessos e licencas

- O Azure DevOps inclui 5 usuarios Basic gratuitos por organizacao. O acesso
  Stakeholder e gratuito, mas em projeto privado nao permite priorizar o
  backlog, planejar sprint pelo painel Planning, definir capacidade nem criar
  dashboards. Por isso, na aula todos os alunos usam Basic.
- Basic adicional custa US$ 6 por usuario/mes, com cobranca proporcional aos
  dias em que a licenca fica atribuida. Para uma turma de 24 alunos, 20
  licencas pagas por um dia custam cerca de US$ 4.
- Passo a passo:
  1. Organization settings > Billing > Set up billing: vincule a assinatura
     Azure. Isso tambem libera o job gratuito de Microsoft-hosted agents.
  2. Em Billing, defina `Default access level` como `Basic`.
  3. Organization settings > Policies: habilite `External guest access`
     quando a organizacao estiver ligada ao Microsoft Entra ID.
  4. Organization settings > Users > Add users: cole os e-mails da equipe
     separados por `;`, com Access level `Basic`, o projeto da equipe e o
     grupo `Contributors`.
  5. Peca para a turma aceitar o convite antes da aula.
- Depois da aula: Organization settings > Users > selecione os alunos >
  Change access level > Stakeholder, ou remova-os. A cobranca do Basic para.
- Nao publique a lista de alunos e e-mails neste repositorio, porque ele e
  publico.

## Pipelines com varias equipes

- O free tier oferece 1 job Microsoft-hosted, compartilhado por todos os
  projetos da organizacao. Quando as 4 equipes executam ao mesmo tempo, as
  execucoes entram em fila.
- Cada execucao leva poucos minutos. Na Parte 6, chame as equipes em
  sequencia (Basic, Agile, Scrum, CMMI) para evitar espera.
- Sem billing configurado, a organizacao nova nao recebe o job gratuito e a
  pipeline falha com mensagem de paralelismo nao concedido.

Nomes sugeridos para os projetos:

- `01-basic-portal`
- `02-agile-delivery`
- `03-scrum-banking`
- `04-cmmi-governance`

## Mensagem inicial para a turma

O objetivo da pratica nao e programar. O repositorio ja possui codigo, testes e
pipelines. A responsabilidade de cada equipe e transformar uma ideia em um
projeto rastreavel: backlog detalhado, campos preenchidos, fluxo, sprint,
indicadores, pipeline e evidencia de entrega.

## Escopo tecnico da demonstracao

- Nao criar recursos reais no Azure.
- Nao usar Terraform nesta pratica.
- Nao criar Service Connection de Azure Resource Manager.
- Usar apenas a conexao do Azure DevOps com o GitHub publico.
- Demonstrar build, teste, artefato e deploy simulado pelo historico da pipeline.
- Usar os parametros da execucao manual para simular ambiente e nota da entrega.
- Criar dashboards a partir de consultas salvas em `Shared Queries`, nao colando WIQL diretamente no dashboard.

## Pontos de observacao

- Basic: observar simplicidade, poucos niveis e baixa cerimonia.
- Agile: observar foco em produto, user stories e fluxo de valor.
- Scrum: observar sprint, PBI, capacidade e burndown.
- CMMI: observar formalizacao, requisitos, mudancas e auditoria.

## Roteiro de tempo sugerido

| Etapa | Tempo |
| --- | --- |
| Apresentacao teorica (slides) e demonstracao | 45 min |
| Contexto e divisao das equipes | 5 min |
| Acesso aos projetos e primeira pipeline | 10 min |
| Campos, estimativas e criterios | 15 min |
| Backlog detalhado e hierarquia | 45 min |
| Refinamento e priorizacao | 25 min |
| Board, sprint e estados | 25 min |
| Segunda execucao da pipeline | 20 min |
| Queries e dashboard | 30 min |
| Apresentacao rapida | 20 min |

## Avaliacao rapida

Use uma escala simples de 0 a 2 para cada criterio:

| Criterio | 0 | 1 | 2 |
| --- | --- | --- | --- |
| Processo correto | Incorreto | Parcial | Correto |
| Hierarquia | Inexistente | Simples | Coerente e relacionada |
| Campos dos work items | Vazios | Parcial | Descricao, prioridade, estimativa e aceite claros |
| Priorizacao | Ausente | Basica | Justificada por valor, risco e dependencia |
| Board/Sprint | Nao usado | Basico | Representa fluxo real |
| Pipeline | Nao executou | Executou com ajuda | Executou e entendeu |
| Dashboard | Ausente | Poucos widgets | Apoia decisao |
| Apresentacao | Sem clareza | Parcial | Clara e objetiva |

## Teste sugerido durante a aula

Como os primeiros pipelines ja foram executados pelo instrutor, peca para cada
equipe comparar a execucao inicial com uma nova execucao feita por eles:

1. Abrir a primeira execucao criada pelo instrutor.
2. Identificar testes, validacao, build, artefato e deploy simulado.
3. Executar novamente em `homologacao`, com a nota `Primeira validacao da equipe`.
4. Executar uma segunda vez em `producao-demo`, com a nota `Entrega simulada para apresentacao`.

Depois, cada equipe deve abrir o historico da pipeline, comparar as duas
execucoes e identificar o artefato publicado.

## Sequencia recomendada para conduzir

1. Mostre rapidamente os 4 projetos ja criados.
2. Mostre uma pipeline que ja rodou e destaque logs e artefato.
3. Direcione cada equipe para seu projeto.
4. Explique `docs/campos-work-items.md` antes de eles criarem os cards.
5. Peca para criarem o backlog usando o guia detalhado do processo.
6. Peca para preencherem descricao, prioridade, estimativa e criterios de aceite.
7. Peca para refinarem e priorizarem: MVP, futuro, risco, bloqueio e dependencia.
8. Peca para movimentarem itens no board.
9. Peca para executarem a pipeline com parametros.
10. Peca para registrarem o link da pipeline em um work item.
11. Peca para criarem consultas e dashboard usando `docs/dashboard-passo-a-passo.md`.
12. Feche com comparacao entre Basic, Agile, Scrum e CMMI.

## Pontos para cobrar durante a circulacao

- O titulo do item esta claro?
- A descricao explica o motivo do trabalho?
- A estimativa esta coerente ou o item deveria ser quebrado?
- A prioridade foi justificada por valor, risco ou dependencia?
- O criterio de aceite permite dizer se o item esta pronto?
- O item esta relacionado ao pai correto?
- A pipeline virou evidencia registrada no backlog?

## Possiveis dificuldades

- GitHub nao aparece em Pipelines: pedir para o aluno autorizar a conexao ou o
  instrutor criar a primeira pipeline.
- Widget de burndown vazio: conferir se existe sprint, datas e itens planejados.
- Consulta sem resultado: conferir estados do processo e se os work items foram
  criados no projeto correto.
- Pipeline sem permissao: conferir Project settings > Pipelines > Settings e a
  autorizacao do repositorio GitHub.
- Duvida sobre Service Connection: reforcar que a pratica nao usa deploy real em
  Azure, portanto nao precisa de conexao com assinatura Azure.
- Grafico nao aparece no Dashboard: conferir se a consulta e `Flat list` e foi
  salva em `Shared Queries`.
- Campo nao aparece no grafico: adicionar o campo nas colunas da consulta,
  salvar e atualizar o dashboard.
- WIQL nao funciona no Dashboard: usar WIQL apenas como referencia e criar a
  consulta pela interface do Boards.
