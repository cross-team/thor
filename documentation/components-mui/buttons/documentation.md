# MUI Component Documentation: Buttons

Reference: https://material.io/design/components/app-bars-bottom.html#

---



# Buttons 

## Buttons allow users to take actions, and make choices, with a single tap.

### Interactive demo

This demo lets you preview the button component, its variations, and configuration options. Each tab displays a different type of button.

<iframe class="js-scroll-to-iframe " src="https://material.io/inline-tools/button" style="background-repeat: no-repeat; box-sizing: border-box; border: 1px solid rgba(0, 0, 0, 0.12); width: 760px; transition: box-shadow 150ms linear 0s; height: 300px;"></iframe>

CONTENTS[Usage](https://material.io/design/components/buttons.html#usage)[Anatomy](https://material.io/design/components/buttons.html#anatomy)[Hierarchy and placement](https://material.io/design/components/buttons.html#hierarchy-placement)[Text button](https://material.io/design/components/buttons.html#text-button)[Outlined button](https://material.io/design/components/buttons.html#outlined-button)[Contained button](https://material.io/design/components/buttons.html#contained-button)[Toggle button](https://material.io/design/components/buttons.html#toggle-button)[Theming](https://material.io/design/components/buttons.html#theming)[Specs](https://material.io/design/components/buttons.html#specs)[Implementation](https://material.io/design/components/buttons.html#implementation)

------

## Usage 

Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:

- Dialogs
- Modal windows
- Forms
- Cards
- Toolbars

# Principles

Buttons are identifiable, findable, and specific.

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1vUQ-3wcD66cCcnbo1DYqH95tT0aYouKx%2Fbuttons-illos-01.png)

## Identifiable

Buttons should indicate that they can trigger an action.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17WEhsSE5Yc2s3R0k%2Fbuttons-illos-02.png)

## Findable

Buttons should be easy to find among other elements, including other buttons.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17emtNMnZoS0Q1b0E%2Fbuttons-illos-03.png)

## Clear

A button’s action and state should be clear.



## Applying color to UI

In a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.

Related Article*arrow_downward*



# Types

There are text, contained, and toggle buttons.

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1rI63_05lNHyMtSwrnzXJ1Erg0TbkSDTY%2Fbuttons-types-all.png)

**Text button** (low emphasis)
Text buttons are typically used for less important actions.
**Outlined Button** (medium emphasis)
Outlined buttons are used for more emphasis than text buttons due to the stroke.
**Contained button** (high emphasis)
Contained buttons have more emphasis, as they use use a color fill and shadow.
**Toggle button**
Toggle buttons group a set of actions using layout and spacing. They’re used less often than other button types.

------

## Anatomy 

Buttons contain one required element and four optional elements.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1CohpRuQZDOxIDHVQgMp4ly0VAZ8KW2jO%2Fbuttons-anatomy-all.png)

Text button 
A. Text label
C. Icon (optional)

Contained button
A. Text label
B. Container
C. Icon (optional)



Outlined button
A. Text label
B. Container
C. Icon (optional)


Toggle button
A. Container
C. Icon



# Text label

Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label...

READ MORE

Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does.

By default Material uses capitalized button text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color, size, or placement.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1EokWBcXKaeD8uTLuFYHneKeCZHTpsgcC%2Fbuttons-text-label-do.png)

Do.

Use capitalization, for languages that allow capitalization.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17RXZoQ29uVlZXeGs%2Fbuttons-elements-text-label-dont-02.png)

Don’t.

Don’t wrap text. For maximum legibility, a text label should remain on a single line.

------

## Hierarchy and placement 

# Hierarchy

A layout should contain a single prominent button that makes it clear that other buttons have less importance in the hierarchy. This high-emphasis button commands...

READ MORE

## A single, prominent button

A layout should contain a single prominent button that makes it clear that other buttons have less importance in the hierarchy. This high-emphasis button commands the most attention.

## Other buttons

An app can show more than one button in a layout at a time, so a high-emphasis button can be accompanied by medium- and low-emphasis buttons that perform less important actions. When using multiple buttons, ensure the available state of one button doesn’t look like the disabled state of another.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17czJ6LUFBUkswdkU%2Fbuttons-layout-diagram-01.png)

A button’s level of emphasis helps determine its appearance, typography, and placement.

