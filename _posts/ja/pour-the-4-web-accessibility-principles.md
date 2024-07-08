---
title: 'POUR - ウェブ・アクセシビリティの4原則'
excerpt: 'ワールド・ワイド・ウェブ・コンソーシアムのウェブ・アクセシビリティ・イニシアティブ（W3C WAI）が制定したウェブ・コンテンツ・アクセシビリティ・ガイドライン（WCAG 2.0）に基づき、ウェブサイトやウェブ・アプリケーションがアクセシブルであると認定されるには、コンテンツが以下の4つの原則（頭文字をとってPOURと呼ばれる）を満たしている必要があります。。。'
coverImage: '/assets/blog/en/pour-the-4-web-accessibility-principles/cover.png'
date: '2022-07-17T07:35:07.322Z'
tags: 'Blog'
category: 'Accessibility'
author:
  name: 'Julia Undeutsch'
  picture: '/assets/authors/julia.jpg'
ogImage:
  url: '/assets/blog/en/pour-the-4-web-accessibility-principles/cover.png'
ogPost:
  url: 'https://dev.to/yuridevat/pour-the-4-web-accessibility-principles-edp'
---

ウェブサイトやウェブアプリケーションが、[World Wide Web Consortium's Web Accessibility Initiative (W3C WAI)](https://www.w3.org/WAI/)が確立した[Web Content Accessibility Guidelines (WCAG 2.0)](https://www.w3.org/TR/WCAG20/)に基づいてアクセシブルであると認定されるためには、コンテンツが以下の4つの原則（頭字語のPOURを形成する）を満たす必要があります：

- **P**erceivable（知覚可能）
- **O**perable（操作可能）
- **U**nderstandable（理解可能）
- **R**obust（堅牢）

## 1. 知覚可能

ウェブコンテンツの出力は、少なくとも1つの生物学的感覚（視覚、聴覚、触覚など）を通じてアクセスできる**必要があります**。

### 1.1. 知覚する方法

ほとんどの人はインターネット上の情報を視覚的に知覚しますが、これは視力が良好な人にとって有効です。多くのウェブデザイナーや開発者は比較的若く、健常者です。そのため、彼らは自分たちに似た人々のためにウェブをデザインすることが多いのです。時には、他の人がコンテンツを見られないことに気づかず、そのために全ての人に情報を知覚できるように設計していないこともあります。

視覚障害者や盲目の人々がウェブコンテンツを聞くことができるように、スクリーンリーダーが書かれた情報を合成音声に変換できるようにコードを書くことが重要です。ウェブコンテンツを聞くことは、ウェブから情報を知覚する次に一般的な方法です。

スクリーンリーダーソフトウェアユーザーにとって、聞こえるウェブコンテンツを理解しやすくするためのコードを書けば、視覚・聴覚障害者が使用する点字デバイスにも対応できる可能性が高くなります。スクリーンリーダーはデジタルテキストを点字に変換し、ほぼ同じ機能を提供します。更新可能な点字は、従来の紙に印刷された点字と同様に、文字や記号のアルファベットに配列された盛り上がった点で構成されています。

### 1.2. デジタルテキストはユニバーサルフォーマット

デジタルテキストは、ウェブコンテンツを知覚可能にするためのユニバーサルウェブアクセシビリティフォーマットと呼べます。したがって、ウェブデザイナーや開発者として、全ての人が知覚できるようにコードを書くことが我々の義務です。誰かがウェブサイトの画像や色を見たり、音声を聞いたりできない場合、コンテンツは存在しないのと同じです。

テキストを通じて全ての情報コンポーネントを知覚可能にすることが重要です。つまり、適切な代替テキストを使って画像にタグを付け、動的なインタラクションをARIA（Accessible Rich Internet Applications）を使ってアクセシブルにし、タブが展開または折りたたまれることを示すなどの対策を講じる必要があります。

コンテンツと機能を視覚、聴覚、触覚でアクセス可能にすることで、ユーザーがウェブサイトで何を見つけるかを理解できるようにしましょう。

## 2. 操作可能

ユーザーは、使用する入力デバイスに関わらず、ウェブコンポーネントにナビゲートし、使用し、ナビゲートし、終了できる**必要があります**。

### 2.1 操作方法

全てのユーザーがマウスやタッチパッドを使用できるわけではありません。開発者の義務は、他の入力デバイス（キーボード、タッチスクリーン、音声認識ソフトウェアなど）でも動作するようにコードを書くことです。

機能が動作しない場合、一部のユーザーはウェブコンポーネントを使用できなくなります。キーボードユーザーは、マウスを使わずにJavaScriptのドロップダウンメニューをナビゲートし、そのメニュー内のリンクを選択できる必要があります。マウス機能（ホバーイベントなど）も、タッチスクリーンやキーボードなどのデバイスで有効にして、マウスユーザーと同じ体験を提供する必要があります。

### 2.2 キーボードはほぼユニバーサル入力デバイス

コードをマウスだけでなくキーボードでもアクセス可能にすると、他の多くのデバイスでもアクセスしやすくなります。

`onmouseover`や`ondblclick`のような特定のデバイスイベントを使用するのではなく、`onfocus`や`onselect`のような独立したイベントハンドラを使用するようにしてください。場合によっては、両方が必要なこともあります。

## 3. 理解可能

ユーザーは、ウェブサイト上の全てのコンテンツやインターフェイスを理解できる**必要があります**。

### 3.1 理解する方法

マークアップで言語を指定すること（例： `<html lang="en">`）は重要です。これにより、スクリーンリーダーが予想される発音でテキストを読み上げ、ユーザーがコンテンツを理解しやすくなります。ページ内で他の言語の表現を使用する場合、その部分が独自の言語で囲まれていることを確認してください（例： `<span lang="de">Guten Tag!</span>`）。

ユーザーインターフェイスとインタラクションは理解可能である必要があります。これを確保するために、複数のページでウェブサイトの外観と操作感を一貫させることが重要です。たとえば、メインナビゲーションの同じリンク、フォームコントロールの同じ動作、カスタムウィジェットなどです。

### 3.2 コンテンツを理解しやすくするためのベストプラクティス

一部の人々は読み困難、障害、または認知障害に苦しんでいるため、長いまたは馴染みのない言葉やフレーズ、複雑な文の構造、または行間が狭すぎるテキストを避けてください。

全ての人が読みやすいフォント（一般的なセリフやサンセリフフォントなど）を使用し、行間が狭すぎないようにしてください。段落内のテキストを揃えた文章の使用を避けてください。

フォームを使用する際は、ユーザーがフォームを正常に完了するための十分な情報を提供してください。必須フィールドや特定のパスワード規則がある場合、フォームを送信できないときにユーザーに何が間違っているのかを知らせてください。これは、エラーが発生したフィールド、具体的なエラー内容、またはエラーを通知するためにフォーカスを入力フィールドに即座に送ることで行うことができます。

一部の人が全く読めない場合もあるため、画像、音声、ビデオなどの代替形式を提供すると良いでしょう。これは多くの作業に思えるかもしれませんが、それに依存するユーザーはきっと感謝するでしょう。

## 4. 堅牢

ウェブサイトやウェブアプリケーションが堅牢と見なされるためには、ユーザーがどのブラウザやコンピュータシステム、補助技術を使用しても、ウェブサイトと対話できる**必要があります**。

### 4.1 堅牢である方法

異なるスクリーンリーダーは、コンテンツを異なる方法で処理します。また、使用するブラウザによっても異なります。
全てのブラウザとプラットフォームをサポートすることは不可能です。したがって、どのブラウザをサポートし、どのブラウザをサポートしないか（ユーザーベースが小さい、または特定のブラウザバージョンに十分な機能がないなどの理由で）を決める必要があります。

### 4.2 ウェブサイトを堅牢にするためのベストプラクティス

堅牢性を達成する最良の方法は、セマンティックHTMLを使用し、必要に応じてARIAを使用して、インタラクティブコンポーネントの名前、役割、および値を指定し、スクリーンリーダーユーザーに必要な情報を提供することです。