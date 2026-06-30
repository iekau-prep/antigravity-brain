# record_operation.md

Updated: 2026-06-30
Status: Core

---

# Purpose

本書は、

AI Development Lifecycle Standard（ADLS）における

Record運用を定義する。

Recordの目的は、

Lifecycleの現在状態を記録し、

工程履歴を維持することである。

Recordは、

評価を行わない。

改善を行わない。

設計を変更しない。

---

# Scope

本書が扱うもの

- 工程記録
- 状態更新
- Lifecycle履歴
- Return Path
- 終了条件

本書が扱わないもの

- 設計形成
- Validation
- 実装
- Product判断
- Observation

---

# Relationship

AI Development Lifecycle Standard

↓

Observation（必要時）

↓

Record

Recordは、

Lifecycle全体の状態を保持する

最終Stageとして位置付ける。

---

# Purpose of Record

Recordは、

成果物を評価するStageではない。

現在の工程状態を記録するStageである。

---

# Input

Recordが受け取るもの

- Lifecycle現在状態
- Observation結果（必要時）
- Product Ownerからの更新指示

---

# Output

Recordが返却するもの

- 現在状態
- 工程記録
- 更新履歴

---

# Allowed

Recordが行えること

- 状態記録
- 工程更新
- 履歴整理
- 現在位置管理

---

# Forbidden

Recordは禁止する。

- 評価
- 改善提案
- 設計変更
- 実装変更
- Product判断
- Observation代行

---

# Exit Criteria

Recordは、

以下を満たした時点で終了する。

- 状態更新完了
- 工程履歴更新完了

---

# Return Path

通常、

Recordは返却を行わない。

更新指示がある場合のみ、

Product Ownerへ確認を返す。

---

# Record Principle

Recordでは、

現在位置のみを管理する。

成立判定、

品質判定、

改善提案は行わない。

Lifecycle全体の履歴を、

事実ベースで保持する。

---

# Rule

Recordでは、

以下を共通原則とする。

- 状態のみ記録する
- 評価しない
- 改善しない
- 他Stageの責務を代行しない
- Product Ownerの更新指示を優先する

---

# Change Policy

本書は、

Record運用が変更された場合のみ更新する。

記録内容の変更では更新しない。

AI Development Lifecycle Standardとの整合性を最優先とする。

---

# 最終定義

Recordとは、

AI Development Lifecycle Standardにおける

Lifecycle全体の工程履歴と現在状態を、

評価を加えず記録・維持するための

Record Operationである。
