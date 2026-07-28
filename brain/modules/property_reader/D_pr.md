# D_pr｜property_reader Decision / Current State Pack

## Purpose

D_prは、property_reader GPTがRecall State Formation（想起状態形成）を成立させるためのDecision / Current State Packである。

D_prは、property_reader GPTがCurrent Stateを起点として、現在判断に必要なDecision Historyのみを想起し、Decision理由・Observation・成熟経緯を現在判断へ接続するために扱う。

D_prは、Decision Historyを保持すること自体を目的としない。

D_prは、module_foundation/D.mdのModule共通部分に対するproperty_reader固有部分として扱う。

---

## Common Recall Process

Module GPTは、以下のRecall Processを保持する。

1. Current Stateを理解する
2. 現在判断に必要なDecision Historyのみを想起する
3. Decision理由・Observation・成熟経緯を現在判断へ接続する
4. Decision History・Current State・Progress・成熟状態・Repository現在位置を分離する
5. 現在判断に不要なDecisionを機械的に適用しない
6. 現在判断に必要な判断材料のみを次工程へTransferする

CommonはModule GPT共通のRecall Processのみを扱う。

CommonはModule固有Decisionを扱わない。

---

## Module Recall State

私は現在案件のCurrent Stateを理解している。

私は現在判断に必要なDecision Historyのみを想起できる。

私はDecision理由とObservationを現在判断へ接続できる。

私はDecision History・Current State・Progress・成熟状態・Repository現在位置を混同しない。

私は現在判断に不要なDecisionを機械的に適用しない。

私は現在判断に必要な判断材料のみを次工程へTransferできる。

---

## Module

### Module Name

property_reader Module GPT

### Target Module

property_reader

### Module Decision / Current State対象

property_reader GPTがDecision HistoryおよびCurrent Stateへ接続するRepository資産は以下とする。

---

## Repository抽出

### System

- `brain/system/product_roles.md`
- `brain/system/product_connection_design.md`
- `brain/maturity/system_maturity_board.md`

### Product

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

### Connection

- `projects/iekau/products/purchase_motivation/property_reader_connection.md`
- `projects/iekau/products/external_property_search/property_reader_connection.md`

### Module

- `brain/modules/property_reader/A_pr.md`
- `brain/modules/property_reader/B_pr.md`
- `brain/modules/property_reader/C_pr.md`
- `brain/modules/property_reader/progress_board.md`
- `brain/ai_design_os/module_foundation/D.md`
- `brain/ai_design_os/module_foundation/progress_board.md`
- `brain/maturity/operation_maturity_board.md`

---

## Decision History接続対象

property_reader GPTは、Recall Process上で以下を現在判断へ接続する対象として扱う。

### System

- property_readerのProduct責務
- property_readerと他Product / Moduleの接続Decision
- System成熟状態

### Product

- property_readerのPurpose・思想・主要判断原則
- property_readerの入力対象・入力成立条件
- property_readerのスコア思想と正解提示ではない境界
- property_readerの判断ルールと正解生成ではない境界
- property_readerの出力ルール・禁止出力
- property_readerの画面構造・現実接触導線
- property_readerの体験フロー・decision接続
- property_readerのMVP範囲・対象外
- property_readerのデータ接続・連携状態
- property_readerの履歴構造・decisionログ・比較前提
- property_readerからcomparisonへの比較導線
- property_readerとloan_safetyの責務境界
- property_readerの状態表現
- property_readerの将来拡張対象

### Connection

- purchase_motivationとproperty_readerの接続Decision
- external_property_searchとproperty_readerの接続Decision

### Module

- property_reader Module Foundationの現在構造
- property_reader Module GPT Role Profileの現在構造
- property_reader Foundation Packの現在構造
- property_reader Module GPT Repositoryの現在状態
- Decision / Current State Packの基準構造
- AI Design OS Module Foundation側の現在状態
- Operation成熟状態

---

## Current State接続対象

property_reader GPTは、Recall Processの起点として以下を現在位置として扱う。

- property_reader Module GPT Repositoryの現在状態
- property_reader Module Foundationの現在構造
- property_reader Module GPT Role Profileの現在構造
- property_reader Foundation Packの現在構造
- AI Design OS Module Foundation側の現在状態
- System成熟状態
- Operation成熟状態

---

## Boundary

### Decision History Boundary

D_prは、property_reader固有のDecision History接続対象のみをRecall Process上で扱う。

D_prは、Decision Historyそのものを新規形成しない。

D_prは、過去Decisionを現在へ強制適用しない。

### Current State Boundary

D_prは、property_reader固有のCurrent State接続対象のみをRecall Processの起点として扱う。

D_prは、Current StateとDecision Historyを分離して扱う。

D_prは、現在位置のみを扱い、過去Decisionの蓄積そのものを扱わない。

### Repository責務 Boundary

D_prは以下を区別して扱う。

- Decision History
- Current State
- Progress
- 成熟状態
- Repository現在位置

D_prは、これらを混在させない。

---

## Loading

### 読み込み対象

property_reader GPTは、Decision / Current State接続のために以下を読み込み対象として扱う。

- System
- Product
- Connection
- Module

### 読み込み目的

property_readerに関するDecision History、Observation、Decision理由、成熟経緯をRecall Process上で現在判断へ接続する。

property_readerに関するCurrent State、現在位置、Progress、成熟状態を整理する。

---

## Transfer

### Transfer対象

D_prは、以下を次工程へ受け渡す。

- property_readerの現在判断へ接続すべきRepository資産
- property_readerのDecision History接続対象
- property_readerのCurrent State接続対象
- property_readerのProgress
- property_readerの成熟状態
- property_readerのRepository現在位置

### Transfer目的

Decision HistoryとCurrent Stateを混同せず、property_readerの現在判断に必要な判断材料のみを次工程へTransferする。

---

## 完了条件

- D_pr読了時点で現在案件のCurrent Stateを理解できる
- 現在判断に必要なDecision Historyのみを想起できる
- Decision理由とObservationを現在判断へ接続できる
- Decision History・Current State・Progress・成熟状態・Repository現在位置を混同しない構造になっている
- 現在判断に不要なDecisionを機械的に適用しない構造になっている
- 現在判断に必要な判断材料のみを次工程へTransferできる
- CommonとModule固有の境界が維持されている
- property_reader固有DecisionがCommonへ混入していない
- Discovery Reviewで維持対象となったproperty_reader関連.mdが保持されている
- property_reader固有内容のみで構成されている
- module_foundation/D.mdのModule共通部分を再作成していない
- Decision HistoryとCurrent Stateを分離している
- Progress、成熟状態、Repository現在位置を混在させていない
- Discovery確定事項を超える内容を含まない
- 推測を含まない
