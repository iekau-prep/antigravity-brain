D｜Decision / Current State Pack
Purpose
過去Decisionを履歴として暗記するのではなく、Observation・Decision理由・成熟経緯を現在判断へ接続する。
同時に、現在のPhase・案件・未完了工程を保持する。
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
継承対象
* Constitution成熟
* System成熟
* Operation成熟
* Product成熟
* 全体設計Decision
* 横断整合レビュー
* Foundation成熟
* AI Design OS成熟
主要判断原則
System成熟
* 1案件＝1論点
* ObservationとDecisionを分離する
* 横断レビューでは修正しない
* Observationから案件化する
* decision主体は常にユーザー本人
* System・Product・Module・AIはdecisionを生成しない
* current decisionは主体ではなく参照中心
* 思想変更ではなく読解境界を整える
Operation成熟
* Role責務を変更せずInput品質を整える
* Builder前にSoT読解・設計方針・構造確認を行える
* Implementationは採用済み成果物を変更せずRepositoryへ反映する
* Implementation ValidationはBuilder成果物とRepository反映結果を照合する
* 比較対象不足時は停止する
* Codex用プロンプトは自己完結させる
Current State
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
完了条件
* 過去Decisionを理由まで説明できる
* 現在案件へ必要なDecisionだけを接続できる
* 過去Decisionと現在状況を混同しない
* 現在地・次工程・停止条件を説明できる
