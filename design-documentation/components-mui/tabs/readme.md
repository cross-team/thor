# Tabs

Material UI (Core) Component

Reference: https://material.io/design/components/tabs.html



------

# Tabs

## Tabs organize content across different screens, data sets, and other interactions.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1uV0Rzc2Q2RzWEz9vguOME1SoCQofEmld%2Ftabs-usage-01.png)

CONTENTS[Usage](https://material.io/design/components/tabs.html#usage)[Anatomy](https://material.io/design/components/tabs.html#anatomy)[Behavior](https://material.io/design/components/tabs.html#behavior)[Placement](https://material.io/design/components/tabs.html#placement)[Fixed tabs](https://material.io/design/components/tabs.html#fixed-tabs)[Scrollable tabs](https://material.io/design/components/tabs.html#scrollable-tabs)[States](https://material.io/design/components/tabs.html#states)[Theming](https://material.io/design/components/tabs.html#theming)[Spec](https://material.io/design/components/tabs.html#spec)[Implementation](https://material.io/design/components/tabs.html#implementation)

------

## Usage 

Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy.

## Tabs in a set

Each tab should contain content that is distinct from other tabs in a set. For example, tabs can present different sections of news, different genres of music, or different themes of documents.

[Understanding navigationNavigation enables users to move through an app.Related Article*arrow_downward*](https://material.io/design/navigation/understanding-navigation.html#understanding-navigation)



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1EQno9oequgSkF7kHM5A802blbxrKl75F%2Ftabs-usage-do1.png)

Do.

Tab labels can include icons and text. Text labels should be short.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F17i257j6nOS0EjLxNe_LUCvyFxBD56gJW%2Ftabs-usage-dont1.png)

Don’t.

Don’t use tabs to move through sequential content that needs to be read in a particular order.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1yAWHpLmco1tpmO34qs4ke8I0bHNb7Eq3%2Ftabs-usage-do2.png)

Do.

Present tabs as a single row above their associated content.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1gr-3HOoi0w9J9Oz1yjK3VqFjXLf9YT69%2Ftabs-usage-dont2.png)

Don’t.

Avoid using tabs for comparing content across multiple tabs, such as different sizes of the same item.

## Combinations with other components

Tabs can be paired with components like top app bars, or nested in components like cards and sheets.



# Principles

Tabs should be scalable, informative, and comparable

READ MORE

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1QOMXneGuArRsxv3mDb1EKJfk1kBSwf6Z%2Ftabs-illos-01.png)

## Scalable

As tabs can horizontally scroll, a UI can have as many tabs as needed.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1FNPxHyU93xu2mnub4zIeKbQ-lnhdnKaq%2Ftabs-illos-02.png)

## Informative

Tabs organize content into categories to help users easily find different types of information.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ae-b46dvEUu5_QFctcPwlBxRzLo-2Kdb%2Ftabs-illos-03.png)

## Peers

Tabs are displayed next to each other as peers, in categories of equal importance.



# Types

Tabs can be fixed or scrollable.

READ MORE

## Fixed tabs

Fixed tabs display all tabs on one screen, with each tab at a fixed width. The width of each tab is determined by dividing the number of tabs by the screen width. They don’t scroll to reveal more tabs; the visible tab set represents the only tabs available.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1lkjLBS-JezxZc1LD0XkorX-6yCuBrhkF%2Ftabs-types-01.png)

## Scrollable tabs

Scrollable tabs are displayed without fixed widths. They are scrollable, such that some tabs will remain off-screen until scrolled.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1lVZjT2_G6zeIXR-uZFEt9TbDa6V9HoIJ%2Ftabs-types-02.png)

------

## Anatomy 

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F18b088pqGJRjwEZWsQzD338u05sp1Vwd3%2Ftabs-elements-01.png)

1. ### Container

2. ### Active icon (Optional if there’s a label)

3. ### Active text label (Optional if there’s an icon)

4. ### Active tab indicator

5. ### Inactive icon (Optional if there’s a label)

6. ### Inactive text label (Optional if there’s an icon)

7. ### Tab item



# Text label

Text labels should clearly and succinctly describe the content of the tab they represent. Tab content should contain a cohesive set of items that share...

READ MORE

Text labels should clearly and succinctly describe the content of the tab they represent. Tab content should contain a cohesive set of items that share a common characteristic.

Tab labels appear in a single row. They can use a second line if needed, with truncated text. Alternatively, you can use scrollable tabs to allow room for longer titles.

------

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1E43DEY-IBEPNw1mcyh9obS3uK1a-q5Kg%2Ftabs-when-06.png)

Caution.

