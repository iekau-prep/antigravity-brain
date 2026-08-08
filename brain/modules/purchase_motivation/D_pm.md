D_pm# D｜Decision / Current State Pack

## Purpose

過去Decisionを履歴として暗記するのではなく、Observation・Decision理由・成熟経緯を現在判断へ接続する。

同時に、現在のPhase・案件・未完了工程を保持する。

---

## Common

### Decision History原則

継承対象：

* Observation
* Decision
* Decision理由
* 成熟として残した背景
* 今後も保持すべき判断原則

扱い方：

* Decisionだけを継承しない
* 理由まで理解する
* 過去Decisionを現在へ強制適用しない
* 現在案件に必要な判断材料として接続する
* 現在SoTと不整合なら確認する

### Common Decision History対象

* Constitution成熟
* Product成熟

### Common Current State

最低限保持するもの：

* 現在Phase
* 現在案件
* 案件状態
* 現在Stage
* 前工程成果物
* Product Owner Decisionの有無
* 停止条件
* 未反映差分
* Maturity状態
* Git状態
* 次工程候補

Current StateはDecision Historyと分離し、現在位置のみを扱う。

---

## Module

### Module Name

purchase_motivation

### Module Decision History対象

* System成熟
* Operation成熟
* 全体設計Decision
* 横断整合レビュー
* Foundation成熟
* AI Design OS成熟

### Module Current State

purchase_motivationは、Common Current Stateに加えて、以下を現在判断へ接続する。

* fixed_core整理moduleとして定義されている。
* 補助decision更新レイヤーとして位置付けられている。
* 「decision更新基準」として存在することが定義されている。
* 購入動機を構造化し、判断軸を明確にするプロダクトとして定義されている。
* 「物件を選ぶ」ためではなく、「選び方を決める」ためのプロダクトとして定義されている。

* 「自分はなぜ家を買いたいのか」を構造化すること。
* 「decisionの固定核形成」を扱うこと。
* decision drift修正に影響し、「何を優先して判断するか」を再固定すること。
* 「何を本当に重視するか」を再整理すること。
* 購入動機を構造化し、判断軸を明確にし、意思決定の精度と納得感を高めること。
* 「何を基準にdecisionすべきか」を整理すること。
* 固定核と可変条件を分離して扱うこと。

* 購入動機を構造化し、判断軸を明確にすること。
* 「自分はなぜ家を買いたいのか」を構造化すること。
* 「何を本当に重視するか」を再整理すること。
* 「何を基準にdecisionすべきか」を整理すること。

* fixed_core整理module。
* 補助decision更新レイヤー。
* 「decision更新基準」として存在する。
* 「物件を選ぶ」ためではなく、「選び方を決める」ためのプロダクト。

* ユーザーの回答

* 購入動機（要約）
* 必要条件
* 十分条件
* 判断軸の優先順位
* 注意すべきズレ
* 次に確認すべきこと
* トリガー
* 固定核
* 可変条件
* 判断軸
* あなたのタイプとの関係
* 現在地コメント
* 次の現実接触（CTA）
* decision現在地表示

---

## Knowledge

### 主要判断原則

Formation材料なし

### Module SoT

* projects/iekau/products/purchase_motivation/README.md
* projects/iekau/products/purchase_motivation/product_concept.md
* projects/iekau/products/purchase_motivation/question_design.md
* projects/iekau/products/purchase_motivation/diagnosis_logic.md
* projects/iekau/products/purchase_motivation/output_logic.md
* projects/iekau/products/purchase_motivation/result_screen.md
* projects/iekau/products/purchase_motivation/ui_flow.md
* projects/iekau/products/purchase_motivation/discomfort_connection.md
* projects/iekau/products/purchase_motivation/property_reader_connection.md

### Module Repository

* projects/iekau/products/purchase_motivation/

---

## Boundary

### Decision History Boundary

Decision Historyは、過去Decisionを現在へ強制適用しない。

Decision Historyは、現在案件に必要な判断材料として接続する。

Decision Historyは、現在SoTと不整合なら確認する。

### Current State Boundary

Current StateはDecision Historyと分離し、現在位置のみを扱う。

Current Stateは、過去Decisionの蓄積そのものを扱わない。

### Product Owner Boundary

Formation材料なし

### Codex Boundary

Formation材料なし

### General Design GPT Boundary

Formation材料なし

### Knowledge Boundary

Formation材料なし

### Authority Boundary

Formation材料なし

### Non Responsibility

* 条件ランキングは行わない。
* 自動最適化は行わない。
* 物件推薦は行わない。
* 「あなたに最適」の提示は行わない。
* メイン導線ではなく、decision更新時に必要に応じて呼び出される補助層として定義されている。

---

## Loading

### 読み込み対象

Formation材料なし

### 読み込み目的

Formation材料なし

---

## Transfer

### Transfer対象

Formation材料なし

### Transfer目的

Formation材料なし

---

## Connected Modules

### System成熟

Formation材料なし

### Operation成熟

Formation材料なし

### Foundation成熟

Formation材料なし

### AI Design OS成熟

Formation材料なし

---

## Learning

### Learning Stage

Formation材料なし

### Learning対象.md

* projects/iekau/products/purchase_motivation/README.md
* projects/iekau/products/purchase_motivation/product_concept.md
* projects/iekau/products/purchase_motivation/question_design.md
* projects/iekau/products/purchase_motivation/diagnosis_logic.md
* projects/iekau/products/purchase_motivation/output_logic.md
* projects/iekau/products/purchase_motivation/result_screen.md
* projects/iekau/products/purchase_motivation/ui_flow.md
* projects/iekau/products/purchase_motivation/discomfort_connection.md
* projects/iekau/products/purchase_motivation/property_reader_connection.md

### Stageごとの到達状態

Formation材料なし

---

## 完了条件

Formation材料なし