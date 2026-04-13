# brain/system/event_tracking.md
Updated: 2026-04-13
Status: Active

=============================

■ 概要

=============================

本ドキュメントは、

👉 家買う予備校におけるイベント設計（event_tracking）

を定義する。

目的は、

👉 KPI（decision / STATE）を正しく計測し  
👉 意思決定OSとしての挙動を再現可能にすること

---

=============================

■ 基本思想（最重要）

=============================

① 行動ではなく「意思決定」を計測する  

---

② すべてのイベントはSTATEと紐づく  

---

③ decisionを中心に設計する  

---

④ STATEはイベントから再構築する  

---

=============================

■ decisionの定義（最重要）

=============================

decisionとは、

👉 **明確な意思選択を行ったものに限定する**

---

例：

・残す / 保留 / 見送り  
・条件を決める  
・優先順位を決める  
・購入検討するか決める  

---

❌ CTAクリック  
❌ ページ遷移  

---

👉 行動ではなく意思決定のみを対象とする

---

=============================

■ イベント一覧（コア）

=============================

① input_start  
② input_complete  
③ result_view  

---

④ decision_made（最重要）  
⑤ decision_updated  

---

⑥ state_transition  

---

⑦ save_clicked  

---

⑧ comparison_enter  

---

⑨ line_click  
⑩ line_registered  

---

=============================

■ decision_type（STATE統一）

=============================

👉 STATEと完全対応させる

---

・自己理解decision  
・意思形成decision  
・現実判断decision  
・実務判断decision  

---

👉 すべてのSTATEでdecisionを取得する

---

=============================

■ decision_result（汎用設計）

=============================

👉 STATEごとに意味が変わる前提とする

---

■ 実務判断STATE

・残す  
・保留  
・見送り  

---

■ 現実判断STATE

・この条件で進める  
・条件調整する  
・見直す  

---

■ 意思形成STATE

・購入検討する  
・保留する  
・見送る  

---

■ 自己理解STATE

・タイプ理解した  
・診断結果を受け入れる  
・再診断する  

---

👉 decisionは「物件専用」ではない  
👉 全STATEで発生する

---

=============================

■ decision_made

=============================

■ 発火条件

---

① property_reader

・残す / 保留 / 見送り  

---

② comparison

・各物件の扱いを決定  

---

③ loan_safety

・この条件で検討を進めるか判断  

---

④ purchase_motivation

・条件 / 優先順位を決定  

---

⑤ type_diagnosis

・タイプを受け入れる / 再診断  

---

■ 送信データ

- user_id  
- state  
- decision_type  
- decision_result  
- product_name  
- timestamp  

---

=============================

■ decision_updated

=============================

■ 定義

👉 既存decisionの変更

---

■ 意味

👉 思考が進んだ証拠  

---

👉 **比較・理解が進んだ深度KPI**

---

■ 発火例

・保留 → 残す  
・見送り → 再検討  
・条件変更  

---

■ データ

- user_id  
- previous_decision  
- new_decision  
- timestamp  

---

=============================

■ state_transition

=============================

■ 定義

👉 decisionによってSTATEが変化した瞬間

---

■ 厳密ルール（最重要）

👉 **STATEはdecision_typeで判定する**

---

例：

if decision_type == 自己理解decision:
    STATE1

elif decision_type == 意思形成decision:
    STATE2

elif decision_type == 現実判断decision:
    STATE3

elif decision_type == 実務判断decision:
    STATE4

---

❌ 不安 / 行動 / クリックで判定しない  

---

👉 STATEは「意思決定フェーズ」

---

■ データ

- user_id  
- from_state  
- to_state  
- decision_type  
- timestamp  

---

=============================

■ comparison_enter

=============================

■ 定義

👉 comparison画面に入った

---

■ 位置づけ

👉 **実務判断STATE内の深度到達**

---

❌ STATE遷移ではない  

---

👉 STATE内の進行として扱う

---

=============================

■ save_clicked

=============================

■ 定義

👉 保存操作

---

■ 位置づけ

👉 decisionではない  

---

👉 **decisionの「保留状態の外部保存」**

---

👉 historyとの接続ポイント

---

=============================

■ STATE再構築ロジック

=============================

STATEはdecision履歴から決める

---

最新decision_typeを優先：

---

if latest_decision_type == 実務判断decision:
    STATE4

elif latest_decision_type == 現実判断decision:
    STATE3

elif latest_decision_type == 意思形成decision:
    STATE2

else:
    STATE1

---

👉 STATEは「最後の意思決定フェーズ」

---

=============================

■ 実装順

=============================

STEP1  
👉 decision_made  

---

STEP2  
👉 decision_updated  

---

STEP3  
👉 state_transition  

---

STEP4  
👉 KPI連携  

---

=============================

■ 最重要ポイント

=============================

👉 decisionが正しく取れればOSは成立する  

---

👉 STATEはdecisionからしか決めない  

---

👉 行動ログに引っ張られない  

---

=============================

■ 最終定義

=============================

event_trackingとは、

👉 ユーザーの意思決定を中心に記録し  
👉 STATE・KPI・LINEを接続するための  
👉 意思決定OSの実装基盤である
