# Sheets: Side

Material UI (Core) Component

Reference: https://material.io/design/components/sheets-side.html



------

# Sheets: side 

## Side sheets are surfaces containing supplementary content that are anchored to the left or right edge of the screen.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1d79RqdXQbrZYpmhxo2H44Ovp-iWr95Zw%2Fside-sheet-intro.png)

CONTENTS[Usage](https://material.io/design/components/sheets-side.html#usage)[Anatomy](https://material.io/design/components/sheets-side.html#anatomy)[Behavior](https://material.io/design/components/sheets-side.html#behavior)[Placement](https://material.io/design/components/sheets-side.html#placement)[Standard side sheet](https://material.io/design/components/sheets-side.html#standard-side-sheet)[Modal side sheet](https://material.io/design/components/sheets-side.html#modal-side-sheet)[Theming](https://material.io/design/components/sheets-side.html#theming)[Specs](https://material.io/design/components/sheets-side.html#specs)[Implementation](https://material.io/design/components/sheets-side.html#implementation)

------

## Usage 

Side sheets are supplementary surfaces primarily used on tablet and desktop.

They come in two types:

## Standard side sheets

**Standard side sheets** display content that complements the screen’s primary content. They remain visible while users interact with primary content.

Common uses include

- Displaying a list of actions that affect the screen’s primary content, such as filters
- Displaying supplemental content and features

## Modal side sheets

**Modal side sheets** are used on mobile instead of standard side sheets, due to limited screen size. They can display the same types of content as standard side sheets, but must be dismissed in order to interact with the underlying content.

[CardsCards contain content and links about a single subject.Related Article*arrow_downward*](https://material.io/design/components/cards.html#cards)

[DialogsDialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks. They remain until dismissed or a required action has been taken.Related Article*arrow_downward*](https://material.io/design/components/dialogs.html#dialogs)

[Sheets: BottomBottom sheets are surfaces containing supplementary content that are anchored to the bottom of the screen.Related Article*arrow_downward*](https://material.io/design/components/sheets-bottom.html#sheets-bottom)



------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1zFSicOP2kXCfIa2oPADkknpUossUMxd1%2Fusage-standard.png)

This standard side sheet on desktop contains filters that control the files shown in the primary UI region.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1THURJGiciLffp9izlAI2Wt4dTVhf21eV%2Fusage-modal.png)

A modal side sheet on mobile is used instead of a standard side sheet, because of the limited screen space.





# Principles

Side sheets contain content that supplements the screen’s primary UI region. Side sheets display a wide variety of content and layouts. Side sheets can be...

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1wq6qSqYqvX2JsYRqJi3TFKKnLEYpaVjz%2Fside-sheets-illos-04.png)

## Supporting

Side sheets contain content that supplements the screen’s primary UI region.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1QJ-LQdi6ge8HvO_U1df0mzxsSiKGV_lp%2Fside-sheets-illos-02.png)

## Flexible

Side sheets display a wide variety of content and layouts.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1i2XWgoEvDYE2sLSCmUvKr_1MvpPqq4G8%2Fside-sheets-illos-03.png)

## Contextual

Side sheets can be visible or hidden based on screen size or user need, and they often become bottom sheets on mobile.

------

## Anatomy 

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1EWkevIj0FrZEepcdeh9105UUhwPJ60PF%2Fanatomy.png)

### 1. Sheet 2. Content 3. Scrim (Modal only)  



# Sheet

Side sheets are anchored to the left or right edge of the screen. They are a fixed width and typically span the height of the...

READ MORE

Side sheets are anchored to the left or right edge of the screen. They are a fixed width and typically span the height of the screen. Their dimensions depend on how the app’s layout is subdivided into UI regions.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Re62RvcRi8DEviG7xFYojf8tc-xNpwMk%2Fanatomy-sheet-placement-do.png)

Do.

Place side sheets along the left or right edge of the screen.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F15keOQc22E9F-gF576si1kTvsalxc0gPb%2Fanatomy-sheet-placement-dont.png)

Don’t.

Don’t fully inset a side sheet from the screen edges. This makes the sheet’s position and scroll behavior unclear, while obscuring primary content.



# Contents

Side sheets can display a wide variety of content and layouts, ranging from a list of actions to supplemental content in a tabular layout.

READ MORE

Side sheets can display a wide variety of content and layouts, ranging from a list of actions to supplemental content in a tabular layout.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1EhVgN3boZ9rc2hyz30WTkNpvH6SbtSxc%2Fanatomy-contents-metadata.png)

Metadata about a photo in a standard side sheet

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1KDLtVtXltAnstSSlZEBCnJ2vsLclQ1aT%2Fanatomy-contents-filters.png)

A list of filters in a modal side sheet



------

## Behavior 



# Scrolling

Side sheets can be vertically scrolled independent of the rest of the UI. This allows their scroll position and contents to persist while the page...

READ MORE

Side sheets can be vertically scrolled independent of the rest of the UI. This allows their scroll position and contents to persist while the page is scrolled, and vice versa.

