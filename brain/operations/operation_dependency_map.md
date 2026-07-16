# Operation Dependency Map

## Purpose

Operation Dependency Mapは、Operation間の依存関係をRepository資産として定義する。

Operation Dependency Mapは、Operation Node、Dependency、Input Dependency、Output Dependency、Transfer Dependency、Stage Dependency、Required Operation、Optional Operation、Stop Dependencyを一体化して保持する。

Operation Dependency Mapは、各Operation Standard本文を変更するものではない。

---

## Position

Operation Dependency Mapは、Operation間の接続構造と受け渡し構造を整理するOperation Standardである。

Operation Dependency Mapは、各Operationが自身の責務のみを扱い、前後Stageや後続Roleの責務を代行しないために使用する。

Operation Dependency Mapは、Repository本文作成、Repository編集、Repository反映、Implementation、Git操作を行わない。

---

## Operation Node

Operation Dependency Mapで扱うOperation Nodeは以下とする。

- Module GPT Discovery Standard
- Architecture Design Standard
- Builder Standard
- Design Validation Standard
- Review Standard
- Operation Standard Template
- AI Development Lifecycle Standard
- AI Role Architecture
- Operation Constitution
- AI Loading Map
- Role Input Contract
- Current State
- Decision History
- Maturity History
- Progress Board

---

## Dependency

Operation間のDependencyは以下とする。

- Discovery → Builder
- Builder → Design Validation
- Design Validation → Review
- Review → Product Owner Decision
- Product Owner Decision → Implementation
- Implementation → Implementation Validation

ADLS上で確認できるStage構造は以下とする。

- Discovery
- Builder
- Design Validation
- Review
- Product Owner Decision
- Implementation
- Implementation Validation

---

## Input Dependency

### Module GPT Discovery Standard

Module GPT Discovery Standardは以下をInput Dependencyとして扱う。

- Repository
- Repository SoT
- Connection Documents
- Product Owner Decision
- Current State
- Decision History
- Maturity History

### Architecture Design Standard

Architecture Design Standardは以下をInput Dependencyとして扱う。

- Discovery成果物
- Repository SoT
- Product Owner Decision
- Repository構造
- Decision History
- Current State

### Builder Standard

Builder Standardは以下をInput Dependencyとして扱う。

- Discovery成果物
- Architecture Design Standard
- Repository SoT
- Product Owner Decision
- Repository構造
- Decision History
- Current State

### Design Validation Standard

Design Validation Standardは以下をInput Dependencyとして扱う。

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

### Review Standard

Review Standardは以下をInput Dependencyとして扱う。

- Builder成果物
- Design Validation結果
- AI Loading Mapで指定された設計書
- Request ID
- Review Target
- 対象成果物
- Review Scope
- Forbidden Change
- Review Criteria
- Expected Output
- Transfer Information

---

## Output Dependency

### Module GPT Discovery Standard

Module GPT Discovery Standardは以下をOutput Dependencyとして扱う。

- Discovery成果物

### Architecture Design Standard

Architecture Design Standardは以下をOutput Dependencyとして扱う。

- Design Formation対象

### Builder Standard

Builder Standardは以下をOutput Dependencyとして扱う。

- Builder成果物
- Transfer Information

### Design Validation Standard

Design Validation Standardは以下をOutput Dependencyとして扱う。

- 成立
- 不成立
- 理由
- 必要に応じて確認した設計書

### Review Standard

Review Standardは以下をOutput Dependencyとして扱う。

- 進行可
- 停止
- 理由

### Operation Standard Template

Operation Standard Templateは以下をOutput Dependencyとして扱う。

- Operation Standard Template
- Common継承対象
- Operation差分
- Repository不足Observation
- GPT Capability Observation
- Operation Boundary
- Operation Responsibility Flow
- Operation Root Order
- Operation Lifecycle
- Operation Reading Strategy
- Repository追加対象
- Builder対象
- 停止条件

---

## Transfer Dependency

Operation間のTransfer Dependencyは以下とする。

- Discovery成果物 → Builder
- Builder成果物 / Transfer Information → Design Validation
- Design Validation OK → Review
- Design Validation NG → Builder
- Review完了 → Decision
- Review停止 → Builder

