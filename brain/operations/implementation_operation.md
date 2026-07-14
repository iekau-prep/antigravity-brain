# implementation_operation.md

Updated: 2026-06-30
Status: Core

---

# Purpose

本書は、

AI Development Lifecycle Standard（ADLS）における

Stage 5 — Implementation

の運用方法を定義する。

Implementationの目的は、

承認された設計成果物を、

コードへ正確に反映することである。

Implementationは、

設計を変更しない。

思想を追加しない。

改善案を作成しない。

---

# Scope

本書が扱うもの

- Implementationの責務
- コード反映
- Loading Mapに基づく読込
- 実装成果物
- Return Path
- 終了条件

本書が扱わないもの

- 設計形成
- Design Validation
- Constitution Review
- Product判断
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

↓

Implementation Validation

Implementationは、

承認済み設計成果物をコードへ反映するStageとして位置付ける。

---

# Purpose of Implementation

Implementationは、

設計を作るStageではない。

承認済み設計を、

実装へ変換するStageである。

判断根拠は、

Loading Mapで指定された設計書のみとする。

---

# Implementation成熟

Implementation成熟は、Operation Constitution案件およびOperation成熟案件Aで実運用されたImplementation運用事実を、既存Operation SoTへ戻すために定義する。

目的は、新しいImplementation運用を追加することではなく、ImplementationがBuilder成果物を変更せず、承認済み成果物をRepositoryへ正確に反映し、Implementation ValidationがBuilder成果物とRepository反映結果を照合する責務境界を明確にすることである。

Implementation成熟は以下を保持する。

- ImplementationはBuilder成果物を変更しない
- Implementationは承認済みBuilder成果物をRepositoryへ反映する
- Implementationは改善案を作成しない
- Implementationは設計変更を行わない
- Implementationは責務変更を行わない
- Implementationは反映結果をImplementation Validationへ引き渡す
- Implementation ValidationはBuilder成果物とRepository反映結果を照合する
- ImplementationとImplementation Validationの責務を分離する
- Implementationは停止が必要な場合、設計変更せず停止理由のみ整理する

Implementation成熟は以下を扱わない。

- 新しい運用追加
- 改善案
- Constitution変更
- System変更
- Module変更
- Product変更
- Builder変更
- Design Validation変更
- Review変更
- Git操作
- Repository変更
- 新Stage追加
- 新Role追加
- Product Owner Decision
- Maturity
- Role Input Contract
- Loading Rule
- Record
- Operation Constitution
- Builder成果物の再形成
- Implementation Validationによる追加実装
- Implementation Validationによる設計変更

Implementation成熟は、Implementationを「承認済み設計成果物をコードへ正確に反映するStage」とする既存責務内に位置付ける。

`Implementationは、設計を変更しない。思想を追加しない。改善案を作成しない。` という既存原則を、Repository反映責務として具体化する。

ImplementationはBuilder成果物を変更せず、反映結果をImplementation Validationへ渡す。

---

# Input

Implementationが受け取るもの

- Product Owner GO
- Builder成果物
- Loading Map
- 必要最小限のConstitution
- 必要System
- 必要Module

---

# Output

Implementationが返却するもの

- 実装成果物
- 変更ファイル
- 実装内容
- 実装概要

---

# Allowed

Implementationが行えること

- コード実装
- リファクタリング（設計範囲内）
- 必要最小限の修正
- コメント追加
- 型調整
- 実装確認

---

# Forbidden

Implementationは禁止する。

- 設計変更
- Constitution変更
- System変更
- Module変更
- 新機能追加
- 改善提案
- Product判断
- 公開判断

---

# Exit Criteria

Implementationは、

以下を満たした時点で終了する。

- 実装完了
- 実装内容整理
- Implementation Validationへ渡せる状態

---

# Return Path

Implementation停止

↓

Product Owner

Implementation完了

↓

Implementation Validation

Implementationは、

停止理由のみ整理する。

設計変更は行わない。

---

# Implementation Principle

Implementationでは、

設計を実装へ翻訳する。

独自判断で

思想、

責務、

境界を変更してはならない。

変更が必要になった場合は、

Product Ownerへ返却する。

---

# Rule

Implementationでは、

以下を共通原則とする。

- Loading Mapを守る
- 必要最小限のみ読む
- 承認済み設計のみ実装する
- 独自設計しない
- 他Stageの責務を代行しない

---

# Change Policy

本書は、

Implementation運用が変更された場合のみ更新する。

実装内容変更では更新しない。

AI Development Lifecycle Standardとの整合性を最優先とする。

---

# 最終定義

Implementationとは、

承認済み設計成果物を、

Loading Mapを根拠としてコードへ反映し、

Implementation Validationへ引き渡すための

Implementation Stage Operationである。
