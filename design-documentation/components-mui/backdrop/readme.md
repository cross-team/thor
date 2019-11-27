# Backdrop

(Material (Core) Component)

[Material.io Reference](https://material.io/design/components/backdrop.html)



------

# Backdrop

## A backdrop appears behind all other surfaces in an app, displaying contextual and actionable content.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1PxBRcPZkTzJFN7vGcNrKDoekzzE7FrZY%2Fbackdrop-intro.png)

CONTENTS[Usage](https://material.io/design/components/backdrop.html#usage)[Anatomy](https://material.io/design/components/backdrop.html#anatomy)[Behavior](https://material.io/design/components/backdrop.html#behavior)[Theming](https://material.io/design/components/backdrop.html#theming)[Specs](https://material.io/design/components/backdrop.html#specs)[Implementation](https://material.io/design/components/backdrop.html#implementation)

------

## Usage 

A backdrop is composed of two surfaces: a back layer and a front layer. The back layer displays actions and context, and these control and inform the front layer’s content.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F180LelLR8OZFuDQMVYsKfSPV4vfUXjioR%2Fusage-01.png)

Back layerFront layer

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1IDgDWU2C9cLujBAlcYv9Jlrfo4pV76Wv%2Fusage-02.png)

When concealed, the back layer can provide contextual information about the front layer.When revealed, the back layer displays contextual controls that relate to the front layer.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1X4A16PCyC1bmfXPtU8sOy1x4n8rn6Gv3%2Fusage-04.png)

Back layer content can be navigational, changing the content displayed on the front layer.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ri2zTYAhsUgD0b5v7_CuUNwPCM1gLrL5%2Fusage-05.png)

Back layer content can filter front layer content.



# Principles

The backdrop is immediate, relevant, and contextual.

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1padr2h_zOJOu9Z0u8KXRPwsmUdUrvI6t%2Fbackground-illos-03.png)

## Relevant

The backdrop’s back layer is persistent, displaying controls and content that relate to the front layer.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1S1KWnCC6AppTQizKqgrHVbRmr96zFigQ%2Fbackground-illos-01.png)

## Immediate

The backdrop’s back layer can be accessed from any scroll position.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1rfi8lANW4ADLhYExURp9nLS6EYX1T9Ui%2Fbackground-illos-02.png)

## Contextual

The backdrop focuses attention on one layer at a time.

------

## Anatomy 

A backdrop consists of a back layer, a front layer, and an optional subheader. Either the back layer or the front layer can be active at a time.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1eErd0lw7i8gnPvQcc-aLLzbtyJu_8xPs%2Felements-01.png)

### 1. Back layer 2. Front layer 3. Subheader (optional)  



# Active front layer

The front layer always appears in front of the back layer. It is displayed at full width and holds primary content. Material Design has three-dimensional...

READ MORE

The front layer always appears in front of the back layer. It is displayed at full width and holds primary content.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F166qHCqBJjlW7gOrNAOfFm_ye9HEVf7US%2Fnested-02.png)

The front layer can contain browsing components, such as:

1. Text lists
2. Image lists
3. Cards
4. Text

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1dh9qeBqeYp1s1XyQZt1tNIlfGWb6ebdg%2Ffrontlayer-hide-reveal-001.png)

When the front layer is active, the backlayer contains a reveal affordance (1). Tapping this reveals the backlayer.

[AttributesMaterial Design has three-dimensional qualities that are reflected in its use of surfaces, depth, and shadows.Related Article*arrow_downward*](https://material.io/design/environment/surfaces.html#attributes)



## Subheader (Optional)

The subheader is a fixed area on the front layer that contains a title and optional iconography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1OBqotbbTnpwiqG8761oYI0yBVD4eagN_%2Ffrontlayer-subheader.gif)

The subheader can be fixed in place, while content below it on the front layer scrolls independently.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1YoGxnrD5QUklEjBWmxWpKvNkQtZyGxXF%2Fprimary-surface-01.png)

Both the subheader (A) and scrollable content area (B) on the front layer have an elevation of 1dp.



# Active back layer

The back layer appears at the lowest elevation (0dp) in an app, filling the entire background. It holds actionable content that is relevant to the...

READ MORE

The back layer appears at the lowest elevation (0dp) in an app, filling the entire background. It holds actionable content that is relevant to the front layer.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F11gTvBZWLa0RLKDsbQTU_KXmeCnEH1WlR%2Fnested-01.png)

The back layer contains components for navigation or filtration, such as:

1. Navigation
2. Steppers
3. Text fields
4. Selection controls

