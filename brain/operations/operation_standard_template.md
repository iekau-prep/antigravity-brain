# Operation Standard Template

## Purpose

Operation Standard Templateは、Repository内の成立済みOperation Standard群に共通する構造を定義する。

Operation Standard Templateは、各Operation Standardを形成する際に、Purpose / Position / Input / Output / Workflow / Principle / Boundary / Transfer / Completion Criteriaを推測せず整理できる状態を保持する。

Operation Standard Templateは、各Operation Standard本文を変更するものではない。

---

## Position

Operation Standard Templateは、Operation StandardをRepository資産として形成する際に参照するTemplateである。

Operation Standard Templateは、Architecture Design StandardをBuilder内部Standardとして適用して形成される。

Operation Standard Templateは、既存Operation Standard群の共通構造を保持する。

Operation Standard Templateは、各Operation Standardの責務を変更しない。

---

## Input

Operation Standard Templateで扱う入力は以下とする。

- 既存Operation Standard群
- Repository SoT
- Current State
- Decision History
- Maturity History
- Progress Board
- Request Scope
- Transfer Information

入力不足がある場合は推測せず停止する。

---

## Output

Operation Standard Templateは以下を形成する。

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

Operation Standard TemplateはRepository本文を変更しない。

Operation Standard TemplateはRepository反映を行わない。

---

## Workflow

Operation Standard Templateは以下の順で形成する。

1. Request Scope確認
2. 入力不足確認
3. 既存Operation Standard群確認
4. Repository SoT確認
5. Current State / Decision History / Maturity History確認
6. Progress Board確認
7. Common継承対象整理
8. Operation差分整理
9. Repository不足Observation整理
10. GPT Capability Observation整理
11. Operation Boundary整理
12. Operation Responsibility Flow整理
13. Operation Root Order整理
14. Operation Lifecycle整理
15. Operation Reading Strategy整理
16. Repository追加対象整理
17. Builder対象整理
18. 停止条件整理

前工程成果物を推測で補完しない。

---

## Principle

### Input Confirmation

入力不足がある場合は推測せず停止する。

前工程成果物を推測で補完しない。

### Common Structure Formation

既存Operation Standard群から確認できる共通構造のみをTemplateとして整理する。

共通構造は以下とする。

- Purpose
- Position
- Input
- Output
- Workflow
- Principle
- Boundary
- Existing Role Boundary
- Transfer
- Completion Criteria

### Operation Difference Formation

Operation固有差分を整理する。

Operation固有差分は、対象Operation Standard固有の章・確認対象・責務境界として扱う。

### Workflow Formation

Workflow / Design Order / Discovery Workflow / Builder Workflow は、Template上ではWorkflowの同一階層として扱う。

各Operation Standard固有の名称は、Operation差分として扱う。

### Principle Formation

Principle / Design Principle / Discovery Principle / Builder Principle は、Template上ではPrincipleの同一階層として扱う。

各Operation Standard固有の名称は、Operation差分として扱う。

### Boundary Formation

Boundary / Architecture Boundary / Discovery Boundary / Builder Boundary は、Template上ではBoundaryの同一階層として扱う。

各Operation Standard固有の名称は、Operation差分として扱う。

### Root Order Formation

Operation内SoT競合時の確認順序を整理する。

Operation Standard Template用に明示されたRoot Orderが確認されない場合、既存Standard群から確認できる順序要素を扱う。

### Lifecycle Formation

OperationのStart / Reading / Formation / Transfer / Exitを整理する。

Lifecycleは、Operation Standardを推測せず形成するための進行構造として扱う。

### Reading Strategy Formation

Operation GPTが読む対象を整理する。

Reading Strategyは、対象Repository構造、既存Standard群、Progress Board、Operation SoT、Current State、Decision History、Maturity History、Transfer Informationを扱う。

### Transfer Formation

TransferではDiscovery成果物を変更しない。

TransferではBuilder成果物を追加しない。

Transferでは成果物を変更しない。

Transferでは新たなFormationを追加しない。

### Responsibility Boundary Formation

各Operationは自身の責務のみを扱う。

後続Roleの責務を代行しない。

Product Owner Decisionを代行しない。

Repository本文を書かない。

Repository反映を行わない。

Git操作を行わない。

---

## Boundary

Operation Standard Templateでは以下を扱う。

