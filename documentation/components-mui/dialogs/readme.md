# Dialogs

Material UI (Core) Component

Reference: https://material.io/design/components/dialogs.html



------

# Dialogs 

## Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1epaS8q__8QAmHL__DutNpA8JA86msUt6%2Fdialogs-usage-1.png)

CONTENTS[Usage](https://material.io/design/components/dialogs.html#usage)[Anatomy](https://material.io/design/components/dialogs.html#anatomy)[Behavior](https://material.io/design/components/dialogs.html#behavior)[Actions](https://material.io/design/components/dialogs.html#actions)[Alert dialog](https://material.io/design/components/dialogs.html#alert-dialog)[Simple dialog](https://material.io/design/components/dialogs.html#simple-dialog)[Confirmation dialog](https://material.io/design/components/dialogs.html#confirmation-dialog)[Full-screen dialog](https://material.io/design/components/dialogs.html#full-screen-dialog)[Theming](https://material.io/design/components/dialogs.html#theming)[Specs](https://material.io/design/components/dialogs.html#specs)[Implementation](https://material.io/design/components/dialogs.html#implementation)

------

## Usage 

A dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.

Dialogs are purposefully interruptive, so they should be used sparingly.



# Principles

Dialogs focus user attention to ensure their content is addressed. Dialogs should be direct in communicating information and dedicated to completing a task. Dialogs should...

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F12I6ZaJv72hxln-g66nPT9yGAgd7GTP5g%2Fdialogs-illos-03.png)

## Focused

Dialogs focus user attention to ensure their content is addressed.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1zRDZb1XA1Uau4Kz4bKmWosMnVlDMqiB3%2Fdialogs-illos-01.png)

## Direct

Dialogs should be direct in communicating information and dedicated to completing a task.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1DdlsZU8nZy5sDZpAgmBtTzYPMEU6FMb6%2Fdialogs-illos-02.png)

## Helpful

Dialogs should appear in response to a user task or an action, with relevant or contextual information.



# When to use

A banner displays a prominent message and related optional actions. Related Article arrow_downward Snackbars provide brief feedback about an operation through a message at the...

READ MORE

[BannerA banner displays a prominent message and related optional actions.Related Article*arrow_downward*](https://material.io/design/components/banners.html#banner)

[SnackbarSnackbars provide brief feedback about an operation through a message at the bottom of the screen.Related Article*arrow_downward*](https://material.io/design/components/snackbars.html#snackbar)



Dialogs should be used for:

- Errors that block an app’s normal operation
- Critical information that requires a specific user task, decision, or acknowledgement

| **Component** | **Priority**               | **User action**                                              |
| ------------- | -------------------------- | ------------------------------------------------------------ |
| Snackbar      | Low priority               | Optional: Snackbars disappear automatically                  |
| Banner        | Prominent, medium priority | Optional: Banners remain until dismissed by the user, or if the state that caused the banner is resolved |
| Dialog        | Highest priority           | Required: Dialogs block app usage until the user takes a dialog action or exits the dialog (if available) |



# Types

Alert dialogs interrupt users with urgent information, details, or actions. Simple dialogs display a list of items that take immediate effect when selected. Confirmation dialogs...

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Vs3vgE4jR4V5x-jjaQUhC1LqdOmdi2o2%2Fdialogs-alertdialog.png)

## Alert dialog

Alert dialogs interrupt users with urgent information, details, or actions.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1O8W1m3KG_PpVYeWg6w-c2eT_iWy4CeGs%2Fdialogs-simpledialog.png)

## Simple dialog

Simple dialogs display a list of items that take immediate effect when selected.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F15bN9cs12hC90Rju5Fsnqy7sbSgbvtADK%2Fdialogs-confirmationdialog.png)

## Confirmation dialog

Confirmation dialogs require users to confirm a choice before the dialog is dismissed.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1K06WW9W94mIiLOEUwXV6Jf7QLrzkbNzz%2Fdialogs-fullscreendialog.png)

## Full-screen dialog

Full-screen dialogs fill the entire screen, containing actions that require a series of tasks to complete.

------

