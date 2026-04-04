# property_reader / data_connection.md

## 概要

本ドキュメントは、  
property_reader における

👉 **データ連携設計（data_connection）**

を定義する。

property_reader は単体ツールではなく、

👉 家買う予備校全体の「実務レイヤー」

であり、

- type_diagnosis（自己理解）
- purchase_motivation（判断軸）
- rent_vs_buy（前提理解）
- loan_safety（現実ライン）
- LINE（データ蓄積 / 統合）

と連携することで、

👉 **「物件」ではなく「自分にとってどうか」を判断できる状態を作る**

---

## 連携の基本思想

---

### ① 「物件」ではなく「人」で判断する

通常の不動産サービスは

👉 物件中心

だが、property_reader は

👉 **ユーザー中心**

---

### ② 全データは「判断のために使う」

- タイプ
- 判断軸
- 予算
- 安全ライン
- 条件
- 過去履歴
- 現在状態

👉 **すべて「どう判断するか」に使う**

---

### ③ UXはシンプルに見せる

内部では複雑に連携していても、

👉 **ユーザーにはシンプルに見せる**

---

### ④ データは「補正レイヤー」として使う

重要：

❌ 物件評価そのものを歪めるのではない  
👉 **「見方・優先順位・判断順序」を補正する**

---

### ⑤ 「判断OS」として一貫させる

この連携の本質は、

👉 **各プロダクトを“機能”ではなく“判断補助モジュール”として統合すること**

---

### ⑥ どこからでも使えるが、繋ぐほど精度が上がる

property_reader は単体でも使える。

ただし、

- type_diagnosis
- purchase_motivation
- rent_vs_buy
- loan_safety
- LINE

と接続されるほど、

👉 **一般評価**  
から  
👉 **あなた仕様の判断**  
へ進化する

---

## データ構造（全体像）

---

### ■ ユーザーデータ

user

- id
- line_id
- created_at
- updated_at

---

### ■ 前提データ

profile_context

- user_id
- user_type
- decision_bias
- purchase_motivation_summary
- required_conditions
- preferred_conditions
- priority_order
- buy_vs_rent_state
- cost_gap
- break_even
- safe_budget
- max_budget
- loan_position
- updated_at

---

### ■ 物件データ

property

- id
- price
- area
- age
- repair_fee
- management_fee
- station_distance
- units
- location
- raw_input_reference

---

### ■ 判定データ

analysis

- score（総合スコア）
- layer_scores（レイヤー別）
- risks（注意点候補）
- rule_flags（ルール検知結果）
- comments（AI生成コメント）

---

### ■ 判断データ

decision

- user_id
- property_id
- analysis_id
- status（検討中 / 保留 / 見送り）
- created_at
- updated_at

---

### ■ 状態データ

state

- user_id
- current_state
- state_updated_at

---

👉 **これらを統合して最終アウトプットを生成する**

---

## 各プロダクトとの接続

---

# ■ ① type_diagnosis 連携

---

## 役割

👉 **意思決定のクセ補正（最重要）**

---

## 取得データ

- user_type（例：ヒラメキうさぎ / 比べすぎうさぎ など）
- decision_bias

---

## なぜ重要か

物件の良し悪しではなく、

👉 **「どう判断を間違えるか」を補正できる**

---

## 接続方法

AI入力：

user_type = ヒラメキうさぎ

---

## AI出力内容

- 見落としやすいポイント
- 判断ミスしやすいトリガー
- 先に固定すべき判断軸

---

## 出力例

- 勢いで決めやすいため、雰囲気より先に管理面を確認した方が良いです  
- 比較しすぎる傾向があるため、まず基準を1つ固定すると判断しやすくなります  

---

## UXでの役割

👉 **「あなたの場合」**

---

👉 **“一般論 → 自分ごと”に変わる最重要ポイント**

---

# ■ ② purchase_motivation 連携

---

## 役割

👉 **判断軸の補正（最重要）**

---

## 取得データ

- purchase_motivation_summary
- required_conditions
- preferred_conditions
- priority_order

---

## なぜ重要か

👉 **良い物件でも「その人にとって重要か」は別問題**

---

## 接続方法

AI入力：

required_conditions = ["学区", "広さ", "生活圏"]  
priority_order = ["学区", "広さ", "駅距離"]

---

## AI出力内容

- 必要条件を満たしているか
- 十分条件に引っ張られていないか
- 判断軸の順番が崩れていないか

---

## 出力例

- 駅距離は魅力ですが、あなたの最優先条件である広さとのバランス確認が必要です  
- この物件は必要条件には合っていますが、十分条件に強く引っ張られやすい構成です  

---

## UXでの役割

👉 **「判断軸で見ると」**

---

👉 **“良い物件”から“自分に合う物件”へ変える**

---

# ■ ③ rent_vs_buy 連携

---

## 役割

👉 **意思決定の前提補正**

---

## 取得データ

- buy_vs_rent_state
- 損益分岐
- コスト差

---

## なぜ重要か

