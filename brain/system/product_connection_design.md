# product_connection_design.md
Updated: 2026-04-16
Status: Core

=============================

■ 概要

=============================

本ドキュメントは、

👉 家買う予備校における各プロダクトの接続設計（product connection）

を定義する。

対象プロダクト：

・type_diagnosis（自分を知る）
・purchase_motivation（判断軸を知る）
・rent_vs_buy（選択肢を知る）
・loan_safety（安全ラインを知る）
・property_reader（物件を読む）
・external_property_search（外部物件探索）
・LINE（OSの基盤）

---

本設計の目的は、

❌ 機能をつなぐことではない  
❌ 導線を増やすことではない  

---

👉 「意思決定の流れ」を自然につなぐこと

---

=============================

■ 基本思想（最重要）

=============================

① プロダクトは“役割分担された判断装置”である

---

各プロダクトは独立機能ではなく、

👉 意思決定の一部を担う

---

役割：

・type_diagnosis → 判断のクセを知る  
・purchase_motivation → 判断軸を定義する  
・rent_vs_buy → そもそも論を整理する  
・loan_safety → 現実ラインを確定する  
・property_reader → 物件を読む  
・decision OS → 意思を保存・更新する  

---

② 中核は「property_reader → decision」である

---

構造の中心は以下：

external_property_search  
↓  
property_reader（読む）  
↓  
decision（意思）  
↓  
decision OS（蓄積・比較）  

---

👉 意思決定はここで発生する

---

③ 補助プロダクトは「判断補正レイヤー」である

---

以下はメイン導線ではない：

・type_diagnosis  
・purchase_motivation  
・rent_vs_buy  
・loan_safety  

---

👉 必要なときだけ使う

---

④ CTAは「思考の続き」である

---

CTAは遷移ではない

---

👉 次に自然に考えること

---

⑤ LINEは「統合基盤」である

---

・状態保存  
・履歴管理  
・再開  
・比較  
・個別最適化  

---

👉 単発体験をOSに変える

---

=============================

■ 全体構造（再定義）

=============================

external_property_search  
↓  
property_reader（読む）  
↓  
decision（保存 / 保留 / 見送り）  
↓  
decision OS（一覧 / 比較 / 更新）  
↓  
必要に応じて補助プロダクト  

---

👉 「読む → 決める → 溜める → 更新する」

---

=============================

■ 各接続の意味

=============================

■ external → property_reader

目的：
👉 気になる物件を「判断可能状態」に変換する

---

■ property_reader → decision

目的：
👉 現時点の意思を確定する

---

■ decision → OS

目的：
👉 判断を蓄積し比較可能にする

---

■ OS → property_reader

目的：
👉 再判断・比較・更新

---

■ property_reader → loan_safety

目的：
👉 この物件は成立するか

---

■ property_reader → rent_vs_buy

目的：
👉 そもそも買うべきか

---

■ purchase_motivation → property_reader

目的：
👉 判断軸補正

---

■ type_diagnosis → property_reader

目的：
👉 判断のクセ補正

---

=============================

■ 本質

=============================

❌ プロダクトを使わせる設計ではない  

---

👉 意思決定を自然に進める設計

---

=============================

■ 最終定義

=============================

product_connectionとは、

👉 property_readerを中心に  
👉 decisionを生み  
👉 OSに蓄積し  
👉 補助プロダクトで精度を補正する  

👉 意思決定構造の設計である
