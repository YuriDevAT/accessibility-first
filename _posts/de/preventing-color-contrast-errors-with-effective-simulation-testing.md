---
title: 'Farbkontrastfehler vorbeugen mit effektivem Simulation-Testing'
excerpt: 'Haben Sie schon einmal versucht, Text auf einem Bildschirm zu lesen, aber fanden es aufgrund der Farbgebung schwierig, ihn einwandfrei lesen zu können? Oder hatten Sie Schwierigkeiten, Inhalte auf einem Bildschirm ...'
coverImage: '/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/cover.png'
date: '2024-05-16T08:35:07.322Z'
tags: 'Blog'
category: 'QA Testing'
author:
  name: 'Julia Undeutsch'
  picture: '/assets/authors/julia.jpg'
ogImage:
  url: '/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/cover.png'
ogPost:
  url: ''
readingTime: 8
---

Haben Sie schon einmal versucht, Text auf einem Bildschirm zu lesen, aber fanden es aufgrund der Farbgebung schwierig, ihn einwandfrei lesen zu können? Oder hatten Sie Schwierigkeiten, Inhalte auf einem Bildschirm in einer sehr hellen oder schwach beleuchteten Umgebung zu erkennen?

Es gibt schätzungsweise 300 Millionen Menschen mit Farbenblindheit und etwa 253 Millionen Menschen mit Sehschwäche, die täglich mit diesen Situationen konfrontiert sind. Häufig sind diese Situationen auf schlechte Designentscheidungen zurückzuführen und könnten von Anfang an vermieden werden.

Die Gestaltung für verschiedene Sehschwächen kann für Designer und Entwickler eine Herausforderung sein. Vor allem, wenn diese nicht wirklich wissen, wie Menschen mit unterschiedlichen Sehschwächen die Inhalte im Web wahrnehmen.

Google Chrome bietet eine einfache Möglichkeit, Designern, Entwicklern und allen, die ihr Wissen in Bezug auf die unterschiedlichen Wahrnehmungsweisen von Text und Farben erweitern möchten, ihre Entwürfe und bestehende Webseiten in den unterschiedlichen Farbsehschwächen darzustellen.

Durch eine implementierte Emulation ist es möglich, einen Effekt zu erzeugen, der hilft, durch die Augen anderer Menschen zu sehen, um besser zu verstehen, wie Produkte von den Nutzern wahrgenommen und visuell verstanden werden. Werden diese Ergebnisse der Webseiten während der Entwicklung kontinuierlich überprüft, wird unerwünschtes Verhalten in Zukunft verhindert und Produkte von Anfang an so zugänglich wie möglich für sehbehinderte Nutzer gemacht.

## Farbkontrast: Was es ist und bei der Entwicklung von Produkten bedeutet

