D｜Decision / Current State Pack
Purpose
過去Decisionを履歴として暗記するのではなく、Observation・Decision理由・成熟経緯を現在判断へ接続する。
同時に、現在のPhase・案件・未完了工程を保持する。

Common
Decision History原則
継承対象：
* Observation
* Decision
* Decision理由
* 成熟として残した背景
* 今後も保持すべき判断原則
扱い方：
* Decisionだけを継承しない
* 理由まで理解する
* 過去Decisionを現在へ強制適用しない
* 現在案件に必要な判断材料として接続する
* 現在SoTと不整合なら確認する
Common Decision History対象
* Constitution成熟
* Product成熟
Common Current State
最低限保持するもの：
* 現在Phase
* 現在案件
* 案件状態
* 現在Stage
* 前工程成果物
* Product Owner Decisionの有無
* 停止条件
* 未反映差分
* Maturity状態
* Git状態
* 次工程候補
Current StateはDecision Historyと分離し、現在位置のみを扱う。

Module
Module Name
comparison
Module Decision History対象
* System成熟
* Operation成熟
* 全体設計Decision
* 横断整合レビュー
* Foundation成熟
* AI Design OS成熟
Module Current State
* comparisonは、物件を評価するmoduleではない。現在判断を整理するmoduleである。
* relative reasonを整理する。
* current decision更新を支援する。
* fixed_core再確認を支援する。
* decision driftを可視化する。
* 本命形成を支援する。
* decision_OSへ判断を戻す。
* comparisonはdecision_OSの途中工程として存在する。
* 「迷いを整理し、本命形成を進め、future driftを理解しながら、decisionを段階的に更新するためのdecision progression UX」である。
* 「どちらが良いか」を決める場所ではない。
* 「何を守り、何を許容し、どの未来を本命として考えるか」を整理する本命形成UXである。
* 「迷いの構造可視化装置」である。
* 「比較を終わらせるため」の装置である。
* 「比較疲労を整理する」装置である。
* 「比較を整理し、本命形成へ戻す」装置である。
* 一時的迷い整理装置である。
* 本命形成の中核UXである。
* relative reasonを整理すること。
* fixed_core再確認を支援すること。
* decision driftを可視化すること。
* 本命形成を支援すること。
* decision_OSへ判断を戻すこと。
* 「どこで迷っているか」を理解すること。
* future driftを理解すること。
* 許容構造を整理すること。
* fixed_coreへ再接続すること。
* decision更新を支援すること。
* 現在判断を整理すること。
* 「なぜ今この2件で迷っているのか」を理解すること。
* 「どの未来を、どの条件を許容して選ぼうとしているか」を整理すること。
* 本命形成へ接続すること。
* decision更新を支援すること。
* decision progression UX
* 本命形成UX
* 迷いの構造可視化装置
* 本命形成整理装置
* reason生成装置
* 一時的内部整理装置

Knowledge
主要判断原則
Formation材料なし
Module SoT
* brain/system/comparison_role.md
* projects/iekau/products/property_reader/comparison_flow.md
Module Repository
* projects/iekau/products/property_reader/

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
* recommendationしない。
* rankingしない。
* score化しない。
* AIが判断しない。
* decision主体を変更しない。
* comparison滞在を目的化しない。
* AI比較を行わない。
* 自動見送りを行わない。
* 強制収束を行わない。
* ランキング化を行わない。
* スコア主導を行わない。
* 比較エンタメ化を行わない。
* 永続比較を行わない。
* dashboard化を行わない。
* 「正解」を提示しない。

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
System成熟
Formation材料なし
Operation成熟
Formation材料なし
Foundation成熟
Formation材料なし
AI Design OS成熟
Formation材料なし

Learning
Learning Stage
Formation材料なし
Learning対象.md
* brain/system/comparison_role.md
* projects/iekau/products/property_reader/comparison_flow.md
Stageごとの到達状態
Formation材料なし

完了条件
Formation材料なし