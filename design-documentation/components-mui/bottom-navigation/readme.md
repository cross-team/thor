# Bottom Navigation

Material UI (Core) Component

Material.io Reference: https://material.io/design/components/bottom-navigation.html



------

# Bottom navigation 

## Bottom navigation bars allow movement between primary destinations in an app.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1h5m0BGM_LfXii-6hO4JisEM0bcWvG0Gl%2Fbottomnav-usage-1.png)

CONTENTS[Usage](https://material.io/design/components/bottom-navigation.html#usage)[Anatomy](https://material.io/design/components/bottom-navigation.html#anatomy)[Behavior](https://material.io/design/components/bottom-navigation.html#behavior)[Placement](https://material.io/design/components/bottom-navigation.html#placement)[States](https://material.io/design/components/bottom-navigation.html#states)[Theming](https://material.io/design/components/bottom-navigation.html#theming)[Specs](https://material.io/design/components/bottom-navigation.html#specs)[Implementation](https://material.io/design/components/bottom-navigation.html#implementation)

------

## Usage 

Bottom navigation bars display three to five destinations at the bottom of a screen. Each destination is represented by an icon and an optional text label. When a bottom navigation icon is tapped, the user is taken to the top-level navigation destination associated with that icon.

------



# Principles

Bottom navigation is ergonomic, consistent, and top-level

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1E7lXZfa3b5CAyF5bA33u2luiX3s08Scf%2Fbnb-limited.png)

## Ergonomic

The bottom navigation bar is easy to reach on a handheld mobile device.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Mf9DGzjrs8ky6_pgjc1SBKLpF5mZd9GP%2Fbnb-consistent.png)

## Consistent

When used, the bottom navigation bar appears at the bottom of every screen.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1BC1wiAWjQ9wD5rn9EbxDLvUsxOwkcQ8f%2Fbnb-convenient.png)

## Related

Bottom navigation bar destinations should be of equal importance.



# When to use

Bottom navigation should be used for top-level destinations

READ MORE

### Bottom navigation should be used for:

- Top-level destinations that need to be accessible from anywhere in the app
- Three to five destinations
- Mobile or tablet only

### Bottom navigation shouldn’t be used for:

- Single tasks, such as viewing a single email

- User preferences or settings

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B6xUSjjSulxccG1VaVJvdjRpUk0%2Fbottomnav-whentouse-dont-1.png)

Don’t.

Don’t use a bottom navigation bar for fewer than three destinations (use tabs instead).

[TabsTabs organize high level content in an app content, such as switching between views, data sets, or functional aspects of an app.Related Article*arrow_downward*](https://material.io/design/components/tabs.html#tabs)

[Navigation drawerNavigation drawers provide access to the navigation destinations of your app.Related Article*arrow_downward*](https://material.io/design/components/navigation-drawer.html#navigation-drawer)



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B6xUSjjSulxcX2xHV2ZuempIeDg%2Fbottomnav-whentouse-dont-3.png)

Don’t.

Don’t use more than five destinations. For those cases, try tabs or a navigation drawer.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B6xUSjjSulxcbUVfU1RNaVpIdzg%2Fbottomnav-whentouse-caution-1.png)

Caution.

Combining bottom navigation and tabs may cause confusion, as their relationship to the content may be unclear. Tabs share a common subject, whereas bottom navigation destinations are top-level and disconnected from each other.

Scaled down 50%.

------

## Anatomy 

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1qVeXtYV9OYYPE9cKH5VrC88EZ8unHBck%2Fbottomnav-anatomy.png)

1. ### Container

2. ### Inactive icon

3. ### Inactive text label

4. ### Active icon

5. ### Active text label



# Representing destinations

The way bottom navigation destinations are represented can depend on how many are used:

READ MORE

The way bottom navigation destinations are represented can depend on how many are used:

- **Three destinations:** Display icons and text labels for all destinations.
- **Four destinations:** Active destinations display an icon and text label. Inactive destinations display icons, and text labels are recommended.
- **Five destinations:** Active destinations display an icon and text label. Inactive destinations use icons, and use text labels if space permits.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F13YVID_UiFnReCRR2j5SOrWazJhCBLnVw%2Fbottomnav-icons-2.png)

There are three destinations in this bottom navigation, each with an icon and text label.



