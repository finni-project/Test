FROM node:18-alpine

ENV NODE_OPTIONS=--max_old_space_size=2048

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build