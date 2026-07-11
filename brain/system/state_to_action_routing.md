state_to_action_routing.md

Updated: 2026-06-28

Status: Active

Purpose

本書は、

STATEに基づいて生成されたCTAを、

具体的なmodule接続へ変換するルールを定義する。

STATE定義はstate_definition、

STATE判定はstate_detection、

CTA生成はstate_to_cta_connectionが扱う。

本書は、

CTAからmoduleへの接続のみを扱う。

⸻

Scope

本書が扱うもの

* CTA → module routing
* module接続
* routing rules
* context受渡

本書が扱わないもの

* STATE定義
* STATE判定
* CTA思想
* decision思想
* module責務

これらは各設計書を参照する。

⸻

Design Principle

routingは、

画面遷移ではない。

現在判断を、

次のdecision更新moduleへ接続する構造である。

⸻

Routing Map

この表のmoduleはRouting接続moduleであり、
STATE支援module全体を定義するものではない。

STATE	主CTA	Routing接続module
自己理解STATE	自分の迷い方を整理する	type_diagnosis
判断軸整理STATE	何を優先したいか整理する	purchase_motivation
現実判断STATE	どこまで許容できるか整理する	loan_safety
本命形成STATE	どの本命と向き合うか整理する	property_reader / comparison

⸻

Routing Rules

System設計では、

以下を満たす。

* 主CTAは1つのみ
* routingはrecommendationしない
* module責務を越境しない
* current decisionを維持する
* 必要なcontextのみ受け渡す

⸻

Context

routing時には、

必要に応じて以下を受け渡す。

* property_id
* reason
* current decision
* fixed_core
* source module

contextは、

判断材料として受け渡す。

判断として受け渡してはならない。

⸻

Relationship

Constitution

↓

decision_framework

↓

state_definition

↓

state_to_cta_connection

↓

state_to_action_routing

↓

module

↓

Implementation

⸻

Related Documents

System

* state_definition.md
* state_detection.md
* state_to_cta_connection.md
* cta_role.md
* product_connection_design.md

⸻

Change Policy

state_to_action_routingは、

Systemレイヤーの接続設計書である。

思想変更は行わない。

Constitutionとの整合性を維持した上で、

CTAからmoduleへの接続ルールのみ改善する。
