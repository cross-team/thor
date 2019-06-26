# Image Lists

Material UI (Core) Component

Reference: https://material.io/design/components/image-lists.html



------

# Image lists 

## Image lists display a collection of images in an organized grid.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1HRGaKgtfOKkWVBd5awnrICPWn1yCNtuv%2Fhero-gridlist.png)

CONTENTS[Usage](https://material.io/design/components/image-lists.html#usage)[Anatomy](https://material.io/design/components/image-lists.html#anatomy)[Behavior](https://material.io/design/components/image-lists.html#behavior)[Types](https://material.io/design/components/image-lists.html#types)[Theming](https://material.io/design/components/image-lists.html#theming)[Specs](https://material.io/design/components/image-lists.html#specs)[Implementation](https://material.io/design/components/image-lists.html#implementation)

------

## Usage 

Image lists represent a collection of items in a repeated pattern. They help improve the visual comprehension of the content they hold.

[ListsLists are continuous, vertical display of text or images.Related Article*arrow_downward*](https://material.io/design/components/lists.html#lists)

[CardsCards contain content and links about a single subject.Related Article*arrow_downward*](https://material.io/design/components/cards.html#cards)





# Principles

Image lists are visual, comparable, and integrated.

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1V2VvP0Bc_hsTGx3rtlMZDDBYYtBwuTQ-%2Fgridlist-illos-01.png)

## Visual

Image lists allow users to scan content based on images.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1CYp7H4xFTFmwqx7JM0_YSXdypk6jpjbv%2Fgridlist-illos-03.png)

## Comparable

Image lists allow users to easily compare items within a collection.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F14qxs74h1bjtDhQYF5Z4o8XtxSfPw4QMK%2Fgridlist-illos-04.png)

## Integrated

Image lists are responsively integrated with the surrounding content and layout.



# Types

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1s06fU3oDkph4qwbp2kaNqxD0tffTONx1%2Fgrid-diagram.png)

[Standard image lists](https://material.io/design/components/image-lists.html#standard-image-list) are best for items of equal importance. They have a uniform container size, ratio, and padding.[Quilted image lists](https://material.io/design/components/image-lists.html#quilted-image-list) emphasize certain items over others in a collection. They create hierarchy using varied container sizes and ratios.[Woven image lists](https://material.io/design/components/image-lists.html#weaved-image-list) facilitate the browsing of peer content. They display content in containers of varying ratios to create a rhythmic layout.[Masonry image lists](https://material.io/design/components/image-lists.html#masonry-image-list) facilitate the browsing of uncropped peer content. Container heights are sized based on the image size.

------

## Anatomy 

Image lists are comprised of containers that are set at a certain aspect ratio. Each item in an image list can display optional text and iconography below or above the image container.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F10l6uCz_znYO0_aHnIMN6Vf8BQ0d-OCQd%2Felements.png)

### 1. Image container

The image container displays an image list item’s image or illustration.

### 2. Text labels (optional)

Text labels display one line of text related to an image list item.

### 3. Actionable iconography (optional)

Actionable iconography can represent related actions.

### 4. Text protection (optional)

Text protection is a semi-opaque scrim placed in front of imagery to keep text above it legible.

### 5. Image list item

Image list items represent individual items in an image list.



# Padding

Padding can vary between images in an image list. The following padding values are recommended: 1, 2, 4, 8, 16, 20, 24, 32 dp.

READ MORE

Padding can vary between images in an image list. The following padding values are recommended: 1, 2, 4, 8, 16, 20, 24, 32 dp.

<video class="video-player__video animatable js-video-player js-video-load anim-appear" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 1 !important; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

------

## Behavior 



# Actions

Image lists items may be tapped, dragged, filtered, or sorted.

READ MORE

Image lists items may be tapped, dragged, filtered, or sorted.

<video aria-describedby="behavior-figure-caption-0" class="video-player__video animatable js-video-player js-video-load anim-appear" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 1 !important; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Tapping an image list item displays more detail about that item.

