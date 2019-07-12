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
    └───DrawerViews
    │   └───Settings
    │       │   SettingsView.js
    │       └───Desks
    │       │   │   DeskAdmin.js
    │       │   │   DeskSettings.js
    │       └───Users
    │           │   UserAdmin.js
    │           │   UserSettings.js
    └───FilterBar
    │   │   FilterBar.js
    └───KanBanBoard
    │   │   KanBanBoard.js
    └───KanBanCard
    │   │   KanBanCard.js
    └───KanBanColumn
    │   │   KanBanColumn.js
    └───TopNav
        │   TopNav.js
```
