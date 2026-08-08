D｜Decision / Current State Pack
Purpose

過去Decisionを履歴として暗記するのではなく、Observation・Decision理由・成熟経緯を現在判断へ接続する。

同時に、現在のPhase・案件・未完了工程を保持する。

Common
Decision History原則

継承対象：

Observation
Decision
Decision理由
成熟として残した背景
今後も保持すべき判断原則

扱い方：

Decisionだけを継承しない
理由まで理解する
過去Decisionを現在へ強制適用しない
現在案件に必要な判断材料として接続する
現在SoTと不整合なら確認する
Common Decision History対象
Constitution成熟
Product成熟
Common Current State

最低限保持するもの：

現在Phase
現在案件
案件状態
現在Stage
前工程成果物
Product Owner Decisionの有無
停止条件
未反映差分
Maturity状態
Git状態
次工程候補

Current StateはDecision Historyと分離し、現在位置のみを扱う。

Module
Module Name

decision_os

Module Decision History対象

Formation材料なし

Module Current State
decision_OSは、現在判断を整理し、次のdecision更新へ接続するmoduleである。
decision_OSが扱うのは、現在の判断状態である。
decision_OSは、過去を管理するmoduleではない。
過去の判断材料を、現在判断へ接続する責務を持つ。
continuityは、現在判断を理解するための補助として扱う。
decision主体は、常にユーザー本人である。
decision_OSはdecisionを生成する主体ではない。
current decisionを反映する。
STATEを解釈する。
decision continuityを維持する。
次のCTAを現在判断へ適用する。
comparison結果を現在判断へ接続する。
decision更新を支援する。
保存、保留、見送りを扱う。
過去の判断材料を現在判断へ接続する。
decisionからSTATEを解釈する。
STATEは保存しない。current decisionから毎回算出する。
現在判断に対して、次のdecision更新を支援するCTAを適用する。
CTAはrecommendationではない。decision更新の入口として扱う。
現在判断を整理し、次のdecision更新へ接続する。
current decisionを更新可能に保つ。
decision continuityを維持する。
現在の自分として、何度でも判断形成を再開できるdecision loopを支える。
前moduleの判断形成を壊さず、次moduleで判断形成を再開できる状態を維持する。
現在判断を整理し、次のdecision更新へ接続するmodule。
現在の判断状態を扱う。
過去を管理するmoduleではない。
過去の判断材料を現在判断へ接続する。
decisionを生成するmoduleではない。
decision主体は常にユーザー本人である。
comparisonはdecision_OSの途中工程として存在する。
CTAはrecommendationではなく、decision更新の入口として扱う。
current decision
reason
fixed_core
comparison状況
現実との接触状況
decision更新状況
STATE
STATEは1つのみ。
STATEは保存せず、decisionから動的に導出する。
主CTAは1つのみ。
CTAは次画面ではなく、decision更新を開始する入口として扱う。
Knowledge
主要判断原則

Formation材料なし

Module SoT
brain/system/decision_os_role.md
brain/system/decision_framework.md
brain/system/state_definition.md
brain/system/state_detection.md
brain/system/state_to_cta_connection.md
brain/system/comparison_role.md
brain/system/decision_update_triggers.md
projects/iekau/products/decision_os/product_concept.md
projects/iekau/products/decision_os/ux_flow.md
projects/iekau/products/decision_os/data_connection.md
projects/iekau/products/decision_os/feature_scope_mvp.md
projects/iekau/products/decision_os/screen_structure.md
projects/iekau/products/decision_os/decision_memory.md
projects/iekau/products/external_property_search/decision_connection.md
Module Repository
projects/iekau/products/decision_os/
Boundary
Decision History Boundary

Decision Historyは、過去Decisionを現在へ強制適用しない。

Decision Historyは、現在案件に必要な判断材料として接続する。

Decision Historyは、現在SoTと不整合なら確認する。

Current State Boundary

Current StateはDecision Historyと分離し、現在位置のみを扱う。

Current Stateは、過去Decisionの蓄積そのものを扱わない。

Product Owner Boundary

Formation材料なし

Codex Boundary

Formation材料なし

General Design GPT Boundary

Formation材料なし

Knowledge Boundary

Formation材料なし

Authority Boundary

Formation材料なし

Non Responsibility
recommendationしない。
dashboard化しない。
task管理しない。
current decisionを固定しない。
decision主体を変更しない。
decisionをmoduleが生成しない。
decisionをAIが生成しない。
recommendationによってdecisionを生成しない。
CTAはrecommendationではない。
comparisonはdecisionを決定しない。
Loading
読み込み対象

Formation材料なし

読み込み目的

Formation材料なし

Transfer
Transfer対象

Formation材料なし

Transfer目的

Formation材料なし

Connected Modules

Formation材料なし

Learning
Learning Stage

Formation材料なし

Learning対象.md
brain/system/decision_os_role.md
brain/system/decision_framework.md
brain/system/state_definition.md
brain/system/state_detection.md
brain/system/state_to_cta_connection.md
brain/system/comparison_role.md
brain/system/decision_update_triggers.md
projects/iekau/products/decision_os/product_concept.md
projects/iekau/products/decision_os/ux_flow.md
projects/iekau/products/decision_os/data_connection.md
projects/iekau/products/decision_os/feature_scope_mvp.md
projects/iekau/products/decision_os/screen_structure.md
projects/iekau/products/decision_os/decision_memory.md
projects/iekau/products/external_property_search/decision_connection.md
Stageごとの到達状態

Formation材料なし

完了条件

Formation材料なし