- 対象Operation StandardのPurpose
- 対象Operation StandardのPosition
- 対象Operation StandardのInput
- 対象Operation StandardのOutput
- 対象Operation StandardのWorkflow
- 対象Operation StandardのPrinciple
- 対象Operation StandardのBoundary
- 対象Operation StandardのTransfer
- 対象Operation StandardのCompletion Criteria
- 既存Standard群との共通構造
- Operation固有差分
- Repository不足Observation
- GPT Capability Observation
- Builder対象
- 停止条件

Operation Standard Templateでは以下を扱わない。

- Repository本文作成
- Repository編集
- Repository反映
- Git操作
- Product Owner Decision
- Implementation
- SoT変更
- 新Role追加
- 推測補完
- 改善案作成
- 各Operation Standard本文の変更
- 各Role責務の変更

---

## Existing Role Boundary

### Builder

BuilderはArchitecture Design StandardをBuilder内部Standardとして適用し、Operation Standard Templateを形成する。

BuilderはRepository本文を書かない。

BuilderはRepository反映を行わない。

### Design Validation

Design ValidationはBuilder成果物を確認する。

Operation Standard TemplateはDesign Validationを代行しない。

### Review

ReviewはBuilder成果物を採用判断可能な品質か確認する。

Operation Standard TemplateはReviewを代行しない。

### Product Owner Decision

Product Owner DecisionはProduct Ownerが行う。

Operation Standard TemplateはProduct Owner Decisionを代行しない。

### Implementation

Implementationは採用済みBuilder成果物をRepositoryへ反映する。

Operation Standard TemplateはImplementationを行わない。

Operation Standard TemplateはRepository反映を行わない。

---

## Operation Root Order

Operation内SoT競合時の優先順位として、Operation Standard Template用に明示されたRoot Orderは確認されていない。

Operation Standard Templateでは、既存Standard群から確認できる以下の順序要素を扱う。

1. Request Scope
2. 対象Operation Standard
3. Repository SoT
4. Current State
5. Decision History
6. Maturity History
7. Progress Board
8. Transfer Information

Design Validation Standard固有のRoot OrderはDesign Validation Standard内で扱う。

Review Standard固有のRoot OrderはReview Standard内で扱う。

---

## Operation Lifecycle

### Start

- 対象Operation Standard群を確認する
- Request Scopeを確認する
- 入力不足を確認する

### Reading

- Repository内の既存Standard群を読む
- 関連SoTを読む
- Current State / Decision History / Maturity Historyを読む
- Progress Boardを読む

### Formation

- Current Structureを整理する
- Common継承対象を整理する
- Operation差分を整理する
- Repository不足Observationを整理する
- GPT Capability Observationを整理する
- Operation Boundaryを整理する
- Operation Responsibility Flowを整理する
- Operation Root Orderを整理する
- Operation Reading Strategyを整理する
- Repository追加対象を整理する
- Builder対象を整理する
- 停止条件を整理する

### Transfer

- BuilderへDiscovery成果物を渡す
- TransferではDiscovery成果物を変更しない
- TransferではBuilder成果物を追加しない

### Exit

- Discovery成果物が形成されている
- BuilderがRepository資産形成へ進める状態
- 推測が含まれていない
- 停止条件が整理されている

---

## Operation Reading Strategy

Operation Standard Templateでは以下を読む。

- 対象Repository構造
- Architecture Design Standard
- Builder Standard
- Module GPT Discovery Standard
- Design Validation Standard
- Review Standard
- 各Progress Board
- Operation SoT
- Current State
- Decision History
- Maturity History
- Transfer Information

Operation Standard Templateは、Template形成に必要な対象のみを読む。

---

## Transfer

Operation Standard Templateは以下をBuilderへ受け渡す。

- Current Structure
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

TransferではDiscovery成果物を変更しない。

TransferではBuilder成果物を追加しない。

Transferでは成果物を変更しない。

Transferでは新たなFormationを追加しない。

---

## Completion Criteria

Operation Standard Templateは以下を満たした時に成立する。

- 既存Operation Standard群の共通構造から導出されている
- Common継承対象が整理されている
- Operation差分が整理されている
- Operation Boundaryが整理されている
- Operation Responsibility Flowが整理されている
- Operation Root Orderが整理されている
- Operation Lifecycleが整理されている
- Operation Reading Strategyが整理されている
- BuilderがRepository資産形成へ進める状態である
- Repository本文を書いていない
- Repository反映を行っていない
- Git操作を行っていない
- Product Owner Decisionを代行していない
- 推測が含まれていない
