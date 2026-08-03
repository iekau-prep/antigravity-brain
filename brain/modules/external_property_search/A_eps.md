# A_eps｜external_property_search Foundation｜Identity

## Purpose

A_epsは、external_property_searchが起動直後に、external_property_search ModuleのIdentityを理解するためのModule Foundationである。

A_epsは、A｜Identity構造を維持し、external_property_search固有のModule Name、Target Module、Purpose、Module Self Recognition、Module SoT、Module Repository、Module Input、Module Output、Knowledge Boundary、Authority Boundary、Connected Modules、Completion Criteriaを保持する。

A_epsは、Foundation形成として扱い、実装・改善を行わない。

---

## Module Name

external_property_search

---

## Target Module

external_property_search

---

## Purpose

external_property_searchは以下を扱う。

- 外部サービスで見つけた物件を、再び判断ループへ戻すための入口モジュール
- 外部探索を終了地点にせず、decision progressionに戻す
- external_property_searchは、外部探索を判断へ戻すための入口レイヤー
- 物件探索ではなく、「判断可能状態へ戻す構造」を定義する
- 外部物件探索からproperty_readerへ判断材料を受け渡し、decision loopへ復帰する構造を扱う

---

## Module Self Recognition

external_property_searchは以下として扱う。

- 外部サービスで見つけた物件を、再び判断ループへ戻すための入口モジュール
- 外部探索をdecision progressionに戻すModule
- 外部探索を判断へ戻すための入口レイヤー
- 判断可能状態へ戻す構造を定義するModule
- 外部物件探索からproperty_readerへ判断材料を受け渡し、decision loopへ復帰する構造を扱うModule

external_property_searchは以下ではない。

- 物件を探す場所
- 比較する場所
- 推薦する場所
- 単体で判断を完了するModule
- 物件検索を扱うModule
- おすすめ生成を扱うModule
- ランキングを扱うModule
- スコアリングを扱うModule
- 物件保存を扱うModule
- decision保存を扱うModule
- STATE生成を扱うModule
- OSに直接戻すModule

---

## Module SoT

external_property_searchが扱うModule SoTは以下とする。

- `brain/system/external_property_search.md`
- `projects/iekau/products/external_property_search/README.md`
- `projects/iekau/products/external_property_search/input_connection.md`
- `projects/iekau/products/external_property_search/data_connection.md`
- `projects/iekau/products/external_property_search/property_reader_connection.md`
- `projects/iekau/products/external_property_search/decision_connection.md`
- `projects/iekau/products/external_property_search/ui_flow.md`
- `projects/iekau/products/external_property_search/screen_structure.md`
- `projects/iekau/products/external_property_search/completion_definition.md`

---

## Module Repository

external_property_searchが扱うModule Repositoryは以下とする。

- `projects/iekau/products/external_property_search/`
- `brain/system/external_property_search.md`

---

## Module Input

external_property_searchが扱うModule Inputは以下とする。

- 外部探索結果
- 外部物件URL
- 外部物件画像
- 外部資料（PDF等）
- URL
- 画像
- PDF
- 手入力
- raw_input
- raw_url
- raw_images
- raw_pdf
- raw_text
- confirmed_input
- property_type
- address
- building_name
- room
- price
- area
- built_at
- land_right
- manual_fields

---

## Module Output

external_property_searchが扱うModule Outputは以下とする。

- property_reader
- reading_context
- input_type
- confirmed_input
- raw_input_ref
- capture_ref
- 入力コンテキスト
- raw_input
- source
- preview
- capture
- property_reader開始可能状態
- decision更新材料

---

## Knowledge Boundary

external_property_searchのKnowledge Boundaryは以下とする。

- 外部探索
- 戻り導線
- property_reader接続
- decision loop復帰
- input_connection
- data_connection
- property_reader_connection
- decision_connection
- 外部探索入口
- 対象選択
- 判断入口生成
- raw_input
- confirmed_input
- reading_context
- 入力補助
- 確認入力
- 責務移管
- decision continuity

---

## Authority Boundary

external_property_searchは以下を扱わない。

- 物件を探す場所ではない
- 比較する場所ではない
- 推薦する場所ではない
- 本モジュール単体では判断を完了しない
- 物件検索を扱わない
- おすすめ生成を扱わない
- ランキングを扱わない
- スコアリングを扱わない
- 物件保存を扱わない
- decision保存を扱わない
- STATE生成を扱わない
- ここでは判断しない
- ここではdecisionしない
- ここでは保存しない
- OSに直接戻さない

external_property_searchは以下を維持する。

- 判断主体は常にユーザー
- property_readerを経由する

---

## Connected Modules

external_property_searchのConnected Modulesは以下とする。

- external
- input_connection
- data_connection
- property_reader_connection
- property_reader
- decision_connection
- decision
- decision_OS
- OS
- LINE
- Supabase

---

## Completion Criteria

A_epsは以下を満たした時に成立する。

- EPS-01：外部探索入口成立
- EPS-02：入力成立
- EPS-03：確認成立
- EPS-04：property_reader接続成立
- EPS-05：decision continuity成立
- EPS-06：recommendation未混入
- EPS-07：STATE非保存成立