# Icons

Bottom navigation destinations always include an icon. It’s best to pair icons with text labels, especially if the icon doesn’t have obvious meaning.

READ MORE

Bottom navigation destinations always include an icon. It’s best to pair icons with text labels, especially if the icon doesn’t have obvious meaning.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1h5m0BGM_LfXii-6hO4JisEM0bcWvG0Gl%2Fbottomnav-usage-1.png)

Icons paired with text labels in bottom navigation



# Text Labels

Text labels provide short, meaningful descriptions of bottom navigation destinations.

READ MORE

Text labels provide short, meaningful descriptions of bottom navigation destinations.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Y9lMSw0pCIQMsV7uVT7_Pus8uVC-55yE%2Fbottomnav-labels.png)

Do.

Use short text labels.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B6xUSjjSulxcN3pFTDg0aXNVZ0E%2Fbottomnav-textlabels-dont-2.png)

Don’t.

Don’t truncate text. The truncation may obscure important destination information.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B6xUSjjSulxcSFdnX24wQVRqMHM%2Fbottomnav-textlabels-dont-3.png)

Don’t.

Don’t shrink text to fit on a single line.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B6xUSjjSulxcZVFvdTVkU1l6VDA%2Fbottomnav-textlabels-dont-1.png)

Caution.

Avoid wrapping text.



# Icon & Label Colors

Active and inactive icons and text labels should have sufficient contrast with the container. The active destination’s icon and label should use your app’s Primary...

READ MORE

Active and inactive icons and text labels should have sufficient contrast with the container. The active destination’s icon and label should use your app’s Primary or a High-Emphasis “On” color depending on the component’s color scheme. Inactive icons and labels can use the Medium-Emphasis “On” color.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B6xUSjjSulxcczRPSWxidHVCSjQ%2Fbottomnav-color-do-2.png)

Do.

Use the Primary or High-Emphasis “On” color for the active destination in a bottom navigation bar.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B6xUSjjSulxcWnFMMWd5TTNMdzA%2Fbottomnav-color-dont-1.png)

Don’t.

Don’t use multiple or low-contrast colors in a bottom navigation bar, as they make it harder for users to distinguish the active item and navigate to other destinations.

------

## Behavior 



# Navigation

Bottom navigation behaves differently on Android and iOS. When you select a bottom navigation item (one that’s not currently selected), each platform displays different outcomes:...

READ MORE

Bottom navigation behaves differently on Android and iOS. When you select a bottom navigation item (one that’s not currently selected), each platform displays different outcomes:

- **On Android:** the app navigates to a destination’s top-level screen. Any prior user interactions and temporary screen states are reset, such as scroll position, tab selection, and in-line search.
- **On iOS**: the destination reflects the user’s prior interaction. If the user previously visited that section of the app, they return to the last screen viewed (with its prior state preserved, if possible). Otherwise, the app navigates to the top-level screen.

Default platform navigation can be overridden when needed to improve the user experience. For example, an Android app that requires frequent switching between sections can preserve each section’s state. Or, an iOS app can return users to the top-level screen (or reset their scroll position) if it better suits the use case.

[Android barsThe following guidance applies to Android only.Related Article*arrow_downward*](https://material.io/design/platform-guidance/android-bars.html#android-bars)



<video aria-describedby="behavior-figure-caption-0" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

On Android, revisiting a section resets the app, returning the user to its top-level screen.

<video aria-describedby="behavior-figure-caption-1" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

On iOS, when a user revisits a section they return to where they left off in that section, such as a detail screen.

When moving downward in the app’s hierarchy (from a parent screen to a child screen), a bottom navigation bar can be displayed persistently for quick navigation between an app’s sections.

<video aria-describedby="behavior-figure-caption-2" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

The bottom navigation bar in this music app remains in view when navigating to an album.



# Badges

Bottom navigation icons can include badges in their upper right corner. These badges can contain dynamic information, such as a number of pending requests.

READ MORE

Bottom navigation icons can include badges in their upper right corner. These badges can contain dynamic information, such as a number of pending requests.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B6xUSjjSulxcaVpEMk5tZ2RGZ3c%2Fbottomnav-badging-1.png)

BadgeBadge with a numberBadge with a maximum character count



