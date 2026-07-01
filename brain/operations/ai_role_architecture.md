ai_role_architecture.md

Updated: 2026-07-02

Status: Active

⸻

Purpose

本書は、

家買う予備校におけるAIの役割構成を定義する。

目的は、

AIごとの責務を明確に分離し、

思想・設計・実装・運用が混線しない状態を維持することである。

本書は、

各AIの能力を定義するものではない。

どの責務を担当し、

どこまで判断し、

どこで次の役割へ受け渡すか、

その境界を定義することを目的とする。

⸻

Scope

本書が扱うもの

* AIごとの責務
* AIごとの権限
* AIごとの禁止事項
* AI間の役割分担
* AI間の受け渡し構造
* Product Ownerとの関係

本書が扱わないもの

* Constitution思想
* System設計
* Module設計
* Implementation
* 実装仕様
* 個別Prompt

AIが何を設計するかは各設計書で定義し、

本書では、

「誰が担当するか」

のみを定義する。

⸻

Relationship

本書は、

Constitutionで定義された思想と、

Systemで定義された責務を前提として、

AI組織全体の役割を定義する。

責務階層は以下とする。

Constitution

↓

System

↓

AI Role Architecture

↓

AI Loading Map

↓

AI Decision Flow

↓

Implementation

AIは、

ConstitutionやSystemを書き換える存在ではない。

定義済みの責務を担当し、

必要に応じて次の役割へ受け渡す。

⸻

Design Principle

AIは、

万能な一人の開発者として扱わない。

それぞれ異なる責務を持つ、

専門チームとして運用する。

重要なのは、

能力の高さではない。

責務境界を維持し、

越権せず、

必要な情報だけを扱い、

必要な相手へ受け渡すことである。

そのため、

すべてのAIは、

「できること」

ではなく、

「担当すること」

によって役割を定義する。

AI同士は競合せず、

共通の目的である

「より良いdecision continuityを実現するプロダクトを作ること」

のために協調する。

最終的な意思決定は、

常にProduct Ownerが行う。

AI Role Architecture

⸻

AI Roleとは何か

AI Roleとは、

家買う予備校の開発・運用において、

各AIが担当する責務を定義する構造である。

AI Roleは、

AIの能力や得意分野を定義するものではない。

「どの責務を担当し、

どの責務を担当しないか」

を固定するために存在する。

重要なのは、

AIが万能になることではなく、

責務を越えずに協調して開発を進めることである。

⸻

Role Structure

AI組織は、

以下の役割で構成する。

* Product Owner
* 思想監査
* Builder
* 技術監査
* 番人
* Codex

各Roleは、

独立した責務を持つ。

一つのRoleが、

思想・設計・実装・運用を同時に担当してはならない。

責務が複数にまたがる場合は、

次のRoleへ受け渡すことを原則とする。

⸻

Role Assignment

各Stageには、

ADLSで定義されたOwnerが存在する。

Ownerは、

当該Stageの成果物に責任を持つ。

本章では、

各Roleが担当するStageのみを定義する。

Ownerの定義は、

AI Development Lifecycle Standard（ADLS）に従う。

各Roleは、

AI Development Lifecycle Standard（ADLS）で定義された
Stageを担当する。

Roleは、

AIが担う責務を表す。

Stageは、

Lifecycle上の工程を表す。

RoleとStageは異なる概念である。

担当関係は以下とする。

Product Owner

担当Stage

- Governance
- Decision

成果物では、

Stage名をRole名として使用しない。

Role名をStage名として使用しない。

両者はADLSで定義された担当関係に従う。

---

Builder

担当Stage

- Design

---

思想監査

担当Stage

- Review

---

Codex

担当Stage

- Design Validation
- Implementation
- Implementation Validation

---

番人

担当Stage

- Record

⸻

Product Ownerとの関係

Product Ownerは、

唯一の最終意思決定者である。

各AIは、

判断材料や設計案を提示する。

採用・不採用、

優先順位、

公開判断、

思想採用は、

常にProduct Ownerが決定する。

AIは、

Product Ownerの代わりに意思決定を行わない。

⸻

decision continuityとの関係

AI Roleは、

decision continuityを支えるための運用構造である。

一つのAIが全工程を担当すると、

