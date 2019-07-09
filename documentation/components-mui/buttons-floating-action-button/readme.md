# Buttons: Floating Action Button

Material UI (Core) Component

Reference: https://material.io/design/components/buttons-floating-action-button.html



------

# Buttons: floating action button

## A floating action button (FAB) represents the primary action of a screen.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F12KbB3AWs-Ug6bJSmWNk_PyH6BBHOkWzy%2Fintro-fab.png)

CONTENTS[Usage](https://material.io/design/components/buttons-floating-action-button.html#usage)[Anatomy](https://material.io/design/components/buttons-floating-action-button.html#anatomy)[Placement](https://material.io/design/components/buttons-floating-action-button.html#placement)[Behavior](https://material.io/design/components/buttons-floating-action-button.html#behavior)[Types of transitions](https://material.io/design/components/buttons-floating-action-button.html#types-of-transitions)[Extended FAB](https://material.io/design/components/buttons-floating-action-button.html#extended-fab)[Theming](https://material.io/design/components/buttons-floating-action-button.html#theming)[Specs](https://material.io/design/components/buttons-floating-action-button.html#specs)[Implementation](https://material.io/design/components/buttons-floating-action-button.html#implementation)

------

## Usage 

A floating action button (FAB) performs the primary, or most common, action on a screen. It appears in front of all screen content, typically as a circular shape with an icon in its center. FABs come in three types: regular, mini, and extended.

Only use a FAB if it is the most suitable way to present a screen’s primary action.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1bskpox7EbEzfKP9n-lpAOE9BNubDa3VS%2Ffab-usage-do-email.png)

Do.

Represent the most common primary action with a floating action button, such as drafting a new email.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1CtvO7-4U_ucPukQNf5VfhvBLkzzIg4vE%2Ffab-usage-do-gallery.png)

Do.

FABs are not needed on every screen, such as when images represent primary actions.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1RlhXnI8_gPO9DO65nQT-bTu40aOzGl6k%2Ffab-usage-dont-contacts.png)

Don’t.

Don’t display multiple FABs on a single screen.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1BJIZEGr8EBiCgmxHMjLG5gzStrbpXCip%2Ffab-usage-caution-maps.png)

Caution.

Occasionally two FABs can be used, if they perform distinct, yet equally important, actions.



# Principles

FABs are primary, constructive, and contextual.

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ju30Vjeq_kzLToNpf7Y5Fa7dkV9dDldd%2Ffab-illos-03.png)

## Primary

A FAB represents the primary action on a screen.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1HPBnXGRqCQTPe6t85nrg8OeiW96UuIYa%2Ffab-illos-01.png)

## Constructive

A FAB should perform a constructive action (such as create, share, or explore).

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1k627AbZNbEj6_aSAonO5TeuZSieZfeyx%2Ffab-illos-02.png)

## Contextual

A FAB should be relevant to the screen on which it appears.

------

## Anatomy 

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1M1gMSw6EcZ4tw99-18_M7jtqNQWQHLSt%2Ffab-layout-elements.png)

1. ### Container

2. ### Icon



# Container

The FAB is typically displayed in a circular container. An app’s color scheme determines its color fill, which should contrast with the area behind the...

READ MORE

The FAB is typically displayed in a circular container. An app’s color scheme determines its color fill, which should contrast with the area behind the FAB.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F19FGtgBIq6iqUfOSKAnuJG6zvbf-ZhXS2%2Ffab-layout-iconsizes.png)

FAB containers come in two sizes:

1. Default (56 x 56dp)
2. Mini (40 x 40dp)

A mini FAB should be used on smaller screens. When a screen width is 460dp or less, the container of a default FAB (56dp) should transform into the mini size (40dp).

Mini FABs can also be used to create visual continuity with other screen elements.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1J_t3NwxYEgFmZ04CndtiRPva8LQjKcUO%2Ffab-layout-minifab.png)

