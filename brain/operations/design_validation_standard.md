# Design Validation Standard

## Purpose

Builderが作成した設計成果物が、既存設計書に照らして責務上成立するかを確認するためのOperation Standardを定義する。

Design Validation Standardは、Design Formationを行う標準ではない。

Design Validation Standardは、Builder成果物を確認し、Reviewへ接続可能なDesign Validation成果物を形成することを目的とする。

---

## Position

Design Validation Standardは、Stage 2 — Design Validationで使用するOperation Standardである。

Design Validationは、Design StageとReview Stageを接続する品質確認Stageである。

Design Validationは、Builder成果物を確認し、Reviewへ接続する。

AI設計プロトコル上の流れは以下とする。

Discovery

↓

Builder

↓

Design Validation  
（Design Validation Standardに従い確認）

↓

Review

↓

Product Owner Decision

↓

Implementation

↓

Implementation Validation

---

## Input

Design Validation Standardで使用できる入力は以下とする。

- Builder成果物
- Loading Map
- 必要最小限のConstitution
- 必要System
- 必要Module
- Request ID
- Validation Target
- 確定Design差分
- Design Scope
- Forbidden Change
- Validation Criteria
- Expected Output
- Transfer Information
- Architecture Design Standard
- Builder Standard

入力不足がある場合は推測せず停止する。

---

## Output

Design Validationでは以下を形成する。

- 成立
- 不成立
- 理由
- 必要に応じて確認した設計書

Design ValidationではBuilder成果物を変更しない。

Design Validationでは改善案を形成しない。

Design ValidationではRepository本文を書かない。

---

## Workflow

Design Validationは以下の順で実施する。

1. Builder成果物受領
2. Design Validation Input Contract受領
3. Loading Map参照
4. 必要最小限のConstitution参照
5. 必要System参照
6. 必要Module参照
7. Builder成果物読解
8. Request Contract / Design Scope / Forbidden Change / Validation Criteria確認
9. Architecture Design Standardとの整合確認
10. Builder Standardとの整合確認
11. 責務確認
12. 境界確認
13. 既存設計との整合確認
14. 成立可否判定
15. BuilderまたはReviewへ返却

前工程成果物を推測で補完しない。

---

## Principle

### Input Confirmation

Design Validationは入力不足を確認する。

不足がある場合は推測せず停止する。

### Loading Map Reading

Design ValidationはLoading Mapに基づき、必要な設計書のみを参照する。

Loading Mapで指定されていない対象を推測で追加しない。

### Builder Deliverable Reading

Design ValidationはBuilder成果物を確認対象として扱う。

Builder成果物を変更しない。

### Responsibility Validation

Design ValidationはBuilder成果物が責務上成立するかを確認する。

Design Validationは責務を変更しない。

### Boundary Validation

Design ValidationはBuilder成果物の責務境界を確認する。

Design Validationは境界を変更しない。

### Existing Design Consistency Validation

Design Validationは既存設計との整合を確認する。

確認対象は、Loading Mapで指定された設計書、必要最小限のConstitution、必要System、必要Moduleとする。

### Architecture Design Standard Consistency Validation

Design ValidationはBuilder成果物がArchitecture Design Standardと整合しているかを確認する。

Design ValidationはArchitecture Design Standardを変更しない。

### Builder Standard Consistency Validation

Design ValidationはBuilder成果物およびTransfer InformationがBuilder Standardと整合しているかを確認する。

Design ValidationはBuilder Standardを変更しない。

### Validation Observation

不整合、責務上不成立、境界不整合、Builder成果物と確認対象設計書の不整合は、成立 / 不成立 / 理由として返却する。

Architecture Design Standard上でObservationとして返却対象となる不整合は、Design Validation成果物内で理由として扱う。

### Transfer Formation

Design Validation NGの場合はBuilderへ返却する。

Design Validation OKの場合はReviewへ接続する。

TransferではBuilder成果物を変更しない。

TransferではDesignを追加しない。

---

## Boundary

Design Validationでは以下を扱う。

- Design Validationの責務
- 設計成果物の確認
- Loading Mapに基づく読込
- Return Path
- 終了条件
- Builder成果物が責務上成立するか
- 既存設計書との整合
- 必要最小限のConstitutionとの整合
- 必要Systemとの整合
- 必要Moduleとの整合
- 構造設計レビューでは本文作成前の構造設計の成立可否

