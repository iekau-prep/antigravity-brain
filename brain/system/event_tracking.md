# brain/system/event_tracking.md
Updated: 2026-06-29

Status: Active

Purpose

本書は、

Constitutionで定義された
decision continuity思想を、

SystemにおけるMonitoring設計へ適用するための定義書である。

Constitutionは、

「何を判断として扱うか」

を定義する。

本書は、

その判断更新を、

Systemとしてどのように観測・記録するか

を定義する。

⸻

Scope

本書が扱うもの

* Event Trackingの役割
* Monitoring対象
* decision更新の観測
* Moduleとの接続
* Monitoring境界
* Monitoring設計

本書が扱わないもの

* 判断思想
* KPI設計
* Analytics運用
* Business指標
* マーケティング分析

これらはConstitutionまたは関連Systemで扱う。

⸻

Relationship

Constitution

↓

System

↓

Monitoring

↓

Implementation

Constitutionは、

判断更新思想を定義する。

Systemは、

その判断更新をどのように観測するかを定義する。

Monitoringは、

Systemで定義された観測対象を扱う。

Implementationは、

実際のイベント送信・保存・分析を担当する。

⸻

Design Principle

Event Trackingは、

「何を計測するか」

ではなく、

「どの判断更新を観測対象とするか」

を定義する。

Systemは、

イベント数を増やすことを目的としない。

Monitoringによって、

decision continuity、

Module接続、

current decision更新を

再現可能にすることを目的とする。

⸻

Event Trackingとは何か

Event Trackingは、

ユーザー行動を記録する仕組みではない。

判断更新が、

どこで、

どのModuleによって、

どのように発生したかを

Systemとして観測するための構造である。

そのためEvent Trackingは、

クリック数、

ページ遷移、

滞在時間を主体として扱わない。

扱う対象は、

* current decision更新
* Module間接続
* decision continuity
* fixed_coreとの再接続
* driftとの接触
* decision update trigger

など、

判断更新を支えるSystemイベントである。

Monitoringは、

評価や推薦を目的としない。

ユーザーが判断を更新し続けられる構造が、

System上で維持されているかを確認するために存在する。

⸻

Event Structure

Event Trackingは、

イベント一覧を定義するものではない。

Systemが、

どの判断更新を観測対象として扱うかを定義する。

観測対象は、

以下の5つに分類される。

* current decision更新
* Module間接続
* decision continuity
* fixed_coreとの再接続
* driftとの接触

Implementationは、

これらを必要なイベントへ変換して扱う。

Systemは、

イベント名や送信方式を規定しない。

⸻

current decisionとの関係

Event Trackingは、

current decisionそのものを保存しない。

観測対象は、

current decisionが、

どのModuleによって、

どのように更新されたかである。

つまり、

「現在どの判断を持っているか」

ではなく、

「判断がどのように更新されたか」

をMonitoring対象として扱う。

そのため、

クリック、

画面表示、

滞在時間ではなく、

判断更新を中心に観測する。

⸻

decision continuityとの関係

Event Trackingは、

decision continuityを生成しない。

decision continuityが、

継続しているかを観測する。

例えば、

* 前回判断との再接続
* comparison後の判断更新
* fixed_core再確認
* decision_OSへの復帰
* current decision更新

など、

判断が自然に継続できているかを確認対象とする。

Monitoringは、

継続率ではなく、

判断継続構造を観測する。

⸻

Moduleとの関係

各Moduleは、

ユーザー本人による判断更新を支援する。

Event Trackingは、

Moduleそのものを監視するのではない。

Moduleによって発生した

判断更新を観測する。

対象例

* property_reader
* comparison
* decision_OS
* purchase_motivation
* rent_vs_buy
* loan_safety
* external_property_search

Monitoring対象は、

Moduleの利用回数ではなく、

Module責務が正常に機能した結果として発生した

decision updateである。

⸻

Monitoringとの関係

Monitoringは、

System構造が維持されているかを確認するために存在する。

