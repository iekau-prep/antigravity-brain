# Product UI/UX Design GPT｜Design / UIUX Repository Observation

## A｜Observation Status

- Observation：**COMPLETE**。Repository Formation GPTの完了済みRepository Observation Resultを記録する。
- Observed repository：`/Users/hiroyukiishizawa/iekau-pj/antigravity-brain`
- Observed branch：`main`
- Observed HEAD：`919522851d436bf291d9935defe95e464b07d875`
- Observationはread-only。Source mutation：**NONE**。
- Artifact作成前のfresh preflightは上記identityと一致し、working tree / index / untrackedはclean。
- 本Artifactは観察結果の圧縮記録であり、Product Authority / UIUX Authority / Legacy採用判断ではない。

## B｜Observation Scope

- 引き継がれた観察範囲：Repository-wide `.md` discovery。design / UI / UX / visual / component / mobile / interaction等。
- 観察件数：markdown **264**、keyword candidate **203**、source-read relevant inventory **85**。
- 件数・内容上の所見は完了済み観察の引き継ぎ値。今回85件の再観察は行わず、掲載exact pathの存在のみ確認した。
- Implementation source：not required。External research：**NONE**。

## C｜Authority Boundary

```text
Repository Observation ≠ Product Authority
Legacy Design Reference ≠ Current Product Authority
```

Authority priority：

1. Current Formal Product / System Authority
2. Current USER Flow / Screen State Authority
3. Current Case / Stage Authority
4. Foundation Legacy References
5. External References
6. General Knowledge

観察・Required登録・ファイル名・StatusはAuthorityを昇格させない。USER remains the Judgment Subject。

## D｜Core Repository Landscape

以下は85-row reportの再掲ではなく、役割別のexact-path群。各群の掲載は採用判断を意味しない。

### Core Design

- Legacy philosophy / visual：`brain/design/creative_direction.md`、`brain/design/design_system.md`
- Brand / character：`brain/design/brand_strengthening_block.md`、`brain/design/character_usage.md`

### System UI/UX Boundary

- Upper boundary：`brain/constitution/Constitution.md`
- Judgment / reason / STATE：`brain/system/decision_framework.md`、`brain/system/decision_reason_design.md`、`brain/system/state_definition.md`
- CTA / responsibility / connection / event：`brain/system/cta_role.md`、`brain/system/product_roles.md`、`brain/system/product_connection_design.md`、`brain/system/ui_event_mapping.md`
- Detection / CTA routing：`brain/system/state_detection.md`、`brain/system/cta_strategy.md`、`brain/system/state_to_cta_connection.md`、`brain/system/state_to_action_routing.md`
- Detailed responsibility / continuity：`brain/system/decision_os_role.md`、`brain/system/comparison_role.md`、`brain/system/fixed_core_definition.md`、`brain/system/history.md`
- Entry / channel / character：`brain/system/onboarding_design.md`、`brain/system/line_strategy.md`、`brain/system/funnel_and_line_strategy.md`、`brain/system/character_usage.md`

### Product-specific UI/UX

- property_reader meaning / flow：`projects/iekau/products/property_reader/product_concept.md`、`projects/iekau/products/property_reader/ux_flow.md`、`projects/iekau/products/property_reader/screen_structure.md`
- property_reader comparison / input：`projects/iekau/products/property_reader/comparison_flow.md`、`projects/iekau/products/property_reader/state_labels.md`、`projects/iekau/products/property_reader/input_strategy.md`
- property_reader continuity / scope / connection：`projects/iekau/products/property_reader/history_structure.md`、`projects/iekau/products/property_reader/feature_scope_mvp.md`、`projects/iekau/products/property_reader/loan_safety_connection.md`
- decision_os：`projects/iekau/products/decision_os/product_concept.md`、`projects/iekau/products/decision_os/ux_flow.md`、`projects/iekau/products/decision_os/screen_structure.md`、`projects/iekau/products/decision_os/feature_scope_mvp.md`
- purchase_motivation：`projects/iekau/products/purchase_motivation/product_concept.md`、`projects/iekau/products/purchase_motivation/ui_flow.md`、`projects/iekau/products/purchase_motivation/result_screen.md`、`projects/iekau/products/purchase_motivation/question_design.md`
- type_diagnosis：`projects/iekau/products/type_diagnosis/product_concept.md`、`projects/iekau/products/type_diagnosis/ui_result_flow.md`、`projects/iekau/products/type_diagnosis/cta_strategy.md`、`projects/iekau/products/type_diagnosis/state_labels.md`
- rent_vs_buy：`projects/iekau/products/rent_vs_buy/ui_result_flow.md`、`projects/iekau/products/rent_vs_buy/state_labels.md`、`projects/iekau/products/rent_vs_buy/character_templates.md`
- loan_safety：`projects/iekau/products/loan_safety/product_concept.md`、`projects/iekau/products/loan_safety/ui_result_flow.md`、`projects/iekau/products/loan_safety/state_labels.md`、`projects/iekau/products/loan_safety/character_templates.md`
- external_property_search：`projects/iekau/products/external_property_search/ui_flow.md`、`projects/iekau/products/external_property_search/screen_structure.md`
- Case接続：`projects/iekau/products/purchase_motivation/property_reader_connection.md`、`projects/iekau/products/external_property_search/property_reader_connection.md`
- Discomfort参照：`projects/iekau/products/purchase_motivation/discomfort_connection.md`。discomfort_engineの所在解決を意味しない。

### Role / Foundation Architecture

