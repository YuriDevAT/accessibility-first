---
title: 'WCAGを満たすだけでは不十分な理由'
excerpt: 'European Accessibility Actについて、誰もが、そして職場のお母さんも、一体何をすればいいのか、明確な指示を待ち望んでいます。仕事のノートパソコンに雨を降らせるつもりはないが、 ...'
coverImage: '/assets/blog/en/why-fulfilling-the-wcag-is-not-enough/cover.png'
date: '2024-01-16T10:35:07.322Z'
tags: 'Blog'
category: 'Accessibility'
author:
  name: 'Laura Wissiak'
  picture: '/assets/authors/laura.jpg'
ogImage:
  url: '/assets/blog/en/why-fulfilling-the-wcag-is-not-enough/cover.jpg'
ogPost:
  url: 'https://www.laura-wissiak.com/blog/why-fulfilling-the-wcag-is-not-enough'
readingTime: 3
---

European Accessibility Act「EAA」について、誰もが、そして職場のお母さんも、一体何をすればいいのか、明確な指示を待ち望んでいます。仕事のノートパソコンに雨を降らせるつもりはないが、たとえウェブ・コンテンツ・アクセシビリティ・ガイドラインにセミコロンまで忠実に従ったとしても、安全である保証はない。

それにはちゃんとした理由がある： **アクセシビリティはチェックリストではありません！**

それは何を意味するのか？アクセシビリティは目的を達成するための手段であるという事実を理解してほしいです。私たちが実際に目指しているのは、インクルージョンである。単に要件を満たすことでもなく、パフォーマンス的な統合でもない、真の統合です（障害者の権利の文脈における「統合」という言葉は取り消されています）。

**WCAGの基準を100％チェックできたとしても、ウェブサイトが100％アクセシブルであるとは限りません。**

> As we often focus on Success Criteria, the context of the Principles and Guidelines is missed. They can guide us to good, accessible solutions already. When people say “go beyond WCAG” they typically mean “follow best practice principles & guidelines” which are also in WCAG.

「私たちはしばしば成功基準に焦点を当てますが、原則とガイドラインの文脈は見逃されています。これらは、すでにアクセシブルな良い解決策を導くことができる。人々が「WCAGを超える」と言うとき、それは通常、WCAGにもある「ベストプラクティスの原則とガイドラインに従う」という意味です」

_『WCAG 2：Guidelines and Guardrails』Eric Eggert_

## しかし、なぜWCAG2.2や ヨーロッパ規格301549だけでは不十分なのでしょうか？

### アクセシビリティは文脈の中で意味を持たなければなりません。

- 例えば 家具店にはたくさんの商品画像があります。もちろん、800ユーロもするガーデンテーブルを購入する前に、あらゆる角度からそのテーブルがどのように見えるかを知りたいはずです。それぞれの画像に[画像の説明](https://accessibility.huit.harvard.edu/describe-content-images)を書くために時間と労力を費やすことは、会社にとって意味のあることでしょうか？そしてもっと重要なことは、それは意味があるの でしょうか？[HTMLのalt属性に記述されたテキスト](https://webaim.org/techniques/alttext/)によって、スクリーンリーダーのユーザーは製品についてよりよく理解できるでしょうか、それとも20枚の画像すべてに同じテキストがコピーペーストされるだけでしょうか？この場合、商品説明はテキストに置き換えることができ、結果は同じになります：寸法、カラーオプション、素材、およびcoとともに、画像の代替がその場で提供されます。
- はい、技術的には、すべての画像にaltテキストを追加することは、[非テキストコンテンツのWCAG 2.2の成功基準](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)を満たすでしょう。しかし、商品説明にすでに知りたいことがすべて詳しく書かれているのであれば、この文脈で意味があるのでしょうか？たとえそれがレベルAの基準だとしても、これを変更することでユーザーにメリットがあるでしょうか？チェックアウトの流れにおいて、より重要な障壁にリソースを集中させるべきでしょう。

### ユーザー・ジャーニー全体がバリアフリーでなければなりません。

- WCAGとENは、ウェブページ間の遷移に関するガイダンスをほとんど提供していません（1つだけ明らかな例外があります： [アニメーション](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)は、前庭障害や内耳障害の反応を引き起こす可能性があるためです）。
- ウェブサイトがアクセシブルであるためには、個々のウェブページは、互いに分離されているのではなく、互いに関連して考慮されなければなりません。

### 障害は動的なものです！

- そして、私たちは常に新しいベストプラクティスを学んでいます。だからこそ、WCAGは常に進化し続けているのです！
- EAAは、アクセシビリティを決定するのは標準ではなく、障害者自身であることを認識しています。

ウェブ・アクセシビリティは、障害者の自己決定を促進する最も簡単な方法である。今日では、基本的にオンラインで何でもできます！新居のインターネット契約をセットアップするために誰とも話さなくていいというのは、誰もが嫌がる大人になってからの中心的な仕事だが、これは本当に素晴らしいことだ。今まで先延ばしにしていた医者の予約をオンライン予約ツールで夜11時に取ります。食料品を注文すれば、アパートのドアまで届けてくれます！
