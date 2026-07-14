# Operation Constitution

Updated: 2026-07-15
Status: Draft v1

## Purpose

Operation Constitution全体の構造・責務境界形成

## Scope

Draft v1全体

## Responsibility

Operation Constitutionは、Operation全体におけるLifecycle、Role、責務境界、成果物管理、Loading、Record、Lifecycle Evolution Policyを統括する。

## Responsibility Boundary

Operation Constitutionは、Constitution思想変更、System設計変更、Module設計変更、Product設計変更、Implementation、Git運用を扱わない。

## Relationship

Operation Constitutionは、以下のSoTを参照する。

- Constitution
- Operations README
- AI Development Lifecycle Standard
- AI Role Architecture
- AI Loading Map
- Role Input Contract

## Related Documents

- Constitution
- Operations README
- AI Development Lifecycle Standard
- AI Role Architecture
- AI Loading Map
- Role Input Contract
- Record Operation
- Maturity README

## Change Policy

Operation Constitution変更時の原則を定義する。

ここでは変更内容ではなく、
どの責務を変更できるかのみ扱う。

# 1. Operation Principle

## Purpose

Operation Constitution全体に共通する最上位の運用原則を定義する。

OperationはAIやRoleを管理するものではなく、成果物を中心とした運用原則を保持し、安全かつ再現性のあるLifecycleを維持することを目的とする。

## Responsibility

Operation Principleは以下を保持する。

- Operation全体の最上位運用原則
- 成果物を中心とした運用原則
- Stageごとに責務を完結させる原則
- Request Contract範囲内で責務を遂行する原則
- Transfer Informationによって成果物を受け渡す原則
- Product Ownerのみが最終Decisionを行う原則
- 必要最小限のLoadingを維持する原則
- 不足情報を推測せず停止する原則
- Constitution / System / Operation / Module / Implementation の責務階層を維持する原則

## Responsibility Boundary

Operation Principleは以下を扱わない。

- Lifecycle Structureの詳細
- Stage定義
- Role定義
- Owner定義
- Artifact定義
- Request Contract詳細
- Transfer Information詳細
- Return Path詳細
- Loading Rule詳細
- Record詳細
- Maturity Management詳細
- Lifecycle Evolution Policy詳細
- Constitution思想変更
- System設計変更
- Module設計変更
- Product設計変更
- Implementation
- Git運用

## Relationship

Operation Principleは以下をSoTとして参照する。

- Constitution
- Operations README
- AI Development Lifecycle Standard
- AI Role Architecture
- AI Loading Map
- Role Input Contract

Operation Principleは個別Operation文書を変更せず、それらを統括する最上位Operation原則として位置付けられる。

# 2. Lifecycle Structure

Lifecycle Structureは、Operation全体がどの単位で構成されるかを定義する。

Lifecycleそのものを変更することではなく、各構成要素の責務境界を維持することを目的とする。

## 2.1 Stage

### Purpose

Lifecycleを構成する工程単位を定義する。

各Stageは成果物を形成・確認・受渡しする責務単位として扱う。

### Responsibility

Stageは以下を保持する。

- Lifecycle工程
- 工程順序
- Stage責務
- Stage開始条件
- Stage終了条件
- Stage成果物
- 次Stageへの受渡し

### Responsibility Boundary

Stageは以下を扱わない。

- Role責務
- Owner責務
- Decision主体
- Request Contract詳細
- Transfer Information詳細
- Record
- Maturity
- Implementation

### Relationship

Stageは以下をSoTとして参照する。

- AI Development Lifecycle Standard
- 各Operation文書

StageはRoleと協調して成果物を形成するが、Roleそのものを定義しない。

## 2.2 Role

### Purpose

各Stageで成果物を扱う責務主体を定義する。

Roleは工程ではなく、責務境界を維持する単位として扱う。

### Responsibility

Roleは以下を保持する。

- Role責務
- 権限
- 禁止事項
- Role間受渡し
- Product Ownerとの関係

### Responsibility Boundary

Roleは以下を扱わない。

- Lifecycle順序
- Stage構成
- Owner定義
- Product Decision
- Constitution変更
- Implementation

### Relationship

Roleは以下をSoTとして参照する。

- AI Role Architecture
- AI Development Lifecycle Standard

RoleはStage内で責務を遂行するが、Stageそのものを管理しない。

## 2.3 Owner

### Purpose

各Stageにおける責任主体を定義する。

Ownerは実施者ではなく、Stage完了責任を保持する主体として扱う。