These components affect content on the front layer.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F12QB_PQPrRz0H1OCG6C0MpoiIdvi95cSF%2Fback-surface-01.png)

A: The elevation value for the backdrop’s back layer is 0dp.

When the back layer is active, the front layer can contain text and iconography, or a scrim, as affordances that provide a way to conceal the back layer.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1KOorvod3VXavmFmWkFv-1jNTMF9MAYu-%2Felements-03.png)

Icon and textScrim

------

## Behavior 



# Revealing the back layer

To reveal the back layer, interact with any actions that appear on it. This back layer can be revealed by tapping the menu icon (1)....

READ MORE

To reveal the back layer, interact with any actions that appear on it.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1vlv3xa2w1kuE-kpl2G6yoqj24hMtIQO6%2Fbehavior-reveal-01.png)



This back layer can be revealed by tapping the menu icon (1).



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1y-mLNpsL5uIcVpBTGYQIhMRj4-XRQA2z%2Fbehavior-reveal-02-input.png)



This back layer can be revealed by tapping any input field (1, 2, 3).



<video aria-describedby="behavior-figure-caption-2" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Don’t.

Don’t use the swipe gesture on the front layer to reveal the back layer.

<video aria-describedby="behavior-figure-caption-3" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

When the back layer is revealed, the front layer slides out of view.

<video aria-describedby="behavior-figure-caption-4" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

The height of the back layer is based on the size of its content.



# Concealing the back layer

The back layer can be concealed by either interacting with the the front layer or tapping a conceal affordance on either layer.

READ MORE

The back layer can be concealed by either interacting with the the front layer or tapping a conceal affordance on either layer.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1sbZKj468jldURpS3f58kIKwHbKZF9Z1o%2Fbehavior-conceal-01.png)

This back layer can be concealed by tapping the back layer close icon (1), the entire front layer (2), or the front layer arrow (3).

<video aria-describedby="behavior-figure-caption-6" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

When the back layer is revealed, the front layer content becomes inactive. To conceal the back layer, tap either anywhere on the front layer or the back layer’s conceal affordance.

<video aria-describedby="behavior-figure-caption-7" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

To conceal the back layer when the front layer isn’t visible, tap the close affordance.



# Content scrolling

Content on the front and back layers has different scroll behaviors and restrictions.

READ MORE

Content on the front layer has different scrolling behaviors (and restrictions) than content on the back layer.

<video aria-describedby="behavior-figure-caption-8" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Do.

Content on the front layer can scroll horizontally.

<video aria-describedby="behavior-figure-caption-9" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Don’t.

Don’t let front layer content extend beyond its container, overlapping the back layer.

<video aria-describedby="behavior-figure-caption-10" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Use a subheader to scroll content vertically on the front layer.

<video aria-describedby="behavior-figure-caption-11" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

When using a subheader, content on the front layer can retain its scroll position when the back layer is exposed.

<video aria-describedby="behavior-figure-caption-12" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Do.

If the front layer is minimized, content on the back layer can scroll vertically.

<video aria-describedby="behavior-figure-caption-13" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Caution.

Be careful when scrolling back layer content in a small area. Since the exposed backdrop is modal, expose as much content as possible.

------

## Theming 



# Crane Material theme

This travel app’s backdrop has been customized using Material Theming. Areas of customization include color and shape. Crane is a travel app that uses Material...

READ MORE

This travel app’s backdrop has been customized using Material Theming. Areas of customization include color and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1D9AX9wxwgFFtNPVs0t6XwBFLlyZWXoof%2Fbackdrop-crane-ahero.png)

Crane’s customized backdrop.

[CraneCrane is a travel app that uses Material Design components and Material Theming to create a personalized on-brand experience.Related Article*arrow_downward*](https://material.io/design/material-studies/crane.html#crane)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Crane’s backdrop uses custom color on four elements: the back layer, the front layer, back layer icons, and front layer text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1seNmXlGgnlMRYf4SJ-FB7XtqHKqecN_E%2Fbackdrop-crane-color.png)

| Element          | Category   | Attribute    | Value       |
| ---------------- | ---------- | ------------ | ----------- |
| Back layer       | Primary    | ColorOpacity | #5C1349100% |
| Back layer icons | On Primary | ColorOpacity | #FFFFFF100% |
| Front layer      | Surface    | ColorOpacity | #FFFFFF100% |
| Front layer text | On Surface | ColorOpacity | #00000060%  |

[About ShapeMaterial surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.Related Article*arrow_downward*](https://material.io/design/shape/about-shape.html#about-shape)



## Shape

Crane’s backdrop uses custom shapes on the top corners of the front layer.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1vuWibMXi31U_oiApp700S3DgG-jlzXlE%2Fbackdrop-crane-shape.png)

| Element     | Category        | Attribute  | Value                      |
| ----------- | --------------- | ---------- | -------------------------- |
| Front layer | Large component | FamilySize | Rounded16;16; n/a; n/a dp* |

*The backdrop can only be shaped on the top left and top right corners.



# Shrine Material theme

Shrine is a retail app, and its backdrop has been customized using Material Theming. Areas of customization include color and shape. Shrine is a lifestyle...

READ MORE

Shrine is a retail app, and its backdrop has been customized using Material Theming. Areas of customization include color and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1wpXk6q-WcVaLZksQb7DGO0mbjXPUW9Wl%2Fbackdrop-shrine-ahero.png)

