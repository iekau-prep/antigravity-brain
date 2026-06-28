decision_reason_design.md

Updated: 2026-06-28

Status: Active

Purpose

本書は、

Constitutionで定義されたreason思想を、

System設計へ適用するための設計書である。

reasonとは何かはConstitutionが扱う。

本書は、

reasonをSystem内でどのように扱うかを定義する。

⸻

Scope

本書が扱うもの

* reason構造
* reason更新
* reason利用
* reason境界
* System接続

本書が扱わないもの

* reason思想
* 判断形成思想
* fixed_core思想

これらはConstitutionを参照する。

⸻

System Role

reasonは、

現在の判断形成を説明する

判断材料として扱う。

reasonは、

結論ではない。

recommendationではない。

現在判断を理解し、

次の判断形成へ継続するために利用する。

⸻

Design Rules

reasonは、

以下の原則で扱う。

* current decisionを説明する
* 更新可能とする
* recommendationへ利用しない
* AI結論へ変換しない
* 単独でdecisionを生成しない
* 判断材料として扱う

⸻

Reason Update

reasonは、

以下のような判断材料との接触を通して更新される。

* comparison
* 現実との接触
* fixed_core再確認
* 新しい知識
* 再訪

更新とは、

現在判断を説明する内容が変化することである。

⸻

System Connections

reasonは、

以下と接続する。

* fixed_core
* current decision
* comparison
* decision_framework
* property_reader
* decision_OS

reasonは、

判断形成を継続するための判断材料として利用される。

⸻

Boundary

reasonは、

以下を行わない。

* recommendation生成
* AI意思決定
* ランキング生成
* 評価点生成
* 購入判断
* 判断主体化

⸻

Relationship

Constitution

↓

decision_reason_design

↓

comparison

decision_OS

property_reader

↓

Implementation

⸻

Related Documents

Constitution

* constitution_transfer.md

System

* decision_framework.md
* fixed_core_definition.md
* comparison_role.md
* decision_os_role.md

⸻

Change Policy

decision_reason_designは、

Systemレイヤーの設計書である。

思想変更は行わない。

Constitutionとの整合性を維持した上で、

System設計のみ改善対象とする。
