# README.md

Updated: 2026-07-01
Status: Core

---

# Purpose

本ディレクトリは、

AI Development Lifecycle Standard（ADLS）に基づく

AI運用ルールを管理する。

目的は、

AIそのものを管理することではなく、

成果物が一定の品質ゲートを通過しながら、

安全かつ再現性のある開発を実現することである。

本書は、

operations全体の入口として位置付ける。

---

# Scope

本書が扱うもの

- operations配下の構成
- 各Operation文書の役割
- 推奨読取順
- AI運用全体の入口

本書が扱わないもの

- Constitution
- System設計
- Module設計
- 実装仕様
- AIごとの詳細責務

詳細は各Operation文書を参照する。

---

# Relationship

Constitution

↓

System

↓

AI Development Lifecycle Standard

↓

AI Role Architecture

↓

AI Loading Map

↓

Operation

↓

Design / Validation / Implementation

本書は、

AI運用全体の入口として位置付ける。

---

# Directory Overview

operations配下は以下で構成される。

## Lifecycle

- ai_development_lifecycle_standard.md

AI Development Lifecycle Standard本体。

---

## AI Architecture

- ai_role_architecture.md

AI全体の役割と責務を定義する。

---

## AI Loading

- ai_loading_map.md

各Roleが読む設計書を定義する。

---

## Builder Interpretation

- builder_interpretation_guide.md

Builderが家買う予備校の意味空間を共有するためのInterpretation Guide。

---

## Builder

- builder_operation.md

Builder運用ルール。

---

## Design Validation

- design_validation.md

Design Validation運用ルール。

---

## Review

- review_operation.md

Review（思想監査）運用ルール。

---

## Implementation

- implementation_operation.md

Implementation運用ルール。

---

## Observation

- observation_operation.md

Observation運用ルール。

---

## Record

- record_operation.md

Record（番人）運用ルール。

---

## Release

- release_mvp_checklist.md

公開前チェックリスト。

---

# Reading Guide

AI運用を開始する場合は、

以下の順で読む。

AI Development Lifecycle Standard

↓

AI Role Architecture

↓

AI Loading Map

↓

Builder Interpretation Guide
（Builderのみ）

↓

対象Operation

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

---

# Operation Principle

operationsでは、

以下を共通原則とする。

- AIではなく成果物を管理する
- Stage責務を越権しない
- 必要最小限のStageで運用する
- Loading Mapを維持する
- Interpretationを共有する
- Return Pathを維持する
- AIは成果物を次Stageへ引き渡す

---

# Rule

operations配下では、

以下を運用ルールとする。

- ADLSを最上位基準とする
- Stageを飛ばさない
- Loading Mapを無視しない
- Interpretation Guideを書き換えない
- 他Stageの責務を代行しない
- 必要最小限の設計書のみ読む
- Return Pathを維持する

---

# Change Policy

本書は、

operations全体の構成が変更された場合のみ更新する。

各Operationの詳細変更では更新しない。

AI Development Lifecycle Standardとの整合性を最優先とする。

---

# 最終定義

operationsとは、

AI Development Lifecycle Standardを実際の運用へ適用するための

AI Operation Documents群である。

本ディレクトリは、

Lifecycle、

Role、

Loading、

Interpretation、

Operationを一貫した運用基盤として管理する。

本書は、

その入口として、

各Operationの役割と読取順を管理する。
