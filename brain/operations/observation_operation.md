# observation_operation.md

Updated: 2026-07-08
Status: Core

---

# Purpose

本書は、

AI Development Lifecycle Standard（ADLS）における

Observation運用を定義する。

Observationの目的は、

成果物を観察し、

現在起きている事実を整理することである。

Observationは、

改善を行わない。

設計を変更しない。

評価を行わない。

---

# Scope

本書が扱うもの

- 成果物観察
- 体験観察
- 停止要因整理
- Observation結果
- Return Path
- 終了条件

本書が扱わないもの

- 設計形成
- Validation
- 実装
- Product判断
- Record

---

# Relationship



AI Development Lifecycle Standard

↓

Implementation Validation

↓

Observation

↓

Builder（必要時）

または

↓

Record（必要時）

Observationは、

実装後の状態を整理するObservation Stageとして位置付ける。

---

# Purpose of Observation

Observationは、

成果物を改善するStageではない。

現在の状態を観察し、

事実を整理するStageである。

---

# Input

Observationが受け取るもの

- 実装成果物
- 実装確認結果
- 画面
- 動作結果
- Product Ownerからの観察依頼

---

# Output

Observationが返却するもの

- 観察結果
- 確認できた事実
- 停止要因
- Builderへ返却すべき事項（必要時）

---

# Allowed

Observationが行えること

- UI観察
- UX観察
- continuity観察
- decision progression観察
- 停止要因整理
- 現在状態整理

---

# Forbidden

Observationは禁止する。

- 改善提案
- 設計変更
- 実装変更
- Product判断
- Constitution判断
- Validation代行

---

# Exit Criteria

Observationは、

以下を満たした時点で終了する。

- 観察結果整理完了
- 停止要因整理完了
- BuilderまたはRecordへ返却可能

または

- 終了可能

---

# Return Path

問題なし

↓

終了

または

↓

Record（必要時）

問題あり

↓

Builder

Observationは、

改善案ではなく、

観察事実のみ返却する。

---

# Observation Principle

Observationでは、

事実と解釈を分離する。

整理するのは、

「何が起きているか」

であり、

「どう直すか」

ではない。

改善が必要な場合でも、

改善案はBuilderが担当する。

---

# Rule

Observationでは、

以下を共通原則とする。

- 観察のみ行う
- 評価しない
- 改善しない
- Builder責務を代行しない
- Record責務を代行しない

---

# Change Policy

本書は、

Observation運用が変更された場合のみ更新する。

観察対象変更では更新しない。

AI Development Lifecycle Standardとの整合性を最優先とする。

---

# 最終定義

Observationとは、

成果物を観察し、

現在起きている事実と停止要因のみを整理し、

必要に応じてBuilderへ返却するための

Observation Operationである。
