# Repository SoT Reflection Git Operation

Status: Active

---

# Proposed Status / Formal Adoption Lifecycle

`Proposed`は、本OperationがFormal executable Operationとして未activationであることを意味する。

Proposed stateのまま、本Operationをcaseへsilent applicabilityさせず、Operation executionへ接続しない。

Formal Adoption AuthorityはProduct Ownerにある。actual statusまたはactivation stateの変更は、Product Owner Formal Adoption成立後にのみ扱う。

Operation Adoptionは、case-specific Local Commit Authorityを意味しない。

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

# Implementation / IV Relationship

Repository SoT Formation / Reflectionのみを扱い、application / product implementation mutationを含まないscopeでは、ImplementationおよびImplementation ValidationはNOT APPLICABLEとする。

同一scopeにimplementation deltaが共存する場合、そのimplementation scopeは既存Implementation / Implementation Validation governanceへ接続する。

本OperationはImplementationまたはImplementation Validationを所有、再Formation、免除しない。

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

## Pre-Commit Validation Connection

Pre-Commit Validationは、Technical / Git Observation responsibilityとして、Codex｜READ-ONLYで行う。
```text
Repository SoT Reflection
↓
Post-Reflection Validation PASS
↓
exact commit candidate scope / message formation
↓
Technical / Git Observation｜Pre-Commit Validation
↓
PASS
↓
Product Owner｜case-specific Local Commit Authority
↓
Codex｜Technical Git Execution
```

Pre-Commit ValidationはProduct Ownerによるcase-specific Local Commit Authorityを先取りしない。validation時点では、Formal Commit Authority Owner、Authority requirement、decision route、exact candidate scope、exact candidate commit instruction / message、およびGit Push boundaryのcorrespondenceまでを確認する。

Pre-Commit Validationでは、`git add`、`git commit`、`git push`、file edit、restore、reset、checkout / switch、stash、rebase、merge、amend、staged diff modification、unstage、またはcleanupによるscope形成を行わない。

Pre-Commit Validationは、少なくとも以下を一体として確認する。

1. Formal Adoption correspondence
2. Repository Reflection ESTABLISHED
3. exact repository correspondence
4. exact branch correspondence
5. exact reflected files
6. exact reflected delta only
7. additional delta none
8. working tree scope correspondence
9. current staged state correspondence
10. untracked state correspondence
11. unexpected post-reflection change none
12. excluded scope preservation
13. Formal Commit Authority requirement / owner / decision route correspondence
14. exact candidate commit instruction / message correspondence
15. Git Push boundary

current staged stateを観測する。existing staged diffが存在しない場合、validation継続候補とする。existing staged diffが存在する場合、今回のRepository SoT Reflection commit scopeと安全かつ一意に分離可能であることを確認する。safe / exact separation不能の場合はSTOPする。Pre-Commit Validation自身がstaged stateを変更して分離を成立させない。

Pre-Commit Validation Resultは以下とする。

- PASS：Formal correspondenceが成立し、case-specific Local Commit Authority Decisionへ進行可能。
- STOP：Current fact、scope、staging、authorityその他にexact discrepancyがあり、self-repairせず停止する。
- FAIL：Formal Contract間にcorrespondence contradictionがある。

### Authorized External Delta Correspondence

scope-external modified deltaまたはuntracked deltaが存在する場合、Pre-Commit ValidationはREAD-ONLYで、以下を一体として確認する。

1. external delta inventory
2. exact file pathおよびdelta scope identity
3. Case identity
4. authorityまたはFormal Reflection / authorized lifecycle identity
5. Current working treeに存在するexpected state
6. current candidate scopeからのexplicit exclusion
7. candidate deltaとのsafe / unique isolation
8. candidate commit packageへのcontamination absence
9. external delta preservation
10. untracked state correspondence

Authorized Safe Isolationが成立する場合、validation継続候補とする。

identity、authority、expected state、explicit exclusion、safe / unique isolation、candidate contamination absence、またはexternal preservationを確認できない場合、Pre-Commit ValidationはSTOPする。

Pre-Commit Validation自身は、working tree、staged state、external delta、またはcandidate scopeを変更してsafe stateを成立させない。

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

目的は、成立済みRepository Reflection scope、Authorized External Delta、およびUnexpected / Unauthorized External Deltaを区別することにある。

scope外modified deltaまたはuntracked deltaが存在しない場合、既存のscope correspondence確認に従う。

scope外modified deltaまたはuntracked deltaが存在する場合、そのdeltaがAuthorized External Deltaとしてexactに識別され、current candidate scopeから明示的にexcludedされ、candidate commitへ混入せず、安全かつ一意に分離可能であることをREAD-ONLYで確認できる場合に限り、validation継続候補とする。