# Placement

Multiple button types can be used to express different emphasis levels. A floating action button (FAB) represents the primary action for a screen. Related Article...

READ MORE

Multiple button types can be used to express different emphasis levels.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1_iiovyuaFrJRspG3pZ0qkZKFKZt8jARq%2Fbuttons-layout-when-to-use-02.png)

This screen layout uses:

1. An extended floating action button for the highest emphasis
2. A contained button for high emphasis
3. A text button for low emphasis



## Floating Action Button

A floating action button (FAB) represents the primary action for a screen.

Related Article*arrow_downward*



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17NUF0YS1pZHZwZms%2Fbuttons-layout-do-04.png)

Do.

In a bottom bar, when using multiple buttons, indicate the more important action by placing it in a contained button (next to a text button).

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1oQCxhHdnLgQKW_3fwqpAQBT5ONl_UAkB%2Fbuttons-layout-dont.png)

Don’t.

Avoid using two contained buttons next to one another if they don’t have the same fill color.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1irg4ghZHzb5pR6oCgOYhwk2kyvd0Wy9w%2Fbuttons-layout-do-outlined.png)

Do.

In a bottom bar, when using multiple buttons, you can place a outlined button (medium emphasis) next to a contained button (high emphasis).

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1yt_GtJcPLaweeSS5PDP_iQEkc3jsClZP%2Fbuttons-layout-do-outlined2.png)

Do.

When using multiple buttons in a bottom bar, you can place a text button (low emphasis) next to an outlined button (medium emphasis).

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1T0UVLDLgvcaAchhRhAT8irKXucOvoNr1%2Fbuttons-layout-do-06.png)

Do.

Use a contained button in a bottom sheet next to other important details.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17cjdpT3luZDlpdVU%2Fbuttons-layout-dont-08.png)

Don’t.

Don’t place a button below another button if there is space to place them side by side.

------

## Text button 

# Usage

Text buttons are typically used for less-pronounced actions, including those located: In cards, text buttons help maintain an emphasis on card content. A button’s text...

READ MORE

Text buttons are typically used for less-pronounced actions, including those located:

- In dialogs
- In cards

In cards, text buttons help maintain an emphasis on card content.

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17akh1aHFOZF9FdjQ%2Fbuttons-text-when-to-use-01.png)

Text button

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Z5RDqn4keM2WGm2MS7dn0UjoBG2oIUGj%2Ftext-button-usage-2.png)

Use a text button in snackbars.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ylGHcBJQXKvVDuarTOMsFgos3xo44z9n%2Ftext-button-usage-3.png)

A text button against an image background

## Text label

A button’s text label is the most important element on a button, as it communicates the action that will be performed when the user touches it.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1X7ZHIvRPgmaKt4QAYwUsjFOpltHT6FG1%2Ftext-button-usage-1.png)

Text label using a distinct action

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1P1ErA6WotitY_-tEQY8HNyN1AZFrNDBI%2Ftext-button-text-label-caution.png)

Caution.

Text labels need to be distinct from other elements. If the text label isn’t capitalized, it should use a different color, style, or layout from other text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ZN1vzXmrDrBOlhjGacaGT-v45oyCa_Qd%2Fbuttons-textbutton-text-label-dont-1.png)

Don’t.

Avoid text labels that are too long. They should be concise.

# Placement

Text buttons are often embedded in contained components like cards and dialogs, in order to relate themselves to the component in which they appear. Because...

READ MORE

Text buttons are often embedded in contained components like cards and dialogs, in order to relate themselves to the component in which they appear. Because text buttons don’t have a container, they don’t distract from nearby content.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17azZBS2ZpMlZsMEU%2Fbuttons-text-when-to-use-02.png)

Dialogs use text buttons because the absence of a container helps unify the action with the dialog text. Align text buttons to the right edge for left-to-right scripts.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17Q3FyWDBNd2duRW8%2Fbuttons-text-when-to-use-03.png)

Text buttons minimize distraction from card content.

# States

Text buttons can be placed in front of a variety of backgrounds. Until the button is interacted with, its container isn’t visible. To maintain accessibility,...

READ MORE

Text buttons can be placed in front of a variety of backgrounds. Until the button is interacted with, its container isn’t visible.

