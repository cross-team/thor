FROM node:10.15-alpine

RUN apk add bash

# RUN groupadd -r nodejs && useradd -m -r -g -s /bin/bash nodejs nodejs
RUN addgroup -S appgroup && adduser -S nodejs -G appgroup
RUN mkdir /app && mkdir /app/src
RUN chown nodejs /app && chown nodejs /app/src

WORKDIR /app

RUN npm install -g npm

COPY ./src /app/src
COPY package*.json ./
COPY .env.example .env

USER nodejs

# Force production dependencies installation
RUN NODE_ENV=production npm install

EXPOSE 3000

CMD ["yarn", "start"]