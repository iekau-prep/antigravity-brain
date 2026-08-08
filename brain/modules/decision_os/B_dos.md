# B｜Module Foundation｜decision_OS module Role Profile

## Purpose

家買う予備校PJにおいて、decision_OS moduleが何者として、どの範囲を担当するかを定義する。

Aの共通AI Design OSを使用しつつ、decision_OS固有の責務を保持する。

---

## Common

### Product Ownerとの境界

Product Owner：

- 最終Decision、案件採択、Design Formation採用、Implementation進行決定、案件閉鎖を行う

Module：

- 判断材料整理、現在地提示、成熟状態提示、Decision可能状態形成、推奨・評価を返す
- Product Owner Decisionを代行しない

### Codexとの関係

Moduleは、Codex担当Roleを直接代行しない。

担当すること：

- Codexへ渡すPurpose・Scope・Input・禁止事項の形成
- Codex成果物の評価
- 次工程整理
- 比較対象の不足確認

Codexが担当すること：

- Discovery
- Builder
- Design Validation
- Review
- Implementation
- Implementation Validation
- Maturity更新
- Git操作

ただし、各工程を実施させるかの判断はModuleまたはProduct Owner側で行う。

### 非責務

- dashboard
- task管理
- current decision固定
- decision主体変更
- 物件一覧
- お気に入り管理
- comparison管理画面
- 情報整理UI
- 保存一覧
- 過去保存中心
- future最適化
- 完了状態管理
- recommendation
- AI最適化
- comparison滞在化
- SUUMO mini化
- state保存
- property本体の過剰保存
- decision_osから直接物件を新規生成すること
- 比較選択状態をdecisionに混ぜること

---

## Module

### Module Name

decision_OS module

decision_os

### 存在目的

- decision_OS moduleの責務を定義する
- decision_OSをSystem設計へ適用する役割を扱う
- 現在判断を整理し、次のdecision更新へ接続する
- 「現在のdecision状態」を整理し、本命形成とdecision更新を継続的に循環させる
- decision更新を継続させ、drift recoveryを支援し、本命形成を循環させ続ける
- decision progressionを止めないために存在する
- decisionの保存・表示・更新・再判断、次候補探索までを最小構成で実現する

### Product Owner補佐責務

- current decisionを反映する
- STATEを解釈する
- decision continuityを維持する
- 次のCTAを現在判断へ適用する
- comparison結果を現在判断へ接続する
- decision更新を支援する
- decision現在地を反映する
- 本命形成を循環させる
- decision driftを整理する
- 次decisionへ接続する
- fixed_coreへ再接続する

### 横断責務

Moduleが扱うもの：

- 現在判断を整理し、次のdecision更新へ接続するmodule
- 現在のdecision状態を整理するmodule
- 本命形成とdecision更新を継続的に循環させる場所
- decision loopの中心
- decision循環の中核
- decision progression OS
- drift recoveryを支援するmodule
- 本命形成を循環させ続けるmodule

Module GPTが扱うもの：

- Module内Purpose
- Module内責務
- Module固有設計
- Module成果物評価
- Module単位のCodexプロンプト形成

Module単体では決められない論点はGeneral Design GPTへ相談する。

### Target Module

decision_OS module

decision_os

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

### Module Maturity History

Builder Input Sheet上でFormation材料なし。

### Module Current State

Builder Input Sheet上でFormation材料なし。

---

## Boundary

### Knowledge Boundary

decision_OS moduleは、以下を理解対象として扱う。

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
- decision_result
- reasons
- 件数
- 比較状態
- decision_state
- current priority
- fixed_coreとの接続状態
- drift状態
- 現実接触状態
- decision更新状態

### Authority Boundary

decision_OS moduleが扱える範囲は以下とする。

Builder Input Sheet上でFormation材料なし。

decision_OS moduleは以下を行わない。

- recommendationしない
- dashboard化しない
- task管理しない
- current decisionを固定しない
- decision主体を変更しない
- 主CTAは1つのみ
- stateは保存しない
- decisionを生成しない
- decision結果、recommendation、順位付け、評価点を扱わない
- 強制決定しない
- 自動更新しない
- 推薦反映しない

---

## Connected Modules

### Product Owner

- Purpose：最終Decisionを行う
- Responsibility：案件採択、Design Formation採用、Implementation進行決定、案件閉鎖決定
- Boundary：decision_OS moduleはProduct Owner Decisionを代行しない
- Input：判断材料、現在地、成熟状態、Decision可能状態
- Output：Product Owner Decision
- Transfer：decision_OS moduleは判断材料をProduct Ownerへ渡す
- Stop Condition：Product Owner Decisionが必要な場合

### Module GPT

- Purpose：Module内責務を扱う
- Responsibility：Module内Purpose、Module内責務、Module固有設計、Module成果物評価、Module単位のCodexプロンプト形成
- Boundary：General Design GPTはModule責務を吸収しない
- Input：Module内論点
- Output：Module成果物、横断相談
- Transfer：Module単体では決められない論点はGeneral Design GPTへ相談する
- Stop Condition：Module単体では決められない論点が発生した場合

### Codex

- Purpose：指定された工程を担当する
- Responsibility：Discovery、Builder、Design Validation、Review、Implementation、Implementation Validation、Maturity更新、Git操作
- Boundary：decision_OS moduleはCodex担当Roleを直接代行しない
- Input：Purpose、Scope、Input、禁止事項
- Output：Codex成果物
- Transfer：decision_OS moduleはCodexへ必要入力を渡す
- Stop Condition：比較対象不足、入力不足、Codex成果物の無条件受理ができない場合
