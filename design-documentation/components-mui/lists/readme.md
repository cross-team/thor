# Lists

Material UI (Core) Component

Reference: https://material.io/design/components/lists.html



------

# Lists 

## Lists are continuous, vertical indexes of text or images.

### Interactive demo

This demo lets you preview the list component, its variations, and configuration options. Each tab displays a different type of list.

<iframe class="js-scroll-to-iframe " src="https://material.io/inline-tools/list" style="background-repeat: no-repeat; box-sizing: border-box; border: 1px solid rgba(0, 0, 0, 0.12); width: 760px; transition: box-shadow 150ms linear 0s; height: 368px;"></iframe>

CONTENTS[Usage](https://material.io/design/components/lists.html#usage)[Anatomy](https://material.io/design/components/lists.html#anatomy)[Behavior](https://material.io/design/components/lists.html#behavior)[Types](https://material.io/design/components/lists.html#types)[Theming](https://material.io/design/components/lists.html#theming)[Specs](https://material.io/design/components/lists.html#specs)[Implementation](https://material.io/design/components/lists.html#implementation)

------

## Usage 

Lists are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text.

[Image ListImage lists display a collection of images in an organized grid.Related Article*arrow_downward*](https://material.io/design/components/image-lists.html#image-list)

[CardsCards contain content and links about a single subject.Related Article*arrow_downward*](https://material.io/design/components/cards.html#cards)





# Principles

Lists are logical, actionable, consistent

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1lwA_3sGN_XtuhDxAjgFZDvJ1OncKHc5J%2Flists-illos-logical.png)

## Logical

Lists should be sorted in logical ways that make content easy to scan, such as alphabetical, numerical, chronological, or by user preference.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1qS_Y9IiApIT1UXYis8ILDanPWTtOgXZE%2Flists-illos-content.png)

## Actionable

Lists present content in a way that makes it easy to identify a specific item in a collection and act on it.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F16Sn24nRlHcMmtT2l--5mWGuQk9wtowUa%2Flists-illos-consistency.png)

## Consistent

Lists should present icons, text, and actions in a consistent format.



# Types

Single-line list items contain a maximum of one line of text. Two-line list items contain a maximum of two lines of text. Three-line list items...

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1VGUbTqihAbKetX6-HEXNsJOUqVqk_b8J%2Fusage-types.png)

### 1. Single-line list

Single-line list items contain a maximum of one line of text.

### 2. Two-line list

Two-line list items contain a maximum of two lines of text.

### 3. Three-line list

Three-line list items contains a maximum of three lines of text.

------

## Anatomy 

Lists are optimized for reading comprehension. A list consists of a single continuous column of subdivisions called rows that contain items of content.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1hc2ctdeE65wiDJNpup4pb1Agvug7P94A%2Flists-elements.png)

### 1. List

### 2. Row

### 3. List item content



# Content types

Content types can take different forms, depending on the needs of a list. A list control can display information and actions for list items. A...

READ MORE

Content types can take different forms, depending on the needs of a list.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-ZThsTWxhbEp4QVk%2Flist-elements.png)

### List items are comprised of three different content types:

### 1. Supporting visuals

### 2. Primary text

### 3. Metadata

A list control can display information and actions for list items.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1yj1ckm1If1FCbn6fgBuEHB4LexRNi30l%2Flist-elements-2.png)

### Lists with controls contain three content types:

### 1. Supporting visuals

### 2. Primary text

### 3. List control

A list should be easily scannable, and any element of a list can be used to anchor and align list item content. Scannability is improved when elements (such as supporting visual and primary text) are placed in consistent locations across list items.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1YzPDIp5DDYoUf5gSiew2UpzUleXW5nLc%2Flist-scan-three-up.png)

Sample listContent placement in a rowSupporting visuals are aligned for easy scanningPrimary text is aligned for easy scanning



# Visuals, dividers, and spacing

The structure of a list can be clarified using visuals, dividers, and spacing

READ MORE

List structure can be organized using visuals, dividers, and spacing.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1prXUCjUgB_6rLVjPP10Hmq43uu5uRD22%2Ftwo-line-example-2.png)

