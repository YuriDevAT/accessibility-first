---
title: '効果的なシミュレーション・テストでカラー・コントラスト・エラーを防ぐ'
excerpt: '特に、視覚障害者がウェブ上の色やコンテンツをどのように認識しているかを正確に把握していない場合はなおさらです。Google Chrome DevToolsは、このような視覚障害をシミュレートすることで、アクセシブルな色やフォントの組み合わせを選択するためのシンプルなソリューションを提供します。。。'
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

画面上のテキストを読もうとしたことがありますか？しかし、色の選択が原因で読みづらいと感じたことはありませんか？また、非常に明るい環境や薄暗い環境で画面上のコンテンツを認識するのに苦労したことはありませんか？

約3億人が色覚異常を持ち、約2億5300万人が視覚障害を持っています。これらの状況に毎日直面しています。これらの状況は、しばしば不適切なデザインの決定から生じ、最初から避けることができたかもしれません。

さまざまな視覚障害に対応するデザインは、デザイナーや開発者にとって挑戦となります。特に、異なる視覚障害を持つ人々がウェブコンテンツをどのように知覚するかを完全に理解していない場合です。

Google Chromeは、デザイナー、開発者、そしてテキストや色の知覚に関する知識を深めたいと考える誰にでも、異なる色覚異常でデザインや既存のウェブサイトを表示する簡単な方法を提供します。

実装されたエミュレーションを通じて、他の人の目を通して見る効果を作り出し、製品がどのように知覚され、視覚的に理解されるかをよりよく理解することができます。開発中にこれらの結果を継続的にチェックすることで、将来の不要な動作を防ぎ、視覚障害者にとって製品を可能な限り最初からアクセス可能にすることができます。

## 色のコントラスト：それが何であり、製品の開発において何を意味するのか