To maintain accessibility, Material Design provides baseline opacity values for the color overlays used by states. A brand can adjust opacity values to suit its color scheme.



## States

States are visual representations used to communicate the status of a component or interactive element.

Related Article*arrow_downward*



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F14c0HqGVluF8KDMuij_AV5puYPmorTU2u%2Ftext-buttons-states.png)

Text button states

------

## Outlined button 

# Usage

Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren’t the primary action in an app. Outlined buttons are also a lower...

READ MORE

Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren’t the primary action in an app.

## Alternatives

Outlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons.

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1JQ9DzJZipZfgxJ4oOuvOv-I4GC2LvaJu%2Fbuttons-outlined-usage-01.png)

# Container

Outlined buttons display a stroke around a text label. Stroke can be represented in different ways: In a resting state, outlined buttons should display containment...

READ MORE

Outlined buttons display a stroke around a text label. Stroke can be represented in different ways:

- Set a button’s width to be the size of the text label, with 16dp padding on the left and right
- Set the button’s relative position to the responsive layout grid

------

In a resting state, outlined buttons should display containment with a stroke and no fill.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1lT12LCR3yOwaWQNjFeUqq9CAAaj-BICo%2Fbuttons-outlined-usage-02.png)

Outlined button

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1xk3_ykz5ZP10BcKoMcY1aN9qN6fDwaNO%2Fbuttons-outlined-usage-flexible.png)

Do.

An outlined button’s width is dynamically set to fit the text label.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1JxSchffVaJ6j8u1RsXg-7W0DKdg-0BjC%2Fbuttons-outlined-usage-dont.png)

Don’t.

An outlined button’s width shouldn’t be shorter than its text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F17E4Sqn6-yKajqeA6mWuQy4dUdYAGvreG%2Fbuttons-outlined-usage-caution.png)

Caution.

Protect text when using Outlined buttons in front of images. This image uses a light purple scrim to provide text protection for this outlined button.



# States

Outlined buttons can be placed on top of a variety of backgrounds. Its container is transparent and until the button is interacted with, a color...

READ MORE

Outlined buttons can be placed on top of a variety of backgrounds. Its container is transparent and until the button is interacted with, a color isn’t visible.

To maintain accessibility, Material Design provides baseline opacity values for the color overlays used by states. A brand can adjust opacity values to suit its color scheme.



## States

States are visual representations used to communicate the status of a component or interactive element.

Related Article*arrow_downward*



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1VeAknkDyfsIiVrvEMVovd69hGLdYrlbL%2Foutlined-button-states.png)

Outlined button states

------

## Contained button 

# Usage

Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.

READ MORE

Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F16SaPpmZFcNCy7gWT_RP_5bhZNIPvt8vw%2Fbuttons-contained-do-1.png)

A contained button

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1SzmKmPfztCvyJXvOLT1BdfJ-OhsKqYoX%2Fbuttons-text-label-do-2.png)

Do.

Text labels can be written in sentence case, as long as the button is clearly distinguishable from elements around it.

# Container

Contained buttons display a container around a text label. Containers can be represented in different ways: Contained buttons should display containers with a solid color....

READ MORE

Contained buttons display a container around a text label. Containers can be represented in different ways:

- Set container width to the size of the text label with 16dp padding on the left and right
- Set the container’s relative position to the [responsive layout grid](https://material.io/design/layout/responsive-layout-grid.html#)

------

Contained buttons should display containers with a solid color.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1nqILGS7JjzcsDSuTLJ7GxRIO4z22kKBb%2Fbuttons-contained-do.png)

A contained button with solid color

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1T8fFWArBDSr8J7hMspaNF1H55v81u47o%2Fbuttons-elements-container-flexible.png)

Do.

A button container’s width is dynamically set to fit its text label.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1L8s5rUDPfuShXXR2XQMOO9rW2XPsAvu5%2Fbuttons-elements-container-flexible-dont.png)

Don’t.

A button container’s width shouldn’t be shorter than its text.

Button container width can be set according to the responsive layout grid.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Nu-N8KeHI4vzH9BIEpa2hjsEkrSp9N2F%2Fbuttons-elements-container-extended.png)

Contained button in a responsive layout grid

# Icon

Contained buttons can place icons next to text labels to both clarify an action and call attention to a button.

READ MORE

