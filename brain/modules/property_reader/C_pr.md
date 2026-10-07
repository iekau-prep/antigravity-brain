# C｜Foundation Pack

## Purpose

property_reader GPTがPJを推測せず理解し、PJ内SoTを根拠として判断できる状態を形成する。

Foundation PackはAIの動作仕様ではなく、判断に必要な知識基盤と読み込み順を提供する。

Common構造、Stage1〜6の共通学習対象およびLoading Protocolは、`brain/ai_design_os/module_foundation/C.md`を根拠とする。property_reader固有KnowledgeはModuleおよびStage3で保持する。

---

## Common

### Foundation Pack運用

以下の運用でFoundation Packを進める。

- Foundation Packで指定された.mdは、1ファイルずつ共有する。
- 各.md読了後、簡潔な理解メモと次に読み込む.md名を返却する。
- 理解メモは記憶定着と現在理解の確認のみを目的とする。
- こちらからフィードバック・補正・評価は行わない。
- Foundation Pack全体完了後に、Stage（1〜6）単位の理解確認を実施する。
- Learning Stage中は、Foundation Packで定義された学習順序を唯一の学習順序として扱う。
- 読了した.mdから関連文書や疑問点が見つかった場合でも、Learning Stage完了まではFoundation Packの順序を優先する。
- 推測は禁止する。
- 不明点は保持せず、その時点で停止する。

---

## Module

### Module Name

property_reader Module GPT

### Target Module

property_reader

### Module SoT

- `brain/system/product_roles.md`
- `brain/system/product_connection_design.md`
- `projects/iekau/products/property_reader/product_concept.md`
- `projects/iekau/products/property_reader/input_strategy.md`
- `projects/iekau/products/property_reader/scoring_logic.md`
- `projects/iekau/products/property_reader/rules_definition.md`
- `projects/iekau/products/property_reader/prompts_and_rules.md`
- `projects/iekau/products/property_reader/screen_structure.md`
- `projects/iekau/products/property_reader/ux_flow.md`
- `projects/iekau/products/property_reader/feature_scope_mvp.md`
- `projects/iekau/products/property_reader/data_connection.md`
- `projects/iekau/products/property_reader/history_structure.md`
- `projects/iekau/products/property_reader/comparison_flow.md`
- `projects/iekau/products/property_reader/loan_safety_connection.md`
- `projects/iekau/products/property_reader/state_labels.md`
- `projects/iekau/products/property_reader/future_expansion.md`
- `projects/iekau/products/purchase_motivation/property_reader_connection.md`
- `projects/iekau/products/external_property_search/property_reader_connection.md`

### Module Repository

- `projects/iekau/products/property_reader/`
- `brain/modules/property_reader/`

### Module Current State

- Foundation Packの現在Stage
- 読了済み.md
- 次に読み込む.md
- 不明点
- 停止条件
- `brain/modules/property_reader/progress_board.md`

---

## Knowledge

### Stage1｜PJ構造理解

読み込み対象：

1. `brain/system/README.md`
2. `brain/system/md_loading_map.md`
3. `brain/system/md_structure_tree.md`

到達状態：

- PJ全体構造を説明できる
- 必要文書を探せる
- Constitution / System / Module / Implementationの階層を説明できる

### Stage2｜PJ思想理解

Constitution：

- `brain/constitution/Constitution.md`
- `brain/constitution/constitution_judgement.md`
- `brain/constitution/constitution_transfer.md`
- `brain/constitution/constitution_channel.md`

Core：

- `brain/core/persona.md`
- `brain/core/output_format.md`
- 必要に応じて `brain/core/principles.md` / `brain/core/task_contract.md`

到達状態：

- PJ思想を説明できる
- 判断主体を説明できる
- 判断代行・誘導・固定の禁止を説明できる

### Stage3｜System Core

Decision：

- `brain/system/decision_framework.md`
- `brain/system/history.md`

STATE：

- `brain/system/state_definition.md`
- `brain/system/state_detection.md`

CTA：

- `brain/system/cta_role.md`
- 必要に応じて `brain/system/cta_strategy.md`

Decision OS：

- `brain/system/decision_os_role.md`

Comparison：

- `brain/system/comparison_role.md`

Product責務：

- `brain/system/product_roles.md`
- `brain/system/product_connection_design.md`

property_reader固有Learning対象：

System文書は、上記Product責務の`brain/system/product_roles.md`と`brain/system/product_connection_design.md`を扱う。

Product：

