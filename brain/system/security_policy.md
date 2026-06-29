# security_policy.md

Updated: 2026-06-29

Status: Active

# Purpose

本書は、

Constitutionで定義された
判断形成思想を前提として、

家買う予備校における
Security Policyを
System設計として定義する。

Securityは、

特定技術の設定を
定義することを目的としない。

判断形成Systemを、

継続的かつ安全に運用できる
責務境界を定義することを目的とする。

---

# Scope

本書が扱うもの

- Security思想
- Security Boundary
- データ保護方針
- Module間の責務境界
- Security運用原則
- System全体の安全性

本書が扱わないもの

- RLS設定
- SQL Policy
- 認証実装
- Supabase設定
- API実装
- Infrastructure設定

これらは、

Implementationで扱う。

---

# Relationship

Constitution

↓

System

（security_policy.md）

↓

Module

↓

Implementation

Security Policyは、

Constitutionで定義された
判断形成思想を、

安全なSystem運用へ変換する
Systemとして位置付ける。

---

# Design Principle

Securityは、

制約を増やすことを
目的としない。

判断形成Systemを、

継続的かつ安全に運用できる状態を
維持することを目的とする。

そのため、

Securityは、

current decisionを阻害しない。

decision continuityを阻害しない。

Implementationへ過度に依存しない。

技術選択よりも、

責務境界を優先する。

Systemは、

技術変更があっても維持できる
Security思想として設計する。

# Securityとは何か

Securityとは、

認証方式ではない。

データベース設定でもない。

家買う予備校における

判断形成Systemを、

安全かつ継続的に運用するための

責務境界である。

Securityは、

current decision、

history、

decision continuityを

安全に維持するために存在する。

目的は、

情報を隠すことではない。

ユーザーの判断形成を、

適切な境界の中で保護することである。

---

# Security Boundary

Securityは、

System全体に対して

安全性の原則を定義する。

Securityが扱うものは、

- データ保護方針
- ユーザー境界
- Module間の責務境界
- Security運用原則
- Security段階導入方針

である。

一方、

以下は扱わない。

- 認証実装
- RLS設定
- SQL Policy
- API認可
- Infrastructure設定
- クラウドサービス固有設定

これらは、

Implementationで管理する。

---

# current decisionとの関係

Securityは、

current decisionを

制御しない。

生成しない。

変更しない。

役割は、

current decisionが

ユーザー自身の判断として

安全に保持され、

適切な境界で利用される状態を

維持することである。

Securityによって、

判断形成そのものが

阻害されてはならない。

---

# decision continuityとの関係

Securityは、

decision continuityを

維持するための

基盤となる。

判断形成は、

時間を跨いで継続される。

その継続性は、

適切なデータ保護と

責務境界が維持されて

初めて成立する。

そのため、

Securityは、

history、

current decision、

Module間接続を

安全に維持しながら、

decision continuityを支える

Systemとして設計する。

# System Connections

Security Policyは、

System全体を横断して機能する。

接続対象は、

- Constitution
- current decision
- decision continuity
- history
- event_tracking
- user_data_strategy
- release_checklist
- Module
- Implementation

である。

構造は、

Constitution

↓

System

（security_policy.md）

↓

Module

↓

Implementation

となる。

Securityは、

各Systemを制御するものではない。

各Systemが、

安全な責務境界の中で機能するための
共通基盤として位置付ける。

---

# Boundary

Security Policyは、

以下を扱う。

- Security思想
- Security Boundary
- データ保護原則
- Security運用方針
- 段階的Security導入方針

以下は扱わない。

- 認証方式の詳細
- RLS設定
- SQL Policy
- API認可実装
- Infrastructure構築
- クラウドサービス固有設定
- 暗号化アルゴリズム選定

これらは、

Implementationで管理する。

---

# MVP Policy

MVPでは、

最小限のSecurityで、

判断形成を安全に維持できることを
成立条件とする。

重要なのは、

高度なSecurity機能ではない。

current decision、

history、

decision continuityが、

適切な責務境界の中で
安全に継続できることである。

そのため、

Securityは、

MVPの進行に合わせて
段階的に強化する。

実装技術ではなく、

責務境界を維持することを
優先する。

---

# Future Policy

将来的には、

認証方式、

データ保護、

アクセス制御、

監査機能などが
強化される可能性がある。

ただし、

それらはすべて、

Constitutionで定義された

「自分で判断できる状態を形成する」

という思想を支えるために
導入される。

Securityは、

技術の追加を目的としない。

判断形成Systemを、

長期的に安全かつ継続的に
運用できる状態を維持するための

共通Systemとして発展させる。

# Related Documents

Constitution

- constitution_experience.md

System

- decision_framework.md
- current_decision.md
- decision_continuity.md
- history.md
- user_data_strategy.md
- event_tracking.md
- release_checklist.md

---

# Rule

Security Policyでは、

以下を遵守する。

- Constitutionを変更しない
- current decisionを制御しない
- decision continuityを阻害しない
- Module責務を侵害しない
- SecurityをUXより優先しない
- SecurityをImplementationへ過度に依存させない
- 技術仕様をSystemへ持ち込まない

Securityは、

判断形成を安全に維持するための

共通責務のみを扱う。

---

# Change Policy

Security Policyは、

Constitutionに従って更新する。

思想変更は、

Constitutionで管理する。

Systemでは、

Security思想、

責務境界、

段階的導入方針のみを改善対象とする。

RLS、

認証方式、

API認可、

Infrastructure、

クラウドサービス設定などは、

Implementationで管理する。

Security Policyは、

判断形成System全体の

安全性を維持しながら更新されなければならない。

---

# 最終定義

Security Policyとは、

Constitutionで定義された判断形成思想を前提として、

current decision、

history、

decision continuityを

安全かつ継続的に維持するための

責務境界と運用原則を定義する

System設計である。

Securityの目的は、

技術を固定することではなく、

判断形成Systemを

長期的に安全に運用できる状態を維持することである。
