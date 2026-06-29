# product_connection_design.md
Updated: 2026-06-29
Status: Core

Purpose

本書は、

家買う予備校における各product / module間の接続設計を定義する。

目的は、

機能を順番に接続することではなく、

decision更新が必要なタイミングで、

適切なmoduleへ接続する構造を作ることである。

扱う対象は、

* type_diagnosis
* purchase_motivation
* rent_vs_buy
* loan_safety
* external_property_search
* property_reader
* comparison
* decision_OS
* LINE

である。

---

Scope

本書が扱うもの

・Module Connection
・decision continuity
・current decision を中心とした接続
・Module間責務
・decision update routing

扱わないもの

・Module内部責務
・UI
・Implementation
・recommendation

---

つまり：

・迷い  
・本命形成  
・現実接触  
・drift  
・再整理  
・decision更新

を、

👉 必要な時に必要な補助を呼び出しながら
循環させること

を目的とする。

---

=============================

■ 基本思想（最重要）

=============================

① プロダクトは「decision更新モジュール」である

---

各プロダクトは、

❌ 独立機能  
❌ 順番消化型ファネル  
❌ 単発診断  

ではない。

---

⭕ 「decision更新補助モジュール」

である。

---

つまり：

・自己理解更新
・固定核整理
・現実補正
・本命形成
・drift補正
・比較整理

などを、

👉 必要な時に呼び出す構造

として扱う。

---

重要：

以前の構造：

❌ 上から順に進む階段構造

---

現在の構造：

⭕ decision loop構造

---

つまり：

external_property_search  
↓  
property_reader  
↓  
decision  
↓  
decision_OS  
↓  
comparison / drift補正 / 再整理  
↓  
decision更新  
↓  
再びproperty_reader / 現実整理 / 本命形成

という循環構造である。

---

② 接続の目的は「次のdecision精度を上げること」

---

接続とは、

❌ 遷移を増やすこと

ではない。

---

⭕ 次のdecision更新精度を上げること

である。

---

そのため：

・type_diagnosis
・purchase_motivation
・rent_vs_buy
・loan_safety

は、

👉 「補助decision更新レイヤー」

として存在する。

---

③ CTAは「次のdecision更新」を提示する

---

CTAは、

❌ 次の機能誘導  
❌ 回遊導線  
❌ funnel遷移  

ではない。

---

⭕ 「今必要なdecision更新イベント」

を提示する。

---

つまり：

・固定核drift
→ purchase_motivation

・現実不安
→ loan_safety

・本命未形成
→ comparison

・判断不足
→ property_reader

のように、

👉 「今どのdecision更新が必要か」

で接続する。

---

④ 無理につなげない

---

❌ 全部見せる  
❌ 常時全部接続する  
❌ 無理な回遊  

をしない。

---

必要なのは：

⭕ 「今必要なdecision更新だけを出す」

こと。

---

⑤ LINEは「decision continuity基盤」である

---

LINEは、

❌ メルマガ  
❌ 保存箱  
❌ リスト化手段  

ではない。

---

⭕ decision continuity layer

である。

---

役割：

・decision履歴保持
・本命変化追跡
・drift追跡
・比較履歴
・再開
・状態保持
・継続decision更新

---

つまり：

👉 「前回どう迷っていたか」

を継続できる構造。

---

=============================

■ 構造の再定義（最重要）

=============================

旧構造：

type  
↓  
motivation  
↓  
loan  
↓  
property  

---

これは：

❌ 順番ファネル構造

に近かった。

---

現在構造：

external_property_search（SUUMO等）
↓
property_reader
↓
decision（保存 / 保留 / 見送り）
↓
decision_OS
↓
comparison / drift補正 / 現実整理
↓
decision更新
↓
再読 / 再整理 / 次候補

---

👉 decision loop

として扱う。

---

重要：

property_readerは、

❌ 最終工程

ではない。

---

⭕ decision生成ハブ

である。

---

また：

decision_OSは、

❌ 管理画面

ではない。

---

⭕ 「現在どのように迷っているか」

を扱うdecision現在地OSである。

---

comparisonは、

❌ 比較機能

ではない。

---

⭕ 本命形成・迷い整理・decision更新装置

として扱う。