Side sheets cannot be horizontally scrolled.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Do.

Side sheets can vertically scroll internally when their content exceeds the screen height.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Puh4H_Y012yGzMvmCIAlzytNGqKfAbkW%2Fbehavior-scrolling-dont.png)

Don’t.

Don’t allow horizontal scrolling in a side sheet or layout in a way that suggests horizontal scrolling. A side sheet’s narrow width leaves limited space to fully view items.

------

## Placement 



# Screen size

Side sheets that are modal on mobile, due to limited screen width, can become standard side sheets on tablet and desktop. The reverse is also...

READ MORE

Side sheets that are modal on mobile, due to limited screen width, can become standard side sheets on tablet and desktop. The reverse is also true.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1YNxbmdZGkH9ob6qa5yNiP8xOE7TnhL0p%2Fplacement-screen-size-do.png)

Do.

The filters for this app are placed in a standard side sheet on desktop (1) and become modal on mobile due to limited screen width (2).



# Pairing with navigation drawers

Side sheets should be placed on the opposite side of a side navigation drawer to avoid obstructing the UI or causing confusion about the sheet’s...

READ MORE

Side sheets should be placed on the opposite side of a side navigation drawer to avoid obstructing the UI or causing confusion about the sheet’s functionality.

Navigation drawers are anchored to the left screen edge in left-to-right languages, and on the right for right-to-left languages.

[Navigation drawerNavigation drawers provide access to the navigation destinations of your app.Related Article*arrow_downward*](https://material.io/design/components/navigation-drawer.html#navigation-drawer)



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1PzVqtCENXLP80UCcsu-EMdGViXRtTWdg%2Fplacement-nav-drawer-do.png)

Do.

Place a side sheet on the opposite edge of a navigation drawer. This app uses a left-to-right layout, so the navigation drawer is placed on its left edge (1) and a standard side sheet is anchored to the right edge (2).

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Tibt0qYs5Prd5wyBsfu6HvvIsLFSPq79%2Fplacement-nav-drawer-dont.png)

Don’t.

Don’t place a side sheet (2) along the same screen edge as a navigation drawer (1), as the sheet may get covered frequently by an elevated navigation drawer (or be confused for navigation itself).

------

## Standard side sheet 



# Usage

Standard side sheets co-exist with the screen’s primary UI region, which allows viewing and interaction with both surfaces. They are used only on tablet and...

READ MORE

Standard side sheets co-exist with the screen’s primary UI region, which allows viewing and interaction with both surfaces. They are used only on tablet and desktop.

Standard side sheets are commonly used for:

- Keeping a feature or content on-screen, if the primary UI region is frequently scrolled or panned
- Contextual actions that affect the primary region, such as filters
- Supporting information or metadata, such as location or photo details
- Short tasks that can be accomplished in a single screen, such as configuring options or specifying item details before making a purchase



# Behavior

Standard side sheets that aren’t permanent should include affordances to open and close the sheet. Common open affordances include action icons in top app bars...

READ MORE

## Opening and closing

Standard side sheets that aren’t permanent should include affordances to open and close the sheet.

Common open affordances include action icons in top app bars or buttons in the screen layout. While a single affordance can be used to toggle the visibility of the sheet on or off, a separate close affordance within the sheet is recommended.

------

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>



[UI regionsThe Material Design responsive layout grid adapts to screen size and orientation. This UI guidance includes a flexible grid that ensures consistency across layouts.Related Article*arrow_downward*](https://material.io/design/layout/responsive-layout-grid.html#ui-regions)





# Placement

Standard side sheets can be set at the same elevation as the main content or placed above it, at 8dp. Their elevation can be used...

READ MORE

## Elevation

Standard side sheets can be set at the same elevation as the main content or placed above it, at 8dp.

Their elevation can be used to indicate their hierarchical relationship to content or affect its behavior in the layout grid.

**C****oplanar elevation**

Coplanar elevation places the sheet at the same elevation as content, indicating the two surfaces are related and of equal importance. Coplanar sheets affect the layout grid and shrink the available area for content.

**Above content**

When the standard side sheet is elevated above content, it can indicate hierarchical meaning or simply be for layout purposes. Surfaces elevated in front of others often convey more importance or control over those behind them. They don’t affect the layout grid, and should only be used for temporarily visible sheets since they obscure content.

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F107WzULwFKvQXqT7m7VDrk9Izb-lIuRzc%2Fstandard-placement-elevation-coplanar.png)

This filter sheet is coplanar with the main UI region, indicating its connection to content and allowing both regions to be fully visible.

[Elevation hierarchyElevation is the relative distance between two surfaces along the z-axis.Related Article*arrow_downward*](https://material.io/design/environment/elevation.html#elevation-hierarchy)



------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1e-b0LULNb-Jn1gvrV-FSaCjbt93NqhMK%2Fstandard-placement-elevation-above.png)

The metadata for this photo is elevated above it to avoid resizing the image as the sheet opens and closes.

