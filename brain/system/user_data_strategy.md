# brain/system/user_data_strategy.md

## 概要

本ドキュメントは、  
家買う予備校における

👉 **ユーザーデータ設計（user_data_strategy）**

を定義する。

本設計の目的は、

👉 **「ユーザーの判断を蓄積し、再利用し、精度を上げること」**

である。

家買う予備校は、単なる診断ツール群ではない。

- type_diagnosis
- purchase_motivation
- rent_vs_buy
- loan_safety
- property_reader
- LINE

を通じて、

👉 **「住宅購入における意思決定のOS」**

を目指す。

そのため、保持すべきデータも  
「行動ログ」や「物件データ」だけでは不十分である。

重要なのは、

👉 **「何を見て、どう判断し、どう変化したか」**

を蓄積することである。

---

## 基本思想

---

### ① 保存するのは「物件」ではなく「判断」

一般的な不動産サービスでは、

- 物件を保存する
- お気に入りを管理する

という構造になりやすい。

しかし家買う予備校では、

👉 **「なぜその物件を残したか / 保留したか / 外したか」**

が重要である。

したがってデータ設計も、

❌ propertyだけを保存する構造  
ではなく

👉 **user × property × decision**

で考える。

---

### ② データは“次の判断”のために使う

本設計の目的は、

- ログを取ること
- 分析レポートを作ること
- 数字を眺めること

ではない。

---

👉 **「次の判断を良くすること」**

---

### ③ MVPではシンプルに始める

最初から

- 理由
- コメント
- 自動推定
- 家族共有
- レコメンド

まで入れると破綻する。

したがってMVPでは、

- 必須データのみ持つ
- でも後で拡張できる構造にする

ことを重視する。

---

### ④ LINEはユーザー識別の起点だが、唯一の存在ではない

MVPではLINEが最も現実的な識別基盤になる。

ただし将来的に、

- household / workspace
- 家族共有
- 不動産会社共有
- Web単体ログイン

まで見据えると、

👉 **内部IDを持ち、LINEはその紐付け先の1つとして扱う**

のが最適である。

---

### ⑤ どこからでも使えるが、繋ぐほど精度が上がる

家買う予備校は、

❌ すべての診断を先に終えないと使えない構造  
ではない

---

⭕ どこからでも使えるが、接続されるほど精度が上がる構造  
である

---

そのため、データ設計も

- 単発利用を許容する
- 後からLINEで統合できる
- 後から他プロダクト結果を重ねられる

ことを前提にする。

---

## データ構造の全体像

本プロダクトで持つべきデータは、大きく以下の6層に分かれる。

---

### ① user
ユーザーそのもの

---

### ② profile_context
ユーザーの判断前提 / 診断結果

---

### ③ property
物件そのもの

---

### ④ analysis
物件に対する分析結果

---

### ⑤ decision
その物件に対して、ユーザーがどう判断したか

---

### ⑥ state
今どの意思決定フェーズにいるか

---

この中で最重要なのは

👉 **decision**

である。

ただし、OSとして効かせるためには

👉 **profile_context と state**

も重要になる。

---

## ① user

### 役割
ユーザー識別の土台

---

### MVPで持つもの

- id（内部ID）
- line_id（LINE user_id）
- created_at
- updated_at

---

### 補足

- `id` を本体の主キーとする
- `line_id` は外部識別子として扱う
- 非LINE利用時は temporary_id / session_id を一時的に使う

---

### 将来拡張

- household_id / workspace_id
- name（任意）
- 購入状況
- 家族構成
- 居住エリア
- 購入予定時期

---

## ② profile_context

### 役割
ユーザーの判断前提を保持する

---

### MVPで持つもの

- id
- user_id
- user_type
- decision_bias
- purchase_motivation_summary
- required_conditions
- preferred_conditions
- priority_order
- safe_budget
- max_budget
- loan_position
- buy_vs_rent_state
- cost_gap
- break_even
- updated_at

---

### 補足

profile_context は、

👉 **「このユーザーはどういう前提で判断する人か」**

を保持する。

---

ここには、

- type_diagnosis の結果
- purchase_motivation の結果
- rent_vs_buy の主要結果
- loan_safety の主要結果

を統合して持つ。

---

### 意味

property_reader や CTA最適化は、  
この profile_context があることで

