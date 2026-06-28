decision_framework

Updated: 2026-06-28

Status: Active

Purpose

本書は、

Constitutionで定義されたdecision思想を、

システム設計へ適用するためのフレームワークを定義する。

decisionの思想はConstitutionが扱う。

本書は、

その思想を各moduleへどのように適用するかを扱う。

⸻

Scope

本書が扱うもの

* decision progression
* decision update
* module responsibilities
* decision continuity設計
* decision loop設計
* decision境界
* module接続

本書が扱わないもの

* decisionの定義
* continuityの思想
* loopの思想
* fixed_coreの思想
* 現実との接触の思想

これらはConstitutionを参照する。

⸻

Decision Progression

家買う予備校では、

decisionは一度生成して終わるものではない。

各moduleを通して、

現在判断を更新し続ける構造として扱う。

decision progressionは、

現在判断を更新可能な状態へ導く設計フレームワークである。

⸻

Module Responsibilities

各moduleは、

decisionを生成しない。

各moduleは、

decision形成を支える責務のみを持つ。

例

* type_diagnosis
* purchase_motivation
* rent_vs_buy
* loan_safety
* property_reader
* comparison
* decision_OS

それぞれ異なる判断材料を扱い、

decision形成を支援する。

⸻

Decision Update

decision更新は、

一つのイベントではない。

判断材料との接触を通して、

現在判断が更新されることを指す。

更新契機の例

* 新しい知識
* 価値観との接触
* 現実との接触
* comparison
* fixed_core再確認
* 時間経過
* 再訪

⸻

Decision Continuity

decision continuityは、

Constitutionで定義された思想を、

module設計へ適用する構造である。

各moduleは、

前moduleの判断形成を壊さず、

次moduleで判断形成を再開できる状態を維持する。

⸻

Decision Loop

decision loopは、

判断形成を繰り返すためではない。

現在の自分として、

何度でも判断形成を再開できる構造を支える。

decision_OS、

comparison、

再訪、

チャネル設計は、

このloopを支える設計として扱う。

⸻

Decision Boundary

decisionは、

moduleが生成しない。

AIが生成しない。

recommendationによって生成しない。

decision主体は、

常にユーザー本人である。

Systemは、

この境界を維持する責務を持つ。

⸻

Design Rules

System設計では、

以下を満たす。

* recommendationしない
* decisionを固定しない
* current decisionを更新可能に保つ
* continuityを維持する
* loopを阻害しない
* 判断主体を変更しない

⸻

Relationship

Constitution

↓

decision_framework

↓

module設計

↓

Implementation

decision_frameworkは、

Constitutionとmodule設計を接続する中核設計書として扱う。

⸻

Related Documents

Constitution

* constitution_judgement.md

System

* state_definition.md
* decision_reason_design.md
* decision_update_triggers.md
* decision_os_role.md
* comparison_role.md
* fixed_core_definition.md
* drift_detection.md

⸻

Change Policy

decision_frameworkは、

Systemレイヤーの設計書である。

思想変更は行わない。

Constitutionとの整合性を維持した上で、

設計改善のみを行う。

⸻

Design Philosophy

decision_frameworkは、

Constitutionで定義された
判断思想を、

module設計へ変換する
最初のSystem設計書である。

以降のSystem文書は、

decision_frameworkを基点として
各責務を詳細化する。