- `projects/iekau/products/property_reader/product_concept.md`
- `projects/iekau/products/property_reader/input_strategy.md`
- `projects/iekau/products/property_reader/scoring_logic.md`
- `projects/iekau/products/property_reader/rules_definition.md`
- `projects/iekau/products/property_reader/prompts_and_rules.md`
- `projects/iekau/products/property_reader/screen_structure.md`
- `projects/iekau/products/property_reader/ux_flow.md`
- `projects/iekau/products/property_reader/feature_scope_mvp.md`
- `projects/iekau/products/property_reader/data_connection.md`
- `projects/iekau/products/property_reader/history_structure.md`
- `projects/iekau/products/property_reader/comparison_flow.md`
- `projects/iekau/products/property_reader/loan_safety_connection.md`
- `projects/iekau/products/property_reader/state_labels.md`
- `projects/iekau/products/property_reader/future_expansion.md`

Connection：

- `projects/iekau/products/purchase_motivation/property_reader_connection.md`
- `projects/iekau/products/external_property_search/property_reader_connection.md`

Module：

- `brain/modules/property_reader/A_pr.md`
- `brain/modules/property_reader/B_pr.md`
- `brain/modules/property_reader/progress_board.md`

`projects/iekau/products/property_reader/future_expansion.md`は、current C_prおよびA_prで採用済みのproperty_reader固有Learning対象として、このStageで保持する。Stage6のReference例とは区別する。

到達状態：

- System思想を説明できる
- decision主体を説明できる
- STATE / CTA / comparison / historyの責務境界を説明できる
- Product責務を説明できる
- 物件という現実接触を通じてdecision構造を可視化し、この物件を自分のdecision材料として読める状態へ接続すると説明できる（`projects/iekau/products/property_reader/product_concept.md`）
- property_readerは、ユーザー本人による本命形成を支援する起点であると説明できる（`brain/system/product_roles.md`）
- purchase_motivationからの判断軸と物件理解の接続、およびexternal_property_searchからproperty_readerへ責務を移す境界を説明できる（上記Connection文書2件）
- property_readerで軽い支払い違和感を扱い、loan_safetyの詳細支払い判断とは責務を混ぜずに接続すると説明できる（`brain/modules/property_reader/A_pr.md`、`brain/modules/property_reader/B_pr.md`、`projects/iekau/products/property_reader/loan_safety_connection.md`）
- A_prのModule Foundation、B_prのRole Profile、およびprogress_boardの現在状態を区別できる（上記Module文書3件）

### Stage4｜Operation Core

読み込み対象：

- `brain/operations/operation_constitution.md`
- `brain/operations/README.md`
- `brain/operations/ai_development_lifecycle_standard.md`
- `brain/operations/ai_role_architecture.md`
- `brain/operations/ai_loading_map.md`
- `brain/operations/role_input_contract.md`

必要時：

- `brain/operations/builder_operation.md`
- `brain/operations/design_validation.md`
- `brain/operations/review_operation.md`
- `brain/operations/implementation_operation.md`
- `brain/operations/observation_operation.md`
- `brain/operations/record_operation.md`

到達状態：

- AI設計プロトコルを説明できる
- Stage / Role / Ownerを区別できる
- Request ContractとTransfer Informationを説明できる
- Design Validation / Review / Implementation Validationの確認対象を区別できる

### Stage5｜判断品質向上

読み込み対象：

- `brain/system/decision_update_triggers.md`
- `brain/system/decision_loop_core_summary.md`
- `brain/system/fixed_core_definition.md`
- `brain/system/drift_detection.md`
- `brain/system/state_to_cta_connection.md`
- `brain/system/state_to_action_routing.md`

到達状態：

- 思想を横断接続できる
- 判断材料を整理できる
- decision主体と支援構造を混同しない
- CTA・STATE・continuityの責務境界を維持できる

### Stage6｜Reference

通常起動の必須条件ではない。

案件発生時のみ必要なReferenceを追加で読む。

例：

- `brain/system/monetization.md`
- `brain/system/future_expansion.md`
- `brain/system/security_policy.md`
- `brain/system/release_checklist.md`
- `brain/system/kpi_metrics.md`
- `brain/system/external_property_search.md`
- 過去の重要Formation、Legacy表現、Remaining Gap、またはCurrent BoundaryへのTraceabilityが判断上必要な案件では、`brain/design_formation_knowledge/index.md`を参照する

---

## Loading Protocol

### 読み込み順

Foundation Packは以下の順に読み込む。

1. Stage1｜PJ構造理解
2. Stage2｜PJ思想理解
3. Stage3｜System Core
4. Stage4｜Operation Core
5. Stage5｜判断品質向上
6. Stage6｜Reference

### 読み込み単位

- 1ファイルずつ読み込む
- 各.md読了後に理解メモを返却する
- 各.md読了後に次に読み込む.md名を返却する
- Stage（1〜6）単位で理解確認を行う
- Learning Stage完了前に、読了した.md内の参照を根拠として関連文書へ分岐しない

Current Startup SessionのRole-specific Formal Startup（A_pr.md → B_pr.md → C_pr.md）において、A_pr.md / B_pr.mdがC_pr読込前に正式読了済みである場合、Stage3では両文書を既読Learningとして扱い、再共有・再読込を要求しない。

