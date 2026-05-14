# decision_os_role.md
Updated: 2026-05-14
Status: Core

=============================

■ 概要

=============================

本ドキュメントは、

👉 家買う予備校における decision_OS の role（役割）

を定義する。

---

decision_OS は、

❌ 物件一覧  
❌ dashboard  
❌ お気に入り管理  
❌ 保存管理UI  

ではない。

---

⭕ 「現在のdecision状態を反映し、
次のdecisionへ進め続けるための中核UI」

として扱う。

---

本ドキュメントは、

・decision_framework.md
・state_to_cta_connection.md
・decision_os / ux_flow.md
・product_connection_design.md

を基盤として定義する。

---

=============================

■ roleの基本定義（最重要）

=============================

decision_OS の本質は、

👉 「何を保存したか」

ではない。

---

👉 「今どう迷っているか」

を扱うことである。

---

つまり：

❌ 情報管理UI

ではなく、

⭕ decision progression UI

として扱う。

---

decision_OS は、

・判断を止めない  
・現在状態を可視化する  
・次decisionへ接続する  
・decision循環を維持する  

ために存在する。

---

=============================

■ decision_OS のrole

=============================

decision_OS のroleは以下。

---

① 現在のdecision状態を反映する

---

現在：

・何を残しているか
・何を保留しているか
・何を見送ったか

を、

👉 「現在状態」

として反映する。

---

重要：

扱うのは、

❌ 過去の正解

ではなく、

⭕ 現在の迷い状態

である。

---

② 次decisionを提示する

---

decision_OS は、

👉 「次に何を整理・判断すべきか」

を提示する。

---

ここで重要なのは：

❌ recommendation

ではないこと。

---

⭕ 「現在状態に自然な次decision」

を提示する。

---

③ decision循環を維持する

---

decision_OS は、

external
↓
property_reader
↓
decision
↓
decision_OS
↓
comparison / 再判断 / 次候補

という、

👉 decision loop

を維持する役割を持つ。

---

重要：

decision_OS は、

❌ 終着地点

ではない。

---

⭕ 判断継続地点

である。

---

④ decision更新を許容する

---

本OSでは、

decisionは固定しない。

---

・再判断
・比較
・新物件追加
・見送り変更

などにより、

decisionは更新され続ける。

---

そのためdecision_OSも、

❌ 確定一覧

ではなく、

⭕ 更新可能状態

として存在する。

---

⑤ comparisonへ接続する

---

decision_OS は、

迷いが発生した時、

👉 comparisonへ接続する。

---

ただしcomparisonは、

❌ 滞在場所

ではない。

---

⭕ 一時的decision収束装置

である。

---

そのため：

comparison後は、
必ずdecision_OSへ戻る。

---

=============================

■ 現在性（最重要）

=============================

decision_OS が扱うのは、

👉 「今」

である。

---

つまり：

❌ 過去履歴中心
❌ 保存履歴中心
❌ 管理中心

ではない。

---

⭕ 「現在どのように迷っているか」

を扱う。

---

そのため：

decision_state は、

❌ comparison履歴
❌ 通過フラグ
❌ last_action

に依存しない。

---

現在のdecision状態のみから導出する。

---

=============================

■ 一時性（重要）

=============================

decision_OS における表示は、

基本的に：

⭕ 永続確定

ではなく、

⭕ 一時状態

として扱う。

---

例：

・比較中
・迷い中
・1件へ収束
・再び迷い発生

など。

---

つまり：

decision_OS は、

❌ 完了管理

ではなく、

⭕ 更新継続

を扱う。

---

=============================

■ 非強制性（重要）

=============================

decision_OS は、

❌ 決断強制UI

ではない。

---

⭕ 「今自然に整理できそうな次decision」

を提示する。

---

そのため：

・複数主CTA
・強引な誘導
・CV優先導線

は行わない。

---

常に：

👉 「次の1手」

だけを提示する。

---

=============================

■ decision_stateとの関係

=============================

decision_OS は、

decision_state を扱う中核UIである。

---

現在のdecision_state：

・未判断
・検討中
・迷い中

---

重要：

「整理済み」は
独立decision_stateとして持たない。

---

comparison後に1件へ収束した場合も、

内部decision_stateは：

👉 検討中

へ戻る。

---

理由：

本OSは、

❌ 完了管理

ではなく、

⭕ 判断継続

を扱うため。

---

=============================

■ comparisonとの関係

=============================

comparisonは、

decision_OS内部の：

⭕ 「迷い整理装置」

として扱う。

---

comparisonの役割：

・残候補を1件へ収束
・迷いを言語化
・decision更新

---

重要：

comparisonは、

❌ 比較サービス

ではない。

---

⭕ 一時的decision収束装置

である。

---

そのため：

comparison後は、
decision_OSへ戻る。

---

=============================

■ CTAとの関係

=============================

decision_OS は、

主CTAによって：

👉 「次decision」

を提示する。

---

重要：

CTAは、

❌ 機能リンク

ではない。

---

⭕ decision progression trigger

である。

---

decision_OS におけるCTAは：

・比較する
・再判断する
・安全確認する
・次候補を探す

など、

👉 「現在状態に必要な次decision」

のみを扱う。

---

=============================

■ 3件以上時の扱い

=============================

3件以上時は：

❌ comparison自動遷移

しない。

---

理由：

「何を比較対象にするか」

自体がdecisionだから。

---

そのため：

👉 「まず2件まで整理する」

を優先する。

---

comparisonは：

❌ 多件比較UI

ではなく、

⭕ 最終2択整理UI

として扱う。

---

=============================

■ decision_OS がやらないこと

=============================

❌ dashboard化  
❌ Notion化  
❌ タスク管理化  
❌ recommendation  
❌ AI最適化  
❌ 情報過多化  
❌ comparison滞在化  
❌ 一覧管理UI化  
❌ SUUMO mini化  
❌ スコア主導化  

---

理由：

decision_OS の強みは、

❌ 情報量

ではなく、

⭕ decision progression

だから。

---

=============================

■ future expansionとの関係

=============================

将来的に：

・LINE統合
・AI補助
・履歴分析
・recommendation

などが追加されても、

decision_OS のroleは変えない。

---

重要：

追加機能はすべて、

👉 「decision progression補助」

としてのみ存在する。

---

⭕ roleを上書きしてはならない。

---

=============================

■ 最終定義

=============================

decision_OSとは、

👉 現在のdecision状態を反映し  
👉 次decisionを提示し  
👉 decisionを循環・更新し続けるための中核UIである。

---

## 一言でいうと

👉 「今どう迷っているかを整理し、
次のdecisionへ進め続けるOS中核UI」
