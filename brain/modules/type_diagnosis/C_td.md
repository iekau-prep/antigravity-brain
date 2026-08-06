# C｜Foundation Pack

## Purpose

type_diagnosis GPTがPJを推測せず理解し、PJ内SoTを根拠として判断できる状態を形成する。

Foundation PackはAIの動作仕様ではなく、判断に必要な知識基盤と読み込み順を提供する。

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

type_diagnosis GPT

### Target Module

type_diagnosis

### Module SoT

- `brain/system/product_roles.md`
- `brain/system/product_connection_design.md`
- `projects/iekau/products/type_diagnosis/product_concept.md`
- `projects/iekau/products/type_diagnosis/rabbit_types.md`
- `projects/iekau/products/type_diagnosis/pairing_logic.md`
- `projects/iekau/products/type_diagnosis/cta_strategy.md`
- `projects/iekau/products/type_diagnosis/diagnosis_logic.md`
- `projects/iekau/products/type_diagnosis/ui_result_flow.md`
- `projects/iekau/products/type_diagnosis/state_labels.md`

### Module Repository

- `brain/system/product_roles.md`
- `brain/system/product_connection_design.md`
- `projects/iekau/products/type_diagnosis/`

### Module Current State

- Foundation Packの現在Stage
- 読了済み.md
- 次に読み込む.md
- 不明点
- 停止条件

---

## Knowledge

### Stage1｜PJ構造理解

読み込み対象：

1. brain/system/README
2. md_loading_map.md
3. md_structure_tree.md

到達状態：

- PJ全体構造を説明できる
- 必要文書を探せる
- Constitution / System / Module / Implementationの階層を説明できる

### Stage2｜PJ思想理解

Constitution：

- brain/constitution/Constitution.md
- brain/constitution/constitution_judgement.md
- brain/constitution/constitution_transfer.md
- brain/constitution/constitution_channel.md

Core：

- brain/core/persona.md
- brain/core/output_format.md
- 必要に応じて principles.md / task_contract.md

到達状態：

- PJ思想を説明できる
- 判断主体を説明できる
- 判断代行・誘導・固定の禁止を説明できる

### Stage3｜System Core

Decision：

- decision_framework.md
- history.md

STATE：

- state_definition.md
- state_detection.md

CTA：

- cta_role.md
- 必要に応じて cta_strategy.md

Decision OS：

- decision_os_role.md

Comparison：

- comparison_role.md

Product責務：

- product_roles.md
- product_connection_design.md

type_diagnosis固有Learning対象：

- `brain/system/product_roles.md`
- `brain/system/product_connection_design.md`
- `projects/iekau/products/type_diagnosis/product_concept.md`
- `projects/iekau/products/type_diagnosis/rabbit_types.md`
- `projects/iekau/products/type_diagnosis/pairing_logic.md`
- `projects/iekau/products/type_diagnosis/cta_strategy.md`
- `projects/iekau/products/type_diagnosis/diagnosis_logic.md`
- `projects/iekau/products/type_diagnosis/ui_result_flow.md`
- `projects/iekau/products/type_diagnosis/state_labels.md`

到達状態：

- System思想を説明できる
- decision主体を説明できる
- STATE / CTA / comparison / historyの責務境界を説明できる
- Product責務を説明できる
- type_diagnosisは「性格診断」ではなく「迷い方理解module」であると説明できる
- type_diagnosisは「住宅購入における意思決定のクセ」を可視化すると説明できる
- type_diagnosisは意思決定タイプ診断であると説明できる
- type_diagnosisは意思決定エンジンであると説明できる
- type_diagnosisは意欲の発生パターンを定義すると説明できる
- type_diagnosisは、すべての意思決定に補正をかける前提データとして機能すると説明できる
- type_diagnosisは、purchase_motivation / property_reader / loan_safety に影響すると説明できる
- 意欲は type_diagnosis × purchase_motivation × property_reader により発生すると説明できる
- type_diagnosisは「判断のクセを知ることで、迷いを減らし、前に進める」ものであると説明できる
- type_diagnosisは2×2×2の3軸で8タイプを扱うと説明できる
- 3軸は、感情型 / 論理型、速断型 / 慎重型、自分軸 / 他人軸であると説明できる
- 8タイプは、ヒラメキうさぎ、流されうさぎ、じっくりうさぎ、きにしすぎうさぎ、即断うさぎ、正解さがしうさぎ、比べすぎうさぎ、迷子うさぎであると説明できる
- rabbit_typesは、各タイプの違い、コピーやUI出力の基礎データ、診断後のアドバイス出し分けに使うと説明できる
- pairing_logicは、2人の意思決定タイプから関係性のズレを判定すると説明できる
- pairing_logicは相性診断ではなく、次にどう進めるかを決めるためのロジックであると説明できる
- pairing_logicの出力は、ズレタイプ名、説明、最初の一手、接続候補を持つと説明できる
- diagnosis_logicは、質問設計とタイプ判定ロジックを定義すると説明できる
- diagnosis_logicは、住宅購入における意思決定パターンを特定し、他プロダクトへ接続する基盤ロジックであると説明できる
- 診断結果は profile_context に保存されると説明できる
- 保存内容は user_type、decision_bias、行動傾向であると説明できる
- cta_strategyは、診断結果から自然に次の行動へつなげると説明できる
- CTAは複数同時表示せず、表示は必ず1つだけであると説明できる
- CTA接続先は purchase_motivation、loan_safety、property_reader、タイプ別ガイド / 記事 / 内部補足コンテンツであると説明できる
- ui_result_flowは、結果画面の表示構造とUIフローを定義すると説明できる
- ui_result_flowは、性格診断UI、MBTI模倣UI、エンタメ診断画面ではないと説明できる
- ui_result_flowは、自己理解をdecisionに接続すると説明できる
- state_labelsは、各状態ごとの表示文言を定義すると説明できる
- state_labelsは、UX全体の言葉を統一し、行動へ自然につなげると説明できる
- product_roles上、各Productはrecommendation、正解提示、AI最適化、決断代行を行わないと説明できる
- product_roles上、各Productは単独完結を目的にしないと説明できる
- product_roles上、各Productはdecision loopへ接続されることを前提とすると説明できる
- product_connection_design上、type_diagnosisは補助decision更新レイヤーとして存在すると説明できる
- product_connection_design上、接続目的は次のdecision更新精度を上げることであると説明できる
- product_connection_design上、CTAは次の機能誘導ではなく「今必要なdecision更新イベント」を提示すると説明できる
- LINEはdecision continuity layerとして扱うと説明できる

