---
title: 'HTML und CSS, von deren Existenz ich nicht wusste, bevor ich begann, Inhalte auf Japanisch zu erstellen'
excerpt: 'Beim Erstellen japanischer Webinhalte gibt es spezielle HTML-Elemente für Zeichen und bidirektionalen Text, die oft unbekannt sind, aber die Darstellung und Funktionalität erheblich verbessern. Diese werden wir uns nun genauer ansehen.'
coverImage: '/assets/cover/html-css-creating-content-japanese/cover.png'
date: '2025-01-23T21:35:07.322Z'
tags: 'Blog'
category: 'Web Development'
author:
  name: 'Julia Undeutsch'
  picture: '/assets/authors/julia.jpg'
ogImage:
  url: '/assets/cover/html-css-creating-content-japanese/cover.png'
ogPost:
  url: 'https://www.htmhell.dev/adventcalendar/2024/12/'
readingTime: 3
---

Seit ich begonnen habe, Inhalte auf Japanisch zu erstellen, wollte ich auch mehr über traditionelle Layouts lernen, beispielsweise über vertikal verlaufenden Text von oben nach unten und von rechts nach links, wie man ihn in Zeitungen oder Romanen findet. Dabei entdeckte ich CSS-Eigenschaften wie `writing-mode: vertical-rl` und HTML-Tags wie `<ruby>`, mit denen sich [Furigana (phonetische Lesehilfen)](https://de.wikipedia.org/wiki/Furigana) über [Kanji-Zeichen](https://de.wikipedia.org/wiki/Kanji) einfügen lassen.

Ehrlich gesagt hatte ich diese Eigenschaften vorher nie verwendet und fast vergessen, dass sie existieren! Aber nachdem ich mich intensiver damit beschäftigt habe, möchte ich erklären, wie du sie Schritt für Schritt umsetzen kannst, um ein traditionelles japanisches Layout zu erstellen.

Das ist der Text, mit dem wir arbeiten werden. Er bedeutet: "Beispiel für vertikalen Text. Die japanische Kultur ist sehr reichhaltig.":

```html
<div class="step0">
  <h1>縦書(たてが)きのテキストの例(れい)</h1>
  <p>日本(にほん)の文化(ぶんか)はとても豊(ゆた)かです。</p>
</div>
```

## Schritt 1: Vertikalen Text mit CSS einrichten

Zuerst sorgen wir dafür, dass der Text vertikal von rechts nach links verläuft. Die CSS-Eigenschaft `writing-mode: vertical-rl` ist ideal dafür und sorgt für eine traditionelle japanische Darstellung.

```css
.vertical-text {
  font-size: 2rem; /* Adjust font size as needed */
  letter-spacing: 0.2em; /* Ensures legibility */
  line-height: 1.5; /* Adjust line height for spacing */
  text-orientation: mixed; /* Allow for mixed orientation (e.g., hiragana and kanji) */
  writing-mode: vertical-rl; /* Set writing mode to vertical, right to left */
}
```

```html
<div class="step1">
  <h1>縦書(たてが)きのテキストの例(れい)</h1>
  <p>日本(にほん)の文化(ぶんか)はとても豊(ゆた)かです。</p>
</div>
```

`writing-mode: vertical-rl`: Macht den Text vertikal, also von oben nach unten, und lässt ihn von rechts nach links fließen.

`text-orientation: mixed`: Hält Kanji und andere Zeichen lesbar. Japanische Text benutzt oft verschiedene Charaktertypen, also ist mixes generell die bessere Option in diesem Fall.

`font-size`, `letter-spacing` und `line-height`: Anpassung für eine optimale Lesbarkeit und genügend Abstand.

## Schritt 2: Abstand mit Margins optimieren

Bei vertikalem Text kann mit `margin-block` der Abstand zwischen Blöcken angepasst werden. Die CSS Eigenschaft ist wie `margin-top` und `margin-bottom` für horizontalen Text, und `margin-left` und `margin-right` für vertikalen Text.

```css
ruby rt {
  font-size: 0.7rem;
  margin-block: 1px; /* Adds some space between text and ruby text */
}
```

Diese Eigenschaft kommt gelegen, wenn du mit mehreren Sprachen auf einer Webseite arbeitest, weil der Abstand basierend auf die Textausrichtung angepasst wird.

## Schritt 3: Furigana mit `<ruby>` hinzufügen

Furigana (kleine [Hiragana-](https://en.wikipedia.org/wiki/Hiragana) oder [Katakana-Zeichen](https://en.wikipedia.org/wiki/Katakana)) werden meist über ein Kanji gesetzt um die Aussprache des Kanji anzuzeigen. Wir können Furigana mit den `<ruby>` und `<rt>` Tags hinzufügen, die genau für diesen Fall gedacht sind.

So fügst du Furigana hinzu:

```html
<div class="vertical-text">
  <ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby>
  の<ruby>文化<rp>(</rp><rt>ぶんか</rt><rp>)</rp></ruby> はとても<ruby
    >豊<rp>(</rp><rt>ゆた</rt><rp>)</rp></ruby
  >
  かです。
</div>
```

```html
<div class="vertical-text">
  <h1>
    <ruby>縦書<rp>(</rp><rt>たてが</rt><rp>)</rp></ruby>きのテキストの<ruby
      >例<rp>(</rp><rt>れい</rt><rp>)</rp></ruby
    >
  </h1>
  <p>
    <ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby>の<ruby
      >文化<rp>(</rp><rt>ぶんか</rt><rp>)</rp></ruby
    >はとても<ruby>豊<rp>(</rp><rt>ゆた</rt><rp>)</rp></ruby>かです。
  </p>
</div>
```

`<ruby>`: Umschließt die Kanji Charakter.

`<rt>`: Beinhaltet Furigana, die über dem Kanji angezeigt werden.

`<rp>`: Stellt Klammern für den Fall zu Verfügung, wenn der Browser die Anzeige Ruby Annotation nicht unterstützt.

## Schritt 4: Alles zusammenfügen

Lasst uns nun alles zu einem komplette HTML Beispiel zusammenfügen. Das inkludiert das vertikale Textstyling, Abstand, und Furigana für das traditionelle japanische Gefühl:

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>Vertical Japanese Text Example</title>
    <style>
      * {
        margin: 0;
      }

      body {
        display: flex;
        justify-content: flex-end;
        padding: 25px;
      }

      .vertical-text {
        font-family: 'Noto Sans JP', sans-serif;
        font-size: 1.5rem;
        letter-spacing: 0.2em;
        line-height: 1.5;
        text-orientation: mixed;
        writing-mode: vertical-rl;
      }

      h1 {
        font-size: 2.5rem;
        margin-block: 10px;
      }

      ruby rt {
        font-size: 0.7rem;
        margin-block: 1px;
      }
    </style>
  </head>
  <body>
    <div class="vertical-text">
      <h1>
        <ruby>縦書<rp>(</rp><rt>たてが</rt><rp>)</rp></ruby>きのテキストの<ruby
          >例<rp>(</rp><rt>れい</rt><rp>)</rp></ruby
        >
      </h1>
      <p>
        <ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby>の<ruby
          >文化<rp>(</rp><rt>ぶんか</rt><rp>)</rp></ruby
        >はとても<ruby>豊<rp>(</rp><rt>ゆた</rt><rp>)</rp></ruby>かです。
      </p>
    </div>
  </body>
</html>
```

Und hier ist es! Mit ein paar wenigen CSS Eigenschaften und HTML Tags kannst du den Text in einem mehr traditionellen japanischen Lesestil verwandeln.

実験を楽しむ！

_Viel Spaß beim Experimentieren!_

[Fertiges Beispiel auf CodePen](https://codepen.io/YuriDevAT/pen/poMawje).

## Ressourcen

- [text-orientation auf MDN](https://developer.mozilla.org/de/docs/Web/CSS/text-orientation)
- [writing-mode auf MDN](https://developer.mozilla.org/de/docs/Web/CSS/writing-mode)
- [margin-block auf MDN](https://developer.mozilla.org/de/docs/Web/CSS/margin-block)
- [ruby auf MDN](https://developer.mozilla.org/de/docs/Web/HTML/Element/ruby)
- [rp auf MDN](https://developer.mozilla.org/de/docs/Web/HTML/Element/rp)
- [rt auf MDN](https://developer.mozilla.org/de/docs/Web/HTML/Element/rt)
