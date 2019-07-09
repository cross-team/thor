# Sheets: Bottom

Material UI (Core) Component

Reference: https://material.io/design/components/sheets-bottom.html



---

# Sheets: bottom 

## Bottom sheets are surfaces containing supplementary content that are anchored to the bottom of the screen.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F15UG-wMUArpc8e1dJQMurk72FPJuoWsPX%2Fbottom-sheet-intro.png)

CONTENTS[Usage](https://material.io/design/components/sheets-bottom.html#usage)[Anatomy](https://material.io/design/components/sheets-bottom.html#anatomy)[Behavior](https://material.io/design/components/sheets-bottom.html#behavior)[Standard bottom sheet](https://material.io/design/components/sheets-bottom.html#standard-bottom-sheet)[Modal bottom sheet](https://material.io/design/components/sheets-bottom.html#modal-bottom-sheet)[Expanding bottom sheet](https://material.io/design/components/sheets-bottom.html#expanding-bottom-sheet)[Theming](https://material.io/design/components/sheets-bottom.html#theming)[Specs](https://material.io/design/components/sheets-bottom.html#specs)[Implementation](https://material.io/design/components/sheets-bottom.html#implementation)

------

## Usage 

Bottom sheets are supplementary surfaces primarily used on mobile. There are three types suitable for different use cases:

- **Standard bottom sheets** display content that complements the screen’s primary content. They remain visible while users interact with the primary content.
- **Modal bottom sheets** are an alternative to inline menus or simple dialogs on mobile and provide room for additional items, longer descriptions, and iconography. They must be dismissed in order to interact with the underlying content.
- **Expanding bottom sheets** provide a small, collapsed surface that can be expanded by the user to access a key feature or task. They offer the persistent access of a standard sheet with the space and focus of a modal sheet.

[CardsCards contain content and links about a single subject.Related Article*arrow_downward*](https://material.io/design/components/cards.html#cards)

[MenusMenus display a list of choices on temporary surfaces.Related Article*arrow_downward*](https://material.io/design/components/menus.html#menus)

[Sheets: SideSide sheets are surfaces containing supplementary content that are anchored to the left or right edge of the screen.Related Article*arrow_downward*](https://material.io/design/components/sheets-side.html#sheets-side)



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1gyJUH0iRN55Zt4Kok16aCfilak4QWzi0%2Fusage-standard.png)

### Standard bottom sheet

A user can view and interact with a standard bottom sheet and the rest of the screen, useful for multi-tasking. The music player in this standard bottom sheet allows users to control their music while browsing albums.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1l977rQR5188GXu1p8Ci1NKSC0nLDIS0v%2Fusage-modal.png)

### Modal bottom sheet

A user must interact with or dismiss a modal bottom sheet. Their blocking behavior make them suitable for menus, such as in this files app, to help users focus on their available choices.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1H-6B4aN4_U03u5QAYIidANyALuxIkC69%2Fusage-expanding.png)

### Expanding bottom sheet

A user can tap an expanding bottom sheet when needed to access its full contents. The collapsed state can be used an indicator of the feature’s current status, such as the number of selected items or unread messages.





# Principles

Bottom sheets contain content that supplements the screen’s primary UI region. Bottom sheets can display a wide variety of content and layouts. Bottom sheets are...

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F18YD31MhovXCmF4WesC4LN2CBpuU1wCYY%2Fsheets-bottom-illos-01.png)

## Supporting

Bottom sheets contain content that supplements the screen’s primary UI region.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F106-FIS-U_KCElYX0KMSRzxiB35xnvfZ-%2Fsheets-bottom-illos-03.png)

## Flexible

Bottom sheets can display a wide variety of content and layouts.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1EnHB0ouAdhd5pDJtrjzaFzJQ_id3pLpN%2Fsheets-bottom-illos-02.png)

## Ergonomic

Bottom sheets are easy to reach on a mobile device.

------

## Anatomy 

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F186Ay__j_pDHIIzB9ke4M5Ye1XJC1HQEM%2Fanatomy.png)

