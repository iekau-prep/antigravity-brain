constitution_levels.md

Updated: 2026-06-26

Status: Active

横断不変条件｜変更レベル定義

目的

家買う予備校全体において、

横断要素がどこまで変更可能かを統一基準として定義する。

重要：

変更レベル定義
≠
横断思想定義

本書は、

「何をどのレベルで扱うか」

のみ定義する。

⸻

Level A｜憲法

定義

変更すると、

家買う予備校そのものが変わる思想。

運用

変更には、

・思想監査室レビュー

・Product Owner承認

が必要。

Builder単独変更不可。

技術都合変更不可。

例

・decision定義

・STATE定義

・loop思想

・continuity思想

・recommendation境界

・time horizon

・fixed_core思想

・家買う予備校の目的

・現実との接触思想

・現実との接触フィードバック（仮）

⸻

Level B｜準憲法

定義

思想は維持したまま、

構造改善可能なもの。

運用

Builder提案可。

思想監査室確認。

Product Owner採用判断。

例

・type_diagnosis受渡

・purchase_motivation受渡

・comparison受渡

・loan_safety受渡

・property_reader受渡

・module入力出力

・CTA責務

⸻

Level C｜設計

定義

思想へ影響しない実現方法。

運用

Builder提案可。

技術監査判断可。

必要時のみProduct Owner確認。

例

・URL

・schema

・API

・Supabase

・uuid

・user_id

・LINE同期

・画面構成

・UI表現

・実装方式

⸻

Level D｜運用

定義

完成後も継続的に改善される運用。

運用

番人主体。

必要時のみProduct Owner確認。

例

・Phase

・公開

・KPI

・観察

・運用フロー

・通知タイミング

⸻

AI運用原則

Builder

Level Aは変更しない。

Level Bを提案する。

Level Cを設計する。

Level Dは番人と連携する。

⸻

思想監査室

Level Aを監査する。

Level Bを確認する。

Level Cへ介入しない。

Level Dへ介入しない。

⸻

技術監査

Level Cのみ主体。

思想変更しない。

⸻

番人

Level Dのみ主体。

思想判断しない。

設計判断しない。

⸻

Product Owner

全Levelについて、

最終採用判断を行う。

重要：

Product Ownerは監査主体ではない。

最終決定者である。

⸻

基本原則

重要：

「変更禁止」

ではない。

「変更ハードルが異なる」

という考え方で運用する。

Levelが高いほど、

レビューと承認が必要になる。
