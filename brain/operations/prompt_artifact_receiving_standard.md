# Prompt Artifact Receiving Standard

Status: Active

---

# Purpose

Artifact本文またはArtifact参照を必要InputとするPromptについて、受領RoleがPrompt上で必要Artifactを実際に受領・識別できる状態を定義する。

---

# Scope

本書が扱うもの

- Receiving Location
- Artifact Identification
- Artifact Body Boundary
- inline / referenceによる受領
- Placeholder
- Prompt形成側の責務
- 受領確認
- 未受領時のStop / Return

本書が扱わないもの

- Prompt Template
- Artifact内容
- Authority
- Current Handoffの選定

---

# Prompt Artifact Receiving Definition

Prompt Artifact Receivingとは、必要Artifactが存在またはHandoff対象として確定しているだけでなく、受領Roleが以下をPrompt上で一意に識別できる状態である。

- どのArtifactを受領するか
- Prompt内のどの領域がArtifact Inputか
- 本文または参照情報の範囲
- 対応するRole Input
- Artifactが実際に受領済みか

Placeholderの存在だけでは、Artifact本文または有効なReferenceの受領済みとは扱わない。

---

# Receiving Location

Artifact本文または参照をPrompt Inputとして必要とする場合、Prompt内に明示的なReceiving Locationを設ける。

受領Roleが少なくとも以下を識別できる状態とする。

- Artifact Inputの種別
- 受領するPrompt上のInput領域
- 自身のどの必要Role Inputに対応するか

Receiving Locationの具体的なレイアウト、見た目、記法は固定しない。

---

# Artifact Identification

Receiving Locationでは、受領対象Artifactを他のPrompt本文および他Artifactと区別可能とする。

既存Input / Transfer責務上必要な範囲で、Artifact名、Artifact種別、Current Handoffとの対応、Authority / Source、対象Scope等を識別可能にする。

新しい固定Artifact metadata一覧は形成しない。

---

# Artifact Body Boundary

Artifact本文をinlineで受領する場合、Prompt本文とArtifact本文、または複数Artifact同士を混同しないよう、Artifact本文の範囲を一意に識別できるBoundaryを持たせる。

特定の文字列、Markdown形式、Delimiter、見出し構造は固定しない。

---

# Inline / Reference Boundary

Artifact受領は、以下のいずれでも成立可能とする。

- inline body
- 受領Roleが既存Loading / Authority / Scopeの範囲内で一意に取得可能なexact reference

Reference方式では、何を読むか、どのSourceか、どのScopeか、Current Handoffとどう対応するかを一意に識別できなければならない。

未指定Repository探索、代替Artifact探索は許容しない。

---

# Placeholder Responsibility

Prompt形成時点でArtifact本文の後続貼付が必要な場合、Prompt形成側は以下を明示する。

- 必要Artifact
- Receiving Location
- Artifactが未挿入であることを識別可能にするPlaceholder

Placeholderの具体的文字列は固定しない。

---

# Prompt Authoring Responsibility

既存Module GPTのCodex Prompt形成責務へ接続する。

Prompt形成側は、ArtifactをPrompt Inputとして必要とする場合、必要ArtifactのReceiving LocationをPromptへ用意する。ユーザーによる外部Artifact貼付が必要な場合は、必要Artifactと貼付先を明示する。

Prompt形成側は、Artifact本文を捏造・補完しない。

---

# Receiving Confirmation

受領Roleは開始前に、以下を確認する。

- Required Artifactを識別できる
- Receiving Locationを識別できる
- 必要Artifact本文または有効なReferenceを受領済みである
- Artifact Body Boundaryが一意である
- 対応するRole Inputを識別できる

受領Roleは、不足Artifactの作成、別Artifact選択、未指定Repository探索、過去チャットからの推測、Placeholderの無視によって受領成立としない。

---

# Missing Artifact Stop

以下ではPrompt Artifact Receiving不成立として停止する。

- Required ArtifactのReceiving Locationがない
- 必要PlaceholderまたはInput領域を識別できない
- Artifact本文が未挿入
- 必要Referenceが未指定
- Artifact本文またはReferenceを一意に識別できない
- Artifact Body Boundaryが不明
- Required ArtifactとRole Inputの対応が不明
- 必要Authority / Sourceを識別できない
- 推測、代替探索、補完が必要

---

# Return / Transfer Information

Receiving不成立時、既存Transfer / Return責務へ少なくとも以下を保持する。

- Required Artifact
- 対応Role Input
- Receiving Location欠落
- Artifact未挿入
- Reference不足
- Boundary不明
- 識別不能箇所
- 必要Authority / Source不足
- Stop理由

新しいReturn Roleは形成しない。

---

# Candidate B Boundary

Candidate Bは、Implementation Input一式のSufficiencyを扱う。

本書は、必要Artifact InputをPrompt上で受領可能にする構造を扱う。Input Package全体のSufficiencyを再判定・再Formationしない。

---

# Candidate C Boundary

Candidate Cは、何をCurrent Handoffとして正式に渡すかを扱う。

本書は、渡されたArtifactをPrompt上でどのように受領可能にするかを扱う。Current Handoff選定、Artifact必要性の判定、Stage間Transfer責務を再Formationしない。

---

# Common Prompt Template Boundary

全Role共通Prompt Templateは形成しない。

共通責務は、Artifactを必要InputとするPromptに、受領領域、Artifact識別、必要Boundary、未受領時Stopを持たせることに限る。

---

# START / END Format Boundary

START / END blockを唯一のFormal Receiving Formatとして採用しない。

Formal requirementは、Artifact本文または参照範囲が一意に識別可能であることとする。START / END blockは有効な実装例の一つに留める。
