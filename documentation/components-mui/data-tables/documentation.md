# Data Tables

Material UI (Core) Component

Reference: https://material.io/design/components/data-tables.html 



------

# Data tables 

## Data tables display sets of data.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1TC52Yj5cmNLkM9wKklb64HN8GOB-OJT5%2Fcomponents-datatables-structure.png)

CONTENTS[Usage](https://material.io/design/components/data-tables.html#usage)[Anatomy](https://material.io/design/components/data-tables.html#anatomy)[Behavior](https://material.io/design/components/data-tables.html#behavior)[Tables within cards](https://material.io/design/components/data-tables.html#tables-within-cards)[Theming](https://material.io/design/components/data-tables.html#theming)[Specs](https://material.io/design/components/data-tables.html#specs)[Implementation](https://material.io/design/components/data-tables.html#implementation)

------

## Usage 

Data tables display information in a way that’s easy to scan, so that users can look for patterns and insights. They can be embedded in primary content, such as cards.

Data tables can include:

- A corresponding visualization
- Navigation
- Tools to query and manipulate data

When including tools, they should be placed directly above or below the table.



# Principles

Data tables are hierarchical, interactive, and intuitive

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1PxQnouP9xl7F5JBjp10qKxKpI4jge3MY%2Fdata-tables-illos-02.png)

## Hierarchical

Data table content should be hierarchical, alphabetical, or similarly organized.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F17FgjiAk1TdnO5Gmelbg0Tr30N-tzo0fJ%2Fdata-tables-illos-01.png)

## Interactive

Data tables should allow user interaction, so that users can sort information in custom ways.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1NWI1rhM37Mi-Z3LRQww6eRD7xlhG8Olo%2Fdata-tables-illos-03.png)

## Intuitive

Data tables should work intuitively, allowing users to focus on content, not structure.

------

## Anatomy 

Data tables can include three or more columns. A header row at the top lists column names, and all subsequent rows contain data. Data tables can include a corresponding visualization, such as a graph.

If users need to interact with row data, checkboxes should accompany each row.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1_sDHRvUasXb8SWQMpZDFZ2SrqA9Ix91_%2Fcomponents-datatables-datatable-anatomy.png)

### 1. Container

The container holds all data table content.

### 2. Column header

Column headers are titles for column content.

### 3. Sorting tool

Sorting tools allow users to reorder table content, appearing only on hover.

### 4. Row checkbox

Checkboxes allow users to select a row.

### 5. Table content

Tables contain raw data.



# Column header

By default, there is 56dp of padding between columns. Column headers that extend into this padding can either:

READ MORE

By default, there is 56dp of padding between columns. Column headers that extend into this padding can either:

1. Enable horizontal scrolling, so users can scroll to see the full column name
2. Shorten the column name, while displaying it in full in a tooltip (on hover)

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1IoKwBWo6bXBRT0jigrulTUheFO2HNbMa%2Fcomponents-datatables-anatomy-interaction5.png)

Long column headers are truncated with an ellipse.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1qdfEeInQNVH4py2jAPKkYcIjAEh5mxZq%2Fcomponents-datatables-anatomy-interaction6.png)

Hovering over a truncated column header reveals the full text, using a tooltip.



# Sorting tool

If sorting is enabled, the left-most column is sorted by default, with an indicator displayed in the column header. Tapping the header of the sorting...

READ MORE

If sorting is enabled, the left-most column is sorted by default, with an indicator displayed in the column header. Tapping the header of the sorting column reverses the sort order, also rotating the sort icon 180 degrees.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1kRuXv7GoAtw56EzWvl2sD-EJQ8qsBXAF%2Fcomponents-datatables-interaction3.png)

Table with a sorting tool



# Row Checkbox

When a checkbox for a row is selected, the row should display a background color. A selected row checkbox

READ MORE

When a checkbox for a row is selected, the row should display a background color.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1la_DLYF00LieduWjebinGQfx3pPuTbrs%2Fcomponents-datatables-interaction2.png)

A selected row checkbox



------

## Behavior 



# Row hover (Desktop)

