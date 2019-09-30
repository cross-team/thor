# Cards

Material UI (Core) Component

Reference: https://material.io/design/components/cards.html



------

# Cards 

## Cards contain content and actions about a single subject.

<video class="video-player__video animatable js-video-player js-video-load anim-appear" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 1 !important; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>



CONTENTS[Usage](https://material.io/design/components/cards.html#usage)[Anatomy](https://material.io/design/components/cards.html#anatomy)[Behavior](https://material.io/design/components/cards.html#behavior)[Actions](https://material.io/design/components/cards.html#actions)[Card collections](https://material.io/design/components/cards.html#card-collections)[Theming](https://material.io/design/components/cards.html#theming)[Specs](https://material.io/design/components/cards.html#specs)[Implementation](https://material.io/design/components/cards.html#implementation)

------

## Usage 

Cards are surfaces that display content and actions on a single topic.

They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.



# Principles

Cards are contained, independent, and inseparable.

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1RtxPJI3LcA6oBCOUXdFCx4b--zs3YodJ%2Fillo-cards-intro.png)

## Contained

A card is identifiable as a single, contained unit.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1AoNr0vVLvGx9RYMdsIt6v9yWDWQy0-Vy%2Fillo-cards-independent.png)

## Independent

A card can stand alone, without relying on surrounding elements for context.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Ed30SfC9sNNkzaYMnCxj-nuRvdunMYhO%2Fillo-cards-cut.png)

## Individual

A card cannot merge with another card, or divide into multiple cards.

------

## Anatomy 

The card container is the only required element in a card. All other elements shown here are optional.

Card layouts can vary to support the types of content they contain. The following elements are commonly found among that variety.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1eZNTdj8h1J0BFkbl23LyzEwjjvMzY_uV%2Fcards-elements-2b.png)

### 1. Container

Card containers hold all card elements, and their size is determined by the space those elements occupy. Card elevation is expressed by the container.

### 2. Thumbnail [optional]

Cards can include thumbnails to display an avatar, logo, or icon.

### 3. Header text [optional]

Header text can include things like the name of a photo album or article.

### 4. Subhead [optional]

Subhead text can include text elements such as an article byline or a tagged location.

### 5. Media [optional]

Cards can include a variety of media, including photos, and graphics, such as weather icons.

### 6. Supporting text [optional]

Supporting text include text like an article summary or a restaurant description.

### 7. Buttons [optional]

Cards can include buttons for actions.

### 8. Icons [optional]

Cards can include icons for actions.

Each card is made up of content blocks. All of the blocks, as a whole, are related to a single subject or destination. Content can receive different levels of emphasis, depending on its level of hierarchy.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B6xUSjjSulxca3J1cWoxa003amc%2Fcards-elements-1.png)

Cards contain rich media, primary title, supporting text, and actions.



# Dividers

Dividers can be used to separate regions in cards or to indicate areas of a card that can expand. A divider is a thin, lightweight...

READ MORE

Dividers can be used to separate regions in cards or to indicate areas of a card that can expand.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B6xUSjjSulxcUTQtcVl0WURPWW8%2Fcards-dividers-2.png)

Use inset dividers (1), dividers that do not run the full length of a card, to separate related content.

