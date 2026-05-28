# decision_os_role.md
Updated: 2026-05-25
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
❌ comparison管理画面  
❌ recommendation engine  
❌ future最適化システム  
❌ SUUMO mini  
❌ Notion型管理UI  

ではない。

---

⭕ 「現在どこでdecisionが止まり、
どこで本命感が揺れ、
どこでfixed_coreとの距離が変化し、
今どのdecision更新が必要なのか」

を整理し続ける、

👉 current decision OS

として扱う。

---

さらに decision_OS は、

⭕ fixed_core再接続OS  
⭕ 本命形成循環OS  
⭕ decision progression OS  
⭕ drift recovery OS  

として存在する。

---

本ドキュメントは、

・decision_framework.md
・state_definition.md
・state_detection.md
・state_to_cta_connection.md
・comparison_role.md
・decision_update_triggers.md
・product_connection_design.md
・fixed_core_definition.md
・drift_detection.md

を基盤として定義する。

---

=============================

■ roleの基本定義（最重要）

=============================

decision_OS の本質は、

❌ 「何を保存したか」

ではない。

---

⭕ 「今どこでdecisionが揺れ、
何が本命化し、
どこでfixed_coreからズレ始め、
何を更新する必要があるか」

を扱うことである。

---

つまり：

❌ 情報管理UI  
❌ 完了管理UI  
❌ decision固定UI  
❌ future予測UI  
❌ comparison滞在UI  

ではなく、

⭕ current decision reflection UI  
⭕ decision progression UI  
⭕ 本命形成循環UI  
⭕ fixed_core再接続UI  

として扱う。

---

decision_OS は：

・現在decisionを反映する  
・本命形成状態を扱う  
・current driftを扱う  
・fixed_coreへ戻れるようにする  
・comparisonを内部循環させる  
・decision更新を止めない  
・現在必要なdecision整理を提示する  

ために存在する。

---

=============================

■ decision_OS の本質（追加・最重要）

=============================

住宅購入では、

人は：

❌ 一度整理して終わる

わけではない。

---

・比較
・現実接触
・市場
・不安
・家族相談
・内見
・時間経過
・未来想像
・条件増殖
・比較疲れ

などによって、

👉 decisionは揺れ続ける。

---

そのため decision_OS は、

❌ 「正しいdecisionを固定する場所」

ではない。

---

⭕ 「decisionが揺れ続ける前提で、
current decision を整理し続ける場所」

として存在する。

---

重要：

decision_OS が扱うのは、

❌ 最終正解

ではない。

---

⭕ 「現在時点のdecision現在地」

である。

---

=============================

■ decision_OS のrole

=============================

decision_OS のroleは以下。

---

① current decision を反映する（最重要）

---

decision_OS が扱うのは、

👉 「今のdecision現在地」

である。

---

現在：

・何を本命として考えているか
・何をまだ捨てきれていないか
・どこで迷っているか
・どこでdriftしているか
・何に引っ張られているか
・どこでfixed_coreから離れ始めているか

を、

👉 current decision

として反映する。

---

重要：

扱うのは、

❌ 過去の正解  
❌ 完了状態  
❌ 保存履歴管理  

ではない。

---

⭕ 「現在どのようにdecisionが揺れているか」

である。

---

=============================

■ 保存 / 保留 / 見送り の再定義

=============================

decision_OS において：

保存 / 保留 / 見送り

は、

❌ 管理タグ

ではない。

---

⭕ current decision expression  
⭕ 本命形成深度  
⭕ current decision heat  

として扱う。

---

■ 保存

👉 今もっとも本命として向き合っている対象  
👉 現在もっともdecision熱量が高い対象  
👉 深く現実接触したい対象  

---

重要：

保存は、

❌ 最終決定

ではない。

---

⭕ 「現在もっとも本命として向き合っている状態」

である。

⸻

重要：

保存は、

❌ bookmark
❌ 後で見る箱
❌ 無限ストック

ではない。

⸻

⭕ 「今、
本命として深く向き合う対象」

である。

⸻

そのため decision_OS は：

❌ 無限保存

を前提にしない。

⸻

理由：

住宅購入では、

比較対象が増え続けるほど：

・comparison疲れ
・条件増殖
・fixed_core埋没
・本命迷子
・decision停止

が発生しやすいため。

⸻

そのため保存数制限は、

❌ SaaS制限
❌ 不便化
❌ retention制御

ではない。

⸻

⭕ 「本命形成を軽くするための整理圧」

として存在する。

⸻

重要：

decision_OS が重視するのは、

❌ 「何件保存できるか」

ではない。

⸻