This mini FAB creates visual continuity by having a related size, shape, and placement to the folder icons below it.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1MASERR7SyFbkPDYK6WsimAEx1SzL9hq4%2Ffab-layout-container-do.png)

Do.

FAB containers adopt a color from an app’s palette.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1x206mWfPzKo4BxNOdypE-s67uAgE2qB5%2Ffab-layout-container-dont-appbar.png)

Don’t.

Don’t layer badges or other elements in front of a FAB.



# Icon

A FAB’s icon should clearly illustrate its action. A FAB shouldn’t contain notifications or actions found elsewhere on a screen.

READ MORE

A FAB’s icon should clearly illustrate its action. A FAB shouldn’t contain notifications or actions found elsewhere on a screen.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1KrKqLInW_IDZbrw5yIc55g8eXrcQg3in%2Ffab-layout-icon-dont-ambiguous.png)

Don’t.

Don’t use ambiguous iconography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1zYp0082S_EdHUrFDZ2yGAEsQ8QlDCjNm%2Ffab-layout-icon-dont-text.png)

Don’t.

Don’t place text in a regular FAB.

------

## Placement 

FABs can attach to top app bars and the edge of some components.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1aCVgXqu7x2RsWBHmcyS27Eh9iNE_vSVb%2Ffab-layout-tabletdesktop-do-topbar.png)

Do.

A floating action button (FAB) can attach to a top app bar.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1wee0fHsX7pQUtZKDbTzGUAWon8mvtVeZ%2Ffab-layout-tabletdesktop-do-attachededgelayout.png)

Do.

A FAB can be attached to the edge of a component.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1pd4ZoOBvNPAzIuWLxBLuU67dRv4Z8Eth%2Ffab-layout-tabletdesktop-dont-cards.png)

Don’t.

Individual components, such as cards, cannot each have their own FAB.

------

## Behavior 



# Actions

A floating action button (FAB) can trigger an action either on the current screen, or it can perform an action that creates a new screen....

READ MORE

A floating action button (FAB) can trigger an action either on the current screen, or it can perform an action that creates a new screen.

A FAB promotes an important, constructive action such as:

- Create
- Favorite
- Share
- Start a process

Avoid using a FAB for minor or destructive actions, such as:

- Archive or trash
- Alerts or errors
- Limited tasks like cutting text

Controls better suited to a toolbar (like controls to adjust volume or font color)

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1i5a07XvIL1WNlszdOAQw2s_YUQ3lNzat%2Ffab-behavior-do-primaryactions.png)

Do.

Use FABs for primary, positive actions.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1A2XVaamltzkUhwrfWk5YutuQ3NEvlwC_%2Ffab-behavior-dont-minoractions.png)

Don’t.

Do not use FABs for minor, overflow, unclear, or destructive actions.



# Motion

When a FAB animates on screen, it expands outward from a central point. The icon within it may be animated as well. While FABs should...

READ MORE

## Appearing on screen

When a FAB animates on screen, it expands outward from a central point. The icon within it may be animated as well.

While FABs should be relevant to screen content, they aren’t attached to the surface on which content appears. FABs move separately from other UI elements because of their relative importance.

## Screen transitions

FABs can morph to launch related actions. When a screen changes its layout, the FAB should disappear and reappear during the transition.

## Reappearance

The FAB should only reappear if it’s relevant to the new screen. It should reappear in the same position, if possible.

<video aria-describedby="behavior-figure-caption-2" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Throughout this user flow the FAB location remains consistent.