色のコントラストは、2つ以上のコンポーネント間のコントラストの比率です。アクセシブルであるためには、前景情報の色と背景の色の間に十分なコントラストが必要です。

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/img-4.png)
_S出典：[WebAIM Million Report](https://webaim.org/projects/million/). 最終更新日：2024年3月28日_

[WebAIMの年次調査](https://webaim.org/projects/million/)が示すように、不十分な色のコントラストはウェブ上で最も一般的に自動的に特定されるアクセシビリティエラーです。テストされたホームページの80％以上が不十分な色のコントラストを持っています。

コントラストと色は、アクセシビリティに関する重要な要素です。ウェブページのコンテンツは、視覚障害の有無に関係なく、全てのユーザーに知覚可能でなければなりません。

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/img-5.png)
_出典：[WebAIM Million Report](https://webaim.org/projects/million/). 最終更新日：2024年3月28日_

以下は、表形式の結果です。WCAG 2エラーの最も多いホームページ、エラーの種類別および影響を受けるホームページの割合：不十分な色のコントラスト 81％、画像の代替テキストの欠如 54.5％、フォーム入力ラベルの欠如 48.6％、リンクが空/リンクテキストなし 44.6％、ボタンが空/ボタンテキストなし 28.2％、ドキュメント言語/ホームページ言語の欠如 17.1％。

良好な色のコントラストに関する世界的な一貫した理解を得るために、[WAIワーキンググループ](https://www.w3.org/WAI/about/groups/)は、[色のコントラストの公式](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio)を開発しました。この値は、テキストの場合は4.5:1、アイコンやグラフィックスの場合は3:1です。これは、[WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/)のような色のコントラストチェッカーを使用して測定できます。この値を守ることで、中程度の視覚障害を持つ人々が補助技術を使用せずにテキストやグラフィックスを認識し、読むことができます。

## 異なるタイプの色覚異常

世界保健機関（WHO）によると、約3億人が何らかの色覚異常を持っています。一般的には色盲と呼ばれますが、色覚異常には様々な形態があります。次のセクションで詳しく説明します。最も稀なケースでは、全く色を知覚できません。多くの場合、色覚異常を持つ人々は赤、緑、青を完全には認識できません。

原因は様々で、遺伝的なものもあれば、糖尿病や多発性硬化症などの病気によるものもあります。老化も色覚異常の要因となることがあります。

これらの視覚障害は、しばしば色を区別するのを困難にし、色のコントラストの問題を悪化させます。

### 三色視（正常な視力）

正常な色覚では、全ての種類の錐体細胞が使用され、正常に機能します。正常な色覚の別名は三色視です。正常な色覚を持つ人々は三色視者と呼ばれます。

### 視力（ぼやけた視力）

視力は、最適な条件下で合意された基準に従って測定されます。この測定値は視力と呼ばれます。視野は、目が1か所に固定されているときに人が見える領域です。視力によっては、ぼやけて見える場合があり、小さなフォントサイズやコントラストが少ないために読みにくくなります。

### コントラスト感度

コントラストは、隣接する前景と背景領域の明るさの差によって引き起こされる視覚効果です。領域の一方（前景または背景）が明るく、他方が暗い場合、高コントラストとなります。明るさの値が類似している場合（例：白地にベージュ、暗い茶色地に黒）、コントラストは低くなります。コントラスト比が高いほど、隣接するコンポーネント間の境界を視覚的に識別しやすくなります。

### 1. 赤色盲（プロタノピア）

プロタノピアの人々は、赤い光に対する感度が低く、黒と様々な赤の濃淡、または暗い茶色と暗い緑、暗いオレンジ、暗い赤、暗い青/紫、黒などを区別しません。

### 2. 緑色盲（デュータノピア）

デュータノピアの人々は、緑の光に対する感度が低いです。中程度の赤の色合いと中程度の緑、ターコイズとグレーおよび中程度のピンク、または黄色と薄い緑、薄いピンクと薄いグレー/白を混同することがよくあります。

### 3. 青色盲（トリタノマリー）

トリタノマリーは非常に稀で、30,000～50,000人に1人の割合で発生すると推定されています。青い感度が低い人々は、青と黄色、紫と赤、および青と緑を区別するのが困難です。これらの人々にとって、世界は主に赤、ピンク、黒、白、グレー、ターコイズとして見えます。

### 4. 色盲（全色盲）

全色盲またはモノクロマティズムとは、完全な色盲を指します。これは非常に稀で、33,000人に1人の割合で発生します。全色盲またはモノクロマティズムの人々は、赤、緑、青の光をほとんど知覚できません。彼らの世界は、白黒テレビのように、主に黒から白への様々な灰色の陰影で構成されています。

## Chrome DevToolsでのシミュレーション

色覚異常の異なる形態を理解する最良の方法は、元の画像とウェブサイトのシミュレーション画像を比較することです。Chrome DevToolsは、デザイナーと開発者に自分のウェブアプリケーションでこれらの視覚障害の効果をシミュレートする能力を提供し、コントラストの問題を**特定し**、**修正する**のに役立ちます。何よりも、それらを**理解する**のに役立ちます！

視覚障害をシミュレートする方法：

### DevToolsを開く

- ツールバーの右上の**縦三点**をクリック
- **More Tools**をクリック
- **Developer Tools**をクリック

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/img-1.png)

### レンダリングオプションを開く

- デベロッパーツールバーの右上の**縦三点**をクリック
- **More Tools**をクリック
- **Rendering**をクリック

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/img-2.png)

次に、**視覚障害をエミュレート**のドロップダウンリストで次のオプションのいずれかを選択します：

- No Emulation (エミュレーションなし)
- Blurred Vision (ぼやけた視力)
- Reduced Contrast (コントラストの低下)
- Protanopia (No Red) (プロタノピア（赤なし）)
- Deuteranopia (No Green) (デュータノピア（緑なし）)
- Tritanopia (No Blue) (トリタノピア（青なし）)
- Achromatopsia (No Color) (アクロマトプシア（色なし）)

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/img-3.png)

ウェブページは、選択した視覚障害でシミュレートされ、新しい選択ごとに更新されます。

## 結果

