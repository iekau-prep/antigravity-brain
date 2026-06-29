md_structure_tree.md
Updated: 2026-06-29
Status: Active

⸻

Purpose
本書は、
antigravity-brain 全体の構造を定義する 最上位の構造マップである。
本書は、
Constitutionで定義された思想を、
System、
Module、
Implementation
へ正しく接続するための ディレクトリ構造と責務を定義する。
目的は、
* ディレクトリ構造の統一
* 責務境界の固定
* 読み込み順序の統一
* 保守性の維持
* AI・開発者双方が同じ構造を参照できる状態を維持すること
である。
本書は、
個別思想や実装内容ではなく、
brain全体の構造そのものを定義する。

⸻

Scope
本書が扱うもの
* ディレクトリ構造
* レイヤー構造
* Constitution / System / Module / Implementation の責務
* 配置ルール
* 読み込み順
* 設計資産の位置付け
本書が扱わないもの
* 判断思想
* UX設計
* UI仕様
* module個別責務
* 実装方法
これらは各レイヤーの設計書で定義する。

⸻

Relationship
本書は、
brain全体を以下の階層で整理する。
Constitution
        │
        ▼
System
        │
        ▼
Module
        │
        ▼
Implementation
各レイヤーの責務は以下とする。
Constitution
思想を定義する。
「何を目指すか」
「何を扱うか」
「何を扱わないか」
を固定する。

⸻

System
Constitutionを設計へ翻訳する。
責務、
接続、
構造、
ルールを定義する。

⸻

Module
各プロダクト・各機能へ Systemを適用する。
UI・UX・画面責務・データ責務などを定義する。

⸻

Implementation
Module設計をコードへ反映する。
実装はModule責務を超えてはならない。

⸻

Design Principle
本ディレクトリは、
「ファイルを管理する場所」
ではない。
設計思想を 責務単位で管理する場所である。
そのため、
構造は常に
Constitution
↓
System
↓
Module
↓
Implementation
の流れを維持する。
下位レイヤーは、
上位レイヤーを変更しない。
Constitutionは思想を定義する。
Systemは思想を設計へ翻訳する。
ModuleはSystemを個別プロダクトへ適用する。
ImplementationはModule責務のみを実装する。
責務が混在した場合は、
必ず上位レイヤーへ戻って整理する。

⸻

ディレクトリ全体構造
antigravity-brain/

├── constitution/
│
│   ├── README.md
│   ├── constitution_experience.md
│   ├── constitution_decision.md
│   ├── constitution_module.md
│   ├── constitution_implementation.md
│   └── ...
│
├── brain/
│
│   ├── core/
│   │
│   ├── system/
│   │
│   └── research_database/
│
├── projects/
│
│   └── iekau/
│       └── products/
│
├── tools/
│
├── resources/
│
└── strategy/

⸻

各レイヤーの役割
Constitution
思想を定義する。
例：
* 判断思想
* decision思想
* fixed_core思想
* 体験思想
* module思想

⸻

System
思想を設計へ翻訳する。
例：
* decision_framework
* decision_loop_core_summary
* history
* event_tracking
* kpi_metrics
* user_data_strategy
* product_connection_design
* cta_strategy
* line_strategy
* monetization
* onboarding_design
* release_checklist
* security_policy
* ui_event_mapping

⸻

Module
各プロダクト固有の責務を定義する。
例：
* property_reader
* comparison
* decision_OS
* purchase_motivation
* rent_vs_buy
* loan_safety
* type_diagnosis

⸻

Implementation
Module責務をコードへ反映する。
例：
* Next.js
* API
* Database
* UI
* Component
* Routing
* State Management
Implementationは、
Constitutionを直接参照しない。
必ず
Constitution
↓
System
↓
Module
↓
Implementation
の順で責務を継承する。



⸻

System配下の責務
Systemは、
Constitutionで定義された思想を、
設計可能な責務へ変換するレイヤーである。
Systemは、
「何を実装するか」
ではなく、
「どの責務として構造化するか」
を定義する。
Systemで扱うもの

Systemは、Constitutionで定義された思想を、

設計可能な責務へ変換するレイヤーである。

Systemは、

「何を実装するか」

ではなく、

「どの責務として構造化するか」

を定義する。

Systemで扱うもの

* decision構造
* current decision
* decision continuity
* STATE構造
* history
* fixed_core
* reason構造
* drift構造
* module connection
* CTA構造
* Monitoring構造
* Governance構造

Systemで扱わないもの

* Constitution思想
* Product固有仕様
* UI詳細
* API設計
* Database設計
* 実装ロジック

Systemは、

Module全体の共通基盤として機能する。

⸻

Module配下の責務
Moduleは、
Systemで定義された責務を、
各プロダクトへ適用するレイヤーである。
Moduleでは、
各プロダクト固有の
* UX
* UI
* Screen構造
* Flow
* Input
* Output
* Product Rule
を定義する。
Moduleで扱うもの
* product_concept
* ux_flow
* screen_structure
* state_labels
* data_connection
* diagnosis_logic
* feature_scope
* prompts
* module README
Moduleで扱わないもの
* Constitution思想
* System思想
* 他Module責務
* 共通decision構造
Moduleは、
Systemを再定義してはならない。
Systemを前提として、
各プロダクトへ翻訳する責務のみを持つ。

⸻

