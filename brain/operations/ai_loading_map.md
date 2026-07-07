ai_loading_map.md

Updated: 2026-07-08

Status: Active

⸻

Purpose

本書は、

家買う予備校におけるAIごとの設計書読み込みルールを定義する。

目的は、

各AIが担当する責務に応じて、

必要最小限の設計書のみを読み込み、

責務混線・過剰なコンテキスト・越権を防ぐことである。

本書は、

「どのAIが優れているか」

を定義するものではない。

各Roleが、

どの責務を理解するために、

どの設計書を参照するかを定義することを目的とする。

⸻

Scope

本書が扱うもの

* AIごとの読み込み範囲
* AIごとの読み込み順
* 責務ごとの参照ルール
* 必要最小限の読み込み原則
* AI間の読み込み境界

本書が扱わないもの

* Constitution思想
* System設計内容
* Module設計内容
* Implementation
* Prompt詳細
* AI Roleの責務

Roleそのものは、

ai_role_architecture.mdで定義する。

本書では、

Roleごとの読み込み方法のみを定義する。

⸻

Relationship

本書は、

AI Role Architectureを前提として、

各Roleが参照する設計資産を定義する。

責務階層は、

Constitution

↓

System

↓

AI Development Lifecycle Standard

↓

AI Role Architecture

↓

AI Loading Map

↓

Operation

↓

Implementation

とする。

AIは、

本書で定義された読み込み範囲を超えて、

設計書を参照しないことを原則とする。

⸻

Loading Principle

AIは、

設計書を多く読めば良いわけではない。

重要なのは、

現在担当している責務に必要な設計書だけを、

正しい順番で読むことである。

そのため、

本書では以下を原則とする。

* 必要最小限の読み込みを維持する
* Roleごとに責務を分離する
* 上位責務から順に理解する
* 担当外の設計書は原則読み込まない
* 読み込み量ではなく責務整合を優先する

AI Loading Structure

AIは、

すべての設計書を一括で読み込まない。

担当するRoleに応じて、

必要最小限の設計書のみを読み込む。

読み込みは、

以下の構造を基本とする。

Constitution

↓

System

↓

Role固有Loading

↓

対象Module

↓

Implementation

Roleごとに、

読み込み範囲は異なる。

一つのRoleが複数Stageを担当する場合は、

Role配下でStageごとのLoadingを定義する。

担当外の設計書は、

原則として読み込まない。

⸻

Builder Loading

Builderは、

Module設計を担当する。

標準読み込み順は、

README

↓

AI Development Lifecycle Standard

↓

AI Role Architecture

↓

AI Loading Map

↓

Builder Interpretation Guide

↓

Builder Operation

↓

Loading Mapで指定されたSystem

↓

Loading Mapで指定されたModule

Builderは、

Implementationを前提として設計しない。

また、

Constitutionを書き換えない。

Builderは、

構造・画面・体験を提案する責務のみを持つ。

⸻

Thought Audit Loading

思想監査（Review Role）は、

Review Stageを担当する。

標準読み込み順は、

README

↓

AI Development Lifecycle Standard

↓

AI Role Architecture

↓

AI Loading Map

↓

Review Operation

↓

Loading Mapで指定されたSystem

↓

Loading Mapで指定されたModule

思想監査は、

Builder成果物について、

Constitution整合性、

責務境界、

decision continuityのみを確認する。

設計変更、

改善提案、

Product判断、

Module実装、

UI提案は行わない。

⸻

Technical Audit Loading

技術監査は、

MVPでは担当Stageを持たない。

既存Stageで責務を吸収することを前提とし、

将来、独立したStageが必要となった場合のみ、

専用Loadingを定義する。

標準読み込み順は、

README

↓

security_policy

↓

対象Module

↓

Implementation

技術監査は、

Constitution思想や

UI設計を判断しない。

API、

Database、

Security、

Implementation整合のみを担当する。

⸻

Gatekeeper Loading

番人は、

Record Stageを担当する。

標準読み込み順は、

README

↓

release_mvp_checklist

↓

operation

↓

進捗資料

番人は、

思想やUIを判断しない。

工程、

停止条件、

進捗のみを管理する。

⸻

Observation Loading

Observationは、

Observation Stageを担当する。

標準読み込み順は、

README

↓

AI Development Lifecycle Standard

↓

AI Role Architecture

↓

AI Loading Map

↓

Observation Operation

↓

Loading Mapで指定されたSystem

↓

Loading Mapで指定されたModule

Observationは、

成果物を観察する。

設計変更、

改善提案、

Implementation追加、

Product判断は行わない。

⸻

Codex Loading

Codexは、

AI Role Architectureで定義されたRoleとして、

複数のStageを担当する。

LoadingはRole単位で管理し、

担当Stageごとに必要な設計書を切り替える。

担当Stage

・Design Validation
・Implementation
・Implementation Validation

---

Design Validation Stage

目的

Builder成果物が、

既存設計書と責務上整合するか確認する。

標準読み込み順

README

↓

AI Development Lifecycle Standard

↓

AI Role Architecture

↓

AI Loading Map

↓

Design Validation Operation

↓

Loading Mapで指定されたSystem

↓

Loading Mapで指定されたModule

