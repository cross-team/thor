# Stage 1 - the build process
FROM node:10.15-alpine as build-deps
RUN npm i lerna -g --loglevel notice
RUN npm i yarn -g --loglevel notice
WORKDIR /src
COPY package.json lerna.json babel.config.js CHANGELOG.md LICENSE scripts/copy-files.js ./

COPY nginx.conf ./

COPY . ./

RUN yarn run dist

# Stage 2 - the production environment
FROM nginx:1.17-alpine
COPY --from=build-deps /src/build /var/www
COPY --from=build-deps /src/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