## Anatomy 

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1MgAQ5OcmR0XFXN-CnHRsCkQ6fI-MlLKj%2Fdialogs-elements-1.png)

1. ### Container

2. ### Title (optional)

3. ### Supporting text

4. ### Buttons

5. ### Scrim



# Dialog box and scrim

A dialog is a type of modal window. Access to the rest of the UI is disabled until the modal is addressed. All modal surfaces...

READ MORE

A dialog is a type of modal window. Access to the rest of the UI is disabled until the modal is addressed. All modal surfaces are interruptive by design – their purpose is to have the user focus on content on a surface that appears in front of all other surfaces.

To express that the rest of the app is inaccessible, and to focus attention on the dialog, surfaces behind the dialog are scrimmed. A scrim is a temporary treatment that can be applied to Material surfaces for the purpose of making content on the surface less prominent.



# Title

Dialog title and button text should communicate the purpose of any dialog.

READ MORE

A dialog’s purpose should be communicated by its title and button text.

Titles should:

- Contain a brief, clear statement or question
- Avoid apologies (“Sorry for the interruption”), alarm (“Warning!”), or ambiguity (“Are you sure?”)

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1enpoDbfKFCRokbXkHpCWKclgs-66vhrz%2Fdialogs-titles-do-1.png)

Do.

This dialog title poses a specific question, concisely explains what’s involved in the request, and provides clear actions.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1NTG0Bob7DM5k2QXetxQEaWHICf58b17M%2Fdialogs-titles-dont-1.png)

Don’t.

Don’t use dialog titles that pose an ambiguous question.



# Buttons

Dialogs can have buttons side-by-side, and stacked in full width.

READ MORE

## Side-by-side buttons (Recommended)

Side-by-side buttons display two text buttons next to one another.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Aod90RW5SVhD-LPWjVCGhVQu3OGdWedQ%2Fdialogs-buttons-sidebyside-1.png)

These side-by-side buttons display buttons provide the actions of “Disagree” and “Agree” as options.

## Stacked full-width buttons

Stacked buttons accommodate longer button text. Confirming actions appear above dismissive actions.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1PDm0EPybkBWq6GzeWhb2mflYiQ5UKfmL%2Fdialogs-buttons-stacked-1.png)

[ElevationElevation is the relative distance between two surfaces along the z-axis.Related Article*arrow_downward*](https://material.io/design/environment/elevation.html#elevation)





# Elevation

Dialogs are at 24dp elevation, above other content.

READ MORE

Dialogs are displayed at 24dp elevation and can display a shadow. They appear above other content and typically have a scrim below them that covers all app content.

------

## Behavior 



# Interaction

Dialogs appear without warning, requiring users to stop their current task. They should be used sparingly, as not every choice or setting warrants interruption.

READ MORE

Dialogs appear without warning, requiring users to stop their current task. They should be used sparingly, as not every choice or setting warrants interruption.



# Position

Dialogs retain focus until dismissed or an action has been taken, such as choosing a setting. They shouldn’t be obscured by other elements or appear...

READ MORE

Dialogs retain focus until dismissed or an action has been taken, such as choosing a setting. They shouldn’t be obscured by other elements or appear partially on screen, with the exception of full-screen dialogs.



# Scrolling

Most dialog content should avoid scrolling. When scrolling is required, the dialog title is pinned at the top, with buttons pinned at the bottom. This...

READ MORE

Most dialog content should avoid scrolling. When scrolling is required, the dialog title is pinned at the top, with buttons pinned at the bottom. This ensures selected content remains visible alongside the title and buttons, even upon scroll.

Dialogs don’t scroll with elements outside of the dialog, such as the background.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

When viewing a scrollable list of options, the dialog title and buttons remain fixed.



# Dismissing dialogs

Dialogs may be dismissed by: If the user’s ability to dismiss a dialog is disabled, the user must choose a dialog action to proceed.

READ MORE

Dialogs may be dismissed by:

- Tapping outside of the dialog
- Tapping the “Cancel” button
- Tapping the system back button (Android only)

------

If the user’s ability to dismiss a dialog is disabled, the user must choose a dialog action to proceed.

------

## Actions 



# Types of actions

Dialogs present a distinct choice to users through their title, content, and actions. Dialog actions are represented as buttons and allow users confirm or dismiss...

READ MORE

Dialogs present a distinct choice to users through their title, content, and actions. Dialog actions are represented as buttons and allow users confirm or dismiss something.

There are three types of dialog actions:

## Confirming actions

To resolve what triggered the dialog, confirming actions confirm a proposed action. These actions can involve removing something, such as “Delete” or “Remove,” if it suits the context. They are placed on the right side of the screen.

## Dismissive actions

Dismissive actions dismiss a proposed action, and return the user to the originating screen or step. They are placed directly to the left of a confirming action.

## Acknowledgement actions

When user acknowledgement is required to proceed, a single action may be presented. Alternatively, use a snackbar to communicate this type of information.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1WshgXQMCk5ityr4xjhpk-xoRCf6ADQ2k%2Fdialogs-actions-do-1a.png)