Although label text can wrap to a second line, scrollable tabs confine text to a single row.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1AFOuCXiT-swxCYNJMGQCHKhN1hFsGwMN%2Ftabs-when-07.png)

Don’t.

Don’t resize text labels to fit them onto a single line. If labels are too long, wrap text to a second line or use scrollable tabs.

------



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1i2eaJy29zu-fZLHuEnstqvE6hbenVVO8%2Ftabs-when-08.png)

Don’t.

Don’t truncate labels unless required, as truncated text can impede comprehension.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F175TVObD2BB4TSTN9OtvHEm0poZxb3AnW%2Ftabs-when-09.png)

Don’t.

Don’t mix tabs that contain only text, with tabs that contain only icons. Use either all text labels, all icon labels, or both, across all labels.



# Icons

Icons communicate the type of content a tab represents in a simple, recognizable way. However, they aren’t as effective as text labels at communicating complex...

READ MORE

Icons communicate the type of content a tab represents in a simple, recognizable way. However, they aren’t as effective as text labels at communicating complex content.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F19Aseb0OMfIyVnLHigomsh8y1h3Qbr99M%2Ftabs-usage-06.png)

Tabs can use a combination of labels and icons.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1oTAO6qFHYgC1GqVJ8xZVF_d2Dw4_5WPd%2Ftabs-usage-iconsb.png)

Do.

Tabs can use icons to communicate content.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1MxxR43Q_eSa9tFbIbBlPKVFZQ_r8FEKP%2Ftabs-usage-010b.png)

Don’t.

Don’t use tabs with both icons and text labels on only some tabs, but not others.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F10ASmw8QsuQpzp-Ul9hUXBCrZQBaHmZKB%2Ftabs-fixed-04.png)

Caution.

Use caution when only representing tab content with icons, as an icon’s meaning may not be clear on every topic.



# Active tab indicators

To differentiate an active tab from an inactive tab, apply an underline and color change to the active tab’s text and icon.

READ MORE

To differentiate an active tab from an inactive tab, apply an underline and color change to the active tab’s text and icon.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1-tFPdC5bQ_SabuiYqFihoJr5AODlv4GE%2Ftabs-selector-active.png)

An underline and color change differentiate an active tab from the inactive ones.

------

## Behavior 



# Moving between tabs

Users can navigate between tabs by tapping a tab, or by performing a swipe gesture over content. Navigate to a tab by tapping on it....

READ MORE

Users can navigate between tabs by tapping a tab, or by performing a swipe gesture over content.

## Tap a tab

Navigate to a tab by tapping on it.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

## Swipe within the content area

To navigate between tabs, users can swipe left or right within the content area.

Gestures occur differently for each type of tab:

- Fixed tabs don’t respond to the swipe gesture at all
- Upon swipe, scrollable tabs scroll independent of the content area

Use caution when placing other swipeable content (such as interactive maps or list items) in the content area.

<video class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

<video aria-describedby="behavior-figure-caption-0" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Caution.

Use caution when placing swipeable content in UIs that have tabs, as users could easily swipe the wrong component.

<video aria-describedby="behavior-figure-caption-1" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Don’t.

Avoid placing swipeable items in the content area of a UI that has tabs, as the user may mistakenly swipe the wrong component.



# Scrolling

When a screen scrolls, tabs can either be fixed to the top of the screen, or scroll off the screen. If they scroll off the...

READ MORE

When a screen scrolls, tabs can either be fixed to the top of the screen, or scroll off the screen. If they scroll off the screen, they will return when the user scrolls upward.

<video aria-describedby="behavior-figure-caption-2" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

When tabs are attached to a top app bar, they can scroll off the screen with the bar and lock in place at the top of the screen.

<video aria-describedby="behavior-figure-caption-3" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Tabs can scroll offscreen on scroll, and reappear when the page is scrolled up.

<video aria-describedby="behavior-figure-caption-4" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Don’t.

Don’t scroll tabs behind a top app bar. When tabs are attached to a component, they should appear and move as a single unit.

------

## Placement 



# Tab layout

Tabs are displayed in a single row, with each tab connected to the content it represents. As a set, all tabs are unified by a...

READ MORE

Tabs are displayed in a single row, with each tab connected to the content it represents. As a set, all tabs are unified by a shared topic.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1YPcpISfZLaByyCUZd1-2hQWMHGdtNYV8%2Ftabs-layout-layout-01.png)

Place tabs above content.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1FxXqvGj_85NnHhDyOc_AIzAUvqXqoBCk%2Ftabs-layout-dont.png)

Caution.

Avoid nesting a tab within another tab.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F15WEIDPDvnOH-4DjznqliWbg-zkD8lYcn%2Ftabs-layout-dont-2.png)