Do.

Improve scannability by anchoring supporting visuals, such as thumbnails, along the row's edge.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1J-UXqEXlaoS-bYkyeyMBfyE0mpPIVJTD%2Ftwo-line-example-dont.png)

Caution.

Placing supporting visuals in the center of the row can make it difficult to see the relationship between primary content and supporting content.

[DividersA divider is a thin, lightweight rule that groups content in lists and page layouts.Related Article*arrow_downward*](https://material.io/design/components/dividers.html#dividers)



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Cdh8TPWcGTOeCpnCj40etdI3XiCF7g_x%2Fthreeline-sample-2.png)

Do.

Place a divider between rows with lots of content, such as those with three-line lists.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1zunD2R2PhBmmFYuHWv_P6UGqTCIWsVda%2Fthreeline-sample-caution.png)

Caution.

Distinguish rows by maintaining sufficient space between list items.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1_mv2Hsfl3zjqN4HJXn7zvToeT7JM8qRU%2Fcontent-action.png)

The primary action takes up the majority of space.

1. Primary Action area
2. Secondary Action area

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1q3CvJyhleDsbYiKaW6uoiDy9opPdmjA-%2Fcontent-hierarchy.png)

Clear hierarchy is created by aligning the most distinguishing content on the left, with the least distinguishing on the right.

1. More distinguishing content
2. Less distinguishing content



# Subheaders

Subheaders delineate sections of a list

READ MORE

Subheaders delineate sections of a list. They appear on list rows.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1x6Oq0s2zQioHhxGSYDh-ueU5bwxA-jEJ%2Fsubheader-lists.png)

### 1. Subheader

A subheader should be left-aligned with an avatar or icon in a list.

### 2. Subheader inset

If a floating action button is aligned with list avatars or icons, the subheader should be aligned with the text content.

------

## Behavior 



# Transitions

Tapping a list item expands it across the entire screen. Navigational transitions are movements between states in an app, such as from a high-level view...

READ MORE

Tapping a list item expands it across the entire screen.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

To expand a list item, display a parent-child transition.

[Navigation transitionsNavigational transitions are movements between states in an app, such as from a high-level view to a detailed view.Related Article*arrow_downward*](https://material.io/design/navigation/navigation-transitions.html#navigation-transitions)





# Gestures

Swiping a list item (either left or right) can perform an action. Items can be dragged to reorder a list.

READ MORE

Swiping a list item (either left or right) can perform an action.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

To archive a list item, swipe it.

Items can be dragged to reorder a list.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

To reorder a list item, drag it.



# Expand

A three-line list transition (on mobile) is displayed as a two-line list (on desktop).

READ MORE

A three-line list transition (on mobile) is displayed as a two-line list (on desktop).

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1lvjjWV7QyO5jzp9CHcFjPJspvrph1Vpl%2Fbehavior-transform-list-expand.png)

Scaled down to 50%

\1. A three-line list on mobile 
\2. A two-line list on desktop



# Transform

On a larger screen, a list may transform into an image list.

READ MORE

On a larger screen, a list may transform into an image list.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1l9Q8X_baZdVc0cEBrdOI-m_bx0Q4MKab%2Fbehavior-transform-list-image.png)

\1. A one-line list on mobile 
\2. An image list on desktop

------

## Types 



# Single-line list

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-UHcxOFd6NnQxeFE%2Fsingle-line-example-1.png)

A text list

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-a1hzNEpSb1N0RTA%2Fsingle-line-example-2.png)

A single-line list with icons and text

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1TaxymtZ-I0U8XTqPmxIrlXN990WwuTEP%2Fsingle-line-desktop.png)

Scaled down to 50% on desktop, a single-line list with icons and text



# Two-line list

In a two-line list, each row contains two lines of text maximum.

READ MORE

In a two-line list, each row contains two lines of text maximum.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-U1pRRUhQSjg1LUE%2Ftwo-line-example-1.png)

A two-line list, with an icon and meta icon

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-RjdIMmVCS0pqZWM%2Ftwo-line-example-2.png)