Do.

Disable confirming actions (1) until a choice is made. Dismissive actions are never disabled.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1NehaRNdCUvI6pL7noPi75QTWwGozDF73%2Fdialogs-actions-dont-1.png)

Don’t.

Dismissive actions (1) are placed to the left of confirming actions.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1-f0bAaDXsx01ctVkxIWg5ufWVwT71ttA%2Fdialogs-actions-do-2.png)

Do.

A single action may be provided only if it’s an acknowledgement.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1QvCmHckxTl_rxtgJLz9RGUUn-vOONzu6%2Fdialogs-actions-dont-2.png)

Don’t.

Avoid presenting users with unclear choices. “Cancel” doesn't make sense here because no clear action is proposed.

[SnackbarSnackbars provide brief feedback about an operation through a message at the bottom of the screen.Related Article*arrow_downward*](https://material.io/design/components/snackbars.html#snackbar)





# Number of actions

Dialogs should contain a maximum of two actions. Rather than adding a third action, an inline expansion can display more information. If more extensive information...

READ MORE

Dialogs should contain a maximum of two actions.

- If a single action is provided, it must be an acknowledgement action.
- If two actions are provided, one must be a confirming action, and the other a dismissing action.
- Providing a third action such as “Learn more” is not recommended as it navigates the user away from the dialog, leaving the dialog task unfinished.

------

Rather than adding a third action, an inline expansion can display more information. If more extensive information is needed, provide it prior to entering the dialog.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1qm86iwkrznqfyuftA3X6rnAEDOK_cSSx%2Fdialogs-actions-dont-3.png)

Don’t.

The “Learn more” action (1) navigates away from this dialog, potentially leaving it in an indeterminate state.

------

## Alert dialog 



# Usage

Alert dialogs interrupt users with urgent information, details, or actions.

READ MORE

Alert dialogs interrupt users with urgent information, details, or actions.



# Behavior

To close an alert dialog, one of its actions must be selected.

READ MORE

To close an alert dialog, one of its actions must be selected.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1g8052ZKUjp4a9STlAHL9FJ7MtLTOHJnK%2Fdialogs-alertdialog-do-1.png)

Do.

The action “Discard” indicates the outcome of the decision.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Q6QdoQcU7IJK9jjH0TSqWf8PZNtE8Lbu%2Fdialogs-alertdialog-dont-1.png)

Don’t.

Don’t use action text that fails to indicate what the selection will do. “Cancel” and “Delete” better indicate what will occur in this dialog.

------

## Simple dialog 



# Usage

Simple dialogs can display items that are immediately actionable when selected. They don’t have text buttons. As simple dialogs are interruptive, they should be used...

READ MORE

Simple dialogs can display items that are immediately actionable when selected. They don’t have text buttons.

As simple dialogs are interruptive, they should be used sparingly. Alternatively, dropdown menus provide options in a non-modal, less disruptive way.

