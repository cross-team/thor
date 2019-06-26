# Navigation Drawer

Material UI (Core) Component

Reference: https://material.io/design/components/navigation-drawer.html



------

# Navigation drawer 

## Navigation drawers provide access to destinations in your app.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1nsuL8VDpBW_LZYXgabK1H0uq6icmmKYt%2Fnav-drawer-intro.png)

CONTENTS[Usage](https://material.io/design/components/navigation-drawer.html#usage)[Anatomy](https://material.io/design/components/navigation-drawer.html#anatomy)[Standard drawer](https://material.io/design/components/navigation-drawer.html#standard-drawer)[Modal drawer](https://material.io/design/components/navigation-drawer.html#modal-drawer)[Bottom drawer](https://material.io/design/components/navigation-drawer.html#bottom-drawer)[States](https://material.io/design/components/navigation-drawer.html#states)[Theming](https://material.io/design/components/navigation-drawer.html#theming)[Specs](https://material.io/design/components/navigation-drawer.html#specs)[Implementation](https://material.io/design/components/navigation-drawer.html#implementation)

------

## Usage 

Navigation drawers provide access to destinations and app functionality, such as switching accounts. They can either be permanently on-screen or controlled by a navigation menu icon.

[Understanding navigationNavigation enables users to move through an app.Related Article*arrow_downward*](https://material.io/design/navigation/understanding-navigation.html#understanding-navigation)



Navigation drawers are recommended for:

- Apps with five or more top-level destinations
- Apps with two or more levels of navigation hierarchy
- Quick navigation between unrelated destinations

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1JkhpaOoDpFrCKLLoZMmbfiBMofzKS-lY%2Fusage-do.png)

Do.

Use a navigation drawer for five or more primary destinations.

[TabsTabs organize high level content in an app content, such as switching between views, data sets, or functional aspects of an app.Related Article*arrow_downward*](https://material.io/design/components/tabs.html#tabs)

[Bottom navigationBottom navigation bars allow movement between primary destinations in an app.Related Article*arrow_downward*](https://material.io/design/components/bottom-navigation.html#bottom-navigation)



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1bJV0wyvGnpAyj8_59cYD5ahv7udy2Ykg%2Fusage-caution-alt-3.png)

Caution.

Avoid using a navigation drawer with other primary navigation components, such as a bottom navigation bar.



# Principles

The placement and list-style content of navigation drawers clearly identify them as navigation. Navigation drawers order destinations according to user importance, with frequent destinations first...

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1K7eLlljok7PU_2BD44L60tLH7pMli7Zu%2Fnavigation-illos-02.png)

## Identifiable

The placement and list-style content of navigation drawers clearly identify them as navigation.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1S-QFMqpmdkQGEAULvsZBW7JnRn9QtQ5Y%2Fnavigation-illos-01.png)

## Organized

Navigation drawers order destinations according to user importance, with frequent destinations first and related ones grouped together.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1O5L5Oqx2xT9hUorTyHEPP4SxUaHakWtb%2Fnavigation-illos-03.png)

## Contextual

Navigation drawers can be shown or hidden to accommodate different app layouts.



# Types

Standard navigation drawers allow users to simultaneously access drawer destinations and app content. They are often co-planar with app content and affect the screen’s layout...

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F16wwJq_qF5UtX_twrXkC0fUDxGNn1qrlX%2Fusage-types-standard.png)

## Standard drawer

Standard navigation drawers allow users to simultaneously access drawer destinations and app content. They are often co-planar with app content and affect the screen’s layout grid.

Standard drawers can be permanently visible or opened and closed by tapping a navigation menu icon. They can be used on tablet and desktop only. On mobile, modal drawers are used instead.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1PHwyFNxll6s6bJUZTkmqtpBU2LckXu8V%2Fusage-types-modal.png)

## Modal drawer

Modal navigation drawers use a scrim to block interaction with the rest of an app’s content. They are elevated above most app elements and don’t affect the screen’s layout grid.

