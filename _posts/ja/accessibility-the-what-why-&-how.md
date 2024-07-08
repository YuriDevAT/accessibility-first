---
title: 'アクセシビリティ 何を、なぜ、どのように'
excerpt: 'ウェブ・アクセシビリティは、幸いにも最近ますます注目されるようになってきました。しかし、ウェブ・アクセシビリティが実際にどのようなもので、なぜ重要なのかを知らない人はまだ多い。このトピックを紹介することで、アクセシビリティに関する全体的な理解を深めましょう。。。'
coverImage: '/assets/blog/en/accessibility-the-what-why-&-how/cover.png'
date: '2022-10-09T05:35:07.322Z'
tags: 'Blog'
category: 'Accessibility'
author:
  name: 'Julia Undeutsch'
  picture: '/assets/authors/julia.jpg'
ogImage:
  url: '/assets/blog/en/accessibility-the-what-why-&-how/cover.png'
ogPost:
  url: ''
---

ウェブアクセシビリティは最近ますます注目を集めてきました。しかし、多くの人々はウェブアクセシビリティが何であり、なぜそれが重要なのかをまだ理解していません。

このトピックについて何、なぜ、どのようにの観点からご紹介し、アクセシビリティについて全体的な理解を深めましょう。アクセシビリティとは**何**か、**なぜ**重要なのか、そして**どのように**アクセシブルなデザインを実現できるのかを見ていきます。

## アクセシビリティとは何か

