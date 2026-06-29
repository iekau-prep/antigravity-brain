# brain/system/history.md
Updated: 2026-06-29

Status: Active

Purpose

本書は、

Constitutionで定義された
decision continuity思想を、

System設計へ適用するための定義書である。

historyとは何かは、

Constitutionが扱う。

本書は、

historyをSystem内でどのように扱うかを定義する。

⸻

Scope

本書が扱うもの

* historyの役割
* history構造
* decisionとの関係
* current decisionとの関係
* decision continuityとの関係
* System接続
* 更新方針

本書が扱わないもの

* 判断思想
* decision continuity思想
* 記憶の価値
* ユーザー体験思想

これらはConstitutionを参照する。

⸻

Relationship

Constitution

↓

history

↓

System Modules

↓

Implementation

historyは、

Constitutionで定義された
decision continuityを、

System全体へ接続する役割を持つ。

各Moduleは、

historyを直接更新対象とするのではなく、

current decision更新を通じて
historyと接続する。

⸻

Design Principle

historyは、

保存機能として扱わない。

履歴一覧として扱わない。

管理機能として扱わない。

historyは、

decision continuityを支える
System構造として扱う。

Systemは、

historyを管理するのではなく、

現在の判断を、

過去の判断と自然に接続できる状態を支える。

historyは、

current decision、

reason、

fixed_core、

comparison、

driftを横断して、

判断の連続性を維持するために存在する。

⸻

System Role

historyは、

過去を保存するためではない。

現在のdecisionを、

継続可能にするために存在する。

Systemが扱うのは、

「何を保存したか」

ではなく、

「現在の判断が、
どのような判断更新を経て形成されたか」

である。

そのためhistoryは、

decision logではなく、

decision continuityを支える
System構造として扱う。


⸻

History Structure

historyは、

保存領域ではない。

decision continuityを成立させるための、

System構造として扱う。

historyが保持する対象は、

個々の物件ではなく、

判断更新の連続性である。

そのためSystemは、

以下の接続を維持する。

* current decision
* reason
* fixed_core
* comparison
* drift
* decision更新

historyは、

これらを時系列ではなく、

判断文脈として接続する。

⸻

Relationship with decision

historyは、

decisionそのものではない。

decisionは、

現在の判断である。

historyは、

そのdecisionが、

どのような更新を経て現在へ至ったかを支える。

Systemは、

過去のdecisionを保持することではなく、

現在のdecisionへ自然に再接続できることを目的とする。

⸻

Relationship with current decision

current decisionは、

Systemの判断主体である。

historyは、

current decisionを置き換えない。

優先しない。

過去の判断を理由に、

現在の判断を固定しない。

historyは、

現在の判断を理解しやすくするための、

補助構造として扱う。

常に、

current decisionを最優先とする。

⸻

Relationship with fixed_core

fixed_coreは、

長期的な判断軸である。

historyは、

fixed_core自体を保存対象としない。

Systemは、

fixed_coreが、

どのような判断更新の中で再確認されたかを扱う。

そのためhistoryは、

fixed_core変更ではなく、

fixed_coreとの再接続を支える。

⸻

Relationship with drift

driftは、

判断更新の中で自然に発生する。

historyは、

driftを記録するためではない。

Systemは、

過去と現在の判断を比較し、

driftを理解可能にするためにhistoryを利用する。

historyは、

drift修正主体ではなく、

drift理解を支える構造として扱う。

⸻

Relationship with decision continuity

historyは、

decision continuityを成立させるために存在する。

decision continuityとは、

過去を繰り返すことではない。

現在の判断が、

過去の判断と自然につながりながら、

新しいdecisionへ更新され続ける状態を指す。

historyは、

判断を固定しない。

判断を誘導しない。

Systemは、

判断更新が継続できる状態を支えるために、

historyをdecision continuityの基盤として扱う。


⸻

System Connections

historyは、

以下のSystem設計と接続する。

Decision

* decision_framework.md
* decision_reason_design.md
* decision_update_triggers.md

State

* state_definition.md
* state_detection.md

Module

* comparison_role.md
* decision_os_role.md
* property_connection_design.md
* external_property_search.md

Continuity

* fixed_core_definition.md
* drift_detection.md
* line_strategy.md
* user_data_strategy.md

historyは、

各設計書の代替ではない。

各System設計を横断し、

decision continuityを支える接続層として扱う。

⸻

Module Responsibilities

各Moduleは、

historyへ直接保存することを目的としない。

各Moduleの責務は、

現在のdecision更新を支えることである。

historyとの関係は、

以下のように整理する。

type_diagnosis

・迷い方理解を支える

purchase_motivation

・fixed_coreとの接続を支える

rent_vs_buy

・選択肢理解を支える

loan_safety

・現実接触を支える

property_reader

・current decision形成を支える

comparison

・reason整理とdecision更新を支える

decision_OS

・現在のdecision continuityを支える

LINE

・decision continuityを時間軸で維持する

historyは、

各Moduleを管理しない。

各Moduleによる判断更新を、

継続可能にする構造として存在する。

⸻

Boundary

historyは、

以下を行わない。

* recommendation
* 判断代行
* AI意思決定
* current decision固定
* ranking生成
* 正解提示
* decision評価
* 履歴優先表示

historyは、

判断を保存する主体ではなく、

判断更新を継続可能にするSystem構造として扱う。

⸻

MVP Policy

MVPでは、

history機能の充実を目的としない。

優先するのは、

* current decision保持
* decision continuity維持
* comparison接続
* fixed_core再接続
* drift理解

である。

履歴管理機能、

分析機能、

可視化機能は、

MVP対象外とする。

⸻

Future Policy

将来的には、

historyを、

履歴一覧として拡張するのではない。

decision continuityを強化する構造として発展させる。

例えば、

* decision変化の理解
* fixed_core再接続支援
* drift変化理解
* comparison文脈保持
* 現実イベントとの接続

など、

判断更新を継続しやすくする構造のみを対象とする。

historyは、

保存量を増やすためではなく、

判断精度を継続的に高めるために進化する。


⸻

Related Documents

Constitution

* constitution_experience.md

System

* decision_framework.md
* decision_reason_design.md
* decision_update_triggers.md
* state_definition.md
* comparison_role.md
* decision_os_role.md
* fixed_core_definition.md
* drift_detection.md
* line_strategy.md
* user_data_strategy.md

Module

* property_reader
* comparison
* decision_OS

⸻

Rule

historyは、

以下の原則を維持する。

* decisionを唯一の判断事実として扱う
* current decisionを主体とする
* fixed_coreを保存対象としない
* driftを履歴ではなく変化として扱う
* recommendationへ利用しない
* AIが判断を生成しない
* Module責務を吸収しない
* Constitutionと矛盾しない

historyは、

保存機能ではなく、

decision continuityを支えるSystem構造として利用する。

⸻

Change Policy

historyは、

Systemレイヤーの設計書である。

履歴管理機能の追加を目的として更新しない。

更新対象は、

* decision continuity
* current decisionとの接続
* fixed_coreとの接続
* driftとの接続
* Module間接続

のみとする。

思想変更が必要な場合は、

Constitutionを優先して見直す。

Systemでは、

Constitutionとの整合性を維持した範囲で設計改善のみを行う。

⸻

最終定義

historyとは、

decisionを保存する仕組みではない。

current decision、

fixed_core、

drift、

Module間の判断更新を、

時間軸を超えて継続可能にするための、

decision continuity構造である。

historyは、

判断結果を管理するためではなく、

ユーザーが判断を更新し続けられる状態を支える、

Systemレイヤーの継続設計である。
