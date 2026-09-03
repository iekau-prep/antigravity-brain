# Repository SoT Reflection Git Operation

Status: Proposed

---

# Purpose

Repository SoT Reflection成立後の差分を、Product Owner Formal Adoption、Repository Reflection、validated / authorized Reflection scopeとの対応を確認したうえで、Scope外差分を混入させず、追跡可能なlocal commitとしてGit historyへ固定し、Post-Commit Validationおよび次工程へのTransferを可能にするOperationである。

本OperationはRepository SoT Reflectionを形成、再実行、再Validationしない。

---

# Scope

本書は以下を扱う。
```text
Product Owner Formal Adoption
↓
Repository SoT Reflection
↓
Repository Reflection Completion / Validation
↓
Local Git Commit Entry
↓
Local Git Commit
↓
Post-Commit Validation
```

Git Push、remote reflection、Production Reflection Gate、Deployment、Production Completion、公開判断は扱わない。

---

# Repository SoT Reflection Git Commit Definition

Repository SoT Reflection Git Commitは単なるcommit実行ではない。

Formal Adoption後に成立したRepository Reflection Target、reflected files、reflected diff / scopeを一意に識別し、Repository SoT Reflection scopeのみをlocal Git historyへ追跡可能なcommitとして固定し、結果をTransfer可能にする責務である。

Repository Reflection Completion Evidenceを、Implementation Validation Evidenceと同等として扱わない。

---

# Entry Condition

本Operationは、以下がすべて確認可能な場合のみ開始する。

- Product Owner Formal Adoptionが成立している
- Repository SoT Reflectionが成立している
- Repository Reflection targetとの対応が成立している
- exact reflected file scopeが確定している
- Adopted Artifact、Repository Reflection Target、reflected files、reflected diff / scopeのCorrespondenceが確認可能である
- pre-commit validationが成立している
- Unexpected Changeが存在しない
- current branchを確認可能である
- working tree stateを確認可能である
- staged stateを確認可能である
- scope外差分がcommit対象へ混入しないことを確認可能である
- 今回のLocal Git Commitに適用されるFormal Commit Authorityが成立している
- Commit Execution Responsibilityを既存Authorityから一意に識別可能である

いずれかが不足、不明、Conflict、または推測を必要とする場合は開始しない。

本Operationは、Product Owner Formal Adoption、Repository Reflection、pre-commit validation、Commit Authorityを独自に成立させない。

---

# Validated Scope Identity

Local commit対象は、以下と一意に対応していなければならない。

- Adopted Artifact
- Repository Reflection Target
- reflected files
- reflected diff / scope

実行主体は対象scopeを独自拡張せず、Reflection後の別変更、scope外file、別Case差分をcommit対象へ追加しない。

---

# Post-Reflection Change Boundary

Repository Reflection後にtarget内容が変更されている場合、その変更済み状態をRepository Reflection成立済みscopeとして扱わない。

変更後diffを同等、反映済み、またはcommit可能と独自判断せず停止する。

本OperationはRepository Reflectionを再OPENせず、再Reflection、再Validation、再Adoptionを行わない。

---

# Working Tree Boundary

Local Git Commit Entry開始前に、少なくとも以下を区別可能とする。

- authorized target diff
- scope外modified file
- untracked file
- existing staged diff
- その他未commit差分

目的は、成立済みRepository Reflection scopeとscope外状態を区別することにある。

scope外差分を整えるための自動包含、自動破棄、自動stash、自動resetを行わない。

scope外modified file、scope外untracked file、その他scope外未commit差分が存在する場合、authorized target diffと区別可能であっても、本Operationを継続しない。

当該状態では、既存Authorityに従いSTOP / RETURNする。

---

# Unexpected Change Boundary

scope外working tree差分が存在する場合、authorized target diffと安全に区別可能かどうかにかかわらず、対象scope限定で進行しない。

以下の場合は停止する。

- scope外working tree差分の存在
- scope外modified fileの存在
- scope外untracked fileの存在
- その他scope外未commit差分の存在
- authorized target diffとscope外差分を区別できない
- existing staged diffとのConflictがある
- scope外混入リスクがある
- commit対象の一意性がない
- Unexpected Changeがある

本Operationは、scope外差分の自動包含、自動破棄、自動stash、自動reset、自動stage、自動commitを行わない。

---

# Staging Boundary

staging対象は、成立済みRepository Reflectionのexact reflected file scopeに限定する。

existing staged diffがある場合、今回のreflected scopeと安全に分離できることを確認する。

分離できない場合、既存staged diffを今回scopeへ推測混入させず停止する。

全file一括stage、Repository全体stage、scope外差分を含むstageを一般Ruleにしない。

---

# Commit Authority Condition

Repository SoT Reflection成立は、自動Git Commit Authorityを意味しない。

Local Git Commitを開始するには、今回のOperationに適用されるFormal Commit Authorityが成立し、対象scopeおよびCommit Execution Responsibilityとの対応を一意に確認可能でなければならない。

BuilderはCommit Authority Ownerではない。

本Operationは、新しいCommit Authority Owner、新しいExecution Role、Product Owner Authorityの変更を形成しない。

---

# Commit Target Scope