A two-line list, with a thumbnail and meta text

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1O7-oN4P18EJpL0UzblAirn239aUN4U2R%2Ftwo-line-mix.png)

The amount of text can vary between different rows within the same list.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1a2x5Q8NK6lJGdEvpmNy0SYfCAUdXfZym%2Ftwo-line-desktop.png)

Scaled down to 50% on desktop, a two-line list accompanied by an avatar and meta text



# Three-line list

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-YkJoa3JqZmZvR3c%2Fthreeline-sample-1.png)

A three-line text with an avatar

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-MkJUb2RsX0ZIb1U%2Fthreeline-sample-2.png)

A three-line text list, with a thumbnail and meta text

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1VRjFPYImqhtVgse4oeUcngo1a0d8KVBp%2Fthree-line-mix.png)

The amount of text can vary between rows within the same list.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1IHPZO3VepErQjcxEd5ELwXUHA8o1BjUR%2Fthreeline-desktop.png)

On desktop, a three-line list accompanied by a large thumbnail and meta text



# List controls

List controls display information and actions for list items. A checkbox can either be a primary or secondary action. Show and hide details of existing...

READ MORE

List controls display information and actions for list items.

## Checkbox

A checkbox can either be a primary or secondary action.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1EZxc8CUCPrH3WVS9STWmgBCkSrYbFh7F%2Flists-controls-checkbox.png)

\1. Secondary action
This checkbox is the list item’s secondary action.

\2. Primary action
This checkbox is both the list item’s primary action and state indicator.

## Expand and collapse

Show and hide details of existing list items by expanding and collapsing list content vertically.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Zf85vI4EEjmcGq4YvbN2Yv8JBQ0fx1wj%2Flists-controls-expandable-close.png)

Tapping the list control expands the list.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1US53IsyABmg3sFnHk2sROcI8qgNgGkMk%2Flists-controls-expandable-open.png)

An expanded list

## Switch

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F11dYEcDUKU6a0uwWR8pklDlH_Ro17rLo3%2Flists-controls-switch.png)

Tapping the list control expands the list.

## Reorder

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1isaPHCssty7wCBs9nkqikegF-bFPXqME%2Flists-controls-reorder.png)

Usually appearing in edit mode, dragging lists items moves them to other locations within the list. This reorder icon is the list item’s secondary action.

------

## Theming 



# Basil Material theme

This recipe app’s lists have been customized using Material Theming. Areas of customization include color and typography. Basil is a recipe browsing app that demonstrates...

READ MORE

This recipe app’s lists have been customized using Material Theming. Areas of customization include color and typography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1tFxpM0tRN31m3QSKEZ-GzJa3SIUzSB6j%2Flist-basil-ahero.png)

Basil’s customized list

[BasilBasil is a recipe browsing app that demonstrates how Material Design can be used in the food lifestyle space.Related Article*arrow_downward*](https://material.io/design/material-studies/basil.html#basil)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Basil’s lists use custom color on four elements: the background, icon, item text, and quantity text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1_xbeQRN-h2hOA-9ehCLZIDsoBxefEM-O%2Flist-basil-color.png)

| Element          | Category   | Attribute    | Value       |
| ---------------- | ---------- | ------------ | ----------- |
| Surface          | Surface    | ColorOpacity | #FFFBE6100% |
| Item text, Icons | Primary    | ColorOpacity | #356859100% |
| Quantity text    | On Surface | ColorOpacity | #29302E100% |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

Basil’s lists use custom typography for item and quantity text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1QylIFWxlijvg3LjxhvmXohvRO3gcjle0%2Flist-basil-type.png)

| Element       | Category   | Attribute            | Value                        |
| ------------- | ---------- | -------------------- | ---------------------------- |
| Item text     | Subtitle 1 | TypefaceFontSizeCase | LektonBold16Title case       |
| Quantity text | Caption    | TypefaceFontSizeCase | LektonRegular12Sentence case |



# Crane Material theme

