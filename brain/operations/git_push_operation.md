# git_push_operation.md

Updated: 2026-08-18
Status: Active

---

# Purpose

本書は、Production Reflection Gate成立後に、Codexが明示されたAuthority Scope内で安全にTechnical / Git Executionを行うため、Execution開始条件、Final Preflight、停止、通常push、push後remote reflection confirmation、Execution ResultおよびTransfer責務を定義する。

pushはDecisionではなく、成立済みAuthorityに基づくExecutionである。

---

# Scope

本書が扱うもの

- Production系Technical / Git Execution
- Execution Entry Condition
- Final Preflight
- Remote RefreshおよびCurrent State Confirmation
- 通常push
- push後remote reflection confirmation
- Execution Result
- Candidate Kおよび必要時のReturn / escalationへのTransfer

本書が扱わないもの

- Production Reflection Gateの判断
- Production Policy
- Final Public Decision
- Deployment Completion

---

# Authority Input

Codexは、以下をInputとして受領する。

- 成立済みProduction Reflection Gate
- General Design GPTからのexplicit execution authority
- 実行対象を一意に限定するtarget scope

explicit execution authorityには少なくとも、対象remote / branch、対象revisionまたは対象未push履歴、許可されたExecution範囲が識別可能な状態で含まれる必要がある。

---

# Owner / Execution Responsibility

Ownerとなる新Roleは作らない。

Candidate Iで成立したCodexのTechnical / Git Execution Responsibilityとして、Codexが実行する。

CodexはGate成立をDecisionせず、Production公開Decision、Production Policy Decision、Production Reflection Decisionも行わない。

---

# Entry Condition

以下がすべて成立した場合のみExecutionを開始できる。

- Production Reflection Gateが成立済みである
- explicit execution authorityを受領している
- target scopeが一意である
- 実行対象remote / branchおよび対象revisionまたは未push履歴を確認可能である
- 実行がProduct OwnerのProduction Policy範囲内である

いずれかが不足・不明・矛盾する場合、Codexは開始しない。

---

# Final Preflight

Codexはpush直前に、以下を確認する責務を持つ。

- current branch
- local HEAD
- actual remote state
- 対象が`origin/main`である場合のactual `origin/main`
- ahead / behind
- working tree
- staged / unstaged差分
- push対象となる未push履歴
- target scopeとの一致
- fast-forward可能性
- Scope外commitまたはScope外working tree差分の非混入

Preflightは、Gateを再判断するものではない。Gate成立時点から実行直前までにGit / Repository状態が変化していないことを確認するTechnical責務である。

---

# Remote Refresh / Current State Confirmation

Codexはpush前にremote metadataを現在状態へ更新し、Gate成立後のunexpected remote changeの有無を確認する。

更新後のremote stateと、explicit execution authorityおよびGateの前提が一致しない場合は、pushせず停止する。

---

# Pre-Push Stop

以下の場合、Codexはpushを実行せず停止する。

- Execution Authorityが不足、不明、または対象Scopeと一致しない
- target scopeを一意に確認できない
- 対象履歴または対象revisionを一意に確認できない
- unexpected remote changeがある
- unexpected behindがある
- fast-forwardできない
- Scope外working tree差分がある
- Scope外commitがpush対象へ混入する
- Production Reflection Gateの前提と現在Git状態が一致しない
- history rewriteが必要となる

Codexは状態、差分、停止理由を保持し、General Design GPTへReturnする。

---

# Push Execution

Final Preflightが成立した場合のみ、Codexは明示されたAuthority Scope内で通常pushを実行できる。

Codexは、対象外のbranch、revision、commit、working tree差分をpush対象へ含めない。

---

# Post-Push Remote Reflection Confirmation

push後、Codexは少なくとも以下を確認する。

- local HEAD
- target remote / branch
- 対象revision / commitがremoteへ反映されたこと
- ahead / behind
- working tree

これはGit remoteへの反映確認であり、Deployment成功またはProduction Completionの判定ではない。

---

# Post-Push Remote Reflection Confirmation Failure

push後remote reflection confirmationが成立しない状態は、Pre-Push Stopに含めない。

この場合、Codexは以下を行う。

- push実行済み事実を保持する
- push結果を保持する
- remote confirmation不成立状態および停止理由を保持する
- 追加pushその他のExecutionを独自に継続しない
- General Design GPTへReturnする
- Deployment成功またはProduction Completion判定へ進まない

push成功は、remote reflection confirmation成立を意味しない。

---

# Forbidden Recovery

Pre-Push StopおよびPost-Push Remote Reflection Confirmation Failureのいずれでも、CodexはCandidate Jの明示Authority Scope外で、独自に以下を実行して解消しない。

- merge
- rebase
- reset
- force push
- history rewrite

これらが必要な状態は、Technical Executionの範囲外である。Codexは状態、差分、停止理由を保持してReturn / escalationする。

---

# Execution Result

CodexはExecution Resultとして、少なくとも以下をTransfer可能な状態で保持する。

- Execution対象
- push実行有無
- push結果
- target remote / branch
- target revision / commit
- explicit execution authorityの対象Scope
- Preflight結果
- remote refresh結果
- push後remote reflection confirmation結果
- remote confirmation不成立時の停止理由
- ahead / behind
- working tree状態
- Scope外混入の有無
- Stop有無および停止理由

---

# Transfer / Return

pushおよびremote reflection confirmationが成立した場合、Execution ResultをCandidate Kへ渡す。

Candidate Kへ渡す情報は、Deployment Observationが対象revisionを識別できる状態とする。Deployment成功、Production Completion、Production UX Observationは本書で判定しない。

Pre-Push Stopの場合は、状態、差分、停止理由を添えてGeneral Design GPTへReturnする。

Post-Push Remote Reflection Confirmation Failureの場合は、push実行済み事実、確認不能または不成立の状態、停止理由を添えてGeneral Design GPTへReturnする。

Production PolicyまたはFinal Public Decisionが必要な場合は、General Design GPTを経由してProduct Ownerへescalationする。

---

# Candidate H Boundary

Candidate Hは、Productionへ反映されるRepository状態全体についてProduction Reflection Gateを判断する。

本書は、そのGateを再判断しない。本書は、成立済みGateとexplicit execution authorityをInputとして、実行直前・実行時のGit状態を確認しpushを実施する。

---

# Candidate K Boundary

Candidate Kは、push後のDeployment ObservationおよびProduction Completionを扱う。

本書は、push後のGit remote reflection confirmationまでを扱う。Deploymentの開始、成功・失敗、target revisionとの一致、およびProduction Completionは判定しない。

---

# Existing Lifecycle Boundary

本書は、Builder、Design Validation、Review、Implementation、Implementation Validationを再Formationしない。

本書は既存Implementation / IVの内部Stageではなく、Candidate IのAuthority BoundaryをInputとするProduction系Technical Execution Operationである。

新Stage、新Role、Stage Ownerは追加しない。

---

# Completion / Stop Condition

pushおよびremote reflection confirmationが成立し、Execution ResultをCandidate KへTransfer可能な状態で保持した時、本書のExecutionは完了する。

Pre-Push StopまたはPost-Push Remote Reflection Confirmation Failureが発生した場合は、独自Recoveryを行わず、Execution Resultと停止理由を保持してGeneral Design GPTへReturnする。
