# external_property_search.md
Updated: 2026-06-29
Status: Core

=============================

■ 概要

=============================

Purpose

本書は、

external_property_searchが、

外部物件探索から
property_readerへ判断材料を受け渡し、

decision loopへ復帰するための構造を定義する。

扱う対象は、

* 外部探索
* 戻り導線
* property_reader接続
* decision loop復帰

である。

本書は、

物件探索ではなく、

「判断可能状態へ戻す構造」

を定義する。

---

Scope

本書が扱うもの

* 外部探索入口
* 戻り導線
* property_reader接続
* decision loop復帰

本書が扱わないもの

* property評価
* recommendation
* comparison
* decision判定
* module責務

---

=============================

■ 基本思想（最重要）

=============================

① externalは「探す場所」である

---

・SUUMO  
・HOME'S  
・at home  

---

👉 物件を見つける場所

---

② 家買う予備校は「判断する場所」である

---

👉 探す場所ではない  
👉 判断する場所  

---

③ 必ず戻る理由を作る

---

❌ 外に出て終わり  
⭕ 外に出て → 戻って判断  

---

④ 戻り先はproperty_readerを基本とする

※ 物件判断を伴う場合は必ずproperty_readerを経由する

---

👉 いきなりOSに戻さない  

---

構造：

external  
↓  
property_reader  
↓  
decision  
↓  
OS  

---

=============================

■ UXフロー

=============================

① OSでCTA表示

👉 次の候補を探す  

※ external遷移は、原則としてdecision完了後に発動する

---

② externalへ遷移

👉 不動産ポータルへ  

---

③ ユーザー行動

・物件を見る  
・気になる物件を見つける  

---

④ 戻り導線（最重要）

以下のいずれか：

・URL貼り付け  
・スクショアップロード  
・PDFアップロード  

---

👉 「この物件を読む」

---

⑤ property_readerへ遷移

---

👉 /property_reader

---

⑥ 判断

・残す  
・保留  
・見送り  

---

⑦ OSへ反映

---

👉 一覧に追加  

---

=============================

■ 戻り導線（具体）

=============================

最低限これだけ：

---

① 入力UI

・URL貼る  
・画像アップ  
・PDFアップ  

---

② CTA

👉 この物件を読む  

---

👉 property_readerへ  

---

=============================

■ NG

=============================

・外部リンクだけ貼る  
・戻り導線がない  
・そのまま終わる  
・OSに直接戻す  

---

👉 必ず「読む」を挟む  

---

=============================

■ 補足（重要）

=============================

externalはプロダクトではない

---

👉 補助レイヤー  

---

👉 プロダクト構造には含めない  

---

=============================

■ Related Documents

=============================

Core

* decision_update_triggers.md
* decision_os_role.md

Module Constitution

* property_reader責務憲法 v1.0

Concept

* decision_framework.md

=============================

■ 最終定義

=============================

external_property_searchとは、

👉 外部で物件を探し  
👉 property_readerに戻し  
👉 decisionを生み  
👉 OSへ蓄積する  

👉 意思決定ループにおける外部入口の1つである