- Context architecture：`brain/ai_design_os/module_startup/module_gpt_context_architecture.md`
- Startup architecture：`brain/ai_design_os/module_startup/module_gpt_startup_protocol.md`
- Adjacent Role boundary：`brain/ai_design_os/module_foundation/cross_product_experience_design/foundation_startup.md`。Optionalのみ。startup contract / authorityを継承しない。

### DFK / Historical

- Traceability：`brain/design_formation_knowledge/README.md`、`brain/design_formation_knowledge/index.md`、`brain/design_formation_knowledge/gd-001/integration.md`
- Connection outcomes：`brain/modules/purchase_motivation/production_release_close.md`、`brain/modules/external_property_search/property_reader_connection_production_release_close.md`
- Other release close records：`brain/modules/type_diagnosis/production_release_close.md`、`brain/modules/type_diagnosis/property_reader_diagnosis_context_use_production_release_close.md`
- Continuity records：`brain/modules/property_reader/comparison_entry_connection_production_release_close.md`、`brain/modules/property_reader/saved_decision_continuity_historical_context_production_release_close.md`、`brain/modules/decision_os/mvp_decision_loop_completion_production_release_close.md`
- 上記は形成経緯 / Historical Context / adopted connection outcomeが必要なCaseのみ。Current SoTを置き換えない。

### Exclude

- Default除外：`tools/rent_vs_buy_design.md`、`brain/design_formation_knowledge/gd-002/integration.md`、`projects/iekau/products/decision_os/decision_memory.md`、frozen / legacy `tools/rent_vs_buy/**`
- Placeholder-only split Constitutionのstandalone利用：`brain/constitution/constitution_preamble.md`、`brain/constitution/constitution_judgement.md`、`brain/constitution/constitution_experience.md`、`brain/constitution/constitution_levels.md`、`brain/constitution/constitution_channel.md`、`brain/constitution/constitution_transfer.md`
- 他module packsのbulk loading：`brain/ai_design_os/module_foundation/A.md`、`brain/ai_design_os/module_foundation/B.md`、`brain/ai_design_os/module_foundation/C.md`、`brain/ai_design_os/module_foundation/D.md`
- Progress board例：`brain/ai_design_os/module_foundation/progress_board.md`、`brain/ai_design_os/module_foundation/foundation_progress.md`

## E｜Core Loading Candidate Register

### Permanent Required

Stage A｜Current Product / System Guardrails：

1. `brain/constitution/Constitution.md`
2. `brain/system/decision_framework.md`
3. `brain/system/decision_reason_design.md`
4. `brain/system/state_definition.md`
5. `brain/system/cta_role.md`
6. `brain/system/product_roles.md`
7. `brain/system/product_connection_design.md`
8. `brain/system/ui_event_mapping.md`

Stage B｜Context Architecture：

9. `brain/ai_design_os/module_startup/module_gpt_context_architecture.md`

Stage C｜Legacy Design Knowledge：

10. `brain/design/creative_direction.md` — **Legacy Design Reference**
11. `brain/design/design_system.md` — **Legacy Design Reference**

### Case-Specific Optional

DのDetailed System / Brand / Product-specific UIUX / 接続 / Historical群はCase scopeに応じて読む。Adjacent Roleはboundary参照のみ。全Product modulesをPermanentへ持ち込まない。

### Excluded by Default

DのExclude群に加え、DB / Persistence implementation detail、Git / Production / Setup operations、UIUX知識としてのprogress boards、strategy / content / resources一般運用文書、他modulesのA / B / C / D packs一括読込を除外する。
Implementation sourceはCurrent Caseが明示的に要求する場合のみ、external referencesは別途authorizedの場合のみ。Exclude ≠ Delete ≠ Retire。

## F｜Legacy / Conflict Findings

以下は引き継がれたmaterial unresolved findings。ここでは解消・PRESERVE / ADAPT / RETIRE / CONFLICT / UNKNOWNの最終判定を行わない。

- `brain/design/creative_direction.md`のhighest-priority自己宣言とConstitution / System hierarchyの差。
- 同文書の4-state expression ≠ `brain/system/state_definition.md`のSystem STATE taxonomy。
- purchase_motivationのold STATE / CTA remnants。
- `brain/system/fixed_core_definition.md`のpriority wording conflictsは後続Case reviewが必要。
- `brain/design/character_usage.md`と`brain/system/character_usage.md`のcharacter主従差。
- decision_osのold screen score / count examples。
- `projects/iekau/products/type_diagnosis/cta_strategy.md`のCTA scope差。
- rent_vs_buyのold calculator premise。
- discomfort_engine locationは未解決。参照から所在を推定しない。
- Cross-Product Roleのshared-map integrationはunknown。
- Placeholder split Constitution docsは独立したKnowledge sourceにしない。
- Missing referenced filenamesは未解決。handoffに個別名の記載はなく、推定・代替作成しない。Caseで必要ならexact missing referenceを返す。

## G｜Current Mobile Context Distinction

```text
Mobile Primary
390×844
SNS / LINE → Mobile
Current Established USER Flow
```

上記はCurrent Formation Contextとして供給されたが、exact corresponding Repository documentsは**NOT OBSERVED**。
Current Mobile / Screen-State Contextは**Current Case Authority**として現行authorized Handoffから別途loadする。Legacy documentsから推定しない。
この観察記録をPermanent Mobile / viewport / USER Flow規則に転用しない。

## H｜Observation Completion

- Repository Knowledge Landscape：**SUFFICIENT**
- Additional Narrow Observation：**NONE**
- Current Authority Promotion：**NONE**
- Product Meaning Formation：**NONE**
- System Meaning Formation：**NONE**
