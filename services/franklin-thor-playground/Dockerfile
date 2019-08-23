# Stage 1 - the build process
FROM node:10.15-alpine as build-deps
RUN npm i lerna -g --loglevel notice
RUN npm i yarn -g --loglevel notice
WORKDIR /src
COPY package.json lerna.json babel.config.js CHANGELOG.md LICENSE scripts/copy-files.js ./

COPY services/franklin-thor-playground/nginx.conf ./services/franklin-thor-playground/

COPY . ./
RUN  rm services/franklin-thor-playground/package.json
COPY services/franklin-thor-playground/docker/package.json ./services/franklin-thor-playground/

RUN lerna bootstrap

RUN cd packages/franklin-thor && yarn run build
RUN cd packages/franklin-thor/build && yarn link

RUN cd packages/franklin-thor-fti && yarn run build
RUN cd packages/franklin-thor-fti/build && yarn link

RUN cd packages/franklin-thor-icons && yarn run build
RUN cd packages/franklin-thor-icons/build && yarn link

RUN cd services/franklin-thor-playground && yarn link "@cross.team/core"
RUN cd services/franklin-thor-playground && yarn link "@cross.team/fti"
RUN cd services/franklin-thor-playground && yarn link "@cross.team/icons"
RUN cd services/franklin-thor-playground && yarn install
RUN cd services/franklin-thor-playground && yarn run dist

# Stage 2 - the production environment
FROM nginx:1.15-alpine
COPY --from=build-deps /src/services/franklin-thor-playground/build /var/www
COPY --from=build-deps /src/services/franklin-thor-playground/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
