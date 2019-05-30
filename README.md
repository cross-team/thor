[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Getting Started

Make sure Yarn is installed, if not, follow the [Yarn Install Guide.](https://yarnpkg.com/en/docs/install)

Also make sure Lerna is globally installed, you can do so by running the following command:

```sh
yarn global add lerna
```

## Setting up the Development Environment

#### Step 1:

Inside the project root folder run: `lerna bootstrap`

#### Step 2:

Inside
`/packages/franklin-thor` run the following command: `yarn run build`

#### inside packages/franklin-thor/build run:

`yarn link`

#### inside packages/franklin-thor-playground

`yarn link "@franklin-thor/core"`

#### Publishing npm packages:

Inside the workspace root folder run `lerna publish` and follow the instructions.
