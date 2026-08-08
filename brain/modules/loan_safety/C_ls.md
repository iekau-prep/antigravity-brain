# C｜Foundation Pack

## Purpose

loan_safetyがPJを推測せず理解し、PJ内SoTを根拠として判断できる状態を形成する。

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

loan_safety

### Target Module

loan_safety

家買う予備校における現実接触モジュール

### Module SoT

- `projects/iekau/products/loan_safety/README.md`
- `projects/iekau/products/loan_safety/product_concept.md`
- `projects/iekau/products/loan_safety/data_connection.md`
- `projects/iekau/products/loan_safety/diagnosis_logic.md`
- `projects/iekau/products/loan_safety/completion_definition.md`
- `projects/iekau/products/loan_safety/state_labels.md`
- `projects/iekau/products/loan_safety/ui_result_flow.md`
- `projects/iekau/products/loan_safety/character_templates.md`
- `projects/iekau/products/property_reader/loan_safety_connection.md`

### Module Repository

- `projects/iekau/products/loan_safety/`

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

loan_safety固有Learning対象：

- `projects/iekau/products/loan_safety/README.md`
- `projects/iekau/products/loan_safety/product_concept.md`
- `projects/iekau/products/loan_safety/data_connection.md`
- `projects/iekau/products/loan_safety/diagnosis_logic.md`
- `projects/iekau/products/loan_safety/completion_definition.md`
- `projects/iekau/products/loan_safety/state_labels.md`
- `projects/iekau/products/loan_safety/ui_result_flow.md`
- `projects/iekau/products/loan_safety/character_templates.md`
- `projects/iekau/products/property_reader/loan_safety_connection.md`

到達状態：

- System思想を説明できる
- decision主体を説明できる
- STATE / CTA / comparison / historyの責務境界を説明できる
- Product責務を説明できる
- loan_safetyは、現在検討している条件が自分にとってどの程度現実的に成立しそうかを整理する現実接触モジュールであると説明できる
- loan_safetyの目的は、支払い条件を評価することではなく、現在のdecisionを現実理解を通して更新可能な状態へ接続することであると説明できる
- loan_safetyは本モジュール単体では購入可否を決定しないと説明できる
- 判断主体は常にユーザーであると説明できる
- loan_safetyはローン審査、借入承認、安全判定、推薦ではないと説明できる
- loan_safetyの役割は、現実接触、許容整理、decision更新補助であると説明できる
- loan_safetyが扱うものは、返済余力、生活維持、生活感、キャッシュ残量、将来変化耐性、精神余白、許容リスクであると説明できる
- loan_safetyが扱わないものは、購入許可、借入承認、最適物件提案、安全強制、正解提示、decision保存、STATE生成であると説明できる
- 安全は目的ではなく理解の補助線であると説明できる
- future視点はcurrent decision supportとして扱うと説明できる
- loan_safetyは不安を増やすためではなく、生活感を理解するために存在すると説明できる
- loan_safetyの責務は、支払い現実接触、許容リスク整理、decision更新準備であると説明できる
- decision自体は更新しないと説明できる
- 出力は材料であり結論ではないと説明できる
- loan_safetyはdecision_OSを更新しないと説明できる
- 三ラインモデルは、安全判定ではなく理解補助線であると説明できる
- 三ラインは、安心ライン、現実ライン、条件付きラインであり、ラインは結論ではないと説明できる
- diagnosis_logicの必須入力は、価格情報または返済イメージであると説明できる
- 現実接触処理は、生活余白理解、支払い感理解、変化耐性理解、精神余白理解、許容リスク理解であると説明できる
- 未来予測しない、現在理解すると説明できる
- completion_definitionは、安全判定完成ではなく、現実接触責務成立を確認すると説明できる
- loan_safetyの完成候補は、安全判定が成立した状態ではなく、現実理解と許容整理を通してdecision更新可能状態を成立させた状態であると説明できる
- STATEと状態ラベルは別物であると説明できる
- ui_result_flowは、結果体験 / 現実接触 / decision更新UXを定義すると説明できる
- ui_result_flowは、借入額診断、安全判定ツール、FPシミュレーター、「買える額」表示UIではないと説明できる
- loan_safetyはproperty_readerで生まれた本命形成・迷い・違和感を、現実条件によって更新するdecision moduleであると説明できる
- property_readerは物件をどう見るかを扱い、loan_safetyはその支払いで現実的に成立するかを扱うと説明できる
- property_readerで違和感を出し、loan_safetyで確かめる構造であると説明できる
- property_reader側では軽い支払いイメージだけを出すと説明できる
- loan_safety側で受け取るものは、物件価格、参考月額であると説明できる

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

loan_safetyは、以下を理解対象として扱う。

- 返済余力
- 生活維持
- 生活感
- キャッシュ残量
- 将来変化耐性
- 精神余白
- 許容リスク
- 返済余力整理
- 生活余白整理
- 将来変化想像
- 精神余白整理
- 許容リスク整理
- 条件変動理解
- 状態ラベル
- 現実ライン理解
- 現実接触
- decision更新準備
- 本命再整理
- property_readerとの接続境界
- STATEと状態ラベルの区別
- fixed_core境界
- current decision support
- future視点
- fixed_core再接続
- decision support layer
- 現実判断STATE
- decision continuity

### Authority Boundary

Foundation Packは、PJ内SoTを根拠として判断できる状態を形成するために扱う。

Foundation Packは、PJ思想、System思想、Operation、Product、Module、Implementationを変更しない。

不明点がある場合は推測せず停止する。

loan_safetyが扱える範囲は以下とする。

- 支払い現実接触を扱う
- 許容リスク整理を扱う
- decision更新準備を扱う
- 現実を理解し、生活感へ変換し、判断可能状態を作ることを扱う

loan_safetyは以下を行わない。

- 購入許可を扱わない
- 借入承認を扱わない
- 最適物件提案を扱わない
- 安全強制を扱わない
- 正解提示を扱わない
- decision保存を扱わない
- decision結果生成を扱わない
- STATE生成を扱わない
- STATE保存を扱わない
- property評価を扱わない
- recommendationを扱わない
- fixed_core変更を扱わない
- decision自体は更新しない
- decision_OSを更新しない
- safety判定完成を目的にしない
- future恐怖訴求を扱わない
- 安全だけを押さない
- property_readerと断絶しない
- decisionが生まれない状態にしない

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
