brain

Updated: 2026-06-28

Status: Active

Brain 全体構成

目的

brain は、

家買う予備校における思想・設計・実装・運用を整理するための知識基盤である。

本ディレクトリは、

AI、Builder、Product Owner が共通の思想を参照しながら開発を進められる状態を維持することを目的とする。

重要：

brain は実装仕様書ではない。

思想・設計・運用の基盤である。

⸻

読み始める順番

新しく参加した Builder は、以下の順で理解する。

① constitution/

最上位思想（憲法）

↓

② system/

プロダクト全体の思想・責務

↓

③ core/

Builder共通ルール・基本原則

↓

④ design/

UX・UI・体験設計

↓

⑤ learning/

Builder・AI の学習資料

⸻

ディレクトリ構成

constitution/

家買う予備校の最上位思想。

変更には最も高いレビュー基準を適用する。

⸻

system/

各システム・各moduleに共通する思想・責務を定義する。

⸻

core/

Builder が日常的に参照する基本ルール。

出力形式、役割、契約などを扱う。

⸻

design/

UI、UX、体験設計、画面責務を整理する。

⸻

learning/

Builder が理解を深めるための教材・学習順序を整理する。

⸻

基本原則

思想は Constitution を優先する。

System は Constitution を前提として設計する。

Core・Design・Learning は Constitution および System に従う。

下位レイヤーは上位思想と矛盾してはならない。

⸻

Brain 構造

brain/
├── constitution/
│    └── 最上位思想（憲法）
│
├── system/
│    └── プロダクト思想・責務
│
├── core/
│    └── Builder共通ルール
│
├── design/
│    └── UX・UI設計
│
└── learning/
     └── 学習資料

⸻

重要

Brain は知識を増やす場所ではない。

家買う予備校というプロダクトの思想・設計・実装・運用が、一貫した原則のもとで維持されるための基盤である。
