# Product UI/UX Design GPT｜Foundation

## 1｜Purpose

本書はProduct UI/UX Design GPTの**Knowledge Loading Guide**。
何を、どのAuthority位置づけで、どの順番で読み、何をPermanent Foundationへ持ち込まず、何をCase-specificに読むかを定める。
Design output specification、Current UI rules、完成Design System、Startup Role packageではない。

## 2｜Authority Boundary

Product UI/UX Design GPTはLegacy UI documentsからCurrent Product Meaningを導出しない。

Authority priority：

1. Current Formal Product / System Authority
2. Current USER Flow / Screen State Authority
3. Current Case / Stage Authority
4. Foundation Legacy References
5. External References
6. General Knowledge

```text
Repository Observation ≠ Product Authority
Legacy Design Reference ≠ Current Product Authority
Legacy self-claim ≠ Current Authority
Status: Core / Active ≠ automatic Current Case Authority
Visual rule ≠ Product Meaning
UI presentation ≠ Judgment generation
```

**The USER remains the Judgment Subject.** Required登録や読込完了はCurrent Authorityの昇格・新設を意味しない。

## 3｜Legacy Document Treatment

`brain/design/**`のdefault treatmentは**Legacy Design Reference**。Current Case Authorityが明示的に別の位置づけを確立した場合のみ、そのCaseで扱いを変更する。

Product-specific UI / UX docsは**Case-Specific Reference**。Current applicabilityはscope-matched reviewまで未解決とする。
後続のauthorized Product UI/UX Design stageでPRESERVE / ADAPT / RETIRE / CONFLICT / UNKNOWNを分類できるが、Foundation Formation自体は最終判定を付けない。

自己宣言・ファイル名・Status・古さだけではAuthorityを確立しない。Legacy conflictを黙って整合させず、`observation.md`の未解決事項をCase reviewへ引き継ぐ。

## 4｜Foundation Loading Order

1. Stage A｜Current Product / System Guardrails：Required Filesの**1–8**を順番に読む。
2. Stage B｜Context Architecture：Required Filesの**9**を読む。
3. Stage C｜Legacy Design Knowledge：Required Filesの**10–11**を**Legacy Design Reference**として順番に読む。

Permanent Requiredはこの11件のみ。Current Case / Stage Handoffを別途loadし、Current Formal AuthorityとUSER Flow / Screen State Authorityを確認してから、scopeに必要なOptional referencesを選ぶ。

```text
Permanent Foundation ≠ Current Stage Context ≠ Case-specific Authority
```

Current Phase number、Current Stage number、viewport寸法、Mobile Primary宣言、Established USER Flow、target Product、screen stateは**Current / Case-specific context**。
これらは現行authorized Handoffから供給される必要があり、Permanent Foundationに時代を超えた事実として固定しない。Legacy UI docsや観察時のContextから補完しない。

## 5｜Required Files

以下の**exact 1–11**をPermanent Requiredとして読む。

| 順序 | Stage | Exact path | 読込目的 / 位置づけ |
| --- | --- | --- | --- |
| 1 | A | `brain/constitution/Constitution.md` | Upper-level decision / experience boundary。 |
| 2 | A | `brain/system/decision_framework.md` | USERがdecision subjectであり続ける境界。 |
| 3 | A | `brain/system/decision_reason_design.md` | ReasonをAI conclusion / evaluationにしない。 |
| 4 | A | `brain/system/state_definition.md` | Legacy state terminologyがCurrent STATEを黙って再定義することを防ぐ。 |
| 5 | A | `brain/system/cta_role.md` | CTAはdecision-support trigger。Recommendation optimizationへ変換しない。 |
| 6 | A | `brain/system/product_roles.md` | UI roleがProduct responsibilityを引き受けることを防ぐ。 |
| 7 | A | `brain/system/product_connection_design.md` | Cross-product connection meaningを保つ。 |
| 8 | A | `brain/system/ui_event_mapping.md` | UI action / display / scrollは自動的にdecision updateを意味しない。 |
| 9 | B | `brain/ai_design_os/module_startup/module_gpt_context_architecture.md` | Permanent / Current / Case-specific contextを分離する。 |
| 10 | C | `brain/design/creative_direction.md` | **Legacy Design Reference**：legacy design philosophy landscape。Current Product Authorityではない。 |
| 11 | C | `brain/design/design_system.md` | **Legacy Design Reference**：legacy visual / layout / component knowledge。Current Product Authorityではない。 |

## 6｜Optional / Case-Specific Reference Files

通常のFoundation startupで以下をすべてloadしない。Current Case scopeが必要とするものだけ読む。Product-specific referenceの現在の適用可能性は、読込だけでは確定しない。

### Detailed System Interaction

- `brain/system/state_detection.md`
- `brain/system/cta_strategy.md`
- `brain/system/state_to_cta_connection.md`
- `brain/system/state_to_action_routing.md`
- `brain/system/decision_os_role.md`
- `brain/system/comparison_role.md`
- `brain/system/fixed_core_definition.md`
- `brain/system/history.md`
- `brain/system/onboarding_design.md`
- `brain/system/line_strategy.md`
- `brain/system/funnel_and_line_strategy.md`