👉 **良い物件でも「今買う意味があるか」は別問題**

---

## 接続方法

AI入力：

buy_vs_rent = やや賃貸優位

---

## AI出力内容

- この物件を検討する前提が適切か
- 今の判断として妥当か

---

## 出力例

- この物件は魅力がありますが、現時点では賃貸継続も合理的な選択です  
- 購入優位の条件に近いため、前向きに検討できるタイミングです  

---

## UXでの役割

👉 **「前提として」**

---

👉 **“そもそも論”を補正する**

---

# ■ ④ loan_safety 連携

---

## 役割

👉 **現実制約の補正（最重要レイヤー）**

---

## 取得データ

- safe_budget（安全ライン）
- max_budget（上限ライン）
- loan_position

---

## なぜ重要か

👉 **「買える」と「買っていい」は違う**

---

## 接続方法

AI入力：

safe_budget = 45000000  
max_budget = 55000000  
property_price = 48000000  

---

## AI出力内容

- 安全圏かどうか
- 背伸びかどうか
- リスクの位置

---

## 出力例

- 安全ラインをやや超えており、条件調整が必要な水準です  
- 無理のない範囲に収まっており、現実的な検討が可能です  

---

## UXでの役割

👉 **「資金的に見ると」**

---

👉 **一気に現実に引き戻す**

---

# ■ ⑤ LINE連携（最重要）

---

## 役割

👉 **履歴蓄積 × パーソナライズ × 判断の進化 × 状態更新**

---

## 保存データ

history / decision / profile_context / state

- property_id
- score
- timestamp
- user_action（閲覧・保存・比較など）
- status
- profile_context更新結果
- current_state

---

## なぜ重要か

👉 property_readerを「一発ツール」で終わらせない

---

👉 **“学習するプロダクト”に進化させる**

---

## できること

---

### ■ ① 過去比較

- 過去に見た物件との相対評価
- ポジションの明確化

---

### ■ ② 条件の明確化

- ユーザーの優先軸抽出
- 無意識の傾向可視化

---

### ■ ③ 行動分析

- 見た回数
- 保存傾向
- 迷いパターン

---

### ■ ④ state更新

- 今は比較フェーズか
- 今は資金不安フェーズか
- 今は迷走状態か

---

### ■ ⑤ CTA最適化

- 次に property_reader を出すべきか
- 先に loan_safety を出すべきか
- purchase_motivation に戻すべきか

---

## AI出力内容

- 過去との比較
- 今回の位置づけ
- 次に見るべきこと

---

## 出力例

- 過去の候補より管理面は安定しています  
- これまで見た中では駅距離が弱めです  
- 今は比較候補が増えているため、次は優先順位を固定した方が判断しやすいです  

---

## UXでの役割

👉 **「これまでと比べると」**  
👉 **「今の状態だと」**

---

## 最重要ポイント

👉 **LINEが“記憶装置”ではなく“判断の脳”になる**

---

property_readerは

👉 単発ツール → 継続判断OS

へ進化する

---

## データ統合ロジック

---

### STEP1  
物件データ取得

---

### STEP2  
ルール判定（rules）

---

### STEP3  
スコア算出（scoring）

---

### STEP4  
ユーザーデータ取得

---

### STEP5  
統合データ生成

入力：

- property（物件）
- rule_result（ルール）
- score（スコア）
- user_type（タイプ）
- decision_bias
- required_conditions
- priority_order
- buy_vs_rent_state
- safe_budget
- history（履歴）
- current_state

---

### STEP6  
AI出力生成

👉 **「物件 × 人 × 文脈 × 状態」から最終判断補助を生成**

---

### STEP7  
decision / state 更新

- user_action を保存
- status を更新
- current_state を更新

---

## UX上の優先順位

---

表示順：

1. 結論  
2. 注意点  
3. レイヤー  
4. あなたの場合（統合補正）  
5. 行動提案  

---

👉 **裏は複雑、表はシンプル**

---

## MVPでやること

---

- type連携（必須）  
- purchase_motivation連携（必須）  
- loan_safety連携（簡易）  
- 単体物件分析  
- decision保存  
- 基本state更新  

---

## MVPでやらないこと

---

- 高度な履歴分析  
- 自動推薦  
- 完全比較  
- 高度な行動予測  

---

## 将来拡張

---

### フェーズ2
- 比較機能
- 条件フィルター強化
- state精度向上

---

### フェーズ3
- 自動推薦
- 行動予測
- household連携

---

### フェーズ4
- 完全パーソナライズ
- 購入タイミング提案
- BtoB共有

---

## 最重要ポイント

data_connectionで一番重要なのは、

👉 「全部つなぐこと」ではない

---

👉 **「判断に効くものだけつなぐ」**

---

## 最終定義

data_connectionとは、

👉 **物件情報を「自分にとっての判断」に変換するために、  
👉 各プロダクトの結果・履歴・状態を統合する設計**

である。

---

## 一言でいうと

👉 **「物件を見る」から「自分の判断として読む」へ変える統合設計**
