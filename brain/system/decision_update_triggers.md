decision_update_triggers.md

Updated: 2026-06-28

Status: Active

Purpose

本書は、

decisionがどのような出来事によって更新されるかを定義する。

decisionの思想はConstitutionが扱う。

本書は、

decision更新契機（Trigger）のみを扱う。

⸻

Scope

本書が扱うもの

* decision update trigger
* update event
* module event
* real-world event
* update設計

本書が扱わないもの

* decisionの思想
* fixed_coreの思想
* driftの思想
* continuityの思想
* recommendation境界

これらはConstitutionを参照する。

⸻

Decision Update Trigger

decision更新とは、

現在判断が新しい判断材料との接触によって変化することである。

更新対象の例

* current decision
* reason
* 本命感
* 許容
* 違和感
* 現実理解

decision更新は、

一度だけ発生するイベントではなく、

decision progressionの中で継続的に発生する。

⸻

Primary Triggers

decision更新の主要契機

* comparison
* property_reader
* loan_safety
* 内見
* 家族との対話
* fixed_core再確認
* 時間経過
* 再訪

これらは、

現在判断を更新可能な状態へ導く主要イベントとして扱う。

⸻

Secondary Triggers

補助的な更新契機

* 市場変化
* future reflection
* comfort
* discomfort
* 外部情報
* 生活環境変化

これらは、

decision更新を補助する契機として扱う。

⸻

Trigger Design Rules

System設計では、

以下を満たす。

* triggerはdecisionを更新する
* recommendationしない
* 判断主体を変更しない
* current decisionを更新可能にする
* continuityを阻害しない

⸻

Relationship

Constitution

↓

decision_framework

↓

decision_update_triggers

↓

module設計

↓

Implementation

decision_update_triggersは、

decision_frameworkで定義された構造に対し、

どの出来事がdecision更新を発生させるかを定義する。

⸻

Related Documents

Constitution

* constitution_judgement.md

System

* decision_framework.md
* state_definition.md
* comparison_role.md
* decision_os_role.md
* fixed_core_definition.md
* drift_detection.md

⸻

Change Policy

decision_update_triggersは、

Systemレイヤーの設計書である。

思想変更は行わない。

Constitutionとの整合性を維持した上で、

更新契機の追加・整理のみを行う。