Contained buttons can place icons next to text labels to both clarify an action and call attention to a button.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17RWttV3c2TmFhTDQ%2Fbuttons-elements-icon-01.png)

Do.

Use icons that clearly communicate their meaning.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17alhIWHItMi0tc2s%2Fbuttons-elements-icon-dont-02.png)

Don’t.

Don’t vertically align an icon and text in the center of a contained button.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4V689etGs17M09PRm51NjdQUVE%2Fbuttons-elements-icon-dont-03.png)

Don’t.

Don’t use two icons in the same button.

# Shadow & elevation

Buttons at higher elevations typically appear more prominent in a design. On press, elevated buttons lift up and the container displays touch feedback.

READ MORE

Buttons at higher elevations typically appear more prominent in a design. On press, elevated buttons lift up and the container displays touch feedback.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F13xttwOjDgUlozIMq8F--9lSF8FasGw9P%2Fbuttons-elements-shadow-elevation.png)

Higher elevation increases the prominence of a contained button.

# States

The following opacity values are recommended for button container fill colors. Each app can alter the overlay values to suit their brand’s color palette. States...

READ MORE

The following opacity values are recommended for button container fill colors. Each app can alter the overlay values to suit their brand’s color palette.



## States

States are visual representations used to communicate the status of a component or interactive element.

Related Article*arrow_downward*



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1sVn3mYbhEDdWau1n2DRo9CCdo6J-3e1g%2Fcontained-buttons-states.png)

Contained button states

------

## Toggle button 

# Usage

Toggle buttons can be used to group related options. To emphasize groups of related toggle buttons, a group should share a common container. Only one...

READ MORE

Toggle buttons can be used to group related options. To emphasize groups of related toggle buttons, a group should share a common container.

## Selected action

Only one option in a group of toggle buttons can be selected and active at a time. Selecting one option deselects any other.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1p-QIDSJDZpaQ2OSUM72HNFWFAYfLDikP%2Fbuttons-toggle-usage.png)

These toggle buttons present options for aligning text to the left, right, and center.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1NyD_U2EBroJbbJR0wWhTcZ5tSsWXrJw_%2Fbuttons-toggle-usage-2.png)

Icons can be used as toggle buttons when they allow selection, or deselection, of a single choice, such as marking an item as a favorite.

# States

A toggle button’s state makes it clear which button is active. Hover and focus states express the available selection options for buttons in a toggle...

READ MORE

## Active and available toggle buttons

A toggle button’s state makes it clear which button is active. Hover and focus states express the available selection options for buttons in a toggle group.

## Disabled toggle buttons

Toggle buttons that cannot be selected can either be given a disabled state, or be hidden.



## States

States are visual representations used to communicate the status of a component or interactive element.

Related Article*arrow_downward*



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ual-GXUAsETAGunFrTagJhSnyCfYH3dD%2Ftoggle-buttons-states.png)

Toggle button states

------

## Theming 

# Crane Material theme

This travel app’s buttons have been customized using Material Theming. Areas of customization include color, typography, and shape. Crane is a travel app that uses...

READ MORE

This travel app’s buttons have been customized using Material Theming. Areas of customization include color, typography, and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1sMX5bSqUQfnxJRHSjBsypB0CWKOKqk3F%2Fbutton-crane-ahero.png)

Crane’s customized buttons



## Crane

Crane is a travel app that uses Material Design components and Material Theming to create a personalized on-brand experience.

Related Article*arrow_downward*



## The Color System

The Material Design color system helps you choose colors for your user interface.

Related Article*arrow_downward*



## Applying color to UI

In a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.

Related Article*arrow_downward*



## Color

Crane’s buttons uses custom color on two elements: the container and text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1h6OLc3XPy1ivhZRbPf5HJGoavpGngQXp%2Fbutton-crane-color.png)

| Element   | Category   | Attribute    | Value       |
| --------- | ---------- | ------------ | ----------- |
| Container | Primary    | ColorOpacity | #5C1349100% |
| Text      | On Primary | ColorOpacity | #FFFFFF100% |

## Typography

Crane’s buttons use custom typography for the button text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1DFynU3FM9_VVh18hQLx08t3VrTMQ4dSs%2Fbutton-crane-type.png)

| Element | Category | Attribute            | Value                     |
| ------- | -------- | -------------------- | ------------------------- |
| Text    | Button   | TypefaceFontSizeCase | RalewaySemiBold14All caps |