[Understanding motionMotion helps make a UI expressive and easy to use.Related Article*arrow_downward*](https://material.io/design/motion/understanding-motion.html#understanding-motion)

[TabsTabs organize high level content in an app content, such as switching between views, data sets, or functional aspects of an app.Related Article*arrow_downward*](https://material.io/design/components/tabs.html#tabs)





# Tabbed screens

When tabs are present, the FAB should briefly disappear, then reappear when the new content moves into place. This expresses that the FAB is not...

READ MORE

When tabs are present, the FAB should briefly disappear, then reappear when the new content moves into place. This expresses that the FAB is not connected to any particular tab.

<video aria-describedby="behavior-figure-caption-3" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Do.

When switching between tabs, FABs disappear and then reappear.

<video aria-describedby="behavior-figure-caption-4" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Don’t.

When switching between tabs, FABs don’t move in unison with screen content.

------

## Types of transitions 



# Speed dial

When pressed, a FAB can display three to six related actions in the form of a speed dial. This transition can occur in one of...

READ MORE

When pressed, a FAB can display three to six related actions in the form of a **speed dial**. This transition can occur in one of the following ways:

- Upon press, the FAB can emit related actions
- Upon press, the FAB can transform into a menu containing related actions (Android only)

------

If more than six actions are needed, something other than a FAB should be used to present them.

## Emit related actions

Upon press, the FAB remains visible and emits a stack of related actions. If the FAB is tapped is pressed in this state, it should either initiate its default action or close the speed dial actions.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

A FAB displays a stack of related actions.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1um6Ncw4EsYGxnLEk9aGMVJ4AlzUKHZ46%2Ffab-transitions-speeddial-dont-1.png)

Don’t.

A speed dial should include at least three options.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1kuuE2kZYVtQ3giJwE521Z4YeIN9Ojp7U%2Ffab-transitions-speeddial-dont-2.png)

Don’t.

A speed dial should include no more than six options.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F16wHIILgWlw7qpoZua_8X_3eWdTMlxFPk%2Ffab-transitions-speeddial-do-contacts.png)

Do.

A FAB can contain a list of contacts.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1fohUHLBjjut8g3UsgGGHHBV6PBboy8EK%2Ffab-transitions-speeddial-do-labels.png)

Do.

Related actions can have text labels.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F148PUFc2SwhRm27IkAm3QaaEP4aSmBmpQ%2Ffab-transitions-speeddial-dont-unrelated.png)

Don’t.

A FAB shouldn’t transform into unrelated actions.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1oSfCe7IUKz-UXkvu8EZAxRaoS1N2yduK%2Ffab-transitions-speeddial-dont-overflow.png)

Don’t.

Speed dial options shouldn’t include an overflow menu.

[MenusMenus display a list of choices on temporary surfaces.Related Article*arrow_downward*](https://material.io/design/components/menus.html#menus)



## Transform into a menu with the related actions

Upon press on Android, the FAB can transform into a menu containing related actions. A scrim indicates that functionality outside of the action menu is temporarily disabled. The menu remains on-screen until an action, or the scrim, is tapped.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

A FAB transforming into an action menu

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1MRE7GQt85SlpQ33UYi3A9ACcAS5lZKwu%2Ffab-transitions-menu-dont-1.png)

Don’t.

Don’t use an action menu with fewer than three options.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1DIj9TVxlEIbcVRMdZONfQp4SSBMDxhan%2Ffab-transitions-menu-dont-2.png)

Don’t.

An action menu shouldn’t include more than six options, as action menus don’t support scrolling.



# Morph

The FAB can transform into another surface in an app. Morphing should be reversible and transform the new surface back into the FAB.

READ MORE

The FAB can transform into another surface in an app. Morphing should be reversible and transform the new surface back into the FAB.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

A FAB can morph into a surface that is part of the app structure.



# Full screen

The FAB can transform into a new surface that spans the entire screen. This type of transformation is typically for creating new content.

READ MORE

The FAB can transform into a new surface that spans the entire screen. This type of transformation is typically for creating new content.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

A FAB can transform into a new surface that spans the entire screen.

------

## Extended FAB 

The extended FAB is wider, and it includes a text label.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1P8peBxVujhfPIPwolj6hPeiSiAZUiKnw%2Fextended-fab-01.png)