### Responsibility

Ownerは以下を保持する。

- Stage責任主体
- Stage完了承認主体
- Product Ownerとの責務境界
- Owner変更境界

### Responsibility Boundary

Ownerは以下を扱わない。

- Role定義
- Stage定義
- Decision代行
- Implementation
- Record

### Relationship

Ownerは以下をSoTとして参照する。

- AI Development Lifecycle Standard
- AI Role Architecture

OwnerはStage責任を保持するが、Roleそのものを変更しない。

# 3. Responsibility Boundary

Responsibility Boundaryは、Operation全体における責務境界を定義する。

各Stage・Role・Decision・停止判断が互いの責務を越権しないための共通原則を保持する。

## 3.1 Responsibility Boundary

### Purpose

各Stageおよび各Roleが、自身の責務のみを遂行する原則を定義する。

### Responsibility

Responsibility Boundaryは以下を保持する。

- Stage責務境界
- Role責務境界
- 成果物責務境界
- 越権禁止原則
- SoT参照境界

### Responsibility Boundary

本章は以下を扱わない。

- Decision可否
- Stop Condition詳細
- Request Contract詳細
- Artifact詳細
- Loading Rule詳細
- Implementation

### Relationship

Responsibility Boundaryは以下をSoTとして参照する。

- AI Development Lifecycle Standard
- AI Role Architecture
- Role Input Contract

Responsibility Boundaryは各Operation文書の責務境界を変更せず、それらを統括する。

## 3.2 Decision Boundary

### Purpose

Operation全体において、Decisionを行える主体と、Decisionを行わない主体を定義する。

### Responsibility

Decision Boundaryは以下を保持する。

- Product Owner最終Decision原則
- RoleごとのDecision境界
- 採用可否境界
- Decision代行禁止
- 評価とDecisionの分離

### Responsibility Boundary

本章は以下を扱わない。

- Decision内容
- Product判断
- Design形成
- Validation
- Review
- Implementation

### Relationship

Decision Boundaryは以下をSoTとして参照する。

- AI Development Lifecycle Standard
- Review Operation
- AI Role Architecture

Decision Boundaryは各Stageの責務を変更せず、Decision主体のみを統括する。

## 3.3 Stop Condition

### Purpose

Operation全体において、推測せず停止する条件を定義する。

### Responsibility

Stop Conditionは以下を保持する。

- Input不足時停止
- 責務越境時停止
- SoT不足時停止
- Request Scope外停止
- 推測禁止原則

### Responsibility Boundary

本章は以下を扱わない。

- Return Path詳細
- Loading詳細
- Product判断
- Implementation
- Git

### Relationship

Stop Conditionは以下をSoTとして参照する。

- Role Input Contract
- Observation Operation
- AI Development Lifecycle Standard

Stop Conditionは停止条件のみを統括し、返却経路は定義しない。

# 4. Artifact Management

Artifact Managementは、Operation全体で扱う成果物と受け渡し原則を定義する。

成果物を中心としてLifecycleを維持するための共通管理構造を保持する。

## 4.1 Artifact

### Purpose

各Stageで形成・確認・採用・実装・記録される成果物を定義する。

### Responsibility

Artifactは以下を保持する。

- 成果物
- 成果物境界
- Stage成果物
- 成果物単位
- 成果物受渡し対象

### Responsibility Boundary

本章は以下を扱わない。

- Request Contract詳細
- Transfer詳細
- Return Path詳細
- Record
- Git

### Relationship

Artifactは以下をSoTとして参照する。

- AI Development Lifecycle Standard
- 各Operation文書

Artifactは成果物そのものを管理し、成果物の流れはTransfer Informationで扱う。

## 4.2 Request Contract

### Purpose

各Stageが開始されるために必要な依頼境界を定義する。

### Responsibility

Request Contractは以下を保持する。

- Request Scope
- Purpose
- Allowed
- Forbidden
- Out of Scope
- Deliverables
- Stop Conditions

### Responsibility Boundary

本章は以下を扱わない。

- Design内容
- Decision
- Artifact内容
- Transfer内容
- Implementation

### Relationship

Request Contractは以下をSoTとして参照する。

- AI Development Lifecycle Standard
- Role Input Contract

Request ContractはStage開始条件を定義し、成果物受渡しはTransfer Informationで扱う。

## 4.3 Transfer Information

### Purpose

成果物を各Stage間で受け渡すための共通情報を定義する。

### Responsibility

Transfer Informationは以下を保持する。

