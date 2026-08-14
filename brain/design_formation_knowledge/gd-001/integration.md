# GD-001 Integration Knowledge

## Purpose

本書はGD-001における横断的なDesign Formation Knowledgeを、現在の判断で必要な場合に参照できる形で保持する。

本書はCurrent SoT、工程進行、Implementation状況、Repository反映状況の記録ではない。

## Information Boundary

### Repository Current Fact

Repository Current Factは、確認済みの現在本文およびCurrent Boundaryへの参照として扱う。本書のFormation KnowledgeによってRepository Factを自動的に変更・昇格させない。

### Product Owner Decision

PO-01〜PO-08の確定Decisionは、各DecisionのCurrent SoTおよび関連Recordを参照する。本書はDecision本文の代替ではない。

### Formation Knowledge

GD-001で扱った問題構造、調査・分離、Candidate Close / Reduced、Remaining Gap、Repository読解変化、およびCurrent BoundaryへのTraceabilityを扱う。

Process Status、Candidate分類、横断因果はFormation Input由来のKnowledgeとして扱い、Repository Current FactまたはCurrent SoTとして扱わない。

### 未確定・切離Gap

未確定・切離Gapは、解決済み事項またはCurrent SoTとして扱わない。将来の判断で必要となった場合に、関連するCurrent Boundaryとともに再確認する。

## Current BoundaryへのTraceability

GD-001のFormation Knowledgeは、現在有効なRepository本文および各DecisionのCurrent SoTを根拠として再確認する。過去Formationは現在のBoundaryを置換・優先しない。

## GD-001 Navigation / Traceability Knowledge

### Origin / Original Mainline

GD-001の起点には、以下のOriginal 10-Issueが存在した。

1. STATE と decisionState の関係
2. reasons の責務範囲
3. fixed_core の責務範囲
4. raw_input / confirmed_input / reading_context の扱い
5. loan_context を含む loan_safety の責務
6. profile_context の扱い
7. property data / analysis data の扱い
8. type_diagnosis / purchase_motivation / rent_vs_buy の横断接続
9. selected_property_ids の扱い
10. LINE前 / LINE後（User Phase）の扱い

Original Mainlineでは、Issue 10から扱う予定だった。

このOriginおよびOriginal Mainlineは、Repository Current Factや新しいCurrent SoTではない。GD-001のFormation因果として保持する。

### Branch Reason

Issue 10をRepositoryから確認する過程で、Issue 10単体に閉じないCross-Issue Interactionが確認された。

確認対象は他Issueおよび複数のSystem / Module / Data Boundaryへ接続していたため、Issue 10を孤立してFormationせず、GD-001｜Cross-Issue Repository ObservationへBranchした。

このBranchはOriginal 10-Issueを置換、破棄、再定義するものではない。各Issueを個別Formationする前に、Current Definition、Responsibility Boundary、Data Boundary、Shared Concept、Module / System Connection、Cross-Issue InteractionをRepository事実から横断確認するためのFormation経路である。

Original 10-Issueは、Branch後に再接続するMainlineとして維持する。

### Formation Path

GD-001 Branchでは、Cross-Issue Repository Observation、追加Repository Fact Confirmation、Pass群、PO-01〜08、必要なRepository Formation Follow-up、Design Formation Knowledgeへの還元、Original 10-Issue Current Resolution Checkを経て、Original Mainlineへ再接続した。

このPathは、各Stageの完了記録を保存する工程ログではない。

保持するのは、横断確認によってOriginal Issueの問題構造を再確認し、Resolution、Candidate Reduction、Decomposition、Separate Gapへの切離しが発生し、その結果をOriginal Issue Setへ再接続する必要が生じたFormation因果である。

### Resolution Connection

GD-001 BranchはOriginal 10-Issueを別Issue Setへ置換したのではなく、横断Formationによって各Original IssueのCurrent Resolutionを再確認可能にした。

Formation因果上、Original 10-Issueは以下のResolution / Separationへ接続される。

- Resolved
  - Issue 1｜STATE と decisionState
  - Issue 3｜fixed_core
  - Issue 4｜raw_input / confirmed_input / reading_context
  - Issue 5｜loan_context / loan_safety
  - Issue 6｜profile_context
  - Issue 7｜property data / analysis data
  - Issue 8｜Module横断接続
  - Issue 9｜selected_property_ids

- Separated
  - Issue 2｜reasons

- Partially Resolved
  - Issue 10｜LINE前 / LINE後（User Phase）

このResolution区分は、新しいCurrent SoT、Issue Status管理、またはMaturity管理ではない。GD-001 BranchによってOriginal Issue SetがどのようにResolution / Separationされ、どこへReturnしたかを再構成するFormation Traceabilityとして扱う。

