# onboarding_design.md

Updated: 2026-06-29

Status: Active

# Purpose

本書は、

Constitutionで定義された
判断形成思想を前提として、

家買う予備校における
Onboarding構造を
System設計として定義する。

Onboardingは、

サービスを説明することを
目的としない。

ユーザーが、

判断形成Systemへ
自然に参加できる状態を形成することを
目的とする。

---

# Scope

本書が扱うもの

- Onboarding構造
- 初回判断形成
- current decisionへの接続
- decision continuityへの接続
- 初回体験の設計原則
- Moduleとの接続方針

本書が扱わないもの

- LP構成
- コピーライティング
- UIデザイン
- チュートリアル画面
- LINE登録施策
- マーケティング施策

これらは、
ImplementationまたはBusinessで扱う。

---

# Relationship

Constitution

↓

System

（onboarding_design.md）

↓

Module

↓

Implementation

Onboardingは、

Constitutionで定義された
判断形成思想を、

初回参加構造へ変換する
Systemとして位置付ける。

---

# Design Principle

Onboardingは、

機能説明を目的としない。

教育を目的としない。

ユーザーが、

現在の判断形成へ
自然に参加できる状態を
形成することを目的とする。

そのため、

Onboardingは、

current decisionを開始する。

decision continuityへ接続する。

Recommendationを行わない。

判断を代行しない。

サービス理解よりも、

「自分で判断を始められる」

という感覚の形成を
最優先とする。

# Onboardingとは何か

Onboardingとは、

サービス説明ではない。

チュートリアルでもない。

判断形成Systemへ、

ユーザーが自然に参加できる状態を
形成するためのSystemである。

Onboardingが扱うのは、

操作方法ではない。

現在の判断形成へ
安心して参加できる入口である。

そのため、

Onboardingは、

「理解させること」

よりも、

「判断を始められること」

を優先する。

---

# current decisionとの関係

Onboardingは、

current decisionを
生成しない。

代行しない。

強制しない。

現在の判断形成へ、

自然に参加できる状態を
支援する。

current decisionは、

ユーザー自身が形成する。

Onboardingは、

その最初の一歩を
支える役割を持つ。

Recommendationや、

判断誘導は行わない。

---

# decision continuityとの関係

Onboardingは、

decision continuityの
開始地点となる。

初回利用でも、

再訪でも、

ユーザーが

「どこから判断を続ければよいか」

を理解できる状態を形成する。

Onboardingは、

一度きりの導線ではない。

判断形成へ戻る入口として、

decision continuity全体を支える。

---

# First Experience

First Experienceでは、

機能説明を行わない。

知識教育を行わない。

最初に形成するべきものは、

安心感である。

ユーザーが、

「ここなら整理しながら考えられそう」

「自分で判断を進められそう」

と感じられる状態を形成する。

初回体験では、

現在位置を理解できること、

次に何を整理すればよいかを
自然に受け入れられることを重視する。

そのため、

First Experienceは、

判断形成への参加を支援する体験として設計する。

# System Connections

Onboardingは、

判断形成System全体と接続して機能する。

接続対象は、

- Constitution
- decision_framework
- current decision
- decision continuity
- product_connection_design
- Module
- history
- event_tracking

である。

構造は、

Constitution

↓

System

（onboarding_design.md）

↓

Module

↓

Implementation

となる。

Onboardingは、

判断形成Systemへ参加する入口として、

各Moduleとの接続を自然に開始する役割を持つ。

---

# Boundary

Onboardingは、

以下を扱う。

- 初回参加構造
- 判断形成への参加設計
- current decisionへの接続
- decision continuity開始
- Moduleとの接続方針

以下は扱わない。

- UIデザイン
- LP設計
- チュートリアル実装
- LINE登録施策
- コピーライティング
- 広告導線
- Recommendation
- 判断代行

これらは、

ImplementationまたはBusinessで扱う。

---

# MVP Policy

MVPでは、

Onboardingを

「判断形成へ参加できること」

だけに集中する。

機能説明よりも、

安心して判断を始められることを優先する。

初回利用でも、

現在位置を理解し、

最初のcurrent decisionへ

自然に参加できることを

MVP成立条件とする。

---

# Future Policy

将来的には、

Onboardingを、

ユーザーごとの判断形成状況に応じて

柔軟に適応できる構造へ拡張する。

対象には、

- 利用状況に応じた導入
- Module接続状況の反映
- current decision理解支援
- decision continuity再開支援

などが含まれる。

ただし、

いずれの場合も、

Constitutionで定義された

「自分で判断できる状態を支援する」

という思想を逸脱してはならない。

Onboardingは、

判断を説明するものではなく、

判断形成へ自然に参加できる入口であり続ける。

# Related Documents

Constitution

- constitution_experience.md

System

- decision_framework.md
- decision_os_role.md
- decision_update_triggers.md
- product_connection_design.md
- history.md
- event_tracking.md
- line_strategy.md
- user_data_strategy.md

---

# Rule

Onboardingでは、

以下を遵守する。

- Constitutionを変更しない
- 判断形成を教育へ置き換えない
- Recommendationを導入しない
- current decisionを誘導しない
- decision continuityを阻害しない
- 判断を代行しない
- 機能説明を目的化しない
- Implementation責務をSystemへ持ち込まない

Onboardingは、

判断形成への参加構造のみを扱う。

---

# Change Policy

Onboardingは、

Constitutionに従って更新する。

思想変更は、

Constitutionで管理する。

Systemでは、

判断形成への参加構造のみ改善対象とする。

UI、

コピー、

画面構成、

導線実装、

チュートリアル表現などは、

Implementationで管理する。

Onboardingは、

判断形成への入口としての役割を維持しながら更新されなければならない。

---

# 最終定義

Onboardingとは、

Constitutionで定義された判断形成思想を前提として、

ユーザーが判断形成Systemへ自然に参加し、

current decisionを開始し、

decision continuityへ接続できる状態を形成するための

System設計である。

Onboardingの目的は、

サービスを理解させることではなく、

ユーザーが安心して

「自分で判断を始められる状態」

を形成することである。