👉 一般出力  
から  
👉 あなた仕様の出力  
へ進化できる。

---

### 将来拡張

- household_context
- preferred_area
- family_constraints
- school_constraints
- pet_constraints
- renovation_intent
- purchase_deadline

---

## ③ property

### 役割
物件そのものの共通情報

---

### MVPで持つもの

- id
- price
- area
- age
- repair_fee
- management_fee
- station_distance
- units
- location
- raw_input_reference（元画像やPDF参照情報）

---

### 補足

- property は「物件そのもの」
- ここにはユーザー依存の評価を入れない
- 同じ物件を別ユーザーが見ても同一propertyで扱えるのが理想

---

### 将来拡張

- layout
- floor
- direction
- structure
- parking
- pet
- school_area
- URL
- document_set_id

---

## ④ analysis

### 役割
物件に対する分析結果の記録

---

### MVPで持つもの

- id
- property_id
- score
- layer_scores
- risks
- rule_flags
- ai_comments
- created_at

---

### 補足

analysis は、

👉 **「この物件を、どう見たか」**

を記録する。

- property = 物件そのもの
- analysis = その時点での分析結果

という分離が重要である。

---

### 将来拡張

- input_quality
- version（ロジックのバージョン）
- compared_context
- missing_fields
- external_data_snapshot
- personalized_comments

---

## ⑤ decision（最重要）

### 役割
ユーザーがその物件をどう扱ったか

---

### MVPで持つもの

- id
- user_id
- property_id
- analysis_id
- status
- created_at
- updated_at

---

### status（MVP）

- 検討中
- 保留
- 見送り

---

### 補足

decision は、

👉 **「物件保存」ではなく「判断保存」**

を実現する中心である。

これによって、

- 何を残しているか
- 何を迷っているか
- 何を外したか

が見えるようになる。

---

### 将来拡張

- reason_code（選択式理由）
- score_snapshot
- notes
- compared_flag
- workspace_id
- family_comment
- agent_shared_flag
- required_condition_match
- safe_budget_fit

---

## ⑥ state

### 役割
ユーザーが今どの意思決定フェーズにいるかを保持する

---

### MVPで持つもの

- user_id
- current_state
- state_updated_at

---

### current_state（MVP）

- STATE1：初期
- STATE2：検討初期
- STATE3：物件検討中
- STATE4：資金不安
- STATE5：迷走
- STATE6：比較フェーズ

---

### 補足

state は、

👉 **「今この人に次に何を出すべきか」**

を決めるための基盤である。

---

これは単なる属性ではなく、

- 行動ログ
- 保存状況
- 診断実施状況
- 比較状況

から都度更新される状態情報として扱う。

---

## なぜ decision が必要なのか

ここが最重要である。

もし設計を

- user
- property

だけで作ると、

👉 **「保存している」ことしか分からない**

---

しかし本当に欲しいのは、

- 比較候補なのか
- 保留なのか
- 一度外したのか
- どういう文脈で見ているのか

である。

つまり、

👉 **「物件」ではなく「判断の状態」**

を持たないと、OSにはならない。

---

## user_id の考え方

### MVPの方針

- 内部IDを主キーとする
- LINE user_id を紐付ける
- 非LINE時は一時IDを使う

---

### 理由

もしLINE user_idだけを主キーにすると、将来的に

- household
- 複数人共有
- 第三者共有
- LINE以外の認証

に広げづらくなる。

したがって、

👉 **内部IDを本体にし、LINEは接続キーにする**

のが望ましい。

---

## 非LINEユーザーの扱い

### 原則

👉 **LINE登録なしでも使える**

---

### できること

- 単発診断
- 結果確認
- 注意点確認

---

### できないこと

- 保存
- 比較
- 履歴蓄積
- 継続的なパーソナライズ
- state精度向上

---

### 技術的扱い

- temporary_id / session_id で一時管理
- 永続化はしない、または限定的に行う

---

## LINEユーザーの扱い

### 解放される価値

- 保存
- 比較
- 履歴
- プロダクト横断連携
- パーソナライズ
- state精度向上
- CTA最適化

---

### 意味

👉 **単発ツール → 判断OS**

に変わる。

---

## 各プロダクトから取得するデータ

---

### type_diagnosis

#### 取得するもの
- user_type
- decision_bias