Shrine's customized backdrop

[ShrineShrine is a lifestyle and fashion brand that demonstrates how Material Design can be used in e-commerce.Related Article*arrow_downward*](https://material.io/design/material-studies/shrine.html#shrine)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Shrine's backdrop uses custom color on four elements: the back layer, back layer icons, the front layer, and front layer icons.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1EbbQF1DFdcc9I-KDtpeJwdaj7BvSLHe0%2Fbackdrop-shrine-color.png)

| Element           | Category   | Attribute    | Value       |
| ----------------- | ---------- | ------------ | ----------- |
| Back layer        | Primary    | ColorOpacity | #FEDBD0100% |
| Back layer icons  | On Primary | ColorOpacity | #442C2E100% |
| Front layer       | Surface    | ColorOpacity | #FFFBFA100% |
| Front layer icons | On Surface | ColorOpacity | #442C2E100% |

[About ShapeMaterial surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.Related Article*arrow_downward*](https://material.io/design/shape/about-shape.html#about-shape)



## Shape

The front layer of Shrine’s backdrop uses a custom cut corner on the top left, giving the backdrop an asymmetrical shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F19dz-gylKrBpJz9MjzRoM8Otu_y4syOmO%2Fbackdrop-shrine-shape.png)

| Element     | Category        | Attribute  | Value                 |
| ----------- | --------------- | ---------- | --------------------- |
| Front layer | Large component | FamilySize | Cut24;0; n/a; n/a dp* |

*The backdrop can only be shaped on the top left and top right corners.

------

## Specs 



# Mobile

16dp #000000de 20dp #ffffff #6200ee R98 G0 B238 Top left, top right corner Rounded: 16dp Elevation 1dp Elevation 0dp All measurements are displayed in device-independent...

READ MORE

- 
- 
- 
- 
- 
- 
- 
- 
- 56Measurement 56
- 360 Measurement 360
- 16Measurement 16
- 16Measurement 16
- 16Measurement 16
- 16Measurement 16
- 36Measurement 36
- 32Measurement 32
- 32Measurement 32
- 24Measurement 24
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

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1GlioUJ5fBx6QXmEASXlt4BQl7xKRtBI1%2Fspec-backdrop-mobile-closed.png)



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
- 568Measurement 568
- 360 Measurement 360
- 24Measurement 24
- 16Measurement 16
- 16Measurement 16
- 12Measurement 12
- 12Measurement 12
- 32Measurement 32
- 40Measurement 40
- CMeasurement C
- 36Measurement 36
- 24Measurement 24
- 24Measurement 24
- 
- 





- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1MrL-9NnBvAJSQWYDTq0VqoVhJEyWXMGJ%2Fspec-backdrop-mobile-open.png)



*flip*

Specs



------

## Implementation 

Backdrop implementation support for each platform is indicated below.

![Android Implementation-Backdrop](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1-Exlu2sS3tJtn0edRDhQjW3Gp788cuwZ%2Fimplementation-android-platform-unavail.png)

## Android Material Component

**Status:** Planned

![IOS Implementation-Backdrop](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1hTgB6ZNEXpiPUORXbEcUhWWaJ-DqRdfb%2Fimplementation-ios-platform-unavail.png)

## IOS Material Component

**Status:** Planned

![Flutter Implementation-Backdrop](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1g1cKaatt4pnGdnYa73bK6nmAWv03dXf-%2Fimplementation-flutter-platform-unavail.png)

## Flutter Material Component

**Status:** Planned

![Web Implementation-Backdrop](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Ttu5lISFz2w2MK9GqBWrOs6t57zGMxei%2Fimplementation-web-platform-unavail.png)

## Web Material Component

**Status:** Planned