---

=============================

■ decision loop（最重要）

=============================

家買う予備校の中核構造は：

👉 decision loop

である。

---

構造：

external_property_search
↓
property_reader
↓
current decision
↓
decision_OS
↓
必要なsupport module
（comparison / loan_safety / purchase_motivation / rent_vs_buy）
↓
current decision更新
↓
再読 / 再比較 / 次候補
↓
current decision更新

---

つまり：

❌ 一度決めて終わり

ではない。

---

⭕ decisionは更新され続ける

として扱う。

---

=============================

■ 補助プロダクトの位置づけ（重要）

=============================

以下はすべて：

👉 decision補助レイヤー

である。

---

### type_diagnosis

役割：

👉 「迷い方drift補正」

---

例：

・比較しすぎ
・安全寄り
・他人基準
・理想暴走

など。

---

目的：

👉 「なぜ迷いやすいか」

を理解する。

---

### purchase_motivation

役割：

👉 fixed_core整理

---

例：

・必要条件
・十分条件
・購入動機
・優先順位
・譲れない軸

など。

---

目的：

👉 「何を本当に重視するか」

を再整理する。

---

### rent_vs_buy

役割：

👉 選択肢drift補正

---

例：

・そもそも買う意味
・賃貸比較
・機会コスト
・選択肢整理

など。

---

目的：

👉 「購入前提暴走」

を補正する。

---

### loan_safety

役割：

👉 現実drift補正

---

例：

・支払い不安
・生活圧迫
・将来不安
・成立性

など。

---

目的：

👉 「この条件は本当に成立するか」

を現実接触させる。

---

重要：

これらは：

❌ メイン導線

ではない。

---

⭕ 「decision更新時に必要に応じて呼び出される補助層」

である。

---

=============================

■ 各プロダクト接続設計

=============================

### ① external_property_search → property_reader（最重要）

目的：

👉 外で見つけた物件を、
「感覚」ではなく
「判断」へ変換する

---

構造：

external_property_search
↓
property_reader
↓
decision

---

重要：

必ず：

👉 「読む」

を挟む。

---

SUUMO等を見て：

❌ 良さそう

で終わらせない。

---

⭕ 「何をどう重く見るか」

へ変換する。

---

### ② property_reader → decision

目的：

👉 decisionを発生させる

---

decision：

・保存
・保留
・見送り

---

重要：

これは：

❌ お気に入り管理

ではない。

---

⭕ 本命形成更新

である。

---

### ③ decision → decision_OS

目的：

👉 現在のdecision状態を可視化する

---

decision_OSでは：

・現在の迷い
・本命状態
・decision drift
・比較停滞
・現実不安

などを扱う。

---

重要：

decision_OSは：

❌ 保存一覧

ではない。

---

⭕ decision現在地OS

である。

---

### ④ decision_OS → comparison

目的：

👉 「どこで迷っているか」

を整理する。

---

comparisonは：

❌ 勝敗決定

ではない。

---

⭕ 本命形成更新

である。

---

comparisonによって：

・相対reason整理
・優先順位整理
・本命形成
・drift整理

を行う。

---

comparison後：

❌ 必ず見送り

ではない。

---

⭕ 保存昇格 + 保留維持

も自然なdecision更新として扱う。

---

### ⑤ comparison → decision_OS

目的：

👉 更新後decisionを現在地へ戻す

---

comparisonは：

❌ 滞在場所

ではない。

---

⭕ 一時的decision整理装置

である。

---

そのため：

comparison後は、
必ずdecision_OSへ戻る。

---

### ⑥ decision_OS → property_reader

目的：

👉 再判断・再読・現実接触

---

例：

・やっぱり気になる
・もう一度読みたい
・比較後に再確認したい

など。

---

👉 decisionは何度でも更新可能。

---

### ⑦ decision_OS → purchase_motivation

目的：

👉 fixed_core drift補正

---

例：

・条件が増えすぎた
・優先順位逆転
・理想暴走
・動機ズレ

など。

---

CTA例：

👉 「何を優先するか整理する」

---

### ⑧ decision_OS → loan_safety

目的：

👉 現実成立性整理

---

例：

・支払い不安
・将来不安
・価格不安
・成立性不安

