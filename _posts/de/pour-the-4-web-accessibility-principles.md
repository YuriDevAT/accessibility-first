---
title: 'POUR - Die 4 Web Barrierefreiheitsprinzipien'
excerpt: 'Um deine Webseite und Webanwendung als zugänglich im Sinne der Zugänglichkeitsrichtlinien für Webinhalte (WCAG 2.0) zu qualifizieren, die von der Web Accessibility Initiative (W3C WAI) des World Wide Web Consortiums aufgestellt wurden, muss der Inhalt diese vier Grundsätze (die das Akronym POUR bilden) erfüllen ...'
coverImage: '/assets/cover/pour-the-4-web-accessibility-principles/cover.png'
date: '2022-07-17T07:35:07.322Z'
tags: 'Blog'
category: 'Accessibility'
author:
  name: 'Julia Undeutsch'
  picture: '/assets/authors/julia.jpg'
ogImage:
  url: '/assets/cover/pour-the-4-web-accessibility-principles/cover.png'
ogPost:
  url: 'https://dev.to/yuridevat/pour-the-4-web-accessibility-principles-edp'
readingTime: 5
---

Um deine Webseite und Webanwendung als zugänglich im Sinne der [Web Content Accessibility Guidelines (WCAG 2.0)](https://www.w3.org/TR/WCAG20/) zu qualifizieren, die von der [World Wide Web Consortium's Web Accessibility Initiative (W3C WAI)](https://www.w3.org/WAI/) aufgestellt wurden, muss der Inhalt diese vier Grundsätze (die das Akronym POUR bilden) erfüllen...

- **P**erceivable (Wahrnehmbar)
- **O**perable (Bedienbar)
- **U**nderstandable (Verständlich)
- **R**obust

## 1. Wahrnehmbar

Die Ausgabe deiner Webinhalte **muss** durch mindestens einen unserer biologischen Sinne, wie Sehen, Hören, oder Tasten zugänglich sein, um als zugänglich bezeichnet zu werden.

### 1.1. Wie man wahrnimmt

Die meisten Menschen nehmen Informationen im Internet wahr, indem sie sie ansehen, was für diejenigen, die gut sehen können, gut funktioniert. Die meisten Web-Designer und -Entwickler sind relativ jung und körperlich fit. Es ist also kein Zufall, dass sie das Internet so gestalten, dass es für Menschen wie sie selbst funktioniert. Manchmal ist ihnen gar nicht bewusst, dass andere Menschen die Inhalte vielleicht nicht sehen können, so dass die Entwickler die Webseiten nicht auf andere Weise gestalten, um die Informationen für alle wahrnehmbar zu machen.

Es ist wichtig, den Code so zu schreiben, dass Bildschirmlesegeräte die geschriebenen Informationen in synthetische Sprache umwandeln können, damit sehbehinderte und blinde Menschen die Webinhalte hören können. Das Hören des Webinhalts ist die zweithäufigste Art, Informationen aus dem Web wahrzunehmen.

Wenn du deinen Code für Benutzer von Screenreader-Software, die auf hörbare Webinhalte angewiesen sind, verständlich machst, wird er höchstwahrscheinlich auch für taubblinde Menschen, die ein Braille-Gerät benutzen, verständlich sein. Das Bildschirmlesegerät wandelt digitalen Text in Blindenschrift um, wobei die Funktionalität nahezu identisch ist. Sie können sich die aktualisierbare Brailleschrift wie die traditionelle gedruckte Brailleschrift auf Hartpapier vorstellen, mit hervorgehobenen Punkten, die in einem Alphabet von Zeichen und Symbolen angeordnet sind.

### 1.2. Digitaler Text ist ein universelles Format

Man kann digitalen Text als DAS universelle Format für die Barrierefreiheit im Web bezeichnen, das Webinhalte wahrnehmbar macht. Daher ist es unsere Pflicht als Webdesigner und -entwickler, den Code so zu schreiben, dass er von allen wahrgenommen werden kann. Wenn jemand die Bilder und Farben auf Ihrer Website nicht sehen oder den Ton nicht hören kann, kann der Inhalt genauso gut nicht existieren.

Es ist von entscheidender Bedeutung, jede informative Komponente über Text wahrnehmbar zu machen, d. h. Bilder mit entsprechendem Alternativtext zu versehen, dynamische Interaktionen durch die Verwendung von ARIA (Accessible Rich Internet Applications) zugänglich zu machen, das anzeigt, wenn sich eine Tab aus- oder einklappt, und vieles mehr.

Stelle sicher, dass die Benutzer wissen, was sie auf deiner Website finden, indem du Inhalte und Funktionen durch Sehen, Hören und Tasten zugänglich machst.

## 2. Bedienbar

Der Benutzer **muss** in der Lage sein, in deine Webkomponenten zu navigieren, sie zu benutzen, durch sie zu navigieren und sie zu verlassen, unabhängig davon, welches Eingabegerät er benutzt.

### 2.1 Wie man bedient

Nicht jeder Benutzer ist in der Lage, eine Maus oder ein Touchpad zu benutzen. Es ist die Pflicht eines Entwicklers, seinen Code so zu schreiben, dass er mit anderen Eingabegeräten wie Tastatur, Touchscreen, Spracherkennungssoftware usw. funktioniert.

Wenn eine Funktion nicht funktioniert, können einige Benutzer die Webkomponente nicht nutzen. Tastaturbenutzer müssen in der Lage sein, in einem JavaScript-Dropdown-Menü zu navigieren und den gewünschten Link innerhalb dieses Menüs auszuwählen, ohne eine Maus zu benutzen. Mausfunktionen wie Hover-Ereignisse müssen auch mit Geräten wie Touchscreens oder Tastaturen aktiviert werden können, um dem Benutzer die gleiche Erfahrung wie dem Mausbenutzer zu bieten.

### 2.2 Tastaturen sind fast DAS universelle Eingabegerät

Wenn du deinen Code nicht nur für die Maus, sondern auch für die Tastatur zugänglich machst, machst du ihn bereits für die meisten anderen Geräte zugänglicher.

Stelle sicher, dass du statt spezifischer Geräteereignisse wie `onmouseover` oder `ondblclick` unabhängige Event-Handler wie `onfocus` oder `onselect` verwendest. In manchen Fällen benötigst du vielleicht sogar beide.

## 3. Verständlich

Der Nutzer **muss** in der Lage sein, alle Inhalte und Schnittstellen auf Ihrer Website zu verstehen.

### 3.1 Wie man versteht

Es ist wichtig, im Markup eine Sprache anzugeben (z. B. `<html lang="de"`), damit der Screenreader den Text mit der erwarteten Aussprache lesen kann, um den Inhalt für den Benutzer verständlich zu machen. Wenn du Ausdrücke in einer anderen Sprache auf einer Seite verwendest, achte darauf, dass dieser spezielle Teil mit seiner eigenen Sprache umgeben ist (z.B. `<span lang="en">Good Day!</span>`).

Die Benutzeroberfläche und die Interaktivität müssen verständlich sein, was durch ein einheitliches Erscheinungsbild deiner Webseite über mehrere Seiten hinweg gewährleistet werden kann, z. B. durch dieselben Links in der Hauptnavigation, dasselbe Verhalten von Formularsteuerelementen und benutzerdefinierte Widgets auf deiner gesamten Webseite.

### 3.2 Bewährte Praktiken zur Verbesserung der Verständlichkeit von Inhalten

Da manche Menschen mit Leseschwierigkeiten, -behinderungen oder sogar kognitiven Beeinträchtigungen zu kämpfen haben, solltest du lange oder unbekannte Wörter und Phrasen, komplexe Satzkonstruktionen oder zu eng aneinander liegende Textzeilen vermeiden.

Achte darauf, dass du eine Schriftart verwendest, die für jedermann leicht zu lesen ist, z. B. gängige Serifen- oder serifenlose Schriftarten, und dass die Textzeilen nicht zu eng beieinander liegen. Vermeide Abstände zwischen den Wörtern, indem du keinen Blocksatz in einem Absatz verwendest.

Wenn du ein Formular verwendest, solltest du genügend Informationen bereitstellen, damit der Benutzer das Formular erfolgreich ausfüllen kann. Wenn es Pflichtfelder oder eine bestimmte Kennwortkonvention gibt, teilen Sie dem Benutzer mit, was falsch gelaufen ist, wenn das Formular nicht abgeschickt werden kann. Dies kann geschehen, indem du dem Benutzer mitteilst, in welchem Feld der Fehler aufgetreten ist, was genau der Fehler war, oder indem du den Fokus sofort auf das Eingabefeld mit dem Fehler schickst, um Bildschirmleser zu benachrichtigen.

Da manche Menschen überhaupt nicht lesen können, wäre es gut, alternative Formate wie Bilder, Audio oder Video anzubieten. Das mag nach viel Arbeit klingen (und ist es auch), aber der Nutzer, der darauf angewiesen ist, wird es dir sicher danken.

## 4. Robust

Damit deine Webseite oder Webanwendung als robust angesehen werden kann, **muss** der Benutzer in der Lage sein, mit deiner Webseite über jeden Browser oder jedes Computersystem sowie über unterstützende Technologien zu interagieren.

### 4.1 Wie man robust ist

Verschiedene Bildschirmlesegeräte verarbeiten Inhalte in der Regel unterschiedlich, und zwar umso mehr, je nachdem, welcher Browser verwendet wird.
Es ist unmöglich, alle Browser und Plattformen zu unterstützen. Daher ist es notwendig, eine Grenze zu ziehen und zu sagen, welche Browser unterstützt werden und welche nicht. Gründe können sein, dass die Benutzerbasis klein ist oder die Version eines bestimmten Browsers nicht genügend Funktionen hat.

### 4.2 Bewährte Praktiken, um die Webseite robust zu machen

Der beste Weg, um Robustheit zu erreichen, ist die Verwendung von semantischem HTML und, falls erforderlich, ARIA, um den Namen, die Rolle und den Wert interaktiver Komponenten zu spezifizieren, damit Screenreader-Benutzer die gewünschten Informationen erhalten.