Don’t.

Don’t place tabs below one another.



# Tab placement

Tabs can be joined with components like top app bars, embedded in a specific UI region, or nested into components like cards and sheets. Tabs...

READ MORE

Tabs can be joined with components like top app bars, embedded in a specific UI region, or nested into components like cards and sheets. Tabs control the UI region displayed below them.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1-wZ3swe564J6q8b7EMuvmVuLyDgd_rnQ%2Ftabs-placement-01.png)

Tabs below a top app bar

[Top App BarThe top app bar displays information and actions relating to the current view.Related Article*arrow_downward*](https://material.io/design/components/app-bars-top.html#top-app-bar)



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1oSzY9wky32itVMdMS5TukH3s-mBmRpfb%2Ftabs-placement-dont-1.png)

Don’t.

Don’t use tabs with short top app bars, or top app bars that transition to short top app bars on scroll.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1HA0kpA827tI1sXSAFPZDZ_89xRJz0SHe%2Ftabs-placement-dont-2.png)

Don’t.

Don’t attach tabs to bottom navigation as it can cause confusion about what action or tab controls which content.

Tabs can be embedded in a specific UI region in order to control the content displayed in that region.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Fn8GUmDJjnO2PDVgrZbI19JwV78TlukJ%2Ftabs-placement-ui.png)

Tabs embedded in a column, the content of which they can control when tapped. Scaled down to 62.5%

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1GUpBkeARsiIrlGqh-OCcPlB8pJDIk0nc%2Ftabs-placement-ui-dont.png)

Don’t.

Don’t place tabs above content that they don’t control. If tabs only change a section of the UI, embed them within that section. Scaled down to 62.5%

[CardsCards contain content and links about a single subject.Related Article*arrow_downward*](https://material.io/design/components/cards.html#cards)

[Sheets: SideSide sheets are surfaces containing supplementary content that are anchored to the left or right edge of the screen.Related Article*arrow_downward*](https://material.io/design/components/sheets-side.html#sheets-side)



![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1NYF16StsewtmGh_4xoAuq_rRtEx15_-s%2Ftabs-placement-02b.png)

Tabs nested in a card

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1IZ202YeIXv5NLJsCyjggJYVMob7C1nnb%2Ftabs-placement-03b.png)

Tabs nested in a sheet

------

## Fixed tabs 



# Usage

Fixed tabs display all tabs in a set simultaneously. They are best for switching between related content quickly, such as between transportation methods in a...

READ MORE

Fixed tabs display all tabs in a set simultaneously. They are best for switching between related content quickly, such as between transportation methods in a map. To navigate between fixed tabs, tap an individual tab, or swipe left or right in the content area.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1zfnZc_hqiwnQP6Q5Fwn5oHwHXTfGPpDD%2Ftabs-fixed-01.png)

Use fixed tabs when displaying a limited number of categories.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1Mq0ZQd_sTs1P4UBAR0lxd0LjOx25yGGu%2Ftabs-usage-06.png)

A fixed tab bar using iconography and labels



# Placement

Fixed tabs have equal width, which can be calculated either as: When using fixed tabs, ensure they can all be seen on mobile, without truncating...

READ MORE

Fixed tabs have equal width, which can be calculated either as:

- The width of the screen divided by the number of tabs
- The width of the widest tab label

When using fixed tabs, ensure they can all be seen on mobile, without truncating their text. Don’t use more than four fixed tabs at once.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1NL1kkDBWp8KlOUrW-pc9t0h_5IACZT4r%2Ftabs-fixed-03.png)

Don’t use more than four fixed tabs in a set.

Reduced in size to 62.5%

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1hIgRcqOGdbghCKcyN1U2ibMsN-ehNwmD%2Ftabs-fixed-010.png)

On wider layouts, fixed tabs increase in width, as their tab width is determined by the width of the screen.

Reduced in size to 62.5%

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1SYD_V7BruuDGFqc7UsYMdOnShwd4yIDq%2Ftabs-fixed-08.png)

Caution.

Avoid letting fixed tabs cause confusion with content. These tab widths align to closely to the columns in this layout, such that the relationship between tabs and content could be misinterpreted.



# Clustered fixed tabs

Clustered fixed tabs aren’t divided equally across the screen. The tab bar is centered, right-aligned, or left-aligned. Clustered fixed tabs should be used in wide...

READ MORE

Clustered fixed tabs aren’t divided equally across the screen. The tab bar is centered, right-aligned, or left-aligned.

