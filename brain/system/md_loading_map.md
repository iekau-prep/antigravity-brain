md_loading_map.md
Updated: 2026-06-29
Status: Active

⸻

Purpose
本書は、
antigravity-brainにおける 設計書の読み込みルールを定義する。
目的は、
Constitution、
System、
Module、
Implementation
の責務を維持しながら、
必要最小限の設計書だけを読み込み、
設計・実装・レビュー・AI利用時の 責務混線を防ぐことである。
本書は、
「どの設計書を読むべきか」
ではなく、
「どの責務から理解するべきか」
を定義する。

⸻

Scope
本書が扱うもの
* 読み込み順序
* レイヤー別読み込みルール
* 作業別読み込み方針
* AI利用時の読み込み基準
* 最小読み込み原則
本書が扱わないもの
* 各設計書の内容
* UI仕様
* 実装方法
* Product仕様
* Constitution思想
各設計書の内容は、
それぞれの設計書を参照する。

⸻

Relationship
本書は、
md_structure_tree.mdで定義された レイヤー構造を前提とする。
読み込み順は、
以下の責務階層に従う。
Constitution

↓

System

↓

Module

↓

Implementation
読み込みは、
常に上位責務から開始する。
下位レイヤーのみを読んで 設計・実装を開始してはならない。
本書は、
「何を読むか」
ではなく、
「どの責務を理解してから次へ進むか」
を定義する。

⸻

Loading Principle
設計書は、
多く読めば良いわけではない。
重要なのは、
現在の作業に必要な責務だけを 正しい順番で読むことである。
読み込みは、
以下の原則を維持する。

⸻

1. 上位責務を優先する
まず思想を理解し、
その後に設計、
Module、
実装へ進む。

⸻

2. 必要最小限とする
今回の作業範囲に必要な設計書のみを読む。
関連しない設計書は読み込まない。

⸻

3. 同一責務を重複して読まない
同じ責務を複数の設計書で 探し始めない。
責務の正本を参照する。

⸻

4. Layerを飛ばさない
Moduleだけ、
Implementationだけ、
という読み込みを行わない。
必ず
Constitution
↓
System
↓
Module
↓
Implementation
の順を維持する。

⸻

5. 作業目的を優先する
読み込み対象は、
ファイル名ではなく、
作業目的から決定する。
例
* 思想整理
* System設計
* Product設計
* UI設計
* 実装
* レビュー
など、
目的ごとに必要な責務のみを読む。

⸻

読み込み優先順位
標準的な読み込み順は、
以下を基本とする。
① Constitution

↓

② System

↓

③ Module

↓

④ Implementation
さらに、
Systemでは、
以下を基本順とする。
decision_framework

↓

Core Decision Systems
(current decision / fixed_core / history)

↓

State Systems

↓

Connection Systems

↓

Interaction Systems
(cta / onboarding / line / ui_event_mapping)

↓

Monitoring Systems
(event_tracking / kpi_metrics)

↓

Governance Systems
(release / security / future)
Moduleでは、
以下の順で参照する。
product_concept

↓

ux_flow

↓

screen_structure

↓

data_connection

↓

implementation
読み込み対象は、
常に今回の責務に限定する。
設計書全体を読み込むことを前提とせず、
必要な責務だけを参照することで、
brain全体の保守性とAI利用時の一貫性を維持する。


⸻

作業別 Loading Map
読み込み対象は、
ファイル名ではなく、
現在の作業責務から決定する。
以下を標準ルールとする。

⸻

Constitution変更
目的
思想を追加・修正・整理する。
必須
constitution/

README

対象Constitution
補助
md_structure_tree.md
重要
System、
Module、
Implementation
を直接修正してはならない。
まずConstitutionを更新し、
その後に下位レイヤーへ反映する。

⸻

System設計
目的
思想を設計責務へ翻訳する。
必須
Constitution

↓

対象System
例
* decision_framework
* history
* event_tracking
* kpi_metrics
* user_data_strategy
* product_connection_design
* cta_strategy
* line_strategy
* monetization
* onboarding_design
補助
md_structure_tree.md

md_loading_map.md
重要
Moduleを直接変更する前に、
System責務を整理する。

⸻

Module設計
目的
System責務を、
各プロダクトへ適用する。
必須
Constitution

↓

対象System

↓

対象Module
例
property_reader/

comparison/

decision_os/
補助
README
product_concept
ux_flow
重要
Moduleは、
System責務を再定義しない。

⸻

Implementation
目的
Module責務をコードへ反映する。
必須
Constitution

↓

対象System

↓

対象Module

↓

Implementation
重要
実装のみで
思想、
責務、
接続を変更しない。
判断が必要になった場合は、
ModuleまたはSystemへ戻る。

