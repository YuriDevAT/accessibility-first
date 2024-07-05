---
title: 'Define project'
excerpt: 'Am 10. Oktober haben wir an der Präsentation des DEFINE-Projekts teilgenommen. Define steht für Digital Equipment For Inclusive Empowerment. Dahinter verbirgt sich nicht nur das Ziel, kostengünstige technische Hilfsmittel auf den Markt zu bringen, sondern auch die digitale Kompetenz zu verbessern ... '
coverImage: '/assets/blog/en/define-project/cover.png'
date: '2023-10-22T11:35:07.322Z'
tags: 'Blog'
category: 'UX Research'
author:
  name: 'Laura Wissiak'
  picture: '/assets/authors/laura.jpg'
ogImage:
  url: '/assets/blog/en/define-project/cover.jpg'
ogPost:
  url: 'https://www.laura-wissiak.com/blog/define-project'
---

Define steht für **D**igital **E**quipment **F**or **In**clusive **E**mpowerment. Die Mission dahinter ist nicht nur, kostengünstige Hilfstechnologien auf den Markt zu bringen, sondern auch die digitale Kompetenz im Prozess zu verbessern. Braille-Tastaturen sind keine grundsätzlich neue Idee. Aber Define verfolgt einen praktischen Ansatz im gesamten Prozess, und das macht es meiner Meinung nach besonders.

![Julia hält eine schwarze Version der Meta Braille-Tastatur.](/assets/blog/define-project/image-1.jpg)
_Julia hält eine schwarze Version der Meta Braille-Tastatur._

## Benutzergeführte Co-Kreation