各Issueの現在のDefinition、Responsibility、Data Boundaryは、Current Repository SoTを優先する。

### Issue 2 / Separate Gap Boundary

Issue 2｜reasonsは、GD-001内のRevalidationにより、一体のDecision Subjectとして維持するのではなく、異なるLayerの独立Gap群へ分離された。

旧Original Issue名だけを理由に、分離済みGapをIssue 2へ再統合しない。

同様に、GD-001で露出・分離されたSeparate Gapについては、以下を維持する。

> Separate Gapが未解決であること
> ≠
> Original Issueが未完了であること

current_stateの意味・置換先、STATE / decision_stateの詳細接続、decision Data Persistence Responsibility Owner、Technical Persistence、reason / reasons Data Boundary、reason_material接続、reason_code、reason同期Rule、profile_contextの具体的更新条件・操作主体、property Identity、analysis versioning / generation、DB / UI historyとSystem history、LINE保持・再開、decision_log、decision_state Persistence等を、Original 10-Issueへ自動的に戻さない。

これは各Gapを解決済みとするものではなく、Original IssueとSeparate Gapを再混同しないためのNavigation Boundaryである。

### Remaining Mainline / Return Point

GD-001 Branch後のOriginal Mainline上のReturn Pointは、Issue 10｜LINE前 / LINE後（User Phase）である。

ただし、以下を維持する。

> Return Point
> ≠
> Issue 10の仕様Formation開始Decision

Return Pointは、Issue 10の残存論点をCurrent Repository Factから再確認可能な地点として扱う。

Formation因果上、Issue 10では、LINE前後でModuleの利用状態・役割差が存在し、LINE後はdecision continuity等への接続範囲が拡張する一方、System横断の正式なUser Phase Conceptは確認されていない地点へ戻る。

User Phase Concept、Phase遷移、LINE保持、Persistence Responsibility等を、このNavigation / Traceability Knowledgeから自動形成しない。

### Issue 10 Close Check Follow-up

Issue 10は、Original Mainline上のReturn Pointとして、Partially ResolvedのFormation経緯を経た。

Return Point後、Current Factを基準としてIssue 10 Close Checkを行った結果、Issue 10固有のRemaining Specific Gapは確認されず、独立して保持すべきDecision Subjectも残っていないことが確認された。

したがって、以下のFormation因果を保持する。

> Partially Resolved
> ↓
> Original Mainline上のReturn Point
> ↓
> Issue 10 Close Check
> ↓
> Remaining Issue 10 Specific Gapなし
> ↓
> Independent Decision Subjectなし
> ↓
> Issue 10 Close可能
> ↓
> Original 10-Issue Mainline Closure Checkへ接続可能

これは新しいIssue 10仕様、User Phase Concept、LINE前後Boundary、またはCurrent SoTを形成するものではない。

Issue 10 Closeは、以下を意味しない。

> Issue 10 Close
> ≠ Separate Gap Close
> ≠ User Phase不要Decision
> ≠ LINE前後差の消滅
> ≠ LINE Implementation成立

LINE保持・再開、Persistence Responsibility、decision Data Persistence、decision_state Persistence、Technical Persistenceその他の分離済みGapを、Issue 10へ再統合しない。

また、過去にIssue 10がPartially Resolvedであり、Return Pointとして保持されていたFormation経緯は消去しない。Close Checkによって、その後のFormation経路が追加されたものとして扱う。

Issue 10 Close後のOriginal Mainlineは、Original 10-Issue Mainline Closure Checkへ接続可能である。ただし、これはOriginal 10-Issue全体のClosureを判定・確定するものではない。

### Repository Interpretation Change

GD-001以降、Original 10-Issueを読む際には、Original Issue名だけから現在の問題範囲を復元しない。

GD-001 Branchで成立したResolution、Candidate Reduction、Decomposition、Separate Gapへの切離し、Current Boundaryとの再接続を経たFormation経路を参照し、Original Issueを過去の問題サイズへ自動的に再拡大しない。

同時に、このNavigation / Traceability Knowledge自体をCurrent SoTとして使用しない。

現在のConcept、Responsibility、Data、Connection等を判断する場合はCurrent Repository SoTを優先する。DFKは、なぜ現在の問題構造へ到達したかを理解するFormation Knowledgeとして使用する。

### Existing GD-001 Knowledgeとの接続

本節は既存PO Knowledgeを置換・複製しない。

- PO-01：state保存・更新表現とSTATE Boundaryに関する減算的整理
- PO-02：広範なdecision責務Candidateが2表現のRepository整合差分へ縮小されたFormation
- PO-04：reason系の旧一体Candidateが異なるLayerの独立Gap群へ分解されたFormation

