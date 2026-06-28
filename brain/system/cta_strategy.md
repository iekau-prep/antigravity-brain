# cta_strategy.md
Updated: 2026-06-29
Status: Active

=============================

■ 概要

=============================

⸻

Purpose

本書は、

Constitutionで定義された
CTA思想を、

System設計へ適用するための
CTA戦略を定義する。

CTAとは何かは、

Constitutionおよび
cta_role.mdが扱う。

本書は、

CTAを

どのような原則で設計し、

どのような順序で生成し、

どのようにdecision更新へ接続するか

を定義する。

⸻

Scope

本書が扱うもの

* CTA設計原則
* CTA生成戦略
* current decisionとの関係
* STATEとの関係
* driftとの関係
* decision continuityとの関係

本書が扱わないもの

* CTA思想
* CTA文言定義
* Module実装
* UI詳細

これらは
Constitution、
cta_role.md、
各Module設計を参照する。

⸻

Relationship

Constitution
↓
cta_role
↓
cta_strategy
↓
state_to_cta_connection
↓
decision_OS
↓
Implementation

⸻

Design Principle

CTA Strategyは、

「何を表示するか」

ではなく、

「どのdecision整理を優先して提示するか」

を定義する。

CTAは、

常に

current decision

↓

STATE

↓

drift

↓

fixed_core

↓

次のdecision整理

という順序で設計する。

recommendation、

CV最適化、

導線最適化は行わない。

---

=============================

■ 基本思想（最重要）

=============================

CTAは、

❌ 次の画面

ではない。

---

⭕ 次のdecision update

である。

---

つまり：

CTAが作るものは、

❌ 行動

ではない。

---

⭕ decision更新可能状態

である。

---

構造：

current decision
↓

整理必要領域理解
↓

次decision提示

↓

decision更新

---

重要：

「何をするか」

ではなく、

「何を整理するか」

を扱う。

---

=============================

■ CTA設計原則

=============================

① 主CTAは1つ

---

理由：

・decision priority維持
・比較沼回避
・drift増殖回避
・本命形成維持

---

重要：

複数CTAを同格に置かない。

---

主CTA：

唯一のdecision trigger

---

サブ導線：

continuity補助

---

=============================

② 現在地起点

=============================

CTAは、

❌ 属性

❌ 将来予測

❌ AI推定

では決めない。

---

⭕ current decision

⭕ STATE

⭕ decision_state

のみを扱う。

---

つまり：

・今どこで止まっているか
・どこで迷っているか
・どこでdriftしているか
・何が未整理か

を見る。

---

=============================

③ recommendation禁止

=============================

CTAは、

❌ これを買う

❌ 次はこちら

❌ これが正解

❌ この物件がおすすめ

を行わない。

---

CTAが扱うのは、

⭕ decision整理

のみ。

---

例：

OK

・本命を整理する
・現実条件を整理する
・比較理由を整理する
・何を守りたいか整理する

---

NG

・この物件へ進む
・今契約する
・こちらを選ぶ

---

=============================

■ CTA生成戦略

=============================

CTAは以下順で決定する。

---

① current decision理解

↓

② STATE理解

↓

③ drift確認

↓

④ fixed_core接続確認

↓

⑤ 次decision提示

---

重要：

途中で行動提案へ変換しない。

---

=============================

■ continuityとの関係

=============================

CTAは、

❌ 継続管理

ではない。

---

⭕ decision continuity補助

である。

---

continuityとは、

以前の迷いを、

現在decision理解へ接続すること。

---

CTAは：

履歴を見る

ではなく、

今何を整理するか

へ戻す。

---

=============================

■ driftとの関係

=============================

CTAは、

❌ drift修正

を行わない。

---

⭕ drift理解可能化

を行う。

---

構造：

drift理解

↓

fixed_core再接続

↓

次decision

---

重要：

矯正禁止。

---

=============================

■ decision_OSでの扱い

=============================

decision_OSでは：

現在decision

↓

STATE

↓

主CTA

↓

decision更新

↓

終了

---

重要：

decision_OSは、

❌ CTA生成主体

ではない。

---

⭕ CTA適用主体

として扱う。

---

=============================

■ 終了位置

=============================

CTA責務終了：

ユーザーが、

「次に何を整理するか」

を理解した地点。

---

扱わない：

❌ decision成立

❌ 行動開始

❌ recommendation

❌ 本命決定

---

=============================

■ MVP固定ルール

=============================

・主CTAは1つ
・STATE増殖禁止
・recommendation禁止
・行動最適化禁止
・導線最適化禁止
・if文で説明可能
・current decision優先

---

=============================

■ NG

=============================

❌ 次画面設計
❌ CV導線
❌ dashboard導線
❌ AI推薦
❌ 行動管理
❌ 強制決断
❌ 完了誘導
❌ CTA複数化

⸻

Related Documents

Constitution

* constitution_experience.md

System

* cta_role.md
* decision_framework.md
* state_to_cta_connection.md
* decision_os_role.md
* decision_update_triggers.md

⸻

Change Policy

cta_strategyは、

Systemレイヤーの設計書である。

CTA思想は変更しない。

Constitutionおよび
cta_role.mdとの整合性を維持した上で、

CTA戦略のみ改善対象とする。

---

=============================

■ 最終定義

=============================

cta_strategyとは、

👉 current decision を理解し、

👉 今必要なdecision整理を1つだけ提示し、

👉 drift・fixed_core・STATEを通して、

👉 decision更新可能状態へ戻すための、

decision update strategyである。

---

## 一言でいうと

👉 「次に行く場所ではなく、
次に整理するdecisionを決める戦略」
