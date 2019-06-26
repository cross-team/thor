# Text Fields

Material UI (Core) Component

Reference: https://material.io/design/components/text-fields.html



------

# Text fields 

## Text fields let users enter and edit text.

### Interactive demo

This demo lets you preview the text field component, its variations, and configuration options. Each tab displays a different type of text field.

<iframe class="js-scroll-to-iframe " src="https://material.io/inline-tools/textfield" style="background-repeat: no-repeat; box-sizing: border-box; border: 1px solid rgba(0, 0, 0, 0.12); width: 760px; transition: box-shadow 150ms linear 0s; height: 330px;"></iframe>

CONTENTS[Usage](https://material.io/design/components/text-fields.html#usage)[Anatomy](https://material.io/design/components/text-fields.html#anatomy)[Filled text field](https://material.io/design/components/text-fields.html#filled-text-field)[Outlined text field](https://material.io/design/components/text-fields.html#outlined-text-field)[Input types](https://material.io/design/components/text-fields.html#input-types)[Theming](https://material.io/design/components/text-fields.html#theming)[Spec](https://material.io/design/components/text-fields.html#spec)[Implementation](https://material.io/design/components/text-fields.html#implementation)

------

## Usage 

Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.

------



# Principles

Text fields are discoverable, clear, and efficient

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1As2uB23OkwvxSyP0jGR8MvqLUclkHa_l%2Ftextfield-illo-01.png)

## Discoverable

Text fields should stand out and indicate that users can input information.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1YbI-Y-nd1j6bytOKudTZsQSZG3bs76J-%2Ftextfield-illo-02.png)

## Clear

Text field states should be clearly differentiated from one another.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1PtseIbmlNR7Biy1aT4ycOQ2LMvOgpdbZ%2Ftextfield-illo-03.png)

## Efficient

Text fields should make it easy to understand the requested information and to address any errors.



# Types

Text fields come in two forms: filled and outlined.

READ MORE

Text fields come in two types:

- Filled text fields
- Outlined text fields

Both types of text fields use a container to provide a clear affordance for interaction, making the fields discoverable in layouts.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F18fktKxSS5YHo2MIf3mm3VzLPoGyEUKRq%2Ftextfields-types.png)

\1. Filled text fields
\2. Outlined text fields



# Choosing the right text field

Both types of text fields provide the same functionality, so the type of text field you use can depend on style alone. Choose the type...

READ MORE

Both types of text fields provide the same functionality, so the type of text field you use can depend on style alone.

Choose the type that:

- Works best with your app’s visual style
- Best accommodates the goals of your UI
- Is most distinct from other components (like buttons) and surrounding content

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F172e_wQpXZN14fNFnK8SytESS_hJDn6Si%2Ftextfields-type-filled.png)

Mobile form using filled text fields

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Kezf2nmTVbQdOfNajrotDxeIKs1WlwHl%2Ftextfields-type-stroke.png)

The same mobile form using outlined text fields

## Both types of text fields in one UI

If both types of text fields are used in a single UI, they should be used consistently within different sections, and not intermixed within the same region. For example, you could use outlined text fields in one section and filled text fields in another.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1NYpRApNXh1R4lbqgr_tLl1l_Hbx_Tlrx%2Ftextfields-type-mix-do.png)

Do.

When using both types of text fields in a UI, separate them by region.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F10QziQ7saIpX7c0N6QJssXN9SEY3TG2L6%2Ftextfields-type-mix-dont.png)

Don’t.

When using a both types of text fields, don’t use both next to each other, or within the same form.

------

## Anatomy 

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Ejie5ILk2-eAB9wBRFG93aJtYV7gJtJV%2Ftextfields-annotations-1.png)

1. ### Container

2. ### Leading icon (optional)

3. ### Label text

4. ### Input text

5. ### Trailing icon (optional)

6. ### Activation indicator

7. ### Helper text (optional)



# Container

Containers improve the discoverability of text fields by creating contrast between the text field and surrounding content. A text field container has a fill and...

READ MORE

Containers improve the discoverability of text fields by creating contrast between the text field and surrounding content.

## Fill and stroke