Design Validationでは以下を扱わない。

- 設計形成
- 設計変更
- 改善提案
- UI設計
- Module追加
- 実装
- Product判断
- 公開判断
- Constitution Review
- Observation
- Record
- Product Owner Decision
- Implementation
- Implementation Validation
- Maturity
- Git
- Role Input Contract変更
- Loading Rule詳細変更
- Builder以外によるDesign Formation代行

---

## Validation Scope

Design Validationでは以下を確認する。

- Builder成果物が責務上成立するか
- Loading Mapで指定された設計書との整合
- 必要Systemとの整合
- 必要Moduleとの整合
- 必要最小限のConstitutionとの整合
- Request Contractとの整合
- Design Scopeとの整合
- Forbidden Changeとの整合
- Validation Criteriaとの整合
- Architecture Design Standardとの整合
- Builder Standardとの整合
- Transfer Informationとの整合
- 本文作成前の構造設計が責務上成立するか

---

## Validation Root Order

Design Validationでは以下の順で確認する。

1. Design Validation Input Contract
2. Builder成果物
3. Loading Map
4. 必要最小限のConstitution
5. 必要System
6. 必要Module
7. Request Contract / Design Scope / Forbidden Change / Validation Criteria
8. Architecture Design Standard
9. Builder Standard
10. Transfer Information

Repository内で明示されたDesign Validation固有のRoot Orderが確認されない場合、上記の確認順序要素を用いる。

---

## Reading Strategy

Design Validationでは以下を読む。

- Builder成果物
- Loading Map
- 必要最小限のConstitution
- 必要System
- 必要Module
- Request Contract
- Design Scope
- Forbidden Change
- Validation Criteria
- Architecture Design Standard
- Builder Standard
- Transfer Information

Design Validationは、Builder成果物の妥当性確認に必要な入力のみを読む。

---

## Lifecycle

### Start

- Builder成果物を受け取る
- Design Validation Input Contractを受け取る

### Reading

- Loading Map参照
- 必要最小限のConstitution参照
- 必要System参照
- 必要Module参照
- Builder成果物読解

### Validation

- 責務確認
- 境界確認
- 既存設計との整合確認
- 成立可否判定

### Observation

- 不整合がある場合は不成立理由として返却する
- Architecture Design Standard上でObservationとして返却対象となる不整合は、Design Validation成果物内で理由として扱う

### Transfer

- NGはBuilderへ返却する
- OKはReviewへ接続する

### Exit

- 成立 / 不成立が確定
- 理由が説明可能
- Builderまたは次Stageへ返却可能

---

## Transfer

Design Validationは以下を返却する。

- 成立
- 不成立
- 理由
- 必要に応じて確認した設計書

返却先は以下とする。

- Design Validation NG → Builder
- Design Validation OK → Review

返却理由のみ整理する。

設計は修正しない。

---

## Existing Role Boundary

### Builder

BuilderはDiscovery成果物を入力としてDesign Formationを行う。

Design ValidationはBuilder成果物を確認する。

Design ValidationはBuilder成果物を変更しない。

### Review

ReviewはBuilder成果物を採用判断可能な品質か確認する。

Design ValidationはReviewを行わない。

Design Validation OKの場合はReviewへ接続する。

### Product Owner Decision

Product Owner DecisionはProduct Ownerが行う。

Design ValidationはProduct Owner Decisionを行わない。

### Implementation

Implementationは採用済みBuilder成果物をRepositoryへ反映する。

Design ValidationはImplementationを行わない。

Design ValidationはRepository本文を書かない。

Design ValidationはRepository反映を行わない。

---

## Completion Criteria

Design Validation Standardは以下を満たした時に成立する。

- 成立 / 不成立が確定している
- 理由が説明可能である
- Builderまたは次Stageへ返却可能である
- Builder成果物が責務上成立するか確認されている
- 既存設計書との整合が確認されている
- Loading Mapに基づく読込が行われている
- Design Validationが設計を作成していない
- Design Validationが設計を変更していない
- 改善案が含まれていない
- 推測が含まれていない
