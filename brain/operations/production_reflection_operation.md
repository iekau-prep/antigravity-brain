# Production Reflection Operation

Status: Active

---

# Purpose

local Git Reflection後、Production対象となる未push履歴全体、actual remote / local Repository state、Repository-wide state、各commit成立状態、PO Production Policyとの整合を確認し、General Design GPTがCandidate Jへ渡せるProduction Reflection Gateを成立または停止判断できる責務を定義する。

---

# Scope

本書が扱うもの

- Production対象基準点確認
- 未push履歴全体確認
- Repository-wide state確認
- Policy / Authority / Scope整合確認
- Production readiness判断
- Production Reflection Gate Result
- Candidate JへのTransfer

本書が扱わないもの

- push
- Final Preflight
- post-push remote confirmation
- Deployment
- Production Completion
- 公開完了

---

# Production Reflection Definition

Production Reflectionは、最新local commit単体ではなく、actual remote / local Repository state、Productionへ反映される未push履歴全体、各commit成立状態、Repository-wide state、PO Production Policy整合を確認し、Production executionへ進める状態かをGateとして判断する責務である。

---

# Production Reflection Unit

Reflection Unitは、Production baseからlocal HEADまでの未push commit履歴全体と、現在のRepository-wide stateである。

Production targetが`origin/main`の場合はactual `origin/main`をremote基準点として扱う。ただし特定branch名を全Caseの固定Ruleにしない。

---

# Actual Remote Base

Production targetに対応するactual remote stateを、判断時点の基準点として一意に識別可能とする。

target remote、target branch、remote base hash等を確認対象とし得る。過去記録されたremote stateだけでGateを判断しない。

Candidate Jのpush直前remote refresh / Final Preflightは移管しない。

---

# Local HEAD

local HEADをProduction対象のlocal endpointとして一意に識別可能とする。

少なくともcurrent branch、HEAD hash、local Git Reflection状態、remote baseとの関係を確認可能とする。

local HEAD単体をProduction readiness Evidenceとは扱わない。

---

# Unpushed History

remote baseからlocal HEADまでに複数commitが存在する場合、その全commitをProduction対象として扱う。

必要な範囲で、commit hash、commit order、commit scope、成立状態、必要Validation / Authority / Adoption、unknown状態、Scope外状態を確認可能とする。

固定Commit Checklistは形成しない。

---

# Commit Validity / Authority Boundary

各未push commitについて、Production対象として扱うために必要な成立状態を、現在確認可能なEvidenceから確認する。

必要に応じて、Git Reflection成立、Implementation Validation、Repository Reflection、Authority / Adoption、Target Scope、Production Policy整合へ接続する。

本書はValidation、Adoption、Authority成立を推測しない。

---

# Unknown Commit Boundary

未push履歴内に、現在必要な成立状態を確認できないcommitが存在する場合、Production Reflection Gateを成立させない。

本書は、そのcommitを独自除外せず、reset、rebase、cherry-pick、history rewriteで対象履歴を組み替えない。

必要に応じてCandidate FまたはCandidate Aの既存責務へ接続する。

---

# Repository-Wide State

Production Reflectionは未push履歴だけでなく、現在のRepository-wide stateを確認対象とする。

対象には、working tree、staged / unstaged state、untracked files、branch、remote divergence、Git conflict state、Scope外変更、Repository consistencyが含まれ得る。

Git Reflection済みcommit成立と、RepositoryがProduction executionへ進める状態を分離する。

---

# Working Tree / Staged / Untracked Boundary

未commit、staged、untracked状態とProduction対象との関係を識別可能とする。

未解消のScope外diff、不明diff、staged change、untracked state、ConflictがProduction executionを妨げる場合、Gateを成立させない。

本書はdelete、discard、resetでGate成立状態を作らない。

---

# Remote Divergence Boundary

local targetとactual remoteの関係を確認する。

以下はblocking stateとする。

- unexpected remote commit
- behind state
- ahead and behind
- diverged history
- non-fast-forward state

本書はmerge、rebase、history rewriteで独自解消しない。

---

# Fast-Forward Readiness

Gate成立時点で、Production targetがremoteへ正規に反映可能なfast-forward-compatible stateであることを、Production readinessの一部として確認する。

Candidate Jはpush直前にcurrent remote / local stateを再確認する。このGate判断はCandidate Jのexecution-time確認を省略しない。

---

# Production Readiness Definition

Production readinessとは、Production対象履歴および現在Repository stateに、Production executionを止める未解消事項がなく、PO Production Policyの範囲内で、General Design GPTが対象scope限定のProduction Reflection Gateを成立可能な状態である。

Production readinessは、remote push成立、Deployment成立、Production公開完了を意味しない。

---

# Production Reflection Gate

Candidate Iで成立したGeneral Design GPTのProduction Reflection Gate Authorityへ接続する。

本書はGate Authority自体を再Formationせず、Gate成立に必要なEvidence、Condition、Resultを定義する。

