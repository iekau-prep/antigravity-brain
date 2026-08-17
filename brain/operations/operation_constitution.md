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
- Authority Inputを次Roleが識別可能な状態でTransferする原則
- Current Lifecycleへの接続に必要な範囲でAuthority Source、Current usable state、対象対応のTraceabilityを保持する原則
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
- Authority Input不足または責務外の推測が必要な場合のStop / Return原則
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

Authority Inputは、次Roleが識別可能な状態でTransferする。Current Lifecycleへの接続に必要な範囲で、Authority Source、Current usable state、対象対応のTraceabilityを保持する。

Stage Artifact Handoffは、前StageのArtifactが存在するだけでなく、次Stage責務に必要なArtifact、Result、Authority、Target、Statusが、現在の正規Stage進行内のCurrent Handoffとして一意に識別され、次Stage Roleへ正式に受け渡される状態とする。

Artifactが存在すること、過去チャットに存在すること、またはRepository内に存在することは、それぞれ次StageへのHandoff済みまたはCurrent Handoffを意味しない。Current Handoffは、Repository上または時系列上の最新Artifact、AIが最適と判断したArtifact、または受領Roleが複数候補から独自選択したArtifactとして扱わない。過去LifecycleからLatest Valid Artifactを探索・復元しない。

Current Handoffは、既存Transfer InformationのFrom、To、Next Stage、Purpose、Target、Status等との接続を維持する。必要なArtifact本文、Validation Result、Review Result、Implementation Result、Implementation Validation Result、PO Decision / Status、Stop Status、Authorityは、送出Stage、受領Stage、Role Input Contract、現在のTarget / Scopeに応じてCurrent Handoffとの対応を保って受け渡す。これらを全Stage共通の固定Artifact一覧として新設しない。

Stageを跨いでも、Target、Scope、対象Artifact、必要Repository Targetを一貫して識別可能とする。Current Handoffの送出元または受領先が不明な場合、必要Transfer Informationが不足する場合、またはHandoffが不足、不明、競合、推測・補完を要する場合、Stage Artifact Handoffは不成立とし、次Stageを開始せず、不足・不明内容を既存Transfer / Return責務へ保持する。

既存Stage接続を維持し、ReviewからImplementationまたはRepository Reflectionへ接続する場合も既存Decisionを迂回しない。

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

## 4.5 Limited Resume after Stop

### Purpose

Stop後に案件全体またはStage全体を無条件でRestartせず、Correctionの影響を受けていない成立済み状態を保持し、既存Return Pathに整合するValidな地点から必要最小範囲だけLifecycleをResumeする共通原則を定義する。

### Limited Resume Principle

Limited Resume after Stopとは、Correction成立後に、Correctionの影響を受けていない既存Valid状態を保持し、既存Lifecycle / Return Pathに整合する一意のResume Entryから、必要最小範囲だけLifecycleを再接続することである。

任意の途中再開、案件全体Restart、Stage全体Restart、または過去Artifactからの推測Resumeとして扱わない。

### Established State Preservation

Stop発生だけを理由に、Stop前のArtifact、Result、Decision、Validation、Review、Authority、Stage Resultを自動無効化しない。

ただし、一度成立した状態を永久にValidとは扱わない。Correctionにより前提が変化し、影響を受けると確認された状態は保持対象から外す。

### Correction / Resume Separation

Correctionは、Stop原因となった不足またはConflictを、既存の正しいRole、Stage、Decision主体で解消することである。

Resumeは、Correction成立後、保持可能なValid状態と既存Return Pathに基づき、ValidなResume EntryからLifecycleを再接続することである。

Candidate EはCorrection内容そのものを代行しない。

### Limited Invalidation Check

Correction成立後、Stop前の成立済み状態について、Correctionの影響を受けるかを限定的に確認する。

影響がないと確認できる状態は保持可能とする。影響がある状態は自動保持せず、必要な既存Role / Stageへ戻し、既存責務に従って再確認、再Formation、再Validationその他の必要な既存工程へ接続する。

全面Dependency Graph、Candidate E独自の依存関係、未知影響の推測、独自Validation / Review判定、独自無効化Authorityは形成しない。

### Resume Entry / Condition

Correction後にLifecycleをどこからResumeするかを一意に識別可能とする。Resume Entryは、元の停止Role / Stage、既存Return Pathから再接続されるStage、またはPO Decision後に指定された既存Stageのうち、現在のValid状態および既存Lifecycle / Return Pathと整合する地点とする。

固定の一律Resume Entryは形成しない。Resume Entryを一意に識別できない場合は、推測してResumeしない。

Limited Resume開始前に、元Stop原因が解消済みであること、必要Correctionが成立済みであること、必要Input / Artifact / Authorityを受領・識別できること、Target / Scopeに未解消Conflictがないこと、保持対象の有効性を確認できること、Resume Entryが一意であること、既存Return Path / Lifecycleと整合すること、新たなStop Conditionがないことを確認可能とする。