Der Farbkontrast ist das Verhältnis des Kontrasts zwischen zwei oder mehreren Komponenten. Um zugänglich zu sein, muss ein angemessener Kontrast zwischen der Farbe der Information im Vordergrund und der Farbe des Hintergrunds bestehen.

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/img-4.png)
_Quelle: [WebAIM Million Report](https://webaim.org/projects/million/). Letztes Update: 28. März, 2024_

Wie die jährliche [Studie von WebAIM](https://webaim.org/projects/million/) zeigt, ist ein zu geringer Farbkontrast der häufigste automatisch identifizierte Accessibility Fehler im Web. Mehr als 80% aller getesteten Homepages haben einen zu geringen Farbkontrast.

Kontrast und Farbe sind entscheidende Faktoren in Bezug auf Barrierefreiheit. Inhalte einer Webseite müssen für alle User, ungeachtet ob Sehbehinderung oder nicht, wahrnehmbar sein.

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/img-5.png)
_Quelle: [WebAIM Million Report](https://webaim.org/projects/million/). Letztes Update: 28. März, 2024_

Hier nochmal die Ergebnisse in Tabellenform. Homepages mit den meisten WCAG 2 Fehlern, gegliedert in WCAG-Fehlertyp und wieviel Prozent der Homepages davon betroffen sind. Geringer Farbkontrast 81%, fehlender Alternativtext von Bildern 54,5%, fehlende Form Input Labels 48,6%, leere Links / kein vorhandener Linktext 44,6%, leere Buttons / kein vorhandener Buttontext 28.2%, fehlende Dokumentsprache / Sprache der Homepage: 17,1%.

Um ein gleichmäßiges Verständnis von gutem Farbkontrast weltweit zu haben, hat die [WAI Arbeitsgruppe](https://www.w3.org/WAI/about/groups/) eine [Farbkontrast Formel](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio) entwickelt, die diesen Wert definiert. Für Text auf Hintergrund liegt dieser Wert bei 4.5:1, für Icons und Grafiken bei 3:1 zu ihrem Hintergrund. Gemessen kann dieser mittels Farbkontrast Checker werden, zum Beispiel dem [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/). Wird dieser Wert eingehalten, sind Menschen mit mäßiger Sehschwäche in der Lage, Text und Grafiken zu erkennen und lesen, ohne assistive Technologien benutzen zu müssen.

## Die verschiedenen Farbsehschwächen

Laut WHO (World Health Organization, dt. Weltgesundheitsorganisation) haben fast 300 Milliarden Menschen eine Art der Farbsehschwäche. Oft wird diese allgemein als Farbenblindheit bezeichnet, obwohl es unterschiedliche Formen der Farbsehschwäche gibt. Diese werden im nächsten Abschnitt genauer erläutert. In den seltensten Fällen können Menschen keine Farbe wahrnehmen. In den meisten Fällen sind Menschen mit Farbsehschwäche nicht in der Lage, rot, grün oder blau vollständig wahrzunehmen.

Die Ursachen dafür sind unterschiedlich. Manche sind genetisch bedingt, andere sind Resultat einer Krankheit, wie Diabetes oder Multiple Sklerose. Auch mit zunehmendem Alter kann Farbsehschwäche eine Begleiterscheinung sein.

Diese Sehschwächen machen es oft schwierig, Farben voneinander zu unterscheiden, was Farbkontrastprobleme verstärkt.

### Trichromacy (Normale Sicht)

Beim normalen Farbsehen werden alle drei Arten von Zapfenzellen verwendet, die richtig funktionieren. Ein anderer Begriff für normales Farbsehen ist Trichromie. Menschen mit normalem Farbsehvermögen werden als Trichromaten bezeichnet.

### Sehschärfe (verschwommene Sicht)

Die Sehschärfe wird anhand einer vereinbarten Norm unter den besten Bedingungen gemessen. Die Messung wird als Sehschärfe bezeichnet. Das Gesichtsfeld ist der Bereich, den eine Person sehen kann, wenn ihre Augen in einer Position fixiert sind. Dieses kann je nach Schärfe verschwommen erscheinen und so aufgrund von zu kleiner Schriftart oder wenig Kontrast nicht leserlich sein.

### Kontrastempfindlichkeit

Der Kontrast ist der visuelle Effekt, der durch den Unterschied zwischen der Helligkeit benachbarter Vorder- und Hintergrundbereiche eines Objektes verursacht wird. Wenn einer der beiden Bereiche (Vorder- oder Hintergrund) hell und der andere dunkel ist, liegt ein hoher Kontrast vor. Bei ähnlichen Helligkeitswerten, wie z. B. Beige auf Weiß oder Schwarz auf Dunkelbraun, ist der Kontrast gering. Je höher das Kontrastverhältnis ist, desto einfacher ist es, die Grenze der angrenzenden Komponenten visuell zu erkennen.

### Protanopia (Rotblindheit)

Menschen mit Protanopie haben eine verminderte Empfindlichkeit für rotes Licht und neigen dazu z.B. Schwarz mit vielen Schattierungen von Rot, oder Dunkelbraun mit Dunkelgrün, Dunkelorange, Dunkelrot, Dunkelblau/Violett und Schwarz, nicht unterscheiden zu können.

### Deuteranopia (Grünblindheit)

Menschen mit Deuteranopie haben eine verminderte Empfindlichkeit für grünes Licht. Sie verwechseln unter anderem meist mittlere Rottöne mit mittleren Grüntönen, Blaugrün mit Grau und Mittelrosa, oder helle Grüntöne mit Gelbtönen, Blassrosa mit Hellgrau/Weiß.

### Tritanomaly (Blaublindheit)

Tritanomalie ist sehr selten, geschätzt betrifft es 1 in 30-50.000 Personen. Menschen mit verminderter Blauempfindlichkeit haben Schwierigkeiten, die Unterschiede zwischen Blau und Gelb, Violett und Rot sowie Blau und Grün zu erkennen. Für diese Menschen erscheint die Welt im Allgemeinen als rot, rosa, schwarz, weiß, grau und türkis.

### Achromatopsia (Farbblindheit)

Bei Achromatopsie oder Monochromatismus spricht man von vollständiger Farbenblindheit. Diese kommt sehr, sehr selten vor, in etwa 1 in 33.000 Personen. Menschen mit Achromatopsie oder Monochromatismus können rotes, grünes oder blaues Licht fast nicht wahrnehmen. Ihre Welt besteht hauptsächlich aus verschiedenen Grautönen von Schwarz bis Weiß, ähnlich wie bei einem alten Schwarz-Weiß-Fernseher.

## Simulation mit Chrome DevTools

Der beste Weg, um die verschiedenen Formen der Farbsehschwäche zu verstehen, ist der Vergleich von Ausgangsbildern und simulierten Bildern unserer Website. Chrome DevTools bietet Designern und Entwicklern die Möglichkeit, die Auswirkungen dieser Sehschwächen auf ihre eigenen Webanwendungen zu simulieren, um so Kontrastprobleme zu _finden_, zu _beheben_, und vor allem auch zu _verstehen_!

Um die Sehschwächen zu simulieren,

### Öffne Entwicklertools

- Klicke auf die **drei vertikalen Punkte** oben rechts in der Toolbar
- Klicke auf **Weitere Tools**
- Klicke auf **Entwicklertools**

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/img-1.png)

### Öffne Rendering Optionen

- Klicke auf die **drei vertikalen Punkte** oben rechts in der Entwickler Toolbar
- Klicke auf **Weitere Tools**
- Klicke auf **Rendering**

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/img-2.png)

Wähle nun eine der folgenden Optionen in der Drop-Down Liste unter **Sehschwächen emulieren** aus:

- No Emulation (dt. Keine Emulation)
- Blurred Vision (dt. Verschwommenes Sehen)
- Reduced Contrast (dt. Weniger Kontrast)
- Protanopia (No Red) (dt. Protanopie (kein Rot))
- Deuteranopia (No Green) (dt. Deuteranopie (kein Grün))
- Tritanopia (No Blue) (dt. Tritanopie (kein Blau))
- Achromatopsia (No Color) (dt. Achromatopsie (keine Farbe))

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/img-3.png)

