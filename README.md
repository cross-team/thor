[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Introduction

Thor is the development stack for the components, icons and theming for the react application fti-blotter.  

## Architecture

`Describe architecture; how the packages and services are linked.`  Link to https://github.com/cross-team/thor/blob/documentation/services/franklin-thor-playground/README.md 

## Workflow

`Describe work flow at a high level` 

### Packages

`List out and describle all packages` 

### Services

`List out and describle all services` 


## Setting up the Development Environment

### Start with your base

Before you start using Thor or Thor-playground you must have the following installed software installed on your development machine:

**We assume a clean machine and that these commands will be executed from the Command Line.**

- [NodeJS](https://nodejs.org/en/): We started using node 10.15.  Installing NodeJS will install the needed npm package manager.
- [Yarn](https://yarnpkg.com/en/docs/install#mac-stable): Yarn is a modern package management application.

In initial development, repositories were created in Github, using git for version control:
- [Git](https://git-scm.com/downloads): Git is our version control tool

To install from the Franklin environment, you can clone the repositories from Bitbucket:
- [Bitbucket: Order Management - UI Project Overview](http://stash.noam.corp.frk.com:7990/projects/OMU): View all repositories in Franklin's environment for this project.  
- [Sourcetree](http://www.sourcetreeapp.com/): Download and install Sourcetree to manage the Bitbucket repositories.  It serves a function similar to Github Desktop.  For more information, see the Franklin Confluence document [Using Bitbucket](http://confluence.corp.frk.com:8090/display/IMDL/Using+Bitbucket).

We use Storybook to view components in the thor component library.  To run Storybook locally from the thor repository, you must have the following installed on your development machine:

- [Docker](https://www.docker.com/products/docker-desktop): We use Docker containers to and run Thor-playground locally.

Once these software applications are installed onto your local development machine continue by following the next steps:

### Install Lerna Globally

[Lerna](https://lerna.js.org/) is a tool that manages the development of multi-package projects within a single repository. Since Thor and Thor-playground will be developed and maintained together, Lerna will be a great tool to help manage the dependencies between both packages during the development cycle.

Make sure [Lerna](https://lerna.js.org/) is **globally** installed by running the following command:

```text
yarn global add lerna
```

### Clone or Install the Code Repo

Using [BitBucket](https://confluence.atlassian.com/bitbucket/clone-a-repository-223217891.html) follow the instructions from within [Atlassian](https://confluence.atlassian.com/bitbucket/clone-a-repository-223217891.html)

```text
git clone <repo name> <directory path> | .
```

Where &lt;repo name&gt; contains either https or SSH versions of said name, &lt;directory path&gt; denotes the location path on your development machine, or "." which denotes the current path.

You can also download the repo directly as a zip file if this option is made available from your version control provider.

The outcome of any one of these approaches is the codebase being loaded into the folder or your choice; thereby creating a **local repo**.

### Apply Lerna to your Local Repo

Inside the local repo root folder run:

```text
lerna bootstrap
```

This command will search through the current local repo and install any dependencies and cross-dependencies

### Build Thor Packages

Change to the following folders and run a build

Navigate to: /**packages/franklin-thor/**
run: `yarn run build`

Navigate to: /**packages/franklin-thor-fti/**
run: `yarn run build`

Navigate to: /**packages/franklin-thor-icons/**
run: `yarn run build`

To build all packages run: `yarn build:all` in root directory.

### Thor-Playground

If `yarn build:all` was not used to build all the packages and the build of the Thor packages were done independently, use `yarn build:clean`.
This will remove the node_modules related to the packages and reinstall them with appropriate build files,
required to be used with the playground.

### Conclusion

At this point your development environment should be ready and operational with the following packages installed:

- **Thor**: Your component library
- **Thor-playground**: The component library storyboard and playground

## Running the Development Environment

## Development

## Deployment: Publishing to NPM
