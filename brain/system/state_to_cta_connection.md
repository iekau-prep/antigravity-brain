# state_to_cta_connection.md
Updated: 2026-04-04
Status: Active

=============================

■ 概要

=============================

本モジュールは、

👉 STATE判定結果をCTAに変換する実装仕様

を定義する。

目的は、

👉 state_detectionで取得したSTATEを  
👉 UI上で適切なCTAに変換し  
👉 次の行動へ接続すること

である。

---

=============================

■ 基本思想

=============================

① STATEは1つに確定する

---

👉 複数STATEを同時に持たない

---

② CTAは1つだけ出す

---

👉 複数表示は禁止

---

③ ロジックはシンプルにする

---

👉 if文で分かるレベル

---

④ UIに依存しない

---

👉 どのプロダクトでも使える

---

=============================

■ STATE → CTA マッピング

=============================

STATE1：初期  
👉 rent_vs_buy

---

STATE2：検討初期  
👉 property_reader

---

STATE3：物件検討中  
👉 property_reader（深く使う）

---

STATE4：資金不安  
👉 loan_safety

---

STATE5：迷走  
👉 purchase_motivation

---

STATE6：比較  
👉 comparison（またはproperty_reader比較）

---

=============================

■ CTA文言マッピング

=============================

rent_vs_buy  
👉 賃貸と購入を比較してみる  

---

property_reader  
👉 この条件で物件を見てみる  

---

property_reader（深）  
👉 この条件で物件を読んでみる  

---

loan_safety  
👉 この条件で安全ラインを確認する  

---

purchase_motivation  
👉 判断基準を整理する  

---

comparison  
👉 この条件で比較してみる  

---

=============================

■ 実装ロジック（擬似コード）

=============================

※ state_detectionの結果を使う

---

STEP1：STATE取得

state = detectState(userData)

---

STEP2：CTA決定

if state == STATE1:
    cta = "rent_vs_buy"

elif state == STATE2:
    cta = "property_reader"

elif state == STATE3:
    cta = "property_reader_deep"

elif state == STATE4:
    cta = "loan_safety"

elif state == STATE5:
    cta = "purchase_motivation"

elif state == STATE6:
    cta = "comparison"

---

STEP3：文言変換

ctaText = mapToText(cta)

---

STEP4：UI表示

renderCTA(ctaText)

---

=============================

■ result_screenでの実装

=============================

各プロダクトの結果画面で以下を実行：

---

① STATE取得（state_detection）

---

② CTA決定（本モジュール）

---

③ CTA表示（1つのみ）

---

👉 必ず「結果の直下」に配置

---

=============================

■ LINE接続との関係

=============================

非LINE：

👉 単発CTA

---

LINE接続後：

👉 履歴を考慮したCTA

---

例：

- 前回loan_safety済 → property_reader優先
- 比較済 → 次は決断系CTA

---

=============================

■ ロック状態との関係

=============================

ロック中：

👉 CTAは「続きを見たい」

例：
・この続きの判断を見る

---

解除後：

👉 CTAは「次に進む」

例：
・この条件で物件を読んでみる

---

=============================

■ MVPルール（最重要）

=============================

最初はこれだけでいい：

・STATE → CTA 1対1
・履歴考慮しない
・LINE未接続でも動く

---

👉 シンプルでいい

---

=============================

■ NG

=============================

・複雑な分岐
・複数CTA表示
・文脈無視
・過剰最適化

---

=============================

■ 最終定義

=============================

state_to_cta_connectionとは、

👉 STATEを  
👉 行動に変換する最短ルートである
