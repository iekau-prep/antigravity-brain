state_detection.md

Updated: 2026-06-28

Status: Active

Purpose

本書は、

現在のdecision構造から、

STATEを導出するための判定ロジックを定義する。

STATEの思想はConstitution、

STATE構造はstate_definition.mdが扱う。

本書は、

STATE Detectionの判定ロジックのみを扱う。

⸻

Scope

本書が扱うもの

* STATE導出
* 判定優先順位
* decision解釈
* 判定入力
* 判定出力

本書が扱わないもの

* STATE思想
* STATE構造
* CTA設計
* module責務

⸻

Detection Principles

STATE判定では、

画面遷移を見ない。

module利用履歴を見ない。

利用時間を見ない。

現在のdecision構造のみを優先して解釈する。

⸻

Detection Inputs

STATE判定では、

以下の判断構造（Logical Inputs）を利用する。

### Logical Inputs

* current decision
* reason
* fixed_core
* comparison状況
* 現実との接触状況
* decision更新状況

これらは、

STATE判定に利用する論理的入力であり、

実装方法には依存しない。

---

### Implementation Inputs（Logical Inputsの導出元）

Implementation Inputsは実装情報そのものを定義せず、

必要に応じて以下の情報から
Logical Inputsを導出するための参照元として扱う。

例：

* decision_result
* 保存 / 保留 / 見送り
* current reasons
* decision continuity
* comparison結果

Implementation Inputsは、

Logical Inputsを導出するための実装情報として扱う。

⸻

Detection Rules

STATE判定では、

現在もっとも整理が必要な判断領域を

1つだけ導出する。

複数STATEを同時に返さない。

⸻

Detection Priority

判定優先順位

1. 現実判断STATE
2. 本命形成STATE
3. 判断軸整理STATE
4. 自己理解STATE

停止している判断形成を優先して解釈する。

⸻

Detection Flow

判定は、

以下の順で行う。

* current decision確認
* decision更新状況確認
* fixed_core確認
* comparison状況確認
* 現実との接触確認
* 最終STATE導出

⸻

Detection Output

出力は、

STATEのみである。

STATEから

* 主CTA
* module接続

などは別Systemが決定する。

⸻

Design Rules

STATE Detectionでは、

以下を満たす。

* recommendationしない
* AI推測を行わない
* 行動履歴を優先しない
* current decisionを優先する
* STATEは1つのみ返す
* 判定根拠を説明可能にする

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

state_to_action_routing

↓

Implementation

⸻

Related Documents

Constitution

* constitution_judgement.md

System

* state_definition.md
* state_to_cta_connection.md
* decision_framework.md
* decision_update_triggers.md

⸻

Change Policy

state_detectionは、

Systemレイヤーの判定設計書である。

STATE思想は変更しない。

変更対象は、

STATE Detectionの判定ロジックに限る。