これは固定Resume Checklist Templateを新設するものではない。

### Re-execution Boundary

Stop原因およびCorrectionと無関係で、有効性を保持しているStage、Artifact、Result、Decision、Validation、Reviewは、Limited Resumeのみを理由に再実行しない。

Correctionが既存成立状態の前提に影響する場合は、必要な既存Stageまで戻る。「一度PASSした工程は再実行しない」という永久Ruleは形成しない。

### Resume Scope Limitation

Limited Resumeの対象範囲は、元Stop、必要Correction、Correctionによる影響範囲に限定する。

Resumeを理由に、Target、Scope、Product Definition、Architecture、Repository範囲、他Candidateを拡張しない。Scope拡張が必要な場合は既存Authority / DecisionへReturnする。

### Return Information for Resume

Stop時およびCorrection後の再接続に必要な情報を、既存Transfer / Return責務へ接続する。

少なくとも、Stopped Stage / Role、Stop point / Stop reason、Missing Input / Artifact / Authority、Conflict、Target / Scope、Return target、Required correction、保持候補となる成立済みArtifact / Result / Decision、有効性再確認が必要な範囲、Resume candidate pointを識別可能とする。

固定Resume Record Templateは形成しない。

### Repeated Stop

Resume後に同一または別のStop Conditionが再発した場合、Candidate E固有のRetry Loopへ入らず、既存Stop / Returnへ再接続する。

自動Retry、無限Retry、回数ベースRetry、Candidate E専用Retry Stageは形成しない。

### Candidate Boundary

Candidate Eは、現在の正規Lifecycle内でStop地点、Stop原因、Return先、成立済み状態を確認できるCaseのみ扱う。

過去Validation履歴、過去Review履歴、Adoption履歴、Authority Lifecycle、Current Handoffが不明で、何がValidかを現在Lifecycleから確認できないCaseはCandidate Fの責務である。過去Artifactから最新・Valid・採用済みらしきArtifactを推測してResumeしない。

Candidate A、B、C、DのAuthority Readiness、Implementation Handoff Sufficiency、Stage Artifact Handoff、Prompt Artifact Receivingは再Formationしない。これらの不足によってStopした場合も、不足自体は既存責務側で解消し、本章は解消後のValid State PreservationとLimited Resumeのみを扱う。

### Resume Authority Boundary

新しいResume Authority Roleは作らない。

- Stop：既存受領RoleおよびStop Condition
- Correction先：既存Return Path、既存Stage責務、必要なProduct Owner Decision
- Resume Connection：既存LifecycleとReturn Pathに基づく既存Role / Stageへの再接続

Module / General Design GPTは、Current State、前工程成果物、Stop情報、次Stage候補を整理できるが、PO Decision、Design Formation、Validation判定、Review判定、Authority Adoptionを代行しない。

### Responsibility Boundary

本章は既存Stop Condition、既存Return Path、Stage固有Return Flow、Role Authority、Artifact Authority、Record責務、Stage Architecture、Lifecycle Architectureを変更しない。

## 4.6 Past Lifecycle Unknown

### Purpose

過去Artifactは存在するが、現在必要なValidation、Review、Adoption、Repository Reflection、Authority、Current Handoff等のLifecycle成立状態を、現在確認可能なEvidenceから一意に追跡できない場合に、過去を推測復元せず、現在必要なLifecycle状態だけを既存Role / Stageで再成立させる共通原則を定義する。

単なるRecord欠落や軽微な記録不足ではなく、現在のLifecycle接続に必要な成立状態が確認不能なCaseを扱う。

### Past Lifecycle Unknown Principle

Past Lifecycle Unknownとは、Artifactが存在していても、Validation、Review、PO Adoption、Repository Reflection、Authority、Current Handoff等の過去Lifecycle成立状態を、現在確認可能な明示Evidenceから一意に確認できない状態である。

Artifact Existsは、Validated、Reviewed、Adopted、Current Authority、またはCurrent Handoffを意味しない。Artifact本文がRepository等に存在するだけで、過去Lifecycle成立を推測しない。

### Evidence Boundary

Past Lifecycle成立状態の確認には、Repository current state、Record、Artifact body、明示的Validation Result、明示的Review Result、PO Decision record、Repository Reflection evidence、Git evidence、Current Authority source等の現在確認可能な明示Evidenceを用いる。

Artifact filename、timestamp、近いcommit、過去チャット記憶、名称上の最新版、「以前成立したはず」という推測を、単独でLifecycle成立Evidenceとしない。固定Evidence Checklist / Matrixは形成しない。

### Past Lifecycle Reconstruction Boundary

Past Lifecycle Unknown時に、過去Stage PASS、Validation / Review成立、PO Adoption、Repository Reflection、Authority成立、Current Handoff、Artifact採用順序を推測で再構築しない。

