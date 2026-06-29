# monetization.md

Updated: 2026-06-29

Status: Active

# Purpose

本書は、

Constitutionで定義された
判断形成思想を前提として、

家買う予備校における
価値交換構造（Monetization）を
System設計として定義する。

Monetizationは、

売上を最大化するためではない。

ユーザーが、

判断形成を前へ進める価値と、

その価値に対する対価の関係を
構造化することを目的とする。

---

# Scope

本書が扱うもの

- Monetization構造
- 価値交換構造
- current decisionと価値の関係
- decision continuityと価値の関係
- 無料と有料の責務境界
- Moduleとの接続方針

本書が扱わないもの

- 価格表
- キャンペーン
- 販売施策
- マーケティング運用
- 広告運用
- 個別商品の仕様

これらは、
ImplementationまたはBusiness運用で扱う。

---

# Relationship

Constitution

↓

System

（monetization.md）

↓

Module

↓

Implementation

Monetizationは、

Constitutionで定義された
判断形成思想を、

価値交換構造へ変換する
System設計として位置付ける。

---

# Design Principle

Monetizationは、

情報販売を目的としない。

判断形成を支援する価値と、

その価値に対する対価を
構造化することを目的とする。

そのため、

価値は、

情報量ではなく、

判断可能状態の形成によって
定義される。

Monetizationは、

current decisionを促進する。

decision continuityを支える。

判断を誘導しない。

Recommendationを行わない。

売ることを目的とせず、

ユーザーが
自分で判断できる状態を支えることを
最優先とする。

# Monetizationとは何か

Monetizationとは、

収益化手法ではない。

判断形成によって生まれた価値と、

その価値に対する対価との関係を
構造化するSystemである。

そのため、

Monetizationは、

商品を販売するためではなく、

ユーザーが、

判断可能状態へ到達した価値を
適切に交換するために存在する。

価値交換は、

情報量ではなく、

判断形成の前進によって成立する。

---

# Value Exchange

家買う予備校では、

価値交換は、

判断形成の進行とともに発生する。

構造は、

理解

↓

整理

↓

判断形成

↓

現実接触

↓

current decision更新

↓

decision continuity

である。

価値とは、

より多くの情報を得ることではない。

より良い判断を行える状態へ
近づくことである。

そのため、

有料・無料の境界も、

情報量ではなく、

判断形成への寄与によって決定する。

---

# current decisionとの関係

Monetizationは、

current decisionを
生成しない。

誘導しない。

変更しない。

支援する。

ユーザーが、

現在必要としている判断形成へ
自然に到達し、

その価値を受け取る過程を支える。

課金は、

current decisionを
成立させることを目的としない。

current decisionを
より深く理解し、

より安心して更新できる状態を
支援する価値交換として扱う。

そのため、

Monetizationは、

Recommendation、

販売導線、

強制誘導とは明確に分離される。

# System Connections

Monetizationは、

判断形成System全体と接続して機能する。

接続対象は、

- Constitution
- decision_framework
- current decision
- decision continuity
- Module
- history
- event_tracking
- kpi_metrics

である。

構造は、

Constitution

↓

System

（Monetization）

↓

Module

↓

Implementation

となる。

Monetizationは、

判断形成によって生まれた価値を、

System全体の中で
一貫して価値交換へ接続する役割を持つ。

---

# Boundary

Monetizationは、

以下を扱う。

- 価値交換構造
- 無料と有料の責務境界
- 判断形成と価値の関係
- Moduleとの価値接続
- current decisionとの価値接続

以下は扱わない。

- 価格決定
- 商品仕様
- キャンペーン
- 広告施策
- セールス手法
- マーケティング運用
- Recommendation
- 購入誘導

これらは、

BusinessまたはImplementationで扱う。

---

# MVP Policy

MVPでは、

Monetizationを

「価値交換構造」

としてのみ扱う。

無料体験だけでも、

判断形成として成立することを優先する。

有料化は、

無料体験を制限するためではない。

判断形成を、

より継続しやすく、

より深く支援する価値として設計する。

そのため、

MVP段階では、

価格体系、

販売チャネル、

収益最大化よりも、

判断形成価値の成立を優先する。

---

# Future Policy

将来的には、

Monetizationを、

decision continuity全体を支える

価値交換基盤として拡張する。

対象には、

- 継続利用
- 個別相談
- 家族判断支援
- 長期判断支援
- 新たなModuleとの価値接続

などが含まれる。

ただし、

いずれの場合も、

価値交換は、

Constitutionで定義された

「判断形成を支援する」

という思想を逸脱してはならない。

売上最大化ではなく、

判断形成価値との整合性を最優先とする。

# Related Documents

Constitution

- constitution_experience.md

System

- decision_framework.md
- decision_update_triggers.md
- decision_os_role.md
- history.md
- line_strategy.md
- funnel_and_line_strategy.md
- user_data_strategy.md
- product_connection_design.md
- kpi_metrics.md

---

# Rule

Monetizationでは、

以下を遵守する。

- Constitutionを変更しない
- 判断形成を販売へ置き換えない
- Recommendationを導入しない
- current decisionを誘導しない
- decision continuityを阻害しない
- 無料体験を意図的に劣化させない
- 情報量を価値として扱わない
- 価格と価値交換構造を混在させない

Monetizationは、

判断形成価値と対価との関係のみを扱う。

---

# Change Policy

Monetizationは、

Constitutionに従って更新する。

思想変更は、

Constitutionで管理する。

Systemでは、

価値交換構造のみ改善対象とする。

価格変更、

販売施策、

商品構成、

キャンペーン変更などは、

BusinessまたはImplementationで管理する。

Monetizationは、

判断形成との整合性を維持しながら更新されなければならない。

---

# 最終定義

Monetizationとは、

Constitutionで定義された判断形成思想を前提として、

ユーザーが判断可能状態へ近づくことで生まれる価値を、

適切な価値交換へ接続するための
System設計である。

売上を最大化するためではなく、

判断形成を継続的に支える価値と、

その対価との関係を構造化することを目的とする。
