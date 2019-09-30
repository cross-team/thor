# Chips

Material UI (Core) Component

Reference: https://material.io/design/components/chips.html



------

# Chips 

## Chips are compact elements that represent an input, attribute, or action.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1PAItZL1RXY_fWc8ZWFDJKqGRVV4OQwuy%2Fpurpose-01.png)

CONTENTS[Usage](https://material.io/design/components/chips.html#usage)[Anatomy](https://material.io/design/components/chips.html#anatomy)[Input chips](https://material.io/design/components/chips.html#input-chips)[Choice chips](https://material.io/design/components/chips.html#choice-chips)[Filter chips](https://material.io/design/components/chips.html#filter-chips)[Action chips](https://material.io/design/components/chips.html#action-chips)[Theming](https://material.io/design/components/chips.html#theming)[Specs](https://material.io/design/components/chips.html#specs)[Implementation](https://material.io/design/components/chips.html#implementation)

------

## Usage 

Chips allow users to enter information, make selections, filter content, or trigger actions. Chips should appear dynamically as a group of multiple interactive elements. Unlike buttons, which should be a consistent and familiar call to action, one that a user expects to appear as the same action in the same general area.



# Principles

Chips are compact, relevant and focused.

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1fy89VoLaKm11RM36rI-RA-rZLy35pPsl%2Fchips-illo-1.png)

## Compact

Chips are compact components that represent discrete information.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1y2UkL0H3GFauvyFlKka6dG8sFDKHxXlr%2Fchips-illo-2.png)

## Relevant

Chips should have a clear and helpful relationship to the content or task they represent.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1TL6MZ1qIAMIpFqYx0xOPU9WBCJzBSoSG%2Fchips-illo-3.png)

## Focused

Chips should make tasks easier to complete, or content easier to sort.



# Types

There are input, choice, filter and action chips.

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1bqMzV-lgxi6GhC8zF6MrxLHtReMV1S_b%2Fchips-types-entry.png)

## Input chips

Input chips represent information used in fields, such as an entity or different attributes.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1PSFSymk6oxY9x-FtfKEknOuQpEFU_-g8%2Fchips-types-choice.png)

## Choice chips

In sets that contain at least two options, choice chips represent a single selection.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F13XlEcbFJxRBSlK18nPZsZ-qqbUE1hFYq%2Fchips-types-filter.png)

## Filter chips

Filter chips represent filters for a collection.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Fj8Z4RaB4ewDFc_q9rr3AymHRX0SS3oW%2Fchips-types-action.png)

## Action chips

Action chips trigger actions related to primary content.

------

## Anatomy 

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1lxdaRJ6FXCuTNdmb5bxfBFevLdhzG4EG%2Felements.png)

### 1. Container

Chip containers hold all chip elements, and their size is determined by those elements. A container can also be defined by a stroke.

### 2. Thumbnail (optional)

Thumbnails identify entities (like individuals) by displaying an avatar, logo, or icon.

### 3. Text

Chip text can be an entity name, description, tag, action, or conversational.

### 4. Remove icon [optional]

Entry chips can include a Remove icon.

------

## Input chips 



# Usage

Input chips represent a complex piece of information in compact form, such as an entity (person, place, or thing) or text. They enable user input...

READ MORE

Input chips represent a complex piece of information in compact form, such as an entity (person, place, or thing) or text. They enable user input and verify that input by converting text into chips.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1VZTQ-Hzb1YUQF9xn1ovXnVkPV_3IVO3o%2Fchips-types-input.png)

An input chip used to show an entity.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1tIKiHTZ4L2cPOlRMVbGSojGSp8R9h_QR%2Fchips-types-input-outlined.png)

An outlined input chip used to show an entity.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1GavwusfKRTyh1CRgGv9jYbxa962xNQQP%2Finput-usage-text.png)

Input chips can provide suggested responses.



# Behavior

Input chips are predictive, editable, movable, expandable, and appear in groups.

READ MORE

## Transformative

Input chips transform text based on user input.

<video aria-describedby="input-chips-figure-caption-3" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Text transforming into an input chip.

## Editable

An input chip’s text is editable until the user takes an action with the chip, such as sending an email. To edit an input chip’s text, tap the chip.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Input chips become editable when tapped.

## Informational

If text input is not recognized by the system, input chips can display an error state.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1KuXrco1yGRVGK1SNNm7KnfRySvRpWXHa%2Fentry-chip-behavior-error.png)

Input chips can represent an error state.

## Multiple

A single field can contain multiple entry chips.

<video aria-describedby="input-chips-figure-caption-5" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Multiple entry chips

