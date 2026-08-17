# role_input_contract.md

Status: Draft

Purpose

本書は、各Roleへ渡す最低限のInput Contractを定義する。

本書は、Roleの判断方法を定義しない。

本書は、Role間で受け渡す入力不足を防ぎ、
GPTチャット運用上でAIが推測せず進行できる状態を形成する。

---

Scope

本書が扱うもの

* Builderへの最低限入力
* Design Validationへの最低限入力
* Reviewへの最低限入力
* Implementationへの最低限入力
* Implementation Validationへの最低限入力
* Maturity管理への最低限入力
* Role間Input Contract

本書が扱わないもの

* Role判断方法
* AI設計プロトコル
* System思想
* Product思想
* 各Role責務
* Implementation
* Git操作

---

Common Input Contract

すべてのRoleへ渡す入力は、最低限以下を含む。

* Request ID
* Request Purpose
* Target
* Scope
* Allowed Change
* Forbidden Change
* Out of Scope
* Expected Output
* Transfer Information

不足がある場合、AIは推測せず停止する。

---

Current Handoff Input Connection

受領Roleは、現在の正規Stage進行内で正式に渡されたCurrent Handoffを、自身の既存Role Input Contractに対応するInputとして受領する。

次Stage開始前に、必要Current Handoffを受領していること、必要なArtifact / Result / Authorityが一意であること、自身のRole Inputと対応すること、Target / Scopeが一致すること、必要Statusを確認できること、およびConflictまたは不明がないことを確認する。

必要Current Handoff未受領、Artifact / Result / Authorityの一意識別不能、Current Handoffの送出元または受領先を確認できない、必要Transfer Informationが不足する、Role Inputとの対応不明、Target / Scope不一致、必要Status不明、Conflict、または推測・補完が必要な場合、受領Roleは開始しない。

受領Roleは、不足Artifact生成、Result再判定、Authority採用、Current Artifactの推測選択、Target / Scope再定義、または前Stage責務の代行によってHandoffを成立させない。不足、不明、ConflictおよびStop理由は既存Transfer / Return責務へ接続する。

---

Authority Input Readiness

Definition / ArtifactがRepositoryまたはMainlineに存在するだけでは、Implementation Authority Readyとは扱わない。

今回のImplementationに使用するAuthority Inputは、少なくとも以下を識別可能とする。

* exact Authority Source
* 今回のImplementation対象との対応
* Authorityとして使用する対象範囲
* Current usable state
* Implementationに必要なDefinition範囲の充足
* 不足またはConflictの有無

複数Sourceの存在自体は禁止しない。複数Sourceがある場合も、今回どのSourceおよびどの範囲をAuthority Inputとして扱うかを一意に識別可能とする。

Current usable stateは、当該Sourceに必要な既存Lifecycle、Decision、Artifact状態を根拠として識別する。全Definitionに対してPO Adoption、Design Validation、Review、Repository Reflection、Git Reflectionを一律必須とはしない。過去Lifecycle全履歴の完全再構成も要求しない。

Authority Inputを必要とするRoleは、自身の開始前にAuthority SourceとReady状態を確認する。Authority Inputを必要としないRoleへ、Implementation固有確認を一律要求しない。

Authority Source不明、Authority Source競合、Current usable state不明、Implementation対象との対応不明、必要Definition不足、または必要なSoTを確認できない場合、Authority Readyとは扱わない。Inputを受けるRoleはConflictを独自に解消せず、Sourceを独自選択・推測・補完せず開始しない。

---

Builder Input Contract

Builderへ渡す最低限入力

* Request ID
* Request Purpose
* Design Target
* Design Scope
* Allowed Change
* Forbidden Change
* Out of Scope
* Reference Documents
* Expected Output
* Transfer Information

Builderは、Design Formationのみを行う。

---

Design Validation Input Contract

Design Validationへ渡す最低限入力

* Request ID
* Validation Target
* Builder成果物
* 確定Design差分
* Design Scope
* Forbidden Change
* Validation Criteria
* Expected Output
* Transfer Information

Design Validationは、Builder成果物の妥当性確認に必要な入力のみを受け取る。

---

Review Input Contract

Reviewへ渡す最低限入力

* Request ID
* Review Target
* 対象成果物
* Review Scope
* Forbidden Change
* Review Criteria
* Expected Output
* Transfer Information

Reviewは、指定された対象成果物とScopeのみを扱う。

---

Implementation Input Contract

Implementationへ渡す最低限入力

* Request ID
* Implementation Target
* 確定Design差分
* 実装対象本文
* 対象ファイル
* Allowed Change
* Forbidden Change
* Out of Scope
* Expected Output
* Transfer Information

Implementationは、確定Design差分以外を実装対象にしない。

Implementationは、Authority Sourceが一意かつCurrent usableなInputとして識別され、必要Definition範囲が確認可能な場合にのみ開始する。いずれかが不明または不足する場合、承認済み設計を推測で補完して実装しない。

Implementation Handoff Sufficiency

Implementation Handoff Sufficiencyとは、今回のImplementationに必要なInputについて、今回のImplementationとの対応が一意であり、必要Inputが受領済みで、Input間に不足またはConflictがなく、ScopeおよびConstraintsが明確で、開始に必要な限定Current Stateを識別でき、必要なAuthority InputがReadyかつ受領済みであり、推測による補完が不要である状態である。

