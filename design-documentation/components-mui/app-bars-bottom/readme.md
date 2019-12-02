# App Bars: Bottom

Material (Core) Component

Material.io Reference: https://material.io/design/components/app-bars-bottom.html



---

# App bars: bottom 

## A bottom app bar displays navigation and key actions at the bottom of mobile screens.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1PrVPyUvR5HvW5KcvIIy9s3T52Vy9jwN9%2Fbottom-app-bar-intro.png)

CONTENTS[Usage](https://material.io/design/components/#usage)[Anatomy](https://material.io/design/components/#anatomy)[Behavior](https://material.io/design/components/#behavior)[Theming](https://material.io/design/components/#theming)[Specs](https://material.io/design/components/#specs)[Implementation](https://material.io/design/components/#implementation)

------

## Usage 

Bottom app bars provide access to a bottom navigation drawer and up to four actions, including the floating action button.

[Navigation drawerNavigation drawers provide access to the navigation destinations of your app.Related Article*arrow_downward*](https://material.io/design/components/navigation-drawer.html#navigation-drawer)

[Floating Action ButtonA floating action button (FAB) represents the primary action for a screen.Related Article*arrow_downward*](https://material.io/design/components/buttons-floating-action-button.html#floating-action-button)





# Principles

Bottom app bars are actionable, flexible, and ergonomic.

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1E17DU2gbgd7eVGPKxt2AYoxztpaNRP6M%2Fbottom-app-bar-illos-01.png)

## Actionable

Bottom app bars highlight important screen actions and raise awareness of the floating action button.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F10Aso0V4_rLbm4Ri-ZHlYmgyyiHT7-LPX%2Fbottom-app-bar-illos-02.png)

## Flexible

A bottom app bar’s layout and actions change based on the needs of the screen.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F15IBNsrUUn8BOGjsxelXVmuZD-Y7z_yIf%2Fbottom-app-bar-illos-03.png)

## Ergonomic

The bottom app bar is easy to reach from a handheld position on a mobile device.

[Top App BarThe top app bar displays information and actions relating to the current view.Related Article*arrow_downward*](https://material.io/design/components/app-bars-top.html#top-app-bar)

[Bottom navigationBottom navigation bars allow movement between primary destinations in an app.Related Article*arrow_downward*](https://material.io/design/components/bottom-navigation.html#bottom-navigation)





# When to use

Bottom app bars should be used for: Bottom app bars shouldn’t be used for:

READ MORE

Bottom app bars should be used for:

- Mobile devices only
- Access to a bottom navigation drawer
- Screens with two to five actions

Bottom app bars shouldn’t be used for:

- Apps with a bottom navigation bar
- Screens with one or no actions

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1jE77atbSz5gSZOwmVjo3dNUs0bLAJhES%2Fusage-when-do.png)

Do.

Use a bottom app bar to provide convenient access to actions.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F18qwRs2OFNaJalt44tgUzZmQ_zDSWNv5K%2Fusage-when-dont.png)

Don’t.

Don’t use a bottom app bar on screens with one or no actions (other than a FAB).

------

## Anatomy 

Bottom app bars can contain actions that apply to the context of the current screen. They include a navigation menu control on the far left and a floating action button (when one is present). If included in a bottom app bar, an overflow menu control is placed at the end of other actions.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1H4d0USCWDGIIP6ihya6whGdnbw8-UeDX%2Fanatomy-elements.png)

1. ### Container

2. ### Navigation drawer control

3. ### Floating action button (FAB)

4. ### Action icon

5. ### Overflow menu control



# Positioning

Bottom app bars have three different layouts based on the presence of a FAB and its position in the bar. These layouts dictate the number...

READ MORE

Bottom app bars have three different layouts based on the presence of a FAB and its position in the bar. These layouts dictate the number of actions that can be included in the bar.

## Centered FAB

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F17DSHC0GjYYNyflJpSB63M9KVZhQDQw2h%2Fanatomy-fab-center.png)

Do.

Use bottom app bars on home screens that feature a navigation menu control and a prominent action (such as a FAB). A minimum of one and a maximum of two additional actions can be placed on the opposite side of the bar.

## End FAB

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F10Qk_VJHQ3TGxeQZA-R7GRtlNxPHkyI7j%2Fanatomy-fab-right.png)

Do.

Use a FAB on secondary screens that require a floating action button and three to four additional actions.