Gate Resultは少なくとも以下を識別可能とする。

- PASS / STOP
- target remote / branch
- actual remote base
- local HEAD
- Production対象commit range
- target scope
- Repository state
- blocking issue有無
- PO Production Policyとの対応

---

# PO Production Policy Connection

Product Ownerが保持するProduction PolicyをInputとして扱う。

General Design GPTおよび本書は、Production Policy変更、Final Public Decision、Scope expansion、未承認対象のProduction化を独自決定しない。

Policy不足、不明、不整合、追加Decisionが必要な場合はProduct OwnerへReturn / escalationする。

---

# Target Scope Identity

Gateが何に対して成立するかを一意に識別可能とする。

必要な範囲で、target remote、target branch、remote base、local HEAD、commit range、Repository / module / document scope、Production execution targetを対応付ける。

Candidate Jへ渡すexplicit execution authorityのscopeと一致可能にする。

---

# Scope Expansion Boundary

想定外commit、Scope外commit、想定外Repository変更、Scope外diffが確認されても、本書は「一緒にpushする」としてProduction targetを独自拡張しない。

必要ならGateを停止し、既存Authority、Product Owner Decision、Returnへ接続する。

---

# Gate Validity Window

Gateは判断時点のremote state、local state、Repository state、target scope、Policy / Authority stateに対して成立する。

これらがGate後に変化した場合、Gateを永久有効とは扱わない。Candidate JのFinal Preflightは、Gate後からexecution直前までのstate変化を確認する責務として維持する。

---

# Gate Result / Transfer

Production Reflection成立時、Candidate Jへ以下を必要な範囲でTransfer可能とする。

- Production Reflection Gate Result
- target remote / branch
- actual remote base
- local HEAD
- approved commit range
- execution target scope
- Repository state
- blocking issueなしの確認
- PO Production Policy connection
- explicit execution authorityに必要なscope

固定Result Templateは形成せず、既存Transfer / Record責務へ接続する。

---

# Stop / Return

以下ではProduction Reflection Gateを停止する。

- actual remote不明
- local HEAD不明
- commit range不明
- target scope不明
- unknown commit
- 必要成立状態を確認できないcommit
- Scope外commit
- unresolved working tree state
- staged / untracked問題
- remote divergence
- non-fast-forward
- Repository conflict
- Production Policy不足または不整合
- Authority不足
- 未解消Conflict

停止時はstate、Evidence、blocking issue、target scope、Return reasonを保持し、必要な既存Role / Stage / Product OwnerへReturnする。

---

# Forbidden Recovery

Production targetを整えるために、以下を独自実行しない。

- reset
- rebase
- merge
- cherry-pick
- amend
- force operation
- history rewrite

必要な場合はGateを停止し、既存Authority / Returnへ接続する。

---

# Candidate G Boundary

Candidate GはImplementation Validation済み差分をlocal Git historyへ固定する。

本書は、そのlocal historyを含むProduction対象全体がProduction executionへ進める状態かをReflectionする。local commit再形成、再commit、Git Reflection再実行は行わない。

---

# Candidate I Boundary

Candidate IはProduction Authority Boundaryを扱う。

本書は、そのAuthority Architecture内でGeneral Design GPTがGateを成立 / 停止判断するためのEvidence / Condition / Resultを扱う。

PO Final Public Decision Authority、PO Production Policy Authority、Codex Production Push Authorityを再定義しない。

---

# Candidate J Boundary

Candidate Jは、成立済みGateとexplicit Technical / Git Execution AuthorityをInputとして、remote refresh、Final Preflight、push、post-push remote confirmationを扱う。

本書はpush、Final Preflight、post-push confirmationを定義しない。本書でremote stateを確認しても、Candidate Jのexecution-time remote refreshを不要扱いしない。

Candidate Jの「PreflightはGateを再判断しない」境界を維持する。

---

# Candidate K Boundary

Candidate Kはpush後のDeployment ObservationおよびProduction Completionを扱う。

本書はDeployment success、Production live、public completionを判定しない。

---

# Candidate F / A Boundary

Past LifecycleまたはAuthority状態が追跡不能な場合、本書は推測してGateを成立させない。

必要に応じてCandidate FのPast Lifecycle UnknownまたはCandidate AのAuthority Readinessへ接続し、その本文は変更しない。

---

# Production Reflection vs Final Preflight

本書は、Production executionへ進めるRepository / Authority / Scope状態かをGateとしてReflectionする。

Candidate Jは、actual push直前にcurrent remote / local stateを技術的に再確認しExecution可否をFinal Preflightする。

Candidate Jの「PreflightはGateを再判断しない」境界を維持する。

---

# Fixed Procedure Boundary

固定Git command sequenceおよび固定Production Checklistは形成しない。

本書は、Input / Evidence、Reflection Unit、Production Readiness、Gate Condition、Stop、Result、Transferを責務として定義する。
