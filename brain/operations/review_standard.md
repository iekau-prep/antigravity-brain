# Review Standard

## Purpose

Builder成果物がConstitutionおよび上位設計思想と整合しているかを確認するためのOperation Standardを定義する。

Review Standardは、Design Formationを行う標準ではない。

Review Standardは、Constitution上の進行可否のみを返却し、Decision Stageへ接続可能なReview成果物を形成することを目的とする。

---

## Position

Review Standardは、Review Stage専用のOperation Standardである。

ReviewはDesign Validation成立後に開始する。

Review終了後はDecision Stageへ成果物を引き渡す。

Review StandardはBuilder Operationを補完する文書ではない。

Review StandardはDesign Validationを書き換える文書ではない。

Review StandardはImplementationを定義する文書ではない。

AI設計プロトコル上の流れは以下とする。

Discovery

↓

Builder

↓

Design Validation

↓

Review  
（Review Standardに従い確認）

↓

Product Owner Decision

↓

Implementation

↓

Implementation Validation

---

## Input

Review Standardで使用できる入力は以下とする。

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

入力不足がある場合は推測せず停止する。

---

## Output

Reviewでは以下を形成する。

- 進行可
- 停止
- 理由

ReviewではBuilder成果物を変更しない。

ReviewではDesign Validation結果を変更しない。

Reviewでは改善案を形成しない。

ReviewではRepository本文を書かない。

---

## Workflow

Reviewは以下の順で実施する。

1. Design Validation成立後に開始
2. Builder成果物を受け取る
3. Design Validation結果を受け取る
4. AI Loading Mapで指定された設計書を受け取る
5. Request ID / Review Target / Review Scope / Forbidden Change / Review Criteriaを確認する
6. Builder成果物を読解する
7. Design Validation結果を読解する
8. AI Loading Mapで指定された設計書を参照する
9. Constitution / 上位設計思想を確認する
10. Responsibility Boundaryを確認する
11. Decision Continuityを確認する
12. fixed_coreを確認する
13. ADLS整合を必要時に確認する
14. 進行可否を整理する
15. 停止時はBuilderへ返却する
16. 完了時はDecisionへ接続する

前工程成果物を推測で補完しない。

---

## Principle

### Input Confirmation

Reviewは入力不足を確認する。

不足がある場合は推測せず停止する。

### Design Validation Result Confirmation

ReviewはDesign Validation成立後に開始する。

Design Validation結果を変更しない。

### Builder Deliverable Reading

ReviewはBuilder成果物を確認対象として扱う。

Builder成果物を変更しない。

### AI Loading Map Reading

ReviewはAI Loading Mapで指定された設計書を参照する。

AI Loading Mapで指定されていない対象を推測で追加しない。

### Constitution Review

ReviewはConstitutionを基準として確認する。

ReviewはConstitutionとの整合のみを確認する。

### Upper Design Philosophy Review

Reviewは上位設計思想との整合を確認する。

Reviewは上位設計思想を変更しない。

### Responsibility Boundary Review

ReviewはResponsibility Boundaryを確認する。

Reviewは責務境界を変更しない。

### Decision Continuity Review

ReviewはDecision Continuityを確認する。

ReviewはDecision Continuityを変更しない。

### fixed_core Review

Reviewはfixed_coreを確認する。

Reviewはfixed_coreを変更しない。

### ADLS Review

ReviewはADLS整合を必要時に確認する。

ReviewはADLSを変更しない。

### Review Observation

Reviewは停止理由のみ整理する。

ReviewはObservation代行を行わない。

Reviewは改善案を作成しない。

### Transfer Formation

Review停止時はBuilderへ返却する。

Review完了時はDecisionへ接続する。

TransferではBuilder成果物を変更しない。

TransferではDesign Validation結果を変更しない。

TransferではDesignを追加しない。

---

## Boundary

Reviewでは以下を扱う。

- Constitution Review
- Responsibility Boundary
- Decision Continuity
- Review Stageの責務
- Return Path
- Exit Criteria
- Constitutionとの整合
- 上位設計思想との整合
- fixed_core
- ADLS整合（必要時）
- Constitution上の進行可否
- Builderへの返却可否
- Decision Stageへの接続可否

Reviewでは以下を扱わない。