1. Sheet
2. Contents
3. Scrim (Modal only)



# Sheet

Bottom sheets are anchored to the bottom edge of the screen and appear in front of other UI elements. Standard and modal bottom sheets are...

READ MORE

Bottom sheets are anchored to the bottom edge of the screen and appear in front of other UI elements. Standard and modal bottom sheets are full-width on mobile and can be inset or full-width on tablet or desktop.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ENyK4zHmr3lbLgbR22-7VjiyRyzVO7ZI%2Fanatomy-sheet-placement-do.png)

Do.

A bottom sheet is anchored to the bottom edge of the screen.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1uMWZzTku4ngb02PsrVtYfv8iibni2oiL%2Fanatomy-sheet-placement-dont.png)

Don’t.

Don’t inset all sides of a bottom sheet from screen edges. This can make it hard to see and allow it to be confused for other components, such as snackbars.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1gen_wrwpwCmIlGJowLAKg64Qoki8taa2%2Fanatomy-sheet-desktop.png)

Standard bottom sheet inset on desktop



# Contents

Bottom sheets can display a wide variety of content and layouts, ranging from menu items (in list and grid layouts), to supplemental content laid out...

READ MORE

Bottom sheets can display a wide variety of content and layouts, ranging from menu items (in list and grid layouts), to supplemental content laid out according to the layout grid.

Content from a bottom sheet that initially appears below the screen edge can become visible when the sheet is dragged into view.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1uiZmXDew-Pm06Vln6Io2JTszlbGjOXEe%2Fanatomy-contents-list.png)

Menu of actions (in a list) inside a modal bottom sheet

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1da87jIO5mur4d_CfoWe6PFFWiMgKJaoO%2Fanatomy-contents-grid.png)

Menu of apps (in a grid layout) inside a modal bottom sheet

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F11OfhrcSIkQmfj8wHMN4___5jdIjQUIkY%2Fanatomy-contents-partial.png)

The location information in this standard bottom sheet initially extends below the screen edge. It can be dragged into view.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1HGv_tpLnY9QGWXHytowWi0a9O0B68bOr%2Fanatomy-contents-full.png)

This music player has been made fully visible to reveal a track list beneath the player.

------

## Behavior 



# Visibility

When bottom sheets initially appear on screen, they may contain content that extends below the bottom of the screen. They can be swiped or dragged...

READ MORE

## Initial appearance

When bottom sheets initially appear on screen, they may contain content that extends below the bottom of the screen. They can be swiped or dragged up to become full-screen. Depending on the content, bottom sheets can also become full-screen by tapping on their surface or an expand icon.

## Full-screen

When full-screen, bottom sheets can be internally scrolled to reveal additional content. A toolbar should be used to provide a collapse or close affordance to exit this view.

<video aria-describedby="behavior-figure-caption-0" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Do.

Partially visible bottom sheets can be dragged to full-screen view and scroll internally.

<video aria-describedby="behavior-figure-caption-1" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Do.

Include a close affordance in a full-height modal bottom sheet to dismiss the sheet.

------

## Standard bottom sheet 



# Usage

Standard bottom sheets co-exist with the screen’s main UI region and allow for simultaneously viewing and interacting with both regions. They are commonly used to...

READ MORE

Standard bottom sheets co-exist with the screen’s main UI region and allow for simultaneously viewing and interacting with both regions. They are commonly used to keep a feature or secondary content visible on screen when content in main UI region is frequently scrolled or panned.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1rHpxlkMgBKp_I9Eva6aC16tpaeolyy9n%2Fstandard-usage-content.png)

Do.

Standard bottom sheets can contain supplementary content that continues below the screen, such as location information over a map.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F12XEzozvtJXJtfAl6p7XmNzWsqoHK4aO1%2Fstandard-usage-feature.png)

Do.

Use a standard bottom sheet to persist an important feature such as media controls in a music app.



# Behavior

Standard bottom sheets remain on-screen when a user interacts with the main UI region or the sheet itself. They have a default elevation of 8dp,...

