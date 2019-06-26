# Selection Controls

Material UI (Core) Component

Reference: https://material.io/design/components/selection-controls.html



------

# Selection controls 

## Selection controls allow the user to select options.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1nrS8g8O8bFXlY1lheymPm7BbCGLdwW43%2Fselectioncontrols-usage-howtouse.png)

CONTENTS[Usage](https://material.io/design/components/selection-controls.html#usage)[Checkboxes](https://material.io/design/components/selection-controls.html#checkboxes)[Radio buttons](https://material.io/design/components/selection-controls.html#radio-buttons)[Switches](https://material.io/design/components/selection-controls.html#switches)[Theming](https://material.io/design/components/selection-controls.html#theming)[Specs](https://material.io/design/components/selection-controls.html#specs)[Implementation](https://material.io/design/components/selection-controls.html#implementation)

------

## Usage 

Selection controls allow users to complete tasks that involve making choices such as selecting options, or switching settings on or off. Selection controls are found on screens that ask users to make decisions or declare preferences such as settings or dialogs.



# Principles

Selection controls should be familiar, scannable, and efficient.

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1UAHliMCXlf4RJs0QtajQPg5XvB7xFtFL%2Fselection-controls-illos-01.png)

## Familiar

Selection controls have been in user interfaces for a long time and should be used as expected.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1X3Y1R9tzugqgxlq4N_FFFmMUULGkqMDD%2Fselection-controls-illos-03.png)

## Scannable

It should be visible at a glance if a selection control has been selected, and selected items should be more visually prominent than unselected items.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1oFmEEB73kKZbu3S8DjzV1uV4l3WWndBM%2Fselection-controls-illos-02.png)

## Efficient

Selection controls make it easy to compare available options.



# Types

Selection controls are radio buttons, checkboxes, and switches.

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1RT_6S5nQA9TLA_xUZMwMBQVA3zNfBuh_%2Fwhen-to-use-radiobuttons.png)

## Radio buttons

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1nl-0NiKgfyT1d57Zzbni4-y6Mf-V4JXY%2Fwhen-to-use-checkboxes.png)

## Checkboxes

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Ifgmc-gBCb2jTo382kyzlbr48Eq3hfen%2Fwhen-to-use-switches.png)

## Switches



# When to use radio buttons

Selection controls should be used

READ MORE

Use radio buttons to:

- Select a single option from a list
- Expose all available options

If available options can be collapsed, consider using a dropdown menu instead, as it uses less space.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Rh9QY9M8sva_mgS0JC3NkoV-GXbgesVA%2Fselectioncontrols-usage-whentouse-radio.png)

Radio buttons

[MenusMenus display a list of choices on temporary surfaces.Related Article*arrow_downward*](https://material.io/design/components/menus.html#menus)



Radio buttons should be used instead of checkboxes if only one item can be selected from a list.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1JcTLh6AbNajdGp_iBkN-QvTCBlm3ppI3%2Fselectioncontrols-usage-whentouse-dont-checkboxes.png)

Don’t.

Don’t use checkboxes when only one item can be selected from a list. Use radio buttons instead.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1-AFEBqeYlYHKlSU-rc6J76mZOZEq_Sp3%2Fselectioncontrols-usage-whentouse-do-radio.png)

Do.

Use radio buttons when only one item can be selected from a list.



# When to use switches

Use switches to: Swtiches should be used instead of radio buttons if only one item can be selected from a list.

READ MORE

Use switches to:

- Toggle a single option on or off, on mobile and tablet
- Immediately activate or deactivate something

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1nniahP0zoyMiZlKYLUfbktaTChM1CRJn%2Fselectioncontrols-usage-whentouse-switches.png)

Switches

Swtiches should be used instead of radio buttons if only one item can be selected from a list.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F18qZ7mzBwOnqZXpRSYimW6aMQZiqG4dzu%2Fselectioncontrols-usage-whentouse-dont-radio.png)

Don’t.

Don’t use radio buttons to toggle an option on or off.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ZaDjo1e3SI8Wbzz4k5QHJj0cQH1FuCKP%2Fselectioncontrols-usage-whentouse-do-switches.png)

Do.

Use switches to turn an option on or off, especially on mobile.



# When to use checkboxes

Use checkboxes to:

READ MORE

Use checkboxes to:

- Select one or multiple items from a list
- Present a list containing sub-selections
- Turn an option on or off in desktop environment

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1zn-VtNelawmXvBepVlv2hRmB6Egf6Roc%2Fselectioncontrols-checkboxes-usage-parentchild-1c.png)

Checkboxes

## When to use checkboxes instead of toggles

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F16m5-Wk_C4pb6jO2ExiCpQTCMdGhxdPel%2Fselectioncontrols-usage-whentouse-dont-switches.png)

Don’t.

If a list consists of multiple options, avoid using switches. Use checkboxes instead because they take up less space.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F16aHMSV5UVzxn_q94taFH9PpY4edwZQML%2Fselectioncontrols-usage-whentouse-do-checkboxes.png)