## Movable

Entry chips can be reordered or moved into other fields.

<video aria-describedby="input-chips-figure-caption-6" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Movable entry chips

## Expandable

Input chips can expand to show more information or options.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Expandable entry chips



# Placement

Input chips work together with other UI elements.

READ MORE

Input chips can be integrated with other components. They can appear:

- Inline with the text input cursor in a field
- In a stacked list
- In a horizontally scrollable list

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1fD_fhRHOQl0yc9BtWmzPbtj3gU9qFG4s%2Fentry-chip-behavior-stackable.png)

Input chips can wrap to a new row if all of the chips need to be visible.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Input chips that horizontally scroll.

[AnatomyAn overlay is a semi-transparent covering on an element indicating state. Overlays allow for a systematic approach to visualizing states through opacity values.Related Article*arrow_downward*](https://material.io/design/interaction/states.html#anatomy)





# States

Input chips states

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1SdXde429CX7iphzp_SawbCRBZmKZ4q8d%2Finput-chips-states.png)

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1EpGNomAHfyoywofHEqzfoSvp3vZs6zOz%2Foutlined-input-chips-states.png)

Input chips states

------

## Choice chips 



# Usage

Choice chips allow selection of a single chip from a set of options. Choice chips clearly delineate and display options in a compact area. They...

READ MORE

Choice chips allow selection of a single chip from a set of options.

Choice chips clearly delineate and display options in a compact area. They are a good alternative to toggle buttons, radio buttons, and single select menus.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1xMFLiF1q3AT2keIicd9uVZ6dATiozjgQ%2Fchips-types-choice.png)

A set of choice chips

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1d9vjFKpmKTobFghrf-iyVyOoXkpPTMb2%2Fchips-types-choice-outlined.png)

A set of outlined choice chips

[Toggle buttonButtons allow users to take actions, and make selections, with a single tap.Related Article*arrow_downward*](https://material.io/design/components/buttons.html#toggle-button)

[Radio buttonsRadio buttons allow the user to select one option from a set.Related Article*arrow_downward*](https://material.io/design/components/selection-controls.html#radio-buttons)

[MenusMenus display a list of choices on temporary surfaces.Related Article*arrow_downward*](https://material.io/design/components/menus.html#menus)





# Behavior

Selecting a single choice chip automatically deselects all other chips in the set.

READ MORE

Selecting a single choice chip automatically deselects all other chips in the set.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Selecting a choice chip deselects the other chips



# Placement

Choice chips appear as part of a series of other choice chips. They are typically displayed horizontally and sequentially. An overlay is a semi-transparent covering...

READ MORE

Choice chips appear as part of a series of other choice chips. They are typically displayed horizontally and sequentially.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1fiRSVfHSxR9DHcdUjyaAPHBAfE35BHQK%2Fcomposition-01.png)

Do.

Horizontal placement of choice chips

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1VBpD8PFxEu-v2d4NV6OkiCOtcpJy7OvF%2Fcomposition-02.png)

Do.

Choice chips can scroll horizontally.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F19KRzOMZgMG-uprWpDeiHfRa_Z2_P2wG5%2Fcomposition-03.png)

Caution.

Choice chips can wrap to a new row. However, using two or more rows of choice chips can make each chip harder to scan.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1A0jwCx3fOhCl-KoFctXnfVclMgC93RFH%2Fcomposition-04.png)

Don’t.

Choice chips shouldn’t present only a single option.

[AnatomyAn overlay is a semi-transparent covering on an element indicating state. Overlays allow for a systematic approach to visualizing states through opacity values.Related Article*arrow_downward*](https://material.io/design/interaction/states.html#anatomy)





# States

Choice chips states

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1JV0z5ArX_g37vhqxGPFe1kDK8x8KwGPb%2Fchoice-chips-states.png)

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1-EoW1kQnD32bp-Fz1ThxBbLLnKC7HtZt%2Foutlined-choice-chips-states.png)

Do.

Choice chips states

------

## Filter chips 



# Usage

Filter chips use tags or descriptive words to filter content. Filter chips clearly delineate and display options in a compact area. They are a good...

READ MORE

Filter chips use tags or descriptive words to filter content.

Filter chips clearly delineate and display options in a compact area. They are a good alternative to toggle buttons or checkboxes.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1R6au3jDvf04E5mlCYQcfVZ10otZruQ69%2Fchips-types-filter.png)

A filter chip

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1z3RCHf1A6lk_wmo14VgEKfpT8lieXCee%2Fchips-types-filter-outlined.png)

An outlined filter chip

