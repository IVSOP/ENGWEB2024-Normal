# 1.1
troquei " por nada, pois haviam strings nao fechadas

troquei para json usando um conversor online

alterei manualmente para a lista principal ter um nome


neste exemplo,
```
 {
    _id: ObjectId('66460c99ff97a1676d227a89'),
    idcontrato: '',
    nAnuncio: '02/01/2024',
    tipoprocedimento: '02/01/2024',
    objectoContrato: 11520,
    dataPublicacao: 364,
    dataCelebracaoContrato: 507105141,
    precoContratual: '',
    prazoExecucao: 'Artigo 20.º, n.º 1, alínea c) do Código dos Contratos Públicos',
    NIPC_entidade_comunicante: '',
    entidade_comunicante: '',
    fundamentacao: ''
  },
```
- nAnuncio e uma data
- tipoprocedimento e uma data
- dataPublicacao nao e uma data
- precoContratual nao existe
- dataCelebracaoContrato nao e uma data
- prazoExecucao nao e um prazo

assim, assumi que tem de ser feitas as seguintes alteracoes:
-fundamentacao = prazoExecucao
-prazoExecucao = dataPublicacao
-dataPublicacao = nAnuncio
-tipoprocedimento = ''
-nAnuncio = dataCelebracaoContrato

noutros casos, temos por exemplo objectoContrato: '6187,64', que converto para numero

neste outro exemplo:
```
  {
    _id: ObjectId('66460c99ff97a1676d227a8c'),
    idcontrato: 10425032,
    nAnuncio: '11436/2023',
    tipoprocedimento: 'Concurso público',
    objectoContrato: 'PC.130.2023.0001092 - Projetos de Arquitetura e Especialidades para a construção de um Edifício Multifamiliar, sito no Lote IV da Rua José Gomes Ferreira, em Vila Nova de Gaia',
    dataPublicacao: '03/01/2024',
    dataCelebracaoContrato: '02/01/2024',
    precoContratual: 132000,
    prazoExecucao: 165,
    NIPC_entidade_comunicante: 501460888,
    entidade_comunicante: 'IHRU Instituto da Habitação e da Reabilitação Urbana',
    fundamentacao: 'Artigo 20.º, n.º 1, alínea a) do Código dos Contratos Públicos'
  }
```
- nAnuncio nao faz sentido


estes sao padroes que ocorrem varias vezes, logo criei o script convert.py que converte os dados no formato correto em contratos2024_new.json

haviam demasiados erros com padroes diferentes para o tempo disponivel, alguns acabaram por nao ficar corretamente corrigidos.

o dataset foi importado com mongoimport -d contratos -c contratos contratos2024_new.json

testado com mongosh:
```
use contratos
db.contratos.find()
```

e com as queries do proximo exercicio

# 1.2
Assumi que, nas queries ?entidade, a entidade se refere ao NIPC_entidade_comunicante

# docker

Em exN/Dockerfile encontra-se o dockerfile para criar ambas as imagens

O ficheiro do docker-compose encontra-se nesta diretoria

O Dockerfile para o mongo esta tambem nesta diretoria

em cada diretoria, as imagens podem ser construidas com
```bash
docker build . -t engweb2024/<nome>
```

em que os nomes sao ex1, ex2, respetivamente

o docker compose pode ser executado com
```bash
docker compose up (-d)
```

Infelizmente, acabei por nao o utilizar devido a problemas em inicializar o mongo-seed perto da hora de entrega, pelo que os enderecos usados no frontend e backend correspondem a localhost.