[DividersA divider is a thin, lightweight rule that groups content in lists and page layouts.Related Article*arrow_downward*](https://material.io/design/components/dividers.html#dividers)



<video aria-describedby="anatomy-figure-caption-2" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Content that can be expanded should use full-width dividers.

------

## Behavior 



# Transitions

Cards can transform to reveal additional content. Transition choreography is a coordinated sequence of motion that maintains user focus as the interface adapts. Related Article...

READ MORE

Cards can transform to reveal additional content.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

A card expands to fill the full screen using a parent-child transition.

[ChoreographyTransition choreography is a coordinated sequence of motion that maintains user focus as the interface adapts.Related Article*arrow_downward*](https://material.io/design/motion/choreography.html#choreography)



<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Do.

Expand a card to reveal information.

[SurfacesMaterial Design has three-dimensional qualities that are reflected in its use of surfaces, depth, and shadowsRelated Article*arrow_downward*](https://material.io/design/environment/surfaces.html#surfaces)



<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Don’t.

Cards don’t flip over to reveal information.



# Elevation

On mobile, a card’s default elevation is 1dp, with a raised elevation of 8dp. On desktop and mobile, cards can have a resting elevation of...

READ MORE

On mobile, a card’s default elevation is 1dp, with a raised elevation of 8dp.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B6xUSjjSulxccDRhSldJYUJUTTQ%2Fcards-elevation-1.png)

A shadow helps indicate a card.

On desktop and mobile, cards can have a resting elevation of 0dp. They elevate to 8dp on hover.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1KZdEJ_rsgaQ79ltEN_Oue2q9RWHXnIqk%2Fcards-elevation-3.png)

A stroke of 0dp helps indicate a card.



# Gestures

Gestures should be implemented consistently within a card collection. Frequently used gestures on cards include swipe, pick up and move, and scrolling. A swipe gesture...

READ MORE

Gestures should be implemented consistently within a card collection. Frequently used gestures on cards include swipe, pick up and move, and scrolling.

## Swipe

A swipe gesture can be performed on a single card at a time, anywhere on that card.

It can be used to:

- Dismiss a card
- Change the state of a card (such as flagging or archiving it)

------

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Do.

A card should only have one swipe action assigned to it.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Don’t.

Cards should not contain swipeable content (such as an image carousel or pagination). Swipe gestures should also not cause portions of cards to detach upon swipe.

## Pick up and move

The pick up and move gesture allows users to move and re-order cards in a collection.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Do.

When moving a card, increase its elevation.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Don’t.

Don’t move cards behind other cards.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Don’t.

Don’t let cards bump other elements out of the way. When a card is picked up, it appears in front of all elements (except app bars and navigation).

## Scrolling

Card content that is taller than the maximum card height is truncated and does not scroll, but can be displayed by expanding the height of a card. A card can expand beyond the maximum height of the screen, in which case the card scrolls within the screen.

<video aria-describedby="behavior-figure-caption-2" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Do.

On mobile, cards can expand to reveal more content, scrolling within the screen. Content within cards doesn’t scroll.

<video aria-describedby="behavior-figure-caption-3" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Don’t.

On mobile, cards cannot internally scroll, as it could cause two scroll bars to be displayed.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Do.

On desktop, card content can expand and scroll within a card.

------

## Actions 



# Primary action

The primary action area of a card is typically the card itself. Often cards are one large touch target to a detail screen on a...

READ MORE

The primary action area of a card is typically the card itself. Often cards are one large touch target to a detail screen on a subject.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B6xUSjjSulxccHZTSGZwWmxLV0k%2Fcards-actions-1.png)

The action area of a card contains rich media and supporting text.



# Supplemental actions

Supplemental actions are represented by icons, text, and UI controls on cards. They are typically placed at the bottom of the card. For more than...

READ MORE

Supplemental actions are represented by icons, text, and UI controls on cards. They are typically placed at the bottom of the card.

For more than two supplemental actions, use an overflow menu instead.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B6xUSjjSulxcbFotbmtKUWdqUXc%2Fcards-supplementalactions-1.png)

Supplemental text and actions at the bottom of the card



# Overflow menu

Overflow menus contain related actions. They are typically placed in the upper-right or lower-right corner of a card.

READ MORE

Overflow menus contain related actions. They are typically placed in the upper-right or lower-right corner of a card.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F10o-Gi7QXR8JSHDdmCXuL9P8H3wAr2M2e%2Fcards-overflowmenu-1b.png)

Overflow menus are usually located in the upper-right or lower-right corner of a card.



# UI controls

UI controls can be included within a card to allow the user to interact with a card’s content. UI controls may be in the form...

READ MORE

UI controls can be included within a card to allow the user to interact with a card’s content. UI controls may be in the form of a slider, stars to rate content, chips, or buttons.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B6xUSjjSulxcaVRham4xV1UtbGM%2Fcards-uicontrols-1.png)

