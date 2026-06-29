README

Updated: 2026-06-29

Status: Active

⸻

Purpose

本ディレクトリは、

Constitutionで定義された思想を、

System設計へ翻訳するための設計書を管理する。

Systemは、

思想そのものを定義しない。

Constitutionを、

責務、

構造、

接続、

ルールへ変換することを目的とする。

Systemは単なる設計書一覧ではない。

各Systemは責務ごとに独立し、

Constitutionで定義された思想を、

ModuleとImplementationへ一貫して接続するための

共通設計基盤として管理する。

⸻

Scope

Systemが扱うもの

* decision構造
* current decision
* decision continuity
* STATE構造
* history
* fixed_core
* reason構造
* drift構造
* Module接続
* Interaction構造
* Monitoring構造
* Governance構造
* 設計ルール

Systemが扱わないもの

* Constitution思想
* プロダクト思想
* 判断思想
* UX思想
* 実装方法
* コード

思想はConstitution、

個別仕様はModule、

実装はImplementationで管理する。

⸻

Relationship

Systemは、

以下の責務階層に従う。

Constitution

↓

System

↓

Module

↓

Implementation

Constitutionは、

「何を目指すか」

を定義する。

Systemは、

「どの責務として構造化するか」

を定義する。

Moduleは、

「各プロダクトへどう適用するか」

を定義する。

Implementationは、

「どのように実装するか」

を定義する。

Systemは、

ConstitutionとModuleを接続する

中間レイヤーとして機能する。

⸻

Directory Overview

System配下では、

設計書を責務ごとに管理する。

⸻

Core Decision Systems

判断形成の共通構造を定義する。

例

* decision_framework.md
* decision_reason_design.md
* decision_update_triggers.md
* history.md
* drift_detection.md

⸻

State Systems

現在状態と判断状態を定義する。

例

* state_definition.md
* state_detection.md
* state_to_cta_connection.md
* state_to_action_routing.md

⸻

Connection Systems

Module間の接続構造を定義する。

例

* product_connection_design.md
* fixed_core_definition.md
* decision_loop_core_summary.md

⸻

Module Role Systems

各Moduleの責務を定義する。

例

* comparison_role.md
* decision_os_role.md
* product_roles.md
* external_property_search.md

⸻

Interaction Systems

判断体験を支えるInteractionを定義する。

例

* cta_role.md
* cta_strategy.md
* line_strategy.md
* onboarding_design.md
* content_roles.md
* ui_event_mapping.md

⸻

Monitoring Systems

判断形成状態の観察・計測・公開確認を定義する。

例

* event_tracking.md
* kpi_metrics.md
* release_checklist.md

⸻

Governance Systems

運用・管理・全体方針を定義する。

例

* security_policy.md
* user_data_strategy.md
* monetization.md

⸻

Future Systems

将来検討事項を管理する。

例

* future_expansion.md
* future_phase_findings.md

⸻

Reading Guide

Systemを利用する場合は、

必ず以下の順序を維持する。

Constitution

↓

README（本書）

↓

md_structure_tree.md

↓

md_loading_map.md

↓

対象System

↓

対象Module

↓

Implementation

詳細な構造は、

md_structure_tree.md を参照する。

読み込み運用は、

md_loading_map.md を参照する。

⸻

Design Principle

Systemは、

「何を実装するか」

ではなく、

「どの責務として設計するか」

を定義する。

思想を追加しない。

実装を保持しない。

個別Moduleを再定義しない。

Constitutionを唯一の思想基準とし、

Moduleを唯一のプロダクト設計基準とする。

⸻

Rule

Systemでは、

以下を共通ルールとする。

* Constitutionを変更しない
* Module責務を再定義しない
* Implementationを含めない
* 同一責務を複数ファイルで定義しない
* 責務単位で設計を管理する
* 必要最小限の設計書のみを読み込む

⸻

Change Policy

Systemは、

Constitutionの下位設計である。

思想変更は、

Systemでは行わない。

思想変更が必要な場合は、

Constitutionを更新し、

その後Systemへ反映する。

System内の変更は、

Constitutionとの整合性を維持した上で行う。

⸻

最終定義

Systemとは、

Constitutionで定義された思想を、

責務、

構造、

接続、

設計ルールへ翻訳し、

各ModuleとImplementationへ一貫して継承するための設計レイヤーである。

本ディレクトリは、

brain全体の設計基盤として、

思想と実装を接続する責務を担う。