Die Webseite wird nun mit der gewählten Sehschwäche simuliert und aktualisiert sich mit jeder neuen Auswahl.

## Ergebnisse

In den 90er Jahren erschienen zwei Game Boy Spiele der Firma Nintendo, die sich auf den ersten Blick nur durch ihre Farbe unterschieden. Die Rede ist von Pokémon Rote Edition und Pokémon Blaue Edition. Die Pokémon-Spiele haben ihren Namen von der Farbe der Pokémon, die darauf abgebildet sind. Das rote Spiel zeigt Glurak, das blaue Turtok, das grüne Bisaflor (das übrigens nie in Europa erschienen ist) und die ein Jahr später erschienene gelbe Zusatzversion Pikachu.

Hier spricht man auch Farbunabhängigkeit, da es jedem Menschen, egal ob Farbsehschwäche oder nicht, möglich ist, die Spiele anhand der Pokémon voneinander unterscheiden zu können, auch wenn die Farben nicht unterschieden werden können.

Schauen wir uns an, wie diese bunten Farben der Pokémon auf Menschen mit bestimmten Formen der Farbsehschwäche wirken, um besser zu verstehen, was wir als Designer und Entwickler prüfen sollten, bevor wir uns für eine Farb- und Typografie Kombination entscheiden, um Probleme mit der Zugänglichkeit von Anfang an zu vermeiden.

