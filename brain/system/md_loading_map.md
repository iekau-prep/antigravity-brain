# md_loading_map.md
Updated: 2026-05-25
Status: Core

=============================

■ 概要

=============================

本ドキュメントは、

👉 作業内容ごとに
「どのmdを読むべきか」

を定義する。

目的は、

・最小読み込み  
・責務分離維持  
・decision構造維持  
・drift防止  
・AI精度安定化  
・引き継ぎ効率化  

である。

---

重要：

家買う予備校は、

❌ 単発UI群  
❌ 単発診断群  
❌ 無秩序なmd集合  

ではない。

---

⭕ 「decision loop OS」

である。

---

そのため：

❌ 関係ないmdを大量投入

すると、

・責務混線  
・STATE崩壊  
・CTA崩壊  
・drift概念崩壊  
・comparison役割崩壊  

が発生する。

---

つまり：

👉 「必要なものだけ読む」

ことが、
OS維持において最重要。

---

=============================

■ 最重要ルール（超重要）

=============================

① 全部読ませない  

---

② 必須だけ読む  

---

③ systemを優先する  

---

④ decisionに関係するものを優先する（最重要）

---

⑤ products側だけ読ませない

---

⑥ drift / STATE / CTA を
products側で再定義させない

---

⑦ UI改善でも、
decision構造を先に確認する

---

重要：

❌ 読み込み量 = 精度

ではない。

---

⭕ 「責務整合」

が精度。

---

=============================

■ 現在のOS中核（重要）

=============================

現在のOS中核は：

・decision progression  
・fixed_core  
・current decision  
・本命形成  
・drift整理  
・現実接触  
・CTA = decision update trigger  

である。

---

そのため、

以下system群は現在の最重要コア。

---

■ 最重要system群（2026-05時点）

- decision_framework.md  
- state_definition.md  
- state_to_cta_connection.md  
- drift_detection.md  
- discomfort_connection.md  
- decision_update_triggers.md  
- comparison_role.md  
- decision_os_role.md  

---

重要：

迷ったら：

👉 まずここを読む。

---

=============================

■ 読み込み優先順位（重要）

=============================

① brain/system（共通OS構造）  

---

② 対象プロダクト  

---

③ 接続系  

---

④ UI  

---

重要：

❌ UIから読む

ではない。

---

⭕ 「decision構造」
→ 「プロダクト翻訳」
→ 「UI」

の順。

---

=============================

■ 最重要テンプレ（これだけ覚えればOK）

=============================

=============================

■ UI触る時

=============================

必須：

- decision_framework.md  
- state_definition.md  
- state_to_cta_connection.md  
- 対象productのui系md  

---

理由：

UIでも：

・STATE  
・CTA  
・decision progression  

を壊す可能性があるため。

---

=============================

■ ロジック触る時

=============================

必須：

- decision_framework.md  
- state_definition.md  
- drift_detection.md  
- diagnosis_logic.md  
- output_logic.md  

---

補助：

- discomfort_connection.md  
- decision_update_triggers.md  

---

=============================

■ drift関連触る時（超重要）

=============================

必須：

- drift_detection.md  
- discomfort_connection.md  
- decision_framework.md  
- comparison_role.md  

---

理由：

現在：

❌ future恐怖

ではなく、

⭕ current drift
⭕ fixed_core drift
⭕ decision progression drift

を中心としているため。

---

=============================

■ CTA触る時（超重要）

=============================

必須：

- state_definition.md  
- state_to_cta_connection.md  
- decision_framework.md  
- cta_role.md  

---

補助：

- decision_update_triggers.md  
- comparison_role.md  

---

重要：

CTAは：

❌ 導線

ではない。

---

⭕ decision update trigger

として扱う。

---

=============================

■ STATE触る時（超重要）

=============================

必須：

- state_definition.md  
- state_detection.md  
- state_to_cta_connection.md  
- decision_framework.md  

---

補助：

- drift_detection.md  
- decision_os_role.md  

---

重要：

STATEは：

❌ UI状態

ではない。

---

⭕ 「未整理decision領域」

である。

---

=============================

■ comparison触る時（超重要）

=============================

必須：

- comparison_role.md  
- decision_framework.md  
- drift_detection.md  
- state_to_cta_connection.md  

---

補助：

- discomfort_connection.md  
- property_reader/comparison_flow.md  

---

重要：

comparisonは：

❌ 勝敗決定

ではない。

---

⭕ 本命形成 + drift整理

である。

---

=============================

■ decision_OS触る時（最重要）

=============================

必須：

- decision_os_role.md  
- decision_framework.md  
- state_definition.md  
- state_to_cta_connection.md  
- drift_detection.md  
- decision_update_triggers.md  

---

補助：

- decision_os/concept.md  
- decision_os/ux_flow.md  
- user_data_strategy.md  

---

重要：

decision_OSは：

❌ dashboard

ではない。

---

⭕ 「decision現在地OS」

である。

---

=============================

■ property_reader触る時（超重要）

=============================

必須：

- property_reader/product_concept.md  
- property_reader/ux_flow.md  
- property_reader/scoring_logic.md  
- property_reader/rules_definition.md  
- property_reader/prompts_and_rules.md  
- property_reader/state_labels.md  

