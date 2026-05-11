# Guia do Instrutor

## Preparacao antes da aula

1. Publique este diretorio em um repositorio publico no GitHub.
2. Crie ou confirme a organizacao no Azure DevOps.
3. Garanta que os alunos consigam criar projetos na organizacao.
4. Compartilhe o link do GitHub e o link da organizacao Azure DevOps.
5. Deixe uma conta com permissao de administrador preparada para destravar
   acesso a GitHub/Azure Pipelines se necessario.

Nomes sugeridos para os projetos:

- `01-basic-portal`
- `02-agile-delivery`
- `03-scrum-banking`
- `04-cmmi-governance`

## Mensagem inicial para a turma

O objetivo da pratica nao e programar. O repositorio ja possui codigo, testes e
pipelines. A responsabilidade de cada equipe e transformar uma ideia em um
projeto rastreavel: backlog, fluxo, sprint, indicadores e entrega.

## Escopo tecnico da demonstracao

- Nao criar recursos reais no Azure.
- Nao usar Terraform nesta pratica.
- Nao criar Service Connection de Azure Resource Manager.
- Usar apenas a conexao do Azure DevOps com o GitHub publico.
- Demonstrar build, teste, artefato e deploy simulado pelo historico da pipeline.

## Pontos de observacao

- Basic: observar simplicidade, poucos niveis e baixa cerimonia.
- Agile: observar foco em produto, user stories e fluxo de valor.
- Scrum: observar sprint, PBI, capacidade e burndown.
- CMMI: observar formalizacao, requisitos, mudancas e auditoria.

## Roteiro de tempo sugerido

| Etapa | Tempo |
| --- | --- |
| Contexto e divisao das equipes | 5 min |
| Criacao dos projetos | 10 min |
| Backlog e hierarquia | 25 min |
| Board, sprint e estados | 15 min |
| Pipeline | 15 min |
| Dashboard | 20 min |
| Apresentacao rapida | 15 min |

## Avaliacao rapida

Use uma escala simples de 0 a 2 para cada criterio:

| Criterio | 0 | 1 | 2 |
| --- | --- | --- | --- |
| Processo correto | Incorreto | Parcial | Correto |
| Hierarquia | Inexistente | Simples | Coerente |
| Board/Sprint | Nao usado | Basico | Representa fluxo real |
| Pipeline | Nao executou | Executou com ajuda | Executou e entendeu |
| Dashboard | Ausente | Poucos widgets | Apoia decisao |
| Apresentacao | Sem clareza | Parcial | Clara e objetiva |

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