READ MORE

## Interaction

Standard bottom sheets remain on-screen when a user interacts with the main UI region or the sheet itself. They have a default elevation of 8dp, which allows content in the main UI region behind to scroll or pan and for the sheet to temporarily cover the main UI region when made full-screen. At full-screen height, they should contain a collapse icon in an app bar to return to their initial position.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1DrttY-lWiK_HxgNEH2niRpyUqHfvcjhY%2Fstandard-behavior-interaction-drag.png)

Do.

Standard bottom sheets are elevated above the main UI region so their visibility is not affected by panning or scrolling.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F18IiOz7xuVCVouOPrOjIGItpCMwJ5z8H6%2Fstandard-behavior-interaction-scroll.png)

Do.

This music player in a standard bottom sheet remains on-screen as the user browses available music.



# Placement

The contents of standard bottom sheets on mobile can be moved into side sheets on larger screen sizes given the additional horizontal space. Side sheets...

READ MORE

The contents of standard bottom sheets on mobile can be moved into side sheets on larger screen sizes given the additional horizontal space.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F12fiIOKSBCqjFRePXnWZnQ88oGFWhfBXv%2Fstandard-placement-mobile.png)

On mobile, the location information for this map is displayed in a standard bottom sheet due to limited screen width.

[Sheets: SideSide sheets are surfaces containing supplementary content that are anchored to the left or right edge of the screen.Related Article*arrow_downward*](https://material.io/design/components/sheets-side.html#sheets-side)



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F16fve1jdc23WUaFbeNXPwaiWyfP_HTUFB%2Fstandard-placement-desktop.png)

On desktop, the location information for this map is displayed in side sheet because screen widths are larger than screen heights.

------

## Modal bottom sheet 



# Usage

Modal bottom sheets present a set of choices while blocking interaction with the rest of the screen. They are an alternative to inline menus and...

READ MORE

Modal bottom sheets present a set of choices while blocking interaction with the rest of the screen. They are an alternative to inline menus and simple dialogs on mobile, providing additional room for content, iconography, and actions.

Modal bottom sheets are used in mobile apps only.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1XSxAfCWJqiC7_k4hoG19b4lVjJMJCjHo%2Fmodal-usage-overflow.png)

Do.

Modal bottom sheets can be used instead of menus to present additional screen actions.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1UwO1hSg7L1rVggHB8BpxYZGka9L9b7qV%2Fmodal-usage-cross-app.png)

Do.

Use a modal bottom sheet to provide deep links to another app.



# Behavior

Modal bottom sheets have a default elevation of 16dp. This elevation allows them to appear over most UI elements and allows them to be pulled...

READ MORE

## Elevation and scrim

Modal bottom sheets have a default elevation of 16dp. This elevation allows them to appear over most UI elements and allows them to be pulled up in front of the entire UI to display more options.

A modal bottom sheet causes all content and UI elements behind it to display a scrim, which indicates that they will not respond to user interaction. Tapping the scrim dismisses both the modal bottom sheet and scrim from view.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Do.

Use a visible scrim with modal bottom sheets to inform users they cannot interact with the rest of the screen.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Don’t.

Don’t use an invisible scrim for modal bottom sheets. This can mislead users about their ability to interact with the rest of the screen.

## Visibility

To provide initial access to its top actions, the initial vertical position of modal bottom sheets is capped at 50% of the screen height.

Modal bottom sheets whose contents exceed 50% of the screen height can then be pulled across the full screen, scrolling internally to access their remaining items.

| Sheet height                                   | Visibility and behavior                                      |
| ---------------------------------------------- | ------------------------------------------------------------ |
| Under 50% of screen height                     | Visible at full height                                       |
| 50 to 100% of screen height                    | Partially visibility at 50% of screen height.  On scroll or surface tap, reveal full sheet. |
| Greater than or equal to 100% of screen height | Partially visible at 50% of screen height.  On scroll or container tap, move to top of screen and scroll contents internally.  Add internal action to close. |

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F11Ozux0Ar4ZlTr0oRg4csXXNfjKdwic1h%2Fmodal-behavior-visibility-under-half-do.png)

