# mvp_backlog.md

Updated: 2026-06-29

Status: Active

# Purpose

本書は、

Constitutionで定義された
判断形成思想を前提として、

家買う予備校における
MVP成立条件を
System設計として定義する。

MVP Backlogは、

開発タスクを管理することを
目的としない。

判断形成Systemとして、

最低限成立すべき構造を
明確化することを目的とする。

---

# Scope

本書が扱うもの

- MVP成立条件
- MVP範囲
- current decision成立条件
- decision continuity成立条件
- Module成立範囲
- MVP全体方針

本書が扱わないもの

- 実装タスク
- スケジュール管理
- Issue管理
- 優先順位管理
- GitHub運用
- Sprint管理

これらは、

Project ManagementまたはImplementationで扱う。

---

# Relationship

Constitution

↓

System

（mvp_backlog.md）

↓

Module

↓

Implementation

MVP Backlogは、

Constitutionで定義された
判断形成思想を、

最小成立条件へ変換する
Systemとして位置付ける。

---

# Design Principle

MVPは、

機能数を増やすことを
目的としない。

判断形成Systemが、

最小構成でも成立することを
目的とする。

そのため、

MVPでは、

current decisionを成立させる。

decision continuityを成立させる。

Module同士の接続を成立させる。

Recommendation、

高度な最適化、

完成度の追求は目的としない。

最小構成で、

ユーザーが

「自分で判断を進められる」

状態を成立させることを最優先とする。

# MVP Backlogとは何か

MVP Backlogとは、

開発タスク一覧ではない。

MVPとして、

最低限成立しなければならない

判断形成構造を整理するための
Systemである。

MVPでは、

すべての機能完成を目指さない。

ユーザーが、

最小構成でも

判断形成を開始し、

継続できる状態を
成立条件とする。

そのため、

MVP Backlogは、

機能追加ではなく、

判断形成構造の成立を管理する。

---

# MVP Completion Structure

MVP成立は、

個別機能の完成ではなく、

判断形成System全体が

最小構成で循環することによって成立する。

構造は、

初回参加

↓

Module利用

↓

current decision形成

↓

decision continuity成立

↓

再訪可能

↓

判断形成継続

である。

MVPでは、

各Moduleが

単独で完成していることよりも、

System全体として

判断形成が継続できることを優先する。

---

# current decisionとの関係

MVPでは、

current decisionが

自然に形成されることを

最重要成立条件とする。

current decisionは、

Recommendationによって作られない。

ユーザー自身が、

判断形成を進めた結果として

自然に形成される。

MVP Backlogは、

その構造が

System全体で成立しているかを確認する。

---

# decision continuityとの関係

MVPでは、

一度判断して終わることを
目的としない。

判断形成は、

継続できなければならない。

そのため、

decision continuityが、

初回利用、

再訪、

Module間接続を通じて

維持されることを

MVP成立条件とする。

MVP Backlogは、

各Module単体ではなく、

System全体として

decision continuityが成立していることを管理する。

# System Connections

MVP Backlogは、

判断形成System全体と接続して機能する。

接続対象は、

- Constitution
- decision_framework
- current decision
- decision continuity
- product_connection_design
- release_checklist
- history
- event_tracking

である。

構造は、

Constitution

↓

System

（mvp_backlog.md）

↓

Module

↓

Implementation

となる。

MVP Backlogは、

各Moduleの完成度ではなく、

System全体として

判断形成が成立する最小構造を定義する役割を持つ。

---

# Boundary

MVP Backlogは、

以下を扱う。

- MVP成立条件
- 判断形成Systemの最小構造
- current decision成立条件
- decision continuity成立条件
- Module接続成立条件

以下は扱わない。

- Sprint管理
- Issue管理
- GitHub管理
- 実装タスク
- スケジュール
- UI改善
- Recommendation
- Business判断

これらは、

Project ManagementまたはImplementationで扱う。

---

# MVP Policy

MVPでは、

最小構成で

判断形成Systemが成立することを優先する。

完成度よりも、

判断形成が停止しないことを重視する。

そのため、

Module単体の完成ではなく、

System全体として

current decisionが形成され、

decision continuityが維持されることを

MVP成立条件とする。

---

# Future Policy

将来的には、

MVP Backlogを、

正式リリース後の

System Evolutionへ接続する。

対象には、

- 新Module追加
- 判断形成構造の拡張
- Module間接続の追加
- 継続利用構造
- Release基準の更新

などが含まれる。

ただし、

いずれの場合も、

Constitutionで定義された

「自分で判断できる状態を形成する」

という思想を逸脱してはならない。

MVP Backlogは、

機能一覧ではなく、

判断形成Systemの最小成立条件を管理するSystemとして維持する。


# Related Documents

Constitution

- constitution_experience.md

System

- decision_framework.md
- decision_loop_core_summary.md
- decision_os_role.md
- history.md
- event_tracking.md
- release_checklist.md
- product_connection_design.md

---

# Rule

MVP Backlogでは、

以下を遵守する。

- Constitutionを変更しない
- 判断形成を機能数で評価しない
- Recommendationを導入しない
- current decisionを誘導しない
- decision continuityを阻害しない
- 実装タスクをSystemへ持ち込まない
- Project Management責務を混在させない

MVP Backlogは、

判断形成Systemの

最小成立条件のみを扱う。

---

# Change Policy

MVP Backlogは、

Constitutionに従って更新する。

思想変更は、

Constitutionで管理する。

Systemでは、

MVP成立条件のみ改善対象とする。

実装順序、

担当者、

スケジュール、

Issue、

Sprintなどは、

Project Managementで管理する。

MVP Backlogは、

判断形成Systemの

最小成立構造を維持しながら更新されなければならない。

---

# 最終定義

MVP Backlogとは、

Constitutionで定義された判断形成思想を前提として、

家買う予備校が

最小構成でも

current decisionを形成し、

decision continuityを維持し、

判断形成Systemとして成立するための

最小成立条件を定義するSystem設計である。

MVP Backlogの目的は、

開発タスクを管理することではなく、

判断形成Systemが成立する境界を明確にすることである。