本節は、それらの個別Formationより上位で、Original Mainline、Branch、横断Formation、Resolution / Separation、Original MainlineへのReturnというGD-001全体のNavigationを接続する。

### Current Fact / Formation Knowledge Boundary

Original 10-Issue、Issue 10から開始予定だったOriginal Mainline、Cross-Issue InteractionによるBranch、Formation Path、Original IssueへのResolution Connection、Remaining Mainline、Return Pointは、Formation Input由来のFormation因果として保持する。

これらをRepository Current Factや新しいCurrent SoTへ昇格させない。

Current Responsibility、Current System Definition、Current Module Definition、Current Data Definitionは、引き続きCurrent Repository SoTを優先する。

## PO-01 Formation Knowledge

### Problem Structure

`projects/iekau/products/property_reader/data_connection.md`には、`current_state`およびstateを保存・更新する現行責務として読める表現が残存していた。対象にはstateデータ、LINE保存対象、state更新、統合Inputの`current_state`、MVPおよび将来拡張のstate更新表現が含まれていた。

### Conflict Boundary

この表現は、`current_state`を正式Conceptまたは保存Dataとして採用しないPO-01 Boundary、STATEを保存せずdecisionから動的に導出するCurrent System SoT、ならびにSTATEと`decision_state`を別Conceptとして維持するCurrent System SoTとの不整合として扱う。これらの関係を新たに形成するものではない。

### Formation Resolution

`current_state`の意味や代替先を形成せず、property_readerの現行Data Connection責務としてstate保存・更新を維持する表現を減算的に整理した。これは状態Conceptを別Conceptへ置換するものではなく、不整合表現を現行責務から除外するFormationである。

### Non-Decision / Remaining Gap

以下は今回決定せず、Repository整合から切り離されたRemaining Gapとして保持する。

- `current_state`の意味および置換先
- 新たなData Concept
- STATEと`decision_state`の対応関係
- 状態の保存、再導出、表示の責務
- Persistence Responsibility
- LINE Responsibility

これらはstate保存・更新表現の減算的整理によって解消済みとは扱わない。

### Repository Interpretation Change

今後、`data_connection.md`内の「状態」「現在状態」等の一般表現を、削除済みの`current_state`またはstate保存・更新責務へ自動的に対応付けない。対象Documentの現在責務は、都度Current System Boundaryを根拠として確認する。

### PO-01 Traceability

- 問題構造の現行Repository整合先：`projects/iekau/products/property_reader/data_connection.md`
- Current System SoT：`brain/system/state_definition.md`
- Formation Knowledgeの位置付け：PO-01 Product Owner DecisionとCurrent System SoTの間で、何を減算的に整理し、何を未決定として切り離したかを後続判断へ再接続する。

## PO-02 Formation Knowledge

### Problem Structure

property_readerの`scoring_logic.md`には、肯定形の`decision生成`および`decision生成入口`が残存していた。この孤立表現は、Moduleが本人decisionを生成しないCurrent Boundaryと表現上不整合だった。

### Candidate Reduced

当初のCandidateは「decision生成という表現の責務境界」だった。Current SoTを再確認した結果、ユーザー本人がdecision主体であり、Module・AI・recommendationは生成せず、property_readerは本人decision形成への接続・起点・支援を担うBoundaryが既に成立していた。

そのため、大きなdecision責務の再Formationは不要となり、Candidateは`scoring_logic.md`の2表現のみのRepository整合差分へ縮小された。

### Conflict / Current Boundary

不整合対象は、以下の既存Boundaryである。

- decision主体はユーザー本人
- Module、AI、recommendationは本人decisionを生成・代替しない
- Moduleは本人decision形成を支援する
- property_readerは本人decision形成への接続・起点・支援を担う
- decision_OSは整理・解釈・更新支援・continuity接続を担い、decision生成主体ではない

### Formation Resolution

新しいdecision Responsibilityを形成せず、対象2表現を既存Boundaryへ整合した。

- `decision生成へ接続する` → `本人decision形成へ接続する`
- `decision生成入口` → `本人decision形成への起点`

これは、property_readerが本人decisionを生成する責務を採用するのではなく、既存の本人decision形成への接続・支援責務をRepository表現へ反映する整理である。

### Non-Decision / Separate Gap

以下はPO-02で決定・解消せず、Separate Gapとして切り離して保持する。

- decision DataのPersistence Responsibility Owner
- Technical Persistenceの詳細責務
- decision更新表現全体
- 各decision更新の具体的な操作・永続化主体
- Persistenceとdecision形成支援の全体関係
- 新しいdecision Concept
- property_readerまたはdecision_OSの新規・変更Responsibility

