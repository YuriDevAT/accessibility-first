---
title: 'Why I wanted to learn coding as a UX designer'
excerpt: 'I think by now it is universally agreed upon that it’s a good idea for designers to have a basic understanding of front-end development. The same goes for developers, it’s always good to learn the main user experience principles for advanced use of margins and Co. ...'
coverImage: '/assets/cover/why-i-wanted-to-learn-coding-as-a-ux-designer/cover.png'
date: '2025-02-22T10:35:07.322Z'
tags: 'Blog'
category: 'UX Design'
author:
  name: 'Laura Wissiak'
  picture: '/assets/authors/laura.png'
ogImage:
  url: '/assets/cover/why-i-wanted-to-learn-coding-as-a-ux-designer/cover.png'
ogPost:
  url: 'https://www.laura-wissiak.com/blog/why-i-wanted-to-learn-coding-as-a-ux-designer'
readingTime: 3
---

I think by now it is universally agreed upon that it’s a good idea for designers to have a basic understanding of front-end development. The same goes for developers, it’s always good to learn the main user experience principles for advanced use of margins and Co. Either way it helps to develop a better understanding of each others’ work and makes it easier to work together. And we all want that! Yay! Cool!

But it’s still a lot of work (for either side) to learn a whole new skill set. And in my opinion, just “knowing you should” is not the best motivator.

## dev lingo

My first UX role was at a huge corporation. And as many big corporates like to do, most of the dev power was externally sourced. So while the design chapter was internally well coordinated, with weekly updates, alignment meetings, and know-how sharing across teams, the design-to-code pipeline was pretty much a black box to us. How exactly our Figma files turned into a dynamic website was a mystery to us.

Most of my design handovers were held in English. Mind you, none of us were native English speakers, it was merely our common language. We already had discussions within the German-speaking UX chapter regarding what certain design elements should be referred to.

Being able to explain what I want, that’s all I wanted!

## Storytime

One of my first tasks as a freshly-minted UX/UI Designer was to review a bunch of existing websites. Not knowing exactly where to start, I began by wandering through the pages and noting down anything that caught my eye as inconsistent and wordings I didn’t quite understand. Amidst all that, I remembered what I was taught during my UX boot camp: If it’s not accessible, it’s not usable. So I should review that aspect too, right?

Browser extensions were blocked for security reasons on my work laptop, but I could still use my personal computer and see which errors and warnings [WAVE](https://wave.webaim.org/extension/) would throw up. And there was a lot, but at the time I couldn’t understand half of them! Okay, missing alt-text was easy to figure out with the little icon of a picture next to it. But what is an ARIA-label? What do they do? Why are there so many and why do some say [`aria-hidden=“true”`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) and some `“false”`? What’s false about it?

Obviously, not knowing what the hell is going on, is quite an issue when you need to explain your review findings to a team you barely even know at this point. So I did what probably every anxious intern would do: I assumed everyone else but me must know what these things were, so I frantically googled them to conceal my incompetence!

Turns out ARIA stands for [Accessible Rich Internet Applications](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) and there are various variations of them. The aria-hidden attribute defines whether an element is hidden (with `aria-hidden=”true”`) or displayed to assistive technology. So there was nothing wrong with the `aria-hidden=”false”` and the ones with `“true”` were the ones I actually needed to question! Because those seemed to be quite randomly mixed into that carousel element.

The thing that tipped me over and pushed me to learn how to fix such errors by myself, was the fact that one item on the fly-out menu was not on the keyboard navigation. Why? Everything else is [focusable](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)! What’s up with the telephone numbers?

## Benefits for Designers

I would generally recommend anyone who works with software to look into the basics of how it works. It helps you understand what is actually happening, why certain processes are like that, and why sometimes testing goes well until it suddenly doesn’t anymore.

Knowing how the world of code works grants you a lot more agency. It makes it easier to explain what you want if you know what to call the elements in dev lingo. But even better: It’s so much easier to call out what’s different between your designs and the coded version. And as we all know, there is always something off about it. If you can point it out and say stuff like “It seems as if the text is right aligned inside a `<div>` that is center aligned here, but the text itself should be centered.” (Picture it looking like these [examples of CSS Layout alignment](https://www.w3schools.com/css/css_align.asp).) Your developers will know what to change and you will feel like the most efficient office royalty ever. It’s a win-win for everyone!

---

P.S.: Love you, my Beka Boys!