## About Shape

Material surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.

Related Article*arrow_downward*



## Understanding typography

Typography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.

Related Article*arrow_downward*



## Shape

Crane’s button containers have custom corner shapes, with a 50% corner radius.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ycmsS0YB91UGVmrv-H0mN52dmdbPeODz%2Fbutton-crane-shape.png)

| Element   | Category  | Attribute  | Value      |
| --------- | --------- | ---------- | ---------- |
| Container | Override* | FamilySize | Rounded50% |

*Crane buttons use an override of the small component shape category size value.

# Fortnightly Material theme

This news app’s buttons have been customized using Material Theming. Areas of customization include color and typography. Fortnightly is a news app that uses Material...

READ MORE

This news app’s buttons have been customized using Material Theming. Areas of customization include color and typography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1mhwFhD5fTtMOr7tXTCEeM8yg-vrJd7zP%2Fbutton-fortnightly-ahero.png)

Fortnightly’s customized buttons



## Fortnightly

Fortnightly is a news app that uses Material Design components and Material Theming to create an on-brand, content-focused experience.

Related Article*arrow_downward*



## The Color System

The Material Design color system helps you choose colors for your user interface.

Related Article*arrow_downward*



## Applying color to UI

In a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.

Related Article*arrow_downward*



## Color

Fortnightly’s buttons uses custom color on two elements: background and text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1_SXC5MhHJoCeUnLk3kpNaI1IoRyhtuE_%2Fbutton-fortnightly-color.png)

| Element    | Category   | Attribute    | Value       |
| ---------- | ---------- | ------------ | ----------- |
| Background | Background | ColorOpacity | #FFFFFF100% |
| Text       | Primary    | ColorOpacity | #661FFF100% |



## Understanding typography

Typography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.

Related Article*arrow_downward*



## Typography

Fortnightly’s buttons use custom typography for the button text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1QNSCCqcGNdr553B5kg4o02XIYRQF6oUG%2Fbutton-fortnightly-type.png)

| Element | Category | Attribute            | Value                                  |
| ------- | -------- | -------------------- | -------------------------------------- |
| Text    | Button   | TypefaceFontSizeCase | Libre FranklinExtraBold14Sentence case |

# Rally Material theme

This personal finance app’s buttons have been customized using Material Theming. Areas of customization include color and typography. Rally is a personal finance app that...

READ MORE

This personal finance app’s buttons have been customized using Material Theming. Areas of customization include color and typography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F15hTy7ghQV05mw7o50a3xS9sSJLM0mN01%2Fbutton-rally-ahero.png)

Rally’s customized buttons



## Rally

Rally is a personal finance app that demonstrates how Material Design can be used for finance.

Related Article*arrow_downward*



## The Color System

The Material Design color system helps you choose colors for your user interface.

Related Article*arrow_downward*



## Applying color to UI

In a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.

Related Article*arrow_downward*



## Color

Rally’s buttons uses custom color on two elements: background and text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1fg8ITUPUB3_9oUNkYqI5wjPIKNFJuJ9v%2Fbutton-rally-color.png)

| Element    | Category | Attribute    | Value       |
| ---------- | -------- | ------------ | ----------- |
| Background | Surface  | ColorOpacity | #3C3C46100% |
| Text       | Primary  | ColorOpacity | #FFFFFF100% |



## Understanding typography

Typography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.

Related Article*arrow_downward*



## Typography

Rally’s buttons use custom typography for the button text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F10PyZ0yZRoHtPlT_vv5u9vqfxSSEde6gQ%2Fbutton-rally-type.png)

| Element | Category | Attribute            | Value                          |
| ------- | -------- | -------------------- | ------------------------------ |
| Text    | Button   | TypefaceFontSizeCase | Roboto CondensedBold14All caps |

# Posivibes Material theme

This social media app’s buttons have been customized using Material Theming. Areas of customization include color, typography, and shape. The Material Design color system helps...

READ MORE

This social media app’s buttons have been customized using Material Theming. Areas of customization include color, typography, and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1AEonUuympG4eNKA8hYmWMt_EMHVX-NZ1%2Fbutton-posivibes-ahero.png)

Posivibe’s customized buttons



## The Color System