This travel app’s lists have been customized using Material Theming. Areas of customization include color and typography. Crane is a travel app that uses Material...

READ MORE

This travel app’s lists have been customized using Material Theming. Areas of customization include color and typography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1UFLH31G4S2V4RB_rrkrvsBe2DjlCROEM%2Flist-crane-ahero.png)

Crane’s customized list

[CraneCrane is a travel app that uses Material Design components and Material Theming to create a personalized on-brand experience.Related Article*arrow_downward*](https://material.io/design/material-studies/crane.html#crane)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

Crane’s lists use custom typography for title and caption text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1QuLLeC3UZLUZBt34lSO0CUQOnY0SacN3%2Flist-crane-type.png)

| Element      | Category   | Attribute            | Value                       |
| ------------ | ---------- | -------------------- | --------------------------- |
| Title text   | Subtitle 1 | TypefaceFontSizeCase | RalewayMedium16Title case   |
| Caption text | Caption    | TypefaceFontSizeCase | RalewaySemiBold12Title case |

------

## Specs 



# One line

16dp #000000de 16dp #000000de 16dp #000000de 16dp #000000de 16dp #000000de 16dp #000000de #6200ee R98 G0 B238 Elevation 0dp Dividers Dividers All measurements are displayed in...

READ MORE

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
- 48Measurement 48
- 56Measurement 56
- 56Measurement 56
- 72Measurement 72
- 72Measurement 72
- 16Measurement 16
- 16Measurement 16
- 32Measurement 32
- CMeasurement C
- CMeasurement C
- CMeasurement C
- CMeasurement C
- CMeasurement C
- CMeasurement C
- 16Measurement 16
- 24Measurement 24
- 12Measurement 12
- 12Measurement 12
- 16Measurement 16
- 16Measurement 16
- 24Measurement 24
- 24Measurement 24
- 24Measurement 24
- 24Measurement 24
- 16Measurement 16
- 16Measurement 16
- 16Measurement 16
- 8Measurement 8
- 8Measurement 8
- 16Measurement 16
- 16Measurement 16
- 8Measurement 8
- 8Measurement 8
- 8Measurement 8
- 8Measurement 8
- 269 Measurement 269
- 244 Measurement 244
- 
- 
- 
- 
- 
- 40
- 10056
- 56

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

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

- 

  

  

  

  



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1avxbsS1BUfO8yxfE-iowoXerV7qYkxZ_%2Flist-spec-singleline-individual.png)



*flip*

Specs



- 
- 
- 56Measurement 56
- 56Measurement 56
- 56Measurement 56
- 8Measurement 8
- 8Measurement 8
- 











![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1yqLxN4QeO4YzFh4oKyCGgk49oMjfFuZp%2Flist-spec-singleline-group.png)



*flip*

Specs



- 56Measurement 56
- 56Measurement 56
- 56Measurement 56
- 56Measurement 56
- 
- 











![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1FONtKIrOXBY0iWaHCEw4iDbXK-0zE8Lg%2Flist-spec-controls.png)



*flip*

Specs





# Two line

16dp #000000de 12dp #00000099 14dp #00000099 10dp #00000099 16dp #000000de 16dp #000000de 14dp #00000099 16dp #000000de 14dp #00000099 16dp #000000de 14dp #00000099 16dp #000000de 14dp...

READ MORE

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
- 64Measurement 64
- 64Measurement 64
- 72Measurement 72
- 72Measurement 72
- 72Measurement 72
- 72Measurement 72
- 16Measurement 16
- 16Measurement 16
- 24Measurement 24
- 28Measurement 28
- 16Measurement 16
- 16Measurement 16
- 16Measurement 16
- 32Measurement 32
- 16Measurement 16
- 16Measurement 16
- 16Measurement 16
- 16Measurement 16
- 16Measurement 16
- 16Measurement 16
- 8Measurement 8
- 28Measurement 28
- 20Measurement 20
- 20Measurement 20
- 24Measurement 24
- 32Measurement 32
- 20Measurement 20
- 32Measurement 32
- 20Measurement 20
- 32Measurement 32
- 24Measurement 24
- 20Measurement 20
- 24Measurement 24
- 32Measurement 32
- 20Measurement 20
- 24
- 40
- 40
- 10056
- 24
- 24
- 24

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

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1-YqqvjVvKr2aWHg6yQ9KOP9yFbk-4o9t%2Flist-spec-doubleline-individual.png)