明示Evidenceで確認できる過去成立状態まで自動的に破棄しない。

### Confirmed Past State Preservation

明示Evidenceから、現在も有効でありUnknown部分の影響を受けないと確認できるArtifact、Result、Decision、Lifecycle Stateは保持可能とする。

Unknown部分がその成立前提に含まれる場合は自動保持せず、必要な既存Role / Stageで現在時点の責務として再確認または再成立させる。Unknownが一つあることを、全Lifecycle Restartの根拠としない。

### Current Lifecycle Re-establishment

目的は過去Lifecycleの復元ではなく、現在必要なLifecycle状態を、現在のInput、Authority、Scope、Repository Stateに基づき、既存Role / Stageで正規に再成立させることである。

Candidate F自身はDesign Validation、Review、PO Adoption、Implementation Authority採用を代行しない。

### Recovery Entry / Latest Artifact Boundary

Current Lifecycleをどこから再成立させるかは、現在確認可能なEvidenceと現在必要なLifecycle状態に基づき、一意に識別可能とする。Recovery Entryは、明示Evidenceで確認可能な既存ArtifactをCurrent Inputとして扱えるStage、現在必要なAuthorityを正規に成立させられるStage、または必要なPO Decisionへ接続する既存Stageとなり得る。

「最後のValid Artifact」または「最新Artifact」という名称・時系列だけで、ArtifactやRecovery Entryを自動選択しない。latestはvalid、adopted、authority、またはCurrent Handoffを意味しない。

Recovery Entryを一意に識別できない場合は、推測して開始しない。

### Re-validation / Re-review Boundary

過去Validation、Review、Adoption等を追跡できず、その成立状態が現在必要なAuthorityまたはLifecycle進行条件に影響する場合は、必要な既存Stageを現在時点で再成立させる。

すべてのCaseでDesign Validation、Review、PO Decision、Repository Reflectionを固定再実行するRuleは形成しない。

### Authority Re-establishment / Past Artifact Reuse Boundary

Candidate AのAuthority Ready条件は再定義しない。Current Authority Readyを確認するために必要なValidation、Review、Adoption、Reflection等がPast Lifecycle Unknownにより確認不能な場合、必要なCurrent Lifecycleを既存Stageで再成立させる。Candidate F自身がAuthorityを直接付与しない。

Past Artifact本文は現在のLifecycle Inputとして再利用できる場合がある。ただし、Artifact本文の再利用は、過去Validation、Review、Adoption、Current Authority、Current Handoffの自動再利用を意味しない。再利用可否は、現在のScope、Authority、Repository State、Role Inputに基づき確認する。

### Conflict / Recovery Scope Boundary

Past Artifactが現在のDefinition、Authority、Scope、Repository StateとConflictする場合、Past Artifactを優先しない。Candidate FはConflictを独自解消せず、必要な既存Role、Stage、Product Owner DecisionへReturnする。

Current Lifecycle再成立の対象は、Unknown範囲、現在必要なLifecycle状態、その成立に必要な最小範囲に限定する。Past Lifecycle Unknownを理由に、Product Definition、Architecture、全Module、全Stage、全Repository、他Candidateを再Formationしない。

全Case共通の固定Recovery SequenceまたはRecovery Checklistは形成しない。

### Candidate / Record Boundary

Candidate Eは、現在の正規Lifecycle内でStop地点、Stop原因、Return先、Valid Stateを確認できるCaseのLimited Resumeを扱う。Candidate Fは、過去Lifecycle成立状態自体がEvidenceから確認できないCaseを扱い、Stop Point、Correction、Resume Entryを再Formationしない。

Candidate AはCurrent Authority InputがReadyかを扱う。本章は、そのReady確認に必要な過去Lifecycle成立状態がUnknownな場合、現在必要なLifecycleを既存Stageで再成立させる責務を扱う。Candidate AのReady条件、Authority Source、Conflict、Current Usable Stateは変更しない。

Recordは現在状態、工程履歴、事実を記録する。Candidate FはRecord不足をValidity判断で補完せず、Record OperationへValidity判定、Authority判定、Adoption判定、Recovery Entry決定Authorityを追加しない。

### Recovery Authority Boundary

新しいRecovery Authority Roleは作らない。

- General Design / Module GPT：現在地、確認可能Evidence、Unknown範囲、現在必要状態、次Stage候補を整理する
- 既存Stage Owner / Role：必要な既存Stage責務を正規に実行する
- Product Owner：Adoption、Implementation進行、必要な最終Decisionを保持する
- Record：現在状態 / 工程履歴を事実記録する

Candidate FはPO Decision、Validation判定、Review判定、Authority Adoptionを代行しない。

### Responsibility Boundary

本章は既存Lifecycle Stage定義、既存Role責務、既存Record責務、既存Authority責務、Artifact Authority、Current Handoff責務、Transfer / Return責務、Candidate E Limited Resume責務を変更しない。

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
