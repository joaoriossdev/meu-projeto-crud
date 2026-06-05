# Comandos necessários para o projeto

## Clonar o repositório
```bash
git clone <url-do-repositorio>
cd meu-projeto-crud
```

## Instalar dependências
```bash
npm install
```

## Configurar variáveis de ambiente
Crie o arquivo `.env` na raiz do projeto e adicione:

```env
"mongodb+srv://<username>:<dbpassword>@<cluster>.mongodb.net/"
```

Depois substitua `username` e `dbpassword`pelos valores reais do seu banco MongoDB.

## Gerar o Prisma Client
```bash
npx prisma generate --schema prisma/schema.prisma
```

## Rodar em desenvolvimento
```bash
npm run dev
```

## Rodar em produção
```bash
npm start
```

## Comandos de verificação
```bash
node -v
npm -v

```

## Comandos úteis adicionais
```bash
npm audit fix
npm run test
```

## Notas
- O servidor principal fica em `api-tasks/src/server.js`.
- Se o Prisma falhar ao iniciar, verifique se o `.env` está correto e se o banco PostgreSQL está acessível.
