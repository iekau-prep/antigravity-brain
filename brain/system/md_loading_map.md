# md_loading_map.md
Updated: 2026-04-04
Status: Active

=============================

■ 概要

=============================

👉 作業内容ごとに「どのmdを読むか」を定義する

👉 **最小読み込みで最大精度を出すための運用設計**

---

=============================

■ 最重要ルール

=============================

① 全部読ませない  
② 必須だけ読む  
③ systemを優先  
④ decisionに関係するものを優先（追加・最重要）

---

👉 **読みすぎるほど精度は落ちる**

---

=============================

■ 読み込み優先順位（追加）

=============================

① brain/system（共通ロジック）  
② 対象プロダクト  
③ 接続系  
④ UI  

---

👉 **迷ったら system を先に読む**

---

=============================

■ 最重要テンプレ（これだけ覚えればOK）

=============================

👉 UI触る時

- result_screen.md
- ui_flow.md
- cta_strategy.md
- state_detection.md

---

👉 ロジック触る時

- diagnosis_logic.md
- output_logic.md
- decision_framework.md

---

👉 接続触る時

- product_connection_design.md
- state_to_cta_connection.md
- line_strategy.md

---

👉 property_reader触る時（追加）

- product_concept.md
- ux_flow.md
- scoring_logic.md
- rules_definition.md

---

👉 decision周り触る時（追加・最重要）

- user_data_strategy.md
- history_structure.md
- comparison_flow.md

---

=============================

■ 用途別

=============================

## ① purchase_motivation UI

必須：
- result_screen.md
- output_logic.md
- ui_flow.md
- cta_strategy.md
- state_detection.md

---

## ② type診断

必須：
- product_concept.md
- diagnosis_logic.md
- cta_strategy.md

補助：
- pairing_logic.md
- ui_result_flow.md

---

## ③ property_reader

必須：
- product_concept.md
- ux_flow.md
- scoring_logic.md
- rules_definition.md

補助：
- data_connection.md
- prompts_and_rules.md
- screen_structure.md

---

## ④ property_reader（比較 / 履歴）

必須：
- history_structure.md
- comparison_flow.md
- user_data_strategy.md

---

👉 **ここがOSの中核**

---

## ⑤ CTA改善

必須：
- cta_strategy.md
- state_detection.md
- state_to_cta_connection.md

---

## ⑥ LINE設計

必須：
- line_strategy.md
- funnel_and_line_strategy.md
- cta_strategy.md

補助：
- user_data_strategy.md

---

## ⑦ OS設計 / 横断改善（追加）

必須：
- user_data_strategy.md
- funnel_logic.md
- decision_framework.md

---

👉 **全体思想を壊さないためのセット**

---

=============================

■ 引き継ぎ用テンプレ

=============================

新しい実行環境に作業を引き継ぐときは、以下の順で渡す。

---

### 1. やること
例：
property_reader の比較UXを改善したい

---

### 2. 必須md
loading mapから該当する必須ファイルのみ渡す

---

### 3. 補助md
必要最低限だけ追加する

---

### 4. 禁止事項
例：

- 構造変更しない  
- 実装の話に行きすぎない  
- 既存思想を壊さない  
- 指定されていないファイルを勝手に編集しない  
- decision構造を壊さない（追加・最重要）  

---

### 5. 出力ルール

例：

- 1ブロックで出す  
- ネストなしで出す  
- 差し替え位置を明記する  
- 既存を消さず追記する（原則）  

---

=============================

■ NG（追加）

=============================

- 無関係なmdを読み込む  
- UIなのにロジックをいじる  
- ロジックなのにUXを変える  
- decisionを考慮しない変更  

---

👉 **精度が崩れる原因**

---

=============================

■ 最終定義

=============================

md_loading_mapとは、

👉 作業目的に応じて  
👉 必要なmdだけを読み分け  
👉 decision構造を維持しながら  
👉 新しい実行環境でも正確に作業を再開するための運用マップである

---

■ 一言でいうと

👉 「読みすぎを防ぎ、精度を守るための設計」