They are primarily for use on mobile, where screen space is limited. They can be replaced by standard drawers on tablet and desktop.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F11vvo5YFOWBVxYchQG46nS-fcQHwhdFny%2Fusage-types-bottom.png)

## Bottom drawer

Bottom navigation drawers are a specialized type of modal drawer for use with a bottom app bar.

For increased reachability from the bottom app bar’s menu icon, they open from the bottom of the screen rather than the side.

------

## Anatomy 

Navigation drawers contain a list embedded within a sheet. They can be enhanced with headers and dividers to organize longer lists.

[ListsLists are continuous, vertical display of text or images.Related Article*arrow_downward*](https://material.io/design/components/lists.html#lists)

[Sheets: SideSide sheets are surfaces containing supplementary content that are anchored to the left or right edge of the screen.Related Article*arrow_downward*](https://material.io/design/components/sheets-side.html#sheets-side)



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F10UGo-uwu3HViW96viJ-EVtV2PSBAF99c%2Fanatomy.png)

1. ### Container

2. ### Header (optional)

3. ### Divider (optional)

4. ### Active text overlay

5. ### Active text

6. ### Inactive text

7. ### Subtitle

8. ### Scrim (modal only)



# Sheet

The contents of a navigation drawer are contained within a side or bottom sheet. Navigation drawers that open from the side are placed on the...

READ MORE

The contents of a navigation drawer are contained within a side or bottom sheet. Navigation drawers that open from the side are placed on the left of the screen for left-to-right languages, and on the right of the screen for right-to-left languages.

[BidirectionalityUIs for languages that are read from right-to-left (RTL), such as Arabic and Hebrew, should be mirrored to ensure content is easy to understand.Related Article*arrow_downward*](https://material.io/design/usability/bidirectionality.html#bidirectionality)



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1TGc8PB3-e0up15RseuUgFFVOUk5WLii1%2Fanatomy-sheet-do-alt.png)

Do.

A navigation drawer sheet can open from the left side of the screen for left-to-right languages (1), or from the bottom of the screen when paired with a bottom app bar (2). Scaled down to 62.5%

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1obcmllKi68Uyi3XMO09pAQF_PCsYR5J0%2Fanatomy-sheet-dont.png)

Don’t.

Don’t open a navigation drawer from the right side of the screen unless the app is set to a right-to-left language.



# Destinations

Destinations in a navigation drawer take the form of actionable list items. Each item describes its destination using a text label and optional iconography. Text...

READ MORE

Destinations in a navigation drawer take the form of actionable list items. Each item describes its destination using a text label and optional iconography.

## Destination labels

Text labels should be clear and short enough that they aren’t cut off by the sheet.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1vJWFq71V3b3OuHH5fv88-qreLHscpCWo%2Fanatomy-destinations-labels-no-icons-do.png)

Do.

Navigation drawers can use text labels without icons.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Geve7a-Dazjy_ZqStJ9vJn4JAj7zONS-%2Fanatomy-destinations-labels-short-do.png)

Do.

Keep text labels concise, but truncate them if they extend beyond the container width.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1excoRXq3CprgnrrSqNyMp-hg1W-lw0cN%2Fanatomy-destinations-labels-wrap-dont.png)

Don’t.

Don’t wrap label text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Bnzqt5alX5ZIi4-0DcmYrXu44bVzfQ9m%2Fanatomy-destinations-labels-shrink-dont.png)

Don’t.

Don’t shrink text size in order to fit a text label on a single line.

## Destination iconography (optional)

Icons can supplement labels as indicators of a destination. Whe used, they should always be placed before text. Other app components and content should reference these icons.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1OrD-5859QC85pWP6ZPAF2m6Gu9yGRKj3%2Fanatomy-destinations-icons-do.png)

Do.

Use recognizable icons when conventions exist.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1dTXibbyG7o272srOo0grtYltAseiO2VV%2Fanatomy-destinations-icons-dont.png)

Don’t.