Extended FAB



# Anatomy

The width of a extended FAB’s container can be fixed or fluid. The icon of an extended FAB should intuitively represent its action. The text...

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1nwZJdz065h8Hid2DKIXHnFR03IYDZ4Ri%2Fextended-fab-layout-elements.png)





1. ### Container

2. ### Icon (optional)

3. ### Text label

## Container

The width of a extended FAB’s container can be fixed or fluid.

- A fixed width container is defined by the cumulative width of the icon, text label, and padding.
- A fluid width container is defined by its relationship to something else on screen, such as screen width or the layout grid.

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F13aES-21z8sb-FrLm-_qeP4XV_szvx27x%2Fextended-fab-layout-fixed-center.png)

This fixed extended FAB’s width is defined by the cumulative width of the icon, text label, and container padding.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F16HJifg3s9F-9WrEotmBNcRfZtFqe4UrG%2Fextended-fab-layout-fluid.png)

This extended FAB’s container width is defined by the layout grid columns.

## Icon

The icon of an extended FAB should intuitively represent its action.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1qiKYNxQ3mPnoMAJHh0JFHZQGOSWvz2Bd%2Fextfab-left-to-right.png)

Icons should be placed to the left of text labels for left-to-right languages.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1EluW7ol_R49Bn9HXkYAhYOBMwePO_Num%2Fextfab-right-to-left.png)

Icons should be placed to the right for right-to-left languages.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1AfbKI0cPem2iAZLkUInkJJLz4FRAPWOE%2Fextfab-noicon.png)

Do.

Unlike standard FABs, extended FABs don’t require an icon.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1yn2scFKA1iWD839Zd4-ue4ESAORDP8iG%2Fextfab-icondont.png)

Don’t.

An extended FAB can’t have an icon without a text label.

## Text label

The text label of an extended FAB should describe its action.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1DYbfkTmXpdqgjXek5SJcCUhPy4YNJkYX%2Fextended-fab-layout-dont1.png)

Caution.

Only truncate text if shorter text isn’t an option.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1B3lE-fAVkYIWFoffgyn0QV8h_Y8jjypb%2Fextended-fab-layout-dont2.png)

Don’t.

Avoid wrapping text.



# Placement

The extended FAB can be positioned in the center, left, or right side of a screen. For UIs larger than 840dp, such as desktop, the...

READ MORE

The extended FAB can be positioned in the center, left, or right side of a screen.

## Desktop and tablet

For UIs larger than 840dp, such as desktop, the extended FAB should be placed at the top left of the screen, or at the bottom right of the screen.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Hc00eiCnqqA8ZdzPqxplMhnqfOVVCWkr%2Fdesktopextfab1.png)

On desktop, the extended FAB placed at the top left

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F14OaL_VeXra9GqaCyJ5gd7TUT2czSG4qo%2Fdesktopextfab2.png)

On desktop, the extended FAB placed at the bottom right

## Mobile

On mobile, the extended FAB should be placed at the bottom right or bottom center.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1pb4FOtEB7ERS0y-qiIYEewtrFcAS3iFO%2Fextfabmobilecentered.png)

On mobile, the extended FAB placed at the bottom center

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1N2ljshfI4QqXMfSe6_ZbmE-lBf4VTygc%2Fextfabmobileright.png)

On mobile, the extended FAB placed at the bottom right

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Vxsjlja9Exh1a0PW51FT6lU2IdqvKOuV%2Fextfabbab.png)

Caution.

Avoid using an extended FAB above a bottom app bar, as the combination takes up a lot of screen space. If they are paired, the extended FAB should collapse on scroll.



# Behavior

Extended FABs have speed dial options, and can transform into standard FABs if space is limited

READ MORE

## Speed dial

The extended FAB can also display a speed dial of 3-6 related actions when tapped. On hover, these related actions expand to display labels.

