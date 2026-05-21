# meu-projeto-crud

## Visão geral

Este projeto é uma API CRUD em Node.js usando Express e Prisma para PostgreSQL.

## Requisitos antes de usar o projeto

Instale o seguinte no novo computador:

- Node.js 22.x ou superior
- npm (vem junto com o Node.js)
- PostgreSQL (servidor de banco de dados)
- Git (opcional, para clonar o repositório)

## Passos de instalação

1. Clone o repositório ou copie os arquivos para o novo computador.
2. No terminal, entre na pasta do projeto:
   ```bash
   cd c:\clone-crud\meu-projeto-crud
   ```
3. Instale as dependências do Node:
   ```bash
   npm install
   ```

## Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com a variável de conexão do PostgreSQL:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

Substitua:

- `USER` pelo usuário do banco de dados
- `PASSWORD` pela senha
- `HOST` pelo endereço do servidor PostgreSQL
- `PORT` pela porta do PostgreSQL (normalmente `5432`)
- `DATABASE` pelo nome do banco de dados

## Gerar o Prisma Client

Sempre que instalar dependências ou alterar o schema do Prisma, gere o cliente:

```bash
npx prisma generate --schema prisma/schema.prisma
```

## Executar o servidor em desenvolvimento

Use este comando para iniciar o servidor com hot reload:

```bash
npm run dev
```

O servidor está configurado para rodar em:

- `http://localhost:3000`

## Observações importantes

- O entrypoint do servidor é `api-tasks/src/server.js`.
- O Prisma foi configurado para usar o adapter PostgreSQL diretamente no `PrismaClient`.
- Caso o Prisma apresente erro de cliente, verifique se o `.env` está presente e se `DATABASE_URL` está correta.

## Comandos úteis

- Instalar dependências: `npm install`
- Gerar Prisma Client: `npx prisma generate --schema prisma/schema.prisma`
- Rodar em dev: `npm run dev`
- Rodar em produção: `npm start`

