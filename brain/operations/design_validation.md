# design_validation.md

Updated: 2026-07-08
Status: Core

---

# Purpose

本書は、

AI Development Lifecycle Standard（ADLS）における

Stage 2 — Design Validation

の運用方法を定義する。

Design Validationの目的は、

Builderが作成した設計成果物が、

既存設計書に照らして責務上成立するかを確認することである。

Design Validationは、

設計を変更しない。

改善案を作成しない。

設計の成立可否のみを返却する。

---

# Scope

本書が扱うもの

- Design Validationの責務
- 設計成果物の確認
- Loading Mapに基づく読込
- Return Path
- 終了条件

本書が扱わないもの

- 設計形成
- Constitution Review
- 実装
- Observation
- Record

---

# Relationship

AI Development Lifecycle Standard

↓

Builder Operation

↓

Design Validation

↓

Review

↓

Decision

↓

Implementation

Design Validationは、

Design StageとReview Stageを接続する品質確認Stageとして位置付ける。

---

# Purpose of Design Validation

Design Validationは、

設計を作るStageではない。

Builder成果物について、

責務上成立するかを確認するStageである。

判断根拠は、

Loading Mapで指定された設計書のみとする。

---

# Design前工程における構造設計レビュー

構造設計レビューは、Design Validationの「責務上成立するか確認する」責務内に位置付ける。

Design Validationは本文作成前の構造設計を確認する責務を持つ。

Design Validationは構造の成立可否を確認するが、設計変更や改善提案は行わない。

Design前工程は、新Stage / 新Roleではなく、既存Stage責務の内訳として扱う。

構造設計レビューは以下を扱わない。

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
- Builder以外によるDesign Formation代行
- Design Validationによる設計変更

---

# Input

Design Validationが受け取るもの

- Builder成果物
- Loading Map
- 必要最小限のConstitution
- 必要System
- 必要Module

---

# Output

Design Validationが返却するもの

- 成立
- 不成立
- 理由

必要に応じて、

確認した設計書を明示する。

---

# Allowed

Design Validationが行えること

- Loading Map参照
- Constitution参照（必要最小限）
- System参照
- Module参照
- 責務確認
- 境界確認
- 成立可否判定

---

# Forbidden

Design Validationは禁止する。

- 設計変更
- 改善提案
- UI設計
- Module追加
- 実装
- Product判断
- 公開判断

---

# Exit Criteria

Design Validationは、

以下を満たした時点で終了する。

- 成立／不成立が確定
- 理由が説明可能
- Builderまたは次Stageへ返却可能

---

# Return Path

Design Validation NG

↓

Builder

Design Validation OK

↓

Review

Design Validationは、

返却理由のみ整理する。

設計は修正しない。

---

# Validation Principle

Design Validationでは、

「正しい設計」

を作らない。

確認するのは、

既存設計との整合のみである。

改善よりも、

成立確認を優先する。

---

# Rule

Design Validationでは、

以下を共通原則とする。

- Loading Mapを守る
- 必要最小限のみ読む
- 設計変更しない
- 改善提案しない
- Builder責務を代行しない
- Review責務を代行しない

---

# Change Policy

本書は、

Design Validation運用が変更された場合のみ更新する。

Validation対象の設計内容変更では更新しない。

AI Development Lifecycle Standardとの整合性を最優先とする。

---

# 最終定義

Design Validationとは、

Builderが形成した設計成果物について、

Loading Mapを根拠に責務上の成立可否のみを確認し、

Review Stageへ引き渡すための

Validation Stage Operationである。