During the speed dial transition, the extended FAB becomes a standard FAB.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Extended FAB speed dial

## Transformation to a standard FAB

If space becomes limited, the extended FAB can transform into a standard FAB. For example, if an app viewport is resized below 840dp, or a navigation drawer opens up.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Extended FAB transforming into a standard FAB

An extended FAB can transform into a standard FAB when a screen is scrolled.

The FAB should not return to an extended FAB until the user scrolls back to the top of the page.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Extended FAB transforming into a standard FAB after the user scrolls to the top of the page

------

## Theming 



# Reply Material Theme

This email app’s floating action button has been customized using Material Theming. Areas of customization include color and shape. Reply is an email app that...

READ MORE

This email app’s floating action button has been customized using Material Theming. Areas of customization include color and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1mQ9PZjm9W5nH-jOki0SJOsa_CxZh8i_Y%2Fbuttonsfab-reply-ahero.png)

Reply’s customized FAB

[ReplyReply is an email app that uses Material Design components and Material Theming to create an on-brand communication experience.Related Article*arrow_downward*](https://material.io/design/material-studies/reply.html#reply)

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Reply’s floating action button uses custom color on two elements: the container and icon.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1BftGpmFJ8aSB6CtMLPhobdb9tfonXCGi%2Fbuttonsfab-reply-color.png)

| Element   | Category     | Attribute    | Value       |
| --------- | ------------ | ------------ | ----------- |
| Container | Secondary    | ColorOpacity | #FAAB1A100% |
| Icon      | On Secondary | ColorOpacity | #232F34100% |

[About ShapeMaterial surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.Related Article*arrow_downward*](https://material.io/design/shape/about-shape.html#about-shape)



## Shape

Reply’s floating action button uses a custom shape on the container.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1SLUAWfIeXOc00f0DdMPgHO226mfyptU8%2Fbuttonsfab-reply-shape.png)

| Element   | Category        | Attribute  | Value      |
| --------- | --------------- | ---------- | ---------- |
| Container | Small component | FamilySize | Rounded50% |

Reply’s extended floating action button has customized color, typography, and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1qv2GXYAUjfkRERjhEVMz2Bs30cq-i6Ix%2Fbuttonsextfab-reply-ahero.png)

Reply’s customized FAB

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Reply’s extended FAB uses custom color on two elements: the container, icon, and text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1wl0r02ljdreV44PZmJjWJWbNzCWTfH-V%2Fbuttonsextfab-reply-color.png)

| Element   | Category     | Attribute    | Value       |
| --------- | ------------ | ------------ | ----------- |
| Container | Secondary    | ColorOpacity | #FAAB1A100% |
| Icon      | On Secondary | ColorOpacity | #232F34100% |
| Text      | On Secondary | ColorOpacity | #232F34100% |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

Reply’s extended FAB uses custom typography on its button text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1y4Ha9av08Y20SkRVI5_XiqtezBDJ752u%2Fbuttonsextfab-reply-type.png)

| Element | Category | Attribute            | Value                        |
| ------- | -------- | -------------------- | ---------------------------- |
| Text    | Button   | TypefaceFontSizeCase | Work SansExtraBold15All caps |

[About ShapeMaterial surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.Related Article*arrow_downward*](https://material.io/design/shape/about-shape.html#about-shape)



## Shape

Reply’s extended floating action button uses a custom shape on its container.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F14TMXikruFDbLt_fhPzyQOW8ScgKc95UZ%2Fbuttonsextfab-reply-shape.png)

| Element   | Category        | Attribute  | Value      |
| --------- | --------------- | ---------- | ---------- |
| Container | Small component | FamilySize | Rounded50% |



# Posivibes Material Theme

This social media app’s floating action button has been customized using Material Theming. Areas of customization include color and shape. The Material Design color system...

READ MORE

