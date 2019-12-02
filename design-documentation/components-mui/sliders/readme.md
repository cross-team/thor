# Sliders

Material UI (Core) Component

Reference: https://material.io/design/components/sliders.html



------

# Sliders 

## Sliders allow users to make selections from a range of values.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F15Ee-1DgC9nBBj6hmL-QZ0uj_3_a_kXwO%2Fsliders-intro.png)

CONTENTS[Usage](https://material.io/design/components/sliders.html#usage)[Anatomy](https://material.io/design/components/sliders.html#anatomy)[Continuous slider](https://material.io/design/components/sliders.html#continuous-slider)[Discrete slider](https://material.io/design/components/sliders.html#discrete-slider)[Theming](https://material.io/design/components/sliders.html#theming)[Spec](https://material.io/design/components/sliders.html#spec)[Implementation](https://material.io/design/components/sliders.html#implementation)

------

## Usage 

Sliders reflect a range of values along a bar, from which users may select a single value. They are ideal for adjusting settings such as volume, brightness, or applying image filters.

Sliders can have icons on both ends of the bar that reflect a range of values.

## Immediate effects

Changes made with sliders are immediate, allowing a user to make slider adjustments until finding their preference. They shouldn’t be paired with settings that have even minor delays in providing user feedback.

## Current state

Sliders reflect the current state of the settings they control.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1rSV50Pn4GaYGGkKn4PTtEhQ8jhM_mtxH%2Fsliders-usage-howtouse.png)



# Values

Editable numeric values allow users to set the exact value of a slider. Upon pressing the thumb or the value indicator field, the value indicator...

READ MORE

## Editable numeric values

Editable numeric values allow users to set the exact value of a slider.

Upon pressing the thumb or the value indicator field, the value indicator input becomes editable for text entry. The thumb position immediately is updated to match any change in value.

## Order of values

For languages that are displayed from left-to-right, such as English, the smallest value for the range appears on the left and the largest value appears on the right.

For right-to-left languages, like Arabic, this placement would be switched (with the largest value on the left, and the smallest on the right).

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F16mUmfH9m9xkWuDXs28Q7v1ssfP_du9kK%2Fsliders-continuousslider-editablenumeric.png)

A slider with an editable numeric value



# Principles

Sliders should be adjustable, immediate, and efficient.

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1mXaxutBExiAwWvwWP0kLLnvcimBoWO5g%2Fsliders-illos-01.png)

## Adjustable

Sliders should only be used for choosing selections from a range of values.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1RzHfBzjckQ924ZGasF1An83xPQMAODgI%2Fsliders-illos-02.png)

## Immediate

When interacting with a slider, changes should be represented immediately.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1AlEhYCfvYc0DO23hQYK0RlryoewUM6kC%2Fsliders-illos-03.png)

## Accessible

Sliders should provide the full range of choices available for the user to select from.



# Types

Continuous sliders allow users to select a value along a subjective range. Discrete sliders can be adjusted to a specific value by referencing its value...

READ MORE

## Continuous sliders

Continuous sliders allow users to select a value along a subjective range.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Xrpx4Q59-vu0WplsTpaoYwxyfB99Rgj9%2Fsliders-usage-whentouse-continuous.png)

Continuous slider

## Discrete sliders

Discrete sliders can be adjusted to a specific value by referencing its value indicator.

Possible selections may be organized through the use of tick marks, which a slider thumb will snap to (or to which an input will round up or down).

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1xMAR10aCA6Y1k2Rb_BFKSPW43irH55F-%2Fsliders-usage-whentouse-discrete.png)

Discrete slider

------

## Anatomy 

[Mirroring elementsUIs for languages that are read from right-to-left (RTL), such as Arabic and Hebrew, should be mirrored to ensure content is easy to understand.Related Article*arrow_downward*](https://material.io/design/usability/bidirectionality.html#mirroring-elements)



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1R7E69M9c12aTaQcXnpT8FveOtq3a_GOf%2Fsliders-layout-elements.png)

### A slider can contain the following elements:

### 1. Track

The track shows the range available for user selection. For left-to-right (LTR) languages, the smallest value appears on the far left, and the largest value on the far right. For right-to-left (RTL) languages this orientation is reversed, with the smallest value on the far right and the largest value on the far left.

### 2. Thumb

The thumb slides along the track, displaying the selected value through its position.

### 3. Value label (optional)

A value label displays the currently selected, specific numerical value.

### 4. Tick mark (optional)

Tick marks represent predetermined values to which the user can move the slider.

------

## Continuous slider 

Use continuous sliders allow users to make meaningful selections that don’t require a specific value.



# Behavior

This continuous slider is controlled by clicking the thumb and dragging it. This continuous slider is controlled by clicking the track. This continuous slider is...