Do.

Checkboxes are for making selections from a list. They let users select more than one item and allow for easy selection or deselection of all items with a parent checkbox.

------

## Checkboxes 



# Usage

Checkboxes allow the user to select one or more items from a set. Checkboxes can be used to turn an option on or off. Checkboxes...

READ MORE

Checkboxes allow the user to select one or more items from a set. Checkboxes can be used to turn an option on or off.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1jlw6aM3z1_iuXkXH6AiVT18lIh7OxcM8%2Fselectioncontrols-checkboxes-usage.png)

Selected and unselected checkboxes

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Using checkboxes to select multiple items in a list

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Using a checkbox to turn an option on or off

## Parent and child checkboxes

Checkboxes can have a parent-child relationship with other checkboxes.

- When the parent checkbox is checked, all child checkboxes are checked
- If a parent checkbox is unchecked, all child checkboxes are unchecked
- If some, but not all, child checkboxes are checked, the parent checkbox becomes an indeterminate checkbox

------

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Checked, unchecked, and indeterminate parent checkboxes



# States

Checkboxes can be selected, unselected, or indeterminate. Checkboxes have enabled, hover, focused and pressed states.

READ MORE

Checkboxes can be selected, unselected, or indeterminate. Checkboxes have enabled, hover, focused and pressed states.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F17As8VY7jLKOS4nD1pyN9459fqh8lerKu%2Fselectioncontrols-checkboxes-states.png)

Checkbox states

------

## Radio buttons 



# Usage

Radio buttons allow the user to select one option from a set. Use radio buttons when the user needs to see all available options. If...

READ MORE

Radio buttons allow the user to select one option from a set. Use radio buttons when the user needs to see all available options. If available options can be collapsed, consider using a dropdown menu because it uses less space.

[Dropdown menuMenus display a list of choices on temporary surfaces.Related Article*arrow_downward*](https://material.io/design/components/menus.html#dropdown-menu)



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1reyxqt9YMJKo4lkyirw8vz53CfCaOOS5%2Fselectioncontrols-radio-usage.png)

Selected and unselected radio buttons

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Using radio buttons to select a single item



# States

Radio buttons can be selected or unselected. Radio buttons have enabled, hover, focused and pressed states.

READ MORE

Radio buttons can be selected or unselected. Radio buttons have enabled, hover, focused and pressed states.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1OEoHADVmjs-_J-MeyiJLlWnXpvCS1Rdd%2Fselectioncontrols-radio-states.png)

Radio button states

------

## Switches 



# Usage

Switches toggle the state of a single setting on or off. They are the preferred way to adjust settings on mobile. A switch is successfully...

READ MORE

Switches toggle the state of a single setting on or off. They are the preferred way to adjust settings on mobile.

## State

A switch is successfully toggled when the user slides a switch thumb to the other side of the track, and the state of the switch changes.

## Text label

The option that the switch controls, as well as the state it’s in, should be made clear from the corresponding inline label.

Avoid creating a switch that includes the text “on” and “off” within the graphic itself. The switch alone should be sufficient.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F18m9TuDx2ykggqxGIvNkPWIYllY-iqjBh%2Fselectioncontrols-switches-usage.png)

\1. Thumb
\2. Track 

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Using a switch to turn an option on and off



# Behavior

When a user toggles a switch, its corresponding action takes effect immediately. If a switch cannot be turned on, the switch will automatically turn back...

READ MORE

When a user toggles a switch, its corresponding action takes effect immediately. If a switch cannot be turned on, the switch will automatically turn back off.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

A switch unable to be toggled on

## Display processing status

Because a switch shows the actual status of something, sometimes there is a delay in its change of state. In such cases, a processing status animation can be used.

A processing status is an animation on the thumb of the switch. For example, it can be used when a switch that controls a hardware feature experiences a delay before its final status can be confirmed.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

A processing status animation



# States

Switches can be on or off. Switches have enabled, hover, focused, and pressed states. Display the outer radial reaction only on form factors that use...

READ MORE

Switches can be on or off. Switches have enabled, hover, focused, and pressed states.

Display the outer radial reaction only on form factors that use touch, where interaction may obstruct the element completely.

For desktop, the radial reaction isn’t needed.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1MiD-2erXPyZKDpOOdaWTsqzkHGOt9Z7R%2Fselectioncontrols-switches-states.png)

Switch states

------

## Theming 



# Crane Material Theme

This travel app’s selection controls have been customized using Material Theming to use custom color. Crane is a travel app that uses Material Design components...

READ MORE

This travel app’s selection controls have been customized using Material Theming to use custom color.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1aWDfRzdFBQrqdFeFN0yLJA8GgrAPgVIo%2Fselectioncontrols-crane-ahero.png)

Crane’s customized selection controls