---

補助：

- drift_detection.md  
- discomfort_connection.md  
- comparison_role.md  
- property_reader/comparison_flow.md  

---

重要：

property_readerは：

❌ 物件採点機

ではない。

---

⭕ 本命形成 + 現実接触decision module

である。

---

=============================

■ loan_safety触る時

=============================

必須：

- loan_safety/diagnosis_logic.md  
- loan_safety/state_labels.md  
- decision_framework.md  
- drift_detection.md  

---

補助：

- discomfort_connection.md  
- state_to_cta_connection.md  

---

重要：

loan_safetyは：

❌ 不安生成

ではない。

---

⭕ 現実接触 + 許容整理

である。

---

=============================

■ purchase_motivation触る時

=============================

必須：

- purchase_motivation/diagnosis_logic.md  
- purchase_motivation/output_logic.md  
- purchase_motivation/discomfort_connection.md  
- decision_framework.md  
- drift_detection.md  

---

補助：

- property_reader_connection.md  
- state_definition.md  

---

重要：

purchase_motivationは：

❌ 条件整理

ではない。

---

⭕ fixed_core整理

である。

---

=============================

■ type_diagnosis触る時

=============================

必須：

- type_diagnosis/product_concept.md  
- diagnosis_logic.md  
- state_definition.md  

---

補助：

- pairing_logic.md  
- rabbit_types.md  

---

重要：

type_diagnosisは：

❌ MBTI遊び

ではない。

---

⭕ 「どうdriftしやすいか」

を理解する入口。

---

=============================

■ external導線触る時

=============================

必須：

- external_property_search.md  
- product_connection_design.md  
- state_to_cta_connection.md  

---

補助：

- property_reader/ux_flow.md  
- decision_framework.md  

---

重要：

externalは：

❌ 集客入口

だけではない。

---

⭕ decision loop入口

である。

---

=============================

■ LINE設計触る時

=============================

必須：

- line_strategy.md  
- funnel_and_line_strategy.md  
- user_data_strategy.md  
- decision_framework.md  

---

補助：

- decision_os_role.md  
- drift_detection.md  

---

重要：

LINEは：

❌ メルマガ

ではない。

---

⭕ decision continuity layer

である。

---

=============================

■ OS横断改善触る時（最重要）

=============================

必須：

- decision_framework.md  
- state_definition.md  
- state_to_cta_connection.md  
- drift_detection.md  
- discomfort_connection.md  
- comparison_role.md  
- decision_os_role.md  
- decision_update_triggers.md  

---

補助：

- funnel_logic.md  
- product_connection_design.md  
- user_data_strategy.md  

---

重要：

ここを読まずに：

❌ UIだけ改善

すると、

decision loopが壊れる。

---

=============================

■ MVP実装時の優先順位（重要）

=============================

現在優先するもの：

① decision progression  
② STATE整合  
③ CTA整合  
④ drift整理  
⑤ 本命形成自然化  
⑥ fixed_core接続  

---

後回し：

❌ animation polish  
❌ copy polish  
❌ visual polish  
❌ gamification  
❌ KPI最適化  

---

重要：

現在は：

❌ conversion optimization phase

ではない。

---

⭕ 「decision loop stabilization phase」

である。

---

=============================

■ 引き継ぎテンプレ（超重要）

=============================

新しいAI環境へ引き継ぐ時：

以下順で渡す。

---

① やること

例：

comparison UXを改善したい

---

② 必須md

loading_mapから必要最低限だけ渡す。

---

③ 補助md

必要なものだけ追加。

---

④ 今回触っていい責務

例：

・CTA補助文言のみ  
・STATE変更禁止  
・drift定義変更禁止  

---

⑤ 禁止事項

例：

- STATE増殖禁止  
- recommendation禁止  
- CTA複数禁止  
- decision loop破壊禁止  
- 本命形成を勝敗比較化しない  
- future恐怖主役化禁止  

---

⑥ 出力ルール

例：

- 1ブロック  
- 差し替え位置明記  
- 簡略化禁止  
- 既存思想削除禁止  

---

=============================

■ NG（超重要）

=============================

❌ 無関係md大量投入  

---

❌ productsだけ読んでsystem無視  

---

❌ UIだけ見てdecision構造無視  

---

❌ driftを未来恐怖へ戻す  

---

❌ CTAをCV導線化する  

---

❌ comparisonを勝敗化する  

---

❌ STATEを進捗管理化する  

---

❌ decision_OSをdashboard化する  

---

❌ recommendation導入  

---

❌ 「買うべき」思想  

---

これらは：

👉 decision OS崩壊原因

になる。

---

=============================

■ 最終定義

=============================

md_loading_mapとは、

👉 作業目的に応じて  
👉 必要なmdだけを最小読み込みし  
👉 STATE・CTA・drift・本命形成・decision progressionの整合性を維持しながら  
👉 新しい実行環境でも
decision loop OSを壊さず作業を継続するための
読み込み運用設計である。

---

■ 一言でいうと

👉 「読みすぎを防ぎ、
decision OSの整合性を守るための運用マップ」