The Material Design color system helps you choose colors for your user interface.

Related Article*arrow_downward*



## Applying color to UI

In a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.

Related Article*arrow_downward*



## Color

Posivibe’s buttons uses custom color on two elements: the container stroke and text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F16w6hu525z_el6SWwJlWo9uRoYvzMQswP%2Fbutton-posivibes-color.png)

| Element          | Category  | Attribute    | Value       |
| ---------------- | --------- | ------------ | ----------- |
| Container stroke | Secondary | ColorOpacity | #000000100% |
| Text             | Primary   | ColorOpacity | #000000100% |

## Typography

Posivibe’s buttons use custom typography for the button text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1vw16ef8xPxhJWVaWTt6LX44GU-wIa3gC%2Fbutton-posivibes-type.png)

| Element | Category | Attribute            | Value                          |
| ------- | -------- | -------------------- | ------------------------------ |
| Text    | Button   | TypefaceFontSizeCase | Roboto CondensedBold14All caps |



## About Shape

Material surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.

Related Article*arrow_downward*



## Understanding typography

Typography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.

Related Article*arrow_downward*



## Shape

Posivibe’s button containers have custom corner shapes, with 0dp long cut corners.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F15RlFrty3fUrONQO1BqLsqrpS56cLMz5h%2Fbutton-posivibes-shape.png)

| Element   | Category        | Attribute  | Value        |
| --------- | --------------- | ---------- | ------------ |
| Container | Small component | FamilySize | Cut0;0;0;0dp |

# Reply Material theme

This email app’s buttons have been customized using Material Theming. Areas of customization include color and typography. Reply is an email app that uses Material...

READ MORE

This email app’s buttons have been customized using Material Theming. Areas of customization include color and typography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1AjOnqFVY9fU2ezH86KeJSxE8FfMC8b5P%2Fbutton-reply-ahero.png)

Reply’s customized buttons.



## Reply

Reply is an email app that uses Material Design components and Material Theming to create an on-brand communication experience.

Related Article*arrow_downward*



## The Color System

The Material Design color system helps you choose colors for your user interface.

Related Article*arrow_downward*



## Applying color to UI

In a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.

Related Article*arrow_downward*



## Color

Reply’s buttons uses custom color on four elements: background, icon, icon fill, and text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ryDLgeFRATTDrOa0m7HNKrQrEs18jVwE%2Fbutton-reply-color.png)

| Element    | Category   | Attribute    | Value       |
| ---------- | ---------- | ------------ | ----------- |
| Background | Surface    | ColorOpacity | #FFFFFF100% |
| Icon       | Primary    | ColorOpacity | #344955100% |
| Icon fill  | On Primary | ColorOpacity | #34495530%  |
| Text       | Primary    | ColorOpacity | #344955100% |



## Understanding typography

Typography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.

Related Article*arrow_downward*



## Typography

Reply’s buttons use custom typography for the button text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1KByQYoRhp9pm73aQA23MlDeSNh13cDb0%2Fbutton-reply-type.png)

| Element | Category | Attribute            | Value                        |
| ------- | -------- | -------------------- | ---------------------------- |
| Text    | Button   | TypefaceFontSizeCase | Work SansExtraBold15All caps |

# Shrine Material theme

This retail app’s buttons have been customized using Material Theming. Areas of customization include color, typography, and shape. Shrine is a lifestyle and fashion brand...

READ MORE

This retail app’s buttons have been customized using Material Theming. Areas of customization include color, typography, and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F17I56VDUv1pn81sJllH3Lc9CNQMTbS8jS%2Fbutton-shrine-ahero.png)

Shrine’s customized buttons



## Shrine

Shrine is a lifestyle and fashion brand that demonstrates how Material Design can be used in e-commerce.

Related Article*arrow_downward*



## The Color System

The Material Design color system helps you choose colors for your user interface.

Related Article*arrow_downward*



## Applying color to UI

In a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.

Related Article*arrow_downward*



## Color

Shrine’s buttons uses custom color on three elements: the container, icon, and text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1TOjN07MguVp380tOR5E8Hv9ceOzTyBBe%2Fbutton-shrine-color.png)

