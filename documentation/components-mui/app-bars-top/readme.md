# App Bars: Top

(Material (Core) Component)

Material.io Reference: https://material.io/design/components/app-bars-top.html

---

# App bars: top

## The top app bar displays information and actions relating to the current screen.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ekbPWQqJ5sMNvJ0om7XelfzOhaWMaeyM%2Ftopappbars-howtouse-1.png)

CONTENTS[Usage](https://material.io/design/components/app-bars-top.html#usage)[Anatomy](https://material.io/design/components/app-bars-top.html#anatomy)[Behavior](https://material.io/design/components/app-bars-top.html#behavior)[Contextual action bar](https://material.io/design/components/app-bars-top.html#contextual-action-bar)[Theming](https://material.io/design/components/app-bars-top.html#theming)[Specs](https://material.io/design/components/app-bars-top.html#specs)[Implementation](https://material.io/design/components/app-bars-top.html#implementation)

------

## Usage 

The top app bar provides content and actions related to the current screen. It’s used for branding, screen titles, navigation, and actions.

It can transform into a contextual action bar.

[Understanding navigationNavigation enables users to move through an app.Related Article*arrow_downward*](https://material.io/design/navigation/understanding-navigation.html#understanding-navigation)

[Bottom app barA bottom app bar provides reachable access to a bottom navigation drawer and actions on mobile devices.Related Article*arrow_downward*](https://material.io/design/components/app-bars-bottom.html#bottom-app-bar)

[Bottom navigationBottom navigation bars allow movement between primary destinations in an app.Related Article*arrow_downward*](https://material.io/design/components/bottom-navigation.html#bottom-navigation)





# Principles

The top app bar should be persistent, guiding, and consistent.

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F18acySchb8beWUcO7NuF37V03fznutNkf%2Ftop-app-bar-illos-01.png)

## Persistent

Top app bars appear at the top of each screen in an app, and can disappear upon scroll.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1b2TZ0TSoz8OtL7ihy1Z7xFIz3xQxwrqV%2Ftop-app-bar-illos-02.png)

## Guiding

Top app bars provide a reliable way to guide users through an app.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1GKHjRJesJhqe1O4aJOST3tlM9J6OauQt%2Ftop-app-bar-illos-03.png)

## Consistent

Top app bars have a consistent position and content to increase familiarity.



# Types

There are regular top app bars and contextual action bars.

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Y9sPQk9zx0-xBtlVDWeOm7OPh5p8Pg_d%2Ftopappbars-regular.png)

## Regular

A regular top app bar

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1sej9Nb4bY284xcA-oF5k_mgyTMxWN_2q%2Ftopappbars-contextual.png)

## Contextual action bar

Contextual action bars provide actions for selected items. A top app bar can transform into a contextual action bar, remaining active until an action is taken or it is dismissed.

------

## Anatomy 

The recommended placement of elements in a top app bar for left-to-right languages is:

- Place navigation on the far left
- Place any titles to the right of navigation
- Place contextual actions to the right of navigation
- Place an overflow menu (if used) to the far right

For right-to-left languages, placement positions should be flipped.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Qq_-rc9c9cKNAJzkYEz163gVdzpN4e4J%2Ftopappbars-layout-elements-1.png)

1. ### Container

2. ### Navigation icon (optional)

3. ### Title (optional)

4. ### Action items (optional)

5. ### Overflow menu (optional)

[BidirectionalityUIs for languages that are read from right-to-left (RTL), such as Arabic and Hebrew, should be mirrored to ensure content is easy to understand.Related Article*arrow_downward*](https://material.io/design/usability/bidirectionality.html#bidirectionality)





# Bar

The bar holds the content of the top app bar. A variety of bar heights are available: Prominent top app bars can be used for...

READ MORE

The bar holds the content of the top app bar. A variety of bar heights are available:

- Regular
- Prominent
- Dense (desktop only)
- Prominent dense (desktop only)

## Prominent

Prominent top app bars can be used for longer titles, to house imagery, or to provide a stronger presence to the top app bar.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ABUkaUVb34W-enZzrzmFVSmHwsKcT00i%2Ftopappbars-customization-height-prominent-mobile-1.png)

Regular top app bar on mobileProminent top app bar on mobile

## Dense (desktop only)