## No FAB

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1STHFRgIzHVCN_kx0Pzt8HfG6JEJOCGYz%2Fanatomy-fab-none.png)

Do.

When no floating action button is needed, the bottom app bar can accommodate a navigation menu icon and up to four actions aligned on the opposing edge.

## Landscape

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F18GYA0RkKiqiUswp8BPHzEkNAGm_cIKGj%2Fanatomy-landscape.png)

Do.

In landscape orientation, actions remain aligned to screen edges for easy handheld access



# Floating Action Button

When present, floating action buttons (FABs) are displayed on bottom app bars in one of two ways: Use an inset to increase the visual prominence...

READ MORE

When present, floating action buttons (FABs) are displayed on bottom app bars in one of two ways:

1. **Overlap**: The FAB is at a higher elevation than the bottom app bar, and has no effect on the bar’s shape.
2. **Inset**: The FAB is at the same elevation as the bottom app bar, and the bar shape transforms to let the FAB dock in a notch carved into the bottom app bar.

Use an inset to increase the visual prominence of a FAB or accentuate customized element shapes. Refer to the [Theming](https://material.io/design/components/app-bars-bottom.html#theming) section for more guidance on inset FAB’s in a bottom app bar.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1hIkcwMS6C3V2ZdFJmYV_VAIWPfU6dxXC%2Fanatomy-fab-overlap.png)

Overlapping FAB

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1xkb-3HQEAsb0IA292GLCziMMh6QE1YIX%2Fanatomy-fab-cut.png)

Inset FAB

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1gXnDalMO0XMkGKSe-fqAfbSX_4kk9z-9%2Fanatomy-fab-dont.png)

Don’t.

Do not place a FAB outside of a bottom app bar, as it makes it harder to reach.

------

## Behavior 



# Layout

To support the intent of different sections of an app, the layout and actions of a bottom app bar can be changed to suit each...

READ MORE

To support the intent of different sections of an app, the layout and actions of a bottom app bar can be changed to suit each screen.

For example, screens can display more or fewer actions according to what suits the screen content best.

<video aria-describedby="behavior-figure-caption-0" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>
To showcase a primary action, this bottom app bar uses the centered FAB layout on its home screen. When viewing a message, the bottom app bar layout changes to the “End FAB” layout to accommodate additional contextual actions.





# Scrolling

Upon scroll, the bottom app bar can appear and disappear.

READ MORE

Upon scroll, the bottom app bar can appear or disappear:

- **Scrolling downward** hides the bottom app bar. If a FAB is present, it detaches from the bar and remains on screen.
- **Scrolling upward** reveals the bottom app bar, and reattaches to a FAB if one is present.

A bottom app bar can contain a shape, such as a notch, along its edge to accommodate the FAB. As the bar detaches from the FAB, the bar returns to its default shape. Upon returning to the screen and reattaching to the FAB, the bar regains its notched shape.

<video aria-describedby="behavior-figure-caption-1" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>
A FAB can remain on screen, even as a bottom app bar hides when scrolled off-screen.



# Elevation

The bottom app bar has an elevation of 8dp. When paired with a FAB, the FAB’s resting and raised heights should be increased to remain...

READ MORE

The bottom app bar has an elevation of 8dp. When paired with a FAB, the FAB’s resting and raised heights should be increased to remain visible above the bottom app bar.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Aefoiuq4s_kUV2iY71LOqS_9dd3HcPmw%2Fbehavior-elevation-section.png)

Content (0dp)Snackbar (6dp)Bottom app bar (8dp)Floating action button (12dp resting)Bottom navigation drawer (16dp)

Menus that are generated by the bottom app bar (such as a bottom navigation drawer or overflow menu) open as bottom sheets at a higher elevation than the bar.

<video aria-describedby="behavior-figure-caption-3" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>
This bottom navigation drawer opens from a bottom app bar. The drawer opens in front of the bottom app bar, and displays a top app bar to close the drawer when it reaches full height.

## Elements that cover the bottom app bar

The bottom app bar can be covered by keyboards and other temporary surfaces. If your app requires frequent obstruction of the bar, another component should be used instead.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1JCfj-_LZx0ymTOuCT5yw11qkbCiuV4K3%2Fbehavior-keyboard-do.png)

Do.

A keyboard can temporarily cover a bottom app bar.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1cbgsJB28yCIKbnt3jyBiBrxgv7VxuhaL%2Fbehavior-keyboard-dont.png)