| Element   | Category   | Attribute    | Value       |
| --------- | ---------- | ------------ | ----------- |
| Container | Primary    | ColorOpacity | #FEDBD0100% |
| Icon      | On Primary | ColorOpacity | #442C2E100% |
| Text      | On Primary | ColorOpacity | #442C2E100% |

## Typography

Shrine’s buttons use custom typography for the button text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F11Brl7FnmhwxfoRxLvSbbKNcCiTBzn6PL%2Fbutton-shrine-type.png)

| Element | Category | Attribute            | Value                 |
| ------- | -------- | -------------------- | --------------------- |
| Text    | Button   | TypefaceFontSizeCase | RubikMedium14All caps |



## Understanding typography

Typography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.

Related Article*arrow_downward*



## About Shape

Material surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.

Related Article*arrow_downward*



## Shape

Shrine’s button containers have custom corner shapes, with cut corner shapes.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1D3gHt8IEzInmjBkQOYnztlziEtEOOkhm%2Fbutton-shrine-shape.png)

| Element   | Category        | Attribute  | Value                 |
| --------- | --------------- | ---------- | --------------------- |
| Container | Small component | FamilySize | Cut4dp; 4dp; 4dp; 4dp |

------

## Specs 

## Contained Button

- 
- 
- 
- CMeasurement C
- 36Measurement 36
- min-width: 64dpMeasurement min-width: 64dp
- 16Measurement 16
- 16Measurement 16

- 

  

  

  ![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1dLA9_qUYy7CIuH7nK7o_jiLedGN9_sXi%2Fspecs-contained-button.png)



flip

Specs



## Contained Button with icon

- 
- 
- 
- 
- 
- 8Measurement 8
- 12Measurement 12
- 16Measurement 16
- 36Measurement 36
- min-width: 64dpMeasurement min-width: 64dp
- CMeasurement C
- 18

- 

  

  

  ![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1IHNAMHSVv3yapBcSGZUVJdJPl8dHkeVh%2Fspecs-contained-button-with-icon.png)



flip

Specs



## Outlined Button

- 
- 
- CMeasurement C
- 16Measurement 16
- 16Measurement 16
- 36Measurement 36
- min-width: 64dp Measurement min-width: 64dp
- 1Measurement 1



- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1b2CXpWNxh1k2YJUw_6B_CkkZUiHYYrzh%2Fspecs-outlined-button.png)



flip

Specs



## Text Button

- 
- 
- 
- 
- 
- 36Measurement 36
- min-width: 64dpMeasurement min-width: 64dp
- 8Measurement 8
- 8Measurement 8
- CMeasurement C

- 

  

  

  ![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)

  

  



- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1gFlKREGeIBo8WLrP_OA-1Ms16LpzaGp6%2Fspecs-text-button.png)



flip

Specs



## Toggle Buttons

- 
- 
- 
- 
- 48Measurement 48
- 12Measurement 12
- 12Measurement 12
- 12Measurement 12
- 12Measurement 12
- 48Measurement 48
- 1Measurement 1
- 24



- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1gK3LAZc8DnoB8Gtepo2ea3oPFr3h0K5I%2Fspecs-toggle-buttons.png)



flip

Specs





------

## Implementation 

Buttons implementation support for each platform is indicated below.

[![Android Implementation-Buttons](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1G1b7PSStvNP6Zc8UDxetGCIg9DP7l-CW%2Fimplementation-android-platform.png)](https://material.io/go/android-buttons/)

## [Android Material Component](https://material.io/go/android-buttons/)

**Status:** Available

[![IOS Implementation-Buttons](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1KvBnEg549lXWpMcyjxX-uLoqsC0f0gFO%2Fimplementation-ios-platform.png)](https://material.io/go/ios-buttons/)

## [IOS Material Component](https://material.io/go/ios-buttons/)

**Status:** Available

[![Flutter Implementation-Buttons](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Pe_LUCnv4b2W9T7kboVYnSQYDBziSMy4%2Fimplementation-flutter-platform.png)](https://material.io/go/flutter-buttons/)

## [Flutter Material Component](https://material.io/go/flutter-buttons/)

**Status:** Available

[![Web Implementation-Buttons](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1JR5Kx6oIUFifLBoZIC64MzOFZvRzVp68%2Fimplementation-web-platform.png)](https://material.io/go/web-buttons/)

## [Web Material Component](https://material.io/go/web-buttons/)

**Status:** Available