# Snackbars

Material UI (Core) Component

Reference: https://material.io/design/components/snackbars.html



------

# Snackbars 

## Snackbars provide brief messages about app processes at the bottom of the screen.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1hJm24PlwoTxWrIMhkPE0RV2Q-ahyQVZq%2Fsnackbars-container-do.png)

CONTENTS[Usage](https://material.io/design/components/snackbars.html#usage)[Anatomy](https://material.io/design/components/snackbars.html#anatomy)[Behavior](https://material.io/design/components/snackbars.html#behavior)[Placement](https://material.io/design/components/snackbars.html#placement)[Spec](https://material.io/design/components/snackbars.html#spec)[Implementation](https://material.io/design/components/snackbars.html#implementation)

------

## Usage 

Snackbars inform users of a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen. They shouldn’t interrupt the user experience, and they don’t require user input to disappear.

## Frequency

Only one snackbar may be displayed at a time.

## Actions

A snackbar can contain a single action. Because they disappear automatically, the action shouldn’t be “Dismiss” or “Cancel.”



# Principles

Snackbars are informational, temporary, and timely.

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1MyChXCybLXzbAJJEOUL5yRt_1DhQ5rD_%2Fsnackbar-illos-02.png)

## Informational

Snackbars provide updates on an app’s processes.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1wD241lT3nf4U52-lHVcHH0hlHWwwJkuv%2Fsnackbar-illos-03.png)

## Temporary

Snackbars appear temporarily, and disappear on their own without requiring user input to be dismissed.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1e9UN3ZMTRN2PDVrl1mnKJ5JWU_0EYP88%2Fsnackbar-illos-04.png)

## Contextual

Snackbars are placed in the most suitable area of the UI.

[BannerA banner displays a prominent message and related optional actions.Related Article*arrow_downward*](https://material.io/design/components/banners.html#banner)

[DialogsDialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks. They remain until dismissed or a required action has been taken.Related Article*arrow_downward*](https://material.io/design/components/dialogs.html#dialogs)





# When to use

Snackbars communicate messages that are minimally interruptive and don’t require user action. Component Priority User action Snackbar Low priority Optional: Snackbars disappear automatically Banner Prominent,...

READ MORE

Snackbars communicate messages that are minimally interruptive and don’t require user action.

| **Component** | **Priority**               | **User action**                                              |
| ------------- | -------------------------- | ------------------------------------------------------------ |
| Snackbar      | Low priority               | Optional: Snackbars disappear automatically                  |
| Banner        | Prominent, medium priority | Optional: Banners remain until dismissed by the user, or if the state that caused the banner is resolved |
| Dialog        | Highest priority           | Required: Dialogs block app usage until the user takes a dialog action or exits the dialog (if available) |

------

## Anatomy 

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1nLgv9qK6Jo_4I3kYXrPvEqxyuFYH96st%2Funderstanding-snackbars-elements.png)

### 1. Text label

### 2. Container

### 3. Action (optional)



# Text label

Snackbars contain a text label that directly relates to the process being performed. On mobile, the text label can contain up to two lines of...

READ MORE

Snackbars contain a text label that directly relates to the process being performed. On mobile, the text label can contain up to two lines of text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1OMk570U3TV7FknWEmvGbKNudV1j41J4M%2Funderstanding-snackbars-text-1-line.png)

Text labels are short, clear updates on processes that have been performed.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1-xoqfCjbmAnpAKbFVG7AIjqShi_vq_AM%2Funderstanding-snackbars-text-2-lines.png)

Do.

On mobile, use up to two lines of text to communicate the snackbar message.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1lpgBDriYaHx2p9RjqRVh_ELYcEJfVWvD%2Fsnackbars-text-desktop.png)

Do.

In wide UIs like desktop and tablet, snackbars should have only a single line of text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1_u7D-s8fZquh7lCo8cHsenum8sMzFCq3%2Funderstanding-snackbars-text-dont-icon.png)

Don’t.

Don’t place icons in snackbars. If your message needs an icon, consider using an alert.



# Container

Snackbars are displayed in rectangular containers with a grey background. Containers should be completely opaque, so that text labels remain legible.

READ MORE

Snackbars are displayed in rectangular containers with a grey background. Containers should be completely opaque, so that text labels remain legible.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1hJm24PlwoTxWrIMhkPE0RV2Q-ahyQVZq%2Fsnackbars-container-do.png)

Do.

Snackbar containers use a solid background color with a shadow to stand out against content.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1bwx9T5zFZrLre5w09OkSgJ19ByYy-JTT%2Fsnackbars-container-desktop-do.png)