[Toggle buttonButtons allow users to take actions, and make selections, with a single tap.Related Article*arrow_downward*](https://material.io/design/components/buttons.html#toggle-button)

[CheckboxesCheckboxes allow the user to select one or more items from a set.Related Article*arrow_downward*](https://material.io/design/components/selection-controls.html#checkboxes)





# Behavior

Tap a chip to select it. Multiple chips can be selected or unselected.

READ MORE

Tap a chip to select it. Multiple chips can be selected or unselected.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

An icon can be added to indicate when a filter chip is selected.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Filter chip suggestions can dynamically change as users start to select filters.



# Placement

Filter chips can live with other elements in a UI.

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1HRmTjmgUCMJ4pArYyFDVXyWXKrFJ16ZK%2Fcomposition-01.png)

Filter chips can be shown underneath a search field.

[Sheets: SideSide sheets are surfaces containing supplementary content that are anchored to the left or right edge of the screen.Related Article*arrow_downward*](https://material.io/design/components/sheets-side.html#sheets-side)



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1UJC9RqcnqysKR53deMmtY9DvLvKgiu8c%2Fcomposition-02.png)

Display multiple sets of filters in a side sheet.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1NkWb8ogGpf8D6cwXYN8tXTR5hvHWWIB1%2Fcomposition-05.png)

Filter chips can wrap to a new row. If there are more than two rows, consider using horizontal scrolling to access them all.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ESBBIYtjeDlMOoeJD_Vrj8bFWYhS_hyT%2Fcomposition-04.png)

Filter chips can horizontally scroll to show unlimited options.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Z7UJbU1BKNqpweTdmJn1s7aHM7GSEHz6%2Fcomposition-03.png)

Don’t.

Filter chips should not present only a single option.

[AnatomyAn overlay is a semi-transparent covering on an element indicating state. Overlays allow for a systematic approach to visualizing states through opacity values.Related Article*arrow_downward*](https://material.io/design/interaction/states.html#anatomy)





# States

Choice chips states

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F10u2esAO2-Zyb8JfnczgHyB1N7Vvzf6zV%2Ffilter-chips-states.png)

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1DoiqrjSUJ2lkahLPsj99UFGSkB8QFKwn%2Foutlined-filter-chips-states.png)

Filter chips states

------

## Action chips 



# Usage

Action chips offer actions related to primary content. They should appear dynamically and contextually in a UI. An alternative to action chips are buttons, which...

READ MORE

Action chips offer actions related to primary content. They should appear dynamically and contextually in a UI.

An alternative to action chips are buttons, which should appear persistently and consistently.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ldGJTMcDKiKolS8zVSZhRVHVX_UfT6LX%2Fchips-types-action.png)

An action chip

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1gD9PUGah3V2AZ3CqSvFdsns3QiXGCM5t%2Fchips-types-action-outlined.png)

An outlined action chip

[Contained buttonButtons allow users to take actions, and make selections, with a single tap.Related Article*arrow_downward*](https://material.io/design/components/buttons.html#contained-button)





# Behavior

Action chips can trigger an action or show progress and confirmation.

READ MORE

Action chips can trigger an action or show progress and confirmation.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Tapping an action chip triggers a contextual action.

<video aria-describedby="action-chips-figure-caption-2" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Action chips can show progress and confirmation feedback.



# Placement

Action chips are displayed after primary content, such as below a card or persistently at the bottom of a screen. Buttons allow users to take...

READ MORE

Action chips are displayed after primary content, such as below a card or persistently at the bottom of a screen.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Zv0oMyRlNmQlwAAT_JKXYRhTeb_L0ngN%2Fcomposition-action-chips.png)

Action chips should be shown underneath primary content.

[ButtonsButtons allow users to take actions with a single tap.Related Article*arrow_downward*](https://material.io/design/components/buttons.html#buttons)



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1e0ZnuzANkNq0ysH5kUNZQIiLSxty_zWF%2Fcomposition-02.png)

Caution.

Action chips should appear in a set.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1fMecJnORZIVaC_HKNNqCPh4cMLdRWVQ7%2Fcomposition-03.png)

Do.

Action chips can be horizontally scrollable.

[AnatomyAn overlay is a semi-transparent covering on an element indicating state. Overlays allow for a systematic approach to visualizing states through opacity values.Related Article*arrow_downward*](https://material.io/design/interaction/states.html#anatomy)





# States

Choice chips states

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1mpuXVzMSMdKL-H3JZEKDSbeCGFCdroAn%2Faction-chips-states.png)

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1kvjWFUxrhT67duiFm8x-Nm9A7LtYW4fz%2Foutlined-action-chips-states.png)