Do.

Modal bottom sheets with few items are fully visible upon opening.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1xvqxV9p40rnXtVpkK7mPbi5XPqTIX5ko%2Fmodal-behavior-visibility-over-half-dont.png)

Don’t.

Don’t make tall bottom sheets full-screen upon opening. This places the top content immediately out of reach for users on mobile devices.

## Control

Modal bottom sheets appear when triggered by a user action, such as tapping a button or an overflow icon. They can be dismissed by:

- Tapping a menu item or action within the bottom sheet
- Tapping the scrim
- Swiping the sheet down
- Using a close affordance within the bottom sheet’s top app bar, if available

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1sbr84Gqfhcdz9ch3MxwGYeeegxXHnvTP%2Fmodal-behavior-dismissal-tap.png)

Do.

Tapping the scrim dismisses a modal bottom sheet.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F18m3oFO85fgCjC7T9p4luBZhmbg6zZhew%2Fmodal-behavior-dismissal-swipe.png)

Do.

A modal bottom sheet can be dismissed by swiping the sheet down.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F125yJb9HggawiDdNSRAtRtsydje0FHwsp%2Fmodal-behavior-dismissal-close.png)

Do.

Display a close affordance in a full-screen modal bottom sheet.





# Placement

Modal bottom sheets are most effective on small screens. Menus display a list of choices on temporary surfaces. Related Article arrow_downward Dialogs inform users about...

READ MORE

Modal bottom sheets are most effective on small screens.

[MenusMenus display a list of choices on temporary surfaces.Related Article*arrow_downward*](https://material.io/design/components/menus.html#menus)

[DialogsDialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks. They remain until dismissed or a required action has been taken.Related Article*arrow_downward*](https://material.io/design/components/dialogs.html#dialogs)



On larger screens, use menus or dialogs to create clear visual connections to the triggering UI element.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1UPs5DGL5jxMx271nOeUoPU5ws25kxYMb%2Fmodal-placement.png)

An overflow menu using a bottom sheet on mobile (1) and an inline menu on desktop (2).

------

## Expanding bottom sheet 



# Usage

An expanding bottom sheet is a surface anchored to the bottom of the screen that users can expand to access a feature or task. It...

READ MORE

An expanding bottom sheet is a surface anchored to the bottom of the screen that users can expand to access a feature or task. It can be used for:

- **Persistently displaying a cross-app feature**, such as a shopping cart
- **Collecting and acting on user selections** from a set of items, such as photos in a gallery
- **Supporting tasks**, such as chat and comments
- **Indirect navigation** between items, such as videos in a playlist

Expanding bottom sheets are recommended for use on mobile and tablet.

<video aria-describedby="expanding-bottom-sheet-figure-caption-0" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Do.

Place supporting features, such as chat, in an expanding bottom sheet. In this example, an expanding bottom sheet allows users to switch between viewing a product and contacting customer service.

<video aria-describedby="expanding-bottom-sheet-figure-caption-1" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Do.

Use an expanding bottom sheet for advanced item selection. In this photos app, the expanded sheet allows users to review and take action on selected images.

Expanding bottom sheets and floating action buttons shouldn’t be used for the same purposes.

- **Floating action buttons** are used for actions only, and they don’t respond to a user’s interaction with the rest of the screen. They can transform into larger surfaces to allow a user to complete an action.
- **Expanding bottom sheets** transform into larger surfaces and can update their content to reflect user interactions.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1f9OvnGqsZNMC7cwYGictHQhySG3Sn5Au%2Fexpanding-usage-do.png)

Do.

Use an expanding bottom sheet to give access to a feature. It can also display updates on the status of that feature.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1So1c4ur93lQ53i7djfer9ozTovf5kkMQ%2Fexpanding-usage-dont.png)

Don’t.

Don’t use a floating action button in place of an expanding bottom sheet. Floating action buttons are meant for actions only.