[Dropdown menuMenus display a list of choices on temporary surfaces.Related Article*arrow_downward*](https://material.io/design/components/menus.html#dropdown-menu)





# Behavior

A simple dialog allows the following interactions: Simple dialogs allow users to act on selected elements, without action text. For example, users can simply select...

READ MORE

A simple dialog allows the following interactions:

- Tap an action to choose it and close the dialog
- Tap outside the dialog to close the dialog without taking an action

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F15y8iRAzd1ob36crPdwDNTtGxF-KqCiWY%2Fdialogs-simpledialog-1.png)

A simple dialog

## Simple dialogs without actions

Simple dialogs allow users to act on selected elements, without action text. For example, users can simply select a list item to take action on it.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ezs3VJaYD0SeubZUi9cjvEQkR-C-3vIP%2Fdialogs-simpledialog-dont-2.png)

Don’t.

Don’t display text buttons in simple dialogs. The choice itself is actionable when tapped.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1J9ibUnEAEgaqOPyG8cPaMOGc7BvMBwwU%2Fdialogs-simpledialog-dont-1.png)

Don’t.

Don’t include dismissive actions like “Cancel” in a simple dialog. Users can tap anywhere outside the dialog to close it.

------

## Confirmation dialog 



# Usage

Confirmation dialogs give users the ability to provide final confirmation of a choice before committing to it, so they have a chance to change their...

READ MORE

Confirmation dialogs give users the ability to provide final confirmation of a choice before committing to it, so they have a chance to change their minds if necessary.

If the user confirms a choice, it’s carried out. Otherwise, the user can dismiss the dialog. For example, users can listen to multiple ringtones but only make a final selection upon touching “OK.”



# Behavior

To confirm a choice, the user taps a confirmation action. To cancel, the user taps a dismissive action.

READ MORE

To confirm a choice, the user taps a confirmation action. To cancel, the user taps a dismissive action.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F13ZAMgXEVtPnO6n54CnEtRviGf9tkGaPL%2Fdialogs-confirmation-layout.png)

The user must either confirm a choice or dismiss the dialog before proceeding.



# Buttons

Confirmation dialogs provide both confirmation and cancel buttons. After a confirmation button is tapped, a selection is confirmed. If the cancel button is tapped, or...

READ MORE

Confirmation dialogs provide both confirmation and cancel buttons. After a confirmation button is tapped, a selection is confirmed. If the cancel button is tapped, or the area outside the dialog, the action is cancelled.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1lEotg849MHDezDfvtlCXibDuGE5p1Xuc%2Fdialogs-confirmation-layout-do.png)

Do.

Provide confirmation and dismissive buttons.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1TtrnvThzMge9YA8wT659PhEmiReOtHjF%2Fdialogs-confirmation-layout-dont.png)

Don’t.

Don’t provide a single action, as it’s unclear how to dismiss the dialog.

------

## Full-screen dialog 



# Usage

Full-screen dialogs group a series of tasks, such as creating a calendar entry with the event title, date, location, and time. Because they take up...

READ MORE

Full-screen dialogs group a series of tasks, such as creating a calendar entry with the event title, date, location, and time. Because they take up the entire screen, full-screen dialogs are the only dialogs over which other dialogs can appear.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

A calendar app launching a full-screen dialog

Full-screen dialogs may be used for content or tasks that meet any of these criteria:

- Dialogs that include components which require keyboard input, such as form fields
- When changes aren’t saved instantly
- When components within the dialog open additional dialogs

------

Full-screen dialogs are for mobile devices only. For tablet or desktop, use a modal dialog.



# Behavior

To save a selection in a full-screen dialog, the user taps “Save.” To discard all changes and exit, the user taps the “X” icon or...

READ MORE

## Saving selections

To save a selection in a full-screen dialog, the user taps “Save.” To discard all changes and exit, the user taps the “X” icon or “Back” button.

## Confirmation

The confirmation action is disabled until all mandatory fields are filled. Use descriptive verbs such as “Save,” “Send,” “Share,” “Update,” or “Create.” Don’t use vague terms such as “Done,” “OK” or “Close.”

- If no changes have been made, the dialog closes and no discard confirmation is required
- If the user has made changes, the user is prompted to confirm the discard action

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1p9sIsdGsnXOFYO9PQRiQi-2Ms1ZDCd6N%2Fdialogs-fullscreen-behavior-dont-1.png)

