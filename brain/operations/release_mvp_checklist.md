release_mvp_checklist.md

Updated: 2026-06-29

Status: Active

Owner: PM

⸻

Purpose

本ドキュメントは、

MVP公開前に実施する

実務確認項目を管理する。

目的は、

限定公開前に、

decision continuity が停止せず、

最低1回の decision progression が成立することを確認することである。

本ドキュメントは、

公開判定思想を定義するものではない。

公開前に確認すべき実務項目のみを扱う。

⸻

Scope

本ドキュメントが扱うもの

* MVP公開前確認
* 実務チェック
* 公開可否判断材料
* 担当確認
* 成立状況管理

本ドキュメントが扱わないもの

* 公開思想
* 公開責務
* Constitution
* System設計
* Module設計
* UI改善
* 将来構造

公開思想は

release_checklist.md

で管理する。

⸻

MVP Release Checklist

R1｜公開環境

目的

第三者が到達可能な環境を確認する。

確認項目

□ 公開URL有効

□ Build成功

□ 環境変数設定済

□ API応答確認済

現在状態

（　　　）

担当

実装

↓

PM確認

⸻

R2｜継続性

目的

再訪後も

decision continuity

が維持されることを確認する。

確認項目

□ user_id継続

□ decision再開可能

□ decision_OS再開可能

□ continuity停止なし

現在状態

（　　　）

担当

実装

↓

PM確認

⸻

R3｜Decision Loop

目的

最低1回

decision progression

が完走することを確認する。

確認項目

□ property_reader

□ decision

□ comparison（必要時）

□ loan_safety

□ decision_OS

□ next_action

□ next_step

現在状態

（　　　）

担当

実装

↓

PM確認

⸻

R4｜公開準備

目的

限定公開運用を開始できる状態を確認する。

確認項目

□ 公開対象者決定

□ 公開方式決定

□ フィードバック回収方法決定

□ 不具合報告方法決定

現在状態

（　　　）

担当

PM

⸻

R5｜除外事項

今回扱わないことを確認する。

確認項目

□ 一般公開

□ UX完成

□ UI完成

□ 課金

□ LINE高度連携

□ type_diagnosis完成

□ purchase_motivation完成

□ 将来構造追加

現在状態

除外固定

担当

PM

⸻

Release Criteria

以下が成立した場合、

MVP限定公開を開始できる。

* R1 成立
* R2 成立
* R3 成立
* R4 成立
* R5 除外確認済

⸻

Rule

本ドキュメントは、

実務チェックリストである。

思想変更、

System変更、

Module変更は行わない。

公開可否判断に必要な

事実のみを確認する。

⸻

Change Policy

公開手順、

確認項目、

運用方法が変更された場合のみ更新する。

公開思想、

公開責務、

公開構造の変更は、

release_checklist.md

で管理する。

⸻

最終定義

release_mvp_checklistとは、

MVP限定公開前に必要な

実務確認項目を整理し、

公開判断を安全かつ再現可能に実施するための

運用チェックリストである。