Don’t.

Don’t attach a bottom app bar to the top of the keyboard.



# Placement

A bottom app bar can display a navigation menu icon to open a bottom navigation drawer, but the bar doesn’t contain any navigation actions itself...

READ MORE

## Navigation

A bottom app bar can display a navigation menu icon to open a bottom navigation drawer, but the bar doesn’t contain any navigation actions itself (such as Up navigation to a home screen or a close icon). App navigation should be placed in another component such as a top app bar, or embedded on-screen.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1THzRVZz1_ZghhgaUfSmNWVpiCyPvvJQD%2Fplacement-navigation-do.png)

Do.

Provide navigation outside of a bottom app bar that allows users to return to the previous app screen.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1k7UL1gpsimgUPk-kracQn1rztyopsWbV%2Fplacement-navigation-dont.png)

Don’t.

Don’t place navigation actions in a bottom app bar, as they can be covered by temporary surfaces.

## Pairing with a top app bar

When used with a bottom app bar, top app bars can provide upwards navigation and additional actions. Throughout an app, actions should be organized and divided consistently across both bars.

The following items benefit from specific placement:

- Place a single navigation menu control in a bottom app bar (for reachability)
- Place a single overflow menu control as the trailing action
- Place actions, like Search, in a consistent location throughout the app
- Place destructive actions, such as “Delete,” in the top app bar

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1uMIJeZicJJACwoQquyJO4o0ovLV2yrqx%2Fplacement-top-app-bar-do.png)

Do.

Use a top app bar as a container for upwards navigation on secondary screens.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F16oUEVJpU5zzTS5AqUgN75iFrLAPRIpYf%2Fplacement-top-app-bar-dont.png)

Don’t.

On a home screen, don’t place a navigation menu control in both a top and bottom app bar. Only one app bar should have this control.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1axQM_eykG-5a7MzFhupQyQN0qc02du6k%2Fplacement-top-app-bar-bottom-primary.png)

Do.

Place an overflow menu as the last action between the app bars.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1CN228lXZHmsznh_teYsS1IDuZ90Dkk_d%2Fplacement-top-app-bar-bottom-fixed.png)

Do.

A bottom app bar can provide consistent access to actions, such as navigation and search, allowing the top app bar to hold contextual, screen-specific actions.

[SnackbarSnackbars provide brief feedback about an operation through a message at the bottom of the screen.Related Article*arrow_downward*](https://material.io/design/components/snackbars.html#snackbar)



## Snackbars

To avoid obstruction, snackbars and toasts should animate in place vertically above a bottom app bar. Refer to [Snackbars](https://material.io/design/components/snackbars.html) for more guidance on its layout and positioning.

<video aria-describedby="behavior-figure-caption-12" class="video-player__video animatable js-video-player js-video-load anim-appear" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 1 !important; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>
Do.

Inset a snackbar or toast above a bottom app bar and FAB.

<video aria-describedby="behavior-figure-caption-13" class="video-player__video animatable js-video-player js-video-load anim-appear" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 1 !important; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>
Don’t.

Don’t place a snackbar in front of a bottom app bar or FAB.

------

## Theming 



# Posivibes Material Theme

This social media app’s bottom app bar has been customized using Material Theming. Areas of customization include color and shape. The Material Design color system...

READ MORE

This social media app’s bottom app bar has been customized using Material Theming. Areas of customization include color and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1XkzfKt_zJQXv0GWH4wy0tfNNI5dMfkmp%2Fappbarbottom-posivibes-ahero.png)

Posivibe’s customized bottom app bar

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Posivibe’s bottom app bar uses custom color on two elements: the container and icons.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1XxtBEgwK5EtM-i0zlzxeEh1Fw5lN2IPQ%2Fappbarbottom-posivibes-color.png)

| Element   | Category   | Attribute    | Value       |
| --------- | ---------- | ------------ | ----------- |
| Container | Surface    | ColorOpacity | #FFFFFF100% |
| Icons     | On Surface | ColorOpacity | #000000100% |

[About ShapeMaterial surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.Related Article*arrow_downward*](https://material.io/design/shape/about-shape.html#about-shape)



## Shape

Posivibe’s bottom app bar uses a custom shape on the top edge of the container.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1w7ALaXnbPwdPY5baAocfCv2Pyt748hJA%2Fappbarbottom-posivibes-shape.png)