# Scrolling

Upon scroll, the bottom navigation bar can appear or disappear:

READ MORE

Upon scroll, the bottom navigation bar can appear or disappear:

- Scrolling downward hides the bar
- Scrolling upward reveals it

<video aria-describedby="behavior-figure-caption-4" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

The bottom navigation bar can disappear to allow more space for content.



# Transitions

An in-place cross-fade animation is recommended for transitions between bottom navigation destinations. Lateral (side-to-side) transitions may imply a peer relationship between the items that does...

READ MORE

An in-place cross-fade animation is recommended for transitions between bottom navigation destinations. Lateral (side-to-side) transitions may imply a peer relationship between the items that does not exist, or mislead users into thinking they can use gestures to navigate between sections.

<video aria-describedby="behavior-figure-caption-5" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Do.

Transition between active and inactive bottom navigation destinations using a cross-fade animation.

<video aria-describedby="behavior-figure-caption-6" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Don’t.

Avoid using lateral motion to transition between views. Lateral motion is reserved for navigating between peers.

[Understanding motionMotion helps make a UI expressive and easy to use.Related Article*arrow_downward*](https://material.io/design/motion/understanding-motion.html#understanding-motion)



------

------

------

## Placement 



# Elevation

Bottom navigation can be temporarily covered by dialogs, bottom sheets, navigation drawers, the on-screen keyboard, or other elements needed to complete a flow. They should...

READ MORE

Bottom navigation can be temporarily covered by dialogs, bottom sheets, navigation drawers, the on-screen keyboard, or other elements needed to complete a flow. They should not be permanently obstructed on any screen.

<video aria-describedby="placement-figure-caption-0" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

The search feature of the “Radio” screen triggers the on-screen keyboard, temporarily covering the bottom navigation bar until the search flow is completed.



# Fixed navigation bar

Bottom navigation bar destinations have fixed positions. They don’t scroll or move horizontally.

READ MORE

Bottom navigation bar destinations have fixed positions. They don’t scroll or move horizontally.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1A74f-oXeQJA8zPw5V8mJj4AihdZEwBOT%2Fbottomnav-whentouse-dont-2.png)

Don’t.

Bottom navigation bar destinations don’t scroll.



# Landscape view

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1e7zG5LE-7f-J3HRPzK3RR3sDOWcbEtjc%2Fbottomnav-whentouse-do-4.png)

Do.

On mobile (in landscape mode) or tablet, bottom navigation destinations can retain the same spacing used in portrait mode, rather than being equally distributed across the bottom app bar.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1L_WLQ5Ew8X_wefAnzOBl6-OWvidIQ0VK%2Fbottomnav-whentouse-do-5.png)

Do.

On mobile (in landscape mode) or tablet, bottom navigation destinations can be positioned horizontally instead of stacked. In this case, it’s recommended that destinations are evenly distributed across the entire bar.

------

## States 

Bottom navigation destinations may be active, inactive, focused or pressed.

Bottom navigation uses opacity and text to show when a destination is active. States are used to show pressed, focused, and unselected states.

Inactive destination states are represented with reduced opacities; active states have full opacity.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1jHCvZkzqlF1bAeeYYaHt9Gx-xxSREuIH%2Fbottomnav-states-labels.png)

Inactive destinationsAn active destination

[StatesStates are visual representations used to communicate the status of a component or interactive element.Related Article*arrow_downward*](https://material.io/design/interaction/states.html#states)



When text labels are not used persistently (at all times), only active destinations are given text labels.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1JBR5aNmf8ghBQhRHcFpoM7vbZwxLHbil%2Fbottomnav-states-icons.png)

Inactive destinations without text labelsAn active destination with a text label

------

## Theming 



# Owl Material Theme

This educational app’s bottom navigation bar has been customized using Material Theming. Areas of customization include color and typography. Owl is an educational app that...

READ MORE

This educational app’s bottom navigation bar has been customized using Material Theming. Areas of customization include color and typography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F12BqSMqNI6tyC0PZPfvmAa1DYaukw8Id-%2Fbottomnav-owl-ahero.png)

Owl's customized bottom navigation bar