This social media app’s floating action button has been customized using Material Theming. Areas of customization include color and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1uXJF34e8JswGHGBDsVgoxFjz7fgNFcLO%2Fbuttonsfab-posivibes-ahero.png)

Posivibe’s customized FAB

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Posivibe’s FAB uses custom color on two elements: the container and icon.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1mICMawXVvfeRBuW9MDQvbor73P0b6cxx%2Fbuttonsfab-posivibes-color.png)

| Element   | Category     | Attribute    | Value       |
| --------- | ------------ | ------------ | ----------- |
| Container | Secondary    | ColorOpacity | #000000100% |
| Icon      | On Secondary | ColorOpacity | #FFFFFF100% |

[About ShapeMaterial surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.Related Article*arrow_downward*](https://material.io/design/shape/about-shape.html#about-shape)



## Shape

Posivibe’s FAB uses a custom shape on its container.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1rwjQWMKinWmQOcaP-MzQgpMWgPM_eXxV%2Fbuttonsfab-posivibes-shape.png)

| Element   | Category  | Attribute  | Value  |
| --------- | --------- | ---------- | ------ |
| Container | Override* | FamilySize | Cut50% |

*Posivibe’s FABs use an override of the small component shape category size value.



# Shrine Material Theme

This retail app’s extended floating action button has been customized using Material Theming. Areas of customization include color, typography, and shape. The Material Design color...

READ MORE

This retail app’s extended floating action button has been customized using Material Theming. Areas of customization include color, typography, and shape.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1UiXFuwb_MQbEBO0jqNbzsdX23B1TQqSx%2Fbuttonsextfab-shrine-ahero.png)

Shrine’s customized FAB

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)



## Color

Shrine’s extended FAB uses custom color on two elements: the container and text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1gMOXbIp_3F2xjPRKyt8brZyW8AJU3lCr%2Fbuttonsextfab-shrine-color.png)

| Element   | Category   | Attribute    | Value       |
| --------- | ---------- | ------------ | ----------- |
| Container | Primary    | ColorOpacity | #FEDBD0100% |
| Text      | On Primary | ColorOpacity | #442C2E100% |

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

Shrine’s extended FAB uses custom typography on its button text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1w3KnUP7gZer710ZVrD30cF6ptHZSCt-W%2Fbuttonsextfab-shrine-type.png)

| Element | Category | Attribute            | Value                 |
| ------- | -------- | -------------------- | --------------------- |
| Text    | Button   | TypefaceFontSizeCase | RubikMedium14All caps |

[About ShapeMaterial surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state, and express brand.Related Article*arrow_downward*](https://material.io/design/shape/about-shape.html#about-shape)



## Shape

Shrine’s extended FAB uses a custom shape on its container.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1PkOYtMb0t9Wg3V1r-fPJwxzSl3a7um3D%2Fbuttonsextfab-shrine-shape.png)

| Element   | Category        | Attribute  | Value        |
| --------- | --------------- | ---------- | ------------ |
| Container | Small component | FamilySize | Cut4;4;4;4dp |

------

## Specs 



# Floating action button

\#000000ff R0 G0 B0 A1.00 Elevation 6dp All corners Rounded: 28dp All measurements are displayed in device-independent pixels (dps) #000000ff R0 G0 B0 A1.00 Elevation...

READ MORE

## Regular

- 
- 
- 
- 
- 
- 56Measurement 56
- 16Measurement 16
- 16Measurement 16
- CMeasurement C
- 24Measurement 24
- 



- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1xsVT-6-f-axlEpTo9cf1-Qw1MnsFa325%2Fspecs-fab-default.png)



*flip*

Specs



## Mini FAB

- 
- 
- 
- 
- 
- 40Measurement 40
- 8Measurement 8
- 8Measurement 8
- CMeasurement C
- 24Measurement 24
- 



- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Yc3avLwt3x89TxY-53zjJ5D0srN8GwjW%2Fspecs-mini-fab.png)



