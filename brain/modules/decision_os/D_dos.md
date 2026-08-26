# D｜Decision / Current State Pack

## Purpose

過去Decisionを履歴として暗記するのではなく、Observation・Decision理由・成熟経緯を現在判断へ接続する。

同時に、現在のPhase・案件・未完了工程を保持する。

---

## Common

### Decision History原則

継承対象：

Formation材料なし

decision_OS固有のDecision History、Decision理由、成熟経緯、現在も保持すべき個別Decisionは形成しない。

### Common Decision History対象

Formation材料なし

### Common Current State

Formation材料なし

Current Phase、Current Case、案件状態、Current Stage、前工程成果物、Product Owner Decisionの有無、停止条件、未反映差分、Maturity状態、Git状態、次工程候補を推測しない。

Current StateはDecision Historyと分離し、現在位置のみを扱う。

---

## Module

### Module Name

decision_OS

### Module Decision History対象

Formation材料なし

### Module Current State

Formation材料なし

decision_OS固有のCurrent Phase、Current Case、Open / Closed / HOLD / STOP、前工程成果物、Current Responsible Role、Next Formal State、Current Blocking、Required Input、Implementation Current Stateを形成しない。

---

## Knowledge

### 主要判断原則

#### System成熟

- decision主体はユーザー本人
- decisionを生成しない
- current decisionを固定しない
- current decisionは参照中心として扱う

#### Operation成熟

Formation材料なし

---

## Boundary

### Decision History Boundary

Decision Historyは、過去Decisionを現在へ強制適用しない。

decision_OS固有Decision HistoryのFormation材料がない場合、System Core原則をModule固有Decision Historyへ変換しない。

### Current State Boundary

Current StateはDecision Historyと分離し、現在位置のみを扱う。

NOT IDENTIFIEDのFactを推測してCurrent Factとして形成しない。

A / B / C完了またはD未完了から、Current Case、Current Responsible Role、Next Formal Stateを推測しない。

---

## Loading

### 読み込み対象

- Decision History原則
- Common Decision History対象
- Module Decision History対象
- 主要判断原則
- Common Current State
- Module Current State

### 読み込み目的

過去Decision、Decision理由、成熟経緯を現在判断へ接続する。

現在Phase、現在案件、現在Stage、前工程成果物、停止条件、次工程候補を整理する。

---

## Transfer

### Transfer対象

Formation材料なし

### Transfer目的

過去Decisionと現在状況を混同せず、現在案件に必要な判断材料のみを次工程へ接続する。

---

## Connected Modules

### System成熟

- Purpose：System成熟に関するDecision Historyを現在判断へ接続する
- Responsibility：System成熟の主要判断原則を保持する
- Boundary：System変更は扱わない
- Input：System Maturity Observation｜Constitution整合：進行中
- Output：Formation材料なし
- Transfer：Formation材料なし
- Stop Condition：現在SoTと不整合がある場合

System Maturity Observationを、decision_OSのCurrent Phase、Current Case、Current Stage、Maturity状態、またはCurrent Stateへ変換しない。

### Operation成熟

Formation材料なし

### Foundation成熟

- Purpose：Foundation成熟に関するDecision Historyを現在判断へ接続する
- Responsibility：Foundation成熟の履歴対象を保持する
- Boundary：Foundation変更は扱わない
- Input：decision_OS Foundation Progress Observation｜A / B / C完了、D未完了
- Output：Formation材料なし
- Transfer：Formation材料なし
- Stop Condition：現在SoTと不整合がある場合

Foundation Progress Observationを、Current Case、Current Responsible Role、Next Formal Stateへ変換しない。

### AI Design OS成熟

Formation材料なし

---

## 完了条件

- 過去Decisionを理由まで説明できる
- 現在案件へ必要なDecisionだけを接続できる
- 過去Decisionと現在状況を混同しない
- 現在地・次工程・停止条件を説明できる
