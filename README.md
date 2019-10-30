[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Introduction

Thor is the development stack for the components, icons and theming for the react application fti-blotter.  

[Storybook](https://storybook.js.org/) provides a sandbox to build UI components in isolation.  We use storybook to preview developed components before publishing them to the application.  

## Architecture

### Services

The services directory consists of the franklin-thor-playground folder which contains all of the storybook files used to create the storybook display of all of the components.

To run storybook locally on your machine, navigate to the `thor/services/franklin-thor-playground/` directory and run `yarn install` then `yarn start`. This will start up the development environment for you to start working on components in.

The `thor/services/franklin-thor-playground/src/` directory contains two directories that would be relevant to someone trying to develop components in storybook: page and stories.

The `thor/services/franklin-thor-playground/src/page/` directory contains the source code for all of the components displayed in storybook, as well as all of the custom components which live in the `thor/services/franklin-thor-playground/src/page/FTIPatterns/` directory. Each folder within `thor/services/franklin-thor-playground/src/page/FTIPatterns/` has a `ComponentName.js` file that contains the source code for that component and this is where you will do the majority of your component development for storybook.

The `thor/services/franklin-thor-playground/src/stories/` directory is where each component in the page directory is called and pulled into the storybook display. Each story has it's own directory that contain an index.js that creates the story using the components exported from the page directory. This is where you can set any props that you want to be passed to your component when it's rendered.

Finally the storybook config file at `thor/services/franklin-thor-playground/.storybook/config.js` loads all of the stories that are to be shown into the storybook display. You should only need to access this file if you are adding a new component to storybook and need to add its story to the display.

### Packages

Inside the package directory there are three folders, each one containing the source code for one of the npm packages published from thor. The packages are as follows:


Directory: thor/packages/franklin-thor-fti
npm Package: @cross.team/fti
Description: Provides all of the custom components created for the fti blotter application

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

**Why**
**When**


### Build Thor Packages

To build all packages run: `yarn build:all` in root directory.

If `yarn build:all` was not used to build all the packages and the build of the Thor packages were done independently, use `yarn build:clean`.

This will remove the node_modules related to the packages and reinstall them with appropriate build files,
required to be used with the playground.

**Why**
**When**


### Thor-Playground

Thor-Playground is the name of the Storybook sandbox in services/franklin-thor-playground.  



### Conclusion

At this point your development environment should be ready and operational with the following packages installed:

- **Thor**: Your component library
- **Thor-playground**: The component library storyboard and playground
