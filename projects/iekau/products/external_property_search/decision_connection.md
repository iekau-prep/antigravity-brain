# decision_connection.md
Updated: 2026-06-09
Status: Draft

=============================

■ 概要

=============================

本モジュールは、

property_reader から
decision への接続境界を定義する。

目的：

読解結果を、

decision 更新可能状態へ変換すること。

ここでは保存しない。

ここではSTATE生成しない。

ここではOS整理しない。

---

構造：

property_reader

↓

decision_connection

↓

decision

↓

decision_OS

=============================

■ 基本思想

=============================

思想①

読むことと決めることを分離する。

property_reader

＝
読解

---

decision

＝
現在判断更新

---

思想②

decisionは生成物ではない。

decision
≠
AI出力

decision
≠
推薦結果

decision
＝
現在時点判断

---

思想③

決めない自由を許容する。

残す

保留

見送り

すべて成立。

=============================

■ 接続条件

=============================

decision開始条件：

① 読解完了

② 判断停止していない

③ 判断主体維持

不足情報は許容。

結論不要。

=============================

■ 受け渡し思想

=============================

property_readerから渡すもの：

判断材料のみ。

---

扱う：

・reason候補

・理想接触

・現実接触

・current_priority

・fixed_core接触

・drift情報

---

扱わない：

・decision結果

・recommendation

・順位付け

・評価点

=============================

■ decision更新

=============================

decisionは、

新規生成しない。

更新のみ。

---

許可：

保存

保留

見送り

---

禁止：

強制決定

自動更新

推薦反映

=============================

■ decision continuity

=============================

目的：

判断を切らない。

---

構造：

property_reader

↓

decision

↓

decision_OS

↓

次decision

注意：

決着させない。

継続可能状態を維持。

=============================

■ decision_OSとの境界

=============================

decision_OS は、

decision を保存しない。

---

役割：

現在decision整理

drift回復

次CTA提示

---

禁止：

評価

再読解

比較確定

=============================

■ NG

=============================

・読む即保存

・読む即decision

・読む即OS

・STATE保存

・recommendation

・比較確定

=============================

■ 今回含まない

=============================

❌ comparison

❌ next_action

❌ next_step

❌ recommendation

❌ continuity生成

❌ STATE生成

❌ property保存

=============================

■ 最終定義

=============================

decision_connectionとは、

読解結果を、

decision更新可能状態へ接続する責務境界である。

決める責務は渡す。

決める内容は渡さない。
