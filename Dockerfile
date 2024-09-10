# Primeiro estágio: Build
FROM node:18-alpine AS build

# Instale dependências adicionais necessárias para construção
RUN apk add --no-cache bash vim

WORKDIR /usr/src/app

# Copiar arquivos de configuração e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar o código-fonte e construir o projeto
COPY . .

# Gere o Prisma Client
RUN npx prisma generate

# Expor a porta que a aplicação vai rodar
EXPOSE 3000

# Segundo estágio: Production
FROM node:18-alpine AS production

WORKDIR /usr/src/app

# Copiar apenas os arquivos necessários para a produção
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/package*.json ./

# Expor a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação em produção
CMD ["npm", "run", "start:dev"]
