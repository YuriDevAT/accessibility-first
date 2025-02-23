---
title: 'Warum ich als UX Designer coden lernen wollte'
excerpt: 'Ich denke, es ist mittlerweile allgemein anerkannt, dass es für Designer eine gute Idee ist, ein Grundverständnis für die Front-End-Entwicklung zu haben. Dasselbe gilt für Entwickler. Es ist immer gut, die wichtigsten Grundsätze der Benutzererfahrung für die fortgeschrittene Verwendung von Abständen und Co. zu lernen. ...'
coverImage: '/assets/cover/why-i-wanted-to-learn-coding-as-a-ux-designer/cover.png'
date: '2025-02-22T10:35:07.322Z'
tags: 'Blog'
category: 'UX Design'
author:
  name: 'Laura Wissiak'
  picture: '/assets/authors/laura.jpg'
ogImage:
  url: '/assets/cover/why-i-wanted-to-learn-coding-as-a-ux-designer/cover.jpg'
ogPost:
  url: 'https://www.laura-wissiak.com/blog/why-i-wanted-to-learn-coding-as-a-ux-designer'
readingTime: 3
---

Ich denke, es ist mittlerweile allgemein anerkannt, dass es für Designer eine gute Idee ist, ein Grundverständnis für die Front-End-Entwicklung zu haben. Dasselbe gilt für Entwickler. Es ist immer gut, die wichtigsten Grundsätze der Benutzererfahrung für die fortgeschrittene Verwendung von Abständen und Co. zu lernen. In jedem Fall hilft es, ein besseres Verständnis für die Arbeit des anderen zu entwickeln und erleichtert die Zusammenarbeit. Und das wollen wir alle! Yay! Cool!

Aber es ist immer noch eine Menge Arbeit (für beide Seiten), eine ganz neue Art von Fähigkeiten zu erlernen. Und meiner Meinung nach ist das bloße „Wissen, dass man es sollte“ nicht der beste Motivator.

## Entwickler-Jargon

Meine erste UX-Stelle war in einem großen Unternehmen. Und wie es in vielen großen Unternehmen üblich ist, wurde der größte Teil der Entwicklungsleistung extern bezogen. Während also das Designkapitel intern gut koordiniert war, mit wöchentlichen Updates, Abstimmungsgesprächen und dem Austausch von Know-how zwischen den Teams, war die Design-to-Code-Pipeline für uns so etwas wie eine Blackbox. Wie genau unsere Figma-Dateien zu einer dynamischen Website wurden, war für uns ein Rätsel.

Die meisten meiner Designübergaben fanden auf Englisch statt. Wohlgemerkt, keiner von uns war englischer Muttersprachler, es war lediglich unsere gemeinsame Sprache. Wir hatten bereits innerhalb des deutschsprachigen UX-Kapitels Diskussionen darüber, wie bestimmte Designelemente bezeichnet werden sollten.

Erklären zu können, was ich will, war alles, was ich wollte!

## Storytime

Eine meiner ersten Aufgaben als frischgebackener UX/UI-Designer bestand darin, eine Reihe bestehender Websites zu überprüfen. Da ich nicht genau wusste, wo ich anfangen sollte, begann ich damit, durch die Seiten zu wandern und alles zu notieren, was mir als inkonsistent auffiel, sowie Formulierungen, die ich nicht ganz verstand. Mitten in all dem erinnerte ich mich an das, was mir in meinem UX-Bootcamp beigebracht wurde: Wenn es nicht zugänglich ist, ist es nicht benutzbar. Also sollte ich auch diesen Aspekt überprüfen, nicht wahr?

Browsererweiterungen waren aus Sicherheitsgründen auf meinem Arbeitslaptop blockiert, aber ich konnte trotzdem meinen privaten Computer benutzen und sehen, welche Fehler und Warnungen [WAVE](https://wave.webaim.org/extension/) ausgeben würde. Und das waren eine ganze Menge. Aber damals konnte ich die Hälfte davon nicht verstehen! Okay, fehlender Alt-Text war leicht herauszufinden mit dem kleinen Symbol eines Bildes daneben. Aber was ist ein ARIA-Label? Was bewirken sie? Warum gibt es so viele und warum sagen einige [`aria-hidden="true"`] (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) und andere `„"alse"`? Was ist daran falsch?

Wenn man nicht weiß, was vor sich geht, ist das natürlich ein ziemliches Problem, wenn man seine Prüfungsergebnisse einem Team erklären muss, das man zu diesem Zeitpunkt noch kaum kennt. Also tat ich, was wahrscheinlich jeder ängstliche Praktikant tun würde: Ich nahm an, dass alle anderen außer mir wissen müssten, was diese Dinge sind, also googelte ich sie verzweifelt, um meine Inkompetenz zu verbergen!

Wie sich herausstellte, steht ARIA für [Accessible Rich Internet Applications](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) und es gibt verschiedene Varianten davon. Das Attribut aria-hidden legt fest, ob ein Element ausgeblendet (mit `aria-hidden="true"`) oder für assistive Technologien angezeigt wird. Mit `aria-hidden="false"` war also alles in Ordnung, und die Elemente mit `"true"` waren diejenigen, die ich tatsächlich in Frage stellen musste! Denn diese schienen ziemlich wahllos in das Karussell-Element gemischt zu sein.

Was mich dazu brachte, zu lernen, wie ich solche Fehler selbst beheben kann, war die Tatsache, dass ein Element des Flyout-Menüs nicht in der Tastaturnavigation enthalten war. Aber warum? Alles andere ist [fokussierbar](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)! Was hat es mit den Telefonnummern auf sich?

## Vorteile für Designer

Ich würde generell jedem, der mit Software arbeitet, empfehlen, sich mit den Grundlagen ihrer Funktionsweise zu beschäftigen. Es hilft einem zu verstehen, was eigentlich passiert, warum bestimmte Prozesse so sind und warum Tests manchmal gut laufen, bis sie es plötzlich nicht mehr tun.

Wenn man weiß, wie die Welt des Codes funktioniert, hat man viel mehr Handlungsspielraum. Es ist einfacher zu erklären, was man will, wenn man weiß, wie man die Elemente im Entwicklerjargon nennt. Aber es kommt noch besser: Es ist viel einfacher, die Unterschiede zwischen seinen Entwürfen und der codierten Version zu benennen. Und wie wir alle wissen, gibt es immer etwas, das nicht stimmt. Wenn du also darauf hinweisen kannst und etwas sagen wie „Es sieht so aus, als ob der Text in einem `<div>`, das hier mittig ausgerichtet ist, rechts ausgerichtet ist, aber der Text selbst sollte zentriert sein.“ (Stellen Sie sich das so vor [Beispiele für die CSS-Layout-Ausrichtung](https://www.w3schools.com/css/css_align.asp).), das wäre toll. Deine Entwickler werden wissen, was sie ändern müssen, und du wirst dich wie der effizienteste Bürokönig aller Zeiten fühlen. Es ist eine Win-Win-Situation für alle!

---

P.S.: Ich liebe euch, meine Beka Boys!