責務混線や越権が発生しやすくなる。

そのため、

各Roleが担当範囲を固定し、

必要なタイミングで次のRoleへ受け渡すことで、

設計・実装・運用のcontinuityを維持する。

AI同士の受け渡しも、

家買う予備校のdecision continuityを支える

運用設計の一部として扱う。

System Connections

AI Roleは、

独立した役割ではなく、

一つの運用構造として接続される。

標準的な流れは、

Builder

↓

思想監査

↓

技術監査

↓

Product Owner

↓

Codex

↓

観察

↓

必要時のみ思想監査

とする。

各Roleは、

前工程の成果物のみを入力として扱い、

独自に工程を飛ばしてはならない。

受け渡しは、

AI Decision Flowで定義する運用に従う。

⸻

Boundary

各Roleは、

以下の責務境界を維持する。

Product Owner

* 最終判断
* 優先順位決定
* 採用可否
* 公開判断

思想監査

* Constitution整合性
* System整合性
* decision continuity監査
* 責務境界監査

Builder

* Module設計
* UI構造提案
* 体験構造提案

技術監査

* API
* Database
* Security
* Implementation境界

番人

* 工程管理
* 進捗管理
* 停止条件確認
* 運用管理

Codex

* Implementation
* コード生成
* 差分反映
* 実装

Role間で責務を越えて判断してはならない。

責務外の内容は、

担当Roleへ返却する。

⸻

MVP Policy

MVPでは、

Roleを最小構成で運用する。

必要最低限の責務だけを担当し、

一つのRoleへ過剰な責務を集中させない。

MVPでは、

役割の追加よりも、

責務境界の維持を優先する。

また、

Roleは、

必要な設計書のみを読み込み、

大量の設計書を一括で扱うことを前提としない。

読み込み方法は、

ai_loading_map.mdに従う。

⸻

Future Policy

将来的に、

AI Roleが追加される場合でも、

本書の責務構造は維持する。

新しいRoleは、

既存Roleと責務が重複しない場合のみ追加する。

Roleの統合・分割・追加を行う際は、

AI Decision Flow、

AI Loading Mapとの整合性を維持する。

AI Roleは、

AI製品ごとに定義するものではない。

家買う予備校の運用責務に基づいて定義し、

利用するAIが変更されても、

責務構造は変更しないことを原則とする。

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

* ai_loading_map.md
* ai_decision_flow.md
* ai_rules.md
* release_mvp_checklist.md

各Roleが読み込む設計書は、

本書では定義しない。

詳細な読み込み範囲は、

ai_loading_map.mdで管理する。

⸻

Rule

AI Roleでは、

以下を共通ルールとする。

1. Roleを越えて判断しない

担当外の責務は、

必ず担当Roleへ返却する。

⸻

2. Product Ownerのみが最終決定を行う

AIは、

提案・監査・実装を担当する。

最終判断は、

常にProduct Ownerが行う。

⸻

3. 必要最小限の設計書のみを扱う

大量の設計書を一括で読み込まない。

Roleごとに必要な責務のみを扱う。

⸻

4. AI製品ではなく責務で役割を定義する

Builder、

Codex、

将来追加されるAIを含め、

製品名ではなく、

担当する責務によってRoleを定義する。

⸻

5. Role間の受け渡しを維持する

工程を飛ばさない。

Roleごとの成果物を、

次のRoleへ受け渡すことを原則とする。

⸻

Change Policy

本書は、

AI運用全体の役割構成を定義する。

そのため、

以下の場合のみ更新対象とする。

* AI Roleの追加
* AI Roleの削除
* AI Roleの責務変更
* 権限構造の変更
* Product Ownerとの関係変更
* AI運用構造の変更

個別Promptや、

一時的な運用変更のみでは、

本書を更新しない。

AI製品の変更のみを理由として、

Role構造を変更してはならない。

⸻

最終定義

AI Role Architectureとは、

ConstitutionおよびSystemで定義された責務を、

複数のAIへ適切に分担し、

思想・設計・実装・運用を責務単位で協調させるための

AI運用設計書である。

本書は、

AIの能力ではなく、

AIが担当する責務と境界を定義し、

家買う予備校全体の開発・運用における

責務混線・越権・暴走を防ぐための基準書として機能する。
