state_to_cta_connection.md

Updated: 2026-06-28

Status: Active

Purpose

本書は、

STATEをCTAへ変換するルールを定義する。

STATE思想はConstitution、

STATE定義はstate_definition、

STATE判定はstate_detectionが扱う。

本書は、

判定されたSTATEを、

次のdecision更新へ接続する方法のみを扱う。

⸻

Scope

本書が扱うもの

* STATE → CTA
* CTA generation
* CTA priority
* CTA rules

本書が扱わないもの

* STATE定義
* STATE判定
* decision思想
* progression思想
* CTA思想

これらは各設計書を参照する。

⸻

Design Principle

CTAは、

次画面ではない。

decision更新を開始する入口である。

常に、

現在もっとも必要なdecision整理を1つだけ提示する。

⸻

Rules

System設計では、

以下を満たす。

* STATEは1つのみ
* 主CTAは1つのみ
* recommendationしない
* current decisionを優先する
* decision continuityを維持する
* if文で理解できる構造を保つ

⸻

STATE Mapping

STATE	主CTA
自己理解STATE	自分の迷い方を整理する
判断軸整理STATE	何を優先したいか整理する
現実判断STATE	どこまで許容できるか整理する
本命形成STATE	どの本命と向き合うか整理する

⸻

CTA

CTAは、

次画面を示すものではない。

decision更新を開始するための入口である。

CTAは、

現在もっとも優先度の高い整理対象のみを扱う。

⸻

Relationship

Constitution

↓

decision_framework

↓

state_definition

↓

state_detection

↓

state_to_cta_connection

↓

CTA

↓

Implementation

⸻

Related Documents

Constitution

* constitution_judgement.md

System

* decision_framework.md
* state_definition.md
* state_detection.md
* decision_update_triggers.md
* cta_role.md

⸻

Change Policy

state_to_cta_connectionは、

Systemレイヤーの設計書である。

思想変更は行わない。

Constitutionとの整合性を維持した上で、

STATEからCTAへの接続ルールのみ改善する。
