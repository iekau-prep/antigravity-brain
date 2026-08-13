# GD-001 Integration Knowledge

## Purpose

本書はGD-001における横断的なDesign Formation Knowledgeを、現在の判断で必要な場合に参照できる形で保持する。

本書はCurrent SoT、工程進行、Implementation状況、Repository反映状況の記録ではない。

## Information Boundary

### Repository Current Fact

Repository Current Factは、確認済みの現在本文およびCurrent Boundaryへの参照として扱う。本書のFormation KnowledgeによってRepository Factを自動的に変更・昇格させない。

### Product Owner Decision

PO-01〜PO-08の確定Decisionは、各DecisionのCurrent SoTおよび関連Recordを参照する。本書はDecision本文の代替ではない。

### Formation Knowledge

GD-001で扱った問題構造、調査・分離、Candidate Close / Reduced、Remaining Gap、Repository読解変化、およびCurrent BoundaryへのTraceabilityを扱う。

Process Status、Candidate分類、横断因果はFormation Input由来のKnowledgeとして扱い、Repository Current FactまたはCurrent SoTとして扱わない。

### 未確定・切離Gap

未確定・切離Gapは、解決済み事項またはCurrent SoTとして扱わない。将来の判断で必要となった場合に、関連するCurrent Boundaryとともに再確認する。

## Current BoundaryへのTraceability

GD-001のFormation Knowledgeは、現在有効なRepository本文および各DecisionのCurrent SoTを根拠として再確認する。過去Formationは現在のBoundaryを置換・優先しない。

## PO-01 Formation Knowledge

### Problem Structure

`projects/iekau/products/property_reader/data_connection.md`には、`current_state`およびstateを保存・更新する現行責務として読める表現が残存していた。対象にはstateデータ、LINE保存対象、state更新、統合Inputの`current_state`、MVPおよび将来拡張のstate更新表現が含まれていた。

### Conflict Boundary

この表現は、`current_state`を正式Conceptまたは保存Dataとして採用しないPO-01 Boundary、STATEを保存せずdecisionから動的に導出するCurrent System SoT、ならびにSTATEと`decision_state`を別Conceptとして維持するCurrent System SoTとの不整合として扱う。これらの関係を新たに形成するものではない。

### Formation Resolution

`current_state`の意味や代替先を形成せず、property_readerの現行Data Connection責務としてstate保存・更新を維持する表現を減算的に整理した。これは状態Conceptを別Conceptへ置換するものではなく、不整合表現を現行責務から除外するFormationである。

### Non-Decision / Remaining Gap

以下は今回決定せず、Repository整合から切り離されたRemaining Gapとして保持する。

- `current_state`の意味および置換先
- 新たなData Concept
- STATEと`decision_state`の対応関係
- 状態の保存、再導出、表示の責務
- Persistence Responsibility
- LINE Responsibility

これらはstate保存・更新表現の減算的整理によって解消済みとは扱わない。

### Repository Interpretation Change

今後、`data_connection.md`内の「状態」「現在状態」等の一般表現を、削除済みの`current_state`またはstate保存・更新責務へ自動的に対応付けない。対象Documentの現在責務は、都度Current System Boundaryを根拠として確認する。

### PO-01 Traceability

- 問題構造の現行Repository整合先：`projects/iekau/products/property_reader/data_connection.md`
- Current System SoT：`brain/system/state_definition.md`
- Formation Knowledgeの位置付け：PO-01 Product Owner DecisionとCurrent System SoTの間で、何を減算的に整理し、何を未決定として切り離したかを後続判断へ再接続する。

## Boundary

本書は、Schema、API、Persistence、Implementation、Identity運用、更新Trigger、Owner、Lifecycle、詳細Loading Ruleを定めない。また、GD-001以外の案件Knowledgeを形成しない。
