---
title: 'Accessibility: The What, Why & How'
excerpt: 'Web accessibility has fortunately been getting more and more attention lately. But many people still don’t know what web accessibility actually is and why it’s so important. Let’s get an overall understanding on accessibility by introducing you to this topic ...'
coverImage: '/assets/blog/en/accessibility-the-what-why-&-how/cover.png'
date: '2022-10-09T05:35:07.322Z'
tags: 'Blog'
category: 'Accessibility'
author:
  name: 'Julia Undeutsch'
  picture: '/assets/authors/julia.jpg'
ogImage:
  url: '/assets/blog/en/accessibility-the-what-why-&-how/cover.png'
ogPost:
  url: ''
---

Web accessibility has fortunately been getting more and more attention lately. But many people still don’t know what web accessibility actually is and why it’s so important.

Let’s get an overall understanding on accessibility by introducing you to this topic in the context of the **what**, **why** and **how**: what accessibility is, why it’s important and how we can achieve accessible design.

## What is accessibility

Regarding to [Wikipedia](https://en.wikipedia.org/wiki/Accessibility 'Wikipedia Definition Accessibility'),

> Web accessibility is the inclusive practice of ensuring there are no barriers that prevent interaction with, or access to, websites on the World Wide Web by people with physical disabilities, situational disabilities, and socio-economic restrictions on bandwidth and speed. When sites are correctly designed, developed and edited, more users have equal access to information and functionality.

There are all kinds of disabilities, some are recognizable, like people who are in wheelchairs, and others are hidden, like people who are deaf. There are also age-related disabilities like hearing loss or low vision, and temporary disabilities like having a broken arm or even holding a baby.

You may have seen the hashtag **#a11y**, which is the short version of the word accessibility. The reason for this shortening is that there are 11 characters between the letter “a” and the letter “y”. In my opinion, this is a cool way to shorten a word and much easier to use as a hashtag.

## Why does it matter

> The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.

_Tim Berners-Lee, W3C Director and inventor of the World Wide Web_

So why should we make websites accessible? First and foremost, it’s simply the right thing to do to give everyone equal access to information. Also, you may be [required by law](https://www.w3.org/WAI/policies/ 'Web Accessibility Laws & Policies') to make your website accessible. Here in Austria, the public sector like universities are forced to make their website 100% accessible under [WCAG 2.1 AA (Web Content Accessibility Guidelines)](https://www.w3.org/WAI/standards-guidelines/wcag/).

Between 10 and 20% of humanity has some kind of disability. Not all of them affect a person’s ability to use the internet, such as a person with paralysis in their legs. The most important disabilities in terms of web accessibility are disabilities of the eyes, ears, hands and brain.

People with disabilities use assistive technologies to interact with the Web. To ensure that everyone can use the web with these technologies, it is our job to build websites so that they are properly recognized by these devices. For example, screen readers will not work if your code is not written with accessibility in mind.

The Internet has opened up a whole new world of possibilities, especially for people with disabilities, particularly in terms of vision. Information is now readily available on almost any topic imaginable.

People with visual impairments no longer have to rely on others to get the information they need, which means they can achieve a new level of independence that would have been unthinkable just a few years ago.

Finally, when your sites are made more accessible to people with disabilities, they become more **accessible to everyone**. This means that structuring the site well (which, in my opinion, is what makes a good frontend developer in the first place) by using semantic HTML tags, better design, for example with higher color contrast, and better accessibility for people with disabilities will automatically lead to better accessibility for all.

In addition, search engine optimization (SEO) also improves.

> We nee to make every single thing accessible to every single person with a disability

_Stevie Wonder, Grammy Awards Ceremony 2016. American singer-songwriter, musician, and record producer_

## How to develop the accessible way

Here I would like to give a rough overview of how you can make your website accessible. In the coming weeks, I will write articles with more detailed information about each category.

The [W3C](https://www.w3.org/WAI/), a worldwide web consortium, maintains a working group that deals with website accessibility and publishes standards for it. These standards are called [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/), which stands for Web Content Accessibility Guidelines. This is a great resource to get more information on how to handle accessibility in your projects.

## How can we make the web or our websites more accessible?

Let’s go over a few points. If you follow them, your website won’t be 100% accessible right away, but it’s definitely a good starting point.

### Use semantic HTML whenever possible!

When using `<header>`, `<main>`, `<footer>` you have already laid a good basic structure of your website that will allow screen reader users to find their way around your site.

The [list of semantic HTML tags](https://developer.mozilla.org/en-US/docs/Glossary/Semantics) is long. Try to include as many as possible and use `<div>` and `<span>` and only for styling purposes, since they are not semantic.
To not break legacy code, [aria (Accessible Rich Internet Applications)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) offer a good (temporary) solution. Then you don’t have to replace your already built in `<div>` tags with semantic tags that would break the styling and thus bring increased extra work.

[Aria roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles), for example, simply take the role of the semantic tag as in the following example. Interactive elements such as links and buttons, as well as [multimedia elements](https://developer.mozilla.org/en-US/docs/Web/Media/Formats) such as images and videos, require a more detailed description (e.g. using alternative text) to be better understood by screen reader users.

Never use color alone to indicate specific information, such as a result on a chart, and use sufficient color contrast. Visually impaired people may have difficulty seeing the contrast between, for example, the background color and the text color.

## How to identify a11y problems to fix?

There are automated tools like [axe](https://www.deque.com/axe/), which already finds about 30% of the problems. The most common screen reader you can use to check your website is [NVDA](https://www.nvaccess.org/download/) in combination with Microsoft and VoiceOver screen reader already installed on macOS.

Other tools worth mentioning are [Wave](https://wave.webaim.org/), [Taba11y](https://chrome.google.com/webstore/detail/taba11y/aocppmckdocdjkphmofnklcjhdidgmga), and [Color contrast Checker](https://webaim.org/resources/contrastchecker/) which I will go into in more detail in other articles.

If you **make web pages 100% accessible** for mouse, keyboard, screen reader, and braille users, you have most of the accessibility covered. Therefore, this should be the goal of all of us.

## Conclusion

If we all get involved with developing accessible websites and applications and get to it early enough, we can design them to be accessible from the start. This will make it harder for companies to avoid accessibility because of myths and misconceptions like “accessibility means ugly design” or “is very expensive.”

Show that you stand for inclusive design by contributing at least a little to make the world a better place for people with disabilities.
