# rent_vs_buy（legacy reference）

このディレクトリは旧版（legacy / reference）です。

## 状態
- 開発終了
- 凍結済み
- 参照専用

## 用途
以下の目的でのみ参照します。
- 計算ロジックの参照
- 過去UI / コピーの参照
- 失敗履歴の確認

## ルール
- この配下のコードは編集禁止
- 今後の新規開発対象ではありません
- 新規機能追加は行いません

## 開発対象
現在の開発対象は以下です。

- tools/rent_vs_buy_v2/

---

## 今後の固定ルール

### 命名ルール
- 本番名は最終的に rent_vs_buy
- rent_vs_buy_v2 は移行期間中の仮名
- legacy は参照専用
- 最終的に 1プロダクト = 1名前 に収束させる

---

### 接続ルール
- brain/core = 絶対思想
- brain/system = 横断ルール
- projects/iekau/products/rent_vs_buy = 設計書
- tools/rent_vs_buy_v2/web = 実装
- 実装は必ず設計.mdに従う

---

### 構造ルール
- tools/rent_vs_buy/legacy/ = 旧版
- tools/rent_vs_buy_v2/web/ = 新版
- legacy は編集禁止
- 新規機能は v2 側のみ
- 最初はプレースホルダーのみで、実接続は後回し
