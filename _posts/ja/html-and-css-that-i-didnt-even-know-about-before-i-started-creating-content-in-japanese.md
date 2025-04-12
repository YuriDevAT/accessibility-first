---
title: '日本語でコンテンツを作成し始める前に知らなかったHTMLとCSS'
excerpt: '日本語のWebコンテンツを作成する際、文字や双方向テキストのための特別なHTML要素があり、それらはあまり知られていませんが、表示や機能を大幅に向上させます。今回は、それらを詳しく見ていきます。'
coverImage: '/assets/cover/html-css-creating-content-japanese/cover.png'
date: '2025-01-23T21:35:07.322Z'
tags: 'Blog'
category: 'Web Development'
author:
  name: 'Julia Undeutsch'
  picture: '/assets/authors/julia.png'
ogImage:
  url: '/assets/cover/html-css-creating-content-japanese/cover.png'
ogPost:
  url: ''
readingTime: 3
---

日本語でコンテンツを作成し始めてから、新聞や小説のように、右から左へ、上から下へと流れる伝統的なレイアウトについても学びたいと思いました。その過程で、CSSの`writing-mode: vertical-rl`のようなプロパティや、漢字の上にふりがなを追加する`<ruby>`タグなどを発見しました。`<ruby>`は漢字の上にふりがなをつける。

正直に言うと、これらのプロパティを以前に使ったことはなく、ほぼ存在すら忘れていました！しかし、詳しく調べたので、どのように実装できるのかをステップバイステップで説明します。

このテキストを使用します。

```html
<div class="step0">
  <h1>縦書(たてが)きのテキストの例(れい)</h1>
  <p>日本(にほん)の文化(ぶんか)はとても豊(ゆた)かです。</p>
</div>
```

## ステップ1：CSSで縦書きテキストを設定

まず、テキストを右から左、上から下に流れるようにします。CSSプロパティの`writing-mode: vertical-rl`を使うと、伝統的な日本語のレイアウトになります。

```css
.vertical-text {
  font-size: 2rem; /* フォントサイズを調整する */
  letter-spacing: 0.2em; /* 読みやすさを確保する */
  line-height: 1.5; /* 行間を調整する */
  text-orientation: mixed; /* ひらがなと漢字の混在を許可する */
  writing-mode: vertical-rl; /* 書き込みモードを縦書き、右から左に設定 */
}
```

```html
<div class="step1">
  <h1>縦書(たてが)きのテキストの例(れい)</h1>
  <p>日本(にほん)の文化(ぶんか)はとても豊(ゆた)かです。</p>
</div>
```

`writing-mode: vertical-rl`:テキストを縦書きにし、右から左へ流します。

`text-orientation: mixed`:漢字や他の文字を読みやすく保持します。

`font-size`,`letter-spacing`,`line-height`:読みやすさのために調整します。

## ステップ2：マージンで間隔を調整

縦書きのテキストでは、`margin-block`を使ってブロック間のスペースを調整できます。このCSSプロパティは、水平方向のテキストに対しては`margin-top`と`margin-bottom`、垂直方向のテキストに対しては`margin-left`と`margin-right`のように動作します。

```css
ruby rt {
  font-size: 0.7rem;
  margin-block: 1px; /* Adds some space between text and ruby text */
}
```

このプロパティは、テキストの流れ方向に基づいてスペーシングを調整するため、ウェブサイトで複数の言語を扱う場合に非常に便利です。

## ステップ3：<ruby>を使ってふりがなを追加

ふりがな（小さなひらがなやカタカナ）は、漢字の発音を示すために使われます。漢字の上にふりがなをつけるには、`<ruby>`タグと`<rt>`タグを使います。

ふりがなの付け方はこうだ：

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

`<ruby>`： 漢字を囲む。

`<rt>`： 漢字の上に表示されるふりがな。

`<rp>`： rubyの注釈の表示をサポートしていないブラウザのために、フォールバック括弧を提供する。

## ステップ4：すべてを組み合わせる

では、すべてをHTMLの完全な例にまとめてみましょう。これには、縦書きのテキスト・スタイル、スペーシング、そして伝統的な日本語の雰囲気を出すためのふりがなが含まれている：

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

これで完成です！いくつかのCSSプロパティとHTMLタグを使うだけで、テキストをより伝統的な日本語の読み方に変換することができます！

実験を楽しむ！

[CodePenの全例](https://codepen.io/YuriDevAT/pen/poMawje)を参照。

## 参考資料

- [MDNによるtext-orientation](https://developer.mozilla.org/ja/docs/Web/CSS/text-orientation)
- [MDNによるwriting-mode](https://developer.mozilla.org/ja/docs/Web/CSS/writing-mode)
- [MDNによるmargin-block](https://developer.mozilla.org/ja/docs/Web/CSS/margin-block)
- [MDNによるruby](https://developer.mozilla.org/ja/docs/Web/HTML/Element/ruby)
- [MDNによるrp](https://developer.mozilla.org/ja/docs/Web/HTML/Element/rp)
- [MDNによるrt](https://developer.mozilla.org/ja/docs/Web/HTML/Element/rt)

---

この記事は、[HTMHELL Advent Calendar 2024](https://www.htmhell.dev/adventcalendar/)の一部として、[HTMHELL](https://www.htmhell.dev/adventcalendar/)に掲載されたものです。

[HTMHELLでのオリジナル記事。](https://www.htmhell.dev/adventcalendar/2024/12/)