A text field container has a fill and a stroke (either around the entire container, or just the bottom edge). The color and thickness of a stroke can change to indicate when the text field is active.

## Rounded corners

The container of an outlined text field has rounded corners, while the container of a filled text field has rounded top corners and square bottom corners.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1M-ZaDIpRiXkZ91XAbYbIem9yIGKlJH98%2Ftextfields-anatomy-container.png)

Container



# Label text

Label text is used to inform users as to what information is requested for a text field. Every text field should have a label. Label...

READ MORE

Label text is used to inform users as to what information is requested for a text field. Every text field should have a label.

Label text should be aligned with the input line, and always visible. It can be placed in the middle of a text field, or rest near the top of the container.

<video aria-describedby="anatomy-figure-caption-1" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Do.

Label text should always be visible, moving from the middle of the text field to the top (if the field is selected).

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1bV3UuttijOjZTzAdGHPHJ4BlMy52HRWn%2Ftextfields-annotations-labels-dont-1.png)

Don’t.

Label text shouldn’t be truncated. Keep it short, clear, and fully visible.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1YxkT7YL_gCx_4qQczlPkKB-zgY9_dAAq%2Ftextfields-annotations-labels-dont-2.png)

Don’t.

Label text shouldn’t take up multiple lines.

## Required text indicator

To indicate that a field is required, display an asterisk (*) next to the label text and mention near the form that asterisks indicate required fields.

- If some fields are required, indicate all required ones
- If most fields are required, indicate optional fields by displaying the word “optional” in parentheses next to the label text
- If required text is colored, that color should also be used for the asterisk

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1W6e4PEA6YwPK39kD8vMTUEITOI9H3BAN%2Ftextfields-annotations-required.png)

Required text with asterisk



# Input text

Input text is text the user has entered into a text field. Input text is text entered by the user. A cursor indicates the current...

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F13tQWdE9vsdEDbwAY9a5FI9Btb3Oae86V%2Ftextfields-annotations-2.png)

Input text is text the user has entered into a text field.

### 1. Input text

Input text is text entered by the user.

### 2. Cursor

A cursor indicates the current location of text input in a field.



# Assistive elements

Assistive elements provide additional detail about text entered into text fields. Helper text conveys additional guidance about the input field, such as how it will...

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1QPDRElkKlvPkRnsAivI5_xjHDcEpQigr%2Ftextfields-annotations-3.png)

Assistive elements provide additional detail about text entered into text fields.

### 1. Helper text

Helper text conveys additional guidance about the input field, such as how it will be used. It should only take up a single line, being persistently visible or visible only on focus.

### 2. Error message

When text input isn’t accepted, an error message can display instructions on how to fix it. Error messages are displayed below the input line, replacing helper text until fixed.

### 3. Icons

Icons can be used to message alerts as well. Pair them with error messages to provide redundant alerts, which are useful when you need to design for colorblind users.

### 4. Character counter

Character or word counters should be used if there is a character or word limit. They display the ratio of characters used and the total character limit.

## Error text

For text fields that validate their content (such as passwords), replace helper text with error text when applicable. Swapping helper text with error text helps prevent new lines of text from being introduced into a layout, thus bumping content to fit it.

- If only one error is possible, error text describes how to avoid the error
- If multiple errors are possible, error text describes how to avoid the most likely error

<video aria-describedby="anatomy-figure-caption-5" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Do.

Swap helper text with error text.

<video aria-describedby="anatomy-figure-caption-6" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Don’t.

Don’t place error text under helper text, as their appearance will shift content.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1WrZZKbP3jMNcVRn2VT-WGrS_9olLrZf_%2Ftextfields-anatomy-error-caution.png)

Caution.

Long errors can wrap to multiple lines if there isn’t enough space to clearly describe the error. In this case, ensure padding between text fields is sufficient to prevent multi-lined errors from bumping layout content.



# Icons

Icons in text fields are optional. Text field icons can describe valid input methods (such as a microphone icon), provide affordances to access additional functionality...

READ MORE

Icons in text fields are optional. Text field icons can describe valid input methods (such as a microphone icon), provide affordances to access additional functionality (such as clearing the content of a field), and can express an error.

