---
title: 'Warum es nicht ausreicht, die WCAG zu erfüllen'
excerpt: 'Alle Welt redet über den European Accessibility Act, und viele sehnen sich nach klaren Anweisungen, was zu tun ist. Ich will dir nicht zu nahe treten, aber ...'
coverImage: '/assets/cover/why-fulfilling-the-wcag-is-not-enough/cover.png'
date: '2024-01-16T10:35:07.322Z'
tags: 'Blog'
category: 'Accessibility'
author:
  name: 'Laura Wissiak'
  picture: '/assets/authors/laura.jpg'
ogImage:
  url: '/assets/cover/why-fulfilling-the-wcag-is-not-enough/cover.jpg'
ogPost:
  url: 'https://www.laura-wissiak.com/blog/why-fulfilling-the-wcag-is-not-enough'
readingTime: 3
---

Alle Welt redet über den European Accessibility Act (EAA), und viele sehnen sich nach klaren Anweisungen, was zu tun ist. Ich will dir nicht zu nahe treten, aber selbst wenn du die Leitlinien für die Zugänglichkeit von Web-Inhalten bis auf jedes Semikolon in deinem Code befolgst, ist das keine Garantie dafür, dass du sicher bist.

Und dafür gibt es einen guten Grund: **Barrierefreiheit ist keine Checkliste.** Klingt kitschig, ich weiß!

Was bedeutet das? Du musst dir im Klaren darüber sein, dass Barrierefreiheit ein Mittel zum Zweck ist. Worauf wir eigentlich hinarbeiten ist Inklusion. Echte Inklusion, nicht die bloße Erfüllung von Anforderungen oder performative Integration (das Wort „Integration“ im Zusammenhang mit Behindertenrechten ist gestrichen).

**Selbst wenn du 100 % der WCAG-Kriterien abhaken kannst, bedeutet das nicht, dass deine Website zu 100 % zugänglich ist.**

> As we often focus on Success Criteria, the context of the Principles and Guidelines is missed. They can guide us to good, accessible solutions already. When people say “go beyond WCAG” they typically mean “follow best practice principles & guidelines” which are also in WCAG.

_Eric Eggert in WCAG 2: Guidelines and Guardrails_

## Aber warum reichen die WCAG 2.2 und die Europäische Norm 301549 nicht aus?

### Barrierefreiheit muss im Kontext Sinn machen.

- Ein Beispiel: Ein Möbelhaus hat viele, viele Produktbilder. Natürlich will man wissen, wie der Gartentisch aus jedem Blickwinkel aussieht, bevor man 800 € dafür ausgibt. Wäre es für das Unternehmen sinnvoll, die Zeit und Mühe zu investieren, um für jedes einzelne Bild eine [Bildbeschreibung](https://accessibility.huit.harvard.edu/describe-content-images) zu schreiben? Und was noch wichtiger ist: Wäre das sinnvoll? Würden Screen-Reader-Benutzer das Produkt durch die [Textbeschreibung im HTML alt-Attribut](https://webaim.org/techniques/alttext/) besser verstehen, oder würde es sich nur um denselben Text handeln, der in alle 20 Bilder kopiert wird? In diesem Fall könnte die Produktbeschreibung den Text ersetzen, und das Ergebnis wäre dasselbe: eine Bildalternative wird genau dort bereitgestellt, mit Abmessungen, Farboptionen, Material und dergleichen.
- Ja, technisch gesehen würde das Hinzufügen von Alt-Text zu jedem Bild die [WCAG 2.2 Erfolgskriterien für Nicht-Text-Inhalte](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html) erfüllen. Aber wenn die Produktbeschreibung bereits alles enthält, was man wissen möchte, wäre es dann in diesem Zusammenhang sinnvoll? Selbst wenn es sich um ein Kriterium der Stufe A handelt, würden die Benutzer von einer Änderung profitieren? Sie sollten Ihre Ressourcen auf kritischere Hindernisse in Ihrem Checkout-Flow konzentrieren.

### Die gesamte Benutzerführung muss barrierefrei sein.

- Die WCAG und EN geben wenig Hinweise zu Übergängen zwischen Webseiten (okay, eine offensichtliche Ausnahme: [Animationen](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html), da sie Reaktionen des Gleichgewichtsorgans oder des Innenohrs auslösen können).
- Um eine Website barrierefrei zu gestalten, müssen die einzelnen Seiten im Zusammenhang betrachtet werden, nicht isoliert voneinander.

### Behinderungen sind dynamisch!

- Und wir lernen ständig neue bewährte Verfahren kennen. Deshalb werden die WCAG ständig weiterentwickelt!
- Die EAA erkennt an, dass nicht die Normen die Zugänglichkeit bestimmen, sondern die Menschen mit Behinderungen selbst.

Barrierefreiheit im Internet ist der einfachste Weg zu mehr Selbstbestimmung für Menschen mit Behinderungen. Man kann heute im Grunde alles online machen! Mit niemandem sprechen zu müssen, um den Internetvertrag für die neue Wohnung abzuschließen, eine Kernaufgabe des Erwachsenenlebens, die jeder hasst, ist einfach erstaunlich. Einen Arzttermin um 23 Uhr über ein Online-Buchungstool zu vereinbaren, weil man es bis jetzt aufgeschoben hat, ist eine Rettung für den ruhigen Schlaf. Die Bestellung von Lebensmitteln, die direkt an die Wohnungstür geliefert werden - das ist Lebensqualität!
