system

Updated: 2026-06-28

Status: Active

Purpose

本ディレクトリは、

Constitutionで定義された思想を、

システム設計へ変換するための設計書を管理する。

Systemは、

思想そのものを定義しない。

Constitutionを実装・設計へ適用するための構造を定義する。

⸻

Scope

Systemが扱うもの

* decision構造
* STATE構造
* module責務
* module間接続
* decision flow
* UI責務
* CTA責務
* 設計ルール
* 監査ルール

Systemが扱わないもの

* プロダクト思想
* 判断思想
* 体験思想
* 受渡思想
* チャネル思想

これらはConstitutionで定義される。

⸻

Relationship

Constitution

↓

System

↓

Module

↓

Implementation

Systemは、

Constitutionを最初に参照する。

Moduleは、

Systemを前提として設計される。

Implementationは、

Module責務を実装する。

⸻

Design Principle

Systemは、

「何を実装するか」

ではなく、

「どのような責務として構造化するか」

を定義する。

思想はConstitution、

責務はSystem、

実装はImplementationで管理する。

⸻

Directory Overview

本ディレクトリには、

以下のような設計書を配置する。

Decision

* decision_framework.md
* decision_reason_design.md
* decision_update_triggers.md

State

* state_definition.md
* state_detection.md
* state_to_action_routing.md
* state_to_cta_connection.md

Module Roles

* comparison_role.md
* decision_os_role.md
* external_property_search.md
* product_connection_design.md

UX / CTA

* cta_role.md
* cta_strategy.md
* content_roles.md
* product_roles.md

Monitoring

* drift_detection.md
* event_tracking.md
* kpi_metrics.md
* release_checklist.md

Future

* future_expansion.md
* future_phase_findings.md
* history.md

⸻

Change Policy

Systemは、

Constitutionの下位設計である。

Systemは、

Constitutionと矛盾してはならない。

思想変更が必要な場合は、

SystemではなくConstitutionを見直す。

System内の変更は、

Constitutionとの整合性を維持した上で行う。
