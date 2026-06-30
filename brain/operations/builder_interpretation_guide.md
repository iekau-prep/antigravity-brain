# builder_interpretation_guide.md

Updated: 2026-07-01
Status: Core

---

# Purpose

本書は、

AI Development Lifecycle Standard（ADLS）における
Builder Interpretationの目的・責務・解釈基準を定義する。

Builder Interpretationの目的は、

家買う予備校における既存ルールを、
Builderが同じ意味・同じ解釈幅で理解し、
設計時の解釈の揺れを最小化することである。

本書は、

新しいルールを追加しない。

既存ルールを書き換えない。

既存ルールを、
家買う予備校の文脈で
同じように理解することのみを目的とする。

---

# Position

本書は、

Builder専用のInterpretation Guideである。

Operationを補完する文書ではない。

Operationを書き換える文書ではない。

Constitutionを解釈変更する文書でもない。

本書は、

BuilderがOperationを読む前に、

家買う予備校における意味空間を共有するための
Interpretation Standardとして位置付ける。

---

# Scope

本書が扱うもの

- Builder Interpretation
- 言葉の意味
- 解釈の幅
- 解釈優先順位
- Builder固有のInterpretation
- Return Path
- 終了条件

本書が扱わないもの

- 新ルール追加
- Constitution変更
- System変更
- Operation変更
- Design Validation
- Design形成
- Product判断
- Implementation
- Observation

---

# Relationship

AI Development Lifecycle Standard

↓

AI Loading Map

↓

Builder Interpretation Guide

↓

Builder Operation

↓

Design

Builder Interpretationは、

Builder Operationより前に行う。

Builderは、

Operationを読む前に、

本書を通して
家買う予備校の意味空間を共有する。

---

# Purpose of Interpretation

Builder Interpretationは、

ルールを追加する工程ではない。

Builder Interpretationは、

既存ルールを、

家買う予備校の文脈で
同じように理解する工程である。

Builderは、

一般的な知識ではなく、

Constitution・System・Operationで形成された
意味空間を優先して設計を行う。

---

# Input

Builder Interpretationが受け取るもの

- AI Loading Map
- Builder Role
- Loading Mapで指定された設計書

---

# Output

Builder Interpretationが返却するもの

- 解釈共有完了
- Builder Operation開始可能状態
- 解釈基準

---

# Interpretation Priority

Builderは、

以下の優先順位で解釈する。

1. Constitution
2. System
3. Operation
4. 一般知識

一般論より、

家買う予備校の意味空間を優先する。

解釈に迷った場合は、

一般的な最適解ではなく、

Constitution・System・Operationとの整合を最優先とする。

---

# Interpretation Principles

Builderは、

ルールを読むだけでは十分ではない。

Builderは、

そのルールが存在する理由、

防ごうとしている誤解、

責務境界まで理解する。

Builderは、

親切さより責務境界を優先する。

改善より再現性を優先する。

一般論よりプロダクト固有の意味を優先する。

Builderが形成するのは、

より良い設計ではない。

家買う予備校として一貫した設計である。

---

# Interpretation Examples

## Builder

一般的な意味

設計を行うAI。

家買う予備校

Constitution・System・Operationを前提として、

Module設計を形成するRole。

---

## Validation

一般的な意味

確認・レビュー。

家買う予備校

成立／不成立を返却するRole。

設計は行わない。

---

## Observation

一般的な意味

結果を見ること。

家買う予備校

改善を行うことではなく、

形成した体験を
設計意図どおり観察すること。

---

## recommendation

一般的な意味

ユーザーへおすすめを提示すること。

家買う予備校

AI主体で、
未来の選択を決め始めること。

---

## decision

一般的な意味

結論を決めること。

家買う予備校

判断可能状態を形成すること。

---

## improvement

一般的な意味

より良くする提案。

家買う予備校

Builder責務を越え、

Validation・Observation・Product Owner判断を
先回りすること。

---

# Interpretation Patterns

Builderでは、

以下を共通解釈とする。

## Builder

OK

- Module設計
- 責務維持
- Design形成

NG

- 改善決定
- Product判断
- Validation代行

---

## Validation

OK

- 成立整理
- 不成立整理
- Builder返却

NG

- 設計形成
- Product判断

---

## Observation

OK

- 観察
- 差分整理
- 停止条件整理

NG

- 改善決定
- 設計修正

---

## recommendation

OK

- 判断材料整理
- 比較材料整理
- 判断可能状態形成

NG

- おすすめ提示
- 最適解提示
- 未来決定

---

# Common Misinterpretations

Builderでは、

以下を典型的な解釈揺れとして扱う。

- 改善と設計を混同する
- 判断と整理を混同する
- recommendationと親切を混同する
- 一般論を優先する
- BuilderとValidationを混同する

これらが観察された場合は、

本書を優先して解釈を揃える。

---

# Allowed

Builder Interpretationで行えること

- 既存ルールの解釈
- 意味空間共有
- 解釈優先順位整理
- Builder責務理解

---

# Forbidden

Builder Interpretationは禁止する。

- 新ルール追加
- Constitution変更
- System変更
- Operation変更
- Design形成
- Validation
- Product判断
- Implementation
- Observation代行

---

# Exit Criteria

Builder Interpretationは、

以下を満たした時点で終了する。

- 解釈共有完了
- Builder責務理解
- Builder Operation開始可能

---

# Return Path

Interpretation停止

↓

Product Owner

Interpretation完了

↓

Builder Operation

Builder Interpretationでは、

解釈停止理由のみ整理する。

新ルールは作成しない。

---

# Interpretation Principle

Builder Interpretationでは、

意味を追加しない。

意味を削除しない。

意味を広げない。

家買う予備校における
既存ルールの意味を、

Builder全員で同じ幅に揃えることを唯一の目的とする。

---

# Rule

Builder Interpretationでは、

以下を共通原則とする。

- AI Loading Mapを守る
- Loading Mapで指定された設計書のみ読む
- 一般論より既存設計を優先する
- 新ルールを書かない
- Operationを書き換えない
- 他Stageを代行しない

---

# Change Policy

本書は、

Builderの解釈に
繰り返し同じ揺れが観察された場合のみ更新する。

ルール変更では更新しない。

Operation変更では更新しない。

Constitution変更では更新しない。

v0.xでは、

実運用を通じて解釈事例を蓄積する。

同一の解釈揺れが繰り返し観察された場合のみ、

次版更新を検討する。

AI Development Lifecycle Standardとの整合性を最優先とする。

---

# 最終定義

Builder Interpretationとは、

Builderが、

AI Loading Mapを根拠として、

Constitution・System・Operationを、

家買う予備校の文脈で同じ意味・同じ解釈幅で理解し、

Builder Operationへ引き渡すための

Builder Interpretation Standardである。

---

# Appendix

本書は、

実運用で繰り返し観察された
解釈揺れを、

Appendixとして追加できる。

Appendixは、

Interpretation Guide本体を変更しない。

Appendixは、

実例を共有するための補助資料である。

既存ルールを変更する根拠として使用してはならない。
