# brain/system/ui_event_mapping.md
Updated: 2026-04-13
Status: Active

=============================

■ 概要

=============================

本ドキュメントは、

👉 UI操作とイベント発火の対応関係（ui_event_mapping）

を定義する。

目的は、

👉 意思決定（decision）を正しく取得し  
👉 STATE・KPI・historyと接続すること

---

=============================

■ 基本思想（最重要）

=============================

① CTAクリックはdecisionではない  

---

② decisionは「明確な意思選択」のみ  

---

③ 無意識decisionを禁止する  

---

④ STATEはdecisionから決まる  

---

=============================

■ 共通イベント定義

=============================

| event名 | 意味 |
|--------|------|
| decision_made | 意思決定 |
| decision_updated | 意思決定変更 |
| state_transition | STATE変化 |
| save_clicked | 保存 |
| comparison_enter | 比較開始 |

---

=============================

■ type_diagnosis

=============================

※重要：自動decision禁止

---

| UI | event | decision_type | decision_result |
|----|------|--------------|----------------|
| 「理解した」「次に進む」など明示操作 | decision_made | 自己理解decision | タイプ理解 |
| 再診断する | decision_made | 自己理解decision | 再診断 |

---

👉 診断表示だけではdecision発火しない  

---

=============================

■ purchase_motivation

=============================

| UI | event | decision_type | decision_result |
|----|------|--------------|----------------|
| 条件確定 | decision_made | 意思形成decision | 条件決定 |
| 購入検討する | decision_made | 意思形成decision | 購入検討 |
| 見送る | decision_made | 意思形成decision | 見送り |

---

=============================

■ rent_vs_buy

=============================

| UI | event | decision_type | decision_result |
|----|------|--------------|----------------|
| 購入を検討する | decision_made | 意思形成decision | 購入検討 |
| まだ様子を見る | decision_made | 意思形成decision | 保留 |
| 判断を見直す | decision_made | 意思形成decision | 再検討 |

---

=============================

■ loan_safety

=============================

| UI | event | decision_type | decision_result |
|----|------|--------------|----------------|
| この条件で進める | decision_made | 現実判断decision | 進める |
| 条件を調整する | decision_made | 現実判断decision | 条件調整 |
| 見直す | decision_made | 現実判断decision | 見直す |

---

=============================

■ property_reader（単体）

=============================

| UI | event | decision_type | decision_result |
|----|------|--------------|----------------|
| 残す | decision_made | 実務判断decision | 残す |
| 保留 | decision_made | 実務判断decision | 保留 |
| 見送る | decision_made | 実務判断decision | 見送り |

---

■ decision更新

| UI | event | 内容 |
|----|------|------|
| ステータス変更 | decision_updated | 既存decision変更 |

---

■ 保存

| UI | event | 内容 |
|----|------|------|
| 保存ボタン | save_clicked | decision状態のスナップショット保存 |

---

👉 保留に限らない  
👉 現在の判断状態を保存する

---

=============================

■ comparison

=============================

■ 進入

| UI | event | 内容 |
|----|------|------|
| 比較開始 | comparison_enter | 実務判断STATE内の深度到達 |

---

■ 暫定decision（重要）

| UI | event | decision_type | decision_result |
|----|------|--------------|----------------|
| 優先候補を選ぶ | decision_made | 実務判断decision | 暫定残す |

---

👉 暫定decisionは  
👉 **更新前提のdecisionとして扱う**

---

■ 最終decision

| UI | event | decision_type | decision_result |
|----|------|--------------|----------------|
| 残す | decision_made | 実務判断decision | 残す |
| 保留 | decision_made | 実務判断decision | 保留 |
| 外す | decision_made | 実務判断decision | 見送り |

---

■ decision更新

| UI | event | 内容 |
|----|------|------|
| 再選択 | decision_updated | 判断変更 |

---

=============================

■ STATE遷移ルール

=============================

STATEはdecisionで決まる

---

| decision_type | 遷移先STATE |
|--------------|------------|
| 自己理解decision | STATE1 |
| 意思形成decision | STATE2 |
| 現実判断decision | STATE3 |
| 実務判断decision | STATE4 |

---

■ 補足（重要）

👉 基本はdecision_typeでSTATEを決定する  

👉 ただし将来は  
👉 履歴・文脈による補正を許容する  

---

👉 STATEは固定ではなく進化可能な構造とする

---

=============================

■ NG（重要）

=============================

❌ 表示だけでdecision発火  
❌ CTAクリックでdecision発火  
❌ ページ遷移でSTATE変更  

---

👉 必ず「明示的意思選択」のみを対象とする

---

=============================

■ 最重要ポイント

=============================

👉 UIは行動  
👉 eventは意思決定  

---

👉 この分離を崩さないことがOSの核

---

=============================

■ 最終定義

=============================

ui_event_mappingとは、

👉 UI操作を意思決定イベントに変換し  
👉 STATE・KPI・historyに接続するための実装仕様である
