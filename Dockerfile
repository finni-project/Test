FROM node:18-alpine

ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max_old_space_size=8192

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build