| Element   | Attribute | Value                                         |
| --------- | --------- | --------------------------------------------- |
| Container | Top edge  | TriangleEdge SVGPath data: “l 42 42 l 42 -42" |

For further path syntax guidance, see https://www.w3.org/TR/SVG/paths.html.

------

## Specs 



# Mobile portrait

Bottom app bars are a mobile-only component and are not applicable for tablet or desktop use. Minimum 1, maximum of 2 actions aligned to opposite...

READ MORE

Bottom app bars are a mobile-only component and are not applicable for tablet or desktop use.

Minimum 1, maximum of 2 actions aligned to opposite edge of navigation menu

## FAB Center

- 
- 
- 56 Measurement 56
- 16Measurement 16
- 16Measurement 16
- 24Measurement 24
- 16Measurement 16
- 16Measurement 16
- 24Measurement 24
- 56Measurement 56
- 
- 
- 
- 



- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1a5wCJ3uuhMKzC4zkz6B0gJk7-o8hdAoh%2Fspec-bottomappbar-fab-center.png)



*flip*

Specs



## FAB Center cut

- 
- 16Measurement 16
- 16Measurement 16
- 24Measurement 24
- 16Measurement 16
- 16Measurement 16
- 56Measurement 56
- 24Measurement 24
- 8Measurement 8
- 
- 
- 
- 56



- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1PYMpzbVrpsxUIczDA422JTLYogsyeoz4%2Fspec-bottomappbar-fab-cut.png)



*flip*

Specs



## FAB End

Minimum 2, maximum of 4 actions aligned to opposite edge of the FAB

- 
- 
- 
- 
- 
- 
- 56Measurement 56
- 24Measurement 24
- 16Measurement 16
- 24Measurement 24
- 24Measurement 24
- 24Measurement 24
- 16Measurement 16
- 16Measurement 16
- 16Measurement 16
- 28Measurement 28
- 
- 
- 
- 
- 56



- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1mF8EptVr7aT_u7luDwSZRhgLobvlHb5n%2Fspec-bottomappbar-fab-right.png)



*flip*

Specs



## No FAB

Minimum 2, maximum of 4 actions aligned on opposite edge of navigation menu

- 56Measurement 56
- 
- 
- 
- 
- 



- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F19rgPwToJHE6Q3tZJCgBtEXUdd1XQft-s%2Fspec-bottomappbar-fab-none.png)



*flip*

Specs





# Mobile landscape

Bottom app bars are a mobile-only component and are not applicable for tablet or desktop use. Minimum 1, maximum of 2 actions aligned to opposite...

READ MORE

Bottom app bars are a mobile-only component and are not applicable for tablet or desktop use.

Minimum 1, maximum of 2 actions aligned to opposite edge of navigation menu

- 
- 
- 
- 
- 48Measurement 48
- 24Measurement 24
- 16Measurement 16
- 16Measurement 16
- 24Measurement 24
- 12Measurement 12
- 12Measurement 12
- 
- 
- 
- 56



- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1QanOs9DVHXk2-6B2ZPn51Od2ECsAMm0q%2Fspec-bottomappbar-landscape.png)



*flip*

Specs



------

## Implementation 

Bottom app bar implementation support for each platform is indicated below.

[![Android Implementation-Bottom App Bar](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1UOOR5UqhIC0APfGUrC8bqVJl7LMAauOy%2Fimplementation-android-platform.png)](https://material.io/go/android-app-bar-bottom/)

## [Android Material Component](https://material.io/go/android-app-bar-bottom/)

**Status:** Available

[![IOS Implementation-Bottom App Bar](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F16rRVPzp8EoUZW4zm1FAzs7R6wnqScuD-%2Fimplementation-ios-platform.png)](https://material.io/go/ios-app-bar-bottom/)

## [iOS Material Component](https://material.io/go/ios-app-bar-bottom/)

**Status:** Available

[![Flutter Implementation-Bottom App Bar](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1dIvdcFChoIXzBeE9HU2s5vsa5WM_h65O%2Fimplementation-flutter-platform.png)](https://material.io/go/flutter-app-bar-bottom/)

## [Flutter Material Component](https://material.io/go/flutter-app-bar-bottom/)

**Status:** Available

![Web Implementation-Bottom App Bar](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F16XrmJMDj6ZcSgqlTBYkNCiq43L3M1bHg%2Fimplementation-web-platform-unavail.png)

## Web Material Component

**Status:** Planned