Leading and trailing icons change their position based on LTR or RTL contexts.

[BidirectionalityUIs for languages that are read from right-to-left (RTL), such as Arabic and Hebrew, should be mirrored to ensure content is easy to understand.Related Article*arrow_downward*](https://material.io/design/usability/bidirectionality.html#bidirectionality)



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1e2bKV4DXMixXuGWBt2lSTwlQHXq6Pq9-%2Ftextfields-annotations-4.png)

### 1. Icon signifier

Icon signifiers can describe the type of input a text field requires, and be touch targets for nested components. For example, a calendar icon may be tapped to reveal a date picker.

### 2. Valid or error icon

Iconography can indicate both valid and invalid inputs, making error states clear for colorblind users.

### 3. Clear icon

Clear icons let users clear an entire input field. They appear only when input text is present.

### 4. Voice input icon

A microphone icon signifies that users can input characters using voice.

### 5. Dropdown icon

A dropdown arrow indicates that a text field has a nested selection component.

------

## Filled text field 



# Usage

Filled text fields have more visual emphasis than outlined text fields, making them stand out when surrounded by other content and components.

READ MORE

Filled text fields have more visual emphasis than outlined text fields, making them stand out when surrounded by other content and components.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

A filled text field

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1lyeQ5FDHka3VQgEzwegHhZt_L4cz7G1y%2Ftextfields-filled-dont.png)

Don’t.

Don’t design text fields to look similar to buttons, as they could be mistaken for buttons.



# Dense text fields

Dense text fields enable users to scan and take action on large amounts of information.

READ MORE

Dense text fields enable users to scan and take action on large amounts of information.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ip79lR4Ufj6zryOJ9Jq8JkkFplHa7-2q%2Ftextfields-dense-filled-example.png)

A form with dense text fields



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F11tg--XoPYHGk4sg1AF3yYOz3sVjQM4XP%2Ftextfields-filled-dense.png)

\1. Dense text field with a label, 52dp height
\2. Dense text field without a label, 40dp height





# Text fields without labels

A text field doesn’t require a label if the field’s purpose is indicated by a separate, adjacent label.

READ MORE

A text field doesn’t require a label if the field’s purpose is indicated by a separate, adjacent label.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1YRfQiDH2DTT4pJP3b7n34zZJXAJ4fmjD%2Ftextfields-filled-nolabel-example.png)

Text fields with adjacent labels



# Prefix and suffix text

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1fjIK71aUER9ClKKnnV1eMwJtVsk8WXdC%2Ftextfields-filled-prefix.png)

A text field with a currency symbol text prefix.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1GMduh2KcY3OkAd7-mbYpStPMNdRUM87A%2Ftextfields-filled-suffix-left-input.png)

A text field with a unit of mass suffix.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1oyXC5y0FTTQPlRw9-d-vQWLMyfdrKp0D%2Ftextfields-filled-suffix-right-input.png)

Text field with a suffix expressing an academic grading scale.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Tr_RiPTuTwzl_4sAamsi68rxUcVXh5Pv%2Ftextfields-filled-suffix-right-input-flexible.png)

Text field with an email domain address suffix.



# States

## Filled text fields (baseline)

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1TKi-wOcOI4c_XQswgLFfHS1078d1wAzJ%2Ftextfields-filled-states.png)

Filled text fields can display the following states: inactive, activated, focused, hover, error, and disabled.

## Filled text fields without labels

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1B9aovwxwTq4ehAbA5Shp13hV6tADoeyI%2Ftextfields-filled-nolabel-states.png)

Filled text fields (without labels) can display the following states: inactive, activated, focused, hover, error, and disabled.

## Filled text fields with prefix text

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F17_fSR2ls9Rp3kERxc2adlMDcn1YGuIeY%2Ftextfields-filled-prefix-states.png)

Filled text fields (with prefix text) can display the following states: inactive, activated, focused, hover, error, and disabled.

## Filled text fields with suffix text

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1zxQqJgOPUDoNAm3ht4Gw2C3mgBCzPlN0%2Ftextfields-filled-suffix-states.png)

Filled text fields (with suffix text) can display the following states: inactive, activated, focused, hover, error, and disabled.