# Anatomy

Expanding bottom sheets are anchored to the bottom corner of the screen. They have two states: a small, collapsed state and a larger, expanded state....

READ MORE

Expanding bottom sheets are anchored to the bottom corner of the screen. They have two states: a small, collapsed state and a larger, expanded state.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F18EHVSk7s4hDz0XXwTteuDvCcs3Dv9DFZ%2Fexpanding-anatomy.png)

**Collapsed state**

1. Container
2. Icon
3. Label (Optional)

**Expanded state**

1. Header
2. Close action
3. Label
4. Content

## Collapsed

When collapsed, an expanding bottom sheet is intended to be small and informative.

- It can use **shape and color** to express that it is interactive.
- An **icon** is required at minimum, and larger screen sizes should also include a short text label.
- To avoid blocking content, the **width** shouldn’t exceed half the screen.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1RTePBaYi0hLAKwJSSLy-aJxPt_pdzwBp%2Fexpanding-anatomy-collapsed-do.png)

Do.

Use a short label in the collapsed state of an expanding bottom sheet to explain the feature or track updates, such as the number of unread messages.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1wO-VBwTlJfl7Jrk6OroTs3k9R-ZZlV5A%2Fexpanding-anatomy-collapsed-dont.png)

Don’t.

Don’t increase the height or width of a collapsed expanding bottom sheet by stacking elements, wrapping text, or using long labels.

## Expanded

When expanded, an expanding bottom sheet is full-screen on mobile (1), but can be smaller on tablet and desktop based on its content (2).

- It contains a fixed header with a **title** and an **affordance to collapse** the sheet.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Kp_Osn1GKwJpVV0HbZXr5Ebjo7xewr0k%2Fexpanding-anatomy-expanded.png)

This bottom sheet covers the full screen on mobile (1). On tablet, it’s shorter to keep the main content visible (2) (Tablet example scaled to 62.5%.)



# Behavior

Expanding bottom sheets can be expanded and collapsed.

READ MORE

## Controls

Expanding bottom sheets can be expanded and collapsed.

- When **collapsed**, the entire container is interactive, and tapping it expands the sheet.
- Once **expanded**, the sheet displays an app bar with an action icon that enables collapsing the sheet. In addition, it can display a contextual action in the sheet that completes a task, such as “Checkout”, “Submit”, or “Download” buttons.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1kpTaYTJcdfq0sI9IdXWu8WMhznj5qda5%2Fexpanding-behavior-control-collapsed-do.png)

Do.

A collapsed bottom sheet expands the sheet when tapped.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1J-4_8FJ7Ee8UuC7LBJRQCnE8ye6X_cyv%2Fexpanding-behavior-control-collapsed-dont.png)

Don’t.

Don’t add additional actions to a collapsed bottom sheet. Those actions should only appear when the sheet is expanded, in the expanded area.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1nPRcvWOZFx5uMs6svKpZNnulhMUo7NKY%2Fexpanding-behavior-control-expanded.png)

Expanded bottom sheets must contain a dedicated affordance to collapse, such as an action icon (1). They can also be dismissed by an embedded action that completes the sheet’s task, such as the “Save” button in this image selection screen (2).



# Placement

Expanding bottom sheets are fixed to the bottom, trailing corner of the screen to minimize obstructing the screen’s main content. On mobile devices, an expanding...

READ MORE

Expanding bottom sheets are fixed to the bottom, trailing corner of the screen to minimize obstructing the screen’s main content.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1dMPNxJaJuRfo2u9zWjTD46C3V6ERtG4f%2Fexpanding-placement-location-do.png)

Do.

Place expanding bottom sheets along the trailing edge of the screen. In this layout, the page’s headings can be read without interruption.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1bhLg9r9Pwt6oMOAY41B_ye7anTFys0Wi%2Fexpanding-placement-location-dont.png)

Don’t.

Don’t place expanding bottom sheets along the leading edge of the screen. In this layout, the placement of the collapsed sheet obstructs headings and actions.

## Mobile

