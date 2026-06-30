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