[ウィキペディア](https://en.wikipedia.org/wiki/Accessibility 'Wikipedia Definition Accessibility')によると、

> ウェブアクセシビリティは、身体障害者、状況的障害者、帯域幅や速度に制約のある社会経済的制約のある人々が、ワールドワイドウェブのウェブサイトと相互作用したりアクセスしたりするのを妨げる障壁がないことを確保する包括的な実践です。サイトが正しく設計、開発、編集されると、より多くのユーザーが情報と機能に平等にアクセスできるようになります。

障害には様々な種類があります。車椅子を利用している人々のように認識しやすいものもあれば、聴覚障害者のように見えないものもあります。また、難聴や低視力などの年齢に関連した障害や、腕の骨折や赤ちゃんを抱えていることによる一時的な障害もあります。

「#a11y」というハッシュタグを見たことがあるかもしれませんが、これはアクセシビリティという単語の短縮版です。これは、「a」という文字と「y」という文字の間に11文字があるためです。個人的には、この短縮方法はかっこよく、ハッシュタグとしても使いやすいと思います。

## なぜ重要なのか

> ウェブの力はその普遍性にあります。障害の有無にかかわらず、誰もがアクセスできることが重要な側面です。

_Tim Berners-Lee, W3Cディレクターおよびワールドワイドウェブの発明者_

なぜウェブサイトをアクセシブルにする必要があるのでしょうか？まず第一に、すべての人に平等に情報にアクセスできるようにすることは、単に正しいことだからです。また、ウェブサイトをアクセシブルにすることが[法律で要求される](https://www.w3.org/WAI/policies/ 'Web Accessibility Laws & Policies')場合もあります。ここオーストリアでは、大学のような公共部門は、WCAG 2.1 AA[ウェブコンテンツアクセシビリティガイドライン](https://www.w3.org/WAI/standards-guidelines/wcag/)に基づいてウェブサイトを100％アクセシブルにすることが義務付けられています。

人類の10％から20％は何らかの障害を持っています。そのすべてがインターネットの利用能力に影響を与えるわけではありません。例えば、脚に麻痺がある人などです。ウェブアクセシビリティに関して最も重要な障害は、目、耳、手、および脳の障害です。

障害を持つ人々は、ウェブと対話するために支援技術を使用します。これらの技術を使用してすべての人がウェブを利用できるようにするために、私たちの役割は、これらのデバイスによって適切に認識されるようにウェブサイトを構築することです。例えば、スクリーンリーダーは、コードがアクセシビリティを考慮して書かれていない場合、機能しません。

インターネットは、新しい可能性の世界を開きました。特に視覚に関しては、障害を持つ人々にとって非常に有益です。情報は今やほとんどすべてのトピックについて簡単に入手できます。

視覚障害者は、必要な情報を得るために他人に頼る必要がなくなり、数年前には考えられなかった新たなレベルの自立を達成できるようになりました。

最後に、サイトが障害を持つ人々にとってよりアクセスしやすくなると、すべての人にとってよりアクセスしやすくなります。これは、セマンティックHTMLタグを使用し、高い色のコントラストを持つデザインを採用するなど、ウェブサイトの構造を整えることによって達成されます。これにより、障害を持つ人々にとってのアクセシビリティが向上すると同時に、全体的なユーザーエクスペリエンスも向上します。

さらに、検索エンジン最適化（SEO）も改善されます。

> 私たちは、すべての障害を持つ人々にすべてのものをアクセス可能にする必要があります。

_スティーヴィー・ワンダー、2016年グラミー賞授賞式、アメリカのシンガーソングライター、ミュージシャン、および音楽プロデューサー_

## アクセシブルな方法で開発するには

ここでは、ウェブサイトをアクセシブルにする方法の概要を説明します。今後数週間にわたって、各カテゴリに関する詳細な情報を含む記事を書いていく予定です。

世界中のウェブコンソーシアムである[W3C](https://www.w3.org/WAI/)は、ウェブサイトのアクセシビリティに関する作業グループを維持し、そのための標準を公開しています。これらの標準は[WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)と呼ばれます。これは、プロジェクトでアクセシビリティを扱うための優れたリソースです。

## どのようにウェブやウェブサイトをよりアクセシブルにできるか？

いくつかのポイントを見ていきましょう。これらを守れば、すぐに100％アクセシブルなウェブサイトになるわけではありませんが、良いスタート地点となるでしょう。

### 可能な限りセマンティックHTMLを使用しましょう！

`<header>`、`<main>`、`<footer>`を使用することで、すでにウェブサイトの基本的な構造が整い、スクリーンリーダーユーザーがサイト内を見つけやすくなります。

[セマンティックHTMLタグのリスト](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)は長いです。できるだけ多く含め、`<div>`や`<span>`はスタイルのためだけに使用しましょう。これらはセマンティックではないためです。
既存のコードを壊さないために、[aria (Accessible Rich Internet Applications)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)は良い（一時的な）解決策を提供します。これにより、スタイルを壊すことなく、すでに組み込まれている`<div>`タグをセマンティックタグに置き換える必要がなくなります。

例えば、[aria roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)は、以下の例のようにセマンティックタグの役割を担います。リンクやボタンなどのインタラクティブな要素や、画像やビデオなどの[マルチメディア要素](https://developer.mozilla.org/en-US/docs/Web/Media/Formats)は、スクリーンリーダーユーザーによってよりよく理解されるために、より詳細な説明（例：代替テキストの使用）が必要です。

特定の情報を示すために色だけを使用せず、十分な色のコントラストを使用しましょう。視覚障害者は、例えば背景色とテキストの色のコントラストを見るのが難しい場合があります。

## a11y問題を特定して修正する方法？

[axe](https://www.deque.com/axe/)のような自動化ツールがあり、すでに約30％の問題を発見できます。ウェブサイトをチェックするために使用できる最も一般的なスクリーンリーダーは、MicrosoftとmacOSに既にインストールされている[NVDA](https://www.nvaccess.org/download/)やVoiceOverです。

他にも、[Wave](https://wave.webaim.org/)、[Taba11y](https://chrome.google.com/webstore/detail/taba11y/aocppmckdocdjkphmofnklcjhdidgmga)、[Color contrast Checker](https://webaim.org/resources/contrastchecker/)などのツールがあります。これらについては、他の記事で詳しく説明します。

ウェブページをマウス、キーボード、スクリーンリーダー、点字ディスプレイユーザーのために100％アクセシブルにするならば、アクセシビリティのほとんどがカバーされます。したがって、これが私たち全員の目標であるべきです。

## 結論

すべての人がアクセシブルなウェブサイトやアプリケーションを開発し、早い段階で取り組むことで、最初からアクセシブルにデザインすることができます。これにより、「アクセシビリティは醜いデザインを意味する」や「非常に高価である」といった神話や誤解のために企業がアクセシビリティを避けることが難しくなります。

アクセシブルなデザインを支持する姿勢を示し、少しでも貢献して、障害を持つ人々にとってより良い世界を作るために努力しましょう。