*flip*

Specs



## Placement

- 
- 
- 
- 
- 16Measurement 16
- 16Measurement 16





- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1HDsE5gO9XoBBCQordDkSSjZeFGxoLNKY%2Fspecs-fab-placement.png)



*flip*

Specs





# Extended floating action button

14dp #ffffff #000000ff R0 G0 B0 A1.00 Elevation 6dp All corners Rounded: 32dp All measurements are displayed in device-independent pixels (dps) Elevation 6dp All corners...

READ MORE

- 
- 
- 
- 
- 
- 
- 
- 48Measurement 48
- 12Measurement 12
- 12Measurement 12
- 20Measurement 20
- CMeasurement C
- 24Measurement 24
- 

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1cETzN6UhbVg3cqRa3Xvxlkys1FO0NZma%2Fspecs-extended-fab-default.png)



*flip*

Specs



## Placement

- 
- 
- 8Measurement 8





- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1UzFYKINZ15QNGSFRgyrAQs3mv3tcDYHl%2Fspecs-extended-fab-placement.png)



*flip*

Specs



------

## Implementation 

Floating action buttons and extended floating action buttons implementation support for each platform is indicated below.



# Floating Action Buttons

Status: Available Status: Available Status: Available Status: Available

READ MORE

[![Android Implementation-Floating Action Button](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1s1IyJm6bbXJH1CITm2Zv6tK-gWUMgCC8%2Fimplementation-android-platform.png)](https://material.io/go/android-fab/)

## [Android Material Component](https://material.io/go/android-fab/)

**Status:** Available

[![IOS Implementation-Floating Action Button](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1THh3iID0uYsJtfRS7wMKT9pWC_U7sA3o%2Fimplementation-ios-platform.png)](https://material.io/go/ios-fab/)

## [IOS Material Component](https://material.io/go/ios-fab/)

**Status:** Available

[![Flutter Implementation-Floating Action Button](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1pWD31dMpsBCzPBdrAFnLNCd5V1u4EQ-l%2Fimplementation-flutter-platform.png)](https://material.io/go/flutter-fab/)

## [Flutter Material Component](https://material.io/go/flutter-fab/)

**Status:** Available

[![Web Implementation-Floating Action Button](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1w6hm7f1v4p7b4x7s3a-lGzzzo6-pecSQ%2Fimplementation-web-platform.png)](https://material.io/go/web-fab/)

## [Web Material Component](https://material.io/go/web-fab/)

**Status:** Available



# Extended Floating Action Buttons

Status: Available Status: Available Status: Available Status: Available

READ MORE

[![Android Implementation-Extended Floating Action Button](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1s1IyJm6bbXJH1CITm2Zv6tK-gWUMgCC8%2Fimplementation-android-platform.png)](https://material.io/go/android-extended-fab/)

## [Android Material Component](https://material.io/go/android-extended-fab/)

**Status:** Available

[![IOS Implementation-Extended Floating Action Button](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1THh3iID0uYsJtfRS7wMKT9pWC_U7sA3o%2Fimplementation-ios-platform.png)](https://material.io/go/ios-extended-fab/)

## [IOS Material Component](https://material.io/go/ios-extended-fab/)

**Status:** Available

[![Flutter Implementation-Extended Floating Action Button](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1pWD31dMpsBCzPBdrAFnLNCd5V1u4EQ-l%2Fimplementation-flutter-platform.png)](https://material.io/go/flutter-extended-fab/)

## [Flutter Material Component](https://material.io/go/flutter-extended-fab/)

**Status:** Available

[![Web Implementation-Extended Floating Action Button](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1w6hm7f1v4p7b4x7s3a-lGzzzo6-pecSQ%2Fimplementation-web-platform.png)](https://material.io/go/web-extended-fab/)

## [Web Material Component](https://material.io/go/web-extended-fab/)

**Status:** Available