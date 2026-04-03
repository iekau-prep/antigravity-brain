# md_structure_tree.md
Updated: 2026-04-04
Status: Active

=============================

■ 概要

=============================

本ドキュメントは、

👉 家買う予備校における md 設計構造の全体マップ

を定義する。

目的は、

・構造の把握
・引き継ぎの容易化
・読み込み判断の効率化

である。

---

=============================

■ 全体構造

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
│
│  └─ system/
│     ├─ character_usage.md
│     ├─ content_roles.md
│     ├─ cta_strategy.md
│     ├─ state_detection.md
│     ├─ state_to_cta_connection.md
│     ├─ decision_framework.md
│     ├─ funnel_and_line_strategy.md
│     ├─ funnel_logic.md
│     ├─ kpi_metrics.md
│     ├─ line_strategy.md
│     ├─ monetization.md
│     ├─ product_connection_design.md
│     ├─ rent_vs_buy_completion_definition.md
│     ├─ rent_vs_buy_rename_checklist.md
│     ├─ user_data_strategy.md
│
│     └─ research_database/
│        ├─ composite_logic.md
│        ├─ ground.md
│        ├─ repair_fund.md
│        └─ unit_count.md
│
├─ content/
│  └─ （未使用 or 拡張予定）
│
├─ projects/
│  └─ iekau/
│     └─ products/
│
│        ├─ type_diagnosis/
│        │  ├─ cta_strategy.md
│        │  ├─ diagnosis_logic.md
│        │  ├─ pairing_logic.md
│        │  ├─ product_concept.md
│        │  ├─ rabbit_types.md
│        │  ├─ state_labels.md
│        │  └─ ui_result_flow.md
│
│        ├─ purchase_motivation/
│        │  ├─ product_concept.md
│        │  ├─ diagnosis_logic.md
│        │  ├─ question_design.md
│        │  ├─ output_logic.md
│        │  ├─ ui_flow.md
│        │  ├─ result_screen.md
│        │  ├─ discomfort_connection.md
│        │  └─ property_reader_connection.md
│
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
│        │  └─ ux_flow.md
│
│        ├─ rent_vs_buy/
│        │  ├─ character_templates.md
│        │  ├─ diagnosis_logic.md
│        │  ├─ rabbit_types.md
│        │  ├─ state_labels.md
│        │  └─ ui_result_flow.md
│
│        └─ loan_safety/
│           ├─ character_templates.md
│           ├─ diagnosis_logic.md
│           ├─ state_labels.md
│           └─ ui_result_flow.md
│
├─ resources/
│
├─ strategy/
│
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

■ 最重要ルール

=============================

迷ったら：

👉 共通ロジック → brain/system  
👉 個別設計 → products  
👉 実装 → tools  

---

=============================

■ 最終定義

=============================

md_structure_treeとは、

👉 設計資産の配置図であり  
👉 判断OSの地図である
