# md_structure_tree.md
Updated: 2026-05-25
Status: Core

=============================

■ 概要

=============================

本ドキュメントは、

👉 家買う予備校における md 設計構造の全体マップ

を定義する。

目的は、

・構造の把握  
・責務分離の固定  
・引き継ぎの容易化  
・読み込み判断の効率化  
・decision OSとしての整合性維持  

である。

---

重要：

家買う予備校は、

❌ 単発診断群  
❌ 比較ツール群  
❌ 不動産情報整理群  

ではない。

---

⭕ 「decision loop OS」

である。

---

そのため本treeは：

❌ 機能単位

ではなく、

⭕ 「decision更新構造」

として整理する。

---

=============================

## ■ 全体構造

=============================

antigravity-brain/

├─ brain/  
│  
│  ├─ core/  
│  │  ├─ output_format.md  
│  │  ├─ persona.md  
│  │  ├─ principles.md  
│  │  ├─ product.md  
│  │  └─ task_contract.md  
│  │  
│  └─ system/  
│  
│     ├─ character_usage.md  
│     ├─ content_roles.md  
│     ├─ cta_role.md  
│     ├─ cta_strategy.md  
│     ├─ decision_framework.md  
│     ├─ decision_loop_core_summary.md  
│     ├─ decision_os_role.md  
│     ├─ decision_reason_design.md  
│     ├─ decision_update_triggers.md  
│     ├─ discomfort_connection.md  
│     ├─ drift_detection.md  
│     ├─ funnel_and_line_strategy.md  
│     ├─ funnel_logic.md  
│     ├─ kpi_metrics.md  
│     ├─ line_strategy.md  
│     ├─ md_loading_map.md  
│     ├─ md_structure_tree.md  
│     ├─ monetization.md  
│     ├─ product_connection_design.md  
│     ├─ comparison_role.md  
│     ├─ state_definition.md  
│     ├─ state_detection.md  
│     ├─ state_to_cta_connection.md  
│     ├─ state_to_action_routing.md  
│     ├─ user_data_strategy.md  
│     ├─ external_property_search.md  
│     │  
│     └─ research_database/  
│        ├─ composite_logic.md  
│        ├─ ground.md  
│        ├─ repair_fund.md  
│        └─ unit_count.md  

├─ content/  

├─ projects/  
│  └─ iekau/  
│     └─ products/  

│        ├─ decision_os/  
│        │  ├─ concept.md  
│        │  ├─ product_concept.md  
│        │  ├─ ux_flow.md  
│        │  ├─ state_integration.md（任意）  
│        │  ├─ cta_design.md（任意）  
│        │  └─ data_connection.md（任意）  

│        ├─ property_reader/  
│        │  ├─ comparison_flow.md  
│        │  ├─ data_connection.md  
│        │  ├─ feature_scope_mvp.md  
│        │  ├─ future_expansion.md  
│        │  ├─ history_structure.md  
│        │  ├─ input_strategy.md  
│        │  ├─ loan_safety_connection.md  
│        │  ├─ product_concept.md  
│        │  ├─ prompts_and_rules.md  
│        │  ├─ rules_definition.md  
│        │  ├─ scoring_logic.md  
│        │  ├─ screen_structure.md  
│        │  ├─ state_labels.md  
│        │  └─ ux_flow.md  

│        ├─ purchase_motivation/  
│        │  ├─ README.md  
│        │  ├─ diagnosis_logic.md  
│        │  ├─ discomfort_connection.md  
│        │  ├─ output_logic.md  
│        │  ├─ product_concept.md  
│        │  ├─ property_reader_connection.md  
│        │  ├─ question_design.md  
│        │  ├─ result_screen.md  
│        │  └─ ui_flow.md  

│        ├─ rent_vs_buy/  
│        │  ├─ character_templates.md  
│        │  ├─ diagnosis_logic.md  
│        │  ├─ rabbit_types.md  
│        │  ├─ state_labels.md  
│        │  └─ ui_result_flow.md  

│        ├─ loan_safety/  
│        │  ├─ character_templates.md  
│        │  ├─ diagnosis_logic.md  
│        │  ├─ state_labels.md  
│        │  └─ ui_result_flow.md  

│        └─ type_diagnosis/  
│           ├─ cta_strategy.md  
│           ├─ diagnosis_logic.md  
│           ├─ pairing_logic.md  
│           ├─ product_concept.md  
│           ├─ rabbit_types.md  
│           ├─ state_labels.md  
│           └─ ui_result_flow.md  

├─ resources/  

├─ strategy/  

└─ tools/  
   ├─ rent_vs_buy/  
   │  ├─ legacy/  
   │  ├─ README.md  
   │  └─ simple_calc.py  
   │  
   └─ rent_vs_buy_v2/  
      ├─ README.md  
      ├─ rent_vs_buy_design.md  
      ├─ index.html  
      ├─ CLAUDE.md  
      └─ .env.example  

---

=============================

■ system配下の責務（超重要）

=============================

brain/system は：

👉 家買う予備校の
「decision OS構造」

を定義する場所である。

---

ここでは：

・decisionとは何か  
・STATEとは何か  
・driftとは何か  
・CTAとは何か  
・comparisonとは何か  
・本命形成とは何か  

など、

👉 全プロダクト共通の思想責務

を扱う。

---

重要：

❌ UI実装詳細

は置かない。

---

⭕ 「OS側の構造」

を置く。

---

=============================

