# review_operation.md

Updated: 2026-07-02
Status: Core

---

# Purpose

本書は、

AI Development Lifecycle Standard（ADLS）における
Review Stageの運用方法を定義する。

Review Stageの目的は、

Builder成果物が、

Constitutionおよび上位設計思想と整合しているかを確認することである。

Reviewは、

設計を行わない。

改善案を作成しない。

Constitutionとの整合のみを確認する。

---

# Position

本書は、

Review Stage専用のOperation Standardである。

Builder Operationを補完する文書ではない。

Design Validationを書き換える文書ではない。

Implementationを定義する文書でもない。

本書は、

Review Stageにおける責務境界を定義する。

---

# Scope

本書が扱うもの

- Constitution Review
- Responsibility Boundary
- Decision Continuity
- Review Stageの責務
- Return Path
- Exit Criteria

本書が扱わないもの

- Design形成
- Design Validation
- Product Owner判断
- Implementation
- Observation
- 新ルール追加

---

# Relationship

AI Development Lifecycle Standard

↓

AI Loading Map

↓

Review Operation

↓

Review

↓

Decision

Reviewは、

Design Validation成立後に開始する。

Review終了後は、

Decision Stageへ成果物を引き渡す。

---

# Purpose of Review

Reviewは、

Builder成果物を改善する工程ではない。

Reviewは、

Builder成果物が、

Constitution・System・Operationと整合しているかを確認する工程である。

Reviewは、

Constitution上の進行可否のみを返却する。

---

# Design前工程におけるReview

Reviewは、必要時にConstitution / 上位設計思想との整合確認を行う。

ReviewはDesign前工程を改善せず、Constitution上の進行可否のみを確認する。

Design前工程は、新Stage / 新Roleではなく、既存Stage責務の内訳として扱う。

Reviewは以下を扱わない。

- 新しい運用追加
- 新Stage追加
- 新Role追加
- Product Owner Decision
- Implementation
- Implementation Validation
- Maturity
- Git
- Role Input Contract変更
- Loading Rule詳細変更
- Record運用
- Operation Constitution本文作成
- Operation Constitution構造設計そのもの
- Request Contract外の工程形成
- Reviewによる改善案作成

---

# Input

Reviewが受け取るもの

- Builder成果物
- Design Validation結果
- AI Loading Mapで指定された設計書

---

# Output

Reviewが返却するもの

- 進行可
- 停止
- 理由

---

# Review Principles

Reviewは、

Constitutionを基準として確認する。

Reviewは、

Builderの代わりに設計を行わない。

Reviewは、

Design Validationの代わりに成立判定を行わない。

Reviewは、

Product Ownerの代わりに採用判断を行わない。

Reviewは、

Constitutionとの整合のみを確認する。

---

# Review Targets

Reviewでは、

以下を確認対象とする。

- fixed_core
- responsibility boundary
- decision continuity
- Constitution整合
- ADLS整合（必要時）

---

# Prototype ValidationにおけるReview

Prototype ValidationにおけるReviewは、Prototype Testで発生した確認対象を、AI Design OS Specificationと照合する。

Prototype ValidationにおけるReviewは、Prototype GPTの性能評価ではなく、初期土台成立性と不足分類を確認する。

Prototype ValidationにおけるReviewでは、不足を以下に分離して確認する。

- 後天学習可能な不足
- 初期土台不足

Prototype ValidationにおけるReviewは、改善案形成、Prototype Test 2の作成・実施、Prototype Validation実施手順作成、Product Owner Decision代行を扱わない。

---

# Allowed

Reviewで行えること

- Constitution確認
- Responsibility Boundary確認
- Decision Continuity確認
- 進行可否整理
- Builderへの返却

---

# Forbidden

Reviewでは禁止する。

- Design形成
- 改善提案
- UI提案
- Module変更
- Product判断
- Implementation
- Observation代行

---

# Exit Criteria

Reviewは、

以下を満たした時点で終了する。

- Constitution整合確認完了
- Review判定完了
- BuilderまたはDecisionへ返却可能

---

# Return Path

Review停止

↓

Builder

Review完了

↓

Decision

Reviewでは、

停止理由のみ整理する。

改善案は作成しない。

---

# Rule

Reviewでは、

以下を共通原則とする。

- AI Loading Mapを守る
- Loading Mapで指定された設計書のみ読む
- Constitutionを最優先とする
- Designを行わない
- Product判断を行わない
- 他Stageを代行しない

---

# Transfer Information

Review成果物を他Stageへ受け渡す場合は、

以下の共通フォーマットを使用する。

- From
- To
- Next Stage
- Transfer Purpose
- Transfer Target
- Transfer Status
- Transfer Remarks（任意）

Transfer Statusは、

受け渡し時点における成果物の状態を表す。

Status表現は、

各Stageの責務に従う。

---

# Change Policy

本書は、

Review Stageの責務変更が発生した場合のみ更新する。

Builder変更のみでは更新しない。

Constitution変更のみでは更新しない。

AI Development Lifecycle Standardとの整合性を最優先とする。

---

# Final Definition

Reviewとは、

Builder成果物が、

AI Loading Mapを根拠として、

Constitution・System・Operationと整合しているかを確認し、

Decision Stageへ引き渡すための

Review Operation Standardである。