<video aria-describedby="behavior-figure-caption-1" class="video-player__video animatable js-video-player js-video-load anim-appear" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 1 !important; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Image list content can be filtered or sorted by date, file size, alphabetical order, or other parameters.

<video aria-describedby="behavior-figure-caption-2" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Caution.

You can drag an image list item to reorder it, but this interaction should be disabled if images are sorted or filtered.

<video aria-describedby="behavior-figure-caption-3" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Don’t.

Don’t allow swipe gestures on individual image list items. Image lists should be perceived as a group.



# Layout grid

Image list column structures don’t need to align to the layout grid. Only the perimeter of the image list itself needs to align to the...

READ MORE

## Defined layout

Image list column structures don’t need to align to the layout grid. Only the perimeter of the image list itself needs to align to the layout grid.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1r_DNpLBCejBUTzkfu4VoyVWH4BGKQv5b%2Fcomposition-01d.png)

An image list spanning eight columns of the layout grid, with 16dp padding

## Alignment with other components

Image lists can be placed adjacent to other components in the layout grid.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1biEqbLdQuZGQJXSrzvRF9Yr5oL9P-zQU%2Fcomposition-02.png)

An image list spanning three columns of the layout grid, with 8dp padding

## Responsive

Image lists inherit the responsive behavior of the layout grid.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Image lists respond to the responsive layout grid.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Image lists are fixed to the layout grid.



# Scrolling

Image lists can scroll vertically or horizontally. All items in an image list must scroll together as a collection. Image cropping can be used to...

READ MORE

Image lists can scroll vertically or horizontally. All items in an image list must scroll together as a collection. Image cropping can be used to indicate scroll direction.

<video aria-describedby="behavior-figure-caption-6" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Image list items scroll together.

<video aria-describedby="behavior-figure-caption-7" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Image lists can scroll horizontally.

------

## Types 



# Standard image list

Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and padding.

READ MORE

Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and padding.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Kb7iBMhQOeHs5aJ5QTby3TO3qP0T_L3B%2Fhero-gridlist-standard.png)

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1G2QyWcbGUeeyDdOQgbj2H78_7X8v8g0o%2Fstandard-usage-01.png)

Standard image lists can be displayed with or without text labels.

1. image list with images only
2. image list with images and text labels

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1udJb1aBvdAiiSgGk-ITOm-jeMsUi7gpi%2Fstandard-usage-02.png)

In compact layouts, labels can appear above the image container using an image treatment that provides text protection to ensure legibility.



# Quilted image list

Quilted image lists emphasize certain items over others in a collection. They use varied container sizes and ratios to create hierarchy across images.

READ MORE

Quilted image lists emphasize certain items over others in a collection. They use varied container sizes and ratios to create hierarchy across images.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1StEKeCCjipPVbDkI7KhdyeKoG1eMxzPH%2Fhero-gridlist-quilted.png)

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1wi-hOnTnIANa0dZYfxISe4SFeEXP9pft%2Fquilt-usage-02-dont.png)

Don’t.

Quilted image lists shouldn’t display text below the image container, as it disrupts the layout.



# Woven image list

Woven image lists use alternating container ratios to create a rhythmic layout. A woven image list is best for browsing peer content.

READ MORE

Woven image lists use alternating container ratios to create a rhythmic layout. A woven image list is best for browsing peer content.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ruKMbjWObRsUEdIZX82nNXXyoMH3Fsem%2Fhero-gridlist-weaved.png)



# Masonry image list

Masonry image lists use dynamically sized container heights that reflect the aspect ratio of each image. This image list is best used for browsing uncropped...

READ MORE

Masonry image lists use dynamically sized container heights that reflect the aspect ratio of each image. This image list is best used for browsing uncropped peer content.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1sGBo7AY09z_fTm1Eyb0uJ2RGGIwngpCm%2Fhero-gridlist-masonry.png)

------

## Theming 



# Crane Material Theme

This travel app’s image lists have been customized using Material Theming. Areas of customization include color, typography, and shape. Crane is a travel app that...

READ MORE

This travel app’s image lists have been customized using Material Theming. Areas of customization include color, typography, and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1CZlPVW0xMKgrMT-02uUUM9qXcIyKDGbm%2Fimagelist-crane-ahero.png)