Don’t use the same icon to represent different primary destinations.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F14HwXQlqdpo7DRbqciNQfgGH9eyaqvCPP%2Fanatomy-destinations-icons-repeat-do.png)

Caution.

Secondary destinations can be represented by the same icon, especially if they are part of a collection (1).

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1zMCM4ep3aKIodcqkqbFm9XtQTtqIGOPX%2Fanatomy-destinations-icons-some-dont.png)

Don’t.

Don’t apply icons to some destinations and not others. Icons should be used for all destinations, or none.



# Dividers (optional)

Horizontal dividers can be used to separate groups of navigation destinations within the list. They extend across the full width of the drawer. A divider...

READ MORE

Horizontal dividers can be used to separate groups of navigation destinations within the list. They extend across the full width of the drawer.

[DividersA divider is a thin, lightweight rule that groups content in lists and page layouts.Related Article*arrow_downward*](https://material.io/design/components/dividers.html#dividers)



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1RXP8VTx1QxGIFJzmAUaMLEEmNZPlO9hk%2Fanatomy-dividers-do.png)

Do.

Use full-width dividers (1) to separate groups of destinations (2).

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Ofkybws17wro2YussaDEcK5eox8FFF-n%2Fanatomy-dividers-dont.png)

Don’t.

Don’t use dividers to separate individual destinations.



# Header (optional)

The header area of a navigation drawer is a flexible space that can be used for brand expression (such as an app title or logo),...

READ MORE

The header area of a navigation drawer is a flexible space that can be used for brand expression (such as an app title or logo), an account switcher, and more.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1JB00-om1_IJ_tMAyMljIa2llAvmUfEoQ%2Fanatomy-header-account.png)

Do.

If access to account switching is a priority, an account switcher can be placed in the header area of a navigation drawer.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F14MtgioNSfE0htR4TLiruM0aAIE3IYCC7%2Fanatomy-header-brand-do.png)

Do.

If a navigation drawer is the full vertical height of the page, you can place a branding element or product name in the header area.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F15SRa4yHlw1Jtas595J7IGWaybWCAmWoT%2Fanatomy-header-brand-dont.png)

Don’t.

If a navigation drawer is clipped by a top app bar, don’t place a branding element or product name in the header. In this case the top app bar is a more suitable place for that content.



# Scrim (modal and bottom only)

Modal navigation drawers use a scrim to block interaction with the rest of the app. The scrim is placed directly below the drawer’s sheet and...

READ MORE

Modal navigation drawers use a scrim to block interaction with the rest of the app. The scrim is placed directly below the drawer’s sheet and can be tapped or clicked to dismiss the drawer.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1SwNrGXVgCAcgi4W-HqWIl1h-7ZbZIbdD%2Fanatomy-scrim.png)

Scrims applied to a modal side navigation drawer (1) and bottom navigation drawer (2)

------

## Standard drawer 



# Usage

Standard navigation drawers allow interaction with both screen content and the drawer at the same time. They can be used on tablet and desktop, but...

READ MORE

Standard navigation drawers allow interaction with both screen content and the drawer at the same time. They can be used on tablet and desktop, but they aren’t suitable for mobile due to limited screen size.

## Alternatives

- **Modal drawer:** In a responsive layout grid, at a defined minimum breakpoint of at least 600dp width, a standard drawer should be replaced with a modal drawer.
- **Permanently visible drawer:** When users need to switch destinations frequently (and screen size allows), a permanently visible drawer can be used.
- **Dismissible drawer:** A dismissible drawer can be used when users are likely to focus on screen content and require less frequent access to its navigation destinations.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1f9ipKy_-QJZpvcKLsGmTk11EfXZwNXRO%2Fstandard-usage.png)

A dismissible drawer.



# Behavior

Navigation drawers can be vertically scrolled, independent of the rest of the screen’s content and UI. If the list of navigation destinations is longer than...

READ MORE

## Scrolling

