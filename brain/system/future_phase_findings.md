# brain/system/future_phase_findings.md
Updated: 2026-06-29
Status: Active

Purpose

本書は、

MVPおよびDecision Loop検証を通じて発見された、

将来フェーズで再評価すべき設計論点を管理する。

現在採用しない事項と、

将来検討事項を分離し、

System改善時の判断材料を保持することを目的とする。

⸻

Scope

本書が扱うもの

* 将来検討事項
* MVP保留事項
* Decision Loop検証結果
* 後続フェーズ課題

本書が扱わないもの

* 現在実装
* 現在System定義
* Constitution変更
* Module責務変更

⸻

Relationship

Constitution
↓

System
↓

future_phase_findings

↓

Future Revision

⸻

Design Principle

本書は、

現在採用する設計ではなく、

将来検討対象のみを管理する。

現在のSystem定義へ影響を与えない。
---

=============================

■ 現フェーズで確認できた重要成果

=============================

・decision_OS単体ではなく、
Loop全体でroleを検証できる状態に入った

・diagnosis → reader → decision_OS → safety → comparison

の文脈接続が成立し始めた

・「保存」ではなく
「本命への昇格」

というdecision感が発生し始めた

・safety後に
「次へ進む感」

が生まれ始めた

・comparison後に
「整理された感」

が出始めた

---

重要：

現在の成果は、

❌ UI完成

ではなく、

⭕ 「decision loopとして成立し始めたこと」

にある。

---

=============================

■ 後続フェーズで検討すべき課題

=============================

---

## ① decision状態の視覚強調が強すぎる問題

---

現状：

・本命状態
・保留状態

の視覚強調がやや強く、

👉 「decisionした感」

より、

👉 「UIが変化した感」

が前に出るケースがある。

---

特に：

・本命を押したか
・保留になったか

が、

視覚演出に埋もれる場面がある。

---

ただし現在は：

❌ hierarchy完成

ではなく、

⭕ role成立確認

が目的。

---

そのため、

現段階では調整しない。

---

後続の：

・visual polish
・hierarchy調整
・emotional design

フェーズで検討する。

---

## ② comparison後、本命物件が上位に来ない違和感

---

現状：

comparison後に選ばれた本命物件が、

decision_OS内で
最上位に来ないケースがある。

---

これにより：

👉 「本命として整理された感」

がやや弱まる。

---

ただし現在は：

❌ 並び順完成

ではなく、

⭕ 「本命roleが自然発生するか」

の確認フェーズ。

---

後続で：

・並び順
・pin
・本命優先表示
・focus演出

などを検討する。

---

## ③ safety表現の責任範囲問題

---

現状：

・「予算クリア」
・「無理なく買える範囲」

などの表現を使用している。

---

ただし将来的に：

❌ AIが安全判定している

ように見える危険がある。

---

家買う予備校は：

❌ 判定AI

ではなく、

⭕ 判断補助OS

である。

---

そのため後続フェーズで：

・wording
・責任範囲
・推定表現
・注意文脈

を整理する。

---

例：

❌ 「安全です」

↓

⭕ 「現在条件では、
無理の少ないラインに近そうです」

など。

---

## ④ role説明UI化リスク

---

Loop検証中に：

・ラベル追加
・microcopy追加
・状態説明追加

などを繰り返すと、

⭕ role深化

ではなく、

❌ 管理UI化
❌ SaaS化
❌ Notion化

へ寄る危険がある。

---

今後重要なのは：

❌ 「説明でroleを成立させる」

ではなく、

⭕ 「削ってもroleが残る」

こと。

---

つまり：

roleは、

❌ 読んで理解させる

ではなく、

⭕ 「見た瞬間に感じる」

方向を目指す。

---

=============================

■ 現フェーズでやらないこと（重要）

=============================

現在は：

❌ UI完成
❌ hierarchy磨き込み
❌ emotional design完成
❌ animation
❌ microcopy完成
❌ visual polish

を目的にしない。

---

現在最重要なのは：

⭕ 「decision loop全体で、
roleが自然循環するか」

を確認すること。

---

そのため今後は：

・decisionが次decisionへ影響するか
・保存がbookmark化しないか
・comparisonが淘汰化しないか
・CTAが誘導化しないか
・decision progressionが止まらないか

を優先検証する。

---

=============================

■ 最重要方針

=============================

現在重要なのは：

❌ 「完成UIを作ること」

ではない。

---

⭕ 「roleとdecision loopを壊さず、
心理検証可能な状態を維持すること」

である。

---

そのため現フェーズでは：

❌ polish優先

ではなく、

⭕ role検証優先

を維持する。

---

## 一言でいうと

👉 「今直すべきこと」と
「後で磨くべきこと」を分離するための記録」

⸻

Related Documents

Constitution

* constitution_experience.md

System

* decision_framework.md
* decision_os_role.md
* comparison_role.md
* drift_detection.md
* future_expansion.md

⸻

Change Policy

future_phase_findingsは、

将来フェーズの検討事項を保持する管理文書である。

現在のSystem定義を変更するために使用しない。

採用する場合は、

ConstitutionおよびSystemとの整合性を確認した上で、

正式な設計書へ反映する。