Im Laufe eines Jahres hat Define ein DIY-Kit entwickelt, um eine Braille-Tastatur zu 3D-drucken. Die [Druckanweisungen](https://gitlab.com/metabraille/metabraille) sind Open Source und können kostenlos von GitHub heruntergeladen werden.

Normalerweise erfordert der Zusammenbau einer Tastatur das Löten von Kontaktpunkten. Löten ist nicht besonders einfach oder sicher für Menschen mit Sehbehinderungen: Es erfordert viel Präzision und man kann nicht wirklich überprüfen, ob alles richtig verbunden ist, indem man fühlt, da man Gefahr läuft, sich die Fingerspitzen zu verbrennen. Autsch!

Deshalb hat das Define-Projekt eine Lösung dafür entwickelt: Anstatt die Kontaktpunkte zu löten, werden sie durch Umwickeln mit Drähten verbunden. Dies stellt einen stabilen Kontakt sicher und ist nicht auf das Sehen angewiesen, wodurch Maker mit geringer bis keiner Sehkraft es selbst machen können.

Durch diese Workshops sind insgesamt 8 MetaBraille-Tastaturen entstanden. Klingt nicht nach viel? Nun, bedenke, dass der 3D-Druck jeder Hälfte des Tastaturgehäuses etwa 4 Stunden dauert, wenn der Druckprozess reibungslos verläuft! Denn manchmal machen 3D-Drucker Streiche und rutschen beim Drucken ein wenig zur Seite. Das Ergebnis ist ein falsch ausgerichteter, unbrauchbarer Druck. Wenn du also selbst eine machen möchtest, sei dir bewusst, dass es eine Weile dauern kann.

![3 Pläne für den Tastaturaufbau liegen auf dem Tisch. Jeder ist mit Englisch und Braille beschriftet. Oben rechts befindet sich ein Tastaturgehäuse, ein Batteriepack und Tastenteile.](/assets/blog/define-project/image-2.jpg)
_3 Pläne für den Tastaturaufbau liegen auf dem Tisch. Jeder ist mit Englisch und Braille beschriftet. Oben rechts befindet sich ein Tastaturgehäuse, ein Batteriepack und Tastenteile. Leider fehlt mir das technische Fachwissen, um genau zu erklären, was wir hier sehen. Wenn du dich besser damit auskennst, erklär es mir bitte!_

## Wie funktionieren Braille-Tastaturen?

Die Tastatur heißt MetaBraille. Sie erhielt ihren Namen vom [MakerSpace MetaLab in Wien](https://metalab.at/index.html), wo sie geboren wurde. Die obersten 2 Tasten auf der Tastatur dienen zur Navigation oder zum Wischen, wenn du sie mit einem Smartphone verbindest. Die 8 Tasten auf der dir abgewandten Seite sind für die Braille-Eingabe. Von diesen 8 sind die 6 schwarzen Tasten zum Schreiben von Buchstaben und die 2 weißen unten für Leerzeichen und Löschen. Die 2 zusätzlichen Tasten ermöglichen auch mehr Vielfalt bei Tastenkombinationen. Sie können unsere verfügbaren Tastenkombos für Sonderzeichen verdreifachen!

### Wie tippt man in Braille?

Braille ist ein Alphabet, bei dem jeder Buchstabe auf ein 2 mal 3 Raster passt. Du merkst dir die Buchstaben anhand ihrer Punktmuster. Braille mit den Fingern zu lesen funktioniert, indem du das Punktmuster als bestimmten Buchstaben identifizierst. Beim Tippen ist es umgekehrt: Du tippst das Punktmuster eines Buchstabens, indem du die Tasten im entsprechenden Muster drückst. Braille zu lernen ist wie das Lernen eines anderen Alphabets, die Buchstaben nehmen einfach neue Formen an!

![Eine grüne Platine mit einem ESP32S3-Prozessor darauf. Dieser Prozessor übersetzt das Braille-Alphabet in das lateinische Alphabet, bevor es an das Gerät übertragen wird, mit dem die Tastatur gekoppelt ist.](/assets/blog/define-project/image-3.jpg)
_Eine grüne Platine mit einem ESP32S3-Prozessor darauf. Dieser Prozessor übersetzt das Braille-Alphabet in das lateinische Alphabet, bevor es an das Gerät übertragen wird, mit dem die Tastatur gekoppelt ist._

### Wie interagieren sie mit einer Website?

Im Grunde wie jede andere Tastatur! Im Fall der MetaBraille wird sie dem Gerät wie jede andere Bluetooth-Tastatur erscheinen. Die Übersetzung von Braille in lateinische Buchstaben erfolgt innerhalb der MetaBraille.

Aber weißt du, was das bedeutet? Es ist Zeit, die Grundlagen der Tastaturnavigation zu wiederholen!

- **Tab-Navigation:** Die Tabulatortaste wird verwendet, um durch interaktive Elemente wie Schaltflächen, Links und Formularfelder zu navigieren. Die Standardfunktionen eben. Das Drücken der Tabulatortaste bewegt den Fokus typischerweise von einem Element zum nächsten und Shift+Tab wird verwendet, um rückwärts zu gehen.
- **Pfeiltasten:** Du kannst normalerweise die Pfeiltasten (hoch, runter, links, rechts) verwenden, um durch Menüs, Listen und andere Elemente zu navigieren.
- **Eingabetaste oder Leertaste:** Diese Tasten werden oft verwendet, um das aktuell fokussierte Element zu aktivieren oder auszuwählen, wie eine Schaltfläche oder einen Link. Sie ersetzen den Mausklick oder das Tippen mit dem Finger.

Braille-Tastaturen werden normalerweise zusammen mit Screenreader-Software verwendet. Wenn du also möchtest, dass deine Website oder App gut mit Braille-Tastaturen funktioniert, musst du auch Dinge wie Alt-Texte und HTML-Tags für sinnvolle Überschriftenstrukturen und Markierungen überprüfen, wie z. B. das Definieren des Headers, Mains und Footers. Screenreader und Tastaturnavigation gehen Hand in Hand (oder Software-in-Hardware?), also lernst du beim einen auch etwas über das andere. Die [Mozilla Developer Resources](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard) sind meiner Meinung nach ein großartiger Ausgangspunkt, am besten gepaart mit Learning by Doing, indem du die Tastaturnavigation durch deinen User-Flow manuell testest.

![Laura probiert die MetaBraille mit Hilfe der Braille-Tabellen auf dem Schreibtisch aus. Es dauert eine Weile, sich daran zu gewöhnen, aber es geht überraschend schnell!](/assets/blog/define-project/image-4.png)
_Laura probiert die MetaBraille mit Hilfe der Braille-Tabellen auf dem Schreibtisch aus. Es dauert eine Weile, sich daran zu gewöhnen, aber es geht überraschend schnell!_

---

In unserer zunehmend digitalisierten Welt sind es Initiativen wie das Define-Projekt, die die digitale Kluft überbrücken. Aber so brillant sie auch sein mögen, keine Innovation wird die Zugangsbeschränkungen allein lösen. Es liegt immer noch an uns allen, sicherzustellen, dass Technologie wirklich jedem dient.

[Mehr über das Define-Projekt lesen](https://defineblind.at/about/)