Navigation drawers can be vertically scrolled, independent of the rest of the screen’s content and UI. If the list of navigation destinations is longer than the height of the drawer, the drawer’s contents can be scrolled within the drawer.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ZaJemCxLPfaZImDzMItke1G5k95JjBf2%2Fstandard-behavior-scrolling-alt.png)

## Visibility

The visibility of a standard navigation drawer depends on screen size, app layout, and frequency of use.

- **Dismissible** standard drawers can be used for layouts that prioritize content (such as a photo gallery) or for apps where users are unlikely to switch destinations often. They should use a visible navigation menu icon to open and close the drawer.
- **Permanently visible** standard drawers allow quick pivoting between unrelated destinations. They require a menu icon for control because they can’t be dismissed by the user.

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1x2NU6vyNNO9oDBAOabnED4ktz_jum_Z_%2Fstandard-behavior-visibility-dismissible.png)

A standard dismissible navigation drawer is opened and closed by tapping the navigation menu icon in the top app bar (1), and remains open until the menu icon is tapped again (2).

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F11LVr4y0v_YJj1PqOgGxwFx0riUs2irmu%2Fstandard-behavior-visibility-permanent.png)

A permanent navigation drawer on desktop



# Elevation

A standard navigation drawer can use one of these elevation positions: The Material Design responsive layout grid adapts to screen size and orientation. This UI...

READ MORE

A standard navigation drawer can use one of these elevation positions:

- At the same elevation as a top app bar (full-height)
- At a lower elevation than a top app bar (clipped)

[Responsive Layout GridThe Material Design responsive layout grid adapts to screen size and orientation. This UI guidance includes a flexible grid that ensures consistency across layouts.Related Article*arrow_downward*](https://material.io/design/layout/responsive-layout-grid.html#responsive-layout-grid)



## Full-height

A full-height navigation drawer is at the same elevation as a top app bar.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1BWYUFsIrTILjcB9tS10JMDjyLakpNtL3%2Fstandard-elevation-top-app-bar.png)

## Clipped

A clipped navigation drawer is at the same elevation as content that scrolls beneath a top app bar.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1CPoEQp4vBj9aRARuqexAbZhqBxJukOiX%2Fstandard-elevation-below.png)

------

## Modal drawer 



# Usage

Modal navigation drawers block interaction with the rest of an app’s content with a scrim. They are elevated above most of the app’s UI and...

READ MORE

Modal navigation drawers block interaction with the rest of an app’s content with a scrim. They are elevated above most of the app’s UI and don’t affect the screen’s layout grid.

They are primarily for use on mobile where screen space is limited, and can be replaced by standard drawers on tablet and desktop.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1oScf-leMqIUFShm_OJlej_iGlMoY1sh7%2Fmodal-usage.png)

A modal drawer on mobile



# Behavior

Modal navigation drawers are always opened by an affordance outside of the drawer, such as a navigation menu icon in a top app bar. Modal...

READ MORE

## Opening and closing

Modal navigation drawers are always opened by an affordance outside of the drawer, such as a navigation menu icon in a top app bar.

Modal drawers can be dismissed by:

- Selecting a drawer item
- Tapping the scrim
- Swiping toward the drawer’s anchoring edge (e.g. swiping right-to-left for a left-aligned navigation drawer)

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1KW2saB9HeR0oPpmW1KGlthARqnQD-1W4%2Fmodal-behavior-open-alt.png)

Do.

A modal drawer is always opened by a navigation menu icon (1).

[Top App BarThe top app bar displays information and actions relating to the current view.Related Article*arrow_downward*](https://material.io/design/components/app-bars-top.html#top-app-bar)



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1C9VFN5vG8DdzWk5TygWek9V-fmizl5rN%2Fmodal-behavior-close.png)

Modal drawers can be dismissed by tapping its scrim (1) or swiping the drawer toward its anchoring screen edge (2).

## Scrolling

If the list of navigation destinations is longer than the height of the drawer, the list can vertically scroll in the drawer.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1hzXs1b-UkwQkMU23wwuzxeqxqfVzeMZK%2Fmodal-behavior-scrolling-do.png)

