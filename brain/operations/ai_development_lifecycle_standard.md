# ai_development_lifecycle_standard.md

Updated: 2026-07-02
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

Design前工程は、Stage 1 — Design内の前工程として扱う。

Design前工程は、新Stageではない。

Design前工程は、新Roleではない。

Design前工程は、既存Design Stageの責務内訳として整理する。

Design前工程は、Operation Constitution案件で実運用された以下3工程を、Design Stage内の本文作成前責務として位置付ける。

* SoT読解
* 設計方針形成
* 構造設計レビュー

目的は、新しいStageやRoleを追加することではなく、既存のDesign Stage内で実証された本文作成前の運用事実を、Operation SoTへ戻せる形で責務化することである。

Design前工程は以下を保持する。

* Builderが本文作成前にSoTを読解する責務
* Builderが本文作成前に設計方針を形成する責務
* Design Validationが本文作成前の構造設計を確認する責務
* Reviewが必要時にConstitution / 上位思想との整合を確認する責務
* Design本文作成前に、対象・方針・構造の成立状態を明確にする責務
* Design Stage内で完結する前工程として扱う責務
* 新Stage / 新Roleではなく、既存Stage責務の内訳として扱う責務

Design前工程は以下を扱わない。

* 新しい運用追加
* 新Stage追加
* 新Role追加
* Product Owner Decision
* Implementation
* Implementation Validation
* Maturity
* Git
* Role Input Contract変更
* Loading Rule詳細変更
* Record運用
* Operation Constitution本文作成
* Operation Constitution構造設計そのもの
* Request Contract外の工程形成
* Builder以外によるDesign Formation代行
* Design Validationによる設計変更
* Reviewによる改善案作成

Design前工程は、ADLSの「各Stageは自身の責務のみを完了し、成果物を次Stageへ引き渡す」原則に従う。

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

Implementation成熟は、Stage 5 — ImplementationとStage 6 — Implementation Validationの責務分離として扱う。

Implementation成熟は、新Stageではない。

Implementation成熟は、新Roleではない。

Implementation成熟は、ADLSの「各Stageは自身の責務のみを完了し、成果物を次Stageへ引き渡す」原則に従う。

Implementation成熟は以下を保持する。

* ImplementationはBuilder成果物を変更しない
* Implementationは承認済みBuilder成果物をRepositoryへ反映する
* Implementationは改善案を作成しない
* Implementationは設計変更を行わない
* Implementationは責務変更を行わない
* Implementationは反映結果をImplementation Validationへ引き渡す
* Implementation ValidationはBuilder成果物とRepository反映結果を照合する
* ImplementationとImplementation Validationの責務を分離する
* Implementationは停止が必要な場合、設計変更せず停止理由のみ整理する

Implementation成熟は以下を扱わない。

* 新しい運用追加
* 改善案
* Constitution変更
* System変更
* Module変更
* Product変更
* Builder変更
* Design Validation変更
* Review変更
* Git操作
* Repository変更
* 新Stage追加
* 新Role追加
* Product Owner Decision
* Maturity
* Role Input Contract
* Loading Rule
* Record
* Operation Constitution
* Builder成果物の再形成
* Implementation Validationによる追加実装
* Implementation Validationによる設計変更

Stage 5は設計成果物をRepositoryへ反映する責務を持つ。

Stage 6は実装成果物の確認を行う責務を持つ。

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

# Prototype Validation成熟

Prototype Validationは、Prototype GPTそのものではなく、Foundation（A〜D）による初期判断土台を確認対象として扱う。

Prototype Validationは、AI Design OS Specificationとの仕様照合として運用する。

Prototype Validationは、Foundation（A〜D）による初期判断土台が、今後のObservation・Decision・Operation成熟・System成熟・Module知識追加を安定して積み上げられる状態かを確認する。

Prototype Testは確認対象を発生させる運用として扱う。

Prototype Validationはその確認対象をAI Design OS Specificationと照合し、初期土台成立性と不足分類を確認する運用として扱う。

Prototype Validationでは、不足を以下に分離して確認する。

* 後天学習可能な不足
* 初期土台不足

Prototype Validationは以下を扱わない。

* Prototype GPTの性能評価
* GPT完成度評価
* 改善案形成
* Operation文書修正
* Builder成果物本文作成
* Implementation
* Git操作
* 新Role追加
* 新Stage追加
* 新Operation文書追加
* Prototype Test 2の作成・実施
* Prototype Validation実施手順作成
* Product Owner Decision代行

Prototype Validationは、新Stageではない。

Prototype Validationは、新Roleではない。

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

■ Request Contract

すべてのStageへの依頼は、

以下の共通フォーマットを持つ。

* Design Scope

* Allowed Change

* Forbidden Change

* Out of Scope

Design Scopeは、

今回形成・確認・実装・観察の対象を定義する。

Allowed Changeは、

変更を許可する範囲を定義する。

Forbidden Changeは、

変更してはならない範囲を定義する。

Out of Scopeは、

今回の案件対象外を定義する。

Request Contractは、

成果物ではなく、

案件依頼の境界を明確にするための共通仕様である。

すべてのStageは、

Request Contractの範囲内でのみ責務を遂行する。

Request Contractは、

AIが変更可能範囲を推測しないための共通仕様である。

Transfer Informationと同様に、

Lifecycle全体で共通フォーマットとして運用する。

■ Transfer Information

成果物を他Stageへ受け渡す場合は、

以下を共通フォーマットとする。

* From
* To
* Next Stage
* Transfer Purpose
* Transfer Target
* Transfer Status
* Transfer Remarks（任意）

Transfer Informationは、

成果物の受け渡し経路および受け渡し対象を明確にするための共通仕様である。

Transfer Statusは、

受け渡し時点における成果物の状態を表す。

Statusの表現は、

各Stageの責務に従う。

Transfer Informationの目的は、

各Stageが成果物のみを受け渡し、

責務を次Stageへ正しく引き継ぐことである。

これをLifecycle全体の共通仕様とする。

Transfer Informationは、

成果物を受け渡すすべてのStageで同一フォーマットを使用する。

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
