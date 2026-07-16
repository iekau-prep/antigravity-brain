# Architecture Design Standard

## Purpose

Discoveryで整理された事実をもとに、BuilderがDesign Formationを再現するためのOperation Standardを定義する。

Architecture Design Standardは、Repository本文を書く標準ではない。

Architecture Design Standardは、Implementationへ受け渡し可能なDesign Formationを形成することを目的とする。

---

## Position

Architecture Design Standardは、独立Roleではなく、BuilderがDesign Formationを行う際に使用するBuilder内部Standardである。

Architecture Design Standardは、Discovery成果物を入力として扱い、Builder成果物を形成するために使用する。

AI設計プロトコル上の流れは以下とする。

Discovery

↓

Builder  
（Architecture Design Standardを使用してDesign Formationを実施）

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

Architecture Design Standardで使用できる入力は以下とする。

- Discovery成果物
- Repository SoT
- Product Owner Decision
- Repository構造
- Decision History
- Current State

Discoveryで確認されていない事項は推測しない。

---

## Output

BuilderはArchitecture Design Standardを用いて以下を形成する。

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

Architecture Design StandardはRepository本文を形成しない。

---

## Design Order

Builderは以下の順でDesign Formationを行う。

1. Purpose
2. Responsibility
3. Decision Boundary
4. Knowledge Boundary
5. Authority Boundary
6. Success Criteria
7. Connected Module Philosophy
8. Connected Modules
9. Identity
10. Design Deliverable

Connected Module Philosophyは、DiscoveryでConnected Modulesが確認された場合のみ形成する。

Connected Modulesは、Discoveryで確認された対象のみ形成する。

後工程を先に形成しない。

---

## Design Principle

### Purpose Formation

Discoveryで確認されたPurposeを形成する。

Purposeは、対象が何を実現するかのみを扱う。

実装方法は形成しない。

### Responsibility Formation

Purposeを実現する責務を形成する。

Responsibilityは、何を担当するかのみを扱う。

Howは形成しない。

### Decision Boundary Formation

AIが判断対象として扱う範囲を形成する。

整理対象は以下とする。

- 判断してよい対象
- 判断してはいけない対象
- Product Ownerへ返却する対象
- 他Moduleへ委譲する対象

### Knowledge Boundary Formation

AIが理解対象として保持するKnowledgeを形成する。

整理対象は以下とする。

- SoT
- Repository
- Decision History
- Current State
- Connection Documents

### Authority Boundary Formation

AIが責務として扱えるAuthorityを形成する。

Authority外はEscalation対象とする。

### Success Criteria Formation

AIが責務を果たした成立状態を形成する。

Success Criteriaは、終了条件ではなく成立条件を扱う。

Exit Conditionとは区別する。

### Connected Module Philosophy Formation

DiscoveryでConnected Modulesが確認された場合のみ形成する。

Module間で以下を整理する。

- 何を受け渡すか
- 何を維持するか
- 何を生成しないか

Discoveryで確認されていないConnected Moduleは形成しない。

### Connected Modules Formation

Discoveryで確認されたConnected Modulesのみ整理する。

各Moduleについて以下を形成する。

- Purpose
- Responsibility
- Boundary
- Input
- Output
- Transfer
- Stop Condition

### Identity Formation

Identityは、Discoveryで確認された以下を統合して形成する。

- Purpose
- Responsibility
- Decision Boundary
- Knowledge Boundary
- Authority Boundary
- Success Criteria

Identityから新たなPurposeやResponsibilityを生成しない。

### Design Deliverable

Design Deliverableとは、

Builder成果物としてImplementationへ受け渡すDesign Formation成果物を指す。

### Design Deliverable Formation

Implementationへ受け渡すDesign Formationを形成する。

Implementationが、採用済みDesign Formationを推測せずRepositoryへ反映できる粒度まで整理する。

Architecture Design StandardはRepository本文を書かない。

---

## Architecture Boundary

Architecture Design Standardでは以下を行わない。

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

### Builder

Architecture Design StandardはBuilder内部Standardであり、BuilderがDesign Formationを行う際に使用する。

Builderは以下を担当する。

- Design Formation
- Discovery成果物をもとにした設計成果物形成
- Request Scope内でのPurpose / Responsibility / Boundary等の整理
- 後工程へ受け渡せるBuilder成果物形成

Architecture Design StandardはBuilder責務を変更しない。

### Design Validation

Design Validationは確認対象を扱い、Designを変更しない。

不整合はObservationとして返却する。

Architecture Design StandardはDesign Validation責務を扱わない。

### Review

ReviewはReview工程を扱う。

Architecture Design StandardはReviewを行わない。

Architecture Design StandardはReview工程そのものを扱わない。

### Implementation

Implementationは、採用済みDesign FormationをRepositoryへ反映する。

ImplementationはRepository本文を書く。

ImplementationはRepository反映を行う。

Architecture Design StandardはImplementation責務を扱わない。

BuilderはRepository本文を書かない。

BuilderはRepository反映を行わない。

BuilderはImplementationを行わない。

ImplementationはBuilder成果物を変更しない。

---

## Design Validation Input

Design Validationでは以下を確認対象とする。

- Discoveryとの整合
- Request Contractとの整合
- Repository思想との整合
- Purpose整合
- Responsibility整合
- Decision Boundary整合
- Knowledge Boundary整合
- Authority Boundary整合
- Success Criteria整合
- Connected Module整合
- Identity整合

Design ValidationはDesignを変更しない。

不整合はObservationとして返却する。

---

## Completion Criteria

Architecture Design Standardは以下を満たした時に成立する。

- Discoveryから導出できる
- Design Formationとして再現可能
- Purposeが明確
- Responsibilityが明確
- Decision Boundaryが明確
- Success Criteriaが明確
- Product Ownerとの境界が明確
- 他Moduleとの境界が明確
- IdentityがPurpose・Responsibility・Decision Boundary・Knowledge Boundary・Authority Boundary・Success Criteriaから整合して導出されている
- 推測が含まれていない