Don’t.

A “Close” button (1) is vague because it does not indicate whether changes will be saved or discarded.

## Dialog windows

Launching a full-screen dialog temporarily resets the app’s perceived elevation, allowing simple menus or dialogs to appear above the full-screen dialog.

<video aria-describedby="full-screen-dialog-figure-caption-1" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

A calendar app launching a full-screen dialog, which launches a confirmation dialog, and alert dialog.



# Layout

Full-screen dialogs cover the screen and don’t appear as a floating modal window. Place confirmation and dismissive actions in the top app bar. Because full-screen...

READ MORE

Full-screen dialogs cover the screen and don’t appear as a floating modal window.

## Actions

Place confirmation and dismissive actions in the top app bar.

## Navigation

Because full-screen dialogs can only be completed, dismissed, or closed, only use the close “X” navigation button.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1LZGy8kdBlDFEKFdP3c5I_eXw83URcZaq%2Fdialogs-fullscreen-layout-dont-1.png)

Don’t.

Avoid any navigation icon other than “X.” The up arrow (1) indicates the view’s state is being saved, which isn’t the case in a full-screen dialog.

## Titles

Titles should be succinct. They can wrap to a second line if necessary, and be truncated. If there are long titles, or titles of variable lengths (such as translations), place them in the content area instead of the app bar.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1t_RZ0CiQzWRo58R7Dab726CvVDvNFDg_%2Fdialogs-fullscreen-titles-dont-1.png)

Caution.

Avoid placing long titles in a dialog’s top app bar (1), as the truncated text may lead to misunderstanding.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1d8YxP1VhHbAocxsZyjX7aPhi_eqAo1cv%2Fdialogs-fullscreen-titles-do-1.png)

Do.

Find ways to shorten app bar text, and place longer titles into the content area (1) of a full-screen dialog.

------

## Theming 



# Crane Material theme

This travel app’s dialogs have been customized using Material Theming. Areas of customization include color, typography, and shape. Crane is a travel app that uses...

READ MORE

This travel app’s dialogs have been customized using Material Theming. Areas of customization include color, typography, and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ZxEfHfNtfkBQ-_Wyl-2zevwLlBIFqjyL%2Fdialogs-crane-ahero.png)

Crane’s customized dialogs

[CraneCrane is a travel app that uses Material Design components and Material Theming to create a personalized on-brand experience.Related Article*arrow_downward*](https://material.io/design/material-studies/crane.html#crane)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Crane’s dialogs use custom color on five elements: the container, title text, supporting text, button text, and scrim.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ThP8AJ5eTy4j-ZWTT7c7ac7Xb1ptHGvb%2Fdialogs-crane-color.png)

| Element         | Category   | Attribute    | Value       |
| --------------- | ---------- | ------------ | ----------- |
| Container       | Surface    | ColorOpacity | #FFFFFF100% |
| Title text      | On Surface | ColorOpacity | #00000087%  |
| Supporting text | On Surface | ColorOpacity | #00000060%  |
| Button text     | Primary    | ColorOpacity | #5C1349100% |
| Scrim           | On Surface | ColorOpacity | #00000032%  |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

Crane’s dialogs use custom typography for title text, supporting text, and button text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Y-zy032afRmiKSLtOvaokbv5KawnyHVT%2Fdialogs-crane-type.png)

| Element         | Category | Attribute            | Value                        |
| --------------- | -------- | -------------------- | ---------------------------- |
| Title text      | H6       | TypefaceFontSizeCase | RalewayBold20Title case      |
| Supporting text | Body 1   | TypefaceFontSizeCase | RalewayMedium16Sentence case |
| Button text     | Button   | TypefaceFontSizeCase | RalewaySemiBold14All caps    |

[About ShapeMaterial surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.Related Article*arrow_downward*](https://material.io/design/shape/about-shape.html#about-shape)



## Shape

Crane’s dialog boxes have custom corner shapes.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1O6MSfSOItnuE_anXHMq8YkP56vu9v3Gr%2Fdialogs-crane-shape.png)

