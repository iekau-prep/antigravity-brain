# Module Foundation Formation Pipeline v1.1

## Purpose

Module Foundationを、
同一品質・同一手順で形成するための共通Pipelineを定義する。

PipelineはFormation手順のみを扱う。

Module内容・Repository内容・実装内容は扱わない。

---

## Formation対象

Module Foundation Formation対象：

- A｜Identity
- B｜Role
- C｜Foundation Pack
- D｜Decision / Current State Pack

---

## Step1｜Discovery

### Role

Codex

### Purpose

Repository事実をObservationする。

### Input

- 共通Template
- Repository
- 既存Foundation（必要時）

既存Foundation（必要時）は、
対象Moduleの既存FoundationがRepository上に存在する場合のみ入力として扱う。

他ModuleのFoundationは、
Discovery入力として扱わない。

新規Module Formationでは、
対象ModuleのFoundationが存在しない限り、
既存Foundationは入力としない。

Formation対象成果物（例：B_td.md）はRepository上に存在していてもDiscovery入力として使用しない。

DiscoveryはFormation対象より前段のSoT（Common・Module Foundation・Product Repository等）のみを根拠としてObservationを行う。

### Output

Discovery Observation

### 禁止

- Builder成果物作成
- 推測
- 改善案
- 実装
- Solution形成

---

## Step2｜Builder Input Sheet

### Role

General Design GPT
（またはFormation設計）

### Purpose

Discovery Observationを、
Builderが追加推測せずFormationできる入力へ整理する。

Builder Input Sheetは、
Builderが必要とするRepository事実を漏れなく保持し、
不足情報も明示する。

### Input

- Discovery Observation

### Output

Builder Input Sheet

Builder Input Sheetには、

- Builderが使用するRepository事実
- Builderが扱うTemplate対象
- Repositoryで確認できない事項
- 不足情報

を保持する。

### 禁止

- Builder成果物作成
- 推測
- Repository更新
- Template変更
- Builderが推測補完する前提で入力を省略しない

---

## Step3｜Builder

### Role

Codex

### Purpose

Builder Input Sheetのみを根拠として、
Module Foundationを形成する。

Builderは、
Builder Input Sheet外のRepository事実を追加取得しない。

### Input

- Builder Input Sheet
- 共通Template

Builder Input Sheetに不足がある場合は、
推測せず停止する。

### Output

Builder成果物

### 禁止

- Repository事実外追加
- 推測
- 改善案
- Solution形成
- Builder Input Sheet外のRepository参照

---

## Step4｜Design Validation

### Role

General Design GPT

### Purpose

Builder成果物がFormation対象として成立しているか確認する。

### Input

- Builder成果物
- Builder Input Sheet

### Output

Design Validation Observation

### 禁止

- Builder修正
- Repository変更
- Product Owner Decision代行

---

## Step5｜Review

### Role

Review

### Purpose

Builder成果物とBuilder Input Sheetの一致確認を行う。

あわせて、

Builderが停止した原因が、

Builder成果物ではなく、

Builder Input Sheet不足に起因するか確認する。

### Input

- Builder成果物
- Builder Input Sheet

### Output

Review Observation

必要に応じて、

Builder Input Sheet改善対象

を返却する。

### 禁止

- 本文修正
- 改善案
- Builder代行

---

## Step6｜Implementation

### Role

Codex

### Purpose

Reviewで成立可能となったBuilder成果物をRepositoryへ反映する。

### Input

- Builder成果物
- Review Observation

### Output

Repository反映結果

### 禁止

- Builder成果物修正
- 改善案
- 推測

---

## Step7｜Implementation Validation

### Role

Codex

### Purpose

Repository反映内容がBuilder成果物およびReview Observationと一致しているか確認する。

### Input

- Builder成果物
- Repository反映結果

### Output

Implementation Validation Observation

### 禁止

- Builder成果物修正
- Repository変更
- 改善案

---

## Step8｜Prototype Validation

### Role

General Design GPT

### Purpose

Formationとして成立しているか確認する。

確認対象

- Role
- Boundary
- Purpose
- Self Recognition
- Learning成立

### Output

Formation Validation

### 禁止

- Builder修正
- Repository変更
- Product Owner Decision代行

---

## Step9｜Formation Complete

### Role

Product Owner

### Purpose

Formation成立可否をDecisionする。

Decision後、

対象Module Foundationを
正式Formationとして扱う。

---

# Responsibility

Codex

↓

Observation
Builder

General Design GPT

↓

Builder Input整理
Formation Validation

Product Owner

↓

Decision
Formation成立
