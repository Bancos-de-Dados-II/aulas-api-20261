# aulas-api-20261

API REST desenvolvida com Node.js e Express para gerenciar usuários, com persistência em MongoDB e cache com Redis.

## Pré-requisitos

- Node.js 18+ (recomendado)
- npm
- MongoDB em execução
- Redis em execução

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

- `MONGODB_URI`: URI de conexão com MongoDB
- `REDIS_HOST`: Host do Redis
- `REDIS_PORT`: Porta do Redis
- `REDIS_PASSWORD`: Senha do Redis (opcional)
- `PORT`: Porta da aplicação (padrão: 4000)

Exemplo:

```env
MONGODB_URI=mongodb://localhost:27017/aulas-api
REDIS_HOST=localhost
REDIS_PORT=6379
PORT=4000
```

## Como executar o projeto

Para iniciar a aplicação:

```bash
npm start
```

Esse comando executa o arquivo `index.js` com hot-reload, conecta ao MongoDB e Redis, e inicia o servidor na porta configurada.

## Estrutura do projeto

```
index.js                          # Ponto de entrada da aplicação
package.json                      # Dependências do projeto
controller/
  └── usuario-controller.js       # Controladores para operações de usuários
database/
  ├── mongoose.js                 # Configuração de conexão com MongoDB
  └── redis.js                    # Configuração de conexão com Redis
middleware/
  └── rate-limit.js               # Middleware de rate limiting
model/
  └── usuario.js                  # Schema do modelo Usuario
router/
  └── usuario-router.js           # Rotas da API de usuários
```

## Recursos principais

### Modelo Usuario

O modelo `Usuario` armazena as seguintes informações:

- **email**: String (único)
- **nome**: String
- **localizacao**: Objeto GeoJSON com tipo Point e coordenadas [longitude, latitude]
- **ativo**: Boolean (padrão: true)

Indices configurados:
- Índice geoespacial em `localizacao` (2dsphere)
- Índice único em `email`

### Endpoints disponíveis

#### Obter todos os usuários
```http
GET /usuarios
```

#### Obter usuário por ID
```http
GET /usuarios/:id
```

#### Criar novo usuário
```http
POST /usuarios
Content-Type: application/json

{
  "email": "usuario@exemplo.com",
  "nome": "João Silva",
  "localizacao": {
    "type": "Point",
    "coordinates": [-51.5, -25.5]
  }
}
```

#### Atualizar usuário
```http
PUT /usuarios/:id
Content-Type: application/json

{
  "nome": "João Silva Atualizado",
  "ativo": true
}
```

#### Deletar usuário
```http
DELETE /usuarios/:id
```

## Características de segurança e performance

- **CORS**: Habilitado para aceitar requisições de diferentes origens
- **Rate Limiting**: Máximo de 10 requisições por minuto por IP, usando Redis
- **Cache**: Resultados de buscas por ID são cacheados por 1 hora no Redis
- **Validação**: Email único garantido por índice no MongoDB

## Dependências

- **express**: Framework web
- **mongoose**: ODM para MongoDB
- **redis**: Client para cache
- **cors**: Middleware CORS
- **dotenv**: Gerenciamento de variáveis de ambiente
- **pg**: Client PostgreSQL (dependência transitória)