Action chips states

------

## Theming 



# Reply Material theme

This email app’s input chips have been customized using Material Theming. Areas of customization include color, typography, and shape. Reply is an email app that...

READ MORE

This email app’s input chips have been customized using Material Theming. Areas of customization include color, typography, and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1n0TTZR0T2T1jSqEV7fFG6aEOhMSxL2hq%2Fchipinput-reply-ahero.png)

Reply’s customized input chips

[ReplyReply is an email app that uses Material Design components and Material Theming to create an on-brand communication experience.Related Article*arrow_downward*](https://material.io/design/material-studies/reply.html#reply)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Reply’s input chips uses custom color on two elements: text, container.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1bOustNHn20e3TqMQhXXRiPQbPpvHWF9Y%2Fchipinput-reply-color.png)

| Element   | Category   | Attribute    | Value       |
| --------- | ---------- | ------------ | ----------- |
| Text      | On Surface | ColorOpacity | #232F34100% |
| Container | On Surface | ColorOpacity | #232F3412%  |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

Reply’s input chips use custom typography for the text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1mw-OWDKFKwd8yOpW1Un8tm6wHCVsrSUN%2Fchipinput-reply-type.png)

| Element | Category | Attribute            | Value                           |
| ------- | -------- | -------------------- | ------------------------------- |
| Text    | Body 2   | TypefaceFontSizeCase | Work SansRegular15Sentence case |

[About ShapeMaterial surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.Related Article*arrow_downward*](https://material.io/design/shape/about-shape.html#about-shape)



## Shape

Reply’s input chip containers have custom corner shapes.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1CJ5KlDWmU7_RzKJMGNYRvDs8TcnLI5gL%2Fchipinput-reply-shape.png)

| Element   | Category        | Attribute  | Value      |
| --------- | --------------- | ---------- | ---------- |
| Container | Small component | FamilySize | Rounded50% |



# Shrine Material theme

Choice chips with customized shape, color, and typography.

READ MORE

This retail app’s choice chips have been customized using Material Theming. Areas of customization include color, typography, and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1SN3eXPtNs7_PtqmkQd3iXSnoKxBnA36n%2Fchipchoice-shrine-ahero.png)

Shrine’s customized choice chips

[ShrineShrine is a lifestyle and fashion brand that demonstrates how Material Design can be used in e-commerce.Related Article*arrow_downward*](https://material.io/design/material-studies/shrine.html#shrine)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Shrine’s choice chips uses custom color on four elements: selected container, selected text, unselected container, and unselected text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1GC3aHqckbGySnzx_cSkxsDaceDHRb8Wt%2Fchipchoice-shrine-color.png)

| Element              | Category   | Attribute    | Value       |
| -------------------- | ---------- | ------------ | ----------- |
| Selected container   | Primary    | ColorOpacity | #FEDBD0100% |
| Selected text        | On Primary | ColorOpacity | #442C2E100% |
| Unselected text      | On Surface | ColorOpacity | #442C2E100% |
| Unselected container | On Surface | ColorOpacity | #442C2E12%  |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

Shrine’s choice chips use custom typography for the text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1xKwM2vrTpZvA-gm1Ln8xqW2EEe7Tr2Uy%2Fchipchoice-shrine-type.png)

| Element | Category | Attribute            | Value                      |
| ------- | -------- | -------------------- | -------------------------- |
| Text    | Body 2   | TypefaceFontSizeCase | RubikMedium14Sentence case |

[About ShapeMaterial surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.Related Article*arrow_downward*](https://material.io/design/shape/about-shape.html#about-shape)



## Shape

Shrine’s choice chip containers have custom corner shapes.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1L5mNql_LPXZ1enHnVLgkiEClCVMGLlvw%2Fchipchoice-shrine-shape.png)

| Element   | Category  | Attribute  | Value                  |
| --------- | --------- | ---------- | ---------------------- |
| Container | Override* | FamilySize | Rounded4dp;4dp;4dp;4dp |

*Shrine’s chips use an override of the small component shape category family and size values.



# Fortnightly Material theme

Filter chips with customized shape, color, and typography.

READ MORE

This news app’s filter chips have been customized using Material Theming. Areas of customization include color, typography, and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1488de1qEHrMepYoNA-hj_fpJPXdO-khF%2Fchipfilter-fortnightly-ahero.png)

Fortnightly’s customized filter chips.