Crane’s customized image list

[CraneCrane is a travel app that uses Material Design components and Material Theming to create a personalized on-brand experience.Related Article*arrow_downward*](https://material.io/design/material-studies/crane.html#crane)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Crane’s image list text uses custom color.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1sWgiHKsgIrd17BP99Gatb8mJTuFuwWMD%2Fimagelist-crane-color.png)

| Element | Category   | Attribute    | Value       |
| ------- | ---------- | ------------ | ----------- |
| Surface | Surface    | ColorOpacity | #FFFFFF100% |
| Text    | On Surface | ColorOpacity | #00000087%  |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

Crane’s image list text uses custom typography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1bfdQEzpxgteO6S4waMTyE0CxZvQrd3H3%2Fimagelist-crane-type.png)

| Element | Category   | Attribute            | Value                     |
| ------- | ---------- | -------------------- | ------------------------- |
| Text    | Subtitle 1 | TypefaceFontSizeCase | RalewayMedium16Title case |

[About ShapeMaterial surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.Related Article*arrow_downward*](https://material.io/design/shape/about-shape.html#about-shape)



## Shape

Crane’s image lists have custom corner shapes on image containers.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F19c0qk0ZLbqbAR3MMJe970m9yC8RcFTch%2Fimagelist-crane-shape.png)

| Element   | Category         | Attribute  | Value              |
| --------- | ---------------- | ---------- | ------------------ |
| Container | Medium component | FamilySize | Round16;16;16;16dp |



# Owl Material Theme

This education app’s image list text has been customized using Material Theming. Owl is an educational app that provides courses for people who want to...

READ MORE

This education app’s image list text has been customized using Material Theming.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F12F6I7FHK17zqEneGXKUzTyoVez_1cgU-%2Fimagelist-owl-ahero.png)

Owl’s customized image list.

[OwlOwl is an educational app that provides courses for people who want to explore and learn new skills.Related Article*arrow_downward*](https://material.io/design/material-studies/owl.html#owl)

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

Owl’s image list text uses custom typography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Q0V0XffNck7lhoYwNGcpCSLwnAkZodTe%2Fimagelist-owl-type.png)

| Element | Category   | Attribute            | Value                   |
| ------- | ---------- | -------------------- | ----------------------- |
| Text    | Subtitle 1 | TypefaceFontSizeCase | RubikMedium16Title case |

## Shape

Owl’s image lists have custom corner shapes on image containers.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F19c0qk0ZLbqbAR3MMJe970m9yC8RcFTch%2Fimagelist-crane-shape.png)

| Element   | Category         | Attribute  | Value          |
| --------- | ---------------- | ---------- | -------------- |
| Container | Medium component | FamilySize | Round0;0;0;0dp |



# Shrine Material Theme

This retail app’s image lists have been customized using Material Theming. Areas of customization include color and typography. Shrine is a lifestyle and fashion brand...

READ MORE

This retail app’s image lists have been customized using Material Theming. Areas of customization include color and typography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1CVsGgStotNoqzzpWNx4yCcEePdLMy-Lm%2Fimagelist-shrine-ahero.png)

Shrine’s customized image list

[ShrineShrine is a lifestyle and fashion brand that demonstrates how Material Design can be used in e-commerce.Related Article*arrow_downward*](https://material.io/design/material-studies/shrine.html#shrine)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Shrine’s image list text uses custom color.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1lz1okfyp2uTZxr8AA8P4GDB7YhsiM16d%2Fimagelist-shrine-color.png)

| Element | Category   | Attribute    | Value       |
| ------- | ---------- | ------------ | ----------- |
| Surface | Surface    | ColorOpacity | #FFFBFA100% |
| Text    | On Surface | ColorOpacity | #442C2E100% |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

Shrine’s image list text uses custom typography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F154WG_XBVWggVcmtU9z8F0WjI5wUHG8hc%2Fimagelist-shrine-type.png)

