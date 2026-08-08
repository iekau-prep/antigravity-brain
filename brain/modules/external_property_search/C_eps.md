# C｜Foundation Pack

## Purpose

全体設計GPTがPJを推測せず理解し、PJ内SoTを根拠として判断できる状態を形成する。

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

`external_property_search`

### Target Module

`external_property_search`

### Module SoT

- `brain/system/external_property_search.md`
- `projects/iekau/products/external_property_search/README.md`
- `projects/iekau/products/external_property_search/input_connection.md`
- `projects/iekau/products/external_property_search/data_connection.md`
- `projects/iekau/products/external_property_search/property_reader_connection.md`
- `projects/iekau/products/external_property_search/decision_connection.md`
- `projects/iekau/products/external_property_search/ui_flow.md`
- `projects/iekau/products/external_property_search/screen_structure.md`
- `projects/iekau/products/external_property_search/completion_definition.md`

### Module Repository

- `projects/iekau/products/external_property_search/`
- `brain/system/external_property_search.md`

### Module Current State

`B_eps.md` では `Module Current State` は「Builder Input Sheet上でFormation材料なし」と記載。

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

external_property_search固有Learning対象：

- `brain/system/external_property_search.md`
- `projects/iekau/products/external_property_search/README.md`
- `projects/iekau/products/external_property_search/input_connection.md`
- `projects/iekau/products/external_property_search/data_connection.md`
- `projects/iekau/products/external_property_search/property_reader_connection.md`
- `projects/iekau/products/external_property_search/decision_connection.md`
- `projects/iekau/products/external_property_search/ui_flow.md`
- `projects/iekau/products/external_property_search/screen_structure.md`
- `projects/iekau/products/external_property_search/completion_definition.md`

external_property_search固有Learning接続情報：

- `external_property_search.md` は、外部物件探索からproperty_readerへ判断材料を受け渡し、decision loopへ復帰するための構造を扱う。
- `README.md` は、external_property_searchを、外部サービスで見つけた物件を再び判断ループへ戻すための入口モジュールとして定義する。
- `input_connection.md` は、外部から取得した物件情報を判断可能状態へ接続するための入力境界を扱う。
- `data_connection.md` は、入力・保持・受渡・破棄のデータ接続構造を扱う。
- `property_reader_connection.md` は、external_property_searchからproperty_readerへ責務を移す境界を扱う。
- `decision_connection.md` は、property_readerからdecisionへの接続境界を扱う。
- `ui_flow.md` は、探索行動を停止させずproperty_readerへ戻す導線責務とCTA責務を扱う。
- `screen_structure.md` は、external_property_searchの画面責務境界を扱う。
- `completion_definition.md` は、external_property_searchを完成候補として閉じられる判定条件を扱う。

到達状態：

- System思想を説明できる
- decision主体を説明できる
- STATE / CTA / comparison / historyの責務境界を説明できる
- Product責務を説明できる
- external_property_searchが物件探索ではなく「判断可能状態へ戻す構造」を定義することを理解する
- external_property_search単体では判断を完了せず、判断主体は常にユーザーであることを理解する
- 入力、保持、確認、property_readerへの責務移管を分離して理解する
- 責務成立、停止しないこと、判断へ戻れること、recommendation未混入、STATE非保存を成立条件として理解する

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

external_property_searchでは、以下をKnowledge Boundaryとして扱う。

- `external_property_search.md` が扱う、外部物件探索からproperty_readerへ判断材料を受け渡し、decision loopへ復帰するための構造
- `README.md` が扱う、外部サービスで見つけた物件を再び判断ループへ戻すための入口モジュール定義
- `input_connection.md` が扱う、外部から取得した物件情報を判断可能状態へ接続するための入力境界
- `data_connection.md` が扱う、入力・保持・受渡・破棄のデータ接続構造
- `property_reader_connection.md` が扱う、external_property_searchからproperty_readerへ責務を移す境界
- `decision_connection.md` が扱う、property_readerからdecisionへの接続境界
- `ui_flow.md` が扱う、探索行動を停止させずproperty_readerへ戻す導線責務とCTA責務
- `screen_structure.md` が扱う、external_property_searchの画面責務境界
- `completion_definition.md` が扱う、external_property_searchを完成候補として閉じられる判定条件

### Authority Boundary

Foundation Packは、PJ内SoTを根拠として判断できる状態を形成するために扱う。

Foundation Packは、PJ思想、System思想、Operation、Product、Module、Implementationを変更しない。

不明点がある場合は推測せず停止する。

Discovery Observation上でAuthority Boundary形成材料は確認されない。

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
- external_property_searchが物件探索ではなく「判断可能状態へ戻す構造」を定義することを理解できる
- external_property_search単体では判断を完了せず、判断主体は常にユーザーであることを理解できる
- 入力、保持、確認、property_readerへの責務移管を分離して理解できる
- 責務成立、停止しないこと、判断へ戻れること、recommendation未混入、STATE非保存を成立条件として理解できる
