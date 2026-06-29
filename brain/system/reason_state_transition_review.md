# reason_state_transition_review.md

Updated: 2026-06-29

Status: Active

# Purpose

本書は、

Constitutionで定義された
判断形成思想を前提として、

家買う予備校における
Reason Transition構造を
System設計として定義する。

Reasonは、

比較理由や説明文を管理することを
目的としない。

判断理由が、

判断形成の中でどのように変化し、

current decisionおよび
decision continuityへ接続されるかを
構造化することを目的とする。

---

# Scope

本書が扱うもの

- Reason構造
- Reason Transition
- current decisionとの関係
- decision continuityとの関係
- Module間でのReason接続
- 判断理由の変化構造

本書が扱わないもの

- UI表現
- コピーライティング
- 比較画面の表示仕様
- Recommendation生成
- AIによる理由生成
- 実装ロジック

これらは、

ImplementationまたはModuleで扱う。

---

# Relationship

Constitution

↓

System

（reason_state_transition_review.md）

↓

Module

↓

Implementation

Reason Transitionは、

Constitutionで定義された
判断形成思想を、

判断理由の変化構造へ変換する
Systemとして位置付ける。

---

# Design Principle

Reasonは、

評価コメントではない。

正解を提示するものでもない。

判断形成の中で、

ユーザー自身の判断理由が、

どのように整理され、

変化し、

current decisionへ接続されるかを
支援する構造である。

そのため、

Reasonは、

Recommendationを生成しない。

判断を代行しない。

比較結果を固定しない。

current decisionを支援し、

decision continuityを維持するための

判断理由構造として設計する。

# Reasonとは何か

Reasonとは、

評価コメントではない。

比較結果でもない。

ユーザーが、

判断形成を進める中で
現在の判断を支える理由を
構造化するSystemである。

Reasonは、

判断を作るものではない。

判断形成を支える。

そのため、

Reasonは、

current decision、

history、

decision continuityを接続する

判断理由構造として扱う。

---

# Reason Structure

Reasonは、

同一の判断理由が、

判断形成の進行に応じて
役割を変化させる構造を持つ。

構造は、

Reason Recognition

↓

Reason Organization

↓

Reason Confirmation

である。

Reason Recognitionでは、

判断理由へ気付く。

Reason Organizationでは、

複数の理由同士の関係を整理する。

Reason Confirmationでは、

現在の判断理由として保持する。

Reasonそのものは変わらない。

変化するのは、

判断形成における

Reasonの役割である。

---

# current decisionとの関係

Reasonは、

current decisionを

生成しない。

代行しない。

支援する。

ユーザーが、

現在どの理由によって

判断形成を進めているかを

理解できる状態を形成する。

current decisionは、

Reasonによって

正当化されるものではない。

Reasonは、

現在の判断を

言語化し、

整理する役割を持つ。

---

# decision continuityとの関係

Reasonは、

decision continuityを

維持するための

接続材料となる。

判断形成は、

時間とともに変化する。

しかし、

判断理由の変化を

適切に整理できれば、

ユーザーは

過去の判断と

現在の判断との関係を

理解しながら

判断形成を継続できる。

そのため、

Reasonは、

historyと連携しながら、

decision continuityを支える

判断理由構造として設計する。

# Transition Structure

Reason Transitionは、

Reasonを変化させることを
目的としない。

判断形成の進行に応じて、

Reasonの役割が
どのように変化するかを
構造化する。

構造は、

Reason Recognition

↓

Reason Organization

↓

current decision

↓

history

↓

decision continuity

となる。

Reasonは、

判断形成の各段階で

異なる役割を持ちながら、

一貫した判断理由として

継続的に扱われる。

---

# System Connections

Reason Transitionは、

判断形成System全体と接続して機能する。

接続対象は、

- Constitution
- decision_framework
- current decision
- decision continuity
- history
- comparison_role
- decision_os_role
- Module

である。

構造は、

Constitution

↓

System

（reason_state_transition_review.md）

↓

Module

↓

Implementation

となる。

Reason Transitionは、

判断形成全体における

判断理由の一貫性を維持する役割を持つ。

---

# Boundary

Reason Transitionは、

以下を扱う。

- Reason構造
- Reason Transition
- 判断理由の変化構造
- current decisionとの接続
- decision continuityとの接続

以下は扱わない。

- UI表現
- 比較アルゴリズム
- Recommendation生成
- AI理由生成
- コピーライティング
- 実装ロジック

これらは、

ModuleまたはImplementationで扱う。

---

# MVP Policy

MVPでは、

Reasonを

最小構成で扱う。

重要なのは、

判断理由を

詳細に分析することではない。

ユーザー自身が、

現在の判断理由を

自然に理解できる状態を

形成することである。

そのため、

MVPでは、

Reasonが

current decisionおよび

decision continuityを

支えられることを

成立条件とする。

---

# Future Policy

将来的には、

Reason Transitionを、

判断形成全体を横断する

共通Reason構造として拡張する。

対象には、

- Module間Reason共有
- historyとの連携強化
- current decision理解支援
- decision continuity強化

などが含まれる。

ただし、

いずれの場合も、

Constitutionで定義された

「自分で判断できる状態を形成する」

という思想を逸脱してはならない。

Reason Transitionは、

判断を決めるものではなく、

判断理由を整理し、

継続できる状態を支えるSystemとして維持する。

# Related Documents

Constitution

- constitution_experience.md

System

- decision_framework.md
- decision_reason_design.md
- current_decision.md
- history.md
- comparison_role.md
- decision_os_role.md
- decision_update_triggers.md

---

# Rule

Reason Transitionでは、

以下を遵守する。

- Constitutionを変更しない
- 判断理由をRecommendationへ変換しない
- current decisionを誘導しない
- decision continuityを阻害しない
- 判断理由を固定しない
- AIによる判断代行を行わない
- Module責務をSystemへ持ち込まない

Reason Transitionは、

判断理由の変化構造のみを扱う。

---

# Change Policy

Reason Transitionは、

Constitutionに従って更新する。

思想変更は、

Constitutionで管理する。

Systemでは、

Reason構造および

Reason Transitionのみ改善対象とする。

UI、

比較表示、

コピー、

アルゴリズム、

Recommendation生成などは、

ModuleまたはImplementationで管理する。

Reason Transitionは、

判断形成全体における

判断理由の一貫性を維持しながら更新されなければならない。

---

# 最終定義

Reason Transitionとは、

Constitutionで定義された判断形成思想を前提として、

ユーザーの判断理由が、

判断形成の進行に応じて整理され、

current decision、

history、

decision continuityへ

一貫して接続されるための

System設計である。

Reason Transitionの目的は、

判断理由を評価することではなく、

ユーザーが

自分自身の判断理由を理解し、

継続的な判断形成を行える状態を支援することである。