[OwlOwl is an educational app that provides courses for people who want to explore and learn new skills.Related Article*arrow_downward*](https://material.io/design/material-studies/owl.html#owl)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Owl's bottom navigation bar uses custom color on three elements: the container, activated items, and inactive items.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1T0PVFK6nQt5l04m5EIaAImiHANwixmzO%2Fbottomnav-owl-color.png)

| Element                  | Category     | Attribute    | Value       |
| ------------------------ | ------------ | ------------ | ----------- |
| Container                | Primary Blue | ColorOpacity | #0336FF100% |
| Active icon, active text | On Primary   | ColorOpacity | #FFFFFF100% |
| Inactive icons           | On Primary   | ColorOpacity | #FFFFFF76%  |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

Owl's bottom navigation bar uses custom typography for text labels.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1L1V2fuUIMWRxl6ufFQbPw60XvVmwDUtL%2Fbottomnav-owl-type.png)

| Element    | Category | Attribute            | Value                  |
| ---------- | -------- | -------------------- | ---------------------- |
| Text label | Caption  | TypefaceFontSizeCase | RubikRegular12All caps |

------

## Specs 



# Mobile

12dp #6200ee #6200ee R98 G0 B238 Elevation 8dp All measurements are displayed in device-independent pixels (dps) 12dp #6200ee #6200eeff R98 G0 B238 A1.00 All measurements...

READ MORE

## Portrait

- 
- 
- 
- 
- 56Measurement 56
- 120 Measurement 120
- 24Measurement 24
- 12Measurement 12
- 12Measurement 12
- 16Measurement 16
- 16Measurement 16
- 
- 
- 

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F16_mdeMoej9KYqE6_7gV0qw6H-1arSKmK%2Fspecs-bottomnav-mobile-portrait.png)



*flip*

Specs



## Minimum width

- min-width: 80dpMeasurement min-width: 80dp
- 12Measurement 12
- 12Measurement 12
- 56Measurement 56
- 

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  







![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1GP6HWLDj4lpvEIJMHHwhn3MOA_pzTJ3J%2Fspecs-bottomnav-cell-minwidth.png)



*flip*

Specs



## Maximum width

- 
- 
- 
- 
- 
- 56Measurement 56
- max-width: 168dp Measurement max-width: 168dp
- 12Measurement 12
- 12Measurement 12
- 8Measurement 8
- 12Measurement 12
- 12Measurement 12
- 

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  







![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1SUQmg_cZQEKbVrwhPx2cRm745co631bb%2Fspecs-bottomnav-cell-maxwidth.png)



*flip*

Specs



## Landscape

- 
- 
- 
- 
- 
- 
- 
- 56Measurement 56
- max-width: 168dp Measurement max-width: 168dp
- 12Measurement 12
- 12Measurement 12
- 24Measurement 24
- 16Measurement 16
- 16Measurement 16
- 8Measurement 8
- 12Measurement 12
- 12Measurement 12
- 
- 
- 

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1BQUvdWjGiO7lcLtScxQxweHiSpwADC1J%2Fspecs-bottomnav-mobile-landscape.png)



*flip*

Specs



------

## Implementation 

Bottom navigation implementation support for each platform is indicated below.

[![Android Implementation-Bottom Navigation](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F183k46C0UKSP19cnAN51PW9lVayY7xLv8%2Fimplementation-android-platform.png)](https://material.io/go/android-bottom-navigation/)

## [Android Material Component](https://material.io/go/android-bottom-navigation/)

**Status:** Available

[![IOS Implementation-Bottom Navigation](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1-IUmTfmDapezoiUSt_TfVwJbZcxlSWXW%2Fimplementation-ios-platform.png)](https://material.io/go/ios-bottom-navigation/)

## [IOS Material Component](https://material.io/go/ios-bottom-navigation/)

**Status:** Available

[![Flutter Implementation-Bottom Navigation](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1-MhMXicUjgVIm_aztefWW1EqGhTkRNyj%2Fimplementation-flutter-platform.png)](https://material.io/go/flutter-bottom-navigation/)

## [Flutter Material Component](https://material.io/go/flutter-bottom-navigation/)

**Status:** Available

![Web Implementation-Bottom Navigation](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1k_XM5Xp94s4zXdyeBc94rYoRKrY49VeI%2Fimplementation-web-platform-unavail.png)

## Web Material Component

**Status:** Planned