- From
- To
- Next Stage
- Transfer Purpose
- Transfer Target
- Transfer Status
- Transfer Remarks

### Responsibility Boundary

本章は以下を扱わない。

- Request Scope
- Decision
- Return Path
- Record

### Relationship

Transfer Informationは以下をSoTとして参照する。

- AI Development Lifecycle Standard
- Role Input Contract

Transfer Informationは成果物受渡しのみを扱い、依頼条件はRequest Contractで扱う。

## 4.4 Return Path

### Purpose

停止・差戻し・再形成時の返却経路を定義する。

### Responsibility

Return Pathは以下を保持する。

- 差戻し先
- 再形成先
- Return理由
- Stage復帰原則
- Lifecycle整合維持

### Responsibility Boundary

本章は以下を扱わない。

- Stop Condition
- Decision
- Record
- Git

### Relationship

Return Pathは以下をSoTとして参照する。

- AI Development Lifecycle Standard
- 各Operation文書

Return Pathは返却経路のみを統括し、停止条件はStop Conditionで扱う。

# 5. Loading Rule

Loading Ruleは、各Roleが責務遂行に必要な設計資産のみを読み込み、責務混線を防ぐための共通原則を定義する。

## Purpose

Roleごとの読込境界を定義し、必要最小限のLoadingによってOperation全体の再現性と責務分離を維持する。

## Responsibility

Loading Ruleは以下を保持する。

- 必要最小限のLoading原則
- Role別読込範囲
- 読込順序
- SoT参照原則
- 責務混線防止原則
- 担当外文書を原則読まない原則

## Responsibility Boundary

本章は以下を扱わない。

- Role定義
- Stage定義
- Request Contract詳細
- Transfer Information詳細
- Implementation
- Git運用

## Relationship

Loading Ruleは以下をSoTとして参照する。

- AI Loading Map
- AI Role Architecture
- Operations README

Loading Ruleは読込方法のみを統括し、Role責務そのものは定義しない。

# 6. Record

Recordは、Operation全体の現在状態を記録する責務を定義する。

設計内容やDecisionを保持するのではなく、Lifecycle上の状態管理を目的とする。

## 6.1 Record

### Purpose

Lifecycleにおける現在状態および工程履歴を記録する。

### Responsibility

Recordは以下を保持する。

- 現在状態
- 工程履歴
- Lifecycle状態
- Record更新
- 状態管理

### Responsibility Boundary

本章は以下を扱わない。

- Design内容
- Review内容
- Decision理由
- Implementation内容
- Maturity内容

### Relationship

Recordは以下をSoTとして参照する。

- Record Operation
- AI Development Lifecycle Standard

RecordはLifecycle状態を保持するが、成熟状態はMaturity Managementで扱う。

## 6.2 Maturity Management

### Purpose

成熟状態のみを管理する責務を定義する。

### Responsibility

Maturity Managementは以下を保持する。

- 成熟状態
- 現在地
- Phase
- 案件状態
- Maturity更新原則

### Responsibility Boundary

本章は以下を扱わない。

- Decision
- Builder成果物
- Validation結果
- Review結果
- Implementation成果物
- 理由
- 議論
- 設計内容

### Relationship

Maturity Managementは以下をSoTとして参照する。

- brain/maturity/README.md
- Operation Maturity Board
- System Maturity Board

Maturity Managementは成熟状態のみを管理し、成果物そのものは管理しない。

# 7. Lifecycle Evolution Policy

Lifecycle Evolution Policyは、Operation全体のLifecycle変更原則を定義する。

既存構造を維持しながら、必要時のみ安全に進化させるための統括原則を保持する。

## Purpose

Lifecycle・Stage・Role・Operation構造の変更境界を定義し、Operation全体の再現性を維持する。

## Responsibility

Lifecycle Evolution Policyは以下を保持する。

- Lifecycle変更原則
- Stage追加原則
- Role追加原則
- Operation追加原則
- SoT維持原則
- 後方互換性維持原則
- 段階的成熟原則

## Responsibility Boundary

本章は以下を扱わない。

- 新Stage定義
- 新Role定義
- Constitution変更
- System変更
- Product変更
- Module変更
- Implementation
- Git運用

## Relationship

Lifecycle Evolution Policyは以下をSoTとして参照する。

- AI Development Lifecycle Standard
- Operations README
- Constitution

Lifecycle Evolution PolicyはLifecycle変更時の統括原則のみを定義し、具体的な変更内容は各Operation文書および関連SoTで扱う。
