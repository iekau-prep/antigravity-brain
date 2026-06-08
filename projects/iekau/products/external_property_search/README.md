# README.md
Updated: 2026-06-09
Status: Draft

=============================

■ 概要

=============================

external_property_search は、

家買う予備校において、

外部サービスで見つけた物件を、
再び判断ループへ戻すための入口モジュールである。

目的：

外部探索を終了地点にせず、

decision progression に戻すこと。

---

構造：

external_property_search

↓

property_reader

↓

decision

↓

decision_OS

---

本モジュール単体では、
判断を完了しない。

判断主体は常にユーザー。

=============================

■ 定義

=============================

external_property_search は、

物件を探す場所ではない。

また、

比較する場所でもない。

推薦する場所でもない。

役割：

外部探索
↓

対象選択
↓

判断入口生成

---

扱う対象：

・外部物件URL
・外部物件画像
・外部資料（PDF等）

扱わない：

・物件検索
・おすすめ生成
・ランキング
・スコアリング
・物件保存
・decision保存
・STATE生成

=============================

■ 基本思想

=============================

思想①

外部探索を否定しない。

探す行為は外部で行う。

---

思想②

家買う予備校は、
判断を行う。

探索結果を、
判断へ変換する。

---

思想③

必ず戻る。

外部探索
↓

property_reader

↓

decision

↓

decision_OS

直接OSへ戻さない。

=============================

■ 責務

=============================

責務A

外部探索結果を受け取る。

---

責務B

判断対象を明示する。

---

責務C

property_readerへ接続する。

---

責務D

decision continuity を切らない。

=============================

■ 責務外

=============================

external_property_search
≠ property_reader

external_property_search
≠ recommendation

external_property_search
≠ comparison

external_property_search
≠ decision_OS

external_property_search
≠ STATE

=============================

■ 接続先

=============================

入力：

外部探索結果

↓

external_property_search

出力：

property_reader

補足：

decision は生成しない。

decision更新材料のみ扱う。

=============================

■ 今回含まない

=============================

❌ OCR

❌ URL解析精度

❌ ポータル連携

❌ 自動抽出

❌ browser extension

❌ 保存最適化

❌ 公開導線

=============================

■ 最終定義

=============================

external_property_search は、

外部探索を、

判断へ戻すための入口レイヤーである。

探索の終了地点ではない。
