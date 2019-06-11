FROM node:10.15-alpine

WORKDIR /src

RUN apk add bash
RUN npm install -g npm

ADD package.json package.json
ADD src src
ADD .env.example .env

# Force production dependencies installation
RUN NODE_ENV=production npm install

EXPOSE 3010

CMD ["npm", "start"]
