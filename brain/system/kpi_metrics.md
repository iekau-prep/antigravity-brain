# kpi_metrics.md

Updated: 2026-06-29

Status: Active

---

# Purpose

本書は、

Constitutionで定義された
判断形成思想を、

Systemにおける
Monitoring設計へ適用するための定義書である。

KPIとは何かは、
Constitutionでは扱わない。

本書は、

判断形成を観察・改善するために、
Systemとして何を計測するかを定義する。

---

# Scope

## 本書が扱うもの

- KPI設計
- Monitoring設計
- current decision観察
- decision continuity観察
- Module横断指標
- MVP計測方針
- 将来拡張方針

---

## 本書が扱わないもの

- 判断思想
- fixed_core思想
- decision生成
- recommendation
- UI改善
- KPI運用ルール

これらは、
Constitutionまたは
各System設計書で扱う。

---

# Relationship

Constitution

↓

System

↓

Monitoring

↓

Module

↓

Implementation

---

Constitutionは、
判断形成思想を定義する。

Systemは、
何を観察するかを定義する。

Monitoringは、
Systemで定義した構造を計測する。

Moduleは、
ユーザー本人による判断形成を支援し、
Monitoring対象となる行動・判断更新の結果を発生させる。

Implementationは、
Monitoring設計を実装する。

---

# Design Principle

KPIは、

成果を評価するためではなく、

判断形成が
System設計どおりに機能しているかを
観察するために存在する。

そのため、

KPIは、

クリック数、

PV、

滞在時間よりも、

current decision、

decision continuity、

Module接続、

decision更新可能状態

を優先して扱う。

Monitoringは、

ユーザーを評価しない。

System構造を評価する。

---

# KPIとは何か（Systemとしての役割）

SystemにおけるKPIとは、

プロダクト成果を測るための数字ではない。

判断形成構造が、

期待どおり循環しているかを
継続的に観察するための
Monitoring指標である。

KPIは、

current decisionが更新されたか、

decision continuityが維持されたか、

Module間接続が成立しているか、

判断形成が停止していないか、

を観察する。

KPI自身は、

decisionを生成しない。

recommendationを行わない。

UIを変更しない。

改善案を提示しない。

Monitoring対象としてのみ機能する。

# KPI Structure

Systemは、

KPIを、

成果指標ではなく、

判断形成構造を観察するための
Monitoring構造として扱う。

そのため、

KPIは、

以下の5つの観察対象で構成される。

---

## current decision Monitoring

観察対象：

- current decision更新
- 判断停止有無
- 判断継続可能状態

目的：

現在の判断形成が、
自然に進行しているかを確認する。

---

## decision continuity Monitoring

観察対象：

- 判断継続
- 判断再開
- Module間接続
- 文脈維持

目的：

判断形成が、
単発で終了せず、
継続しているかを確認する。

---

## Module Monitoring

観察対象：

- Module利用状況
- Module接続
- Module責務成立
- Module停止

目的：

各Moduleが、
System設計どおりに
機能しているかを確認する。

---

## Flow Monitoring

観察対象：

- decision flow
- Module接続順
- 接続停止
- 循環状態

目的：

System全体の
判断形成構造が
維持されているかを確認する。

---

## System Monitoring

観察対象：

- System全体
- Constitution整合
- Monitoring整合
- 将来拡張可能性

目的：

個別Moduleではなく、

System全体が
一貫して機能しているかを確認する。

---

# current decisionとの関係

KPIは、

current decisionを
評価しない。

観察する。

観察対象は、

- 判断更新
- 判断停止
- 判断継続
- 判断再開

である。

current decisionそのものを
変更しない。

---

# decision continuityとの関係

KPIは、

decision continuityが
維持されているかを観察する。

観察対象は、

- Module接続
- 文脈継続
- 判断継続
- 判断再開

である。

continuityを生成しない。

改善しない。

Monitoringのみ行う。

---

# Monitoringとの関係

Monitoringは、

KPIを利用して
System状態を観察する。

KPIは、

Monitoringが利用する
評価指標として機能する。

Monitoring自身は、

改善判断を行わない。

観察のみ担当する。

---

# Moduleとの関係

各Moduleは、

KPI生成主体ではない。

Moduleは、

ユーザー本人による判断形成を支援する。

KPIは、

その結果として発生した
判断形成を観察する。

そのため、

Moduleは、

KPIのために
設計されない。

KPIは、

Module責務が
設計どおり機能しているかを
確認するために利用される。

# System Connections

kpi_metricsは、

以下のSystem設計と接続する。

Decision

- decision_framework.md
- decision_update_triggers.md

Monitoring

- event_tracking.md
- history.md
- drift_detection.md

State

- state_definition.md

Module

- comparison_role.md
- decision_os_role.md
- product_connection_design.md

これらを通して、

判断形成構造が
期待どおり循環しているかを
観察する。

---

# Module Responsibilities

各Moduleは、

ユーザー本人による判断形成を支援する。

Monitoringは、

その結果を観察する。

役割は混在しない。

---

decision_framework

- 判断形成

---

comparison

- 判断整理

---

decision_OS

- current decision維持

---

property_reader

- 判断材料形成

---

event_tracking

- イベント取得

---

history

- 判断履歴保持

---

kpi_metrics

- 判断形成構造の観察

---

# Boundary

kpi_metricsは、

以下を行わない。

- decision生成
- recommendation
- current decision変更
- fixed_core変更
- Module制御
- UI変更
- CTA生成
- Monitoring結果による自動最適化

KPIは、

System観察のみ担当する。

---

# MVP Policy

MVPでは、

最小限のMonitoringを対象とする。

観察対象は、

- current decision更新
- decision continuity
- Module接続
- 判断停止有無
- 判断継続可能状態

数値最適化や、

高度な分析は行わない。

まずは、

System構造が
設計どおり循環することを
優先する。

---

# Future Policy

将来的には、

Monitoring対象を拡張できる。

例：

- Module品質
- decision品質
- drift傾向
- fixed_core再接続状況
- Module横断分析
- 長期判断形成分析

ただし、

将来拡張においても、

Constitutionで定義された
判断形成思想を変更しない。

Systemは、

Monitoring構造のみを
改善対象とする。

# Related Documents

## Constitution

- constitution_experience.md

---

## System

Decision

- decision_framework.md
- decision_update_triggers.md

State

- state_definition.md

Monitoring

- event_tracking.md
- history.md
- drift_detection.md

Module

- comparison_role.md
- decision_os_role.md
- product_connection_design.md

---

# Rule

kpi_metricsは、

Monitoring設計書である。

そのため、

以下を維持する。

- current decisionを評価しない
- decision continuityを維持する
- Module責務を変更しない
- recommendationへ利用しない
- UI改善判断を行わない
- Constitutionを変更しない

Monitoringは、

判断形成構造のみを観察する。

---

# Change Policy

kpi_metricsは、

Systemレイヤーの設計書である。

思想変更は行わない。

Constitutionとの整合性を維持した上で、

Monitoring構造のみを改善対象とする。

新しいKPIを追加する場合も、

Module責務や

判断形成思想を変更してはならない。

---

# 最終定義

kpi_metricsとは、

System全体の判断形成構造を、

current decision、

decision continuity、

Module接続、

Monitoring構造の観点から継続的に観察し、

Constitutionで定義された判断形成思想が、

設計どおり機能しているかを確認するための、

System Monitoring設計書である。
