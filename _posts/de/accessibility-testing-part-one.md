---
title: 'Accessibility Testing Part 1'
excerpt: 'Heute beginne ich mit meinem allerersten Accessibility-Check. Ich werde Websites daraufhin überprüfen, wie gut sie Barrierefreiheit umsetzen, und auf Probleme und verbesserungsbedürftige Punkte hinweisen ...'
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

Heute beginne ich mit meinem allerersten Barrierefreiheits-Check. Ich werde Websites daraufhin überprüfen, wie gut sie die Barrierefreiheit umsetzen, und auf Probleme und verbesserungswürdige Punkte hinweisen.

Bis zur Genehmigung werde ich nicht zeigen, welche Websites ich überprüfe, um niemanden in Verlegenheit zu bringen und um ihnen die Möglichkeit zu geben, ihre Website zu aktualisieren und zugänglicher zu machen, nachdem ich ihnen meine Ergebnisse übermittelt habe.

## Accessibility Tools Und Wie Man Diese Benutzt

- [Axe Devtool Extension](https://www.deque.com/axe/browser-extensions/)
- [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

Ich teste die Website mit der kostenlosen axe DevTool-Erweiterung, einem der besten Tools auf dem Markt.
Nachdem ich die Erweiterung ausgeführt habe, werden 40 automatische\* Probleme gefunden.
Diese sind in critical, serious, moderate und minor unterteilt. Die critical und serious Probleme sind die wichtigsten, die behoben werden müssen. Schauen wir uns diese genauer an und überlegen, was getan werden kann, um die Website zu verbessern.

![](/assets/blog/accessibility-testing-one/image-1.png)

_\*Automatisch bedeutet, dass die Schwachstellen mit Hilfe von Entwicklungswerkzeugen für die Barrierefreiheit gefunden werden. Doch selbst wenn alle aufgelisteten Schwachstellen behoben sind, bedeutet das nicht unbedingt, dass die Website nun vollständig zugänglich ist. Es sind immer noch manuelle Tests erforderlich, bei denen z.B. nur die Tastatur verwendet oder die Website mit einem Bildschirmlesegerät bedient wird, um wirklich alle Probleme aufzuzeigen und diese beheben zu können._

## Elements Must Have Sufficient Color Contrast

"Elemente müssen einen ausreichenden Farbkontrast aufweisen". Die meisten schwerwiegenden Probleme standen im Zusammenhang mit dem Farbkontrast. Um die Fehler auf der Website leicht zu finden, können Sie sie durch Aktivieren der Schaltfläche "Hervorheben" hervorheben.

![](/assets/blog/en/accessibility-testing-one/image-2.png)

### Problembeschreibung (von axe Devtools, übersetzt von Julia)

Stellt sicher, dass der Kontrast zwischen Vorder- und Hintergrundfarben den Grenzwerten der WCAG2AA für das Kontrastverhältnis entspricht.

Menschen mit Sehschwäche können aufgrund des schwachen Farbkontrasts Schwierigkeiten beim Lesen des Inhalts haben.

### Primary color

Dieser Button hat keinen ausreichenden Farbkontrast (blauer HEX-Farbwert von "#2FAFF5" auf weißem HEX "#FFFFFF"). Der WebAIM Color Contrast Checker zeigt, dass das Kontrastverhältnis nur **2,45:1** beträgt, was ziemlich niedrig ist. Um WCAG2.1 AA zu erfüllen, muss das Kontrastverhältnis mindestens **4,5:1** betragen. Um dieses Verhältnis zu erreichen, müsste das Blau auf eine Helligkeit von 32 % reduziert werden.

![](/assets/blog/en/accessibility-testing-one/image-3.png)

Diese Farbkombination verursacht auch drei der anderen Probleme.

## Neutrale Farbe

Die beiden anderen Probleme werden durch einen Grauton in der Zwischenüberschrift verursacht.

![](/assets/blog/en/accessibility-testing-one/image-4.png)

Das Grau (`#737373`) selbst würde mit einem Kontrastverhältnis von **8,59:1** auf einem weißen (`#FFFFFF`) Hintergrund ausreichen, aber es wurde eine Deckkraft von `rgba(115, 115, 115, 0,74)` eingestellt, die den Kontrast auf **2,95:1** abschwächt.

### Wie man das Problem löst

Wenn Sie die Primärfarbe oder die Textfarbe in eine dunklere Farbe ändern und die Deckkraft aufheben, ist dieses Problem gelöst.

## Element muss ein "lang" Attribut haben

Es ist wichtig, dass eine Standardsprache eingestellt ist. Andernfalls verwenden Bildschirmlesegeräte die vom Betriebssystem gewählte Sprache, was ziemlich schrecklich und unverständlich klingen kann, wenn Sie beispielsweise ein deutsches Wort auf Französisch aussprechen, was der Benutzer des Bildschirmlesegeräts vielleicht nicht erwartet.

### Problembeschreibung

Stellt sicher, dass jedes HTML-Dokument ein `lang`-Attribut hat.

### Wie man das Problem löst

Hinzufügen der Sprache der Website, in diesem Fall Englisch, mit dem Attribut `lang`.

```javascript
<html lang="en">
  <!--document head und body-->
</html>
```

Wenn Wörter oder Absätze in einer anderen Sprache als der Standardsprache verwendet werden, können Sie die Sprache auch direkt in diesem HTML-Tag angeben.

```javascript
<p lang="es">Text in einer anderen Sprache</p>
```

Hier ist eine Liste mit allen [HTML Language Code References](https://www.w3schools.com/tags/ref_language_codes.asp).

## Links müssen erkennbaren Text haben

Das letzte schwerwiegende Problem betrifft einen Anker-Tag um das Firmenlogo in der Kopfzeile oben links.

### Problembeschreibung

Stellt sicher, dass Links einen erkennbaren Text haben.

```javascript
<a href="#" class="logo-link w-nav-brand">
  <img loading="lazy" src="https://logo.svg" alt="" class="image" />
</a>
```

Der Link um das Logo herum führt nirgendwo hin, wenn er angeklickt wird. Der a-Tag wird hier also missbraucht. Aber ich sehe, wie es ist. Die Website wurde mit Webflow erstellt. Ich nehme also an, dass Webflow dies standardmäßig macht, denn viele Websites verlinken auf ihre Homepage, wenn man auf das Logo klickt, aber das ist hier nicht der Fall.

Und das ist es, was irreführend ist. Benutzer von Bildschirmlesegeräten können mit der Tabulatortaste auf das Logo zugreifen, weil es sich um ein a-Tag handelt, so dass sie davon ausgehen, dass etwas passiert, wenn sie darauf klicken. Screenreader-Nutzer erhalten keine weiteren Informationen im Attribut `alt` oder über das aria-label, dass es sich nicht um einen echten Link handelt.

### Wie man das Problem löst

Das umgebende `<a>` Tag sollte entfernt werden.

Das href-Attribut erhält ein Ziel, zu dem verlinkt wird, und einen erkennbaren Text, z. B. im Attribut `alt` des Bildes. Bei dieser Website handelt es sich um eine einseitige Webseite, d. h. die Links in der Navigationsleiste verweisen auf Abschnitte innerhalb der Seite (z. B. Home, About). Der Zielort könnte derselbe sein wie der für den Home-Bereich.

## Nächste Schritte

Ich werde mich mit dem Eigentümer der Website in Verbindung setzen und ihm meine Erkenntnisse und Tipps mitteilen, ihn fragen, ob Änderungen vorgenommen werden können, um das Web für alle zugänglich zu machen, und natürlich meine Hilfe anbieten, falls sie benötigt wird.

Ich werde Sie auf dem Laufenden halten.

### Update 08/14/2022

Ich habe eine positive Rückmeldung vom Eigentümer der Website erhalten. Er und sein Webdesigner werden sich die von mir aufgeführten Probleme ansehen und die notwendigen Anpassungen vornehmen. Auftrag erfüllt.