This card contains stars to rate content.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B6xUSjjSulxcYXYwTkFwYmVTM0k%2Fcards-uicontrols-2.png)

This card contains choice chips within the action area.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

This card contains a slider control within the action area.



# Additional actions

Cards can support multiple actions, such as UI controls and an overflow menu. Because cards are entry points to more detailed information, they should contain...

READ MORE

Cards can support multiple actions, such as UI controls and an overflow menu. Because cards are entry points to more detailed information, they should contain a limited number of actions.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Cr7UXtxff4Ylx6CxWPfl4UofokOwHVxl%2Fcards-additionalactions-1-dont.png)

Caution.

Cards provide entry to more robust information. Be cautious not to overload cards with extraneous information or actions.



# Focus

When traversing through focus points on a card, visit each focused element before moving to the next card. For users that navigate solely using focus...

READ MORE

When traversing through focus points on a card, visit each focused element before moving to the next card.

For users that navigate solely using focus traversal (using a D-pad and keyboard), cards should have either a primary action or open a new screen containing primary and supplemental actions.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Focus traversal of a card

------

## Card collections 



# Usage

When multiple cards are present, they are grouped together into one or more collections. By default, cards in a collection are coplanar, sharing the same...

READ MORE

When multiple cards are present, they are grouped together into one or more collections. By default, cards in a collection are coplanar, sharing the same resting elevation unless they are picked up or dragged.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F11gR6vh2YHDEM6HyT8VZjMRP7kDd6TovL%2Fcards-cardcollections-hero.png)



# Layout

Organize card collections in a way that makes cards useful. How cards are laid out affects how they are perceived and used.

READ MORE

Organize card collections so that they are easy to use. Their layout affects how they are perceived.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B6xUSjjSulxcbWU5X05UNHJsYlE%2Fcards-cardcollections.png)

When adding cards to a collection, the first item is automatically positioned on the top left. Subsequent cards are laid out left to right, top to bottom.

## Scannable

To make a collection of cards scannable, place them in a consistent pattern.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B6xUSjjSulxcbGprc01Wc0xleVE%2Fcards-layoutcardcollections-1a.png)

Scannable cards

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1MTF9yicIw3H517deD7M2r4pG4fhC9u2v%2Fcards-layoutcardcollections-1b.png)

## Dashboard

To display multiple subject matters and functions on a screen, use a dashboard-style card collection.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B6xUSjjSulxcbEEtMnNzVmUtRWc%2Fcards-layoutcardcollections-2a.png)

Dashboard-style card collection

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F13DkZ1QyXgr4UPuooWbBjZZxu3lWHpJLF%2Fcards-layoutcardcollections-2b.png)

## Distinction

To highlight each card’s individuality, style, or novelty, use a card collection with an asymmetric grid.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B6xUSjjSulxccGYzamZQbTZUbkU%2Fcards-layoutcardcollections-3a.png)

Cards in an asymmetric grid

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1JD1g0zcrK84v_B2PRAd6ls1hC9fLd6aT%2Fcards-layoutcardcollections-3b.png)



# Contained collections

Card collections can be placed within a container, and be scrolled within it.

READ MORE

Card collections can be placed within a container, and be scrolled within it.

<video aria-describedby="card-collections-figure-caption-4" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Do.

A card collection can horizontally scroll within a container.

<video aria-describedby="card-collections-figure-caption-5" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Don’t.

The container for a collection should not be a card, and the entire surface area of the container should not be interactive.



# Filtering and sorting

Card collections can be filtered in a variety of ways, including by date or alphabetical order. If a collection can be filtered, the filter must...

READ MORE

Card collections can be filtered in a variety of ways, including by date or alphabetical order. If a collection can be filtered, the filter must apply to each card in the collection.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B6xUSjjSulxcdU5ndWNaUFJCUnc%2Fcards-cardcollectionsort-1.png)

Filter or sorting options should be placed outside of the card collection.

------

## Theming 



# Owl Material theme

This educational app’s cards have been customized using Material Theming. Areas of customization include color, typography, and shape. Owl is an educational app that provides...

READ MORE