The top app bar may be condensed on desktop to accommodate denser layouts.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1B6vgIvIKEohrJm8VG5Bf8JWcvRgbprhy%2Ftopappbars-customization-height-dense-desktop-1.png)

Regular top app bar on desktopDense top app bar on desktop

## Prominent dense

Prominent top app bars on desktop can have a dense state to accommodate denser layouts.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Ag5E5v0bkOOIYfXvjOcGiEqPt0bh8CgA%2Ftopappbars-customization-height-prominentdense-desktop.png)

Prominent top app bar on desktopProminent dense top app bar on desktop

## Images in bars

Bars can contain imagery. Prominent top app bars are recommended for image use because they provide more space.

Don’t use imagery that makes top app bar text and icons illegible.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1UmsSQiiLgULeUnPsyvwdtixhQ7VfqRmN%2Ftopappbars-images.png)

A prominent top app bar with imagery

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1vliQ7HbSW0ihiOQ6Wmm8XEF9eKGTIi2U%2Ftopappbars-images-dont.png)

Don’t.

Don’t place imagery in a bar that makes the top app bar’s text and icons illegible.



# Navigation icon (optional)

A navigation icon is optional. When it appears in an app bar, it’s aligned on the left of the bar. It can take any of...

READ MORE

A navigation icon is optional. When it appears in an app bar, it’s aligned on the left of the bar.

It can take any of the following forms:

- A menu icon, which opens a navigation drawer
- An up arrow, which navigating up an app’s hierarchy
- A back arrow, which returns to the previous screen

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1s3aCDrnuuEbcrc7wd6ce2lMuKkv55UD4%2Ftopappbars-navigation-icon.png)



# Title (optional)

The app bar title can be used to describe: By default, titles are left aligned on desktop. The default position of titles on mobile and...

READ MORE

The app bar title can be used to describe:

- The screen a user is currently on
- The section the user is currently in
- The app being used

By default, titles are left aligned on desktop. The default position of titles on mobile and tablet depends on the platform. More information on this is available in [cross-platform adaptation.](https://material.io/design/platform-guidance/cross-platform-adaptation.html)

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1id_xzCgqZtgdjZUENjw15zhz6qPbOjNL%2Ftopappbars-title-long.png)

Do.

If title text is long, use a prominent app bar and wrap the title to two lines.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F11tWJwGC9sYufnmChBRVcIsZ7QEzHAFmF%2Ftopappbars-layout-title-dont-wrapped.png)

Don’t.

Don’t wrap text in a regular top app bar.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1j2J5CkXzx517iTNUgoT2mMs3vg0PxkaQ%2Ftopappbars-layout-title-dont-truncated.png)

Don’t.

Don’t truncate text, hiding the full title may cause misunderstanding.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1bNlOaFJXWju-JGfcROgHo1fKUURuL7Kf%2Ftopappbars-layout-title-dont-shrink.png)

Don’t.

Don’t shrink text to fit on a single line.



# Action items and overflow menu (optional)

App actions are placed on the right side of an app bar, either as icons or in an overflow menu. Overflow menus differ across mobile...

READ MORE

