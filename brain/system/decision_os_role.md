decision_os_role.md

Updated: 2026-06-28

Status: Active

Purpose

本書は、

decision_OS moduleの責務を定義する。

decision_OSの思想はConstitutionが扱う。

本書は、

decision_OSをSystem設計へ適用する役割のみを扱う。

⸻

Scope

本書が扱うもの

* decision_OS responsibilities
* current decision
* decision continuity
* state interpretation
* CTA application
* module boundary

本書が扱わないもの

* decision思想
* STATE思想
* fixed_core思想
* drift思想
* progression思想

これらはConstitutionを参照する。

⸻

Module Responsibilities

decision_OSは、

現在判断を整理し、

次のdecision更新へ接続するmoduleである。

責務

* current decisionを反映する
* STATEを解釈する
* decision continuityを維持する
* 次のCTAを現在判断へ適用する
* comparison結果を現在判断へ接続する
* decision更新を支援する

⸻

Current Decision

decision_OSが扱うのは、

現在の判断状態である。

例

* 保存
* 保留
* 見送り

これらは、

現在判断を表す状態として扱う。

⸻

Decision Continuity

decision_OSは、

過去を管理するmoduleではない。

過去の判断材料を、

現在判断へ接続する責務を持つ。

continuityは、

現在判断を理解するための補助として扱う。

⸻

STATE Interpretation

decision_OSは、

decisionからSTATEを解釈する。

STATEは保存しない。

current decisionから毎回算出する。

⸻

CTA

decision_OSは、

現在判断に対して、

次のdecision更新を支援するCTAを適用する。

CTAは、

recommendationではない。

decision更新の入口として扱う。

⸻

Design Rules

System設計では、

以下を満たす。

* recommendationしない
* dashboard化しない
* task管理しない
* current decisionを固定しない
* decision主体を変更しない
* 主CTAは1つのみ

⸻

Relationship

Constitution

↓

decision_framework

↓

decision_OS_role

↓

decision_OS module

↓

Implementation

decision_OS_roleは、

decision_OS moduleの責務を定義する設計書として扱う。

⸻

Related Documents

Constitution

* constitution_judgement.md

System

* decision_framework.md
* state_definition.md
* state_detection.md
* state_to_cta_connection.md
* comparison_role.md
* decision_update_triggers.md

⸻

Change Policy

decision_OS_roleは、

Systemレイヤーの設計書である。

思想変更は行わない。

Constitutionとの整合性を維持した上で、

decision_OS moduleの責務改善のみを行う。