Transfer Informationによって成果物を受け渡す。

Transferでは成果物を変更しない。

Transferでは新たなFormationを追加しない。

前工程成果物を推測で補完しない。

---

## Stage Dependency

ADLS上でStage / Owner / Roleは分離されている。

RoleはStageではない。

Ownerは当該Stageの成果物に責任を持つ。

各Stageは自身の責務のみを完了し、成果物を次Stageへ引き渡す。

前後のStageの責務を代行しない。

Product Owner DecisionはProduct Ownerが行う。

---

## Required Operation

Operation Dependency MapでRequired Operationとして扱うものは以下とする。

- Module GPT Discovery Standard
- Architecture Design Standard
- Builder Standard
- Design Validation Standard
- Review Standard
- Operation Standard Template

---

## Optional Operation

Repository内でOperation Dependency Map固有のOptional Operation定義は確認されない。

---

## Stop Dependency

Operation Dependency Mapで扱うStop Dependencyは以下とする。

- 入力不足
- SoT不足
- 前工程成果物不足
- Product Owner Decision未確定
- Request Scope外
- Role責務越境
- Repository確認が必要な工程でRepositoryへアクセスできない

入力不足がある場合は推測せず停止する。

---

## Operation Dependency Boundary

Operation Dependency Mapでは以下を扱う。

- Operation Node
- Dependency
- Input Dependency
- Output Dependency
- Transfer Dependency
- Stage Dependency
- Required Operation
- Optional Operation
- Stop Dependency
- Operation間の接続構造
- Operation間の受け渡し構造
- Operation間の責務境界
- Repository不足Observation
- GPT Capability Observation
- Builder対象
- 停止条件

Operation Dependency Mapでは以下を扱わない。

- 各Operation Standard本文の変更
- 各Role責務の変更
- 新Role追加
- 新Stage追加
- Product Owner Decision
- Design Formation
- Design Validation
- Review
- Implementation
- Repository本文作成
- Repository編集
- Repository反映
- Git操作
- SoT変更
- 改善案作成
- 推測補完

---

## Operation Dependency Responsibility Flow

### Input

Operation Dependency Mapは以下をInputとして扱う。

- Architecture Design Standard
- Builder Standard
- Module GPT Discovery Standard
- Design Validation Standard
- Review Standard
- Operation Standard Template
- AI Development Lifecycle Standard
- AI Role Architecture
- Operation Constitution
- AI Loading Map
- Role Input Contract
- Current State
- Decision History
- Maturity History
- Progress Board

### Reading

Operation Dependency Mapは以下を読む。

- 各Operation Standard本文
- Operation Standard Template
- ADLS
- AI Role Architecture
- Operation Constitution
- Role Input Contract
- AI Loading Map
- Current State
- Decision History
- Maturity History
- Progress Board

### Analysis

Operation Dependency Mapでは以下を整理する。

- Operation Node
- Dependency
- Input Dependency
- Output Dependency
- Transfer Dependency
- Stage Dependency
- Required Operation
- Optional Operation
- Stop Dependency
- Repository不足Observation
- GPT Capability Observation
- Boundary
- Root Order
- Lifecycle
- Reading Strategy

### Observation

Operation Dependency Mapでは以下をObservation対象とする。

- Repository不足
- Dependency不足
- Transfer不足
- Authority不足
- Current State不足
- Decision History不足
- Request Contract不足
- 停止条件不足
- 判断根拠不足

### Formation

Operation Dependency Mapでは以下を形成する。

- Discovery成果物
- Repository追加対象
- Builder対象
- 停止条件

### Transfer

Operation Dependency MapはBuilderへDiscovery成果物を受け渡す。

TransferではDiscovery成果物を変更しない。

TransferではBuilder成果物を追加しない。

### Output

Operation Dependency Mapは以下をOutputとして扱う。

- Current Structure
- Common継承対象
- Operation Dependency差分
- Repository不足Observation
- GPT Capability Observation
- Operation Dependency Boundary
- Operation Dependency Responsibility Flow
- Operation Dependency Root Order
- Operation Dependency Lifecycle
- Operation Dependency Reading Strategy
- Repository追加対象
- Builder対象
- 停止条件