これらはPO-02の未完了理由ではない。

### Repository Interpretation Change

今後、property_reader内の`decision生成`のような旧・孤立表現を、ユーザー主体／Module支援のCurrent Boundaryより優先するResponsibilityとして採用しない。同時に、上位Boundaryがあることだけを理由に、明示的な肯定形不整合表現を放置可能とも扱わず、Repository表現整合の差分として切り分ける。

### PO-02 Traceability

- 対象Repository：`projects/iekau/products/property_reader/scoring_logic.md`
- Current System SoT：`brain/system/decision_framework.md`
- 関連Boundary：ユーザー本人のdecision主体、Module・AI・recommendationの非生成、property_readerの本人decision形成への接続・起点・支援
- Formation Knowledgeの位置付け：Candidateを過去の表現だけで広範な責務問題へ再拡大せず、Current Boundary Revalidationにより限定された差分として扱う。

## PO-04 Formation Knowledge

### Problem Structure

旧PO-04は、reason系Concept / Data Boundaryを一体の縮小Candidateとして扱っていた。Current Repository Revalidationにより、この括りには成立済みConcept・成立済みData・未定義Connection・将来項目・未定義Rule・表現整合候補が混在しており、一体のProduct Owner Decision Subjectとして維持できないことが確認された。

### Candidate Reduced / Decomposition

旧Candidateは、少なくとも以下の異なるLayerへ分解して扱う。

- System Concept
- Decision Data
- Data間Connection
- Future Data Candidate
- Update / Sync Rule
- Repository Responsibility Expression

これは新しい分類体系や新規Responsibilityではない。旧PO-04 Candidateを必要以上に一体化しないための、確認済みRevalidation結果の保持である。

### Established Boundary / Current Fact Separation

以下はFormation Knowledgeの根拠となる成立済みCurrent Factとして参照し、DFK内で新たなCurrent SoTとして再定義しない。

- `reason`のSystem Concept Boundaryは成立している
- `reasons`はDecision Data最小構造に存在し、「判断理由（複数選択可）」として記載される
- `reason_material`はloan_safety / loan_context側の判断材料であり、結論ではない
- `reason_code`はCurrent Dataではなく将来項目である
- ModuleのCurrent Responsibilityとして、本人reasonの代行生成ではなく、形成支援・整理・判断材料提示が確認される

一方、`reason`と`reasons`の正式Boundary、各Data間の接続、同期、表現の個別主体は未確定として分離する。

### Non-Decision / Separate Gap

以下は今回決定・解決せず、PO-04へ再統合しない。

- `reason` / `reasons`のData Boundary
- `reason_material`の接続・変換・保存Boundary
- `reason_code`の将来採用・使用・保存責務
- `reason` / `reasons`と`decision_result`の同期Rule
- `reason生成`表現における個別の主体・対象・粒度

Separate Gapの存在は、旧PO-04 Candidateを継続・再Openする根拠にも、PO-04 Formation Knowledge Updateの未完了理由にも扱わない。

### Repository Formation Follow-up Boundary

`reason生成`および`reason生成装置`には、Current上位Boundaryとの表現上の緊張がある。ただし、生成主体、生成対象、reasonの粒度、置換先はRepository Evidenceから一意に確定できない。したがって、PO-01 / PO-02のような限定的Repository Formation Follow-upへ直行しない。

修正文言、置換先、個別表現の責務は形成しない。

### Repository Interpretation Change

後続判断では、旧PO-04の「reason系」という括りだけを理由に、成立済みSystem Concept・成立済みDecision Data・未定義Connection・Future Data Candidate・未定義Update / Sync Rule・Repository Responsibility Expressionを一つのDecision Subjectへ再統合・再拡大しない。

これは各Gapを解決済みと扱うものではなく、異なるLayerの問題を旧Candidate名だけで混同しないための読解Boundaryである。

### PO-04 Traceability

以下はCurrent SoTをDFKへ複製するためではなく、旧PO-04の分解・未統合Boundaryを後続判断で確認するためのTraceabilityとして参照する。

- `brain/system/decision_reason_design.md`
- `projects/iekau/products/decision_os/data_connection.md`
- `projects/iekau/products/loan_safety/data_connection.md`
- `brain/system/user_data_strategy.md`
- `projects/iekau/products/property_reader/comparison_flow.md`
- `projects/iekau/products/property_reader/screen_structure.md`

## Boundary

本書は、Schema、API、Persistence、Implementation、Identity運用、更新Trigger、Owner、Lifecycle、詳細Loading Ruleを定めない。また、GD-001以外の案件Knowledgeを形成しない。