| Element   | Attribute                                                    | Value                                            |
| --------- | ------------------------------------------------------------ | ------------------------------------------------ |
| Container | Top left cornerTop right cornerBottom right cornerBottom left corner | Rounded 16dpRounded 16dpRounded 16dpRounded 16dp |



# Reply Material theme

This email app’s dialogs have been customized using Material Theming. Areas of customization include color, typography, and shape. Crane is a travel app that uses...

READ MORE

This email app’s dialogs have been customized using Material Theming. Areas of customization include color, typography, and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F14G2h0qCykigYNKSaJHj_QK8-sYgvBGN6%2Fdialogs-reply-ahero.png)

Reply’s customized dialogs

[CraneCrane is a travel app that uses Material Design components and Material Theming to create a personalized on-brand experience.Related Article*arrow_downward*](https://material.io/design/material-studies/crane.html#crane)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Reply’s dialogs use custom color on five elements: the dialog box, title text, supporting text, button text, and scrim.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Y_a7JORevBWIh30z6g33-dshFUwmP16z%2Fdialogs-reply-color.png)

| Element         | Category   | Attribute    | Value       |
| --------------- | ---------- | ------------ | ----------- |
| Container       | Surface    | ColorOpacity | #000000100% |
| Title text      | On Surface | ColorOpacity | #232F34100% |
| Supporting text | On Surface | ColorOpacity | #232F34100% |
| Button text     | Primary    | ColorOpacity | #344955100% |
| Scrim           | On Surface | ColorOpacity | #232F3432%  |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

Reply’s dialogs use custom typography for title text, supporting text, and button text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1GT9gRVgwi8N_KJGCvZs2c9WFObRixs4r%2Fdialogs-reply-type.png)

| Element         | Category | Attribute            | Value                            |
| --------------- | -------- | -------------------- | -------------------------------- |
| Title text      | H6       | TypefaceFontSizeCase | Work SansBold21Sentence case     |
| Supporting text | Body 1   | TypefaceFontSizeCase | Work SansRegular16Sentence case  |
| Button text     | Button   | TypefaceFontSizeCase | Work SansSemiBold15Sentence case |

[About ShapeMaterial surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.Related Article*arrow_downward*](https://material.io/design/shape/about-shape.html#about-shape)



## Shape

Reply’s dialog boxes have custom corner shapes.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1N5Km8HsQ5olbOmi5gleUjpUlrDXRdCzo%2Fdialogs-reply-shape.png)

| Element   | Category         | Attribute  | Value        |
| --------- | ---------------- | ---------- | ------------ |
| Container | Medium component | FamilySize | Cut0;0;0;0dp |

------

## Specs 



# Mobile

20dp #000000de 14dp #00000099 #ffffff R255 G255 B255 Elevation 24dp All corners Rounded: 4dp Scrim #000000, opacity:32% All measurements are displayed in device-independent pixels (dps)...

READ MORE

## Simple dialog

- 
- 
- 
- 
- 64Measurement 64
- 24Measurement 24
- 20Measurement 20
- 40Measurement 40
- 56Measurement 56
- 40

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  



- 

  

  

  

  

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Vy5JKCHFFq0MDzD7L_DCTnawU4e5Y1oB%2Fspecs-dialog-mobile-simple.png)



*flip*

Specs



## Alert dialog

- 
- 
- 
- 
- 52Measurement 52
- 24Measurement 24
- 24Measurement 24
- 38Measurement 38
- 28Measurement 28
- 280 Measurement 280
- 8Measurement 8
- 8Measurement 8
- 8Measurement 8
- 8Measurement 8
- 
- 

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

- 

  

  

  

  

- 

  

  

  

  

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1sbarXPWT89_NKn2HTXzbTlVInPKZAn-T%2Fspecs-dialog-mobile-alert.png)



*flip*

Specs



## Confirmation dialog

- 
- 
- 
- 
- 
- 
- 
- 24Measurement 24
- 24Measurement 24
- 52Measurement 52
- 280 Measurement 280
- 40Measurement 40
- 36Measurement 36
- 8Measurement 8
- 8Measurement 8
- 8Measurement 8
- 8Measurement 8
- 28Measurement 28
- 
- 

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

