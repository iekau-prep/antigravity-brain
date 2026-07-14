# builder_operation.md

Updated: 2026-07-08
Status: Core

---

# Purpose

本書は、

AI Development Lifecycle Standard（ADLS）における

Stage 1 — Design

の運用方法を定義する。

Builderの目的は、

成果物となる設計を形成し、

Design Validationへ引き渡せる状態を作ることである。

Builderは、

実装を行わない。

品質判定も行わない。

---

# Scope

本書が扱うもの

- Builderの責務
- Design工程
- 設計成果物
- Builderの終了条件
- Return Path

本書が扱わないもの

- Design Validation
- Constitution Review
- 実装
- Observation
- Record

詳細は各Operation文書を参照する。

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

Builderは、

Lifecycle最初の成果物形成Stageとして位置付ける。

---

# Purpose of Builder

Builderは、

アイデアを出すAIではない。

Builderは、

設計成果物を形成するStageである。

扱う対象例

- UX
- Module
- Architecture
- Structure
- Flow
- Design

---

# Design前工程

Design前工程は、Operation Constitution案件で実運用された以下2工程を、Builder責務内に位置付ける。

- SoT読解
- 設計方針形成

目的は、新しいStageやRoleを追加することではなく、既存のDesign Stage内で実証された本文作成前の運用事実を、Operation SoTへ戻せる形で責務化することである。

Builderは本文作成前にSoTを読解する責務を持つ。

Builderは本文作成前に設計方針を形成する責務を持つ。

Design前工程はBuilderのDesign形成前段であり、Implementationや品質判定は含まない。

Design前工程は、新Stage / 新Roleではなく、既存Stage責務の内訳として扱う。

Design前工程は以下を扱わない。

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

---

# Input

Builderが受け取るもの

- Product Ownerからのテーマ
- Loading Map
- 必要なSystem
- 必要なModule

Builderは、

Loading Mapで許可された設計書のみを読む。

---

# Output

Builderが返却する成果物

- 設計案
- Module設計
- UI構造
- Flow
- Architecture
- 判断根拠

返却物は、

Design Validationが評価できる形で整理する。

---

# Allowed

Builderが行えること

- 設計形成
- 構造整理
- UX設計
- Module設計
- 情報整理
- 複数案比較

---

# Forbidden

Builderは禁止する。

- 実装
- commit
- git操作
- Constitution変更
- System変更
- Validation
- 品質判定
- GO判断
- 公開判断

---

# Exit Criteria

Builderは、

以下を満たした時点で終了する。

- 設計成果物完成
- 判断理由整理
- Design Validationへ渡せる状態

---

# Return Path

Builderは、

以下の場合のみ返却を受ける。

Design Validation NG

↓

Builder

Review NG

↓

Builder

Decision NO GO

↓

Builder

Observation返却

↓

Builder

Builderは、

返却理由のみ反映する。

他Stageの責務は実施しない。

---

# Builder Strategy

通常運用では、

横断Builderのみ使用する。

以下の場合のみ、

Module Builderを生成する。

- Module責務混在
- Builder肥大化
- Module変更継続
- Loading Map肥大化

Module Builderは、

運用上の分割単位として扱う。

---

# Rule

Builderでは、

以下を共通原則とする。

- Loading Mapを守る
- 必要最小限だけ読む
- 設計だけ行う
- 実装しない
- 判定しない
- 他Stageへ越権しない

---

# Change Policy

本書は、

Builder運用が変更された場合のみ更新する。

設計内容の変更では更新しない。

AI Development Lifecycle Standardとの整合性を最優先とする。

---

# 最終定義

Builderとは、

設計成果物を形成し、

Design Validationへ引き渡すための

Design Stage Operationである。
