---
title: 'POUR - The 4 Web Accessibility Principles'
excerpt: 'To qualify your website and web application as accessible under the Web Content Accessibility Guidelines (WCAG 2.0) established by the World Wide Web Consortium’s Web Accessibility Initiative (W3C WAI), the content must meet these four principles (which form the acronym POUR)...'
coverImage: '/assets/blog/en/pour-the-4-web-accessibility-principles/cover.png'
date: '2022-07-17T07:35:07.322Z'
tags: 'Blog'
category: 'Accessibility'
author:
  name: 'Julia Undeutsch'
  picture: '/assets/authors/julia.jpg'
ogImage:
  url: '/assets/blog/en/pour-the-4-web-accessibility-principles/cover.png'
ogPost:
  url: 'https://dev.to/yuridevat/pour-the-4-web-accessibility-principles-edp'
readingTime: 5
---

To qualify your website and web application as accessible under the [Web Content Accessibility Guidelines (WCAG 2.0)](https://www.w3.org/TR/WCAG20/) established by the [World Wide Web Consortium's Web Accessibility Initiative (W3C WAI)](https://www.w3.org/WAI/), the content must meet these four principles (which form the acronym POUR):

- **P**erceivable
- **O**perable
- **U**nderstandable
- **R**obust

## 1. Perceivability

The output of your web content **must** be accessible through at least one of our biological senses, such as sight, hearing, or touch, to be called accessible.

### 1.1. How to perceive

Most people perceive information on the Internet by looking at it, which works well for those who can see well. Most web designers and developers are relatively young and able-bodied. So it's no coincidence that they design the web to work for people like themselves. Sometimes they don't even realize that other people may not be able to see the content, so the developers don't design the web pages in other ways to make the information perceptible to everyone.

It is important to write the code so that screen readers can convert the written information into synthesized speech so that visually impaired and blind people can hear the web content. Hearing the web content is the next most common way to perceive information from the web.

Making your code understandable to screen reader software users who rely on audible web content will most likely make it understandable to people who are deaf-blind and use a Braille device. The screen reader converts digital text to Braille for nearly identical functionality. You can think of refreshable braille just like traditional printed braille on hard paper, with raised dots arranged in an alphabet of characters and symbols.

### 1.2. Digital text is the universal format

You can call digital text THE universal web accessibility format for making web content perceptible. Therefore, as web designers and developers, it is our duty to write the code in such a way that it can be perceived by everyone. If someone can't see the images and colors on your website or hear your audio, the content may as well not exist.

It's critical to make every informative component perceptible via text, i.e., tag images with appropriate alternative text, make dynamic interactions accessible by using ARIA (Accessible Rich Internet Applications), which indicates when a tab expands or collapses, and more.

Make sure users know what they'll find on your website by making content and features accessible by sight, sound, and touch.

## 2. Operable

The user **must** be able to navigate into, use, navigate through, and exit your web components regardless of what input device they use.

### 2.1 How to operate

Not every user is able to use a mouse or touchpad. It is a developer's duty to write their code so that it works with other input devices, such as keyboard, touch screen, voice recognition software, etc.

If a feature does not work, some users will not be able to use the web component. Keyboard users need to be able to navigate a JavaScript drop-down menu and select the desired link within that menu without using a mouse. Mouse features such as hover events must also be able to be enabled with devices such as touchscreens or keyboards to give the user the same experience as the mouse user.

### 2.2 Keyboards are almost the universal input device

If you make your code accessible not only to the mouse but also to the keyboard, you already make it more accessible to most other devices.

Make sure that instead of using specific device events like `onmouseover` or `ondblclick`, you use independent event handlers like `onfocus` or `onselect`. In some cases, you may even need both.

## 3. Understandable

The user **must** be able to understand all the content and interfaces on your website.

### 3.1 How to understand

It is important to specify a language in the markup (for example, `<html lang="en"`) so that the screen reader can read the text with the expected pronunciation to make the content understandable to the user. If you use expressions in another language on a page, make sure that this particular part is surrounded with its own language (e.g. `<span lang="de">Guten Tag!</span>`).

The user interface and interactivity must be understandable, which can be ensured by keeping the look and feel of your website consistent across multiple pages, such as the same links in the main navigation, the same behavior of form controls, and custom widgets throughout your website.

### 3.2 Best practices in making content more understandable

Because some people struggle with reading difficulties, disabilities, or even cognitive impairment, avoid long or unfamiliar words and phrases, complex sentence constructions, or lines of text that are too close together.

Make sure to use a font that is easy for everyone to read, such as common serif or sans-serif fonts, and that lines of text are not too close together. Avoid spacing between words by not using justified text in a paragraph.

When you use a form, you should provide enough information for the user to successfully complete the form. If there are required fields or a specific password convention, let the user know what went wrong if the form cannot be submitted. This can be done by telling the user in which field the error occurred, what exactly the error was, or by sending focus immediately to the input field with the error to notify screen readers.

Since some people can't read at all, it would be good to provide alternative formats such as images, audio or video. This may seem like a lot of work (and it is), but the user who depends on it will surely thank you for it.

## 4. Robust

In order for your website or web application to be considered robust, the user **must** be able to interact with your website on any browser or computer system, as well as assistive technologies.

### 4.1 How to be robust

Different screen readers generally process content differently, and even more so depending on which browser is used.
It is impossible to support all browsers and platforms. Therefore, it is necessary to draw a line and say which browsers are supported and which are not (reasons can be because the user base is small or the version of a particular browser does not have enough features).

### 4.2 Best practices to make the website robust

The best way to achieve robustness is to use semantic HTML and, if necessary, ARIA to specify the name, role, and value of interactive components to give screen reader users the information they want.