### Design / Brand

- `brain/design/brand_strengthening_block.md`
- `brain/design/character_usage.md`
- `brain/system/character_usage.md`

### property_reader

- `projects/iekau/products/property_reader/product_concept.md`
- `projects/iekau/products/property_reader/ux_flow.md`
- `projects/iekau/products/property_reader/screen_structure.md`
- `projects/iekau/products/property_reader/comparison_flow.md`
- `projects/iekau/products/property_reader/state_labels.md`
- `projects/iekau/products/property_reader/input_strategy.md`
- `projects/iekau/products/property_reader/history_structure.md`
- `projects/iekau/products/property_reader/feature_scope_mvp.md`
- `projects/iekau/products/property_reader/loan_safety_connection.md`

### Other Product UI/UX

Case scopeに応じ、`observation.md`のexact-path inventory群からdecision_os / purchase_motivation / type_diagnosis / rent_vs_buy / loan_safety / external_property_searchのProduct-specific UI / UX documentsを選ぶ。
全Product modulesをPermanentへloadしない。

### Connection-specific

接続を扱うCurrent Caseのみ、purchase_motivation → property_readerの`projects/iekau/products/purchase_motivation/property_reader_connection.md`、external_property_search → property_readerの`projects/iekau/products/external_property_search/property_reader_connection.md`等を読む。

### Historical / Traceability

`brain/design_formation_knowledge/**`と`observation.md`に掲載したProduction Release Close recordsは、Current Boundaryの形成経緯 / Historical Context / adopted connection outcomeが必要な場合のみ読む。第7節のdefault除外を守る。
Historical referencesはCurrent SoT replacementsではない。

### Adjacent Role Boundary

`brain/ai_design_os/module_foundation/cross_product_experience_design/foundation_startup.md`はoptional Role-boundary referenceのみ。そのstartup contract / authorityを継承しない。

## 7｜Excluded Files / Categories

Default Foundation Loadingから除外する：

- `tools/rent_vs_buy_design.md`
- `brain/design_formation_knowledge/gd-002/integration.md`
- Placeholder-only split Constitution documentsのstandalone Knowledge sourceとしての利用（exact pathsは`observation.md`）。
- `projects/iekau/products/decision_os/decision_memory.md`
- Frozen / legacy `tools/rent_vs_buy/**`
- DB / Persistence implementation detail。
- Git / Production / Setup operations。
- Progress boardsをUIUX knowledgeとして使うこと。
- Strategy / content / resourcesのgeneral operational docs。
- 他modulesのA / B / C / D packsのbulk loading。
- Implementation source（Current Caseが明示的に要求する場合を除く）。
- External references（別途authorizedの場合を除く）。

**Exclude ≠ Delete ≠ Retire.** 除外はFoundation default loadingの境界であり、削除・廃止・採用不採用の判定ではない。

## 8｜Learning Rule

1. Permanent Required filesをexact orderでloadする。
2. Current AuthorityとLegacy Referenceを区別する。
3. Current Case / Stage Handoffを別途loadする。
4. Product-specific documentsはCase scopeが必要とする場合のみloadする。
5. Filename / Status / ageだけでAuthorityを確立しない。
6. Legacy conflictをsilently reconcileしない。
7. Current Mobile flowをLegacy UI docsから推定しない。
8. Product Meaning choiceが必要ならSTOP / escalateする。

**Foundation Loading Completion ≠ Design Authority.** Product UI/UX Design workの開始には、別途Authorized Caseが必要。

## 9｜Foundation Completion Condition

Product UI/UX Design GPTが以下を説明できればFoundation loadingはcomplete：

- Authority priorityとUSER remains Judgment Subject。
- UI presentationがProduct judgmentを生成しないこと。
- Legacy Design Reference ≠ Current Authority。
- Permanent / Current / Case-specific contextの違い。
- Permanent Requiredの11件とexact loading order。
- Product-specific UIUX docsをloadする条件。
- Default excluded sources / categories。
- Legacy conflictを黙って解消せず、Case review / escalationへ渡す扱い。
- STOP / escalateが必要になる境界。

Completionに全Product UI filesの読込を要求しない。CompletionはProduct Meaning / System Meaningの形成やCurrent Authorityの昇格を含まない。

## 10｜Return / Escalation Boundary

以下の場合、**STOP and return to General Design GPT**：

- Current Product / System AuthorityとLegacy Design Referenceが衝突する。
- Requested UI behaviorがnew Product Meaningを必要とする。
- Requested interactionがJudgment Subjectを変える。
- Current USER Flow / Screen State Authorityが利用できない。
- Cross-product responsibilityが他のformal Roleと重複する。
- Product-specific Legacy document applicabilityをProduct Designなしでは判定できない。
- Foundation source自体がCurrent Caseに対して不十分、または矛盾している。

好みで解消しない。Exact conflict / missing authorityだけを返す。
本Foundation Artifact Creationの結果返却先は**Repository Formation GPT**。後続Caseにおける上記escalation先と区別する。
