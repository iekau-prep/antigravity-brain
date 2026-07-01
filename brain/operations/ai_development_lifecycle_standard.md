# ai_development_lifecycle_standard.md

Updated: 2026-06-30
Status: Core

---

# Purpose
AI Development Lifecycle Standard（ADLS）は、AIそのものを管理する仕組みではなく、成果物が一定の品質ゲートを通過しながら、安全かつ再現性のある開発を行うための運用基準である。
本Lifecycleは、工程数やAI数を増やすこと自体を目的としない。
必要最小限のStageで運用することを原則とし、新しいStageやAIは、既存Stageで責務を吸収できないことが確認された場合のみ追加する。

⸻

Terminology

本Lifecycleでは、以下の用語を共通定義とする。

■ Stage

Lifecycle上の工程を表す。

例：

- Stage 1 : Design

- Stage 2 : Design Validation

- Stage 3 : Review

■ Owner

各Stageの責任主体を表す。

Ownerは、

当該Stageの成果物に対して責任を持つ。

例：

- Stage 1 Owner：ChatGPT Builder

- Stage 2 Owner：Codex

- Stage 3 Owner：思想監査

■ Role

AIが担当する責務を表す。

Roleは、

AI Role Architectureで定義される。

RoleはStageではない。

また、RoleはOwnerと一致する場合もあるが、

両者は独立した概念として扱う。

成果物では、

Stage・Owner・Roleを区別して使用する。

⸻


# Principle 0
各Stageは、自身の責務のみを完了し、成果物を次のStageへ引き渡す。前後のStageの責務を代行してはならない。
Lifecycle全体は、この責務境界を最上位原則とする。

⸻

# Stage 0 — Governance
Owner
Product Owner
Purpose
開発テーマ・優先順位・採用可否を決定する。
Exit Criteria
* テーマ確定
* 目的確定
* 優先順位確定

⸻

# Stage 1 — Design
Owner
ChatGPT Builder
（横断Builderまたは必要時のみModule Builder）
Purpose
成果物となる設計を形成する。
対象例：
* Concept
* UX
* Module
* Architecture
Exit Criteria
設計成果物が完成し、Design Validationへ渡せる状態。

⸻

# Stage 2 — Design Validation
Owner
Codex
Purpose
設計書を根拠として、設計が責務上成立するか確認する。

⸻

# Stage Contract
Input
* Builder成果物
Output
* 成立
* 不成立
* 理由
Allowed
* Loading Map参照
* 必要System参照
* 必要Module参照
* 必要最小限のConstitution参照
Forbidden
* 設計変更
* 改善案
* UI設計
* Module生成
Return To
Builder
Exit Criteria
成立／不成立が確定し、Builderまたは次Stageへ返却可能。

⸻

# Stage 3 — Review
Owner
思想監査
Purpose
Constitutionとの整合確認を行う。
確認対象例：
* fixed_core
* responsibility boundary
* decision continuity
* Constitution

⸻

# Stage Contract
Allowed
監査のみ
Forbidden
* 設計
* 改善提案
* PM判断
* 実装判断
Return To
Builder
Exit Criteria
Constitution上の進行可否が確定。

⸻

# Stage 4 — Decision
Owner
Product Owner
Purpose
採用可否を決定する。
ここだけが
* GO
* NO GO
* HOLD
を決定できる。
Exit Criteria
実装開始可否が決定。

⸻

# Stage 5 — Implementation
Owner
Codex
Purpose
設計成果物を実装へ変換する。
参照対象はLoading Mapで指定された設計書のみ。
Exit Criteria
実装成果物完成。

⸻

# Stage 6 — Implementation Validation
Owner
Codex
Purpose
実装成果物の影響範囲を確認する。

⸻

# Stage Contract
Input
実装成果物
Output
* 実装内容
* 変更ファイル
* 影響範囲
* 副作用
* Commit候補
Allowed
* git diff
* git status
* git log
* 実装確認
Forbidden
* 設計変更
* 実装追加
* 改善提案
Return To
Product Owner
Exit Criteria
実装結果が説明可能な状態。

⸻

# Observation（必要時のみ）
Owner
ChatGPT
Purpose
成果物を観察する。
対象例：
* continuity
* decision progression
* 理解開始
* 停止要因
改善案は作成しない。
ObservationはBuilderではない。

⸻

# Record（必要時のみ）
Owner
番人
Purpose
工程記録のみ行う。
評価しない。
改善しない。
状態のみ更新する。

⸻

Stage Contract（共通仕様）

すべてのStageは以下を持つ。

■ Stage Information

* Stage
* Owner
* Purpose

■ Contract

* Input
* Output
* Allowed
* Forbidden
* Return To
* Exit Criteria

■ Transfer Information

* From
* To
* Next Stage
* Transfer Purpose

成果物を他Stageへ渡す場合は、

Transfer Informationを必ず付与する。

Transfer Informationは、

成果物の受け渡し経路を明確にするための共通仕様である。

これをLifecycle全体の共通仕様とする。

⸻

# Lifecycle Flow
# Normal Flow
Governance
    ↓
Design
    ↓
Design Validation
    ↓
Review
    ↓
Decision
    ↓
Implementation
    ↓
Implementation Validation
    ↓
Observation（必要時）
    ↓
Record（必要時）

⸻

# Return Flow
Design Validation NG
        ↓
Builder

Review NG
        ↓
Builder

Decision NO GO
        ↓
Builder

Implementation停止
        ↓
Product Owner

Observation問題検出
        ↓
Builder

⸻

# Builder Strategy
初期状態では、
横断Builderのみを常設する。
Module Builderは常設しない。
以下のいずれかを満たした場合のみ、対象Moduleを独立Builderとして分離する。
* Module責務が混在した
* 横断Builderが肥大化した
* Module単独変更が継続した
* Loading Mapが肥大化した
Module Builderは成果物ではなく、運用上のスケーリング手段として扱う。

⸻

# Lifecycle Evolution Policy
本Lifecycleは、AI数やStage数を増やすことを目的としない。
新しいStage・Role・AIを追加する前に、
既存Stageで責務を吸収できないことを証明する。
これを運用ルールとする。

⸻

# Versioning Policy
本Versionを
AI Development Lifecycle Standard v1.0
として固定する。
v1.0では構造変更を行わない。
運用中に発生した問題は記録し、同一問題が繰り返し発生した場合のみ、最小限の変更としてv1.1以降で改善する。

⸻

---

# 最終定義

AI Development Lifecycle Standardとは、

AIそのものを管理するための設計ではなく、

成果物が一定の品質ゲートを通過しながら、

安全かつ再現性のある開発を行うための

Lifecycle Standardである。

本書は、

AIの種類ではなく、

各Stageの責務、

成果物、

品質ゲート、

Return Pathを定義し、

AIに依存しない運用基盤として機能する。
