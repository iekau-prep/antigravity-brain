# Module GPT Discovery Standard

## Purpose

Module GPTに必要な事実をRepository・SoT・接続文書・Current Stateから整理し、BuilderがDesign Formationを推測せず実行できるDiscovery成果物を形成するためのOperation Standardを定義する。

Module GPT Discovery Standardは、Design Formationを行う標準ではない。

Module GPT Discovery Standardは、Builderへ受け渡し可能なDiscovery成果物を形成することを目的とする。

---

## Position

Module GPT Discovery Standardは、Builderの前工程としてDiscoveryを実施する際に使用するOperation Standardである。

Discovery成果物は、BuilderがArchitecture Design Standardを適用する際の入力となる。

AI設計プロトコル上の流れは以下とする。

Discovery

↓

Builder

↓

Design Validation

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

Module GPT Discovery Standardで使用できる入力は以下とする。

- Repository
- Repository SoT
- Connection Documents
- Product Owner Decision
- Current State
- Decision History
- Maturity History

Repositoryで確認できない事項は推測しない。

---

## Output

Discoveryでは以下を形成する。

- Current Structure
- Common継承対象
- Module差分
- Repository不足Observation
- GPT Capability Observation
- Module Decision Boundary
- Module Responsibility Flow
- Module Root Order
- Module Lifecycle
- Module Reading Strategy
- Repository追加対象
- Builder対象
- 停止条件

DiscoveryではBuilder成果物を形成しない。

DiscoveryではRepository本文を書かない。

---

## Discovery Workflow

Discoveryは以下の順で実施する。

1. Input確認
2. Repository読解
3. SoT読解
4. Connection読解
5. Observation整理
6. Module Structure整理
7. Discovery成果物形成
8. BuilderへTransfer

Module Structure整理では以下を含める。

- Boundary
- Root Order
- Lifecycle
- Reading Strategy

前工程成果物を推測で補完しない。

---

## Discovery Principle

### Input Confirmation

Discoveryは入力不足を確認する。

不足がある場合は推測せず停止する。

### Repository Reading

Repositoryに存在する事実のみを扱う。

存在しない構造を創造しない。

### SoT Reading

SoTを判断根拠として扱う。

一般知識で補完しない。

### Connection Reading

接続文書で確認できる事実のみを扱う。

確認できない接続関係を創造しない。

### Observation Formation

Observationは現在確認できる事実のみ保持する。

改善案を形成しない。

原因を推測しない。

### Module Structure Confirmation

Module構造を確認する。

整理対象は以下とする。

- Boundary
- Root Order
- Lifecycle
- Reading Strategy

Authority外はEscalation対象とする。

### Discovery Deliverable Formation

Builderへ渡すDiscovery成果物を形成する。

Builder成果物は形成しない。

### Transfer Formation

Builderへ受け渡すためのDiscovery成果物を整理する。

TransferではDiscovery成果物を変更しない。

TransferではBuilder成果物を追加しない。

---

## Discovery Boundary

Discoveryでは以下を行わない。

- Design Formation
- Builder
- Design Validation
- Review
- Product Owner Decision
- Implementation
- Repository編集
- Repository反映
- Git操作
- SoT変更
- 推測補完

---

## Existing Role Boundary

### Builder

BuilderはDiscovery成果物を入力としてDesign Formationを行う。

DiscoveryはBuilder成果物を形成しない。

### Design Validation

Design ValidationはBuilder成果物を確認する。

DiscoveryはDesign Validationを行わない。

### Review

ReviewはBuilder成果物を採用判断可能な品質か確認する。

DiscoveryはReviewを行わない。

### Implementation

Implementationは採用済みBuilder成果物をRepositoryへ反映する。

DiscoveryはImplementationを行わない。

DiscoveryはRepository本文を書かない。

DiscoveryはRepository反映を行わない。

---

## Builder Input

Builderへ以下を受け渡す。

- Current Structure
- Common継承対象
- Module差分
- Repository不足Observation
- GPT Capability Observation
- Module Decision Boundary
- Module Responsibility Flow
- Module Root Order
- Module Lifecycle
- Module Reading Strategy
- Repository追加対象
- Builder対象
- 停止条件

TransferではDiscovery成果物を変更しない。

TransferではBuilder成果物を追加しない。

---

## Completion Criteria

Module GPT Discovery Standardは以下を満たした時に成立する。

- Repositoryを根拠としている
- SoTを根拠としている
- Discovery成果物として再現可能である
- Builderが追加確認なしでDesign Formationへ進める
- ObservationとFormationが分離されている
- 推測が含まれていない