#### 使い道
- 判断ミス補正
- あなたの場合表示
- 比較時の補正

---

### purchase_motivation

#### 取得するもの
- purchase_motivation_summary
- required_conditions
- preferred_conditions
- priority_order

#### 使い道
- 判断軸補正
- property_readerでの適合判定
- decision理由の文脈化

---

### rent_vs_buy

#### 取得するもの
- buy_vs_rent_state
- cost_gap
- break_even

#### 使い道
- 前提補正
- property_readerでの「今買う意味」整理

---

### loan_safety

#### 取得するもの
- safe_budget
- max_budget
- loan_position

#### 使い道
- 安全ライン補正
- 比較時の現実性評価

---

### property_reader

#### 取得するもの
- property
- analysis
- decision

#### 使い道
- 実務判断
- 保存
- 比較

---

### LINE

#### 取得するもの
- line_id
- 再訪情報
- 接続元
- 導線元

#### 使い道
- ユーザー識別
- 継続利用
- 統合
- パーソナライズ

---

## データの流れ

### 基本フロー

1. ユーザーがプロダクトを使う
2. 診断結果 or 物件結果が生成される
3. 必要に応じて analysis が生成される
4. LINE連携後、user に紐づく
5. profile_context が更新される
6. property_reader利用時は decision として保存される
7. state が更新される
8. 比較や再利用、CTA最適化に使われる

---

### property_reader の場合

1. 画像 / PDF入力
2. property抽出
3. analysis生成
4. userが status を付与
5. decision保存
6. history / comparison に反映
7. state更新

---

## どう事業全体で活用できるか

ここが重要である。

---

### ① UX改善

- どこで離脱するか
- 何を残しやすいか
- どの状態で迷うか

を見られる。

---

### ② パーソナライズ

- タイプに応じた見せ方
- 保存物件に応じた比較補正
- 安全ラインとの接続
- 判断軸との整合補正

が可能になる。

---

### ③ 比較OS化

decision があることで、

- 検討中だけ並べる
- 保留だけ見直す
- 見送り理由を蓄積する

といったOS的な挙動が可能になる。

---

### ④ CTA最適化

state があることで、

- 今は purchase_motivation を出すべきか
- 今は loan_safety を出すべきか
- 今は property_reader を出すべきか

を判断できる。

---

### ⑤ BtoB拡張の布石

将来的に不動産会社へ共有する場合も、

物件情報だけではなく

👉 **「この人はどう判断しているか」**

が資産になる。

---

### ⑥ ユーザー理解の蓄積

長期的には、

- どのタイプが何で迷うか
- どの価格帯で離脱するか
- どの物件が残されやすいか

を集計できる。

これは事業資産になる。

---

## household / workspace（将来拡張）

### 概要

住宅購入は本質的に複数人の意思決定である。

そのため将来的には、

👉 **1ユーザー単位ではなく、共有判断単位**

が必要になる。

---

### 構造イメージ

workspace
- id
- created_at

workspace_members
- workspace_id
- user_id
- role

decision
- workspace_id を持てるようにする

---

### できること

- 夫婦で同じ物件を見る
- 家族で比較する
- 将来的に第三者共有する

---

### MVPではやらないが、布石として重要

現時点では実装しない。

ただし、

👉 **将来workspace_idを持てる設計にしておく**

ことで拡張が容易になる。

---

## MVPでやること

- user（内部ID + LINE紐付け）
- profile_context
- property
- analysis
- decision
- state
- status（検討中 / 保留 / 見送り）

---

## MVPでやらないこと

- 自動レコメンド
- 理由の詳細保存
- 家族共有
- 複雑な権限管理
- 高度な行動分析

---

## 設計上の最重要ポイント

user_data_strategy で最も重要なのは、

👉 **「物件を保存すること」ではない**

---

👉 **「判断を保存すること」**

---

これにより、家買う予備校は

- 診断ツール群
- 便利な比較ツール

で終わらず、

👉 **「意思決定の履歴を持つOS」**

になる。

---

## 最終定義

user_data_strategy とは、

👉 **ユーザーの判断を構造化し、蓄積し、次の判断に活かすための設計**

である。

---

## 一言でいうと

👉 **「物件の記録」ではなく「意思決定の記録」を持つ設計**
