# Dockerfile
# Primeiro estágio: Build
FROM node:18-alpine

# Instale dependências adicionais
RUN apk add --no-cache bash
RUN apk add --no-cache vim

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

# Comando para iniciar a aplicação em desenvolvimento
CMD ["npm", "run", "start:dev"]