など。

---

CTA例：

👉 「この条件で成立するか整理する」

---

### ⑨ decision_OS → rent_vs_buy

目的：

👉 選択肢再整理

---

例：

・そもそも今買うべきか
・比較疲れ
・購入前提暴走

など。

---

CTA例：

👉 「この選択が本当に合っているか整理する」

---

### ⑩ decision_OS → external_property_search

目的：

👉 新候補探索

---

重要：

これは：

❌ 無限探索

ではない。

---

⭕ 「今のdecisionを踏まえた再探索」

として扱う。

---

=============================

■ LINE接続設計（最重要）

=============================

continuity layer の役割：

👉 decision continuity を維持すること

LINEは、

その実現手段の一例である。

---

保存対象：

・decision履歴
・比較履歴
・本命変化
・drift履歴
・条件履歴
・物件履歴
・fixed_core
・安全ライン

---

continuity layer により：

current decision を継続し、

過去の判断・変化・履歴を保持できる。

LINEはその実装候補の一つである。

へ進化する。

---

重要：

LINEの本質は：

❌ 保存

ではない。

---

⭕ 「前回どこで迷っていたか」

を継続することである。

---

=============================

■ STATE / CTAとの接続

=============================

使用するSystem：

- current decision
- state_detection
- state_to_cta_connection
- cta_role
- decision_update_triggers

---

目的：

current decision を起点として、

今必要なdecision更新を補助する

Moduleへ接続すること。

---

例：

fixed_core drift
→ purchase_motivation

---

現実不安
→ loan_safety

---

本命未形成
→ comparison

---

実務判断不足
→ property_reader

---

比較疲れ
→ rent_vs_buy

---

重要：

これは：

❌ 機能導線

ではない。

---

⭕ decision更新接続

である。

---

=============================

■ 接続ルール（超重要）

=============================

① 主CTAは1つ

---

② decision更新理由を優先する

---

③ 必要な時だけ接続する

---

④ 戻れる構造にする

---

⑤ current state を最優先する

---

⑥ decision continuity を壊さない

---

⑦ comparisonを滞在場所にしない

---

⑧ recommendation化しない

---

=============================

■ UXの理想状態

=============================

理想は：

👉 「自然にdecisionが更新され続ける状態」

である。

---

例：

「なんか良さそう」
↓
「ちゃんと読もう」
↓
「ここで迷ってるのか」
↓
「本命として残す？」
↓
「でもちょっと不安」
↓
「成立するか整理しよう」
↓
「やっぱり条件ズレてるかも」
↓
「固定核を整理し直そう」
↓
「比較したら本命が見えてきた」

---

つまり：

❌ 回遊

ではなく、

⭕ decision更新循環

を扱う。

---

=============================

■ NG構造

=============================

❌ 順番強制  
❌ funnel固定化  
❌ 回遊導線  
❌ 機能一覧化  
❌ dashboard化  
❌ recommendation化  
❌ comparison滞在化  
❌ decision管理UI化  
❌ 保存数競争  
❌ 「最適物件提示」  

---

理由：

家買う予備校は、

❌ 情報サービス

ではなく、

⭕ decision更新OS

だから。

---

=============================

■ Related Documents

=============================

Constitution

* Constitution Documents

System

* decision_loop_core_summary.md
* decision_framework.md
* current_decision.md
* state_definition.md
* state_detection.md
* state_to_cta_connection.md
* decision_update_triggers.md
* comparison_role.md
* decision_os_role.md

Module

* property_reader
* comparison
* decision_OS
* loan_safety
* purchase_motivation
* rent_vs_buy
---

=============================

■ Relationship

=============================

Constitution

↓

decision_loop_core_summary

↓

product_connection_design

↓

Module

↓

Implementation

---

=============================

■ 最終定義

=============================

product_connectionとは、

👉 decision生成  
👉 decision更新  
👉 drift補正  
👉 本命形成  
👉 現実接触  
👉 comparison整理  

を循環させながら、

👉 current decision を中心に、必要なModuleへ接続し、
decision continuity を維持するためのSystem設計書
---

## ■ 一言

👉 「プロダクトを繋ぐ」のではなく、
👉 「decision更新を循環させる」ための構造