| Element | Category   | Attribute            | Value                     |
| ------- | ---------- | -------------------- | ------------------------- |
| Text    | Subtitle 1 | TypefaceFontSizeCase | RalewayMedium16Title case |

## Shape

Crane’s image lists have custom corner shapes on image containers.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F19c0qk0ZLbqbAR3MMJe970m9yC8RcFTch%2Fimagelist-crane-shape.png)

| Element   | Category         | Attribute  | Value            |
| --------- | ---------------- | ---------- | ---------------- |
| Container | Medium component | FamilySize | Cut16;16;16;16dp |

------

## Specs 

## Standard

- 
- 
- 
- 
- 
- 
- 4Measurement 4
- 4Measurement 4
- 4Measurement 4
- 1x1





- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1YjgyaosHlOepYbU56MBu9ZkfFeztV--t%2Fimagelist-spec-standard.png)



*flip*

Specs



## Quilted

- 
- 
- 
- 
- 4Measurement 4
- 4Measurement 4
- 1x1
- 2x1
- 1x1

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  



- 

  

  

  

  

  



- 

  

  

  

  

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F10q_TtBcAsVGS7yYsWN-tIofEDh7_s9hs%2Fimagelist-spec-quilted.png)



*flip*

Specs



## Masonry—mobile

- 
- 
- 
- 
- 4Measurement 4
- 4Measurement 4
- 4Measurement 4
- 4Measurement 4
- 4Measurement 4
- 174224





- 

  

  

  

  

  



- 

  

  

  

  

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1UUsR3GsxtaGhkKpK2Se2hk0gocHt2PRm%2Fimagelist-spec-mobile-masonry.png)



*flip*

Specs



## Masonry—desktop

- 
- 
- 
- 
- 4Measurement 4
- 4Measurement 4
- 





- 

  

  

  

  

  



- 

  

  

  

  

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F10qo-sx2sEniAkhEb8xx1PBSZC_pSbdU3%2Fimagelist-spec-desktop-masonry.png)



*flip*

Specs



- 
- 28Measurement 28
- 32Measurement 32
- 8Measurement 8
- 24
- 











![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1kcKxdsyOrboNwk-BodKjE2qHVXkxNLQu%2Fimagelist-spec-desktop-masonry-labelbelow.png)



*flip*

Specs



## Masonry—tablet

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 4Measurement 4
- 4Measurement 4
- 4Measurement 4
- 4Measurement 4
- CMeasurement C
- 24Measurement 24
- 48Measurement 48
- 12Measurement 12
- 12Measurement 12
- 12Measurement 12
- 48Measurement 48
- 192246
- 

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  



- 

  

  

  

  

  



- 

  

  

  

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F19eAHcCW6kTHGOt3pEyz9KIUKd-XFwTjp%2Fimagelist-spec-tablet-masonry.png)



*flip*

Specs



## Woven

- 
- 
- 
- 
- 24Measurement 24
- 24Measurement 24
- 24Measurement 24
- 28Measurement 28
- 1x1
- 5x7

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  



- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1-pLRzGt9MH5ZQJR7FKpL8E-nbHTocxQk%2Fimagelist-spec-woven.png)



*flip*

Specs



------

## Implementation 

Image list implementation support for each platform is indicated below.

![Android Implementation-Image list](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1kfbSununsLR7tIROP5CYrx4PNIIpOyIw%2Fimplementation-android-platform-unavail.png)

## Android Material Component

**Status:** Planned

![IOS Implementation-Image list](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1tRX68IX7kCZBKA4x71ftUX980j-pCooL%2Fimplementation-ios-platform-unavail.png)

## IOS Material Component

**Status:** Planned

![Flutter Implementation-Image list](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Ih7VoVicV7JXtI5wvPhq9bpNTN5x4P3c%2Fimplementation-flutter-platform-unavail.png)

## Flutter Material Component

**Status:** Planned

[![Web Implementation-Image list](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1i8hYVIfZoFASPDmlR-yJQ5xYDRkF4JfM%2Fimplementation-web-platform.png)](https://material.io/go/web-image-list/)

## [Web Material Component](https://material.io/go/web-image-list/)

**Status:** Available