------

## Bottom drawer 



# Usage

Bottom navigation drawers are modal drawers that are anchored to the bottom of the screen instead of the left or right edge. They are only...

READ MORE

Bottom navigation drawers are modal drawers that are anchored to the bottom of the screen instead of the left or right edge. They are only used with bottom app bars.

These drawers open upon tapping the navigation menu icon in the bottom app bar. They are only for use on mobile.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1742Wr3B-ti0gPi6z_6z0fgepVs9ZR_xI%2Fbottom-usage.png)

Bottom navigation drawer

[Bottom app barA bottom app bar provides reachable access to a bottom navigation drawer and actions on mobile devices.Related Article*arrow_downward*](https://material.io/design/components/app-bars-bottom.html#bottom-app-bar)





# Behavior

As with other modal bottom sheets, the initial vertical position of a bottom navigation drawer is based on its content and screen height. They initially...

READ MORE

## Opening on mobile (portrait orientation)

As with other modal bottom sheets, the initial vertical position of a bottom navigation drawer is based on its content and screen height. They initially cannot open above 50% of the screen’s height.

- If drawer contents are under 50% of screen height, open the drawer to full height at all times
- If drawer contents are greater than 50% of screen height, open them to 50% initially, then allow a user to drag the drawer upward to its full height or screen height (whichever comes first)

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1B0Wjng4N8bGBdQaAjXqod1BXRuGxyUVQ%2Fbottom-behavior-open-portrait-do.png)

Do.

Open bottom navigation drawers that contain only a few items to their full height (A).

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1yhHWBWJzItjMRmguf_IMx0S2j69TWZ1k%2Fbottom-behavior-open-portrait-dont.png)

Don’t.

Don’t extend the height of a drawer beyond its contents.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1hIU6kk6ZY36RAa9yYXKVVSFfh16wQxZX%2Fbottom-behavior-open-portrait-clip.png)

Do.

Adjust the opening position of your bottom navigation drawer so the last list item in view is clipped by the bottom of the screen. This can inform users that there are more items to view.

## Opening on mobile (landscape orientation)

In landscape orientation on mobile, taller bottom navigation drawers automatically open to full-screen mode.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1JgpygkaPBAjpddopyVQ_wXQ1iA0QMZvH%2Fbottom-behavior-landscape-open-do.png)

A bottom drawer opens to full-screen mode on mobile in a landscape orientation.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1GrwqC0XuhOzyXIQDnDuCbQVb0mjDlG_2%2Fbottom-behavior-landscape-open-dont.png)

Don’t.

Don’t open a bottom drawer to half the screen height in landscape mode.

## Scrolling

Bottom navigation drawers can be internally scrolled once they have been opened to full screen height.

When initially opened to 50% of the screen height, the drawer must be dragged to screen height before additional items are revealed. Upon scroll, the drawer's header becomes an elevated top app bar with a close affordance.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1z2zqEjg32DpsTSXMFgm86To7b0IZ3qDo%2Fbottom-behavior-scrolling-do.png)

Do.

Allow a bottom drawer’s contents to be scrolled when at full height.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1_3bflMdVFtiBbCLgGxf2ePB-3DVCzJRM%2Fbottom-behavior-scrolling-dont.png)

Don’t.

Don’t scroll a bottom drawer’s contents when it’s not at full-screen height.



# Content hierarchy

Because the number of bottom navigation drawer content items aren’t all visible at first, the content of the drawer should be ordered as follows:

READ MORE

Because the number of bottom navigation drawer content items aren’t all visible at first, the content of the drawer should be ordered as follows:

1. List items first that are most likely to be frequently accessed by users
2. If an account switcher is used, place it at the top of the drawer

------

## States 

The destinations within a navigation drawer take the form of list items. Each item can be activated, inactive, hovered, focused, and pressed.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1kpavOX8FbiQDAmJEMb862PrCn61g9oQv%2Fstates-hero.png)

## 1. Activated

