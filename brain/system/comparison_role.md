comparison_role.md

Updated: 2026-06-28

Status: Active

Purpose

本書は、

comparison moduleの責務を定義する。

comparisonの思想はConstitutionが扱う。

本書は、

comparisonをdecision設計へ適用する役割のみを扱う。

⸻

Scope

本書が扱うもの

* comparison responsibilities
* relative reason
* comparison flow
* decision update support
* module boundary

本書が扱わないもの

* comparison思想
* decision思想
* fixed_core思想
* drift思想
* recommendation境界

これらはConstitutionを参照する。

⸻

Module Responsibilities

comparisonは、

物件を評価するmoduleではない。

現在判断を整理するmoduleである。

責務

* relative reasonを整理する
* ユーザー本人によるcurrent decision更新を支援する
* fixed_core再確認を支援する
* decision driftを可視化する
* 本命形成を支援する
* decision_OSへ判断を戻す

⸻

Relative Reason

comparisonでは、

絶対評価ではなく、

相対的な迷いを扱う。

例

* 価格 vs 生活
* 広さ vs 通勤
* 安心 vs 挑戦

比較対象の優劣ではなく、

何を失いたくないかを整理する。

⸻

Decision Update Support

comparisonは、

decisionを決定しない。

判断材料を整理し、

current decisionの更新を支援する。

更新対象の例

* 保存
* 保留
* 見送り
* reason
* 本命感

⸻

Decision Flow

comparisonは、

decision_OSの途中工程として存在する。

構造

decision_OS

↓

comparison

↓

ユーザー本人によるcurrent decision更新

↓

decision_OS

comparison単独で完結してはならない。

⸻

Design Rules

System設計では、

以下を満たす。

* recommendationしない
* rankingしない
* score化しない
* AIが判断しない
* decision主体を変更しない
* comparison滞在を目的化しない

⸻

Relationship

Constitution

↓

decision_framework

↓

comparison_role

↓

comparison module

↓

Implementation

comparison_roleは、

comparison moduleの責務を定義する設計書として扱う。

⸻

Related Documents

Constitution

* constitution_judgement.md

System

* decision_framework.md
* decision_reason_design.md
* fixed_core_definition.md
* decision_os_role.md
* state_definition.md
* drift_detection.md

⸻

Change Policy

comparison_roleは、

Systemレイヤーの設計書である。

思想変更は行わない。

Constitutionとの整合性を維持した上で、

comparison moduleの責務改善のみを行う。