[FortnightlyFortnightly is a news app that uses Material Design components and Material Theming to create an on-brand, content-focused experience.Related Article*arrow_downward*](https://material.io/design/material-studies/fortnightly.html#fortnightly)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Fortnightly’s filter chips uses custom color on two elements: text, and container stroke.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1421WQ8VsmfbZZq0s_uzv50FT_OfVJdsL%2Fchipfilter-fortnightly-color.png)

| Element          | Category   | Attribute    | Value      |
| ---------------- | ---------- | ------------ | ---------- |
| Text             | On Surface | ColorOpacity | #00000087% |
| Container stroke | On Surface | ColorOpacity | #00000012% |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

Fortnightly’s filter chips use custom typography for the text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1fAp4_BcnaBjDuXA5x-BxLcNI1EVRjSt1%2Fchipfilter-fortnightly-type.png)

| Element | Category | Attribute            | Value                             |
| ------- | -------- | -------------------- | --------------------------------- |
| Text    | Body 2   | TypefaceFontSizeCase | Libre FranklinRegular14Title case |

[About ShapeMaterial surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.Related Article*arrow_downward*](https://material.io/design/shape/about-shape.html#about-shape)



## Shape

Fortnightly’s filter chip containers have custom corner shapes, with 0dp cut corners.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1CSIDjhrtlXIGxkxyNLeSMJ4PfCa0TThB%2Fchipfilter-fortnightly-shape.png)

| Element   | Category        | Attribute  | Value              |
| --------- | --------------- | ---------- | ------------------ |
| Container | Small component | FamilySize | Cut0dp;0dp;0dp;0dp |

------

## Specs 

## Action chip

- 
- 
- 
- 
- 
- 32Measurement 32
- 12Measurement 12
- 12Measurement 12
- CMeasurement C

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1wT5tTIVacbicVoJeQ52O6EdcpHOtpfVB%2Fspecs-chips-action.png)



*flip*

Specs



## Outlined action chip

- 
- 
- 
- 
- 
- 4Measurement 4
- 12Measurement 12
- 8Measurement 8
- 1Measurement 1
- 32Measurement 32
- 24Measurement 24
- CMeasurement C
- 





- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ViXjQ0VVbUTCWxYszJUt4t3xajmIgBR-%2Fspecs-outlined-chips-action.png)



*flip*

Specs



## Choice chip

- 
- 
- 
- 
- 
- 12Measurement 12
- 12Measurement 12
- 32Measurement 32
- CMeasurement C

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1LgVZMCD2CAQW9l6qr5ZEuCTGZr6KCS1x%2Fspecs-chips-choice.png)



*flip*

Specs



## Filter chip

- 
- 
- 
- 
- 
- 12Measurement 12
- CMeasurement C
- 32Measurement 32
- 12Measurement 12

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1b952ZIVr9YKj47n6GAVckgMgSM53ULH4%2Fspecs-chips-filter.png)



*flip*

Specs



## Input chip

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 4dpMeasurement 4dp
- 8Measurement 8
- 8Measurement 8
- 32Measurement 32
- CMeasurement C
- 24Measurement 24
- 18Measurement 18
- 8Measurement 8
- 
- 

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1nygxUm01qpHU0krNdV--zwTsgcDZeEeG%2Fspecs-chips-input.png)



*flip*

Specs



## Chips in groups

- 
- 
- 8Measurement 8

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1PMwNpp8Ow45ChuqAjkhUXPvHlNbZXL4s%2Fspecs-chipsingrous.png)



*flip*

Specs



------

## Implementation 

Chips implementation support for each platform is indicated below.

[![Android Implementation-Chips](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1rI2V2uLLAgP24ZZan5KPSFw5cFKHzK_N%2Fimplementation-android-platform.png)](https://material.io/go/android-chips/)

## [Android Material Component](https://material.io/go/android-chips/)

**Status:** Available

[![IOS Implementation-Chips](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F11ww_lVOfX7mraKX_FCe9kiVM41NTLHG6%2Fimplementation-ios-platform.png)](https://material.io/go/ios-chips/)

## [IOS Material Component](https://material.io/go/ios-chips/)

**Status:** Available

[![Flutter Implementation-Chips](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1zO6Eh3KGJ-yUhD5X__9BxJmrMsqsGhtc%2Fimplementation-flutter-platform.png)](https://material.io/go/flutter-chips/)

## [Flutter Material Component](https://material.io/go/flutter-chips/)

**Status:** Available

[![Web Implementation-Chips](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1oZTKn2rPk29FtjyfkvVfGBN7UNyntfQf%2Fimplementation-web-platform.png)](https://material.io/go/web-chips/)

## [Web Material Component](https://material.io/go/web-chips/)

**Status:** Available