identity、authority、expected state、explicit exclusion、safe / unique isolation、またはcandidate contamination absenceを確認できないexternal deltaは、Unexpected / Unauthorized External DeltaとしてSTOP / RETURNする。

scope外差分を整えるための自動包含、自動破棄、自動stash、自動reset、その他working treeを変更してsafe stateを作る操作を行わない。

## Authorized External Delta

Authorized External Deltaは、以下すべてを満たすscope-external modified deltaまたはuntracked deltaである。

1. 別Caseまたは別の既存Formal Authorityに対応する。
2. exact file pathおよびdelta scopeが識別されている。
3. Current working treeに存在することがexpectedである。
4. Current candidate scopeから明示的にexcludedされている。
5. candidate deltaとstaging unit上で安全かつ一意に分離可能である。
6. candidate commitへ混入しない。
7. Pre-Commit ValidationおよびTechnical Git Executionが当該external deltaを変更、cleanup、stage、unstage、discard、rewriteしない。

Authorized External Deltaは、その存在のみを理由にSTOPしない。

candidate deltaとexternal deltaが同一file内に共存し、exact path stagingで安全かつ一意に分離できない場合はSTOPする。interactive hunk stagingその他の新しい分離方式を本Operationで形成しない。

---

# Unexpected Change Boundary

Authorized External Deltaは、Unexpected Changeではない。

以下のいずれかを満たすexternal deltaは、Unexpected / Unauthorized External Deltaとして扱い、STOPする。

- source不明
- Case不明
- Authority不明
- expected working-tree deltaとして確認不能
- exact file pathまたはdelta scope不明
- candidate scopeからのexplicit exclusion不明
- candidate scopeとのsafe / unique isolation不能
- candidate commitへの混入risk
- unauthorized fileまたはdiff
- unexpected post-reflection mutation
- authorized target diffとscope外差分を区別できない
- existing staged diffとのConflictがある
- commit対象の一意性がない

本Operationは、Unexpected / Unauthorized External Deltaを自動包含、自動破棄、自動stash、自動reset、自動stage、自動commit、またはその他のself-repairによって解消しない。

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

## Formal Commit Authority Owner

Formal Commit Authority OwnerはProduct Ownerとする。

Local Git Commitには、Product Ownerによるcase-specific Local Commit Authorityを必要とする。Operation Adoptionは、case-specific Local Commit Authorityを意味しない。

case-specific Local Commit Authorityは、少なくとも以下を一意に識別可能とする。

- exact repository
- exact branch
- exact file scope
- exact reflected Case scope
- Local Commit only
- additional file：NOT AUTHORIZED
- history rewrite：NOT AUTHORIZED
- Git Push：NOT AUTHORIZED
- exact commit instruction / message

本ContractはProposed Operationをactivationせず、case-specific Local Commit Authorityを付与しない。

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

Codex｜Technical Git Executionは、Pre-Commit Validation PASSおよびProduct Ownerによるcase-specific Local Commit GOが成立した場合に限り、exact staging、staged diff verification、local commit、post-commit technical confirmationを扱う。

Repository Formation GPTはmutation executorではない。

本接続は新Execution Roleを形成せず、既存Technical / Git Execution responsibilityへのspecific connectionのみを示す。

## Authorized External Delta Scope Integrity

Codex｜Technical Git Executionは、Pre-Commit ValidationでAuthorized Safe Isolationを確認済みの場合、authorized external deltaを保持したまま、exact authorized candidate pathsのみをstageする。

Technical Git Executionは、以下を確認する。

1. staged packageがcandidate scopeだけである。
2. authorized external modified fileまたはuntracked deltaをstageしない。
3. external deltaをedit、unstage、cleanup、discard、rewriteしない。
4. stash、reset、restore、checkout / switchを行わない。
5. local commitにはcandidate packageだけを含める。
6. post-commit technical confirmationで、committed candidate scopeおよびremaining authorized external deltaを双方確認する。

safe / unique isolationに失敗した場合、self-repairせずSTOP / RETURNする。

---

# Commit Message Boundary

Commit messageは、既存Repository conventionと整合し、Formation CaseおよびRepository Reflection内容を追跡可能なものとする。

Commit message自体に独立したFormal Authorityを設けない。

case-specific commit messageを本Operation ArtifactへPermanentに固定しない。

exact commit messageは、case-specific Local Commit Authorityに対応するactual authorized Git execution instructionで固定する。

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