The current screen, or its parent, is represented with an activated state. Only one item in a navigation drawer can be activated at a time. This state should have strong visual contrast from unactivated items.

## 2. Inactive

Inactive is the default state for items in a navigation drawer.

## 3. Focus

## 4. Pressed

## 5. Hover

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1IdhQtsni6j0nYktp9_p4Ctb2XW5gECoF%2Fstates-do.png)

Do.

Only one drawer item can be activated at a time.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F18q2AjwxBv5PWXZOsCdHsVH1z599fAmYL%2Fstates-dont.png)

Don’t.

Don’t activate more than one drawer item at a time.

------

## Theming 



# Fortnightly Material Theme

This news app’s modal navigation drawer has been customized using Material Theming. Areas of customization include color and typography. Fortnightly is a news app that...

READ MORE

This news app’s modal navigation drawer has been customized using Material Theming. Areas of customization include color and typography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1VKU097cFR_GbrnJo4iDL8y6Sq1fnvDaX%2Fnavdrawer-fortnightly-ahero.png)

Fortnightly’s customized modal navigation drawer

[FortnightlyFortnightly is a news app that uses Material Design components and Material Theming to create an on-brand, content-focused experience.Related Article*arrow_downward*](https://material.io/design/material-studies/fortnightly.html#fortnightly)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Fortnightly’s modal navigation drawer uses custom color on six elements: sheet, activated icon, activated text, activated overlay, navigation item, and scrim.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1UcQoWbNbU2as9qE6NJoQiGXxNpdRcQuk%2Fnavdrawer-fortnightly-color.png)

| Element                        | Category   | Attribute    | Value       |
| ------------------------------ | ---------- | ------------ | ----------- |
| Container                      | Surface    | ColorOpacity | #FFFFFF100% |
| Activated icon, Activated text | Primary    | ColorOpacity | #661FFF100% |
| Activated overlay              | Primary    | ColorOpacity | #661FFF12%  |
| Inactive item                  | On Surface | ColorOpacity | #000000100% |
| Scrim                          | On Surface | ColorOpacity | #00000032%  |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

Fortnightly’s modal navigation drawer text uses custom typography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1nmVGJl0OYsy42E9m969BJZcCwC_dY3FV%2Fnavdrawer-fortnightly-type.png)

| Element | Category | Attribute            | Value                             |
| ------- | -------- | -------------------- | --------------------------------- |
| Text    | Body 2   | TypefaceFontSizeCase | Libre FranklinRegular14Title case |

## Shape

Fortnightly’s side navigation drawer container has custom corners, with cut corner shapes.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1oh882zP-BQqdE36gXdNJ5wwNzZupsqaX%2Fnavdrawer-fortnightly-shape.png)

| Element   | Category        | Attribute  | Value                |
| --------- | --------------- | ---------- | -------------------- |
| Container | Large component | FamilySize | Cutn/a; 0;0; n/a dp* |

*Side navigation drawers can only be shaped on the top-right and bottom-right corners.



# Posivibes Material Theme

This social media app’s bottom navigation drawer has been customized using Material Theming. Areas of customization include color and typography. The Material Design color system...

READ MORE

This social media app’s bottom navigation drawer has been customized using Material Theming. Areas of customization include color and typography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1gGzgKCq0XHiy7FXVUKfcnbJ79Sd4QCN_%2Fnavdrawer-posivibes-ahero.png)

Posivibes’ customized navigation drawer

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Posivibes’ bottom navigation drawer uses custom color on six elements: sheet, activated icon, activated text, activated overlay, navigation item, and scrim.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Daqlw-8h7SRRLkj_8NWAzTkzvnj5Q7iT%2Fnavdrawer-posivibes-color.png)

| Element                        | Category   | Attribute    | Value       |
| ------------------------------ | ---------- | ------------ | ----------- |
| Container                      | Surface    | ColorOpacity | #FFFFFF100% |
| Activated icon, Activated text | Primary    | ColorOpacity | #000000100% |
| Activated overlay              | Primary    | ColorOpacity | #00000012%  |
| Inactive item                  | On Surface | ColorOpacity | #000000100% |
| Scrim                          | Surface    | ColorOpacity | #FFFFFF60%  |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