1990年代に、任天堂は一見色が異なるだけの2つのゲームボーイゲームを発売しました。ポケモン赤版とポケモン青版のことです。ポケモンゲームは、それらに描かれているポケモンの色から名前が付けられています。赤いゲームにはリザードンが、青いゲームにはカメックスが、緑のゲームにはフシギバナが描かれており（ちなみにこれはヨーロッパでは発売されていません）、1年後にはピカチュウの追加バージョンが発売されました。

これは色の独立性とも呼ばれ、色覚異常の有無に関係なく、色を区別できなくてもポケモンに基づいてゲームを区別できるということです。

色とタイポグラフィの組み合わせを決定する前に、アクセスビリティの問題を回避するためにデザイナーや開発者が考慮すべきことを理解するために、特定の色覚異常を持つ人々にこれらのポケモンの明るい色がどのように影響するかを見てみましょう。

### 元の画像 - 三色視

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/original.png)
色覚異常をシミュレートしていない、第一世代のスターターポケモンのカラフルな画像。

### ぼやけた視力

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/blurred.png)
元の画像に対してぼやけた視力をシミュレートした効果。

### コントラストの低下

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/reduced.png)
元の画像に対してコントラストの低下をシミュレートした効果。

### プロタノピア（赤なし）

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/protan-no-red.png)
元の画像に対してプロタノピアをシミュレートした効果。

### デュータノピア（緑なし）

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/deuter-no-green.png)
元の画像に対してデュータノピアをシミュレートした効果。

### トリタノピア（青なし）

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/trita-no-blue.png)
元の画像に対してトリタノピアをシミュレートした効果。

### アクロマトプシア（色なし）

![](/assets/cover/preventing-color-contrast-errors-with-effective-simulation-testing/achrom-no-color.png)
元の画像に対してアクロマトプシアをシミュレートした効果。

## 結論

Chrome DevToolsを使用して視覚障害の様々な形態で元の画像を提示した後、以下のことが結論付けられます：

**色覚異常のシミュレーションは明確な違いを示します：** プロタノピアやアクロマトプシアなどの色覚異常をシミュレートすることで、影響を受ける個人がカラフルな画像を見る際の課題が明確になります。正常な視力の人々にとって明確に区別できる色が、色覚異常を持つ人々には区別しにくいことが分かります。

**コントラストは重要です：** シミュレーションは、前景と背景の間に十分なコントラストがあることが、視覚障害を持つ人々にとって情報を簡単に識別できるようにするために特に重要であることを示しています。

**アクセシビリティは重要です：** 画像の提示は、正常な視力だけでなく、広範な視覚障害にも対応するように設計されるべきです。アクセシビリティガイドラインを考慮し、画像が異なる視覚障害にどのように影響するかを定期的にテストすることで、デザイナーや開発者はコンテンツができるだけ多くの人にアクセス可能であることを保証できます。

全体として、Chrome DevToolsの視覚障害シミュレーションは、デジタルコンテンツのアクセス可能なデザインの重要性を強調し、全てのユーザーに情報が等しくアクセス可能であることを保証します。

## 資源

色覚異常に関する詳細(英語で) [https://www.colourblindawareness.org/colour-blindness](https://www.colourblindawareness.org/colour-blindness)

コントラストの最低基準の理解(英語で) [https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

コントラストと色のアクセシビリティ(英語で) [https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html](https://webaim.org/articles/contrast)

世界保健機関（WHO）の失明と視覚障害に関する重要な事実(英語で) [https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)

WebAIM Million Report 2024(英語で) [https://webaim.org/projects/million/](https://webaim.org/projects/million/)

W3 色のコントラスト値の定義(英語で) [https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio)

---

この記事は、2024年の[GAAD (Global Accessibility Awareness Day)](https://accessibility.day/)のために、[Fronta11y](https://www.fronta11y.org/)で元々ドイツ語で公開されました。

[Fronta11yでのオリジナル記事。](https://www.fronta11y.org/farbkontrastfehler-vorbeugen-mit-effektivem-simulationstesting/)