そのため、

KPIだけを目的としない。

Monitoringでは、

以下を継続的に確認する。

* decision continuityが維持されているか
* Module接続が成立しているか
* current decision更新が発生しているか
* fixed_coreとの再接続が行われているか
* driftとの接触が自然に発生しているか

Monitoringは、

評価ではなく、

System構造の健全性確認を目的とする。

⸻

System Connections

Event Trackingは、

以下のSystemと接続する。

Decision

* decision_framework.md
* decision_update_triggers.md
* decision_reason_design.md

State

* state_definition.md
* state_detection.md

Monitoring

* drift_detection.md
* history.md

Module

* comparison_role.md
* decision_os_role.md
* product_connection_design.md

これらは、

Monitoring対象を定義する。

Event Trackingは、

Monitoring構造を提供する。

⸻

Module Responsibilities

各Moduleは、

それぞれの責務に応じて、

ユーザー本人によるdecision updateを支援し、
Monitoring対象となる判断更新の結果を発生させる。

Event Trackingは、

各Moduleが正常に責務を果たした結果として

発生する判断更新を観測する。

Module自身の内部状態、

UI操作、

画面遷移は、

Monitoring対象としない。

Monitoring対象は、

Module責務による支援を通じて発生した

System上の判断更新結果のみである。

⸻

Boundary

Event Trackingは、

以下を行わない。

* recommendation生成
* KPI分析
* Business分析
* AI評価
* Module制御
* CTA生成
* decision生成
* fixed_core生成
* current decision更新

Event Trackingは、

判断更新を記録・観測する。

判断そのものを生成・変更しない。

⸻

MVP Policy

MVPでは、

最小限のMonitoring構造のみを扱う。

対象は、

* current decision更新
* Module接続
* decision continuity
* fixed_core再接続
* drift接触

のみとする。

イベント数を増やすことは目的としない。

Monitoring構造が

decision loopを再現できることを優先する。

⸻

Future Policy

将来的には、

Monitoring対象を拡張可能とする。

例えば、

* household
* team decision
* long-term continuity
* Module横断分析
* decision evolution

などを追加可能とする。

ただし、

これらはMonitoring対象の拡張であり、

System思想を変更しない。

Constitutionで定義された

decision continuity思想を維持したまま、

Monitoring構造のみ拡張対象とする。

⸻

Related Documents

Constitution

* constitution_experience.md

System

* decision_framework.md
* decision_update_triggers.md
* decision_reason_design.md
* state_definition.md
* state_detection.md
* drift_detection.md
* history.md
* comparison_role.md
* decision_os_role.md
* product_connection_design.md

Module

* property_reader
* comparison
* decision_OS

⸻

Rule

Event Trackingは、

以下の原則を維持する。

* current decisionを中心に観測する
* decision continuityを監視対象とする
* Module責務を観測する
* fixed_coreを生成しない
* driftを修正しない
* recommendationへ利用しない
* KPIを主体化しない
* Constitutionと矛盾しない

Monitoringは、

ユーザー評価ではなく、

System構造の健全性確認を目的として利用する。

⸻

Change Policy

Event Trackingは、

Systemレイヤーの設計書である。

イベント追加を目的として更新しない。

更新対象は、

* Monitoring構造
* Module接続
* decision continuity
* current decision観測
* drift観測

のみとする。

思想変更が必要な場合は、

Constitutionを優先して見直す。

Systemでは、

Constitutionとの整合性を維持した範囲で、

Monitoring設計のみ改善対象とする。

⸻

最終定義

Event Trackingとは、

ユーザー行動を収集する仕組みではない。

current decision、

Module、

fixed_core、

drift、

decision continuityによって発生する

判断更新を、

Systemとして継続的に観測するための

Monitoring設計である。

Event Trackingは、

分析を目的とするのではなく、

decision loopが本来の構造を維持したまま

循環していることを確認するための、

Systemレイヤーの観測基盤である。
