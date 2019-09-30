# Franklin Thor Layout

## How To Start The Layout

To start the running the layout, go to the thor repository and checkout the thor-workspace branch. Then enter the root thor/ directory and enter the following commands:
```
yarn install
cd layout-workspace/
yarn start
```
## Relevant Code Structure

```
layout-workspace
│   README.md
│   package.json 
└───public 
└───src
│   │   App.js
│   │   index.js
└───assets
│   │   orderList.json
└───components
│   └───DrawerViews
│   │   └───Settings
│   │       │   SettingsView.js
│   │       └───Desks
│   │       │   │   DeskAdmin.js
│   │       │   │   DeskSettings.js
│   │       └───Users
│   │           │   UserAdmin.js
│   │           │   UserSettings.js
│   └───FilterBar
│   │   │   FilterBar.js
│   └───KanBanBoard
│   │   │   KanBanBoard.js
│   └───KanBanCard
│   │   │   KanBanCard.js
│   └───KanBanColumn
│   │   │   KanBanColumn.js
│   └───TopNav
│       │   TopNav.js
└───screens
    │   Shell.js
```
### src Directory
The src directory contains the App.js file that calls the Shell component and wraps it in a material ui Theme Provider.

### screens Directory
The screens directory contains the Shell.js file which is the only screen in the layout. This Shell component calls the three main components of the layout: TopNav, FilterBar, and the KanBanBoard.

### assets Directory
The assets directory contains the orderList.json file that populates the KanBanCards into the KanBanBoard. It contains all of the endpoints that would be relevant to the KanBanCard component.

### components Directory
The components directory contains all of the components that make up the app, and within it, is the DrawerViews directory which contains components for all of the different views that might appear in the Drawer.

### TopNav Component
The TopNav component renders the top AppBar of the screen that contains the tab menu and the various icon buttons. It also renders the drawer and it is the file from which the drawer's view is controlled.

### KanBanBoard Component
The KanBanBoard component controls the dragging and dropping of the KanBanCard components and renders the KanBanColumns as children. The KanBanBoard is also the component that calls the orderList.json file and passes it to the KanBanColumns as a prop.

### KanBanColumn Component
The KanBanColumn renders its heading with its name passed to it as a prop from the KanBanBoard and a select field to select the ordering of the KanBanCards. This selected input doesn't make any changes to the actual ordering of the components yet, but is there for when we do implement that function. The KanBanColumn also generates the KanBanCards to be created based on the information it received from the orderList.json file and passes each KanBanCard its appropriate information as a prop.
