fixed_core_definition.md

Updated: 2026-06-28

Status: Active

Purpose

本書は、

Constitutionで定義されたfixed_core思想を、

System設計へ適用するための定義書である。

fixed_coreとは何かは、

Constitutionが扱う。

本書は、

fixed_coreをSystem内でどのように扱うかを定義する。

⸻

Scope

本書が扱うもの

* fixed_coreの役割
* fixed_coreの利用箇所
* fixed_coreの境界
* fixed_coreの更新方針
* System接続

本書が扱わないもの

* fixed_core思想
* 価値観との接触
* 判断形成思想

これらはConstitutionを参照する。

⸻

System Role

fixed_coreは、

判断形成を支える

長期的な判断軸として扱う。

Systemは、

fixed_coreを生成しない。

推測しない。

固定しない。

判断形成の中で、

ユーザー自身が確認し続けられる状態を支える。

⸻

Design Rules

fixed_coreは、

以下の原則で扱う。

* recommendationへ利用しない
* AIが生成しない
* 性格診断へ利用しない
* 判断主体へしない
* current decisionより優先しない
* 判断材料として扱う

⸻

Update Policy

fixed_coreは、

短期的な比較や感情だけで更新しない。

比較、

現実との接触、

判断形成を通して、

必要に応じて再確認される。

Systemは、

fixed_core変更ではなく、

fixed_coreとの再接続を優先する。

⸻

System Connections

fixed_coreは、

以下と接続する。

* decision_framework
* reason
* current decision
* comparison
* drift_detection
* property_reader

これらは、

fixed_coreを判断材料として利用する。

⸻

Boundary

fixed_coreは、

以下を行わない。

* recommendation
* 購入判断
* AI意思決定
* 正解提示
* ランキング
* 評価点生成

⸻

Relationship

Constitution

↓

fixed_core_definition

↓

decision_framework

↓

comparison
property_reader
drift_detection

↓

Implementation

⸻

Related Documents

Constitution

* constitution_experience.md

System

* decision_framework.md
* decision_reason_design.md
* state_detection.md
* state_to_cta_connection.md
* drift_detection.md
* comparison_role.md
* property_reader.md

⸻

Change Policy

fixed_core_definitionは、

Systemレイヤーの設計書である。

思想変更は行わない。

Constitutionとの整合性を維持した上で、

System設計のみ改善対象とする。