If a user hovers over a row, display a background color in that row. If individual table cells have specific hover states, display both that...

READ MORE

If a user hovers over a row, display a background color in that row. If individual table cells have specific hover states, display both that cell’s hover state as well as the row hover state.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1mhrI0DNGU3LRbZtzJ1brL-AE99dTVi9i%2Fcomponents-datatables-interaction1.png)

Hovering over a row



# Column hover (Desktop)

On hover, two things can be displayed:

READ MORE

On hover, two things can be displayed:

- A tooltip displaying more information about each column header
- A sort icon in the column header, if sorting is enabled

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F18ilSjwwOspN05-nc6W7QYmMz5dDsIJAi%2Fcomponents-datatables-interaction4.png)

A tooltip and sort icon can be displayed when hovering over a column name.



# Inline text editing

Tables can include editable fields for text editing or adding comments. They are indicated by placeholder text in the field. On tap, an edit dialog...

READ MORE

Tables can include editable fields for text editing or adding comments. They are indicated by placeholder text in the field. On tap, an edit dialog with a text field or a full dialog is displayed.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F14evvO0NauOb26sHQv1X31i-ykr8iqXzN%2Fcomponents-datatables-interaction7.png)



An editable table cell with placeholder text



[Text fieldsText fields let users enter, edit, and select text.Related Article*arrow_downward*](https://material.io/design/components/text-fields.html#text-fields)



## Small edit dialog

Text can be edited using a small edit dialog, allowing users to confirm text by pressing Enter. Dialog edges should align with nearest divider line or table edge.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F14zBNypql4lxvmZFCar3S5YUMrZb27QLS%2Fcomponents-datatables-interaction8.png)

## Large edit dialog

A large edit dialog is a complex, flexible dialog box. Users confirm text by tapping the Save button. Dialog edges should align with the nearest divider line or table edge.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1YTrV-myUTSBHoT2K-1-Wk9DR1agudIqf%2Fcomponents-datatables-interaction9.png)

## Inline edit icon (Optional)

An inline edit icon allows field editing, with an icon at the opposite end of the cell from content.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1TSeGPZuNZCRLewZLBUU4QLoLLFZZCTm8%2Fcomponents-datatables-interaction10.png)



# Inline menus

Inline menus allow users to select from a predefined list of options. These menus can be directly embedded in a table. Menus display a list...

READ MORE

Inline menus allow users to select from a predefined list of options. These menus can be directly embedded in a table.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Jp_yym6TWZh2suyWHXqSQR4WMhx7q7Wn%2Fcomponents-datatables-interaction11.png)

A table with inline menus

[MenusMenus display a list of choices on temporary surfaces.Related Article*arrow_downward*](https://material.io/design/components/menus.html#menus)



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1TehlEk5-wlnoez4LbGFrHgUEfyKbtHvX%2Fcomponents-datatables-interaction12.png)

An expanded inline menu

------

## Tables within cards 

Tables can be embedded within a card. At the bottom of each card, tools can be displayed for table navigation and data manipulation.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B3wFuHgbfPkzanpfajUxbDk1Z00%2Fcomponents-datatables-card1.png)

Table card with header and footer

[CardsCards contain content and links about a single subject.Related Article*arrow_downward*](https://material.io/design/components/cards.html#cards)





# Data table card headers

When tables in cards require actionable headers instead of titles, you can either: 1. Action buttons 2. Colored header

READ MORE

When tables in cards require actionable headers instead of titles, you can either:

- Display persistent actions
- Display a contextual header that indicates when items are selected

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B3wFuHgbfPkzdzYzS0JOLWJZSWM%2Fcomponents-datatables-card2.png)



\1. Action buttons

\2. Colored header



------

## Theming 



# Rally Material Theme

This personal finance app’s data tables have been customized using Material Theming. Areas of customization include color, typography, and shape. Rally is a personal finance...

READ MORE

This personal finance app’s data tables have been customized using Material Theming. Areas of customization include color, typography, and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1zGS2Wc6iS4ihlDDbXJBMq5fS6-7z6OQ7%2Fdatatables-rally-ahero.png)