*flip*

Specs



- 
- 
- 8Measurement 8
- 8Measurement 8
- 72Measurement 72
- 72Measurement 72
- 72Measurement 72
- 











![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1KIp4SMNcxUYkxH_pOkGzWk6dJg8dfxKy%2Flist-spec-doubleline-group.png)



*flip*

Specs





# Three line

16dp #000000de 12dp #00000099 14dp #00000099 10dp #00000099 16dp #000000de 14dp #00000099 16dp #000000de 14dp #00000099 16dp #000000de 14dp #00000099 16dp #000000de 14dp #00000099 16dp...

READ MORE

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
- 
- 16Measurement 16
- 16Measurement 16
- 88Measurement 88
- 88Measurement 88
- 88Measurement 88
- 88Measurement 88
- 88Measurement 88
- 88Measurement 88
- 16Measurement 16
- 16Measurement 16
- 16Measurement 16
- 16Measurement 16
- 16Measurement 16
- 16Measurement 16
- 32Measurement 32
- 16Measurement 16
- 20Measurement 20
- 16Measurement 16
- 16Measurement 16
- 16Measurement 16
- 20Measurement 20
- 28Measurement 28
- 28Measurement 28
- 20Measurement 20
- 28Measurement 28
- 20Measurement 20
- 28Measurement 28
- 20Measurement 20
- 28Measurement 28
- 20Measurement 20
- 16Measurement 16
- 16Measurement 16
- 16Measurement 16
- 236 Measurement 236
- 28Measurement 28
- 20Measurement 20
- 24
- 40
- 10056
- 
- 
- 24
- 4040

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

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  



- 

  

  

  

  

  

- 

  

  

  

  



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F12GMB_cxP-3KCbZ2JxkAizaX2pGWXmOMA%2Flist-spec-threeline-individual.png)



*flip*

Specs



- 
- 
- 88Measurement 88
- 88Measurement 88
- 88Measurement 88
- 8Measurement 8
- 8Measurement 8
- 











![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1gTGgqK5WK9w0RAqKgixTdodljG3oI2I1%2Flist-spec-threeline-group.png)



*flip*

Specs





# Collapsed & expanded

All measurements are displayed in device-independent pixels (dps)

READ MORE

- 
- 48Measurement 48
- 48Measurement 48
- 48Measurement 48
- 48Measurement 48
- 72 Measurement 72
- 16Measurement 16
- 32Measurement 32
- 
- 24











![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1e8XVwGXZpLY8Fp0Q6DlG2uW99evMH-kH%2Flist-spec-collapsed-expanded.png)



*flip*

Specs



------

## Implementation 

Lists implementation support for each platform is indicated below.

![Android Implementation-Lists](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ht8jF3gKiyroIJUT9DV5o1_kAbPSSnUF%2Fimplementation-android-platform-unavail.png)

## Android Material Component

**Status:** Planned

[![IOS Implementation-Lists](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1BtjWqNjjvHEtyQfbafak3iDpWfzyXfIu%2Fimplementation-ios-platform.png)](https://material.io/go/ios-lists/)

## [IOS Material Component](https://material.io/go/ios-lists/)

**Status:** Available

[![Flutter Implementation-Lists](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1j-2oDqMJ9lq4pN6_Br1z7NAu2fcrVuEc%2Fimplementation-flutter-platform.png)](https://material.io/go/flutter-lists/)

## [Flutter Material Component](https://material.io/go/flutter-lists/)

**Status:** Available

[![Web Implementation-Lists](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1fuepH6eM8kIAaOHiRmwbKcYMklBI4K0P%2Fimplementation-web-platform.png)](https://material.io/go/web-lists/)

## [Web Material Component](https://material.io/go/web-lists/)

**Status:** Available