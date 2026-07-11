state_definition.md

Updated: 2026-06-28

Status: Active

Purpose

本書は、

Constitutionで定義されたSTATE思想を、

System設計へ適用するための定義書である。

STATEの思想はConstitutionが扱う。

本書は、

STATEをどのようにSystem内で扱い、

decision更新へ接続するかを定義する。

⸻

Scope

本書が扱うもの

* STATE構造
* STATE導出
* STATE Detection
* decision_stateとの境界
* CTA接続
* module接続
* STATE優先順位

本書が扱わないもの

* STATEの思想
* decisionの定義
* continuityの思想
* loopの思想

これらはConstitutionを参照する。

⸻

STATE Definition

STATEは、

現在もっとも整理が必要な判断領域を表現する

System上の解釈構造である。

STATEは保存しない。

decisionから動的に導出する。

STATEは、

進捗ではない。

現在判断を更新するための整理対象として扱う。

⸻

STATE Principles

Systemでは以下を満たす。

* 同時点で導出するSTATEは1つのみ
* STATEは保存しない
* decisionから導出する
* recommendationへ利用しない
* decision主体へ影響させない
* current decision更新を支援する

⸻

4 STATE Model

Systemでは、

STATEを以下4種類に固定する。

① 自己理解STATE

現在の判断特性を整理する状態。

主に

* type_diagnosis

が支援する。

⸻

② 判断軸整理STATE

fixed_core、

優先順位、

判断軸を整理する状態。

主に

* purchase_motivation

が支援する。

⸻

③ 現実判断STATE

現在判断を、

現実との接触へ照合する状態。

主に以下のmoduleがSTATE支援moduleとして支援する。

* rent_vs_buy
* loan_safety

これはRouting接続moduleを定義するものではない。

⸻

④ 本命形成STATE

現在向き合う対象を整理する状態。

主に以下のmoduleがSTATE支援moduleとして支援する。

* property_reader
* comparison
* decision_OS

これはRouting接続moduleを定義するものではない。

⸻

STATE Detection

STATEは、

画面遷移では判定しない。

module利用履歴でも判定しない。

現在のdecision構造から導出する。

判定材料例

* current decision
* reason
* fixed_core
* 現実との接触
* comparison結果
* decision更新状況

⸻

STATE Derivation

STATEは、

decision構造から導出される。

STATE自身は保存対象ではない。

導出結果は、

現在もっとも整理が必要な判断領域を示す。

⸻

STATE vs decision_state

STATEは、

「何を整理するか」

を扱う。

decision_stateは、

「現在どのように判断形成が進行しているか」

を扱う。

Systemでは、

両者を混在させない。

⸻

STATE Priority

同時に複数の整理対象が存在する場合でも、

Systemは

現在もっとも優先度の高いSTATEを1つ導出する。

主CTAは、

そのSTATEに対応して決定される。

⸻

CTA Connection

CTAは、

STATEを次のdecision更新へ接続するために存在する。

CTAは、

画面遷移ではない。

現在判断を更新するための入口として扱う。

⸻

Decision Relationship

decisionは、

STATEが示す対象領域において更新される。

STATEは、

decision更新の対象領域を示す。

decision更新後、

STATEは再導出される。

⸻

Design Rules

System設計では、

以下を満たす。

* STATEを保存しない
* STATEを増殖させない
* recommendationしない
* current decision更新を支援する
* 主CTAは1つ
* decision主体を変更しない

⸻

Relationship

Constitution

↓

state_definition

↓

state_detection

↓

state_to_cta_connection

↓

decision_OS

↓

Implementation

⸻

Related Documents

Constitution

* constitution_judgement.md

System

* decision_framework.md
* state_detection.md
* state_to_cta_connection.md
* decision_os_role.md
* comparison_role.md
* decision_update_triggers.md

⸻

Change Policy

state_definitionは、

Systemレイヤーの設計書である。

思想変更は行わない。

Constitutionとの整合性を維持した上で、

STATE設計のみを管理する。