[CraneCrane is a travel app that uses Material Design components and Material Theming to create a personalized on-brand experience.Related Article*arrow_downward*](https://material.io/design/material-studies/crane.html#crane)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Crane’s selection controls use a custom color.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1-oDsNBQ-4Bl7HmCzltyxoeUr4mmpKu2S%2Fselectioncontrols-crane-color.png)

| Element            | Category  | Attribute    | Value       |
| ------------------ | --------- | ------------ | ----------- |
| Selection controls | Secondary | ColorOpacity | #E30425100% |

------

## Specs 

## Checkboxes

- 24Measurement 24



- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  



- 

  

  

  

  

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1seffKf9Q3x_zfhAuO8NTGHY86aQj1C5f%2Fselectioncontrols-spec-checkboxes.png)



*flip*

Specs



## Radio buttons

- 20Measurement 20



- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  



- 

  

  

  

  

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1NsvAakg42RV_h0_mz4CKTuSwwprxiYFW%2Fselectioncontrols-spec-radiobuttons.png)



*flip*

Specs



## Switches

- 20Measurement 20
- 36Measurement 36



- 

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1mptGCFjmK-9Vb3yNJe6xGB3_U4f32xe2%2Fselectioncontrols-spec-switches.png)



*flip*

Specs



------

## Implementation 

Checkboxes, radio buttons, and switches implementation support for each platform is indicated below.



# Checkboxes

Status: Available Status: Available Status: Available Status: Available

READ MORE

[![Android Implementation-Checkboxes](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1gt1XOGA_piW4hPeYldk9fkDNZFJWuDou%2Fimplementation-android-platform.png)](https://material.io/go/android-checkboxes/)

## [Android Material Component](https://material.io/go/android-checkboxes/)

**Status:** Available

[![IOS Implementation-Checkboxes](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ZjY35yx-j8MAdmxxmBtpa2dpKs5L9vCb%2Fimplementation-ios-platform.png)](https://material.io/go/ios-checkboxes/)

## [IOS Material Component](https://material.io/go/ios-checkboxes/)

**Status:** Available

[![Flutter Implementation-Checkboxes](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1BdQuXFq8y42vSygms-GO7ra5Vj6PT27K%2Fimplementation-flutter-platform.png)](https://material.io/go/flutter-checkboxes/)

## [Flutter Material Component](https://material.io/go/flutter-checkboxes/)

**Status:** Available

[![Web Implementation-Checkboxes](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1hqmYX-ILCGPOMgpKbkGcXV1Uj-V9hUk5%2Fimplementation-web-platform.png)](https://material.io/go/web-checkboxes/)

## [Web Material Component](https://material.io/go/web-checkboxes/)

**Status:** Available



# Radio buttons

Status: Available Status: Available Status: Available Status: Available

READ MORE

[![Android Implementation-Radio buttons](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1gt1XOGA_piW4hPeYldk9fkDNZFJWuDou%2Fimplementation-android-platform.png)](https://material.io/go/android-radio-buttons/)

## [Android Material Component](https://material.io/go/android-radio-buttons/)

**Status:** Available

[![IOS Implementation-Radio buttons](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ZjY35yx-j8MAdmxxmBtpa2dpKs5L9vCb%2Fimplementation-ios-platform.png)](https://material.io/go/ios-radio-buttons/)

## [IOS Material Component](https://material.io/go/ios-radio-buttons/)

**Status:** Available

[![Flutter Implementation-Radio buttons](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1BdQuXFq8y42vSygms-GO7ra5Vj6PT27K%2Fimplementation-flutter-platform.png)](https://material.io/go/flutter-radio-buttons/)

## [Flutter Material Component](https://material.io/go/flutter-radio-buttons/)

**Status:** Available

[![Web Implementation-Radio buttons](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1hqmYX-ILCGPOMgpKbkGcXV1Uj-V9hUk5%2Fimplementation-web-platform.png)](https://material.io/go/web-radio-buttons/)

## [Web Material Component](https://material.io/go/web-radio-buttons/)

**Status:** Available



# Switches

Status: Available Status: Available Status: Available Status: Available

READ MORE

[![Android Implementation-Switches](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1BdQuXFq8y42vSygms-GO7ra5Vj6PT27K%2Fimplementation-flutter-platform.png)](https://material.io/go/android-switches/)

## [Android Material Component](https://material.io/go/android-switches/)

**Status:** Available

[![IOS Implementation-Switches](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ZjY35yx-j8MAdmxxmBtpa2dpKs5L9vCb%2Fimplementation-ios-platform.png)](https://material.io/go/ios-switches/)

## [IOS Material Component](https://material.io/go/ios-switches/)

**Status:** Available

[![Flutter Implementation-Switches](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1-FZ1TKDx2D0cA_8_JiPWWotitLb6gb1Y%2Fimplementation-flutter.png)](https://material.io/go/flutter-switches/)

## [Flutter Material Component](https://material.io/go/flutter-switches/)

**Status:** Available

[![Web Implementation-Switches](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1hqmYX-ILCGPOMgpKbkGcXV1Uj-V9hUk5%2Fimplementation-web-platform.png)](https://material.io/go/web-switches/)

## [Web Material Component](https://material.io/go/web-switches/)

**Status:** Available