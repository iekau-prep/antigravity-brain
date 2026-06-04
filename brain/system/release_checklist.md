# release_checklist.md
Status: Draft
Owner: PM
Scope: 限定公開MVP

目的：

限定公開前に、
最低限確認すべき事項を管理する。

成功条件：

限定公開環境で、
decision progression が
最低1回停止せず成立する。

---

## R1｜公開環境

目的：
第三者到達可能。

確認：

□ 公開URL有効

□ Build成功

□ 環境変数設定済

□ API応答確認済

現在：
成立済

担当：
実装
→ antigravity確認
→ PM判定

---

## R2｜継続性

目的：
再訪継続。

確認：

□ user_id継続

□ decision再開可能

□ decision_OS再開可能

□ 確認経路内で
decision continuity停止未検出

現在：
成立済

担当：
実装
→ PM判定

---

## R3｜判断循環

目的：
最低1回成立。

確認：

□ property_reader到達

□ decision成立

□ comparison（必要時）

□ loan_safety到達

□ next_action到達

□ next_step到達

現在：
成立済

担当：
実装
→ PM判定

---

## R4｜公開前確認

目的：
限定公開実施判断。

確認：

□ 公開対象者決定

□ 限定公開方式決定

□ フィードバック回収方法決定

□ 不具合報告窓口決定

現在：
未着手

担当：
PM

---

## R5｜除外確認

今回やらない。

確認：

□ 一般公開

□ セキュリティ完成

□ UX完成

□ UI改善

□ 課金

□ LINE高度連携

□ type_diagnosis完成

□ purchase_motivation完成

現在：
除外固定

担当：
PM

---

判定

R1〜R4成立
↓

限定公開開始許容

未成立
↓

公開停止