Implementationの責務
Implementationは、
Module設計をコードへ反映するレイヤーである。
Implementationで扱うもの
* Frontend
* Backend
* API
* Routing
* Database
* Component
* Styling
* State Management
Implementationでは、
Module責務のみを実装する。
Implementationは、
独自に思想を追加しない。
Systemを書き換えない。
Module責務を変更しない。
実装判断は、
必ずModuleまで戻って整理する。

⸻

Constitutionとの関係
本構造は、
Constitutionを最上位とする。
責務の流れは、
Constitution
        ↓
System
        ↓
Module
        ↓
Implementation
となる。
各レイヤーは、
上位レイヤーを参照する。
下位レイヤーから、
上位レイヤーを書き換えてはならない。
判断思想は、
Constitutionのみが保持する。
Systemは、
その思想を設計へ翻訳する。
Moduleは、
設計を各プロダクトへ適用する。
Implementationは、
Module設計のみを実装する。
この責務分離を維持することを、
brain全体の最重要ルールとする。

⸻

読み込み順
新規設計、
レビュー、
実装、
AIへの読み込みを行う場合は、
以下の順番を維持する。
① Constitution

↓

② System

↓

③ Module

↓

④ Implementation
さらに、
System内では、
以下を基本順序とする。
decision_framework

↓

Core Decision Systems
(current decision / fixed_core / history)

↓

State Systems
(state_definition / state_detection)

↓

Connection Systems
(product_connection_design /
decision_loop_core_summary)

↓

Interaction Systems
(cta /
line /
onboarding /
ui_event_mapping)

↓

Monitoring Systems
(event_tracking /
kpi_metrics)

↓

Governance Systems
(release /
security /
future)

Moduleでは、
以下の順で参照する。
product_concept

↓

ux_flow

↓

screen_structure

↓

data_connection

↓

implementation
読み込み対象は、
常に必要最小限とする。
大量の設計書を一括で読み込むのではなく、
今回の作業範囲に必要な責務だけを読み込むことを原則とする。
本書は、
その読み込み順の基準書としても機能する。


⸻

ディレクトリ一覧（最新版）
現在の antigravity-brain は、
以下のレイヤー構造で管理する。
antigravity-brain/

├── constitution/
│
│   ├── README.md
│   ├── constitution_experience.md
│   ├── constitution_decision.md
│   ├── constitution_module.md
│   ├── constitution_implementation.md
│   └── ...
│
├── brain/
│
│   ├── core/
│   │
│   ├── system/
│   │   ├── README.md
│   │   ├── decision_framework.md
│   │   ├── decision_reason_design.md
│   │   ├── decision_update_triggers.md
│   │   ├── state_definition.md
│   │   ├── state_detection.md
│   │   ├── state_to_cta_connection.md
│   │   ├── state_to_action_routing.md
│   │   ├── comparison_role.md
│   │   ├── decision_os_role.md
│   │   ├── product_connection_design.md
│   │   ├── product_roles.md
│   │   ├── cta_role.md
│   │   ├── content_roles.md
│   │   ├── drift_detection.md
│   │   ├── fixed_core_definition.md
│   │   ├── external_property_search.md
│   │   └── ...
│   │
│   └── research_database/
│
├── projects/
│   └── iekau/
│       └── products/
│           ├── property_reader/
│           ├── comparison/
│           ├── decision_os/
│           ├── purchase_motivation/
│           ├── rent_vs_buy/
│           ├── loan_safety/
│           └── type_diagnosis/
│
├── resources/
│
├── strategy/
│
└── tools/
各ディレクトリは、
責務ごとに分離され、
同一責務を複数レイヤーで重複定義しない。

⸻

Rule
brain全体では、
以下を共通ルールとする。
1. 上位責務を変更しない
Implementationは、
Moduleを書き換えない。
Moduleは、
Systemを書き換えない。
Systemは、
Constitutionを書き換えない。

⸻

2. 責務を重複させない
同じ概念を、
複数ファイルで定義しない。
思想はConstitution、
設計はSystem、
個別仕様はModule、
コードはImplementationで管理する。

⸻

3. 下位で思想を追加しない
ImplementationやModuleは、
独自思想を生成しない。
思想追加が必要な場合は、
Constitutionから見直す。

⸻

4. Systemを唯一の設計基準とする
Moduleは、
Systemを前提として設計する。
同一責務を、
Module側で再定義してはならない。

⸻

5. 読み込みは必要最小限とする
大量の設計書を読むことを前提にしない。
作業対象に必要な責務のみを読み込む。
本書と md_loading_map.md を基準とする。

⸻

6. 命名を統一する
brain全体では、
正式名称を統一する。
例
* property_reader.md
* comparison_role.md
* decision_framework.md
旧名称、
仮名称、
責務名違いは使用しない。

⸻

Change Policy
本書は、
brain全体の構造定義書である。
そのため、
個別Module追加や、
ファイル追加のみでは、
本書を変更しない。
以下の場合のみ更新対象とする。
* レイヤー構造変更
* ディレクトリ構成変更
* 責務階層変更
* 読み込み順変更
* Constitutionとの接続変更
それ以外の変更は、
各設計書で管理する。
本書は、
brain全体の構造を示す基準書として維持する。

⸻

最終定義
md_structure_treeとは、
Constitutionで定義された思想を、
System、
Module、
Implementationへ一貫して接続するための、
antigravity-brain全体の構造定義書である。
本書は、
各設計書の内容ではなく、
設計資産全体の配置、
責務、
階層、
接続関係を管理する。
これにより、
思想、
設計、
Module、
実装が一方向に継承され、
責務の重複や矛盾を防ぎながら、
長期的に保守可能なbrain構造を維持する。