### Stage4｜Operation Core

読み込み対象：

- brain/operations/operation_constitution.md
- brain/operations/README.md
- brain/operations/ai_development_lifecycle_standard.md
- brain/operations/ai_role_architecture.md
- brain/operations/ai_loading_map.md
- brain/operations/role_input_contract.md

必要時：

- builder_operation.md
- design_validation.md
- review_operation.md
- implementation_operation.md
- observation_operation.md
- record_operation.md

到達状態：

- AI設計プロトコルを説明できる
- Stage / Role / Ownerを区別できる
- Request ContractとTransfer Informationを説明できる
- Design Validation / Review / Implementation Validationの確認対象を区別できる

### Stage5｜判断品質向上

読み込み対象：

- decision_update_triggers.md
- decision_loop_core_summary.md
- fixed_core_definition.md
- drift_detection.md
- state_to_cta_connection.md
- state_to_action_routing.md

到達状態：

- 思想を横断接続できる
- 判断材料を整理できる
- decision主体と支援構造を混同しない
- CTA・STATE・continuityの責務境界を維持できる

### Stage6｜Reference

通常起動の必須条件ではない。

案件発生時のみ必要なReferenceを追加で読む。

例：

- monetization.md
- future_expansion.md
- security_policy.md
- release_checklist.md
- kpi_metrics.md
- external_property_search.md

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

---

## Boundary

### Knowledge Boundary

Foundation Packは、判断に必要な知識基盤と読み込み順を提供する。

Foundation Packは、AIの動作仕様ではない。

type_diagnosis GPTは、以下を理解対象として扱う。

- type_diagnosis Product文書群
- type_diagnosis関連System SoT
- type_diagnosisのPurpose
- type_diagnosisのRole
- type_diagnosisが扱うもの
- type_diagnosisが扱わないもの
- type_diagnosisのSelf Recognitionに必要な定義
- type_diagnosisのInput
- type_diagnosisのOutput
- type_diagnosisのConnected Modules
- type_diagnosisのCompletion Criteria形成に必要な保持対象
- 住宅購入における意思決定パターン
- 判断の仕方
- 意欲の発生パターン
- decision傾向
- drift傾向
- 判断構造
- decision drift
- 2人の意思決定タイプから関係性のズレを判定するロジック
- CTA設計方針と出し分けロジック
- LINE接続

### Authority Boundary

Foundation Packは、PJ内SoTを根拠として判断できる状態を形成するために扱う。

Foundation Packは、PJ思想、System思想、Operation、Product、Module、Implementationを変更しない。

不明点がある場合は推測せず停止する。

type_diagnosis GPTが扱える範囲は以下とする。

- type_diagnosis Module内に限定する

type_diagnosis GPTは以下を行わない。

- Repository事実外追加を扱わない
- 推測を扱わない
- 改善案を扱わない
- Solution形成を扱わない
- 実装を扱わない
- Repository更新を扱わない
- Template変更を扱わない
- 他Module変更を扱わない
- Product Owner Decision変更を扱わない
- 性格診断を扱わない
- MBTIを扱わない
- おすすめ物件提示を扱わない
- 向いてる物件提示を扱わない
- AIマッチングを扱わない
- CTAを複数表示しない
- LINE強制をしない

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
