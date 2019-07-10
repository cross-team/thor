[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Setting up the Development Environment

### Start with your base

Before you start using Thor or Thor-playground you must have the following installed software installed on your development machine:

**We assume a clean machine and that these commands will be executed from the Command Line.**

* [NodeJS](https://nodejs.org/en/): We started using node 10.15. 
* [Docker](https://www.docker.com/products/docker-desktop): We use Docker containers to  and run Thor-playground locally.
* [Git](https://git-scm.com/downloads): Git is our version control tool
* [Yarn](https://yarnpkg.com/en/docs/install#mac-stable): Yarn is a modern package management application.

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

the result will be a build of the current thor packages.

### Create your Link

After you have built thor you must link available dependencies located within thor itself. 

Navigate to: /**packages/franklin-thor/build**
run: `yarn link`


Navigate to: /**packages/franklin-thor-fti/build**
run: `yarn link`

Navigate to: /**packages/franklin-thor-icons/build**
run: `yarn link`

### Link Thor-Playground

As a final step you should navigate to: /**packages/franklin-thor-playground**

```text
yarn link "@franklin-thor/core"
```

```text
yarn link "@franklin-thor/fti"
```

```text
yarn link "@franklin-thor/icons"
```

This step links the playground to the component library thor

### Conclusion

At this point your development environment should be ready and operational with the following packages installed:

* **Thor**: Your component library 
* **Thor-playground**: The component library storyboard and playground
