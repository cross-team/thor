# Tooltips

Material UI (Core) Component

Reference: https://material.io/design/components/tooltips.html 



------

# Tooltips 

## Tooltips display informative text when users hover over, focus on, or tap an element.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-WU50SUpxSnZ1dHM%2Ftooltips-intro.png)

CONTENTS[Usage](https://material.io/design/components/tooltips.html#usage)[Placement](https://material.io/design/components/tooltips.html#placement)[Behavior](https://material.io/design/components/tooltips.html#behavior)[Theming](https://material.io/design/components/tooltips.html#theming)[Spec](https://material.io/design/components/tooltips.html#spec)[Implementation](https://material.io/design/components/tooltips.html#implementation)

------

## Usage 

When activated, tooltips display a text label identifying an element, such as a description of its function.



# Principles

Tooltips are transient, paired, and succinct.

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1NKDoBIXQJlK7CvtDakeW4JKwJGIODXbJ%2Ftooltips-illo-1.png)

## Transient

Tooltips appear on hover, focus, or touch, and disappear after a short duration.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1JHsq1C_aCXNiEiZsKZfRucSlcMIDEIiR%2Ftooltips-illo-3.png)

## Paired

Tooltips are always paired nearby the element with which they are associated.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F19eyHwiGBVeSa6mcRpYXKh2VSQAG-mk4E%2Ftooltips-illo-2.png)

## Succinct

Tooltips only include short, descriptive text.

------

## Placement 

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-OHl1djU3UGlVTDg%2Ftooltip-usage.png)

Do.

Use tooltips for interactive imagery.

200% zoom

1. On hover
2. On focus

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-bkwya0lJUGdQemM%2Ftooltip-usage-dont.png)

Don’t.

Don’t use tooltips to restate visible UI text.

200% zoom

1. On hover
2. On focus

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-a0Vrdnlib1R5TFk%2Ftooltip-usage-do.png)

200% zoom

1. Tooltips describe differences between similar elements
2. Tooltips distinguish actions with related iconography

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-akZBRno3UmRkeVU%2Ftooltip-usage-dont-2.png)

Don’t.

200% zoom

1. Don’t display shadows on tooltips
2. Don’t display rich information and imagery on tooltips

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-TXJwMkFpZU9abWc%2Ftooltip-position-do.png)

Do.

Keep the position of the tooltip visible.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-OG9NelYyTm9GUHc%2Ftooltip-position-dont.png)

Don’t.

Don’t crop tooltips.



# Desktop

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B54x0KDcs5U-Z1dSQVRTbTF2QlE%2Ftooltip-desktop.png)

Desktop tooltip on hover



# Mobile

<video aria-describedby="placement-figure-caption-7" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Tooltip displayed through long press

<video aria-describedby="placement-figure-caption-8" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Tooltip summoned through focus (Android only)

------

## Behavior 

A tooltip is displayed upon tapping and holding a screen element or component (on mobile) or hovering over it (desktop). Continuously display the tooltip as long as the user long-presses or hovers over the element.

## Timing

Display the tooltip for 1.5 seconds. If the user takes another action before that time ends, the tooltip will disappear.

## Motion

Over 150ms, tooltips fade in and scale up using the deceleration curve. They fade out over 75ms.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

200%100%

On desktop, tooltips appear in the center of click targets and stay in place while cursor moves within the target.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Tooltip disappears when cursor moves out of the touch targetTooltip remains while cursor moves within the touch target

------

## Theming 



# Reply Material Theme

This email app’s tooltips have been customized using Material Theming. Areas of customization include color, typography, and shape. Reply is an email app that uses...

READ MORE

This email app’s tooltips have been customized using Material Theming. Areas of customization include color, typography, and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1jBuOa1gYxM7CkfmpfCr0peI95VNaDxGi%2Ftooltips-reply-ahero.png)

Reply’s customized tooltip.

[ReplyReply is an email app that uses Material Design components and Material Theming to create an on-brand communication experience.Related Article*arrow_downward*](https://material.io/design/material-studies/reply.html#reply)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Reply’s tooltips use custom color on two elements: the container, and text string.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1lITX0ez9iXredCQ7Ro5JNLWc0qpV87qv%2Ftooltips-reply-color.png)

| Element     | Category   | Attribute    | Value       |
| ----------- | ---------- | ------------ | ----------- |
| Container   | On Surface | ColorOpacity | #232F34100% |
| Text string | Surface    | ColorOpacity | #FFFFFF100% |

## Typography

Reply’s tooltips use custom typography for the text string.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F13pxVm1l71moyZBL7habGx5XWiFuqzUx2%2Ftooltips-reply-type.png)

| Element     | Category | Attribute            | Value                           |
| ----------- | -------- | -------------------- | ------------------------------- |
| Text string | Caption  | TypefaceFontSizeCase | Work SansRegular12Sentence case |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)

[About ShapeMaterial surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.Related Article*arrow_downward*](https://material.io/design/shape/about-shape.html#about-shape)



## Shape

Reply’s tooltips use a custom container shape, with a 50% corner radius.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1kB3RWqBhknyMB0dRFj3ULnf7stLRsjdg%2Ftooltips-reply-shape.png)

| Element   | Category        | Attribute  | Value      |
| --------- | --------------- | ---------- | ---------- |
| Container | Small component | FamilySize | Rounded50% |

------

## Spec 



# Desktop

10dp #ffffff #616161e6 R97 G97 B97 A0.90 All corners Rounded: 4dp All measurements are displayed in device-independent pixels (dps)

READ MORE

- 
- CMeasurement C
- 8Measurement 8
- 8Measurement 8
- 24Measurement 24

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1RItmCm57AusCfnl63txwIH2BnOVYr4R4%2Ftooltip-spec-desktop.png)



*flip*

Specs





# Mobile

14dp #ffffff #616161e6 R97 G97 B97 A0.90 All corners Rounded: 4dp All measurements are displayed in device-independent pixels (dps)

READ MORE

- 
- 32Measurement 32
- 16Measurement 16
- 16Measurement 16
- CMeasurement C

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1BBiWJYV8wnwY6ke2l0J7EkJP3WNON8iH%2Ftooltip-spec-mobile.png)



*flip*

Specs



------

## Implementation 

Tooltips implementation support for each platform is indicated below.

![Android Implementation-Tooltips](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1zunFAynvqM5DRj5OYOdca4GxiIePQ4Ah%2Fimplementation-android-platform-unavail.png)

## Android Material Component

**Status:** Planned

[![IOS Implementation-Tooltips](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1_MnRKODL53y73I0FhpxeEIa8PO4vdE5v%2Fimplementation-ios-platform.png)](https://material.io/go/ios-tooltips/)

## [IOS Material Component](https://material.io/go/ios-tooltips/)

**Status:** Available

[![Flutter Implementation-Tooltips](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Z_Z-fB2y_YKr0FcoCWKW0Vr4ikR0v9f4%2Fimplementation-flutter-platform.png)](https://material.io/go/flutter-tooltips/)

## [Flutter Material Component](https://material.io/go/flutter-tooltips/)

**Status:** Available

![Web Implementation-Tooltips](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1NMvWSB7Gan8BwXSRfutRfXqU-p_IvIgP%2Fimplementation-web-platform-unavail.png)

## Web Material Component

**Status:** Planned