Do.

In wide layouts, extend the container width to accommodate longer text labels.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1AheBOIjnaLseyXOPmu5Qc2UMVdTq0q6k%2Fsnackbars-container-caution-transparent.png)

Caution.

An app can apply slight transparency to the container background, as long as text remains clearly legible.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1GI5IPIZkhyZT3gTwgDzlvyjH_RUqmGTJ%2Fsnackbars-container-don-t-shape.png)

Don’t.

Avoid significantly altering the shape of a snackbar container.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1NrWW17H4yDvkA97lDk-JnlSl3etrHpFc%2Fsnackbars-container-caution-no-shadow.png)

Don’t.

Avoid displaying a snackbar container without elevation.



# Action

Snackbars can display a single text button that lets users take action on a process performed by the app. Snackbars shouldn’t be the only way...

READ MORE

Snackbars can display a single text button that lets users take action on a process performed by the app. Snackbars shouldn’t be the only way to access a core use case, to make an app usable.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ZORD4WmF49zG1CbqtOBGGjJKd8gO5Dlg%2Funderstanding-snackbars-action-color.png)

To distinguish the action from the text label, text buttons should display colored text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F10-vdAym8XUqnrT1fwUUW5pXyVaBc-MGg%2Fsnackbars-action-dont-color.png)

Don’t.

The text label shouldn’t share the same color as the text button.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F17MT7avNVdB_XtNUPz5DYe7ZCXEba1vrS%2Fsnackbars-action-dont-elevated-btn.png)

Don’t.

Don’t use a filled or elevated button in a snackbar, as it draws too much attention.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F11e9M-CnUBfAefLLAMtckb_opQih-E3Gm%2Funderstanding-snackbars-text-2-lines-longer-action.png)

Do.

If an action is long, it can be displayed on a third line.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1fEFOwmVqINLsJmwK-EDI_tixoFNHSba3%2Funderstanding-snackbars-action-undo.png)

Do.

To allow users to amend choices, display an "Undo" action.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1YL78lie7hfbu5vMyrmV_tzvpKL7CQrLt%2Fsnackbars-action-caution-dismiss.png)

Caution.

A dismiss action is unnecessary, as snackbar disappears on their own by default.

------

## Behavior 



# Appearing and disappearing

Snackbars appear without warning, and don't require user interaction. They automatically disappear from the screen after a minimum of four seconds, and a maximum of...

READ MORE

Snackbars appear without warning, and don't require user interaction. They automatically disappear from the screen after a minimum of four seconds, and a maximum of ten seconds.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>



# Consecutive snackbars

When multiple snackbar updates are necessary, they should appear one at a time.

READ MORE

When multiple snackbar updates are necessary, they should appear one at a time.

<video aria-describedby="behavior-figure-caption-0" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Consecutive snackbars should appear above persistent bottom navigation.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Don’t.

Avoid stacking snackbars on top of one another.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Don’t.

Don’t animate other components along with snackbar animations, such as the floating action button.

------

## Placement 

## At the bottom of the UI

Snackbars should be placed at the bottom of a UI, in front of app content. Avoid placing a snackbar in front of frequently used touch targets or navigation.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F110TBkEZ4GFJrLLzyB96mfOtx1DvPBGA-%2Fsnackbars-layout-do.png)

Place a snackbar in front of content.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1614tR5yF9nT7qKRrEpO7sb89pBQrW336%2Fsnackbars-layout-don-t-bottom-bar.png)

Don’t.

Avoid placing snackbars in front of navigation components.

Snackbars can span the entire width of the screen only when a UI does not use persistent navigation components like app bars or bottom navigation bars.
Snackbars that span the entire width of a UI can push only FABs up when they appear.



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1AlECh_HLxZMx1wYFoGCk1uSTpXMjlkPY%2Fsnackbars-layout-don-t-edge-to-edge.png)

Caution.

Snackbars can span the entire width of a UI. However, they should not appear in front of navigation or other important UI elements like floating action buttons.



# Snackbars and floating action buttons (FABs)

Snackbars should appear above FABs.

READ MORE

Snackbars should appear above FABs.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1BlhZYfz9EClmRaSVq-sPLwyXVGEQKDlj%2Fsnackbars-layout-fab.png)

Snackbar above a FAB

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1_ZrPvLSAYi51IEBunxswjYcHF259G00D%2Fsnackbars-layout-fab-dont-1.png)

Don’t.

Don’t place a snackbar in front of a FAB.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F150zZV4EXnNCKaLNEFucwwGy1210g2PR2%2Fsnackbars-layout-fab-dont-2.png)

