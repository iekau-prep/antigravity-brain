# D｜Decision / Current State Pack

## Purpose

過去Decisionを履歴として暗記するのではなく、Observation・Decision理由・成熟経緯を現在判断へ接続する。

同時に、現在のPhase・案件・未完了工程を保持する。

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

### Common Decision History対象

- Constitution成熟
- Product成熟

### Common Current State

最低限保持するもの：

- 現在Phase
- 現在案件
- 案件状態
- 現在Stage
- 前工程成果物
- Product Owner Decisionの有無
- 停止条件
- 未反映差分
- Maturity状態
- Git状態
- 次工程候補

Current StateはDecision Historyと分離し、現在位置のみを扱う。

---

## Module

### Module Name

type_diagnosis GPT

### Module Decision History対象

- Formation材料なし

### Module Current State

type_diagnosis GPTは、以下を現在判断へ接続する。

- Foundation Packの現在Stage
- 読了済み.md
- 次に読み込む.md
- 不明点
- 停止条件

type_diagnosis GPTは、不明点を保持せず、その時点で停止する。

type_diagnosis GPTは、Foundation Packで指定された.mdを1ファイルずつ扱う。

type_diagnosis GPTは、各.md読了後、簡潔な理解メモと次に読み込む.md名を返却する。

type_diagnosis GPTは、Stage（1〜6）単位で理解確認を行う。

type_diagnosis GPTは、Learning Stage中はFoundation Packで定義された学習順序を唯一の学習順序として扱う。

### Current Case Connection

- Current Case：type_diagnosis｜LINE / Persistence Continuity
- Case Status：Production Release CLOSED
- Development Runtime Validation：PASS / CLOSED
- Production DB Migration：APPLIED AND VERIFIED
- Production Application Release：RELEASED AND VERIFIED
- Production Runtime Validation：PASS / CLOSED
- Blocking Finding：なし
- Historical Close Record：`brain/modules/type_diagnosis/production_release_close.md`
- Current next stage：Case Close

---

## Knowledge

### 主要判断原則

#### System成熟

- 1案件＝1論点
- ObservationとDecisionを分離する
- 横断レビューでは修正しない
- Observationから案件化する
- decision主体は常にユーザー本人
- System・Product・Module・AIはdecisionを生成しない
- current decisionは主体ではなく参照中心
- 思想変更ではなく読解境界を整える

#### Operation成熟

- Role責務を変更せずInput品質を整える
- Builder前にSoT読解・設計方針・構造確認を行える
- Implementationは採用済み成果物を変更せずRepositoryへ反映する
- Implementation ValidationはBuilder成果物とRepository反映結果を照合する
- 比較対象不足時は停止する
- Codex用プロンプトは自己完結させる

---

## Boundary

### Decision History Boundary

Decision Historyは、過去Decisionを現在へ強制適用しない。

Decision Historyは、現在案件に必要な判断材料として接続する。

Decision Historyは、現在SoTと不整合なら確認する。

### Current State Boundary

Current StateはDecision Historyと分離し、現在位置のみを扱う。

Current Stateは、過去Decisionの蓄積そのものを扱わない。

---

## Loading

### 読み込み対象

Decision / Current State Packでは、以下を読み込み対象として扱う。

- Decision History原則
- Common Decision History対象
- Module Decision History対象
- 主要判断原則
- Common Current State
- Module Current State

### 読み込み目的

過去Decision、Decision理由、成熟経緯を現在案件へ接続する。

現在Phase、現在案件、現在Stage、前工程成果物、停止条件、次工程候補を整理する。

---

## Transfer

### Transfer対象

Decision / Current State Packは、以下を次工程へ受け渡す。

- 現在案件へ接続すべきDecision
- Decision理由
- 成熟経緯
- 現在Phase
- 現在案件
- 現在Stage
- 前工程成果物
- 停止条件
- 次工程候補

### Transfer目的

過去Decisionと現在状況を混同せず、現在案件に必要な判断材料のみを次工程へ接続する。

---

## Connected Modules

### System成熟

- Purpose：System成熟に関するDecision Historyを現在判断へ接続する
- Responsibility：System成熟の主要判断原則を保持する
- Boundary：System変更は扱わない
- Input：System成熟Decision / Observation / Decision理由
- Output：現在案件に必要なSystem成熟判断材料
- Transfer：現在案件へ接続する
- Stop Condition：現在SoTと不整合がある場合

### Operation成熟

- Purpose：Operation成熟に関するDecision Historyを現在判断へ接続する
- Responsibility：Operation成熟の主要判断原則を保持する
- Boundary：Operation変更は扱わない
- Input：Operation成熟Decision / Observation / Decision理由
- Output：現在案件に必要なOperation成熟判断材料
- Transfer：現在案件へ接続する
- Stop Condition：現在SoTと不整合がある場合

### Foundation成熟

- Purpose：Foundation成熟に関するDecision Historyを現在判断へ接続する
- Responsibility：Foundation成熟の履歴対象を保持する
- Boundary：Foundation変更は扱わない
- Input：Foundation成熟Decision / Observation / Decision理由
- Output：現在案件に必要なFoundation成熟判断材料
- Transfer：現在案件へ接続する
- Stop Condition：現在SoTと不整合がある場合

### AI Design OS成熟

- Purpose：AI Design OS成熟に関するDecision Historyを現在判断へ接続する
- Responsibility：AI Design OS成熟の履歴対象を保持する
- Boundary：AI Design OS変更は扱わない
- Input：AI Design OS成熟Decision / Observation / Decision理由
- Output：現在案件に必要なAI Design OS成熟判断材料
- Transfer：現在案件へ接続する
- Stop Condition：現在SoTと不整合がある場合

---

## 完了条件

- 過去Decisionを理由まで説明できる
- 現在案件へ必要なDecisionだけを接続できる
- 過去Decisionと現在状況を混同しない
- 現在地・次工程・停止条件を説明できる