Rally’s customized data tables

[RallyRally is a personal finance app that demonstrates how Material Design can be used for finance.Related Article*arrow_downward*](https://material.io/design/material-studies/rally.html#rally)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Rally’s data tables uses custom color on two elements: container, table text, header text, and divider.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F12OE6eiWxjmuNKigENQSIDS6LXO0eztEF%2Fdatatables-rally-color.png)

| Element     | Category   | Attribute    | Value       |
| ----------- | ---------- | ------------ | ----------- |
| Container   | Surface    | ColorOpacity | #3C3C46100% |
| Table text  | On Surface | ColorOpacity | #FFFFFF100% |
| Header text | On Surface | ColorOpacity | #FFFFFF60%  |
| Divider     | On Surface | ColorOpacity | #FFFFFF12%  |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

Rally’s data tables use custom typography for table text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F18_AdkayF6uFnUBJrWkCiEPpjrRA_pJAq%2Fdatatables-rally-type.png)

| Element | Category | Attribute            | Value                               |
| ------- | -------- | -------------------- | ----------------------------------- |
| Text    | Body 2   | TypefaceFontSizeCase | Roboto CondensedRegular14Title case |

[About ShapeMaterial surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.Related Article*arrow_downward*](https://material.io/design/shape/about-shape.html#about-shape)



## Shape

Rally’s data tables have custom corner shapes.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1wzgEAc04M9O590QamlgbRqir1Nfa94u_%2Fdatatables-rally-shape.png)

| Element   | Category        | Attribute  | Value        |
| --------- | --------------- | ---------- | ------------ |
| Container | Large component | FamilySize | Cut0;0;0;0dp |

------

## Specs 

## Data tables with a header

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 48Measurement 48
- 24Measurement 24
- 24Measurement 24
- 30Measurement 30
- 30Measurement 30
- 44Measurement 44
- 16Measurement 16
- 12Measurement 12
- CMeasurement C
- 64Measurement 64
- 48Measurement 48
- 20Measurement 20
- 12Measurement 12
- 12Measurement 12
- CMeasurement C
- 24Measurement 24
- 16Measurement 16
- 24Measurement 24
- 24Measurement 24
- 
- 
- 
- 
- 
- 

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  





- 

  

  

  

  

- 

  

  

  

  

- 

  

  

  

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1vFQ-ZgdOSV4pBpz2OYxF3cFZ8yPF3XTU%2Fspecs-datatable-with-header.png)



*flip*

Specs



## Data tables without a header

- 
- 
- 
- 
- 
- CMeasurement C
- CMeasurement C
- 16Measurement 16
- 12Measurement 12
- 24Measurement 24
- 16Measurement 16
- 48Measurement 48
- 47Measurement 47
- 18Measurement 18
- 
- 
- 

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  





- 

  

  

  

  

- 

  

  

  

  

- 

  

  

  

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Eue-JdnLq0cw8tS8kNfaJhUHnTppiPuR%2Fspecs-datatable-no-header.png)



*flip*

Specs



------

## Implementation 

Data tables implementation support for each platform is indicated below.

![Android Implementation-Data tables](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1RM231F_5J32DRS1K9tnbKWA1UcTWHkGz%2Fimplementation-android-platform-unavail.png)

## Android Material Component

**Status:** Planned

![IOS Implementation-Data tables](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1SPliLtMYhODAl1wSvRlRjaPZTs2vrd-q%2Fimplementation-ios-platform-unavail.png)

## IOS Material Component

**Status:** Planned

[![Flutter Implementation-Data tables](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1HU4XBTNUFuHZl0priESgkuINjP8bDuYy%2Fimplementation-flutter-platform.png)](https://material.io/go/flutter-data-tables/)

## [Flutter Material Component](https://material.io/go/flutter-data-tables/)

**Status:** Available

![Web Implementation-Data tables](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1pUDymt99mkkJqzvm1mgxhh1SA07Ip_jF%2Fimplementation-web-platform-unavail.png)

## Web Material Component

**Status:** Planned