------

## Outlined text field 



# Usage

Outlined text fields have less visual emphasis than filled text fields. When they appear in places like forms, where many text fields are placed together,...

READ MORE

Outlined text fields have less visual emphasis than filled text fields. When they appear in places like forms, where many text fields are placed together, their reduced emphasis helps simplify the layout.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

An outlined text field



# Dense text fields

Dense text fields enable users to scan and take action on large amounts of information.

READ MORE

Dense text fields enable users to scan and take action on large amounts of information.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1NuXrmrchha20V57ug2zrRifpmR_EecS0%2Ftextfields-dense-outlined-example.png)

A form with dense text fields



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Db4T2v9dt2RCOgR4DESgnftJY0pYqXvJ%2Ftextfields-outlined-dense.png)

Dense text field, 40dp height





# Text fields without labels

A text field doesn’t require a label if the field’s purpose is indicated by a separate, independent label.

READ MORE

A text field doesn’t require a label if the field’s purpose is indicated by a separate, independent label.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1eylMIqpRs5YAjPfIY6Oq7wHH6Mpal-hT%2Ftextfields-outlined-nolabel-example.png)

Text fields with separate but clear labels can indicate what the fields are for (title, price, and location).



# Prefix and suffix text

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Hj-fpl6Eo_FLPnb3rA6APPTAilanKM8S%2Ftextfields-outlined-prefix.png)

A text field with a currency symbol prefix

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1w1dbNByWeX6j404PSN88gXKD0FXNNYkR%2Ftextfields-outlined-suffix-left-input.png)

A text field with a unit of mass suffix

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F15rBPAPc3P_sgO217S9ZoiIxrWiKVvS2j%2Ftextfields-outlined-suffix-right-input.png)

A text field with grading scale as suffix

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F156OK-TEUmBD2hUt3bPfQnHFTqJthYKEb%2Ftextfields-outlined-suffix-right-input-flexible.png)

A text field with an email domain address suffix



# States

## Outlined text field (baseline)

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1DxDXQRkLemKRP1vsos0kJC-ET1ibXY2I%2Ftextfields-outline-states-enabled.png)

Outlined text fields can display the following states: inactive, activated, focused, hover, error, and disabled.

## Outlined text field without labels

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F14ey_3SLaCRNDiA2f8UB7HnqOHKdLhbPH%2Ftextfields-outlined-states-nolabel.png)

Filled text fields can display the following states: inactive, activated, focused, hover, error, and disabled.

## Outlined text field with prefix text

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ND4ZvEpeS_3DszY7CAkUEfTyyxjEtRwA%2Ftextfields-outlined-prefix-states.png)

Filled text fields can display the following states: inactive, activated, focused, hover, error, and disabled.

## Outlined text field with suffix text

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1oQcwFHZmAd-JYB-x46AUuEH7uzkrCKCB%2Ftextfields-outlined-suffix-states.png)

Filled text fields can display the following states: inactive, activated, focused, hover, error, and disabled.

------

## Input types 

Text fields can display user input in the following ways:

- **Single line text fields** display only one line of text
- **Multi-line text fields** grow to accommodate multiple lines of text
- **Text areas** are fixed-height fields

------

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

## Single-line fields

In single-line fields, as the cursor reaches the right field edge, text longer than the input line automatically scrolls left.

Single-line fields are not suitable for collecting long responses. For those, use a multi-line text field or text area instead.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

## Multi-line fields

Multi-line text fields show all user input at once. Overflow text causes the text field to expand (shifting screen elements downward), and text wraps onto a new line.

These fields initially appear as single-line fields, which is useful for compact layouts that need to be able to accomodate large amounts of text.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

## Text areas

Text areas are taller than text fields and wrap overflow text onto a new line. They are a fixed height and scroll vertically when the cursor reaches the bottom of the field.

The large initial size indicates that longer responses are possible and encouraged.

These should be used instead of multi-line fields on the web. Ensure the height of a text area fits within [mobile screen sizes](https://material.io/devices/).

## Read-only fields

Read-only text fields display pre-filled text that the user cannot edit. A read-only text field is styled the same as a regular text field and is clearly labeled as read-only.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1KaNgos-Q54hYhJfHLx9ci8JJMho2YPuT%2Ftextfields-filled-read-only.png)