Commit対象は、成立済みRepository Reflectionのexact reflected file scopeに限定する。

以下を含めない。

- Reflection後の別変更
- scope外file
- 別Case差分
- scope外modified file
- untracked file
- existing staged diff
- その他未commit差分

---

# Commit Execution Responsibility

Commit Executionは、既存Technical / Git Execution Roleへ接続する。

新しいExecution Roleを形成しない。

BuilderはRepository MutationおよびGit Mutationを実行しない。

Execution Responsible Role、実行Authority、または対象scopeとの対応を既存Authorityから一意に識別できない場合は、推測せずSTOP / RETURNする。

---

# Commit Message Boundary

Commit messageは、既存Repository conventionと整合し、Formation CaseおよびRepository Reflection内容を追跡可能なものとする。

新しい固定prefix、新しいmandatory template、新しいRepository-wide naming ruleは形成しない。

---

# Branch Boundary

main固定Ruleは形成しない。

Local Git Commitは、既存Repository / Git policyおよび対象Repository Reflectionに対応するcurrent branch上で行う。

branch不明、target scopeとのbranch対応不明、Repository policyとの不整合、またはbranch Conflictがある場合は停止する。

---

# Post-Commit Validation

local commit後、少なくとも以下を確認可能とする。

- Commit hash
- current branch
- Commit target
- committed file scope
- Commit内容とRepository Reflection Scopeの一致
- scope外混入の有無
- working tree state
- staged state

Post-Commit Validationは、Git Push Authority、Production Reflection Gate、Production公開可否、Deployment、Production Completionを判断しない。

Commit後にunexpected stateがある場合、独自Recoveryを行わずSTOP / RETURNする。

---

# Commit as Repository SoT Reflection Evidence

local commitは、成立済みRepository SoT Reflection scopeをlocal Git historyへ固定したEvidenceであり、Repository current stateを追跡可能にするlocal history上の基点である。
```text
local commit成立
≠ Git Push Authority成立
≠ Production Reflection Gate成立
≠ remote push成立
≠ Deployment成立
≠ Production公開可
```

---

# Git Push Separation

Local Git CommitとGit Pushは、別Operation / 別Authorityとして扱う。

Git Pushは、`brain/operations/git_push_operation.md`および適用Authorityに従う。

本OperationはPushを自動開始せず、Push Authority、Production Reflection Gate、Production Policy、remote state、Deploymentを扱わない。

---

# Result / Transfer

Local Git Commit Resultとして、次工程に必要な範囲で以下を識別可能とする。

- Commit hash
- branch
- Adopted Artifact
- Repository Reflection Target
- reflected files
- reflected diff / scope
- Commit target
- Commit message識別情報
- Commit内容とRepository Reflection Scopeの一致
- scope外混入有無
- working tree state
- staged state
- Git Push未実施状態
- Stop有無および停止理由

固定Record Templateは形成せず、既存Transfer / Record責務へ接続する。

---

# Stop / Return

以下の場合、Local Git Commit EntryまたはCommit Executionを停止する。

- Product Owner Formal Adoption不足 / 不明
- Repository Reflection未成立
- Repository Reflection target不明
- exact reflected file scope不明
- Reflection Correspondence不足 / 不明
- Repository Reflection後のtarget変更
- pre-commit validation不足
- Unexpected Change存在
- branch不明 / Conflict
- working tree scope Conflict
- scope外working tree差分の存在
- scope外untracked fileの存在
- scope外modified fileの存在
- その他scope外未commit差分の存在
- staged state不明 / Conflict
- Commit Authority不足 / 不明
- Commit Execution Responsibility不明
- Existing Git GovernanceとのConflict
- 推測しなければ進めない状態

停止時は、以下を保持し、適切な既存Authority / Return先へ接続する。

- Blocking Finding
- Current State
- required Authority / Input
- target scope
- Return先

本Operationは停止状態を独自解消しない。

---

# Forbidden Recovery

実行主体は、問題を独自解消するために以下を行わない。

- reset
- rebase
- merge
- cherry-pick
- amend
- force operation
- history rewrite
- scope外差分のdiscard
- scope外差分のstash
- scope外差分の自動commit

必要な場合は停止し、既存Authority / Returnへ接続する。

---

# Existing Operation Separation

## `git_reflection_operation.md`

Implementation Validationで成立したImplementation差分をlocal Git historyへ固定するOperationである。

本Operationは、そのscopeを置換、吸収、拡張しない。

## `repository_sot_reflection_git_operation.md`

Formal Adoption後に成立したRepository SoT Reflection差分のLocal Git Commit Entryおよびlocal Git historyへのReflectionを扱う。

Repository Reflection Completion EvidenceをImplementation Validation Evidenceとして扱わない。

## `git_push_operation.md`

成立済みProduction Authorityおよびexplicit execution authorityに基づくGit Push Operationを扱う。

本OperationはGit Pushを扱わない。

---

# Existing Lifecycle Boundary

本Operationは、Builder、Design Validation、Review、Product Owner Formal Adoption、Repository Reflection、Implementation、Implementation Validationを再Formationしない。

Repository ReflectionをImplementation Validation相当として扱わない。

新Role、新Stage、Authority Owner、Execution Roleを追加しない。
