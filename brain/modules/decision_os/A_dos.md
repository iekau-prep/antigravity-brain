# A_dos｜decision_OS Foundation｜Identity

## Purpose

A_dosは、decision_OS moduleが起動直後に、decision_OS moduleのIdentityを理解するためのModule Foundationである。

A_dosは、A｜Identity構造を維持し、decision_OS固有のModule Name、Target Module、Purpose、Module Self Recognition、Module SoT、Module Repository、Module Input、Module Output、Knowledge Boundary、Authority Boundary、Connected Modules、Completion Criteriaを保持する。

A_dosは、Foundation形成として扱い、実装・改善を行わない。

---

## Module Name

decision_OS module

decision_os

---

## Target Module

decision_OS module

decision_os

---

## Purpose

decision_OS moduleは以下を扱う。

- decision_OS moduleの責務を定義する
- decision_OSをSystem設計へ適用する役割を扱う
- 現在判断を整理し、次のdecision更新へ接続するmodule
- 「現在のdecision状態」を整理し、本命形成とdecision更新を継続的に循環させる場所
- decision loop の中心に位置する
- decision循環の中核
- 「今どこで迷い、どこが本命化し、どこがズレ始めているか」を扱う
- decision progression OS
- decision更新を継続させ、drift recoveryを支援し、本命形成を循環させ続ける

---

## Module Self Recognition

decision_OS moduleは以下として扱う。

- 現在判断を整理し、次のdecision更新へ接続するmodule
- 現在のdecision状態を整理するmodule
- 本命形成とdecision更新を継続的に循環させる場所
- decision loop の中心
- decision循環の中核
- decision progression OS
- drift recoveryを支援するmodule
- 本命形成を循環させ続けるmodule

decision_OS moduleは以下ではない。

- recommendationするmodule
- dashboard
- task管理
- current decisionを固定するmodule
- decision主体を変更するmodule
- 物件一覧
- お気に入り管理
- comparison管理画面
- 情報整理UI
- 保存一覧
- 過去保存中心
- future最適化
- 完了状態管理
- decisionを生成するmodule
- decision結果、recommendation、順位付け、評価点を扱うmodule

---

## Module SoT

decision_OS moduleが扱うModule SoTは以下とする。

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

---

## Module Repository

decision_OS moduleが扱うModule Repositoryは以下とする。

- `projects/iekau/products/decision_os/`
- `brain/system/decision_os_role.md`

---

## Module Responsibility

decision_OS moduleのResponsibilityは以下とする。

- current decisionを反映する
- STATEを解釈する
- decision continuityを維持する
- 次のCTAを現在判断へ適用する
- comparison結果を現在判断へ接続する
- decision更新を支援する

---

## Module Input

decision_OS moduleが扱うModule Inputは以下とする。

- decisionデータ
- property参照データ
- 比較用選択状態
- state算出用データ
- LINE再開用データ
- user_id
- property_id
- decision_type
- decision_result
- reasons
- is_tentative
- created_at
- updated_at
- selected_property_ids
- property_readerにおけるdecision実行
- comparison結果
- property_readerから渡される判断材料
- reason候補
- 理想接触
- 現実接触
- current_priority
- fixed_core接触
- drift情報

---

## Module Output

decision_OS moduleが扱うModule Outputは以下とする。

- decision一覧
- 検討中 / 保留 / 見送り
- current decision更新
- STATE解釈
- 次のCTA
- comparison / 再整理への接続
- property_readerへの遷移
- external_property_searchへの導線
- 次decision更新
- decision_OSへ戻る判断
- decision continuity

---

## Knowledge Boundary

decision_OS moduleのKnowledge Boundaryは以下とする。

- decision_OS responsibilities
- current decision
- decision continuity
- state interpretation
- CTA application
- module boundary
- decision progression
- drift recovery
- 本命形成循環
- fixed_core再接続
- priority整理
- comparison結果
- property_reader接続
- LINE接続
- Supabase接続
- stateは保存せず、current decisionから毎回算出する

---

## Authority Boundary

decision_OS moduleは以下を扱わない。

- recommendationしない
- dashboard化しない
- task管理しない
- current decisionを固定しない
- decision主体を変更しない
- 物件一覧ではない
- お気に入り管理ではない
- comparison管理画面ではない
- 情報整理UIではない
- 保存一覧ではない
- 過去保存中心ではない
- future最適化ではない
- 完了状態管理ではない
- stateは保存しない
- decisionを生成しない
- decision結果、recommendation、順位付け、評価点は扱わない

decision_OS moduleは以下を扱う。

- 主CTAは1つのみ

---

## Connected Modules

decision_OS moduleのConnected Modulesは以下とする。

- Constitution
- decision_framework
- decision_OS_role
- decision_OS module
- Implementation
- property_reader
- comparison
- LINE
- Supabase
- external_property_search
- state_to_cta_connection
- fixed_core_definition
- drift_detection
- decision_update_triggers

---

## Completion Criteria

A_dosは以下を満たした時に成立する。

- A_dosがA｜Identity構造を維持している
- Module Nameが保持されている
- Target Moduleが保持されている
- Purposeが保持されている
- Module Self Recognitionが保持されている
- Module SoTが保持されている
- Module Repositoryが保持されている
- Module Inputが保持されている
- Module Outputが保持されている
- Knowledge Boundaryが保持されている
- Authority Boundaryが保持されている
- Connected Modulesが保持されている
- 共通テンプレートを変更していない
- Module固有設定のみ差し替えている
- 共通責務へModule固有思想を混在させていない
- Module固有内容を他Moduleへ持ち込んでいない
- Foundation形成で実装・改善を行っていない
- 新しい思想を追加していない
- 推測を含まない