A filled read-only text field.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1XhDoj1vOg5TInlXMAvy_kfgYV-WC6zV4%2Ftextfields-outline-read-only.png)

An outlined read-only text field.

------

## Theming 



# Rally Material Theme

This personal finance app’s filled text fields have been customized using Material Theming. Areas of customization include color and typography. Rally is a personal finance...

READ MORE

This personal finance app’s filled text fields have been customized using Material Theming. Areas of customization include color and typography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Yizi3xlW9dCBTLbQd_iCGfy4vctjTJMu%2Ftextfeildfilled-rally-ahero.png)

Rally’s customized filled text fields

[RallyRally is a personal finance app that demonstrates how Material Design can be used for finance.Related Article*arrow_downward*](https://material.io/design/material-studies/rally.html#rally)



## Color

Rally’s filled text fields use custom color on five elements: label text, input text, trailing icon, activation indicator, and container.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1n5zn5DxXJlFnX06OR3ZTuSWhoGBU3_Ms%2Ftextfeildfilled-rally-color.png)

| Element              | Category   | Attribute    | Value       |
| -------------------- | ---------- | ------------ | ----------- |
| Label text           | Primary    | ColorOpacity | #FFFFFF100% |
| Input text           | On Surface | ColorOpacity | #FFFFFF100% |
| Trailing icon        | On Surface | ColorOpacity | #FFFFFF100% |
| Activation indicator | Primary    | ColorOpacity | #FFFFFF100% |
| Container            | On Surface | ColorOpacity | #FFFFFF4%   |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Typography

Rally’s filled text fields use custom typography for input text and label text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1qTR76K1D7FLiVh2TwHmuW6WkXGrf8mI3%2Ftextfeildfilled-rally-type.png)

| Element    | Category   | Attribute            | Value                               |
| ---------- | ---------- | -------------------- | ----------------------------------- |
| Input text | Subtitle 1 | TypefaceFontSizeCase | EczarRegular16Title case            |
| Label text | Caption    | TypefaceFontSizeCase | Roboto CondensedRegular12Title case |

## Shape

Rally’s filled text fields use custom corner shapes.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1GEZz50fP0R3wlsjlSK7SyMcbscDcEOSR%2Ftextfeildfilled-rally-shape.png)

| Element   | Category        | Attribute  | Value         |
| --------- | --------------- | ---------- | ------------- |
| Container | Small component | FamilySize | Cut0;0;0;0 dp |



# Crane Material Theme

This travel app’s outlined text fields have been customized using Material Theming. Areas of customization include color and typography. Crane is a travel app that...

READ MORE

This travel app’s outlined text fields have been customized using Material Theming. Areas of customization include color and typography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1OywgOd8xtmqAjxKNIogE6fHX1X-692t9%2Ftextfieldsoutlined-crane-ahero.png)

Crane’s customized outlined text fields

[CraneCrane is a travel app that uses Material Design components and Material Theming to create a personalized on-brand experience.Related Article*arrow_downward*](https://material.io/design/material-studies/crane.html#crane)



## Color

Crane’s outlined text fields use custom color on three elements: the input text, label text, and container.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1PT2bzuG1PKBK9qn5bDLD3AwuVWw0l1p_%2Ftextfieldsoutlined-crane-color.png)

| Element    | Category   | Attribute    | Value      |
| ---------- | ---------- | ------------ | ---------- |
| Input text | On Surface | ColorOpacity | #00000087% |
| Label Text | On Surface | ColorOpacity | #00000060% |
| Container  | On Surface | ColorOpacity | #00000012% |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Typography

Crane’s outlined text fields use custom typography for the input text and label text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1mHTe-_Ju50H7YHgVjxJKBqLNPivnPTI9%2Ftextfieldsoutlined-crane-type.png)

| Element    | Category   | Attribute            | Value                       |
| ---------- | ---------- | -------------------- | --------------------------- |
| Input text | Subtitle 1 | TypefaceFontSizeCase | RalewayMedium16Title case   |
| Label text | Caption    | TypefaceFontSizeCase | RalewaySemiBold14Title case |

