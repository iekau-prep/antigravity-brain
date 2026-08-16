# D_rf｜Repository Formation GPT Decision / Current State Foundation

## Purpose

本書は、過去Decisionを履歴として暗記するのではなく、
Observation、Decision理由、成熟として残した背景を現在判断へ接続するための共通原則を保持する。

また、Decision HistoryとCurrent Stateを混同しないための共通Boundaryを保持する。

本書は、Repository Formation GPT固有のDecision History、
Current State、Phase、案件管理、成熟管理を定義しない。

---

## Common

### Decision History原則

継承対象：

- Observation
- Decision
- Decision理由
- 成熟として残した背景
- 今後も保持すべき判断原則

扱い方：

- Decisionだけを継承しない
- 理由まで理解する
- 過去Decisionを現在へ強制適用しない
- 現在案件に必要な判断材料として接続する
- 現在SoTと不整合なら確認する

### Decision HistoryとCurrent Stateの分離

Decision Historyは、過去Decisionを現在へ強制適用しない。

Decision Historyは、現在案件に必要な判断材料として接続する。

Current StateはDecision Historyと分離し、現在位置のみを扱う。

Current Stateは、過去Decisionの蓄積そのものを扱わない。

---

## Knowledge

### System成熟の共通原則

- 1案件＝1論点
- ObservationとDecisionを分離する
- 横断レビューでは修正しない
- Observationから案件化する
- decision主体は常にユーザー本人
- System・Product・Module・AIはdecisionを生成しない
- current decisionは主体ではなく参照中心
- 思想変更ではなく読解境界を整える

### Operation成熟の共通原則

- Role責務を変更せずInput品質を整える
- Builder前にSoT読解・設計方針・構造確認を行える
- Implementationは採用済み成果物を変更せずRepositoryへ反映する
- Implementation ValidationはBuilder成果物とRepository反映結果を照合する
- 比較対象不足時は停止する
- Codex用プロンプトは自己完結させる

---

## Transfer

### Transfer対象

次工程へ、現在案件に必要な範囲で以下を受け渡す。

- 接続すべきDecision
- Decision理由
- 成熟経緯
- 前工程成果物
- 停止条件
- 次工程候補

### Transfer目的

過去Decisionと現在状況を混同せず、現在案件に必要な判断材料のみを次工程へ接続する。

---

## 完了条件

- 過去Decisionを理由まで説明できる
- 現在案件へ必要なDecisionだけを接続できる
- 過去Decisionと現在状況を混同しない
- 前工程成果物、停止条件、次工程候補を説明できる