Don’t.

Don’t place a snackbar behind a FAB.



# Snackbars and persistent footer elements

Snackbars should appear directly above persistent footer elements.

READ MORE

Snackbars should appear directly above persistent footer elements.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Gkbg2JiXndIslRC_xZvwEWp3t0PD1DgX%2Fsnackbars-layout-do-navigation.png)

Snackbar above persistent footer elements

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1B19qxKNDDwFn4wYave2LAtyuXfX18WWV%2Fsnackbars-layout-sheets-extended.png)

Do.

Place snackbars in front of medium extended sheets.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1brTnLGSb_xzBkMBQ2ZjQ47VZjnJRVfoe%2Fsnackbars-layout-don-t-push-bottom-bar.png)

Don’t.

Avoid pushing bottom persistent elements up when snackbars appear.



# Snackbars in wide layouts

In wide layouts, snackbars can be left-aligned or center-aligned if they are consistently placed on the same spot at the bottom of the screen.

READ MORE

In wide layouts, snackbars can be left-aligned or center-aligned if they are consistently placed on the same spot at the bottom of the screen.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1g53jKUH6a5wejAcF2n542pviFHkZXxw_%2Fsnackbars-layout-desktop-do.png)

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F11iRJMqJLi_rL7QCbKYJbyeoxmkkOKZ3o%2Fsnackbars-container-landscape-do-2.png)

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F15PKv_tKP2BwCiapzFGq9_Jo2LFODsPqa%2Fsnackbars-container-desktop-dont-flush-edge.png)

Don’t.

Avoid placing snackbars flushed to one edge of the layout.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1L3VUEbB7iQ0MBHIpeRYevu3zQpDPYfHH%2Fsnackbars-layout-desktop-dont-side-to-side.png)

Don’t.

Avoid placing consecutive snackbars side by side or next to one another.

------

## Spec 

- 
- 48Measurement 48
- CMeasurement C
- 16Measurement 16
- 344 Measurement 344
- 16Measurement 16

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ilw9M78nZnG4-A984NKEg83gr82aIm1_%2Fsnackbar-spec-singleline.png)



*flip*

Specs



- 
- 
- 
- CMeasurement C
- 48Measurement 48
- 344 Measurement 344
- 8Measurement 8
- 8Measurement 8
- 16Measurement 16
- 6Measurement 6
- 6Measurement 6
- 

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1b9azHG-X0KYBpQcHKYHhuSsXxHxdKlmK%2Fsnackbar-spec-singleline-action.png)



*flip*

Specs



- 
- 
- 
- 8Measurement 8
- 8Measurement 8
- 16Measurement 16
- 30Measurement 30
- 68Measurement 68
- 344 Measurement 344
- 16Measurement 16
- 

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F13QY4EUnLdIR5QYhSJhJtwwXJxFM5jROF%2Fsnackbar-spec-twoline-action.png)



*flip*

Specs



- 
- 
- 
- 
- 16Measurement 16
- 16Measurement 16
- 8Measurement 8
- 30Measurement 30
- 8Measurement 8
- 18Measurement 18
- 

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1hMqTehgf26MDOTVGSK9aYTyVVgJvGNtl%2Fsnackbar-spec-twoline-longaction.png)



*flip*

Specs



------

## Implementation 

Snackbar implementation support for each platform is indicated below.

[![Android Implementation-Snackbars](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1sh9nGca_pJEntTGnCCZqITlrTMgYN1AT%2Fimplementation-android-platform.png)](https://material.io/go/android-snackbar/)

## [Android Material Component](https://material.io/go/android-snackbar/)

**Status:** Available

[![IOS Implementation-Snackbars](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1zk1Qj0C2X2aBY-EtSd0aofj014C0YFVo%2Fimplementation-ios-platform.png)](https://material.io/go/ios-snackbar/)

## [IOS Material Component](https://material.io/go/ios-snackbar/)

**Status:** Available

[![Flutter Implementation-Snackbars](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1xHio5XvDHHsS5vicH9Lv8uZR5nzuNxbS%2Fimplementation-flutter-platform.png)](https://material.io/go/flutter-snackbar/)

## [Flutter Material Component](https://material.io/go/flutter-snackbar/)

**Status:** Available

[![Web Implementation-Snackbars](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1KD1VKEbSB8e0u938q-qtNQ70Hv0Mom37%2Fimplementation-web-platform.png)](https://material.io/go/web-snackbar/)

## [Web Material Component](https://material.io/go/web-snackbar/)

**Status:** Available