Clustered fixed tabs should be used in wide horizontal layouts, such as landscape mode.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1P3ZFF3dZsu1ZbkGBsl5IyR1ap6i4iTwc%2Ftabs-fixed-05.png)

On wider layouts, tabs may be centered on the tab bar.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1wOd4HIw2yp9sSprdhgEyRf5RNCgVuFpG%2Ftabs-fixed-06.png)

Fixed tabs in a cluster can be aligned to the left or right.

------

## Scrollable tabs 



# Usage

When a set of tabs cannot fit on screen, use scrollable tabs. Scrollable tabs can use longer text labels and a larger number of tabs....

READ MORE

When a set of tabs cannot fit on screen, use scrollable tabs. Scrollable tabs can use longer text labels and a larger number of tabs. They are best used for browsing on touch interfaces.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1EOMyMZOhPCL3GnGGvIxjls9b1TW3OjHJ%2Ftabs-scrollable-02.png)

A set of scrollable tabs



# Placement

Scrollable tabs display a subset of all tabs at once. The width of each tab is defined by the length of its text label.

READ MORE

Scrollable tabs display a subset of all tabs at once. The width of each tab is defined by the length of its text label.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1pA2gYVY1WAw58epIs3rH8F6ABz5qu1uw%2Ftabs-scrollable-01.png)

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1NaRx7EJ7IO5JBHL9MH-t-UwZSQA37meG%2Ftabs-scrollable-desktop-do.png)

Do.

On mobile and desktop, offset the first tab on the left to signal that tabs are scrollable.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F16Hgw9541Xoy11gNG5aYKZ8P1BY0bUa6-%2Ftabs-scrollable-03-dont.png)

Don’t.

Avoid using inconsistent padding on each tab.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1jpIMFm45lawJ7dAGwgbw4rkvUWnRp0oB%2Ftabs-paginated-01.png)

On desktop, provide a visual indicator that more tabs are available off screen.



# Behavior

To navigate between a set of scrollable tabs, users swipe the set left or right. A tab set can be looped so when a user...

READ MORE

To navigate between a set of scrollable tabs, users swipe the set left or right. A tab set can be looped so when a user reaches the last tab in a set, the first tab is shown again.

To select an individual tab, tap it.

## Tab placement on activation

When tapped, a scrollable tab should reposition itself to become fully visible on screen.

<video aria-describedby="scrollable-tabs-figure-caption-4" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Active tabs reposition themselves to appear fully on screen.

<video aria-describedby="scrollable-tabs-figure-caption-5" class="video-player__video animatable js-video-player js-video-load" loop="" muted="" preload="metadata" tabindex="0" style="background-repeat: no-repeat; box-sizing: border-box; display: block; opacity: 0; position: absolute; top: 0px; transition: opacity 235ms cubic-bezier(0.4, 0, 0.2, 1) 0s, top 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s; bottom: 0px; left: 0px; right: 0px; max-width: 100%;"></video>

Active tabs can move to the middle of the row when they become active.

------

## States 

By default, tabs inherit enabled states with one active state.

The inactive state of a tab can inherit a hover, focus, and pressed state.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F12vrpvocsdhqX25AhYNJabsNALbsa1oYC%2Ftab-inactive-states.png)

The hover, focus, and pressed states of an enabled tab

The active state of a tab can inherit a hover, focus, and pressed state.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1nck6ZqJZCjEinV2Fia2dt5bNUNfg-G3v%2Ftab-active-states.png)

The hover, focus, and pressed states of an active tab

------

## Theming 



# Basil Material Theme

This recipe app’s tabs have been customized using Material Theming. Areas of customization include color and typography. Basil is a recipe browsing app that demonstrates...

READ MORE

This recipe app’s tabs have been customized using Material Theming. Areas of customization include color and typography.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1u2hKRdW7W_JelEyJe6f5tjC-uq29FN6L%2Ftabs-basil-ahero.png)

Basil’s customized tabs

[BasilBasil is a recipe browsing app that demonstrates how Material Design can be used in the food lifestyle space.Related Article*arrow_downward*](https://material.io/design/material-studies/basil.html#basil)



## Color

Basil’s tabs use custom color on five elements: the container, active text label, active tab indicator, inactive text label, and divider.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1PIxyabFETw184XC5m9Z8mM-BR_PKeS0l%2Ftabs-basil-color.png)

| Element                                 | Category   | Attribute    | Value       |
| --------------------------------------- | ---------- | ------------ | ----------- |
| Container                               | Background | ColorOpacity | #FFFBE6100% |
| Active text label, active tab indicator | Primary    | ColorOpacity | #356859100% |
| Inactive text label                     | On Surface | ColorOpacity | #29302E82%  |
| Divider                                 | On Surface | ColorOpacity | #29302E12%  |