Design Validationでは、

設計を変更しない。

改善案を作らない。

成立／不成立のみ返却する。

---

Implementation Stage

目的

設計成果物を

実装へ変換する。

標準読み込み順

README

↓

AI Development Lifecycle Standard

↓

AI Role Architecture

↓

AI Loading Map

↓

Implementation Operation

↓

Loading Mapで指定されたSystem

↓

Loading Mapで指定されたModule

↓

Implementation

Implementationでは、

SystemやConstitutionを書き換えない。

実装対象となるModule責務のみをコードへ反映する。

---

Implementation Validation Stage

目的

実装成果物を確認する。

標準読み込み順

README

↓

AI Development Lifecycle Standard

↓

AI Role Architecture

↓

AI Loading Map

↓

Implementation Operation

↓

Loading Mapで指定されたSystem

↓

Loading Mapで指定されたModule

↓

Implementation

↓

変更差分

Implementation Validationでは、

実装を追加しない。

設計を変更しない。

実装内容・影響範囲・副作用のみ返却する。
⸻

Product Owner Loading

Product Ownerは、

AI Role Architectureで定義されたRoleとして、

複数のStageを担当する。

LoadingはRole単位で管理し、

担当Stageごとに必要な設計書を切り替える。

担当Stage

・Governance
・Decision

---

Governance Stage

目的

開発テーマ、

優先順位、

採用対象を決定する。

必要に応じて、

Constitution、

System、

監査結果を参照する。

---

Decision Stage

目的

成果物の採用可否を決定する。

必要に応じて、

Constitution、

System、

Module、

監査結果を参照する。

Product Ownerは、

設計書を大量に読むことを前提としない。

各Roleから提出された成果物を確認し、

最終判断のみを担当する。

⸻

System Connections

AI Loadingは、

AI Role Architectureを基準として、

AI Decision Flowへ接続する。

関係は、

AI Role Architecture

↓

AI Loading Map

↓

AI Decision Flow

↓

Implementation

とする。

AI Loadingは、

Roleごとの責務理解を支援するものであり、

工程や権限を定義するものではない。

⸻

MVP Policy

MVPでは、

読み込み対象を最小構成とする。

一つのRoleが、

ConstitutionからImplementationまで

すべてを理解することを前提としない。

Roleごとに、

必要最低限の設計書だけを参照し、

不足する判断は、

次のRoleへ受け渡す。

MVPでは、

読み込み量よりも、

責務整合を優先する。

⸻

Future Policy

将来的に、

AI Roleが追加された場合は、

本書へLoadingを追加する。

既存Roleと読み込み範囲が重複する場合は、

Roleの責務境界を見直した上で、

Loadingを整理する。

また、

新しいSystem設計書やModule設計書が追加された場合でも、

Roleごとの責務が変わらない限り、

本書は更新しない。

本書は、

ファイル一覧ではなく、

Roleごとの読み込み構造を維持することを目的とする。

Related Documents

本書は、

以下の設計書と接続する。

Constitution

* constitution/

System

* README.md
* md_structure_tree.md
* md_loading_map.md
* decision_loop_core_summary.md

Operation

* ai_development_lifecycle_standard.md
* ai_role_architecture.md
* builder_interpretation_guide.md
* builder_operation.md
* design_validation.md
* review_operation.md
* implementation_operation.md
* observation_operation.md
* record_operation.md

Roleごとの責務は、

ai_role_architecture.mdで定義する。

Role間の受け渡しは、

ai_decision_flow.mdで定義する。

共通運用ルールは、

ai_rules.mdで定義する。

⸻

Rule

AI Loadingでは、

以下を共通ルールとする。

1. Roleに応じた設計書のみを読み込む

担当外の設計書を前提として

判断してはならない。

⸻

2. 必要最小限を維持する

大量の設計書を一括で読み込まない。

現在の担当責務に必要な設計書のみを扱う。

⸻

3. Layerを飛ばさない

Constitution

↓

System

↓

Module

↓

Implementation

の責務階層を維持する。

⸻

4. 読み込み範囲を越えて判断しない

不足する責務がある場合は、

追加で設計書を読むのではなく、

担当Roleへ受け渡す。

⸻

5. LoadingはRole単位で管理する

設計書単位ではなく、

Role単位で読み込み方法を管理する。

一つのRoleが複数Stageを担当する場合は、

Roleを親、

Stageを子としてLoadingを管理する。

⸻

Change Policy

本書は、

AI Roleごとの読み込み構造を定義する。

そのため、

以下の場合のみ更新対象とする。

* AI Roleの追加
* AI Roleの削除
* AI Roleの責務変更
* Loading構造の変更
* Layer構造の変更

System設計書やModule設計書が追加された場合でも、

Roleごとの読み込み構造が変わらない限り、

本書は更新しない。

⸻

最終定義

AI Loading Mapとは、

AI Roleごとに、

必要最小限の設計書だけを、

責務階層に従って読み込むための

AI運用設計書である。

本書は、

AIの知識量を増やすことではなく、

必要な責務だけを理解し、

責務混線・越権・過剰なコンテキストを防ぎながら、

家買う予備校の設計・実装・運用を一貫して進めるための

読み込み基準として機能する。