## Shape

Crane’s outlined text fields use custom corner shapes.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1x-i7NtlEVG8Pe_JMDJXC48vJADGBq4vY%2Ftextfieldsoutlined-crane-shape.png)

| Element   | Category        | Attribute  | Value         |
| --------- | --------------- | ---------- | ------------- |
| Container | Small component | FamilySize | Cut4;4;4;4 dp |

------

## Spec 



# Filled text field

16dp #00000099 12dp #00000099 #0000a R0 G0 B10 Elevation 0dp Top left, top right corner Rounded: 4dp All measurements are displayed in device-independent pixels (dps)...

READ MORE

- 
- 
- 
- 
- 
- 56Measurement 56
- 280 Measurement 280
- 12Measurement 12
- CMeasurement C
- 1Measurement 1
- 12Measurement 12
- 16Measurement 16

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1D40WEsXNcwvcvFYKd4q4yY3TB2py0Dvx%2Fspecs-textfields-filled.png)



*flip*

Specs



- 
- 
- 
- 56Measurement 56
- 12Measurement 12
- 2Measurement 2
- 20Measurement 20
- 12Measurement 12
- 16Measurement 16
- 20Measurement 20
- 24

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1VF-XAbf3a-A2L7V7ntbHoDfEO3h0irYX%2Fspecs-textfields-filled-active.png)



*flip*

Specs



- 55Measurement 55
- 24

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1n9eVOVqIT-T4-xaMbw7tfbpqUFgJM6ba%2Fspecs-textfields-filled-error.png)



*flip*

Specs





# Outlined text field

12dp #00000099 All measurements are displayed in device-independent pixels (dps) 16dp #3c4043 12dp #6200ee #00000060 R0 G0 B0 A0.38 Elevation 0dp All corners Rounded: 4dp...

READ MORE

- 
- 
- 
- 
- 12Measurement 12
- CMeasurement C
- 1Measurement 1
- 16Measurement 16

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  









![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F145ym1uAiGOHxfCRA8bvvZQxOvbLXCofU%2Fspecs-textfields-outlined.png)



*flip*

Specs



- 
- 
- 
- 4Measurement 4
- 4Measurement 4
- 14Measurement 14
- 28Measurement 28
- 24Measurement 24
- 8Measurement 8
- 16Measurement 16
- 16Measurement 16
- 2Measurement 2
- 24

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1sDssFpR7Lm7le2uI_r17KzCCRQ7ZXCuO%2Fspecs-textfields-outlined-active.png)



*flip*

Specs



- 
- 2Measurement 2
- 16Measurement 16
- 24

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1_lP2XWk4Fr_qmlzu1uFXz4ZTBaXwRxk0%2Fspecs-textfields-outlined-error.png)



*flip*

Specs





------

## Implementation 

Text fields implementation support for each platform is indicated below.

[![Android Implementation-Text fields](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1N8OGQDuUPQl_vBhjcvyVWs8C4FWG0eDZ%2Fimplementation-android-platform.png)](https://material.io/go/android-text-fields/)

## [Android Material Component](https://material.io/go/android-text-fields/)

**Status:** Available

[![IOS Implementation-Text fields](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1f0Yc8wst10q4dXneZWe_6VFQwcRqD6Lc%2Fimplementation-ios-platform.png)](https://material.io/go/ios-text-fields/)

## [IOS Material Component](https://material.io/go/ios-text-fields/)

**Status:** Available

[![Flutter Implementation-Text fields](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1WvkpGWOkFMenQgOGnkACg3pUwRgP3Ybe%2Fimplementation-flutter-platform.png)](https://material.io/go/flutter-text-fields/)

## [Flutter Material Component](https://material.io/go/flutter-text-fields/)

**Status:** Available

[![Web Implementation-Text fields](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1SD2AkVWuJ6lNbvxNwmhOurcbIghaQHJC%2Fimplementation-web-platform.png)](https://material.io/go/web-text-fields/)

## [Web Material Component](https://material.io/go/web-text-fields/)

**Status:** Available