App actions are placed on the right side of an app bar, either as icons or in an overflow menu. Overflow menus differ across mobile platforms. For more guidance refer to [cross-platform adaptation.](https://material.io/design/platform-guidance/cross-platform-adaptation.html)

## Icon placement

Place most-used actions on the left, progressing towards the least-used actions on the far right. Any remaining actions that don’t fit on the app bar can go into an overflow menu.

Actions move into and out of the overflow menu as the app bar width changes, such as if a device is rotated from landscape to portrait orientation. More guidance on this is available in [top app bar behavior.](https://material.io/design/components/app-bars-top.html#behavior)

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1z18kQQ7KEniFRbemsIpcMhNl_KHbKobD%2Ftopappbars-layout-actionoverflow.png)

Do.

Order action items by putting the most-used action (1) on the far left, second most used action (2) to it’s right, and so on. Any remaining or secondary actions should be placed in an overflow menu (3).

------

## Behavior 



# Scrolling

Upon scrolling, the top app bar can remain in place, or transform in the following ways: When the top app bar scrolls, its elevation above...

READ MORE

Upon scrolling, the top app bar can remain in place, or transform in the following ways:

- Scrolling upward hides the top app bar
- Scrolling downward reveals the top app bar

When the top app bar scrolls, its elevation above other elements becomes apparent.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>
The top app bar disappears upon scrolling up, and appears upon scrolling down.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>
Top app bars can be positioned at the same elevation as content. Upon scroll, they increase elevation and let content scroll behind them.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>
When scrolling up, prominent top app bars using imagery can transform into normal top app bars. They should not return to prominent mode until the user scrolls back to the top of the page.



# Nesting actions

When a screen is resized, the top app bar resizes with it. Actions are consolidated into the overflow menu. The actions move to the overflow...

READ MORE

When a screen is resized, the top app bar resizes with it. Actions are consolidated into the overflow menu.

## Action positioning

The actions move to the overflow menu from right to left, making the most-used action the last to be moved to the overflow menu.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>
As a top app bar is resized, actions move to the overflow menu from right to left.

Scaled down to 62.5%

------

## Contextual action bar 



# Usage

A top app bar can transform into a contextual action bar to provide contextual actions to selected items. For example, upon user selection of photos...

READ MORE

A top app bar can transform into a contextual action bar to provide contextual actions to selected items. For example, upon user selection of photos from a gallery, the top app bar transforms to a contextual app bar with actions related to the selected photos.

When a top app bar transforms into a contextual action bar, the following changes occur:

- The bar color changes
- Navigation icon is replaced with a close icon
- Top app bar title text converts to contextual action bar text
- Top app bar actions are replaced with contextual actions

Upon closing, the contextual action bar transforms back into a top app bar.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>
Top app bar transforming into a contextual action bar



# Anatomy

When a top app bar transforms into a contextual action bar, the bar should change color to indicate a change of state.

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F10mWSsrUaFk7CJQdjDTyq3wp6tEdIyuPE%2Ftopappbars-contextualactionbar-elements.png)

1. ### Close button (instead of a navigation icon)

2. ### Contextual title

3. ### Contextual actions

4. ### Overflow menu (optional)

## Bar

When a top app bar transforms into a contextual action bar, the bar should change color to indicate a change of state.

------

## Theming 



# Fortnightly Material Theme

This news app’s top app bar has been customized using Material Theming. Areas of customization include color and typography. Fortnightly is a news app that...

READ MORE

This news app’s top app bar has been customized using Material Theming. Areas of customization include color and typography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1fDn3ABuLI47QoB_qloFUzoxC4i70RIO1%2Fappbartop-fortnightly-ahero.png)

Fortnightly’s customized top app bar

[FortnightlyFortnightly is a news app that uses Material Design components and Material Theming to create an on-brand, content-focused experience.Related Article*arrow_downward*](https://material.io/design/material-studies/fortnightly.html#fortnightly)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F11Wns7LiOQT78FUIWigjALXppZDhQQSmI%2Fappbartop-fortnightly-color.png)

| Element     | Category   | Attribute    | Value       |
| ----------- | ---------- | ------------ | ----------- |
| Container   | Surface    | ColorOpacity | #FFFFFF100% |
| Text, icons | On Surface | ColorOpacity | #000000100% |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1rsqIQChfKsdkvGj7YLQaybfqQFxiW95k%2Fappbartop-fortnightly-type.png)

| Element | Category | Attribute            | Value                               |
| ------- | -------- | -------------------- | ----------------------------------- |
| Text    | H6       | TypefaceFontSizeCase | MerriweatherBold Italic20Title case |



# Rally Material Theme

This financial app’s top app bar has been customized using Material Theming. Areas of customization include color and typography. Rally is a personal finance app...

READ MORE

This financial app’s top app bar has been customized using Material Theming. Areas of customization include color and typography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1XduqwetWetIIabvb9dFFlbqCxEvkbyks%2Fappbartop-rally-ahero.png)

Rally’s customized top app bar

