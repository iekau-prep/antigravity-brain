# Module GPT Startup / Re-entry Context Architecture

## Purpose

Module GPTにおけるPermanent Foundation、Decision Context、Current Repository Context、
Current Implementation Observation、Startup、およびLong-idle Re-entryの
Context Architectureと適用関係を定義する。

本書は既存AuthorityをContext Architecture上で接続するものであり、
Operation Constitution、Role Input Contract、Observation Operationを置換しない。

## Scope

本書は以下を扱う。

- Module GPTのStartup / Re-entryにおけるContext Layer
- D｜Decision / Current State PackのPosition
- Current ContextのSource Priority
- Current Implementation Observationの接続
- Current Context Confirmation
- Case Handoffへの接続
- Role-specific Startup Authorityの保存

本書は、Role固有の責務変更、Current State Holder、Record、Progress / Maturity Holder、
Implementation Repositoryを扱わない。

## Context Layer Separation

Module GPTは以下を分離して扱う。

### Permanent Foundation

「このAIは何者で、何をAuthorityとして判断するか」を保持する。

### Decision Context

重要Decision、Decision理由、成熟経緯、保持すべき判断原則を現在判断へ接続する。

### Current Repository Context

現在のProject / Moduleがどこにいるかを確認する。

### Current Implementation Observation

実装として現在どうなっているかを、必要時のみFactとして確認する。

FoundationをCurrent State維持のために継続更新する構造を採用しない。
Implementation FactをProduct / Module / System Authorityへ昇格しない。

## New Module GPT Startup Context Architecture

New Module GPT Startupは、以下の順序で接続する。

1. Permanent Foundation Loading
2. Current Repository Context Loading
3. 必要時のみCurrent Implementation Observation
4. Current Context Confirmation
5. 既存Operational Ready / Case Handoff

Current Context Confirmation前に、Current Caseを推測して開始しない。

## Long-idle Re-entry Context Architecture

Long-idle Existing Module GPTのRe-entryは、以下の順序で接続する。

1. Foundation Change Check
2. Foundation変更がある場合のみ必要なFoundation差分をReload
3. Current Repository Context Refresh
4. 必要時のみCurrent Implementation Observation
5. Re-entry Confirmation
6. Current Case Handoff

長期間未使用であることだけを理由に、Foundation全再LearningをMandatoryとしない。

## Foundation Change Check / Differential Reload Rule

Foundation Change Checkは、Foundation変更の有無を確認する。

Foundation変更が確認された場合のみ、必要な差分をReloadする。
変更が確認されない場合、Foundation全体を再Loadingすることを必須としない。

## D Position / Conditional Loading Boundary

Dは、Module GPT一般ArchitectureにおいてConditional Loadingとして扱う。

Dは、Current State変化のたびに更新するLive Current State DBではない。
Dの中心責務は、重要Decision、Decision理由、成熟経緯、保持すべき判断原則を
現在判断へ接続するDecision Contextである。

D Loadingの詳細は、Role-specific Formal Startup Authorityが存在する場合、
当該Role-specific Authorityに従う。

## D Currentness / Update Boundary

D内に旧Current Stateが存在しても、より新しい以下のCurrent ContextとConflictする場合、
Dを最新Current Factとして優先しない。

1. Explicit Current Handoff / Authorized Case Input / Current PO Decision
2. Case-specific Current State / Formal Case Record
3. Current Adopted Repository SoT
4. Formal Purpose内のProgress / Maturity Holder
5. D｜Decision Context

単なるCurrent State変化は、D Mandatory Update Triggerとしない。

D Update Candidateは以下に限定する。

- D自体のRole / Purpose変更
- 保持すべきDecision原則、Decision理由、成熟背景の正式変更
- 既存DがCurrent判断上Authority Conflictまたは誤認を生む場合
- Architecture変更によりD Structure更新が必要な場合

## Current Context Source Priority

Current Contextは、以下のPriorityで確認する。

1. Explicit Current Handoff / Authorized Case Input / Current PO Decision
2. Case-specific Current State / Formal Case Record
3. Current Adopted Repository SoT
4. Formal Purpose内のProgress / Maturity Holder
5. D｜Decision Context

各Holder固有のAuthorityを置換しない。
Maturity HolderからProduct Decisionを生成しない。
Progress HolderからAuthorityを生成しない。

## Implementation Observation Connection

Current Implementation Factが必要な場合のみ、
Codex / Technical Observationへ必要最小限の確認を接続する。

ObservationはFact-onlyとして扱う。
Observation結果をProduct / Module / System Authorityへ昇格しない。

## Current Context Confirmation

Current Context Confirmationでは、少なくとも以下を確認する。

- Current Authority
- Current HandoffまたはAuthorized Case Input
- 対象、Scope、Status
- 必要なCurrent Repository Context
- 必要時のCurrent Implementation Observation

必要Current Fact、Current Handoff、Authority、Target、Scope、Statusが不足・不明・Conflictの場合、
推測せず既存STOP / RETURN Authorityへ接続する。

## Case Handoff Connection

Current Context Confirmation後、既存Operational Readyおよび
既存Request Contract / Current Handoffに従ってCase Handoffへ接続する。

本書はCase選定、Priority決定、Lifecycle変更、Product Owner Decisionを行わない。

## STOP / RETURN Connection

以下の場合、推測せず既存STOP / RETURN Authorityへ接続する。

- Current Authority不足、不明、Conflict
- Current HandoffまたはAuthorized Case Input不足
- 必要Current Fact不足
- Target、Scope、Status不明
- 必要なImplementation Factが未確認
- Role-specific Startup Authorityとの実際のConflict

STOP / RETURNの詳細は既存Authorityに従い、本書で再定義しない。

## Limited Resume / Past Lifecycle UnknownとのConnection

Limited ResumeおよびPast Lifecycle Unknownは既存Authorityに従う。

Current Context確認は、過去Lifecycle、過去Artifact、過去Current Stateを推測で復元する根拠にしない。
必要なCurrent Contextを確認できない場合、推測Resumeせず既存Return Pathへ接続する。

## Role-specific Startup Authority Preservation

本書は、明示Role-specific Startup Authorityが存在しない範囲でのみ
General Defaultとして適用する。

Role-specific Formal Startup Authorityが存在する場合、当該Authorityを維持する。
General Architectureだけを理由に、既存のMandatory Loading、Conditional Loading、
Boundary Loading、Case-specific Loadingを自動上書きしない。

実際のConflictが発生した場合のみ、対象Roleを限定して別Formal FormationへReturnする。

## Existing Authority Reference / Non-Replacement Boundary

本書は、以下の既存Authorityを置換しない。

- Operation Constitution
- Role Input Contract
- Observation Operation
- Current Handoff
- Technical Observation
- Limited Resume
- Past Lifecycle Unknown
- Role-specific Formal Startup Authority

本書は、新ADLS Stage、新Implementation Rule、新Current State Holderを形成しない。
