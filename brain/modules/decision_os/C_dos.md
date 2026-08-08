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

- `decision_OS module`
- `decision_os`

### Target Module

- `decision_OS module`
- `decision_os`

### Module SoT

- `brain/system/decision_os_role.md`
- `brain/system/decision_framework.md`
- `brain/system/state_definition.md`
- `brain/system/state_detection.md`
- `brain/system/state_to_cta_connection.md`
- `brain/system/comparison_role.md`
- `brain/system/decision_update_triggers.md`
- `projects/iekau/products/decision_os/product_concept.md`
- `projects/iekau/products/decision_os/ux_flow.md`
- `projects/iekau/products/decision_os/data_connection.md`
- `projects/iekau/products/decision_os/feature_scope_mvp.md`
- `projects/iekau/products/decision_os/screen_structure.md`
- `projects/iekau/products/decision_os/decision_memory.md`
- `projects/iekau/products/external_property_search/decision_connection.md`

### Module Repository

- `projects/iekau/products/decision_os/`
- `brain/system/decision_os_role.md`

### Module Current State

`B_dos.md` では `Module Current State` は「Builder Input Sheet上でFormation材料なし」と記載。

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
- `decision_framework.md` は、decision progression、decision update、module responsibilities、decision continuity設計、decision loop設計、decision境界、module接続を扱う。

STATE：

- state_definition.md
- state_detection.md
- `state_definition.md` は、STATE構造、STATE導出、STATE Detection、decision_stateとの境界、CTA接続、module接続、STATE優先順位を扱う。
- `state_detection.md` は、現在のdecision構造からSTATEを導出する判定ロジックを扱う。

CTA：

- cta_role.md
- 必要に応じて cta_strategy.md
- `state_to_cta_connection.md` は、判定されたSTATEを次のdecision更新へ接続する方法を扱う。

Decision OS：

- decision_os_role.md
- `decision_os_role.md` は、decision_OS moduleの責務、current decision、decision continuity、STATE解釈、CTA適用、module boundaryを扱う。
- `product_concept.md` は、decision OSを「現在のdecision状態を整理し、本命形成とdecision更新を継続的に循環させる場所」として定義する。
- `ux_flow.md` は、decision_osのUX構造、decision progression flow、drift recovery flow、本命形成循環、判断継続体験を扱う。
- `data_connection.md` は、decision_osが扱うデータの入出力、property_reader / comparison / LINE / Supabaseとの接続を扱う。
- `feature_scope_mvp.md` は、decision_os MVPの機能範囲を扱う。
- `screen_structure.md` は、decision_osの画面構造、UI配置、セクション設計を扱う。
- `decision_memory.md` は、decision履歴価値の可能性を扱う。
- `decision_connection.md` は、property_readerからdecision、decision_OSへの接続境界を扱う。

Comparison：

- comparison_role.md
- `comparison_role.md` は、comparisonがdecision_OSへ判断を戻す接続を扱う。

Product責務：

- product_roles.md
- product_connection_design.md

到達状態：

- System思想を説明できる
- decision主体を説明できる
- STATE / CTA / comparison / historyの責務境界を説明できる
- Product責務を説明できる
- decision_OSが現在判断を整理し、次のdecision更新へ接続するmoduleであることを理解する
- decision主体はユーザー本人であり、各moduleはdecision形成を支える責務のみを持つことを理解する
- decision_OSがdecision progression、drift recovery、本命形成循環を扱うことを理解する
- decision_osがdecisionを受け取り、stateを解釈し、比較・更新・再判断へつなげる接続設計を理解する

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
- `decision_update_triggers.md` は、decision更新契機を扱う。

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

`decision_OS module` / `decision_os` では、以下をKnowledge Boundaryとして扱う。

- `decision_os_role.md` が扱う decision_OS moduleの責務、current decision、decision continuity、STATE解釈、CTA適用、module boundary
- `decision_framework.md` が扱う decision progression、decision update、module responsibilities、decision continuity設計、decision loop設計、decision境界、module接続
- `state_definition.md` が扱う STATE構造、STATE導出、STATE Detection、decision_stateとの境界、CTA接続、module接続、STATE優先順位
- `state_detection.md` が扱う 現在のdecision構造からSTATEを導出する判定ロジック
- `state_to_cta_connection.md` が扱う 判定されたSTATEを次のdecision更新へ接続する方法
- `comparison_role.md` が扱う comparisonがdecision_OSへ判断を戻す接続
- `decision_update_triggers.md` が扱う decision更新契機
- `product_concept.md` が定義する decision OSの「現在のdecision状態を整理し、本命形成とdecision更新を継続的に循環させる場所」
- `ux_flow.md` が扱う decision_osのUX構造、decision progression flow、drift recovery flow、本命形成循環、判断継続体験
- `data_connection.md` が扱う decision_osのデータ入出力、property_reader / comparison / LINE / Supabaseとの接続
- `feature_scope_mvp.md` が扱う decision_os MVPの機能範囲
- `screen_structure.md` が扱う decision_osの画面構造、UI配置、セクション設計
- `decision_memory.md` が扱う decision履歴価値の可能性
- `decision_connection.md` が扱う property_readerからdecision、decision_OSへの接続境界

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

### Reference

- Purpose：案件発生時のみ必要なReference理解
- Boundary：通常起動の必須条件ではない

---

## Foundation Pack完了条件

- PJ構造、PJ思想、System思想、Operation、判断品質向上文書を現在案件へ接続できる
- decision_OSが現在判断を整理し、次のdecision更新へ接続するmoduleであることを理解できる
- decision主体はユーザー本人であり、各moduleはdecision形成を支える責務のみを持つことを理解できる
- decision_OSがdecision progression、drift recovery、本命形成循環を扱うことを理解できる
- decision_osがdecisionを受け取り、stateを解釈し、比較・更新・再判断へつなげる接続設計を理解できる