On mobile devices, an expanding bottom sheet affects other bottom-aligned components. It could obstruct important features such as bottom navigation, or create confusion when placed next to a floating action button.

The following recommendations suggest when and how to pair an expanding bottom sheet with nearby components:

| **Component**                    | **Pair with an expanding bottom sheet?** | **Recommendation**                                           |
| -------------------------------- | ---------------------------------------- | ------------------------------------------------------------ |
| Bottom navigation                | Caution                                  | Place a collapsed sheet above bottom navigation. Hide bottom navigation on scroll and when a sheet expands. |
| Bottom app bar                   | No                                       | A bottom app bar would obstruct a collapsed sheet.           |
| Floating action button: Regular  | No                                       | Collapsed sheets have similar size and placement as floating action buttons, which may confuse users about the usage of each. |
| Floating action button: Extended | Caution                                  | An extended floating action button can be used if center-aligned, so it doesn’t overlap with a collapsed sheet. The button width and collapsed sheet should both be short and styled differently from one other. |
| On-screen keyboard               | Yes                                      | When the keyboard appears, it covers the sheet. When the sheet is collapsed, it doesn’t attach to the keyboard. |
| Snackbar                         | Yes                                      | To avoid overlap, place a snackbar above a collapsed sheet.  |

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1xzKKbRMHCuyYrbKk-RQMLXXCJmOW1V8a%2Fexpanding-placement-mobile-fab-extended-caution.png)

Caution.

An expanding bottom sheet can be paired with other bottom-aligned components if done carefully. Example A shows a bottom sheet displaying both a label and message, as there is sufficient room to do so. Example B has a prominent extended floating action button instead, giving the sheet room to display only an icon.

## Tablet and desktop

On larger screens, expanding bottom sheets don’t need to expand to the screen’s height or width. At a smaller size, expanding bottom sheets enable multi-tasking and other uses of screen space.

As their placement at the bottom of the screen may make them less noticeable, their content can be placed in a side sheet or accessed from a top app bar.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1OpRh7TMsN0S1WwwPouorRZUPY7cp0956%2Fexpanding-placement-tablet-desktop-partial-height.png)

On tablet and desktop, this expanding bottom sheet doesn’t take up the full width or height of the screen, as it does on mobile.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1bJ-JNFhzzYFj-B1j0Orj_wbqfYykwjHL%2Fexpanding-placement-tablet-desktop-alternate.png)

On tablet and desktop, the bottom sheet content moves into a side sheet, where it remains visible. On mobile, this expanding bottom sheet contains a selection queue.

------

## Theming 



# Posivibes Material Theme

This social media app’s bottom sheets have been customized using Material Theming. Areas of customization include color and shape. Posivibe’s bottom sheets use custom color...

READ MORE

This social media app’s bottom sheets have been customized using Material Theming. Areas of customization include color and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1MiMyupT-NSiMxckjWfxK5e136Ywsff3g%2Fsheets-posivibes-ahero.png)

Posivibe’s customized bottom sheets

## Color

Posivibe’s bottom sheets use custom color on three elements: container, text, and icons.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1WE0K4VWDkOz5-cPSLXft28NDqEQcl0Pp%2Fsheets-posivibes-color.png)

| Element     | Category   | Attribute    | Value       |
| ----------- | ---------- | ------------ | ----------- |
| Container   | Surface    | ColorOpacity | #FFFFFF100% |
| Text, icons | On Surface | ColorOpacity | #000000100% |

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)

[About ShapeMaterial surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.Related Article*arrow_downward*](https://material.io/design/shape/about-shape.html#about-shape)



## Shape

Posivibe’s bottom sheets use a custom container shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1WO4Oi2ShTsZt_6qAXs6RxkPolVX5Dxrw%2Fsheets-posivibes-shape.png)

| Element   | Category        | Attribute  | Value                |
| --------- | --------------- | ---------- | -------------------- |
| Container | Large component | FamilySize | Cut0;0; n/a; n/a dp* |

*Bottom sheets can only be shaped on the top left and top right corners.