### Originales Bild – Trichromacy

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/original.png)
Ein farbenfrohes Bild der Starter- Pokémon der ersten Generation, bei dem keine Farbsehschwäche simuliert wird.

### Unscharfe Sicht

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/blurred.png)
Die Auswirkungen der Simulation von unscharfer Sicht auf das originale Bild.

### Verminderter Kontrast

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/reduced.png)
Die Auswirkungen der Simulation von reduziertem Kontrast auf das originale Bild.

### Protanopie (Rotblindheit)

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/protan-no-red.png)
Die Auswirkungen der Simulation von Protanopie auf das originale Bild.

### Deuteranopie (Grünblindheit)

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/deuter-no-green.png)
Die Auswirkungen der Simulation von Deuteranopie auf das originale Bild.

### Tritanopie (Blaublindheit)

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/trita-no-blue.png)
Die Auswirkungen der Simulation von Tritanopie auf das originale Bild.

### Achromatopsie (Farbenblindheit)

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/achrom-no-color.png)
Die Auswirkungen der Simulation von Achromatopsie auf das originale Bild.

## Fazit

Nachdem das originale Bild mit Hilfe der Chrome DevTools in verschiedenen Formen von Sehschwäche präsentiert wurde, lässt sich Folgendes festhalten:

**Farbblindheitssimulationen zeigen deutliche Unterschiede:** Durch die Simulation von Farbsehschwächen wie Protanopie oder Achromatopsie werden die Herausforderungen deutlich, mit denen betroffene Personen beim Betrachten von farbigen Bildern konfrontiert sind. Farben, die für Menschen mit normaler Sehkraft klar unterscheidbar sind, können für Personen mit Farbsehschwäche schwer zu unterscheiden sein.

**Kontrast ist entscheidend:** In den Simulationen zeigt sich, dass ausreichender Kontrast zwischen Vordergrund und Hintergrund besonders wichtig ist, um sicherzustellen, dass Informationen für Personen mit Sehschwächen gut erkennbar sind.

**Barrierefreiheit ist wichtig:** Die Präsentation von Bildern sollte nicht nur auf normale Sehschärfe ausgelegt sein, sondern auch auf eine breite Palette von Sehschwächen. Durch die Berücksichtigung von Barrierefreiheitsrichtlinien und die regelmäßige Überprüfung von Bildern auf deren Wirkung bei verschiedenen Sehschwächen können Designer und Entwickler sicherstellen, dass ihre Inhalte für ein möglichst großes Publikum zugänglich sind.

Insgesamt verdeutlichen die Sehschwäche-Simulationen in den Chrome DevTools die Bedeutung von barrierefreiem Design für digitale Inhalte, um sicherzustellen, dass Informationen für alle Nutzer gleichermaßen zugänglich sind.

## Ressourcen

Mehr über Farbenblindheit (auf Englisch) [https://www.colourblindawareness.org/colour-blindness](https://www.colourblindawareness.org/colour-blindness)

Minimum Kriterium von Kontrast verstehen (auf Englisch) [https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

Barrierefreiheit in Kontrast und Farbe (auf Englisch) [https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html](https://webaim.org/articles/contrast)

Weltgesundheitsorganisation (WHO) Schlüsselfaktoren über Blindheit und Seheinschränkungen (auf Englisch) [https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)

WebAIM Million Report 2024 [https://webaim.org/projects/million/](https://webaim.org/projects/million/)

W3 Farbkontrastwert Definition [https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio)

---

Dieser Post wurde ursprünglich veröffentlicht auf [Fronta11y](https://www.fronta11y.org/) für [GAAD (Global Accessibility Awareness Day)](https://accessibility.day/) 2024.