[RallyRally is a personal finance app that demonstrates how Material Design can be used for finance.Related Article*arrow_downward*](https://material.io/design/material-studies/rally.html#rally)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1GqYbH2df_PyYYRY3drFgP71wLPFvGz61%2Fappbartop-rally-color.png)

| Element   | Category   | Attribute    | Value       |
| --------- | ---------- | ------------ | ----------- |
| Container | Surface    | ColorOpacity | #363640100% |
| Text      | On Surface | ColorOpacity | #FFFFFF100% |
| Icons     | On Surface | ColorOpacity | #FFFFFF60%  |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1QpiS8Ds4PcaPFQqH6NSn6VctjZPxjKtj%2Fappbartop-rally-type.png)

| Element | Category | Attribute            | Value                               |
| ------- | -------- | -------------------- | ----------------------------------- |
| Text    | H6       | TypefaceFontSizeCase | Roboto CondensedRegular20Title case |



# Shrine Material Theme

This retail app’s top app bar has been customized using Material Theming. Areas of customization include color and typography. Shrine is a lifestyle and fashion...

READ MORE

This retail app’s top app bar has been customized using Material Theming. Areas of customization include color and typography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1OuPS0_js3ZdzaE7lzLPlnGBrpuH7G0cQ%2Fappbartop-shrine-ahero.png)

Posivibe’s customized top app bar

[ShrineShrine is a lifestyle and fashion brand that demonstrates how Material Design can be used in e-commerce.Related Article*arrow_downward*](https://material.io/design/material-studies/shrine.html#shrine)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1fxpLeUY3VMNY0syjHasQKfz8DQxaaSSO%2Fappbartop-shrine-color.png)

| Element     | Category   | Attribute    | Value       |
| ----------- | ---------- | ------------ | ----------- |
| Container   | Primary    | ColorOpacity | #FEDBD0100% |
| Text, icons | On Primary | ColorOpacity | #442C2E100% |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Bqc9kMRhbqt8UdFvAW18T0DgMoRFWGb6%2Fappbartop-shrine-type.png)

| Element | Category | Attribute            | Value                   |
| ------- | -------- | -------------------- | ----------------------- |
| Text    | H6       | TypefaceFontSizeCase | RubikMedium20Title case |

------

## Specs 



# Mobile

20dp #ffffff #6200eeff R98 G0 B238 A1.00 #ffffff R255 G255 B255 Elevation 4dp All measurements are displayed in device-independent pixels (dps) 24dp #ffffff #fffff R255...

READ MORE

## Regular top app bar

- 
- 
- 360 Measurement 360
- 56Measurement 56
- 24Measurement 24
- 16Measurement 16
- 16Measurement 16
- 24Measurement 24
- 24Measurement 24
- 32Measurement 32
- 16Measurement 16
- 20Measurement 20
- 16Measurement 16
- 
- 
- 
- 

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1CT0nXU1WKWpQdyHBdRvnCwdXRZ6pmuuV%2Fspec-topappbar-mobile-regular.png)



*flip*

Specs



## Extended top app bar

- 
- 
- 
- 
- 
- 
- 24Measurement 24
- 128Measurement 128
- 16Measurement 16
- 28Measurement 28
- 24Measurement 24
- 24Measurement 24
- 16Measurement 16
- 72 Measurement 72
- 360 Measurement 360
- 16Measurement 16
- 
- 
- 
- 

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1-7_btXUxK-QlxXKNmXnXVKPEQQdxHdFM%2Fspec-topappbar-mobile-extended.png)



*flip*

Specs



------

## Implementation 

Top app bar implementation support for each platform is indicated below.

[![Android Implementation-Top app bar](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1lfTV_ht6od2vuAU_DdiHg1x7z6h5FBm5%2Fimplementation-android-platform.png)](https://material.io/go/android-app-bar-top/)

## [Android Material Component](https://material.io/go/android-app-bar-top/)

**Status:** Available

[![IOS Implementation-Top app bar](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1qrvyoXY-Scvjlol2SGdhuAXdVtTbul3I%2Fimplementation-ios-platform.png)](https://material.io/go/ios-app-bar-top/)

## [IOS Material Component](https://material.io/go/ios-app-bar-top/)

**Status:** Available

[![Flutter Implementation-Top app bar](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1OHh8jh9Bs5fRIpsURqwQpo91dEMnAI_D%2Fimplementation-flutter-platform.png)](https://material.io/go/flutter-app-bar-top/)

## [Flutter Material Component](https://material.io/go/flutter-app-bar-top/)

**Status:** Available

[![Web Implementation-Top app bar](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F11riJeMF-YbZJFVHzzQ4VwNJsTXPy_8J4%2Fimplementation-web-platform.png)](https://material.io/go/web-app-bar-top/)

## [Web Material Component](https://material.io/go/web-app-bar-top/)

**Status:** Available