- 

  

  

  

  

- 

  

  

  

  

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F17pbB_9RIwGZUvwSReAwez6TFvwLCGZ5P%2Fspecs-dialog-mobile-confirmation.png)



*flip*

Specs



## Confirmation dialog (scrolling)

- 
- 
- 
- 
- 
- 64Measurement 64
- 52Measurement 52
- 280 Measurement 280
- 24Measurement 24
- 32Measurement 32
- 24Measurement 24
- 40Measurement 40
- 8Measurement 8
- 8Measurement 8
- 8Measurement 8
- 8Measurement 8
- 48Measurement 48
- CMeasurement C
- 
- 
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

  

  

  

  

- 

  

  

  

  

- 

  

  

  

  

- 

  

  

  

  

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1N22-XZ_MYTf1YtKfoej0fLm91M9NlwhU%2Fspecs-dialog-mobile-confirmation-scrolled.png)



*flip*

Specs



## Confirmation dialog with long actions

- 
- 
- 
- 
- 
- 
- 
- 24Measurement 24
- 24Measurement 24
- 36Measurement 36
- 28Measurement 28
- 8Measurement 8
- 12Measurement 12
- 8Measurement 8
- 40Measurement 40
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

  

  

  

  

- 

  

  

  

  

- 

  

  

  

  

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1MnQ5joLo9JuZ1XxonRH-jLC-vl4soG4F%2Fspecs-dialog-mobile-confirmation-longer-buttons.png)



*flip*

Specs



## Full-screen dialog

- 
- 
- 
- 
- 
- 16Measurement 16
- 32Measurement 32
- 8Measurement 8
- 8Measurement 8
- 12Measurement 12
- 56Measurement 56
- 24Measurement 24
- 38Measurement 38
- 
- 

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  



- 

  

  

  

  



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1JptW_fp8opA8xhP50x4mP46mKGuG8yhh%2Fspecs-dialog-mobile-fullscreen.png)



*flip*

Specs





# Desktop

20dp #000000de 16dp #00000099 14dp #6200ee #ffffff R255 G255 B255 #ffffff R255 G255 B255 Elevation 24dp All corners Rounded: 4dp Text Buttons Height The height...

READ MORE

## Mobile alert

- 
- 
- 
- 
- 
- 
- 
- 24Measurement 24
- 8Measurement 8
- 52Measurement 52
- 182Measurement 182
- 24Measurement 24
- 40Measurement 40
- 8Measurement 8
- 560 Measurement 560
- 8Measurement 8
- 8Measurement 8
- 28Measurement 28
- 36Measurement 36
- 
- 

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1qd8dFwf5Kc-1ZI0-5-fOBRTT5CvcpYAr%2Fspecs-dialog-desktop-simple.png)



*flip*

Specs



------

## Implementation 

Dialogs implementation support for each platform is indicated below.

[![Android Implementation-Dialogs](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1lqPI-Ryl30Z5G885DVQsmxHVz_TDOTq1%2Fimplementation-android-platform.png)](https://material.io/go/android-dialogs/)

## [Android Material Component](https://material.io/go/android-dialogs/)

**Status:** Available

[![IOS Implementation-Dialogs](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1P3iD01UqNwP7iqyjq2_KkCYrJBdVywDt%2Fimplementation-ios-platform.png)](https://material.io/go/ios-dialogs/)

## [IOS Material Component](https://material.io/go/ios-dialogs/)

**Status:** Available

[![Flutter Implementation-Dialogs](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1YNEtr9bczGz27OXnkBVIG0DEVRAt4yEe%2Fimplementation-flutter-platform.png)](https://material.io/go/flutter-dialogs/)

## [Flutter Material Component](https://material.io/go/flutter-dialogs/)

**Status:** Available

[![Web Implementation-Dialogs](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1WPuN2iG_IUuKtW9-xjPpZ6qm9P4_oNmz%2Fimplementation-web-platform.png)](https://material.io/go/web-dialogs/)

## [Web Material Component](https://material.io/go/web-dialogs/)

**Status:** Available