⭕ 「今どの本命へ、
深く向き合えているか」

である。

---

■ 保留

👉 まだdecision更新余地がある  
👉 本命化余地が残っている  
👉 comparison整理対象  
👉 捨てきれていない対象  

---

重要：

保留は、

❌ 放置箱

ではない。

---

⭕ 「まだdecision progressionが継続している状態」

として扱う。

---

■ 見送り

👉 現在の本命枠から外した状態  
👉 現時点では深く向き合わない対象  
👉 current decision整理結果  

---

重要：

見送りは、

❌ comparison敗北

ではない。

---

⭕ 「現在時点のdecision更新結果」

として扱う。

---

=============================

■ fixed_coreへ再接続する（超重要）

=============================

decision_OS の最重要roleの1つは、

👉 fixed_coreへ再接続すること

である。

---

住宅購入では、

比較・市場・情報過多によって、

人は：

・本来大事だったもの
・失いたくなかったもの
・本命感
・生活感覚

を見失い始める。

---

つまり：

decision drift が発生する。

---

そのため decision_OS は、

👉 「本来何を守りたかったか」

を再接続する。

---

重要：

decision_OS は、

❌ drift監視OS

ではない。

---

⭕ 「fixed_core再接続OS」

である。

---

つまり：

・何を失いたくなかったか
・どこで比較軸がズレ始めたか
・どこでsurface_reasonに引っ張られているか
・どこでcurrent_priorityが暴走しているか

を整理し、

👉 fixed_coreへ戻れるようにする。

---

=============================

■ fixed_core / current_priority / surface_reason

=============================

decision_OS では、

以下を分離して扱う。

---

■ fixed_core

長期的に一貫しやすい判断核。

---

例：

・生活余白
・安心感
・家族時間
・自由
・生活導線
・前進感

など。

---

■ current_priority

現在強く引っ張られている優先軸。

---

例：

・今は駅近重視
・今は価格重視
・今は築浅重視

など。

---

■ surface_reason

瞬間感情・短期反応。

---

例：

・なんか好き
・売れそうで怖い
・テンション上がる
・人気そう

など。

---

重要：

decision_OS は、

❌ current_priority を
fixed_core と同一視しない。

---

また：

❌ surface_reason を
decision核と同一視しない。

---

decision_OS が扱うのは、

👉 「今どこが強く作用しているか」

である。

---

=============================

■ 本命形成を循環させる

=============================

decision_OS は、

⭕ 「本命形成循環OS」

として存在する。

---

本命は、

❌ 一瞬で決まる

ものではない。

---

・比較
・内見
・現実接触
・時間経過
・家族相談
・市場変化
・drift
・drift recovery

などを通して、

👉 少しずつ形成される。

---

decision_OS は、

その変化を循環させる。

---

構造：

external
↓
property_reader
↓
decision
↓
decision_OS
↓
comparison / 再整理 / 現実接触
↓
decision更新
↓
decision_OS

---

重要：

decision_OS は、

❌ 終着地点

ではない。

---

⭕ 「decision循環の中心」

である。

---

重要：

decision_OS は、

❌ comparison結果を
単発イベントとして消費しない。

⸻

comparison によって：

・何を優先し始めたか
・どこで迷ったか
・どちらを現在本命寄りに置いているか
・どの違和感が残ったか

など、

👉 current decision変化

を、

現在decisionへ接続し続ける。

⸻

ただし重要：

ここで扱うのは、

❌ comparison履歴管理
❌ timeline管理
❌ AI要約
❌ journey保存

ではない。

⸻

⭕ 「現在decisionを理解するための
continuity reflection」

である。

=============================

■ 本命感とは何か

=============================

本命感とは、

❌ スペック一致

ではない。

---

⭕ 「fixed_coreとの接続感」

である。

---

つまり：

・違和感が少ない
・比較後も残したい
・現実接触後も向き合えそう
・生活イメージが持てる
・未来崩壊感が少ない
・許容可能

など。

---

重要：

本命感は、

❌ 完璧条件

ではない。

---

⭕ 「現実の中でも、
向き合い続けられる感覚」

である。

---

=============================

■ 次decisionを提示する

=============================

decision_OS は、

👉 「今どのdecision整理が必要か」

を提示する。

---

ここで重要なのは：

❌ recommendation

ではないこと。

---

⭕ 「現在のdecision driftを整理する次decision」

を提示することである。

---

例：

・fixed_coreへ戻る
・比較軸を整理する
・本命感を整理する
・現実ラインを整理する
・迷いを整理する
・再び現実接触する

など。

---

重要：

CTAは、

