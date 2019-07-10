# Stage 1 - the build process
FROM node:10.15-alpine as build-deps
RUN npm i lerna -g --loglevel notice
RUN npm i yarn -g --loglevel notice
WORKDIR /src
COPY package.json lerna.json babel.config.js CHANGELOG.md LICENSE scripts/copy-files.js ./

COPY packages/franklin-thor-playground/package.json ./packages/franklin-thor-playground/
COPY packages/franklin-thor-playground/nginx.conf ./packages/franklin-thor-playground/

COPY packages/franklin-thor/package.json ./packages/franklin-thor/

COPY packages/franklin-thor-fti/package.json ./packages/franklin-thor-fti/

COPY packages/franklin-thor-icons/package.json ./packages/franklin-thor-icons/

COPY . ./

RUN lerna bootstrap

RUN cd packages/franklin-thor && yarn run build
RUN cd packages/franklin-thor/build && yarn link

RUN cd packages/franklin-thor-fti && yarn run build
RUN cd packages/franklin-thor-fti/build && yarn link

RUN cd packages/franklin-thor-icons && yarn run build
RUN cd packages/franklin-thor-icons/build && yarn link

RUN cd packages/franklin-thor-playground && yarn link "@franklin-thor/core"
RUN cd packages/franklin-thor-playground && yarn link "@franklin-thor/fti"
RUN cd packages/franklin-thor-playground && yarn link "@franklin-thor/icons"
RUN cd packages/franklin-thor-playground && yarn run dist

# Stage 2 - the production environment
FROM nginx:1.15-alpine
COPY --from=build-deps /src/packages/franklin-thor-playground/build /var/www
COPY --from=build-deps /src/packages/franklin-thor-playground/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
