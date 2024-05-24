---
title: 'Accessibility Testing Part 1'
excerpt: 'Today I’m starting my very first accessibility check. I’ll be auditing websites to see how well they implement accessibility and pointing out the problems and items that need improvement...'
coverImage: '/assets/blog/en/accessibility-testing-part-one/cover.png'
date: '2022-07-30T05:35:07.322Z'
tags: 'Blog'
category: 'QA Testing'
author:
  name: 'Julia Undeutsch'
  picture: '/assets/authors/julia.jpg'
ogImage:
  url: '/assets/blog/en/accessibility-testing-part-one/cover.png'
ogPost:
  url: 'https://dev.to/yuridevat/accessibility-check-1-3c38'
---

Today I'm starting my very first accessibility check. I'll be auditing websites to see how well they implement accessibility and pointing out the problems and items that need improvement.

Until I get their approval, I won't show which websites I'm reviewing so as not to embarrass anyone and to give them a chance to update their website and make it more accessible after I send them my assessment.

## Accessibility Tools And How To Use Them

- [Axe Devtool Extension](https://www.deque.com/axe/browser-extensions/)
- [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

I test the website with the free axe DevTool extension, one of the best tools on the market.
After I run the extension, 40 automatic\* issues are found.
These are divided into critical, serious, moderate and minor. The critical and serious issues are the most important ones to fix. Let's take a closer look and see what can be done to improve the website.

![](/assets/blog/accessibility-testing-one/image-1.png)

_\*Automatic means that vulnerabilities are found using accessibility development tools. However, even if all the listed vulnerabilities are fixed, it doesn't necessarily mean that the website is now fully accessible. Manual testing is still required, using only the keyboard and going through the website with a screen reader, to really point out and fix all the problems._

## Elements Must Have Sufficient Color Contrast

Most of the serious problems were related to the color contrast. To easily find the errors on the website, you can highlight them by activating the "Highlight" button.

![](/assets/blog/accessibility-testing-one/image-2.png)

### Issue Description (by axe Devtools)

Ensures the contrast between foreground and background colors meets WCAG2AA contrast ratio thresholds.

People with low vision may have difficulty reading the content due to the weak color contrast.

### Primary color

This button does not have sufficient color contrast (blue HEX color value of `#2FAFF5` on white HEX `#FFFFFF`). The WebAIMS Color Contrast Checker shows that the contrast ratio is only **2.45:1**, which is quite low. To meet WCAG2.1 AA, the contrast ratio needs to be at least **4.5:1**. The blue would have to be reduced to a brightness of 32% to achieve this ratio.

![](/assets/blog/accessibility-testing-one/image-3.png)

This color combination also causes three of the other problems.

## Neutral color

The other two problems are caused by a gray tone used for the subheading.

![](/assets/blog/accessibility-testing-one/image-4.png)

The gray (`#737373`) itself would suffice with a contrast ratio of **8.59:1** on a white (`#FFFFFF`) background, but an opacity of `rgba(115, 115, 115, 0.74)` has been set which weakens the contrast, to **2.95:1**.

### How to solve

Changing the primary color to a darker color and removing the opacity will solve this problem.

## Element Must Have A `lang` Attribute

It is important that a default language is set. Otherwise, screen readers will use the language selected by the operating system, which can sound quite awful and incomprehensible, for example, if you pronounce a German word in French, which the screen reader user might not expect.

### Issue Description

Ensures every HTML document has a `lang` attribute.

### How to solve

Adding the language of the website, in this case English, with the `lang` attribute.

```javascript
<html lang="en">
  <!--document head and body-->
</html>
```

If words or paragraphs are used in a language other than the default, you can also specify the language directly in this HTML tag.

```javascript
<p lang="es">Text in another language</p>
```

Here is a list with all [HTML Language Code References](https://www.w3schools.com/tags/ref_language_codes.asp).

## Links Must Have Discernible Text

The last serious problem concerns an anchor tag around the company logo in the top left header.

### Issue Description

Ensures links have discernible text.

```javascript
<a href="#" class="logo-link w-nav-brand">
  <img loading="lazy" src="https://logo.svg" alt="" class="image" />
</a>
```

The link around the logo leads nowhere when clicked. So the a tag is misused here. But I see how it is. The website was created with Webflow. So I'm assuming that they made Webflow do this as a default, because many websites link to their home page when you click on the logo, but that's not the case here.

And that is what is misleading. Screen reader users can tab to the logo because it's an a tag, so they assume something will happen when they click on it. Screen reader users don't get any further information in the `alt` attribute or via the aria-label that this is not a real link.

### How to solve

The surrounding `<a>` tag should be removed.

The href attribute gets a destination to link to and a discernible text e.g. in the `alt` attribute of the image. This website is a single web page which means the links in the navbar are linking to section within the page (like home, about). The destination could be just the same as the one for the home section.

## Next Steps

I will contact the owner of the site and share my findings and tips, ask if changes can be made to make the web accessible to all, and of course offer my help if needed.

I will keep you updated.

### Update 08/14/2022

I have received a positive feedback from the owner of the website. He and his web designer will look at the issues I listed and make necessary adjustments. Mission accomplished.