[The Color SystemThe Material Design color system helps you choose colors for your user interface.Related Article*arrow_downward*](https://material.io/design/color/the-color-system.html#the-color-system)

[Applying color to UIIn a UI, color has a variety of roles: from containing meaning, to expressing a look and feel.Related Article*arrow_downward*](https://material.io/design/color/applying-color-to-ui.html#applying-color-to-ui)

[Understanding typographyTypography is critical in establishing hierarchy and expressing brand presence that supports an effective digital experience.Related Article*arrow_downward*](https://material.io/design/typography/understanding-typography.html#understanding-typography)



## Typography

Basil’s tabs uses custom typography for message and button text.

![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F15ZG691tcwP5IaNIZ8qsXngPVUYSYATi2%2Ftabs-basil-type.png)

| Element | Category | Attribute            | Value                    |
| ------- | -------- | -------------------- | ------------------------ |
| Button  | Button   | TypefaceFontSizeCase | MontserratBold14All caps |

------

## Spec 



# Fixed tabs

14dp #6200ee 14dp #19191999 #6200ee R98 G0 B238 #00000089 R0 G0 B0 A0.54 #6200ee R98 G0 B238 Elevation 0dp All measurements are displayed in device-independent...

READ MORE

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 360 Measurement 360
- 48Measurement 48
- 48Measurement 48
- 72Measurement 72
- CMeasurement C
- 24Measurement 24
- 16Measurement 16
- 16Measurement 16
- 20Measurement 20
- 12Measurement 12
- 2Measurement 2
- 12Measurement 12
- 12Measurement 12
- 
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

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1zEO5T4tSKsYIdd2DFM1cQKKFhjYZQIz7%2Ftabs-spec-fixed.png)



*flip*

Specs





# Scrollable tabs

14dp #19191999 14dp #6200ee #6200ee R98 G0 B238 Elevation 0dp All measurements are displayed in device-independent pixels (dps) 14dp #6200ee #6200ee R98 G0 B238 Elevation...

READ MORE

- 
- 
- 48Measurement 48
- 360 Measurement 360
- 52 Measurement 52
- min-width:90dpMeasurement min-width:90dp
- CMeasurement C

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1XBNaDj-1y46FsN4UN5Ak5-F2vTolLDIl%2Ftabs-spec-scrollable.png)



*flip*

Specs



## Tab item minimum width

- 
- 
- 
- 90 Measurement 90
- 48Measurement 48
- 16Measurement 16
- 16Measurement 16
- 2Measurement 2
- CMeasurement C

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F16CdW8EmEfI6c803pdGoHJNiqXWg5Aqlw%2Ftabs-spec-cell-minwidth.png)



*flip*

Specs



## Tab item maximum width

- 
- 360 Measurement 360
- 48Measurement 48
- 2Measurement 2
- 16Measurement 16
- 16Measurement 16
- CMeasurement C

- 

  

  

  [![Google Fonts](https://storage.googleapis.com/spec-host/mio-staging/mio-design/1559085984192/static/m2/images/font-logo.svg)](https://fonts.google.com/specimen/Roboto)

  

  

- 

  

  

  

  

  

- 

  

  

  

  

  





![img](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1yiKM6SEgm3IAy9YQ4Xv5O3SZ6n5RvKQV%2Ftabs-spec-cell-maxwidth.png)



*flip*

Specs



------

## Implementation 

Tabs implementation support for each platform is indicated below.

[![Android Implementation-Tabs](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1vcOsrT-Ziot-AihQBnqQT3-XD7PHyybh%2Fimplementation-android-platform.png)](https://material.io/go/android-tabs/)

## [Android Material Component](https://material.io/go/android-tabs/)

**Status:** Available

[![IOS Implementation-Tabs](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1ZLXjxwWhLBwHDGWWlNG5yZRoiUt3GBGu%2Fimplementation-ios-platform.png)](https://material.io/go/ios-tabs/)

## [IOS Material Component](https://material.io/go/ios-tabs/)

**Status:** Available

[![Flutter Implementation-Tabs](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1i0b2LByjrCowfbg26plk2xS7vo0b63Qm%2Fimplementation-flutter-platform.png)](https://material.io/go/flutter-tabs/)

## [Flutter Material Component](https://material.io/go/flutter-tabs/)

**Status:** Available

[![Web Implementation-Tabs](https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1szGxdYEbeKZeJq_Exd9_7M2-4pztRtrz%2Fimplementation-web-platform.png)](https://material.io/go/web-tabs/)

## [Web Material Component](https://material.io/go/web-tabs/)

**Status:** Available