This educational app’s cards have been customized using Material Theming. Areas of customization include color, typography, and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Nx2ZT4VwAFFNoSLLwvPoeNK7dellECUG%2Fcard-owl-ahero.png)

Owl’s customized cards

[OwlOwl is an educational app that provides courses for people who want to explore and learn new skills.Related Article*arrow_downward*](https://material.io/design/material-studies/owl.html#owl)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Owl’s cards use custom color on three elements: the container, text, and icon.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1N6Ok424EgSdXAWAfVhcevLtXt8D-7HKf%2Fcard-owl-color.png)

| Element     | Category      | Attribute    | Value       |
| ----------- | ------------- | ------------ | ----------- |
| Container   | Background    | ColorOpacity | #0336FF100% |
| Text, Icons | On Background | ColorOpacity | #FFFFFF100% |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

Owl’s cards use custom typography for the card title, number, and category text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1h0jUEjn5pbQ1oOGmoc6BchZXwW9tZN6K%2Fcard-owl-type.png)

| Element  | Category   | Attribute            | Value                   |
| -------- | ---------- | -------------------- | ----------------------- |
| Title    | Subtitle 1 | TypefaceFontSizeCase | RubikMedium16Title case |
| Number   | Subtitle 2 | TypefaceFontSizeCase | RubikMedium14Title case |
| Category | Overline   | TypefaceFontSizeCase | RubikRegular10All caps  |

[About ShapeMaterial surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.Related Article*arrow_downward*](https://material.io/design/shape/about-shape.html#about-shape)



## Shape

Owl’s cards use a custom container shape, with a 0dp corner radius.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1U4GpP5hdbADK22TfK3XfqE_7Az3c8U5X%2Fcard-owl-shape.png)

| Element   | Category         | Attribute  | Value                     |
| --------- | ---------------- | ---------- | ------------------------- |
| Container | Medium component | FamilySize | Rounded0dp; 0dp; 0dp; 0dp |



# Reply Material theme

This email app’s cards have been customized using Material Theming. Areas of customization include color, typography, and shape. Reply is an email app that uses...

READ MORE

This email app’s cards have been customized using Material Theming. Areas of customization include color, typography, and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1iKygKfpL6UaQ3yQ_QokOxxMSCjmPKtj_%2Fcard-reply-ahero.png)

Reply’s customized card

[ReplyReply is an email app that uses Material Design components and Material Theming to create an on-brand communication experience.Related Article*arrow_downward*](https://material.io/design/material-studies/reply.html#reply)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Reply’s cards use custom color on six elements: the container, metadata text, title text, body text, icon, and icon fill.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1VIt1ooI1tAh3DvyVrRvTnvo_NxPEQXYn%2Fcard-reply-color.png)

| Element       | Category     | Attribute    | Value       |
| ------------- | ------------ | ------------ | ----------- |
| Container     | Surface      | ColorOpacity | #FFFFFF100% |
| Metadata text | On Secondary | ColorOpacity | #232F34100% |
| Title text    | On Secondary | ColorOpacity | #232F34100% |
| Body text     | On Secondary | ColorOpacity | #232F34100% |
| Icon          | On Secondary | ColorOpacity | #232F34100% |
| Icon fill     | On Secondary | ColorOpacity | #232F3430%  |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

Reply’s cards use custom typography for the card title, body, and metadata text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1WEjpfR0edfoJswkD5S1ZkSH4FXPgSg4v%2Fcard-reply-type.png)

| Element  | Category | Attribute            | Value                           |
| -------- | -------- | -------------------- | ------------------------------- |
| Title    | H6       | TypefaceFontSizeCase | Work SansBold21Sentence case    |
| Body     | Body 1   | TypefaceFontSizeCase | Work SansRegular17Sentence case |
| Metadata | Body 2   | TypefaceFontSizeCase | Work SansRegular15Sentence case |

[About ShapeMaterial surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.Related Article*arrow_downward*](https://material.io/design/shape/about-shape.html#about-shape)



## Shape

Reply’s cards use a custom container shape, with a 0dp corner radius.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Imt30NsHF8f8d3dssWm4znbmoynPCKjH%2Fcard-reply-shape.png)

