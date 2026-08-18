# Git Reflection Operation

Status: Active

---

# Purpose

Implementation Validationで成立したImplementation差分を、Validated ScopeのままScope外差分を混入させず、追跡可能なlocal commitとしてGit historyへ固定し、次工程へTransfer可能なGit Reflection Resultを形成する。

---

# Scope

本書は以下を扱う。

```text
Implementation Validation成立
↓
Git Reflection対象確認
↓
local staging / commit
↓
local post-commit確認
↓
Git Reflection Result Transfer
```

Production Reflection、Production Gate、push、remote reflection、Deploymentは扱わない。

---

# Git Reflection Definition

Git Reflectionは単なるcommit実行ではない。

Implementation Validationで成立した対象file、diff、scopeを一意に識別し、Scope外差分を混入させず、Validated Implementation差分をlocal Git historyへ追跡可能なcommitとして固定し、結果をTransfer可能にする責務である。

---

# Entry Condition

Git ReflectionはImplementation Validation成立後にのみ開始する。

開始前に、IV Result、Validated Target、Validated file、Validated diff / scopeを一意に識別可能とする。IV未成立の場合は開始しない。

本書はImplementation Validationの判定を代行しない。

---

# Validated Scope Identity

Git Reflection対象は、Implementation Validationで成立したImplementation Target、Repository Target、対象file、変更scope、validated diffと対応していなければならない。

実行主体は対象scopeを独自拡張せず、対象外変更をcommit対象へ追加しない。

---

# Post-IV Change Boundary

Implementation Validation後にValidated対象内容へ変更が入った場合、その変更済み状態をImplementation Validation成立済みとは扱わない。

Git Reflectionを継続せず停止する。本書は変更後diffを同等またはValidと独自判断しない。

---

# Working Tree Boundary

Git Reflection開始前に、少なくとも以下を識別可能とする。

- Validated対象差分
- 対象外modified file
- untracked file
- 既存staged差分
- その他未commit変更

目的は、Git Reflection対象とScope外状態を区別することにある。対象外差分を整えるための削除、discard、resetを独自実行しない。

---

# Unexpected Diff Boundary

Scope外差分が存在しても、Validated対象と安全に区別でき、Validated対象だけを独立してGit Reflectionできる場合は、対象scope限定で進行できる。

以下の場合は停止する。

- 区別不能
- 既存staged差分とのConflict
- Scope外混入リスク
- commit対象の一意性欠如

---

# Staging Boundary

stage対象はImplementation Validation済みscopeに限定する。

既存staged差分がある場合、Validated対象と安全に分離できることを確認する。分離できない場合は停止する。

全file一括stage、Repository全体stage、Scope外差分を含むstageを一般Ruleにしない。

---

# Commit Boundary

local commit成立には、少なくとも以下を確認可能とする。

- Validated Scopeとの一致
- Commit targetの一意性
- Scope外混入なし
- 対象CaseおよびReflection内容の追跡可能性
- Commit実行結果
- Commit hash

Commitは、Validated Implementation差分をlocal Git historyへ固定したGit Reflection Evidenceである。

---

# Commit Message Boundary

Commit messageは既存Repository conventionと整合し、対象CaseとReflection内容を追跡可能とする。

固定prefix、固定文型、固定message templateは形成しない。

---

# Branch Boundary

main固定Ruleは形成しない。

Git Reflectionは、既存Repository / Git policyおよび対象Implementationに対応するcurrent branch上で行う。

branch不明、対象Implementationとのbranch対応不明、Repository policyとの不整合がある場合は停止する。

---

# Post-Commit Confirmation

local commit後、少なくとも以下を確認可能とする。

- Commit hash
- branch
- Commit target
- Commit内容とValidated Scopeの一致
- Scope外混入の有無
- working tree state
- staged state

remote refresh、origin state、ahead / behindによるProduction判断、push可否、remote confirmationは完了条件に含めない。

---

# Commit as Reflection Evidence

local commitは、Implementation Validation済み差分をlocal Git historyへ固定したEvidenceであり、Repository current stateを追跡可能にするlocal history上の基点である。

```text
local commit成立
≠ Production Reflection成立
≠ push Authority成立
≠ remote push成立
≠ Deployment成立
≠ Production公開成立
```

---

# Git Reflection Result / Transfer

Git Reflection Resultとして、次工程に必要な範囲で以下を識別可能とする。

- Commit hash
- branch
- 対象file
- Validated scope
- Commit message識別情報
- working tree state
- staged state
- Scope外混入有無
- push未実施状態
- Stop有無

固定Record Templateは形成せず、既存Transfer / Record責務へ接続する。

---

# Failure / Stop Condition

以下の場合、Git Reflectionを停止する。

- Implementation Validation未成立
- Implementation Validation後にValidated対象diffが変更された
- Target、Scope、Commit targetが不明
- Validated Scopeとの不一致
- Scope外混入を安全に防止できない
- 既存staged差分と安全に分離できない
- branch不整合
- Git conflict
- Repository state不整合
- history rewrite等が必要

停止時は、状態、差分、停止理由を保持し、既存Return / Mainline整理へ接続する。

---

# Forbidden Recovery

Git Reflection実行主体は、問題を独自解消するために以下を行わない。

- reset
- rebase
- merge
- cherry-pick
- amend
- force operation
- history rewrite

必要な場合は停止し、既存Authority / Returnへ接続する。

---

# Git Reflection Authority Boundary

新Git Reflection Authority Roleは作らない。

- Module GPT：Module Mainline progression、authorized Stage connection、local Git Reflection範囲の管理
- Codex：明示された対象scope内での技術的Git実行

本書は、Module GPTまたはCodexへProduction Policy、Production Reflection、Production Push Authorityを付与しない。

---

# Local Commit Authority vs Push Authority

local Git Reflectionは、Module GPTのlocal Git Reflection範囲および既存Codex Git実行責務へ接続する。

Production pushはCandidate I / JのProduction Authority Chainへ接続する。

本書は、PO Policy、General Design Production Gate、explicit execution authorityをlocal commitの開始条件として要求しない。

---

# Candidate H Boundary

本書は、Implementation成立内容をlocal Git historyへReflectionする責務を扱う。

Candidate Hが扱うProduction readiness、Production Reflection Gate、Production公開判断、remote反映可否、Push Authority判断は形成しない。

---

# Candidate J Boundary

Candidate Jは、成立済みProduction Reflection Gateおよびexplicit Technical / Git Execution AuthorityをInputとして、remote refresh、Final Preflight、push、post-push remote confirmationを扱う。

本書はremote fetch、Final Preflight、push、post-push remote confirmationを形成せず、`git_push_operation.md`と責務重複しない。

---

# Production Authority Boundary

Candidate Iで成立したProduction Authority Chainを変更しない。

local commitはProduction公開行為ではない。Git Reflection成立のみを理由にProduction Gate、push Authority、Production公開可とは扱わない。

---

# Record Boundary

RecordはGit Reflection Resultを事実として記録できる。

RecordへGit実行Authority、Commit Authority、Production判断、Push Authorityを追加しない。

---

# Fixed Git Procedure Boundary

全Case共通の固定Git command sequenceは形成しない。

本書は、Entry Condition、Scope Identity、Working Tree Boundary、Staging Boundary、Commit Boundary、Stop Condition、Post-Commit Confirmationを責務として扱う。
