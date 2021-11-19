FROM node:16-alpine3.11

WORKDIR /server

COPY package*.json ./
RUN npm install -s

COPY . .

RUN ["chmod", "+x", "./entrypoint.sh"]
RUN ["chmod", "+x", "./wait-for.sh"]