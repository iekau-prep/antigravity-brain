# pairing_logic.md
Updated: 2026-04-05
Status: Active

---

## ■ 概要

本モジュールは、

👉 2人の意思決定タイプから「関係性（ズレ）」を判定するロジック

を定義する。

---

## ■ 目的

・64通りの組み合わせを個別定義しない  
・一貫したUXを提供する  
・行動に繋がる出力を生成する  
・2人の会話を次の判断行動に変換する  

---

## ■ 基本思想

タイプ = 個人のクセ  
ズレ = 関係性の問題  

👉 本ロジックでは  
「タイプ」ではなく「差分（ズレ）」を評価する  

---

## ■ このロジックの役割（重要）

pairing_logic は、

❌ 2人の相性診断をするためのものではない  
❌ 面白い比較結果を出して終わるものではない  

---

👉 「なぜ話が噛み合わないのか」を構造で理解し  
👉 「次にどう進めるか」を決めるためのロジックである

---

つまり、

- 感情的な対立を減らす
- 会話の論点を整理する
- 次の一手を明確にする

ために存在する。

---

## ■ 入力

各ユーザーのタイプは以下の3軸で構成される：

① 判断軸  
・emotional（感情型）  
・logical（論理型）  

② 決断スピード  
・fast（速断型）  
・slow（慎重型）  

③ 判断基準  
・self（自分軸）  
・external（他人軸）  

---

## ■ 出力

👉 ズレパターン（7分類）

---

=============================

## ■ 判定ロジック

=============================

### ■ ステップ1：差分を取得

speed_diff = (userA.speed != userB.speed)  
axis_diff = (userA.axis != userB.axis)  
base_diff = (userA.base != userB.base)  

---

### ■ ステップ2：ズレ数カウント

diff_count = int(speed_diff) + int(axis_diff) + int(base_diff)

---

### ■ ステップ3：パターン分類

#### ① 全ズレタイプ

if diff_count == 3:  
return "full_mismatch"

---

#### ② スピードずれタイプ

if speed_diff and not axis_diff and not base_diff:  
return "speed_mismatch"

---

#### ③ 判断軸ずれタイプ

if axis_diff and not speed_diff and not base_diff:  
return "axis_mismatch"

---

#### ④ 基準ずれタイプ

if base_diff and not speed_diff and not axis_diff:  
return "base_mismatch"

---

#### ⑤ 同タイプ停滞型 / 危険コンビ

if diff_count == 0:  

    # 危険コンビ（速断 × 感情）
    if userA.speed == "fast" and userA.axis == "emotional":
        return "risky_pair"

    return "same_type"

---

#### ⑥ 上記以外はバランス型

return "balanced"

---

## ■ 補足

「balanced」は  
差分が1つだけでも、複数差分でも、  
上記の明確な単独ズレ / 全ズレ / 同タイプに当てはまらない場合の受け皿である。

---

👉 重要なのは分類精度の細分化ではなく、  
👉 ユーザーが理解しやすく、次に動けること

---

=============================

## ■ 出力フォーマット

=============================

各パターンは以下を持つ：

- title（ズレタイプ名）
- message（一言でわかる説明）
- description（短い補足）
- action（最初の一手）
- suggested_next_step（接続候補）

---

### speed_mismatch

title: スピードずれタイプ  
message: 今決めたい人と、まだ決めたくない人  
description: どちらも間違っていないが、進めるタイミングがズレやすい  
action: 「いつまでに決めるか」を先に決める  
suggested_next_step: purchase_motivation

---

### axis_mismatch

title: 判断軸ずれタイプ  
message: 感覚で決めたい人と、条件で決めたい人  
description: 見ている論点が違うので、話が噛み合いにくい  
action: 感情と条件、どちらを優先するか決める  
suggested_next_step: purchase_motivation

---

### base_mismatch

title: 基準ずれタイプ  
message: 自分で決めたい人と、周りを見たい人  
description: 判断の拠り所が違うため、納得の作り方がズレやすい  
action: 「自分たちの基準」を1つ決める  
suggested_next_step: purchase_motivation

---

### full_mismatch

title: 全ズレタイプ  
message: 考え方もスピードも基準も全部違う  
description: 会話が自然にまとまりにくいため、先に進め方のルールが必要  
action: 「どちらが最終判断するか」を決める  
suggested_next_step: purchase_motivation

---

### same_type

title: 同タイプ停滞型  
message: ちゃんと考えてる。でも進まない  
description: 似ているから対立は少ないが、決断のきっかけが生まれにくい  
action: 「どの条件で決めるか」を決める  
suggested_next_step: purchase_motivation

---

### risky_pair

title: 危険コンビ型  
message: ノリと勢いで決まりやすい  
description: 話は進みやすいが、確認不足のまま決まるリスクがある  
action: 最低限のチェック項目を3つ決める  
suggested_next_step: loan_safety

---

### balanced

title: バランス型  
message: 違いがあるからこそ補える関係  
description: ズレはあるが、役割分担できれば前に進みやすい  
action: 役割分担を決めて進める  
suggested_next_step: property_reader

---

=============================

## ■ CTA / 次プロダクト接続

=============================

pairing_logic の出力は、結果を見せて終わらせない。

---

ズレタイプごとに、次の行動先を自然に出し分ける。

### 基本方針

- 判断基準のズレが大きい  
→ purchase_motivation

- 現実面の不安が強い  
→ loan_safety

- すでに候補物件がある / 実務に進める  
→ property_reader

---

### 例

speed_mismatch  
→ 先に「期限」を決めるため purchase_motivation

axis_mismatch  
→ 何を優先するか整理するため purchase_motivation

risky_pair  
→ 勢い補正のため loan_safety

balanced  
→ 実際の物件で役割分担しながら判断するため property_reader

---

👉 pairing_logic は  
👉 「2人の関係性の理解」と「次の判断接続」をセットで扱う

---

=============================

## ■ UIでの見せ方との整合

=============================

pairing_logic は、ui_result_flow.md の2人比較画面と整合する前提で使う。

表示の優先順位は以下：

1. 2人のタイプ  
2. ズレタイプ  
3. 一言メッセージ  
4. 短い解説  
5. 最初の一手  
6. CTA（1つだけ）

---

👉 ロジックは裏側  
👉 ユーザーには「わかる言葉」で出す

---

=============================

## ■ LINEとの関係

=============================

LINE接続後は、

- 2人比較の結果保存
- 再訪時の再表示
- 後から purchase_motivation / loan_safety / property_reader へ接続
- 会話途中からの再開

が可能になる。

---

👉 2人比較も単発の盛り上がりではなく、  
👉 継続的な判断OSの一部として扱う

---

=============================

## ■ 拡張性

=============================

本ロジックは以下に拡張可能：

・3人以上の意思決定  
・親子関係  
・営業との相性  
・タイプ別アドバイス  
・夫婦 / 家族の役割分担設計  

👉 差分構造により拡張可能  

---

=============================

## ■ 注意点

=============================

・複雑な条件分岐を増やさない  
・必ず「ズレの説明」に戻る  
・ユーザーに理解できる言葉にする  
・相性診断に見せすぎない  
・対立を煽らない  

---

=============================

## ■ 最終定義

=============================

pairing_logicとは、

👉 2人の違いを「問題」ではなく「構造」として扱い  
👉 話が噛み合わない理由を可視化し  
👉 次の判断行動へ変換するためのロジック

である

---

=============================

## ■ 一言でいうと

=============================

👉 違いを責めるのではなく、前に進むために翻訳するロジック

---

## ■ END