READ MORE

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

## Click and drag

This continuous slider is controlled by clicking the thumb and dragging it.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

## Click jump

This continuous slider is controlled by clicking the track.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

## Click and arrow

This continuous slider is controlled by clicking the thumb, then using arrow keys to move it.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

## Tab and arrow

This continuous slider is controlled by using the tab key to select the thumb of the desired slider, then using arrow keys to move it.



# States

Continuous sliders have normal, focused, click, and disabled states. Slider states

READ MORE

Continuous sliders have normal, focused, click, and disabled states.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F15TSjP7vUkx3t8dP0CiA6lxg_gFQQ07zr%2Fsliders-continuousslider-states2.png)

Slider states





------

## Discrete slider 

Discrete sliders display a numeric value label upon pressing the thumb, which allows a user to input an exact value.



# Behavior

This discrete slider is controlled by clicking the thumb and dragging it. This discrete slider is controlled by clicking the track. This discrete slider is...

READ MORE

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

## Click and drag

This discrete slider is controlled by clicking the thumb and dragging it.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

## Click jump

This discrete slider is controlled by clicking the track.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

## Click and arrow

This discrete slider is controlled by clicking the thumb, then using arrow keys to move it.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

## Tab and arrow

This discrete slider is controlled by using the tab key to select the thumb of the desired slider, then arrow keys to move it.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

## Tick marks (Optional)

Discrete sliders can use evenly spaced tick marks along the slider track, and the thumb will snap to them. Each tick mark should change the setting in increments that are discernible to the user.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

## Value entry field (Optional)

Value entry fields become editable after selecting the thumb or entry field. After a text entry is made, the slider position automatically updates to reflect the new value.



# States

Discrete sliders have normal, focused, click, and disabled states. Discrete slider states

READ MORE

Discrete sliders have normal, focused, click, and disabled states.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1MFWceSStOgPmqholFlYP9AE1PMEUUrqZ%2Fsliders-discreteslider-states2.png)

Discrete slider states





------

## Theming 



# Crane Material Theme

This travel app’s sliders have been customized using Material Theming. One area of customization includes color. Crane is a travel app that uses Material Design...

READ MORE

This travel app’s sliders have been customized using Material Theming. One area of customization includes color.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F19taN2gM0P-Iglvzq-i1853dQ-igWSaxB%2Fsliders-crane-ahero.png)

Crane’s customized sliders

[CraneCrane is a travel app that uses Material Design components and Material Theming to create a personalized on-brand experience.Related Article*arrow_downward*](https://material.io/design/material-studies/crane.html#crane)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Crane’s sliders use custom color on three elements: the active track, inactive track, and thumb.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1jg6qYOrf0NDtIBIFxFgf9UpzPrSfmvWI%2Fsliders-crane-color.png)

| Element             | Category  | Attribute    | Value       |
| ------------------- | --------- | ------------ | ----------- |
| Active track, thumb | Secondary | ColorOpacity | #E30425100% |
| Inactive track      | Secondary | ColorOpacity | #E3042538%  |

------

## Spec 

## Continuous sliders

- 2Measurement 2
- 12Measurement 12
- 



- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1t6Mz1MRfbVR3d6nj8axB1hdgR7tkr95P%2Fsliders-spec-continuous.png)



*flip*

Specs



## Discrete sliders

- 12Measurement 12
- 2Measurement 2
- 2Measurement 2



- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  



- 

  

  

  

  

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1a-nzcctzW1hJkfo1dGtxEbo0EzideqLP%2Fsliders-spec-discrete.png)



*flip*

Specs



------

## Implementation 

Sliders implementation support for each platform is indicated below.

![Android Implementation-Sliders](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1y1lJ9RpsWImj6RQcN33fJpKQEOhofaR5%2Fimplementation-android-platform-unavail.png)

## Android Material Component

**Status:** Planned

[![IOS Implementation-Sliders](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1q5WNlN_HEN5jJrut3edM1nfcqUwgW-So%2Fimplementation-ios-platform.png)](https://material.io/go/ios-sliders/)

## [IOS Material Component](https://material.io/go/ios-sliders/)

**Status:** Available

[![Flutter Implementation-Sliders](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Erub1TcNbYLEdyglQqgQ1F5iIPRlLFFg%2Fimplementation-flutter-platform.png)](https://material.io/go/flutter-sliders/)

## [Flutter Material Component](https://material.io/go/flutter-sliders/)

**Status:** Available

[![Web Implementation-Sliders](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Zhc2N8wFdS2dgqgBRxjNBK_RWaUgzjvl%2Fimplementation-web-platform.png)](https://material.io/go/web-sliders/)

## [Web Material Component](https://material.io/go/web-sliders/)

**Status:** Available