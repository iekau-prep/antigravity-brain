# decision_os / data_connection.md
Updated: 2026-04-17
Status: Core

=============================

■ 概要

=============================

本ドキュメントは、  
decision_os における

👉 データ接続設計（data connection）

を定義する。

---

目的は、

👉 decision_os が扱うデータの入出力を整理し  
👉 property_reader / comparison / LINE / Supabase と  
👉 一貫した構造で接続できるようにすること

である。

---

=============================

■ 基本思想（最重要）

=============================

① 中心は「物件」ではなく「decision」

---

decision_os は物件一覧ではない

---

👉 **decision一覧である**

---

② stateは保存しない

---

state は decision をもとに毎回算出する

---

👉 保存対象ではなく  
👉 解釈レイヤーとする

---

③ property_reader が入力源である

---

decision_os に新しい候補が追加される起点は、

👉 property_reader における decision 実行

である

---

④ LINE統合を前提にするが、今は仮user_idで成立させる

---

初期は仮user_idで十分成立する

---

👉 後で LINE user_id に統合できる設計にする

---

=============================

■ 接続全体像

=============================

external  
↓  
property_reader  
↓  
decision保存  
↓  
decision_os 取得・表示  
↓  
比較 / 再判断 / 更新  
↓  
必要に応じてLINE保存・再開

---

👉 decision_os は  
👉 「decisionの受け皿」であり  
👉 「次の判断の起点」である

---

=============================

■ 扱うデータの種類

=============================

decision_os が扱うデータは以下。

---

① decisionデータ  
② property参照データ  
③ 比較用選択状態  
④ state算出用データ  
⑤ LINE再開用データ（将来）

---

=============================

■ ① decisionデータ（中核）

=============================

最小構造：

- user_id
- property_id
- decision_type
- decision_result
- reasons
- is_tentative
- created_at
- updated_at

---

意味：

- user_id  
👉 誰の判断か

- property_id  
👉 どの物件に対する判断か

- decision_type  
👉 どの判断種別か  
※ MVPでは「実務判断」に固定でよい

- decision_result  
👉 検討中 / 保留 / 見送り  
※ DB保存値とUIラベルは対応づける

- reasons  
👉 判断理由（複数選択可）

- is_tentative  
👉 保留など未確定性の補助表現

---

👉 decision_os の主データはこれである

---

=============================

■ ② property参照データ

=============================

decision_os は property 本体を主に持たず、参照する。

---

最低限必要：

- property_id
- 価格
- 面積
- 駅距離
- スコア
- 代表注意点

---

👉 UI表示に必要な最小情報だけ使う

---

※ MVPでは仮データ / mockでも可  
※ 将来は properties テーブルまたは property_reader 出力と接続

---

=============================

■ ③ 比較用選択状態

=============================

比較選択は decision とは別管理とする。

---

持つもの：

- selected_property_ids

---

ルール：

- 最大3件まで
- 永続保存は必須ではない
- まずは画面内stateでよい

---

👉 比較は一時状態  
👉 decision本体とは分離する

---

=============================

■ ④ state算出用データ

=============================

decision_os で使う state は保存しない。

---

算出元：

- decision_result
- reasons
- 件数
- 比較状態

---

例：

- 検討中あり → 検討中STATE
- 保留多い → 迷い中STATE
- 見送りのみ → 整理済みSTATE

---

👉 state は  
👉 「今の判断状況の解釈」である

---

=============================

■ ⑤ LINE再開用データ（将来）

=============================

LINE接続後は以下を再利用する。

- user_id
- saved decisions
- selected comparison context
- latest viewed property
- reasons
- updated_at

---

👉 LINEは保存先ではなく  
👉 継続判断の統合基盤である

---

=============================

■ 入力元

=============================

decision_os の入力元は以下。

---

① property_reader  
👉 decision生成

② comparison  
👉 decision更新

③ LINE再開  
👉 saved decisions取得

④ external経由の新規物件  
👉 property_reader経由で追加

---

👉 decision_os に直接「物件追加」はしない

---

=============================

■ 出力先

=============================

decision_os からの主な出力先は以下。

---

① property_reader  
👉 再判断

② comparison  
👉 比較更新

③ external_property_search  
👉 次候補探索

④ LINE  
👉 保存・再開

---

👉 decision_os は中継ではなく  
👉 判断更新の起点になる

---

=============================

■ API設計（MVP）

=============================

最低限必要なAPI：

---

### ① decision保存

POST /api/save

用途：
👉 decisionの新規作成 / 更新

---

### ② decision取得

GET /api/get?user_id=xxx

用途：
👉 decision_os 一覧表示用

---

### ③ comparison対象取得（将来）

GET /api/compare?ids=...

用途：
👉 比較対象読み込み

---

👉 MVPでは save / get の2つで十分

---

=============================

■ DB接続方針（Supabase）

=============================

decision_os は Supabase の decisions テーブルを中核とする。

---

MVPで必要な条件：

- user_id NOT NULL
- UNIQUE (user_id, property_id, decision_type)
- upsert 対応
- reasons 保存可
- updated_at 更新

---

👉 「最新の判断」を1物件1レコードで保持する

---

=============================

■ current実装との整合

=============================

現時点の Supabase 実装と整合する前提：

- 仮user_id を localStorage で保持
- save API は upsert
- get API は user_id 指定
- decision_result は UIと同期
- reasons は保存済み
- state は非保存で毎回算出

---

👉 現在の実装方針と一致している

---

=============================

■ NG

=============================

・stateをDB保存する  
・比較選択をdecisionに混ぜる  
・property本体をdecisionに過剰保存する  
・decision_os から直接物件を新規生成する  
・1物件に複数decisionを無制限保存する

---

👉 構造が崩れる

---

=============================

■ 最重要ポイント

=============================

decision_os の data_connection で一番重要なのは、

👉 「何を保存するか」ではない

---

👉 **「何をdecisionとして持ち、何を解釈で出すか」を分けること**

---

保存するもの：
- decision
- reasons
- user_id
- property_id

---

保存しないもの：
- state
- 比較選択状態
- UI上の一時表示

---

👉 この分離がOSの安定性を生む

---

=============================

■ 最終定義

=============================

decision_os の data_connection とは、

👉 property_readerで生まれた decision を受け取り  
👉 Supabase に安定保存し  
👉 state を解釈しながら  
👉 比較・更新・再判断へつなげるための接続設計である

---

## 一言でいうと

👉 「decisionを受け取り、次の判断につなげるためのデータ接続設計」
