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
loan_safety
Module Decision History対象
* System成熟
* Operation成熟
* 全体設計Decision
* 横断整合レビュー
* Foundation成熟
* AI Design OS成熟
Module Current State
* 現実接触moduleとして扱う。
* 感情decisionを現実へ接触させるmoduleである。
* 補助decision更新レイヤーとして存在する。
* 現実drift補正を担う。
* 現実感更新を行う。
* 現実接触 → 許容整理 → decision更新補助を担う。
* 「この条件で本当に生活できるか」を現実へ接続すること。
* 返済余力を扱うこと。
* 生活維持を扱うこと。
* 将来変化を扱うこと。
* 許容リスクを扱うこと。
* 不安構造を扱うこと。
* 「現実を理解した上で、どう選ぶか」を整理すること。
* 支払い現実接触を行うこと。
* 許容リスク整理を行うこと。
* decision更新準備を行うこと。
* 「この条件で本当に生活できるか」を現実へ接続すること。
* 現在のdecisionを現実理解を通して更新可能状態へ接続すること。
* 理想や感情を否定せず、支払い・生活・将来変化へ接触すること。
* 理解した上で向き合える状態を作ること。
* 現実接触module。
* 補助decision更新レイヤー。
* 現実drift補正。
* 現実感更新。
* 現実接触 → 許容整理 → decision更新補助。
* 返済余力
* 生活維持
* 生活感
* キャッシュ残量
* 将来変化耐性
* 精神余白
* 許容リスク
* リスク理解
* 生活感理解
* 許容整理

Knowledge
主要判断原則
Formation材料なし
Module SoT
* projects/iekau/products/loan_safety/README.md
* projects/iekau/products/loan_safety/product_concept.md
* projects/iekau/products/loan_safety/data_connection.md
* projects/iekau/products/loan_safety/diagnosis_logic.md
* projects/iekau/products/loan_safety/completion_definition.md
* projects/iekau/products/loan_safety/state_labels.md
* projects/iekau/products/loan_safety/ui_result_flow.md
* projects/iekau/products/loan_safety/character_templates.md
* projects/iekau/products/property_reader/loan_safety_connection.md
Module Repository
* projects/iekau/products/loan_safety/

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
* 安全強制を行わない。
* 買うな誘導を行わない。
* 危険煽りを行わない。
* 一律NG判定を行わない。
* ローン審査ではない。
* 借入承認ではない。
* 安全判定ではない。
* 推薦ではない。
* 購入許可を行わない。
* 借入承認を行わない。
* 最適物件提案を行わない。
* 正解提示を行わない。
* decision保存を行わない。
* STATE生成を行わない。
* decision自体は更新しない。
* 「買うべき」「やめるべき」を出力しない。
* 安全判定を出力しない。
* 自動decisionを出力しない。

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
* projects/iekau/products/loan_safety/README.md
* projects/iekau/products/loan_safety/product_concept.md
* projects/iekau/products/loan_safety/data_connection.md
* projects/iekau/products/loan_safety/diagnosis_logic.md
* projects/iekau/products/loan_safety/completion_definition.md
* projects/iekau/products/loan_safety/state_labels.md
* projects/iekau/products/loan_safety/ui_result_flow.md
* projects/iekau/products/loan_safety/character_templates.md
* projects/iekau/products/property_reader/loan_safety_connection.md
Stageごとの到達状態
Formation材料なし

完了条件
Formation材料なし
