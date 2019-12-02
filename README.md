[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Introduction

**Thor** is the development stack for the components, icons and theming for the react application fti-blotter.

**Thor-Playground** is the name of the Storybook instance in services/franklin-thor-playground.  [Storybook](https://storybook.js.org/) provides a sandbox to build UI components in isolation.  We use storybook to preview developed components before publishing them to the application.

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

This command will search through the current local repo and install any dependencies and cross-dependencies.

**Why** You run this command because it installs all of the dependencies in the repo that allow you to build and publish packages.
**When** This command should be run right after you clone your local repo before you nuild all of your thor packages.

### Build Thor Packages

To build all packages run: `yarn build:all` in root directory.

If `yarn build:all` was not used to build all the packages and the build of the Thor packages were done independently, use `yarn build:clean`.

This will remove the node_modules related to the packages and reinstall them with appropriate build files,
required to be used with the playground.

**Why** This builds all of the local resources used by the components within the packages and in storybook. This is run so that none of the components break due to missing packages.
**When** You run this command after your `lerna bootstrap` and before you start developing. You should also run this command whenever you make changes within the packages so that those changes can be reflected across thor and/or be published to npm.

At this point your development environment should be ready and operational with the following packages installed:

- **Thor**: Your component library
- **Thor-playground**: The component library storyboard and playground

## Architecture

### Storybook

To run storybook locally on your machine, navigate to the root directory of thor and run `npm run storybook`. This will start up the development environment for you to start working on components in.

The files used by storybook are contained in the `stories`, `page`, `themes`, and `.storybook` directories that live in the root of thor:

- `stories` contains a folder for each story that contains an `index.js` that create the stories to be loaded into storybook. This is where you can pass any necessay props to the components that you want to render in your storybook demo. This is also where you would wrap your stories in the theme exported by `themes` if you wanted the components in that story to have that theme. The custom FTI components being used in these stories are pulled from `thor/packages/franklin-thor-fti/src/` while the MUI components come from `page`.
- `page` contains a series of folders (one for each MUI story in storybook) that contain the code examples for the MUI components that are being rendered in `stories`.
- `themes` contains all of the api calls to be made to the token API and exports the generated theme.
- `.storybook` contains all of the addons and configuration files for storybook. The config file at `thor/.storybook/config.js` is where storybook loads in all of the stories from the `stories` folder into the storybook app. This is also where you can add or remove any stories from the app.

### Packages

Inside the package directory there are three folders, each one containing the source code for one of the npm packages published from thor. The packages are as follows:

Directory: thor/packages/franklin-thor-fti
npm Package: @cross.team/fti
Description: Provides all of the custom components created for the fti blotter application. This is also where you would do any custom component development to be loaded into storybook.

Directory: thor/packages/franklin-thor-icons
npm Package: @cross.team/icons
Description: Provides all of the font awesome icons used across the application

Directory: thor/packages/franklin-thor
npm Package: @cross.team/core
Description: Provides all of the core MUI components used across the fti blotter application

### Workflow

The typical workflow for editing a custom component or adding a new one starts by developing that component in the `thor/services/franklin-thor-playground` directory. To learn more about this refer to the Services section.

Once the component is developed and working in storybook, you can copy the source code for that component into the franklin-thor-fti package. You can do this by:

- Navigating to the `thor/packages/franklin-thor-fti/src` directory and, if there isn't one already, create a folder for the component you created and paste the component source code into an index.js file within that component's directory. 
- There is also an index.js file at `thor/packages/franklin-thor-fti/src/index.js` that exports each of the components inside the src folder, so make sure to add the necessary line of code to export your component in that file.

#### Publish New Version of Package to NPM

Once the source code is copied:

- update the package version inside the package.json file at `thor/packages/franklin-thor-fti/package.json`
- save the package.json file
- run `yarn build`
- run `yarn publish`