# Shrine Material Theme

Shrine is a retail app, and its expanding bottom sheet has been customized using Material Theming. Areas of customization include color and shape. Shrine’s expanding...

READ MORE

Shrine is a retail app, and its expanding bottom sheet has been customized using Material Theming. Areas of customization include color and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F14lb086fWqFHqHn_Fbo06kJkpkOjaZM66%2Ftheming-expanding-shrine-hero.png)

Shrine’s customized expanding bottom sheet

## Color

Shrine’s expanding bottom sheet uses custom colors on its container and icon.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1hptSkUs86kbAFvLtsCaLCrZzuGz81kzL%2Ftheming-expanding-shrine-color.png)

| Element   | Category     | Attribute    | Value       |
| --------- | ------------ | ------------ | ----------- |
| Container | Secondary    | ColorOpacity | #FEEAE6100% |
| Icon      | On Secondary | ColorOpacity | #442C2E100% |

## Shape

The collapsed state of Shrine’s expanding bottom sheet uses a custom container shape. The top leading corner is shaped to help indicate it is interactive.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1oKE3KDXleIebIDKMjxcsOBkjvvR4HpFd%2Ftheming-expanding-shrine-shape.png)

| Element   | Category        | Attribute  | Value                   |
| --------- | --------------- | ---------- | ----------------------- |
| Container | Large component | FamilySize | Cut0; n/a; n/a; n/a dp* |

*Expanding bottom sheets can only be shaped on the top left corner.

------

## Specs 

## Modal bottom sheet for mobile

- 
- 
- max-height 1/2 screenMeasurement max-height 1/2 screen
- 360 Measurement 360
- 16Measurement 16
- 56Measurement 56
- 56Measurement 56
- 36Measurement 36
- 
- 

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  



- 

  

  

  

  

  

- 

  

  

  

  

- 

  

  

  

  

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F16oM35pHAoBGq6R3oJi0fSw8eaCxN_asQ%2Fspecs-sheets-bottom-modal-50.png)



*flip*

Specs



- 
- 360 Measurement 360
- max-height 1/2 screenMeasurement max-height 1/2 screen
- 56Measurement 56
- 56Measurement 56
- 16Measurement 16
- 
- 

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

- 

  

  

  

  

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1MYljOgtsZNS7wJ0BlFsL-xqILjXyev0V%2Fspecs-sheets-bottom-modal-lessthan50.png)



*flip*

Specs



## Standard bottom sheet for mobile

- min height: 56dpMeasurement min height: 56dp
- 360 Measurement 360





- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1CLhBDAZt0MZui6C5w1svaeBJ1c7n7QZm%2Fspecs-sheets-bottom-coplanar.png)



*flip*

Specs



------

## Implementation 

Bottom sheets implementation support for each platform is indicated below.

[![Android Implementation-Bottom Sheets](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1gPkMc7FWLa6Hd3ss5bTOjOKhLi7_ALsE%2Fimplementation-android-platform.png)](https://material.io/go/android-sheets-bottom/)

## [Android Material Component](https://material.io/go/android-sheets-bottom/)

**Status:** Available

[![IOS Implementation-Bottom Sheets](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F138QR1dPDUtrfUBUU_tt8hUn9S53j1aL3%2Fimplementation-ios-platform.png)](https://material.io/go/ios-sheets-bottom/)

## [IOS Material Component](https://material.io/go/ios-sheets-bottom/)

**Status:** Available

[![Flutter Implementation-Bottom Sheets](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1DtA9zTJtbP9aWgTHE19IrlmSWFqBBYiU%2Fimplementation-flutter-platform.png)](https://material.io/go/flutter-sheets-bottom/)

## [Flutter Material Component](https://material.io/go/flutter-sheets-bottom/)

**Status:** Available

![Web Implementation-Bottom Sheets](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1vXKfVjWOIKq5H3cWzbHEge8Yhkp6R6Z-%2Fimplementation-web-platform-unavail.png)

## Web Material Component

**Status:** Planned