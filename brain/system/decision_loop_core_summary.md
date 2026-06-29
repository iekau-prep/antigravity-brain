decision_loop_core_summary.md

Updated: 2026-06-29

Status: Active

⸻

Purpose

本書は、

Constitutionで定義された
家買う予備校の思想を前提として、

System全体を横断する
decision loopの概要を整理する。

本書は、

思想を追加するものではない。

個別System設計へ入る前に、

decision loop全体の構造と
各System設計の位置付けを俯瞰し、

全体像を短時間で理解できるようにすることを目的とする。

⸻

Scope

本書が扱うもの

* decision loop全体像
* decision構造
* current decision
* fixed_core
* drift
* recovery
* decision continuity
* Module間の関係

本書が扱わないもの

* Constitution思想
* 各System詳細
* Module詳細
* 実装仕様

詳細は各設計書を参照する。

⸻

Relationship

Constitution
        ↓
System README
        ↓
decision_loop_core_summary
        ↓
Individual System Documents
        ↓
Module
        ↓
Implementation

本書は、

READMEで示したSystem全体構造を前提として、

decision loop全体を俯瞰する

Overviewとして機能する。

⸻

Summary

家買う予備校は、

「物件を探すサービス」

ではない。

「正解を提示するサービス」

でもない。

decisionが、

理解、

比較、

現実接触、

迷い、

再整理、

判断更新を繰り返しながら、

継続的に形成される構造を支える

Decision Loop OS

である。

⸻

Core Structure

decision loopは、

以下の循環を基本構造とする。

理解
↓
比較
↓
現実接触
↓
decision更新
↓
drift
↓
recovery
↓
current decision更新
↓
再びdecision

重要なのは、

最短で決定することではない。

納得できるdecisionを、

更新し続けられることである。

⸻

Core Concepts

decision loopを構成する中核概念は、

以下で構成される。

* decision
* current decision
* fixed_core
* reason
* comparison
* drift
* recovery
* decision continuity

これらは独立ではなく、

相互に接続しながら

decision形成を支える。

⸻

System Composition

decision loopは、

以下のSystem設計によって構成される。

Decision

* decision_framework.md
* decision_reason_design.md
* decision_update_triggers.md

State

* state_definition.md
* state_detection.md
* state_to_cta_connection.md
* state_to_action_routing.md

Module

* comparison_role.md
* decision_os_role.md
* product_roles.md
* external_property_search.md
* product_connection_design.md

Monitoring

* drift_detection.md
* fixed_core_definition.md

UX

* cta_role.md
* content_roles.md

各設計書は、

decision loopの一部のみを担当する。

⸻

Design Principle

decision loopでは、

以下を原則とする。

* recommendationを行わない
* AIが判断主体にならない
* current decisionを中心とする
* fixed_coreを判断材料として扱う
* driftを自然な変化として扱う
* recovery可能性を維持する
* decision continuityを維持する

⸻

Reading Order

decision loopを理解する場合は、

以下の順で読む。

Constitution
↓
README
↓
md_structure_tree
↓
md_loading_map
↓
decision_loop_core_summary
↓
対象System
↓
state_definition
↓
Module Documents
↓
Implementation

⸻

Rule

本書では、

新しい思想を追加しない。

概要だけを整理する。

詳細説明は、

各System設計書へ委譲する。

本書を仕様書として利用してはならない。

⸻

Change Policy

decision loop思想が変更された場合のみ更新する。

System詳細変更のみでは更新しない。

Constitutionとの整合性を最優先とする。

⸻

最終定義

decision_loop_core_summaryとは、

Constitutionで定義された思想を、

System全体の視点から要約し、

Decision Loop OSの全体像を一枚で理解するための

System Summaryである。
