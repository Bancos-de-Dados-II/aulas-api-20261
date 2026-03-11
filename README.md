# aulas-api-20261

Projeto Node.js com Sequelize para conexão com PostgreSQL e definição do modelo `Usuario`.

## Pré-requisitos

- Node.js 18+ (recomendado)
- npm
- PostgreSQL em execução

## Instalação

1. Clone o repositório.
2. Entre na pasta do projeto.
3. Instale as dependências:

```bash
npm install
```

## Configuração de ambiente

Crie o arquivo `.env` com base no `.env.example`:

```bash
cp .env.example .env
```

Preencha as variáveis no `.env`:

- `PG_HOST`
- `PG_USER`
- `PG_PASSWORD`
- `PG_DATABASE`

Exemplo:

```env
PG_HOST=localhost
PG_USER=postgres
PG_PASSWORD=senha
PG_DATABASE=nome_do_banco
```

## Como executar o projeto

Para iniciar a aplicação:

```bash
npm start
```

Esse comando executa o arquivo `index.js`, realiza a autenticação com o banco e sincroniza o modelo `Usuario`.

## Estrutura básica

- `index.js`: ponto de entrada da aplicação.
- `database/sequelize.js`: configuração e conexão com PostgreSQL.
- `model/usuario.js`: definição e sincronização do modelo `Usuario`.
