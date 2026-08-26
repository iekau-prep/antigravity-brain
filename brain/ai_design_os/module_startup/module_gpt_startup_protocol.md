# Module GPT Startup Protocol v1.0

## Purpose

Foundation Pack全体を読了したModule GPTが、
実案件投入前にOperational Readyであることを確認する。

Operational Readyとは、

Foundationを理解し、
自身のRole Boundaryを維持し、
必要なRoleへ追加推測なしでHandoffできる状態

を指す。

本ProtocolはModule Foundationそのものではない。

既存prompt_preambleに存在する
「Foundation Pack全体完了後の起動確認」
を具体化したModule GPT共通Startup Protocolとして扱う。

---

## Timing

Permanent Foundation Loading後、実案件投入前に実施する。

Current Repository Contextおよび必要なConditional Context Loadingは、
既存Authorityに従って確認する。

D｜Decision / Current State Packは、
Module GPT一般StartupにおけるGeneral Mandatory Loadingとして固定しない。

DはConditional Context Candidateとして扱い、
Loading詳細は
brain/ai_design_os/module_startup/module_gpt_context_architecture.md
およびRole-specific Formal Startup Authorityに従う。

Role-specific Formal Startup AuthorityにおいてD Mandatoryが成立している場合は、
当該Mandatory Authorityを維持する。

Startup Protocol完了前に、
新規案件を開始しない。

New Module GPT Startupでは、以下の順序でContextを確認する。

1. Permanent Foundation Loading
2. Current Repository Context Loading
3. 必要時のみCurrent Implementation Observation
4. Current Context Confirmation
5. 既存Operational Ready / Case Handoff

Long-idle Re-entryでは、以下の順序でContextを確認する。

1. Foundation Change Check
2. Foundation変更がある場合のみ必要なFoundation差分をReload
3. Current Repository Context Refresh
4. 必要時のみCurrent Implementation Observation
5. Re-entry Confirmation
6. Current Case Handoff

長期未使用だけを理由に、Foundation全再LearningをMandatoryとしない。

詳細Ruleは、
brain/ai_design_os/module_startup/module_gpt_context_architecture.md
をFormal Referenceとする。

---

## Step1｜Role Understanding Check

Module GPTが自身のRoleを理解していることを確認する。

確認対象：

- Purpose
- Responsibility
- Authority
- Boundary
- Product Ownerとの関係
- General Design GPTとの関係
- Codexとの関係
- Stop Condition
- Current State

目的：

自身が何を担当し、
何を担当せず、
どこで停止すべきかを説明できる状態を確認する。

---

## Step2｜Boundary / Stop Validation

Module GPTがRole Boundaryを
実際の要求に対して維持できることを確認する。

最低確認対象：

### Product Owner Boundary

Product Owner Decisionを代行しない。

### Module Cross Boundary

Module単体では決められない横断論点を
自身で決定しない。

必要なRoleへ返却する。

### Repository / Implementation Boundary

確認していないRepository事実・現在実装を推測しない。

Repository / 現在実装確認が必要な場合は、
必要な確認Roleへ接続する。

---

## Step3｜Next Process / Handoff Validation

Module GPTが自身の責務終了後、
次Roleへ追加推測なしでHandoffできることを確認する。

確認対象：

1. Current Position
2. Next Process
3. Next Role
4. Request
5. Transfer Information
6. Expected Return
7. Stop Condition
8. After Return

次工程が現在入力から確定できない場合は、
推測して固定しない。

---

## Operational Ready

以下が成立した場合、
Module GPTをOperational Readyとして扱う。

- Step1 Pass
- Step2 Pass
- Step3 Pass

- 必要なCurrent Context Confirmationが成立している

Current Context Confirmation後、既存のNext Process / Handoff Validationに従って
Case Handoffへ接続する。

Current Authority、Current Handoff、必要Current Fact、Target、Scope、Statusが不足・不明・Conflictの場合、
Operational ReadyまたはCase Handoffを推測で成立させず、既存STOP / RETURNへ接続する。

Operational Readyは、

Module GPTが未知の案件を
自身だけで解決できることを意味しない。

不明点・Boundary外・必要情報不足が発生した場合に、
推測せず停止し、
必要なRoleへ接続できる状態を意味する。

---

## Boundary

本Protocolでは以下を行わない。

- Product Owner Decision代行
- Module固有仕様の変更
- Foundation変更
- Repository事実の推測
- Implementation
- Repository変更
- 新規案件開始
- Current Repository ContextをFoundationと混同すること
- Current Implementation ObservationをAuthorityへ昇格すること
- Role-specific Formal Startup AuthorityをGeneral Defaultで上書きすること

---

## Change Principle

v1.0は、
type_diagnosis GPTで成立確認した
Step1〜Step3のみを保持する。

追加Protocol・追加Validationは先に形成しない。

実運用上の必要性が確認された場合のみ、
追加を判断する。

本Protocolは、
brain/ai_design_os/module_startup/module_gpt_context_architecture.md
で定義されるGeneral Context ArchitectureへのConnectionを保持する。

Role-specific Formal Startup Authorityが存在する場合、
当該Role-specific Authorityを維持する。

General Architectureだけを理由に、
既存のMandatory Loading、Conditional Loading、Boundary Loading、
Case-specific Loadingを自動変更しない。
