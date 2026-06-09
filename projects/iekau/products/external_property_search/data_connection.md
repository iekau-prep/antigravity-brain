# data_connection.md
Updated: 2026-06-09
Status: Draft

=============================

■ 概要

=============================

本モジュールは、

external_property_search における、

入力・保持・受渡・破棄の
データ接続構造を定義する。

目的：

探索結果を、

判断可能状態として
property_reader に接続すること。

ここでは判断しない。

ここではdecisionしない。

ここでは保存しない。

---

構造：

external

↓

input_connection

↓

data_connection

↓

property_reader

=============================

■ 基本思想

=============================

思想①

入力と判断を混ぜない。

入力
≠
判断

---

思想②

元データは保持する。

保持
≠
保存

---

思想③

対象確定と同一性判定を分離する。

読む
≠
識別

---

思想④

責務移管後は破棄する。

読む

↓

property_reader

↓

external責務終了

=============================

■ データレイヤー

=============================

Layer1

raw_input

↓

Layer2

confirmed_input

↓

Layer3

reading_context

↓

property_reader

=============================

■ Layer1

raw_input

=============================

目的：

元データ保持。

役割：

確認可能状態を残す。

保持対象：

・raw_url

・raw_images

・raw_pdf

・raw_text

注意：

編集しない。

保持のみ。

保存しない。

---

許可：

複数保持。

禁止：

自動変換確定。

=============================

■ Layer2

confirmed_input

=============================

目的：

読む対象固定。

役割：

ユーザー確認後の入力保持。

保持候補：

・property_type

・address

・building_name

・room

・price

・area

・built_at

・land_right

・manual_fields

注意：

完全情報不要。

不足許容。

---

重要：

一意性判定しない。

external_property_key作成しない。

同一物件認定しない。

責務：

読む対象確定のみ。

=============================

■ Layer3

reading_context

=============================

目的：

property_reader責務へ渡す。

保持：

・input_type

・confirmed_input

・raw_input_ref

・capture_ref

注意：

判断結果は持たない。

---

禁止：

・decision_result

・reasons

・STATE

・selected_property_ids

・recommendation

=============================

■ property_reader受渡

=============================

受渡単位：

confirmed_input

＋

raw_input参照

理由：

読む対象固定

＋

後から照合可能。

---

禁止：

confirmed_inputのみで真実扱い。

=============================

■ セッション

=============================

保持：

入力開始

↓

読む押下

まで。

---

終了：

この物件を読む

↓

property_reader開始

↓

破棄

注意：

保持
≠
保存

=============================

■ decision_os整合

=============================

external は、

decisionを扱わない。

---

decision生成：

禁止

STATE生成：

禁止

property生成：

禁止

比較状態：

禁止

---

decision接続は、

property_reader

↓

decision_connection

以降。

=============================

■ NG

=============================

・入力即保存

・入力即decision

・raw_input破棄

・同一物件認定

・recommendation

・STATE生成

・DB保存

=============================

■ 今回含まない

=============================

❌ OCR

❌ parser

❌ property_id生成

❌ 重複判定

❌ comparison

❌ LINE

❌ Supabase

=============================

■ 最終定義

=============================

data_connectionとは、

探索結果を、

保持し、

確認し、

判断可能状態へ渡し、

責務完了時に破棄するための
接続設計である。

探索データは保持する。

判断は保持しない。