上流、過去チャット、Repository内に情報が存在するだけでは、今回のImplementation Handoff Inputとして受領済みとは扱わない。

既存Request ContractはImplementation HandoffのBoundary Inputとして受領し、Purpose、Scope、Allowed、Forbidden、Out of Scope、Deliverables、Stop Conditions等の既存境界が今回のImplementation対象と対応していることを確認可能とする。Request Contractは必要Inputの一部であり、単体でHandoff Sufficiency成立とは扱わない。

承認済みBuilder / Design Artifact、実装対象本文、必要Design差分は、今回どのArtifactおよびどの差分を実装対象とするかが一意に識別・受領されていることを要する。Artifactの存在だけでHandoff Sufficiency成立とは扱わない。

今回Authority Inputが必要な場合、Candidate AでReadyとなったInputがHandoff Inputとして受領済みであることを要する。Authority Readyを確認できない場合は、Authority Input ReadinessのStop責務に従う。

Implementation開始に必要な限定Current State、既存のAllowed Change、Forbidden Change、Out of Scope、Role Boundary、Stop Condition等のConstraint、既存Transfer Information、Repository Target、変更Scope、対象ファイルは、今回のHandoff Inputとして対応を識別可能とする。Implementation Roleは、未指定のRepository内容を独自探索してScope化せず、Constraintを補完・再解釈・新設しない。

Implementation Roleは受領Inputが開始に十分かを確認するが、不足Artifactの作成、Authorityの採用、Constraintの新設、Current Stateの推測、Scope拡張、上流Decisionの補完によってSufficiencyを成立させない。

必要Input未受領または一意に識別不能、Request Contractと実装対象の不一致、承認済みDesign / Artifactの不足または不明、必要Authority Inputの未Readyまたは未受領、限定Current State・必要Constraint・Transfer Informationの不足、Repository TargetまたはScope不明、Input間Conflict、または推測・補完が必要な場合、Handoff Sufficiencyは不成立とする。Implementationは開始せず、承認済み設計、Repository状態、過去会話または一般知識を根拠に不足を推測・補完して実装しない。

Handoff Sufficiency不成立時は、既存Transfer / Return責務に従い、不足Input、識別不能Input、Conflict、Current State不足、Authority不足、Constraint不足、Scope / Target不明、確認不能箇所、Stop理由を保持する。Return先は既存Implementation Return Pathに従う。

---

Implementation Validation Input Contract

Implementation Validationへ渡す最低限入力

* Request ID
* Validation Target
* 確定Design差分
* Implementation成果物
* 対象ファイル
* Validation Scope
* Forbidden Change
* Expected Output
* Transfer Information

Implementation Validationは、確定Design差分とImplementation成果物の一致確認を行う。

---

Prototype Validation Input Contract

Prototype Validationへ渡す最低限入力

* Request ID
* Validation Target
* Prototype Test結果
* AI Design OS Specification
* Foundation（A〜D）
* 判定基準
* 不足分類
* Forbidden Change
* Expected Output
* Transfer Information

Prototype Validationは、Prototype GPTそのものではなく、Foundation（A〜D）による初期判断土台を評価対象として扱う。

Prototype Validationは、Prototype時点で不足が存在しても、後天学習可能な不足と初期土台不足を分離して確認する。

Prototype Validationは、AI Design OS Specificationとの仕様照合として運用する。

Prototype Validationは以下を扱わない。

* Prototype GPTの性能評価
* GPT完成度評価
* 改善案形成
* Operation文書修正
* Builder成果物本文作成
* Implementation
* Git操作
* 新Role追加
* 新Stage追加
* 新Operation文書追加
* Prototype Test 2の作成・実施
* Prototype Validation実施手順作成
* Product Owner Decision代行

---

Maturity Management Input Contract

Maturity管理へ渡す最低限入力

* Request ID
* Maturity Target
* 対象成果物
* Maturity Scope
* 更新対象
* 更新禁止対象
* 根拠情報
* Expected Output
* Transfer Information

Maturity管理は、指定された成熟対象と更新範囲のみを扱う。

---

Transfer Information

Role間Transfer Informationは、最低限以下を含む。

* From
* To
* Next Stage
* Transfer Purpose
* Transfer Target
* Transfer Scope
* Transfer Status

Transfer対象が実装または検証を含む場合は、以下も含める。

* 確定Design差分
* 実装対象本文
* 対象ファイル
* 禁止事項

Authority Ready不成立時は、既存Transfer Informationに加え、必要な範囲で以下を保持する。

* Authority Ready不成立の対象
* 確認したexact Authority Source、または識別不能箇所
* Current usable stateの確認結果または不明箇所
* Implementation対象との対応状況
* 不足Definition
* Conflict内容
* 確認不能箇所
* Stop理由

---

Rule

Input Contractに不足がある場合、AIは推測して補完しない。

不足情報がRole実行に必要な場合、AIは停止し、
不足項目をTransfer Informationに明記する。

本書は、Role判断方法を変更しない。

本書は、Role責務を変更しない。

本書は、Role間で渡す最低限入力のみを定義する。