■ products配下の責務（超重要）

=============================

projects/iekau/products は：

👉 各decision moduleの
UI・UX・入力出力設計

を定義する場所である。

---

ここでは：

・result_screen  
・ux_flow  
・state_labels  
・diagnosis_logic  
・screen_structure  

など、

👉 実際にユーザーへどう体験させるか

を扱う。

---

重要：

❌ 共通OS思想

はここで再定義しない。

---

⭕ systemを前提として、
各プロダクトへ翻訳する。

---

=============================

■ tools配下の責務

=============================

tools は：

👉 実装・試作・検証

を扱う。

---

例：

・試作計算機  
・簡易UI  
・prototype  
・実験ロジック  

など。

---

重要：

❌ OS定義

は置かない。

---

⭕ 「動作確認領域」

として扱う。

---

=============================

■ 現在のOS中核構造（重要）

=============================

現在の家買う予備校は、

以下構造を中核としている。

---

感情  
↓  
構造理解  
↓  
現実接触  
↓  
本命形成  
↓  
decision更新  
↓  
drift  
↓  
再整理  
↓  
再decision  

---

重要：

❌ 一発決断OS

ではない。

---

⭕ 「decision progression OS」

として扱う。

---

=============================

■ 現在重要な責務分離（超重要）

=============================

今回の更新で、

以下責務を明確分離した。

---

■ STATE

👉 「今どのdecision整理が必要か」

---

■ state_label

👉 「現在地をどう表現するか」

---

■ decision_state

👉 「現在どのように迷っているか」

---

■ CTA

👉 「次のdecision update trigger」

---

■ drift

👉 「fixed_coreとcurrent decisionのズレ」

---

■ comparison

👉 「本命形成とdrift整理」

---

■ decision_OS

👉 「現在decision整理と
decision progression継続」

---

重要：

これらを：

❌ 混線させない。

---

=============================

■ LINE前後の構造（重要）

=============================

=============================

■ LINE未接続

=============================

扱うもの：

・単発整理  
・軽い現実接触  
・暫定decision  
・気づき生成  

---

目的：

👉 「decision整理を始める」

---

重要：

❌ 完全tracking

は行わない。

---

=============================

■ LINE接続後

=============================

扱うもの：

・decision履歴  
・comparison履歴  
・drift推移  
・fixed_core変化  
・本命形成  
・decision progression  

---

目的：

👉 「decision loop」

を成立させる。

---

重要：

LINEは：

❌ 保存

ではない。

---

⭕ 「decision continuity」

である。

---

=============================

■ 現在の重要モジュール（2026-05時点）

=============================

特に中核なのは以下。

---

■ decision_framework.md

👉 decisionとは何か  
👉 driftとは何か  
👉 本命形成とは何か  
👉 decision progressionとは何か  

を定義する。

---

■ state_definition.md

👉 STATEの責務定義。

---

■ state_to_cta_connection.md

👉 STATEを
decision triggerへ接続する。

---

■ drift_detection.md

👉 current drift
👉 fixed_core drift
👉 decision progression drift

を扱う。

---

■ discomfort_connection.md

👉 discomfortを
「decision drift signal」
として扱う。

---

■ decision_loop_core_summary.md

👉 decision loop全体要約。

---

=============================

■ decision_OS構造（重要）

=============================

現在の正しい構造：

external_property_search  
↓  
property_reader  
↓  
decision更新  
↓  
decision_OS  
↓  
comparison / drift整理  
↓  
再decision  

---

重要：

decision_OSは、

❌ dashboard

ではない。

---

⭕ 「decision現在地OS」

である。

---

=============================

■ 読み方ガイド

=============================

① 全体構造理解したい  
→ md_structure_tree.md（このファイル）

---

② OS思想を理解したい  
→ brain/system 配下

---

③ drift / STATE / CTA を理解したい  
→ decision_framework.md
→ state_definition.md
→ drift_detection.md
→ state_to_cta_connection.md

---

④ 実装ロジックを理解したい  
→ md_loading_map.md

---

⑤ UI/UXを設計したい  
→ projects/iekau/products 配下

---

⑥ decision_OSを理解したい  
→ decision_os_role.md
→ projects/iekau/products/decision_os/

---

⑦ property_readerを理解したい  
→ property_reader 配下

---

⑧ 実装・試作を触りたい  
→ tools 配下

---

=============================

■ 最重要ルール

=============================

迷ったら：

👉 共通OS思想 → brain/system  
👉 個別UX → products  
👉 実装 → tools  

---

さらに：

👉 drift  
👉 STATE  
👉 CTA  
👉 decision  
👉 comparison  

は、

❌ products側で再定義しない。

---

⭕ system側を唯一の基準とする。

---

=============================

■ 現在のフェーズ理解（重要）

=============================

現在は、

❌ visual polish phase

ではない。

---

⭕ 「decision loop自然循環確認フェーズ」

である。

---

そのため現在重要なのは：

・drift整理  
・本命形成  
・CTA整合  
・STATE整合  
・decision progression  
・fixed_core接続  
・comparison自然化  

など。

---

❌ microcopy polish  
❌ animation polish  
❌ hierarchy polish  

は後段。

---

=============================

■ 最終定義

=============================

md_structure_treeとは、

👉 設計資産の配置図であり  
👉 decision loop OSの責務分離図であり  
👉 drift・STATE・CTA・本命形成・decision progressionを
破綻させずに接続するための
家買う予備校の構造マップである。
