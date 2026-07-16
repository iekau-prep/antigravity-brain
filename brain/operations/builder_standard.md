# Builder Standard

## Purpose

Builderが、Discovery成果物をもとにArchitecture Design Standardを適用し、Design Formationを再現するためのOperation Standardを定義する。

Builder Standardは、Design Formationの内容を定義するものではない。

Builder Standardは、BuilderがDesign Formationを実行し、Design Validationへ受け渡し可能なBuilder成果物を形成することを目的とする。

---

## Position

Architecture Design Standardは、BuilderがDesign Formationを行う際に使用するBuilder内部Standardである。

Builder Standardは、BuilderがArchitecture Design Standardを実行する際のOperation Standardである。

AI設計プロトコル上の流れは以下とする。

Discovery

↓

Builder  
（Builder Standardに従い進行）

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

Builder Standardで使用できる入力は以下とする。

- Discovery成果物
- Architecture Design Standard
- Repository SoT
- Product Owner Decision
- Repository構造
- Decision History
- Current State

Discoveryで確認されていない事項は推測しない。

---

## Output

Builderは以下を形成する。

- Builder成果物
- Transfer Information

Builder成果物は、Architecture Design Standardに基づくDesign Formationを含む設計成果物とする。

BuilderはRepository本文を書かない。

BuilderはRepository反映を行わない。

---

## Builder Workflow

Builderは以下の順で実施する。

1. Input確認
2. Discovery読解
3. Architecture Design Standard適用
4. Design Formation
5. Builder成果物形成
6. Transfer Information形成

前工程成果物を推測で補完しない。

---

## Builder Principle

### Input Confirmation

Builderは入力不足を確認する。

不足がある場合は推測せず停止する。

### Discovery Reading

BuilderはDiscoveryで確認された事実のみを扱う。

Observationを推測で補完しない。

### Architecture Design Application

BuilderはArchitecture Design Standardに従ってDesign Formationを行う。

Architecture Design Standardを変更しない。

### Design Formation

BuilderはArchitecture Design Standardを用いて、以下を形成する。

- Purpose
- Responsibility
- Decision Boundary
- Knowledge Boundary
- Authority Boundary
- Success Criteria
- Connected Module Philosophy
- Connected Modules
- Identity
- Design Deliverable

Connected Module PhilosophyおよびConnected Modulesは、DiscoveryでConnected Modulesが確認された場合のみ形成する。

Connected Modulesは、Discoveryで確認された対象のみ扱う。

### Builder Deliverable Formation

Builder成果物を形成する。

Builder成果物はArchitecture Design Standardに基づくDesign Formationを含む設計成果物として整理する。

Builder成果物はRepository本文ではない。

### Transfer Formation

Design Validationで確認できる状態までTransfer Informationを整理する。

TransferではBuilder成果物を変更しない。

Transferでは新たなDesign Formationを追加しない。

---

## Builder Boundary

Builderでは以下を行わない。

- Discovery
- Repository編集
- Repository反映
- Design Validation
- Review
- Product Owner Decision
- Implementation
- Git操作
- SoT変更
- 推測補完

---

## Existing Role Boundary

### Discovery

DiscoveryはObservation整理を担当する。

BuilderはDiscoveryを変更しない。

### Design Validation

Design ValidationはBuilder成果物を確認する。

BuilderはDesign Validationを行わない。

Design ValidationはBuilder成果物を変更しない。

不整合はObservationとして返却する。

### Review

ReviewはBuilder成果物を採用判断可能な品質か確認する。

BuilderはReviewを行わない。

### Implementation

Implementationは採用済みBuilder成果物をRepositoryへ反映する。

ImplementationはRepository本文を書く。

ImplementationはRepository反映を行う。

BuilderはImplementationを行わない。

BuilderはRepository本文を書かない。

BuilderはRepository反映を行わない。

ImplementationはBuilder成果物を変更しない。

---

## Transfer

Builderは以下をDesign Validationへ受け渡す。

- Builder成果物
- Transfer Information

TransferではBuilder成果物を変更しない。

Transferでは新たなDesign Formationを追加しない。

---

## Design Validation Input

Design Validationでは以下を確認対象とする。

- Discoveryとの整合
- Architecture Design Standardとの整合
- Builder成果物整合
- Transfer Information整合

Design ValidationはBuilder成果物を変更しない。

---

## Completion Criteria

Builder Standardは以下を満たした時に成立する。

- Discovery成果物を根拠としている
- Architecture Design Standardを適用している
- Builder成果物が形成されている
- Transfer Informationが整理されている
- Design Validationへ受け渡し可能である
- 推測が含まれていない
