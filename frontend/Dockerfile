### STAGE#1: Build Vue for production
FROM node:14.15.4 AS builder

RUN npm i npm@7.10.0 -g

WORKDIR /vue

COPY package*.json ./
RUN npm install --force

COPY . .

RUN npm run build



### STAGE#2: Set up webserver
FROM nginx:1.18.0 AS production-build

WORKDIR /app
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /vue/dist /app/http