⸻

UI設計
目的
Module責務を
画面へ翻訳する。
必須
対象Module

↓

対象UX

↓

screen_structure
補助
cta_role

product_roles
重要
UIだけを変更しない。
必ずModule責務を確認してから設計する。

⸻

Logic設計
目的
判断ロジックを設計する。
必須
decision_framework

↓

state_definition

↓

対象System
補助
decision_reason_design

decision_update_triggers

drift_detection
重要
ロジックは、
Constitution思想と
System責務を維持する。

⸻

Monitoring
目的
設計品質、
責務整合、
運用状態を確認する。
必須
event_tracking

↓

kpi_metrics

↓

history

↓

release_checklist
補助
kpi_metrics

history
重要
Monitoringは、
設計を変更しない。
状態を確認する責務のみを持つ。

⸻

Documentation
目的
設計資産を整理・更新する。
必須
md_structure_tree

md_loading_map

README
補助
対象設計書
重要
Documentationでは、
思想変更を行わない。
構造整理、
参照整理、
責務整理のみを行う。

⸻

Loading Rule
すべての作業は、
以下の順序を維持する。
作業目的

↓

責務の特定

↓

対象レイヤーの決定

↓

必要最小限の設計書を読み込む

↓

設計・実装・レビューを行う
大量の設計書を一括で読み込むことは推奨しない。
責務単位で読み込み、
責務単位で設計することを、
brain全体の標準運用とする。


⸻

AI引き継ぎルール
新しいAI環境、
または新しい開発担当者へ引き継ぐ場合は、
設計書全体を一括で渡さない。
作業目的を明確にし、
必要な責務のみを読み込む。
引き継ぎは、
以下の順序を標準とする。
① 作業目的

↓

② 対象レイヤー

↓

③ 必要最小限の設計書

↓

④ 今回変更してよい責務

↓

⑤ 変更してはいけない責務

↓

⑥ 出力条件
引き継ぎ時は、
必ず責務境界を明示する。
思想変更が含まれる場合は、
Constitutionから開始する。

⸻

Loading Examples
以下を標準例とする。

⸻

Constitutionを修正したい
Constitution

↓

対象Constitution

↓

必要に応じてSystemへ反映

⸻

Systemを修正したい
Constitution

↓

対象System

↓

必要に応じてModuleへ反映

⸻

Productを設計したい
Constitution

↓

対象System

↓

対象Module

⸻

UIを改善したい
Constitution

↓

対象System

↓

対象Module

↓

UI設計

⸻

コードを修正したい
Constitution

↓

対象System

↓

対象Module

↓

Implementation

⸻

READMEや設計書を更新したい
md_structure_tree

↓

md_loading_map

↓

README

↓

対象Document

⸻

すべての作業は、
責務階層を維持したまま進める。

⸻

Rule
本書では、
以下を共通ルールとする。
1. 作業目的から読み込みを決定する
ファイル名から探し始めない。
まず、
「今回何を行うか」
を定義する。

⸻

2. 必要最小限を維持する
関連する設計書だけを読む。
読み込み量ではなく、
責務整合を優先する。

⸻

3. レイヤーを飛ばさない
Moduleだけ、
Implementationだけ、
という読み込みは行わない。
必ず
Constitution
↓
System
↓
Module
↓
Implementation
の順を維持する。

⸻

4. 責務境界を維持する
思想はConstitution、
設計はSystem、
個別仕様はModule、
コードはImplementationで管理する。
責務を跨いで変更してはならない。

⸻

5. Documentationは構造を維持する
README、
md_structure_tree、
md_loading_mapは、
構造を管理する。
思想や仕様を追加する場所ではない。

⸻

Change Policy
本書は、
brain全体の読み込み運用を定義する。
そのため、
以下の場合のみ更新対象とする。
* レイヤー構造変更
* 読み込み順変更
* 運用ルール変更
* Constitutionとの接続変更
* Documentation運用変更
個別Module追加や、
Systemファイル追加のみでは、
本書を更新しない。
本書は、
長期運用のための読み込み基準書として維持する。

⸻

最終定義
md_loading_mapとは、
Constitution、
System、
Module、
Implementation
の責務階層を維持しながら、
作業目的に応じて、
必要最小限の設計書だけを読み込むための
運用設計書である。
本書は、
設計資産を効率よく参照するためだけではなく、
責務混線を防ぎ、
思想から実装までを一方向に継承するための
読み込み基準として機能する。
これにより、
AI、
開発者、
将来の保守担当者が、
共通の責務構造を維持したまま設計・実装・レビューを継続できる状態を支える。