---

## Operation Dependency Root Order

Operation Dependency Map内SoT競合時の専用Root OrderはRepository内で確認されない。

Repository内の事実から確認できる参照対象は以下とする。

1. Operation Constitution
2. AI Development Lifecycle Standard
3. AI Role Architecture
4. Role Input Contract
5. AI Loading Map
6. Operation Standard Template
7. Architecture Design Standard
8. Builder Standard
9. Module GPT Discovery Standard
10. Design Validation Standard
11. Review Standard
12. Current State
13. Decision History
14. Maturity History
15. Progress Board
16. Transfer Information

ADLSで確認できるStage順序は以下とする。

1. Governance
2. Design
3. Design Validation
4. Review
5. Decision
6. Implementation
7. Implementation Validation

Operation Standard群で確認できる進行順序は以下とする。

1. Discovery
2. Builder
3. Design Validation
4. Review
5. Product Owner Decision
6. Implementation
7. Implementation Validation

---

## Operation Dependency Lifecycle

### Start

- Request Scopeを確認する
- 入力不足を確認する
- 対象Operation Standard群を確認する

### Reading

- Operation Standard Templateを読む
- 成立済みOperation Standard群を読む
- ADLSを読む
- AI Role Architectureを読む
- Operation Constitutionを読む
- Role Input Contractを読む
- AI Loading Mapを読む
- Current State / Decision History / Maturity Historyを読む
- Progress Boardを読む

### Analysis

- Operation Nodeを整理する
- Dependencyを整理する
- Input Dependencyを整理する
- Output Dependencyを整理する
- Transfer Dependencyを整理する
- Stage Dependencyを整理する
- Required Operationを整理する
- Optional Operationを整理する
- Stop Dependencyを整理する
- Repository不足Observationを整理する
- GPT Capability Observationを整理する

### Formation

- Discovery成果物を形成する
- Repository追加対象を整理する
- Builder対象を整理する
- 停止条件を整理する

### Transfer

- BuilderへDiscovery成果物を受け渡す
- TransferではDiscovery成果物を変更しない
- TransferではBuilder成果物を追加しない

### Exit

- Operation間の現在構造が整理されている
- Dependency差分が整理されている
- Repository不足Observationが整理されている
- GPT Capability Observationが整理されている
- Builderへ渡す対象が整理されている
- 停止条件が整理されている

---

## Operation Dependency Reading Strategy

Operation Dependency Mapは以下を読む。

- Operation Standard Template
- Module GPT Discovery Standard
- Architecture Design Standard
- Builder Standard
- Design Validation Standard
- Review Standard
- AI Development Lifecycle Standard
- AI Role Architecture
- Operation Constitution
- AI Loading Map
- Role Input Contract
- Current State
- Decision History
- Maturity History
- Progress Board

Operation Dependency Mapは、Operation間Dependency整理に必要な対象のみを読む。

---

## Transfer

Operation Dependency Mapは以下をBuilderへ受け渡す。

- Current Structure
- Common継承対象
- Operation Dependency差分
- Repository不足Observation
- GPT Capability Observation
- Operation Dependency Boundary
- Operation Dependency Responsibility Flow
- Operation Dependency Root Order
- Operation Dependency Lifecycle
- Operation Dependency Reading Strategy
- Repository追加対象
- Builder対象
- 停止条件

TransferではDiscovery成果物を変更しない。

TransferではBuilder成果物を追加しない。

---

## Completion Criteria

Operation Dependency Mapは以下を満たした時に成立する。

- Operation Nodeが整理されている
- Dependencyが整理されている
- Input Dependencyが整理されている
- Output Dependencyが整理されている
- Transfer Dependencyが整理されている
- Stage Dependencyが整理されている
- Required Operationが整理されている
- Optional Operationが整理されている
- Stop Dependencyが整理されている
- Operation間の現在構造が整理されている
- Builderへ渡す対象が整理されている
- 停止条件が整理されている
- 各Operation Standard本文を変更していない
- 各Role責務を変更していない
- Repository本文を作成していない
- Repository編集を行っていない
- Repository反映を行っていない
- Git操作を行っていない
- 推測が含まれていない