Posivibes’ bottom navigation drawer text uses custom typography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1cIIZJP8_g5Yk6rt752SMHbhQrLcF4wC9%2Fnavdrawer-posivibes-type.png)

| Element | Category | Attribute            | Value                               |
| ------- | -------- | -------------------- | ----------------------------------- |
| Text    | Body 2   | TypefaceFontSizeCase | Roboto CondensedRegular14Title case |

[About ShapeMaterial surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.Related Article*arrow_downward*](https://material.io/design/shape/about-shape.html#about-shape)



## Shape

Posivibes’ bottom navigation drawer container has custom corners, with cut corner shapes.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F19JbOA2DB49tLwC1Ksv65vfEBZS11rwpG%2Fnavdrawer-posivibes-shape.png)

| Element   | Category        | Attribute  | Value                |
| --------- | --------------- | ---------- | -------------------- |
| Container | Large component | FamilySize | Cut0;0; n/a; n/a dp* |

*Bottom navigation drawer can only be shaped on the top-left and top-right corners.

------

## Specs 

## Standard navigation drawer

- 
- 
- 42Measurement 42
- 16Measurement 16
- 64Measurement 64
- 256 Measurement 256

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  



- 

  

  

  

  



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1IhJa3simqglRnwMEYXqJkZsKnRcTlraS%2Fspecs-navdrawer-side-standard.png)



*flip*

Specs



## Modal navigation drawer

- 
- 
- 
- 
- 
- 16Measurement 16
- 640Measurement 640
- 18Measurement 18
- 20Measurement 20
- 36Measurement 36
- 48Measurement 48
- 8Measurement 8
- 56 Measurement 56
- 8Measurement 8
- 28Measurement 28
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

  

  

  

  

- 

  

  

  

  

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F10pCcfoY_eryH65cqKY3xqr5la8877U0L%2Fspecs-navdrawer-side-modal.png)



*flip*

Specs



## Bottom navigation drawer

- 
- 
- 
- 1/2 screen heightMeasurement 1/2 screen height
- 360 Measurement 360
- 36Measurement 36
- 16Measurement 16
- 20Measurement 20
- 48Measurement 48
- 18Measurement 18
- 

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

  

  

  

  

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Agfez_AYp14uPoLVvlhp4eTYd5QUGeVB%2Fspecs-navdrawer-bottom-modal.png)



*flip*

Specs



------

## Implementation 

Navigation drawer implementation support for each platform is indicated below.

[![Android Implementation-Navigation drawers](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1AbG0kfrq3_6_3y1WMGW4pw2sOFKS40MF%2Fimplementation-android-platform.png)](https://material.io/go/android-navigation-drawer/)

## [Android Material Component](https://material.io/go/android-navigation-drawer/)

**Status:** Available

[![IOS Implementation-Navigation drawers](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1EH5jX-xzXKj6tzYxJ6yhCIcHgxgCtiZh%2Fimplementation-ios-platform.png)](https://material.io/go/ios-navigation-drawer/)

## [IOS Material Component](https://material.io/go/ios-navigation-drawer/)

**Status:** Available

[![Flutter Implementation-Navigation drawers](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F15f-ObNpp2CzWgjJAlfdUDXiniiH20EdH%2Fimplementation-flutter-platform.png)](https://material.io/go/flutter-navigation-drawer/)

## [Flutter Material Component](https://material.io/go/flutter-navigation-drawer/)

**Status:** Available

[![Web Implementation-Navigation drawers](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1jhVRiz-7Uz7dbV64PuxXm8GBLp675SWr%2Fimplementation-web-platform.png)](https://material.io/go/web-navigation-drawer/)

## [Web Material Component](https://material.io/go/web-navigation-drawer/)

**Status:** Available