------

## Modal side sheet 



# Usage

Modal side sheets present content while blocking interaction with the rest of the screen. On mobile, they are used instead of standard side sheets. On...

READ MORE

Modal side sheets present content while blocking interaction with the rest of the screen.

On mobile, they are used instead of standard side sheets. On larger screens, they can help focus a user’s attention on a key flow, such as making a purchase.



# Behavior

Modal side sheets have a default elevation of 16dp. This elevation allows them to appear over all UI elements. A modal side sheet places all...

READ MORE

## Elevation and scrim

Modal side sheets have a default elevation of 16dp. This elevation allows them to appear over all UI elements.

A modal side sheet places all content and UI elements behind a scrim, which indicates that they will not respond to user interaction. Tapping the scrim dismisses both the modal side sheet and scrim from view.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1rOQnbucurwYeyklHbwwKSo9RwR_XGZw1%2Fmodal-behavior-scrim-do.png)

Do.

A visible scrim informs users they cannot interact with the rest of the screen.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1OoiYZ2p6BMhdCkCk6jOcbyihf-vCi3TF%2Fmodal-behavior-scrim-dont.png)

Don’t.

Don’t use an invisible scrim. This can mislead users about their ability to interact with the rest of the screen.

## Control

Modal side sheets appear when triggered by a user action, such as tapping a button or action icon in a top app bar. They can be dismissed by:

- Tapping the scrim
- Swiping towards the sheet’s anchoring edge (left or right)
- Using a close affordance within the side sheet’s header, if available

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1pCJ3vPwfO9AnJxZG8GdlLXeQlnmGspL2%2Fmodal-behavior-control-tap.png)

Tapping the scrim will dismiss a modal side sheet.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1UtuaR66ajbQ3tQQYW_U0n_udMvu82-jz%2Fmodal-behavior-control-swipe.png)

A modal side sheet can be dismissed by swiping towards the sheet’s anchoring edge.

------

## Theming 



# Crane Material Theme

This travel app’s side sheets have been customized using Material Theming, specifically using customized color. Crane is a travel app that uses Material Design components...

READ MORE

This travel app’s side sheets have been customized using Material Theming, specifically using customized color.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1EnW_h4OmruNt5TQJ9UeybJHvPYUb3iT_%2Fsheets-crane-ahero.png)

Crane’s customized side sheets

[CraneCrane is a travel app that uses Material Design components and Material Theming to create a personalized on-brand experience.Related Article*arrow_downward*](https://material.io/design/material-studies/crane.html#crane)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Crane’s side sheets use custom color on three elements: the container, text, and selection controls.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1RHK0mHX690o-M2h_t5znXeqo8FedT7-H%2Fsheets-crane-color.png)

| Element            | Category   | Attribute    | Value       |
| ------------------ | ---------- | ------------ | ----------- |
| Container          | Surface    | ColorOpacity | #FFFFFF100% |
| Text               | On Surface | ColorOpacity | #000000100% |
| Selection controls | Secondary  | ColorOpacity | #E30425100% |

------

## Specs 

## Modal side sheet (Mobile)

- 
- 
- 40Measurement 40
- 16Measurement 16
- 56Measurement 56
- 56 Measurement 56

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  



- 

  

  

  

  

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1sI5KbHekEzZVZ_IDr-ggmAXo5e0nVHQs%2Fspecs-sheet-side-mobile-modal.png)



*flip*

Specs



## Standard side sheet (Desktop)

- 
- 
- 
- 
- 320 Measurement 320
- 44Measurement 44
- 20Measurement 20
- 16Measurement 16
- 64Measurement 64
- 16Measurement 16
- 24

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  



- 

  

  

  

  

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1McREBwiFeg2vOixV5oHO_OMyHHtizWHW%2Fspecs-sheet-side-desktop-standard.png)



*flip*

Specs



------

## Implementation 

Side sheets implementation support for each platform is indicated below.

[![Android Implementation-Side sheets](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1WYrsS_x96iCHm5JVXgjcRHTxzn47EbdD%2Fimplementation-android-platform.png)](https://material.io/go/android-sheets-side/)

## [Android Material Component](https://material.io/go/android-sheets-side/)

**Status:** Available

[![IOS Implementation-Side sheets](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1_nzfGC0JXTsQgkqMFfnQgk7Iy3rpcQIu%2Fimplementation-ios-platform-unavail.png)](https://material.io/go/ios-sheets-side/)

## IOS Material Component

**Status:** Planned

[![Flutter Implementation-Side sheets](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1tdSRMheIYnqeq5kl4accoj4P5DYg6be2%2Fimplementation-flutter-platform-unavail.png)](https://material.io/go/flutter-sheets-side/)

## Flutter Material Component

**Status:** Planned

[![Web Implementation-Side sheets](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1dZ643wHxfTof8BNdBvptn9xKZyej8Ch3%2Fimplementation-web-platform-unavail.png)](https://material.io/go/web-sheets-side/)

## Web Material Component

**Status:** Planned