❌ 導線

ではない。

---

⭕ decision update trigger  
⭕ drift整理トリガー  
⭕ fixed_core再接続トリガー

である。

---

=============================

■ decision progression の再定義（重要）

=============================

decision progressionとは、

❌ 前へ進み続けること

ではない。

---

⭕ 「decision更新が止まらないこと」

である。

---

つまり：

・戻る
・迷う
・比較する
・保留する
・再整理する
・drift recoveryする

も、

👉 progression

として扱う。

---

重要：

家買う予備校は、

❌ 最短決断OS

ではない。

---

⭕ 「納得感あるdecision更新継続OS」

である。

---

=============================

■ decision driftを可視化する

=============================

decision_OS は、

👉 current drift

を扱う。

---

■ driftとは

driftとは、

👉 fixed_coreと現在decisionの距離変化

である。

---

例：

・比較しすぎて本命感喪失
・条件過多
・価格だけ見始める
・理想暴走
・他人基準化
・情報過多
・比較疲れ

など。

---

重要：

driftは、

❌ エラー

ではない。

---

⭕ decision更新過程で自然発生するもの

として扱う。

---

そのため decision_OS は、

👉 「今どこがズレ始めているか」

を整理し、

👉 次のdecision整理へ接続する。

---

重要：

decision_OS の目的は、

❌ drift除去

ではない。

---

⭕ 「何がズレ始めているかを理解し、
fixed_coreへ戻れるようにすること」

である。

---

=============================

■ drift recoveryを支援する

=============================

人は、

・比較疲れ
・条件増殖
・価格暴走
・理想暴走
・future不安
・情報過多

などによって、

fixed_coreから離れることがある。

---

しかし：

人は戻ることもできる。

---

これを：

👉 drift recovery

として扱う。

---

decision_OS は、

⭕ 「戻れる構造」

を持つ。

---

例：

・比較疲れ後に、
最初の本命感を思い出す

---

・条件増殖後に、
本当に欲しかった生活へ戻る

---

・future不安後に、
今守りたい生活へ戻る

---

重要：

decision_OS は、

❌ drift固定化

ではない。

---

⭕ 「fixed_coreへ戻れる循環」

を支援する。

---

=============================

■ comparisonを内部循環として扱う

=============================

comparisonは、

❌ 比較機能

ではない。

---

⭕ 「本命形成圧縮装置」

として扱う。

---

comparisonの役割は：

・相対reason露出
・fixed_core露出
・本命感整理
・decision drift整理
・保存昇格
・decision更新

である。

---

comparisonは：

❌ comparison滞在UI

ではない。

---

⭕ 「どちらを本命として深く向き合うか」

を整理するための一時装置である。

---

構造：

decision_OS
↓
迷い増加
↓
comparison発生
↓
本命整理
↓
decision更新
↓
decision_OSへ戻る

---

重要：

comparison後に自然なのは：

・保存昇格
・保留維持
・本命整理

である。

---

見送りは：

❌ comparison敗北

ではない。

---

⭕ 段階的整理結果

として扱う。

---

=============================

■ STATE / decision_state / state_label の分離

=============================

decision_OS では、

以下を明確に分離する。

---

■ STATE

👉 今どのdecision領域が未整理か

---

例：

・自己理解
・判断軸整理
・現実判断
・本命形成

---

■ decision_state

👉 現在どのように迷っているか

---

例：

・未判断
・検討中
・迷い中

---

■ state_label

👉 UI上で現在地を伝える表現レイヤー

---

例：

・残す候補状態
・条件付き候補状態
・調整圏
・安心圏

など。

---

重要：

decision_OS は、

❌ state_label管理

ではない。

---

⭕ current decision整理

を扱う。

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
❌ 完了状態中心  
❌ future最適化中心  

ではない。

---

⭕ 「現在どのようにdecisionが揺れているか」

を扱う。

---

そのため：

履歴は、

❌ 保存記録

ではない。

---

⭕ 「現在decision理解補助」

として存在する。

---

また：

future視点も存在する。

---

ただし：

future視点は、

❌ 主役

ではない。

---

⭕ 「現在decision整理の補助線」

として扱う。

---

=============================

■ LINEとの関係（軽接続）

=============================

LINE接続前後で、

decision_OS の本質は変わらない。

---

変わるのは：

👉 decision continuity の深さ

である。

---

■ LINE未接続

扱えるもの：

・単発decision
・current drift
・current decision
・一時的本命形成

---

■ LINE接続後

扱えるもの：

・decision continuity
・drift推移
・本命形成変化
・recovery履歴
・current vs past drift

---

重要：

