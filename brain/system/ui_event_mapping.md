# ui_event_mapping.md

Updated: 2026-06-29

Status: Active

# Purpose

本書は、

Constitutionで定義された
判断形成思想を前提として、

家買う予備校における
UI Event Mappingを
System設計として定義する。

UI Event Mappingは、

UIイベント一覧を管理することを
目的としない。

UI上で発生したユーザーの操作を、

判断形成Systemが扱える
イベントへ適切に接続するための
責務境界を定義することを目的とする。

---

# Scope

本書が扱うもの

- UIとEventの接続構造
- Event Mapping思想
- current decisionとの接続
- decision continuityとの接続
- Module間のイベント責務
- Event発火原則

本書が扱わないもの

- UIデザイン
- コンポーネント設計
- イベント実装
- Analytics SDK
- KPI集計
- Database保存
- Event命名規則

これらは、

ModuleまたはImplementationで扱う。

---

# Relationship

Constitution

↓

System

（ui_event_mapping.md）

↓

Module

↓

Implementation

UI Event Mappingは、

Constitutionで定義された
判断形成思想を、

UI責務からEvent責務へ変換する
Systemとして位置付ける。

---

# Design Principle

UIは、

判断そのものではない。

Eventも、

クリックログではない。

UI Event Mappingは、

ユーザーの操作を、

判断形成Systemが扱える

意味のあるイベントへ接続する
責務を持つ。

そのため、

UI Event Mappingは、

クリック数を増やすことを
目的としない。

current decisionを自然に支え、

decision continuityを維持できる

イベント構造を形成することを
設計原則とする。

# UI Event Mappingとは何か

UI Event Mappingとは、

イベント一覧ではない。

クリックログの定義でもない。

UI上で発生したユーザーの操作を、

判断形成Systemが扱える
意味のあるイベントへ変換する
Systemである。

UIは、

ユーザーとの接点である。

Eventは、

判断形成Systemへの入力である。

UI Event Mappingは、

その両者を適切に接続し、

current decision、

history、

Monitoringへ

一貫した意味を持つイベントとして渡す役割を持つ。

---

# Mapping Structure

UI Event Mappingは、

UI操作を、

そのままイベントへ変換しない。

構造は、

User Interaction

↓

Interaction Interpretation

↓

Meaningful Event

↓

current decision

↓

history

↓

Monitoring

となる。

重要なのは、

UI操作ではなく、

その操作が

判断形成において

どのような意味を持つかである。

そのため、

同じクリックであっても、

判断形成上の意味が異なれば、

異なるイベントとして扱われる。

---

# current decisionとの関係

UI Event Mappingは、

current decisionを

生成しない。

誘導しない。

ユーザーが行った

意味のある操作だけを、

current decisionへ接続する。

そのため、

ページ表示、

スクロール、

単なる画面遷移などは、

current decisionを更新するイベントとして

扱わない。

current decisionは、

ユーザー自身の判断形成によってのみ

更新される。

---

# decision continuityとの関係

UI Event Mappingは、

decision continuityを

維持するための

最初の接続点となる。

イベントの意味が一貫していれば、

history、

Monitoring、

Module間接続も

一貫した構造を維持できる。

そのため、

UI Event Mappingは、

イベント数を増やすことではなく、

判断形成を

継続的に追跡できる

意味のあるイベントだけを

Systemへ接続することを目的とする。

# System Connections

UI Event Mappingは、

判断形成System全体と接続して機能する。

接続対象は、

- Constitution
- current decision
- decision continuity
- event_tracking
- history
- kpi_metrics
- Module
- Implementation

である。

構造は、

Constitution

↓

System

（ui_event_mapping.md）

↓

Module

↓

Implementation

となる。

UI Event Mappingは、

UI操作を

判断形成System全体へ接続する

共通Mapping Systemとして位置付ける。

---

# Boundary

UI Event Mappingは、

以下を扱う。

- UIとEventの接続原則
- Event Mapping思想
- Interaction Interpretation
- Module間のイベント責務
- 判断形成イベントへの接続構造

以下は扱わない。

- UIデザイン
- コンポーネント設計
- Analytics SDK
- Event実装
- Database保存
- KPI集計
- Event送信処理

これらは、

ModuleまたはImplementationで管理する。

---

# MVP Policy

MVPでは、

最小限のイベント構造で、

判断形成を正しく追跡できることを

成立条件とする。

イベント数を増やすことは

目的ではない。

重要なのは、

current decisionが

適切な意味を持つイベントとして

Systemへ接続されることである。

そのため、

MVPでは、

判断形成に意味を持つイベントのみを

Mapping対象とする。

---

# Future Policy

将来的には、

Module追加、

Interaction追加、

Monitoring強化に伴い、

UI Event Mappingも拡張される。

ただし、

追加されるすべてのMappingは、

Constitutionで定義された

「自分で判断できる状態を形成する」

という思想を前提とする。

UI Event Mappingは、

イベント数を増やすためではなく、

判断形成System全体の

一貫性を維持するための

共通Systemとして発展させる。

# Related Documents

Constitution

- constitution_experience.md

System

- decision_framework.md
- event_tracking.md
- history.md
- kpi_metrics.md
- product_connection_design.md
- current_decision.md
- decision_continuity.md

---

# Rule

UI Event Mappingでは、

以下を遵守する。

- Constitutionを変更しない
- UI操作をそのまま判断とみなさない
- current decisionを生成しない
- decision continuityを阻害しない
- Event責務とUI責務を混在させない
- Module責務をSystemへ持ち込まない
- Implementation仕様をSystemへ持ち込まない

UI Event Mappingは、

UIと判断形成Systemを接続する

共通Mappingのみを扱う。

---

# Change Policy

UI Event Mappingは、

Constitutionに従って更新する。

思想変更は、

Constitutionで管理する。

Systemでは、

UIとEventの接続構造のみを改善対象とする。

UIデザイン、

イベント実装、

Analytics、

Database保存、

SDK、

Framework依存処理などは、

ModuleまたはImplementationで管理する。

UI Event Mappingは、

判断形成System全体の

イベント構造の一貫性を維持しながら更新されなければならない。

---

# 最終定義

UI Event Mappingとは、

Constitutionで定義された判断形成思想を前提として、

ユーザーのUI操作を、

判断形成Systemが扱える

意味のあるイベントへ変換し、

current decision、

history、

Monitoringへ

一貫して接続するための

System設計である。

UI Event Mappingの目的は、

操作を記録することではなく、

判断形成に意味を持つイベントだけを

System全体へ正しく接続することである。