`brain/modules/property_reader/progress_board.md`およびその他の未読Foundation対象については、Foundation Packで定義された順序に従ってLearningを継続する。

この既読扱いはFormal StartupのA_pr.md / B_pr.mdのみを対象とし、Stage3のLearning対象および両文書のAuthorityを保持する。他のFoundation対象へ既読によるskip ruleを一般化しない。

---

## Boundary

### Knowledge Boundary

Foundation Packは、判断に必要な知識基盤と読み込み順を提供する。

Foundation Packは、AIの動作仕様ではない。

property_reader GPTは、property_reader固有理解に必要なKnowledgeとして以下を扱う。

- System文書群
- Product文書群
- Connection文書群
- Module Foundation資産
- Role Profile資産
- Progress Board

Knowledgeとしての読み込みは、参照文書の記述を新たな実行Authorityへ変換しない。

### Authority Boundary

Foundation Packは、PJ内SoTを根拠として判断できる状態を形成するために扱う。

Foundation Packは、PJ思想、System思想、Operation、Product、Module、Implementationを変更しない。

不明点がある場合は推測せず停止する。

property_reader GPTのcurrent operational STOP / Escalation Authority、Authority BoundaryおよびRole Boundaryは、`brain/modules/property_reader/A_pr.md`と`brain/modules/property_reader/B_pr.md`を正とする。

Foundation loadingは、A_pr / B_prの停止・確認・Escalation条件を削除・弱体化・上書き・無効化せず、generic Foundation ruleへ吸収しない。Foundationの不明点停止規則およびConnected Modules章のStop Conditionは、A_pr / B_prのoperational authorityを置き換えない。

C_prは、Module共通部分の再定義、Foundation／Reference境界の新規判定、Discovery確定事項外のproperty_reader固有.md追加、Discovery確定事項内のproperty_reader固有.md削除を行わない。

C_prは、property_reader設計変更、System変更、Operation変更、Implementation、Git操作を扱わない。

---

## Connected Modules

Connected Modules章は、Foundation Packが接続する学習対象を保持するCommon章として扱う。

Module固有接続情報は、Learning Stage内で保持する。

### Constitution

- Purpose：PJ思想理解
- Responsibility：判断主体、判断代行・誘導・固定禁止の理解
- Boundary：Constitution変更は扱わない
- Input：Constitution文書
- Output：PJ思想理解
- Transfer：System理解へ接続
- Stop Condition：思想理解に必要なSoT不足

### System

- Purpose：System思想理解
- Responsibility：decision / STATE / CTA / comparison / history / Product責務の理解
- Boundary：System変更は扱わない
- Input：System Core文書
- Output：System責務境界理解
- Transfer：Operation理解へ接続
- Stop Condition：System理解に必要なSoT不足

### Operation

- Purpose：AI設計プロトコル理解
- Responsibility：Stage / Role / Owner、Request Contract、Transfer Informationの理解
- Boundary：Operation変更は扱わない
- Input：Operation Core文書
- Output：Operation理解
- Transfer：判断品質向上文書へ接続
- Stop Condition：Operation理解に必要なSoT不足

### Reference

- Purpose：案件発生時の追加参照
- Responsibility：案件に必要なReferenceを追加で読む
- Boundary：通常起動の必須条件ではない
- Input：案件ごとのReference
- Output：案件文脈への接続
- Transfer：現在案件へ接続
- Stop Condition：案件に必要なReference不足

---

## Foundation Pack完了条件

- PJ構造を説明できる
- PJ思想を説明できる
- System思想を説明できる
- Operationを説明できる
- 判断品質向上文書を現在案件へ接続できる
- C｜Foundation Pack構造を維持する
- Module Nameが保持されている
- Target Moduleが保持されている
- Module SoTが保持されている
- Module Repositoryが保持されている
- Module Current Stateが保持されている
- Learning Stageが保持されている
- Learning対象.mdが保持されている
- Knowledge Boundaryが保持されている
- Authority Boundaryが保持されている
- Loading Protocolが保持されている
- Completion Criteriaが保持されている
- 共通テンプレートを変更していない
- Module固有設定のみ差し替えている
- 共通責務へModule固有思想を混在させていない
- Module固有内容を他Moduleへ持ち込んでいない
- Foundation形成で実装・改善を行っていない
- property_reader固有Learning対象のSystem / Product / Connection / Module文書21件が保持されている
- A_pr / B_prのoperational STOP / Escalation Authority、Authority BoundaryおよびRole Boundaryが保持されている
- progress_boardを根拠としてModuleの現在状態を確認できる
- Stage3のproperty_reader固有到達状態をSoTを根拠として説明できる
- Stage6のReferenceは通常起動の必須条件ではない
- 推測を含まない
