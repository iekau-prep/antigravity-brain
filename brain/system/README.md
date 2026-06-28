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

設計、

責務、

接続、

ルールへ変換することを目的とする。

⸻

Scope

Systemが扱うもの

* decision構造
* STATE構造
* reason構造
* fixed_core接続
* module責務
* module間接続
* decision flow
* CTA責務
* UI責務
* Monitoring
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

ConstitutionとModuleを接続する中間レイヤーとして機能する。

⸻

Directory Overview

System配下では、

設計書を責務ごとに管理する。

⸻

Decision

decision構造を定義する。

例

* decision_framework.md
* decision_reason_design.md
* decision_update_triggers.md

⸻

State

現在状態と判断状態を定義する。

例

* state_definition.md
* state_detection.md
* state_to_cta_connection.md
* state_to_action_routing.md

⸻

Module Roles

各Moduleの責務を定義する。

例

* comparison_role.md
* decision_os_role.md
* product_roles.md
* external_property_search.md

⸻

Connection

Module間の接続構造を定義する。

例

* product_connection_design.md
* fixed_core_definition.md

⸻

UX / CTA

判断体験を支える設計を定義する。

例

* cta_role.md
* cta_strategy.md
* content_roles.md

⸻

Monitoring

判断状態の観察・監査を定義する。

例

* drift_detection.md
* event_tracking.md
* kpi_metrics.md
* release_checklist.md

⸻

Future

将来拡張や履歴管理を扱う。

例

* future_expansion.md
* future_phase_findings.md
* history.md

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