- Design形成
- 改善提案
- UI提案
- Module変更
- Product判断
- Implementation
- Design Validation代行
- Product Owner Decision代行
- Observation代行
- 新ルール追加
- 新Stage追加
- 新Role追加
- Maturity
- Git
- Record運用
- Role Input Contract変更
- Loading Rule詳細変更

---

## Review Scope

Reviewでは以下を確認する。

- fixed_core
- responsibility boundary
- decision continuity
- Constitution整合
- ADLS整合（必要時）
- Constitution / System / Operationとの整合
- Builder成果物とConstitutionの整合
- Builder成果物と上位設計思想の整合
- Review Scopeとの整合
- Forbidden Changeとの整合
- Review Criteriaとの整合
- Transfer Informationとの整合

---

## Review Root Order

Reviewでは以下の順で確認する。

1. Design Validation結果
2. Builder成果物
3. AI Loading Mapで指定された設計書
4. Constitution
5. 上位設計思想
6. System
7. Operation
8. Review Target / Review Scope / Forbidden Change / Review Criteria
9. Transfer Information

ReviewはDesign Validation成立後に開始する。

ReviewはConstitutionを基準として確認する。

---

## Reading Strategy

Reviewでは以下を読む。

- Builder成果物
- Design Validation結果
- AI Loading Mapで指定された設計書
- Constitution
- 上位設計思想
- System
- Operation
- Review Target
- Review Scope
- Forbidden Change
- Review Criteria
- Transfer Information

Reviewは、Constitutionおよび上位設計思想との整合確認に必要な入力のみを読む。

---

## Lifecycle

### Start

- Design Validation成立後に開始する
- Builder成果物を受け取る
- Design Validation結果を受け取る
- AI Loading Mapで指定された設計書を受け取る

### Reading

- Builder成果物を読む
- Design Validation結果を読む
- AI Loading Mapで指定された設計書を読む
- Constitutionを読む
- System / Operationを整合確認対象として読む
- Review Scope / Review Criteriaを読む

### Review

- Constitution整合を確認する
- 上位設計思想との整合を確認する
- fixed_coreを確認する
- responsibility boundaryを確認する
- decision continuityを確認する
- ADLS整合を必要時に確認する
- 進行可否を整理する

### Observation

- 停止理由を整理する
- 改善案は作成しない
- Observation代行は行わない

### Transfer

- Review停止時はBuilderへ返却する
- Review完了時はDecisionへ接続する

### Exit

- Constitution整合確認完了
- Review判定完了
- BuilderまたはDecisionへ返却可能
- ADLS上でConstitution上の進行可否が確定

---

## Transfer

Reviewは以下を返却する。

- 進行可
- 停止
- 理由

返却先は以下とする。

- Review停止 → Builder
- Review完了 → Decision

停止理由のみ整理する。

改善案は作成しない。

Builder成果物は変更しない。

Design Validation結果は変更しない。

---

## Existing Role Boundary

### Builder

BuilderはDiscovery成果物を入力としてDesign Formationを行う。

ReviewはBuilder成果物を確認する。

ReviewはBuilder成果物を変更しない。

Review停止時はBuilderへ返却する。

### Design Validation

Design ValidationはBuilder成果物を確認し、Reviewへ接続する。

ReviewはDesign Validationを代行しない。

ReviewはDesign Validation結果を変更しない。

ReviewはDesign Validation成立後に開始する。

### Product Owner Decision

Product Owner DecisionはProduct Ownerが行う。

ReviewはProduct Owner Decisionを代行しない。

Review完了時はDecisionへ接続する。

### Implementation

Implementationは採用済みBuilder成果物をRepositoryへ反映する。

ReviewはImplementationを行わない。

ReviewはRepository本文を書かない。

ReviewはRepository反映を行わない。

---

## Completion Criteria

Review Standardは以下を満たした時に成立する。

- Constitution整合確認が完了している
- 上位設計思想との整合確認が完了している
- Review判定が完了している
- 進行可 / 停止が確定している
- 理由が説明可能である
- BuilderまたはDecisionへ返却可能である
- ADLS上でConstitution上の進行可否が確定している
- Reviewが設計を形成していない
- Reviewが改善案を作成していない
- ReviewがProduct Owner Decisionを代行していない
- 推測が含まれていない