| Element   | Category         | Attribute  | Value                      |
| --------- | ---------------- | ---------- | -------------------------- |
| Container | Medium component | FamilySize | Rounded0dp; 0dp; 0dp; 0dp; |

------

## Specs 

**This section should not be read as prescriptive or exhaustive.** Cards have no singular layout, typographic, or image size. All cards should be designed to meet the needs of the content they present. This section shows a variety of card layouts to help showcase that variety.

## Elevated cards

- 
- 
- 
- 
- 
- 
- 
- 
- 148Measurement 148
- 344 Measurement 344
- 16Measurement 16
- 8Measurement 8
- 16Measurement 16
- 16Measurement 16
- 16Measurement 16
- 28Measurement 28
- 8Measurement 8
- 40Measurement 40
- 
- 
- 80

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

  

  

  

  



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1_WDIWUDXZpe4qyEBSREkAdBsGSPg-eoS%2Fspecs-cards-template1.png)



*flip*

Specs



- 
- 
- 
- 
- 
- 
- 382Measurement 382
- 344 Measurement 344
- 16Measurement 16
- 72 Measurement 72
- 72Measurement 72
- 116Measurement 116
- 34Measurement 34
- 22Measurement 22
- 28Measurement 28
- 8Measurement 8
- 8Measurement 8
- 24Measurement 24
- 344194
- 40
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

  

  

  

  

  

- 

  

  

  

  



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1IW1AVJ7FX6dHRSYxrgktI9ug4xIyUNW0%2Fspecs-cards-template5.png)



*flip*

Specs



- 
- 
- 
- 
- 
- 
- 
- 
- 510Measurement 510
- 194Measurement 194
- 0Measurement 0
- 344 Measurement 344
- 32Measurement 32
- 26Measurement 26
- 36Measurement 36
- 1Measurement 1
- 24Measurement 24
- 14Measurement 14
- 20Measurement 20
- 16Measurement 16
- 24Measurement 24
- 32Measurement 32
- 8Measurement 8
- 8Measurement 8
- 44Measurement 44
- 24Measurement 24
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

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

- 

  

  

  

  

- 

  

  

  

  



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1IR3EQwozmIZ605d0fOZEqNPIuiuZulLo%2Fspecs-cards-template014.png)



*flip*

Specs



## Outlined cards

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 40Measurement 40
- 24Measurement 24
- 24Measurement 24
- 16Measurement 16
- 16Measurement 16
- 16Measurement 16
- 8Measurement 8
- 8Measurement 8
- 16Measurement 16
- 1Measurement 1
- 80
- 
- 

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

  

  

  

  

  

- 

  

  

  

  



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1I4Je5rL35IK0KndNo-AwJqHo1WnqqiHq%2Fspecs-outline-cards.png)



*flip*

Specs



------

## Implementation 

Cards implementation support for each platform is indicated below.

[![Android Implementation-Cards](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Fdjz7zWmXt31NCHGgcV-TSP0u-47gdnI%2Fimplementation-android-platform.png)](https://material.io/go/android-cards/)

## [Android Material Component](https://material.io/go/android-cards/)

**Status:** Available

[![IOS Implementation-Cards](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F14EB-xuDUqoqFcW8ItByAZL19vppttvmJ%2Fimplementation-ios-platform.png)](https://material.io/go/ios-cards/)

## [IOS Material Component](https://material.io/go/ios-cards/)

**Status:** Available

[![Flutter Implementation-Cards](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1N1iQftr2ljI6SnQheIcjnC9R0B-MU7rP%2Fimplementation-flutter-platform.png)](https://material.io/go/flutter-cards/)

## [Flutter Material Component](https://material.io/go/flutter-cards/)

**Status:** Available

[![Web Implementation-Cards](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1VVD78zs4SuzcrCIFHbGZBOgdI8CT9cIH%2Fimplementation-web-platform.png)](https://material.io/go/web-cards/)

## [Web Material Component](https://material.io/go/web-cards/)

**Status:** Available