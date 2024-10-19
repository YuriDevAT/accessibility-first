---
title: 'Why fulfilling the WCAG is not enough'
excerpt: 'Everybody and their work mom is talking about the European Accessibility Act, and many are longing for clear instructions on what the heck to do. Not to rain on your work laptop, but even if you follow the Web Content Accessibility Guidelines ...'
coverImage: '/assets/blog/en/why-fulfilling-the-wcag-is-not-enough/cover.png'
date: '2024-01-16T10:35:07.322Z'
tags: 'Blog'
category: 'Accessibility'
author:
  name: 'Laura Wissiak'
  picture: '/assets/authors/laura.jpg'
ogImage:
  url: '/assets/blog/en/why-fulfilling-the-wcag-is-not-enough/cover.jpg'
ogPost:
  url: 'https://www.laura-wissiak.com/blog/why-fulfilling-the-wcag-is-not-enough'
readingTime: 3
---

Everybody and their work mom is talking about the European Accessibility Act (EAA), and many are longing for clear instructions on what the heck to do. Not to rain on your work laptop, but even if you follow the Web Content Accessibility Guidelines down to every semicolon in your code, it won’t guarantee you to be safe.

And there’s a good reason for that: **Accessibility is not a checklist.** Sounds so corny, I know!

What does that mean? I need you to wrap your head around the fact that accessibility is a means to an end. What we are actually working towards is inclusion. Real inclusion, not merely fulfilling requirements nor performative integration (the word “integration” in the context of disability rights is canceled).

**Even if you can check off 100% of the WCAG criteria, it doesn’t mean your website is 100% accessible.**

> As we often focus on Success Criteria, the context of the Principles and Guidelines is missed. They can guide us to good, accessible solutions already. When people say “go beyond WCAG” they typically mean “follow best practice principles & guidelines” which are also in WCAG.

_Eric Eggert in WCAG 2: Guidelines and Guardrails_

## But why are the WCAG 2.2 and European Norm 301549 not enough?

### Accessibility must make sense in context.

- For example: A furniture store has many many many product images. Of course, you want to know what that garden table looks like from every angle before you spend €800 on it. Would it make sense for the company to invest the time and effort to write an [image description](https://accessibility.huit.harvard.edu/describe-content-images) for each single picture? And more importantly, would that make sense? Would screen-reader users gain a better understanding of the product through the [text description in the HTML alt-attribute](https://webaim.org/techniques/alttext/) or would it just be the same text copy-pasted into all 20 images? In this case, the product description could replace the text, and the result would be the same: an image alternative is provided right there, with dimensions, color options, material, and co.
- Yes, technically adding alt-text to every image would fulfill the [WCAG 2.2 success criteria for non-text content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html). But if the product description is already detailing everything you could want to know, would it make sense in this context? Even if it’s a level A criterion, would users benefit from changing this? Arguably you should focus your resources on more critical barriers in your checkout flow.

### The entire user journey has to be barrier-free.

- The WCAG and EN provide little guidance on transitions between web pages (okay, one obvious exception: [animations](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) as they can trigger vestibular or inner ear disorder reactions).
- For a website to be accessible, individual web pages must be considered in connection with each other, not isolated from each other.

### Disabilities are dynamic!

- And we are constantly learning new best practices. That's why the WCAG are continually evolving!
- The EAA recognizes that it is not standards that determine accessibility, but individuals with disabilities themselves.

Web accessibility is the easiest way to provide more self-determination for people with disabilities. One can basically do anything online today! Not having to talk to anybody to set up the internet contract for your new place, a core task of adult life that everybody hates, is simply amazing. Making a doctor’s appointment at 11 pm through an online booking tool because you procrastinated it until now, a lifesaver for your peaceful sleep. Ordering your groceries to be delivered right to your apartment door, that’s quality of life!