LINEは、

❌ decision_OS化装置

ではない。

---

⭕ 「decision continuity強化」

として扱う。

---

=============================

■ 情報量より重要なもの（超重要）

=============================

decision_OSで重要なのは、

❌ 保存数
❌ 比較数
❌ 情報量
❌ 滞在時間

ではない。

---

⭕ 「今どこでdecisionが止まり、
どこでズレ、
何を更新すべきか」

である。

---

つまり：

❌ 情報を増やすほど良い

ではない。

---

⭕ 「今必要なdecision整理だけを提示する」

を優先する。

---

=============================

■ decision continuity

=============================

decision_OS は、

❌ decision memory

だけではない。

---

⭕ decision continuity

を扱う。

---

つまり：

・前回何で迷ったか
・何で本命感が揺れたか
・どこでdriftしたか
・どこでfixed_coreへ戻ったか

を、

👉 現在decisionへ接続する。

⸻

例えば：

・一度comparisonした対象
・以前本命寄りだった対象
・現在も捨てきれていない対象

などは、

👉 current decision理解補助

として扱う。

⸻

重要：

これは、

❌ comparison履歴閲覧

ではない。

⸻

⭕ 「なぜ今も迷いが残っているか」

を理解するための
continuity補助である。

⸻

そのため：

comparison済み情報も、

❌ 過去保存

としてではなく、

⭕ 「current decisionへ影響している文脈」

として扱う。

---

重要：

continuityの目的は、

❌ 履歴管理

ではない。

---

⭕ 「現在decision理解補助」

である。

---

=============================

■ 非強制性

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
・強引誘導
・CV優先導線
・強制収束

は行わない。

---

常に：

👉 「次の1手」

だけを提示する。

---

=============================

■ 整理圧

=============================

decision_OS は、

❌ 無限保存
❌ 無限比較
❌ comparison沼
❌ 保留墓場化

を避ける。

---

ただし：

❌ 強制決断

は行わない。

---

必要なのは：

⭕ 整理圧

である。

---

整理圧とは：

👉 「本命として深く向き合える量には限界がある」

を自然に伝えること。

---

例：

・保存数制限
・比較停滞
・ズレ可視化
・本命形成演出

など。

⸻

重要：

整理圧の目的は、

❌ 「減らすこと」

ではない。

⸻

⭕ 「今向き合う本命を明確化すること」

である。

⸻

住宅購入では：

比較対象を無限保持すると、

・保存がbookmark化する
・comparisonが終わらなくなる
・decision continuity が重くなる
・fixed_coreが埋もれる

などが発生しやすい。

⸻

そのため decision_OS は：

❌ 「大量管理」

ではなく、

⭕ 「本命形成圧縮」

を支援する。

⸻

重要：

圧縮とは：

❌ 強制見送り

ではない。

⸻

⭕ 「今深く向き合う対象を整理すること」

である。

---

重要：

整理圧は、

❌ recommendation

ではない。

---

⭕ decision補助

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
❌ 情報量勝負  
❌ comparison滞在化  
❌ 一覧管理UI化  
❌ SUUMO mini化  
❌ スコア主導化  
❌ 完了管理化  
❌ future不安煽りOS化  
❌ 無限比較倉庫化
❌ bookmark管理化
❌ comparison履歴管理UI化
❌ timeline管理OS化

---

理由：

decision_OS の強みは、

❌ 情報量

ではなく、

⭕ current decision整理  
⭕ 本命形成循環  
⭕ fixed_core再接続  
⭕ drift recovery  
⭕ decision progression  

だから。

---

重要：

decision_OS は、

❌ 「大量候補を管理するOS」

ではない。

⸻

⭕ 「限られた本命候補へ、
深く向き合い続けるためのOS」

である。

⸻

そのため：

保存数制限
comparison整理
continuity reflection
drift整理

などを通して、

👉 「今向き合うべき本命」

を軽く整理し続ける。

⸻

重要なのは：

❌ 情報量

ではない。

⸻

⭕ 「decisionが止まらないこと」

である。

⸻

=============================

■ 最終定義

=============================

decision_OSとは、

👉 現在のdecision現在地を反映し  
👉 fixed_coreへ再接続しながら  
👉 本命形成とdecision driftを整理し  
👉 comparison・現実接触・future補助線を内部循環させ  
👉 current decision を継続的に更新し続ける  
家買う予備校の中核decision OSである。

---

## 一言でいうと

👉 「今どこで迷い、
どこが本命化し、
どこがfixed_coreからズレ始め、
何を更新する必要があるかを整理しながら、
decisionを更新し続けるOS」
