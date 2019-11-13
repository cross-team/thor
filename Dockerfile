# Stage 1 - the build process
FROM node:10.15-alpine as build-deps
RUN npm i lerna -g --loglevel notice
RUN npm i yarn -g --loglevel notice
WORKDIR /src
COPY package.json lerna.json babel.config.js CHANGELOG.md LICENSE scripts/copy-files.js ./

COPY nginx.conf ./

COPY . ./

RUN lerna bootstrap

RUN cd packages/franklin-thor && yarn run build
RUN cd packages/franklin-thor/build && yarn link

RUN cd packages/franklin-thor-fti && yarn run build
RUN cd packages/franklin-thor-fti/build && yarn link

RUN cd packages/franklin-thor-icons && yarn run build
RUN cd packages/franklin-thor-icons/build && yarn link

RUN cd . && yarn link "@cross.team/core"
RUN cd . && yarn link "@cross.team/fti"
RUN cd . && yarn link "@cross.team/icons"
RUN yarn install
RUN yarn run dist

# Stage 2 - the production environment
FROM nginx:1.17-alpine
COPY --from=build-deps /src/build /var/www
COPY --from=build-deps /src/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
