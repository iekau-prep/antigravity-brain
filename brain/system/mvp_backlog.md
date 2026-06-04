# mvp_backlog.md
Status: Active
Owner: PM
Goal: MVP公開成立（decision progression最低1回完走）

---

## P0-1｜認証方式固定

目的：
同一ユーザーとして再訪可能にする。

完了条件：
・限定公開 / 招待制 / 一般公開のどれか決定済
・認証境界決定済
・user_id境界決定済
・昨日終了→今日再訪で同一ユーザー継続可能

現在状況：
未着手

担当チャット：
PM
→ 必要時：番人
→ 実装

次アクション：
① 公開方式決定
② 匿名uuid可否確認
③ LINE不使用前提で成立確認

---

## P0-2｜decision再開確認

目的：
decision継続可能性成立。

完了条件：
昨日途中終了
↓
今日再訪
↓
decision_OS再開
↓
次decision継続可能

現在状況：
未確認

担当チャット：
PM
→ 実装
→ antigravity監査

判定：
監査OK
≠
公開OK

次アクション：
① 再訪ケース作成
② decision_OS復元確認
③ 停止箇所記録

---

## P0-3｜property最小保持確認

目的：
decision継続に必要な最小property参照のみで循環成立。

保持対象：
・property_id
・source
・url
・decision_result

完了条件：
上記参照だけで、

decision再開時、

対象を失わず、
decision continuity が継続できる。

現在状況：
未確認

担当チャット：
PM
→ 実装
→ antigravity監査

次アクション：
① 現保持確認
② 余剰依存確認
③ decision continuity確認

---

## P0-4｜公開URL通し確認

目的：
第三者再現可能。

完了条件：
公開URLで

物件追加
↓
decision
↓
comparison（必要時）
↓
loan_safety
↓
decision_OS
↓
next_action
↓
next_step

最低1回完走

現在状況：
未着手

担当チャット：
PM
→ 実装
→ antigravity監査

次アクション：
① 公開URL準備
② 通し確認
③ release_checklist更新

---

## P0共通ルール

扱う：
・公開阻害除去
・後変更可能設計

扱わない：
・思想変更
・UI改善
・将来拡張固定
・schema先回り設計
・property_identity
・LINE高度連携
・課金
・type_diagnosis完成
・purchase_motivation完成

---

停止条件：

P0で思想変更が必要になった場合：
→ 番人へ返却

P0でUI観察が必要になった場合：
→ UI設計へ返却

P0で技術詳細になった場合：
→ 実装へ返却
