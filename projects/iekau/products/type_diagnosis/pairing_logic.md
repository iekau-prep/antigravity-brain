# pairing_logic.md
Updated: 2026-03-24
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

---

## ■ 基本思想

タイプ = 個人のクセ  
ズレ = 関係性の問題  

👉 本ロジックでは  
「タイプ」ではなく「差分（ズレ）」を評価する  

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
return “full_mismatch”

---

#### ② スピードずれタイプ

if speed_diff and not axis_diff and not base_diff:  
return “speed_mismatch”

---

#### ③ 判断軸ずれタイプ

if axis_diff and not speed_diff and not base_diff:  
return “axis_mismatch”

---

#### ④ 基準ずれタイプ

if base_diff and not speed_diff and not axis_diff:  
return “base_mismatch”

---

#### ⑤ 同タイプ停滞型 / 危険コンビ

if diff_count == 0:  

    # 危険コンビ（速断 × 感情）
    if userA.speed == "fast" and userA.axis == "emotional":
        return "risky_pair"

    return "same_type"

---

#### ⑥ 上記以外はバランス型

return “balanced”

---

=============================

## ■ 出力フォーマット

=============================

### speed_mismatch

title: スピードずれタイプ  
message: 今決めたい人と、まだ決めたくない人  
action: 「いつまでに決めるか」を先に決める  

---

### axis_mismatch

title: 判断軸ずれタイプ  
message: 感覚で決めたい人と、条件で決めたい人  
action: 感情と条件、どちらを優先するか決める  

---

### base_mismatch

title: 基準ずれタイプ  
message: 自分で決めたい人と、周りを見たい人  
action: 「自分たちの基準」を1つ決める  

---

### full_mismatch

title: 全ズレタイプ  
message: 考え方もスピードも基準も全部違う  
action: 「どちらが最終判断するか」を決める  

---

### same_type

title: 同タイプ停滞型  
message: ちゃんと考えてる。でも進まない  
action: 「どの条件で決めるか」を決める  

---

### risky_pair

title: 危険コンビ型  
message: ノリと勢いで決まりやすい  
action: 最低限のチェック項目を3つ決める  

---

### balanced

title: バランス型  
message: 違いがあるからこそ補える関係  
action: 役割分担を決めて進める  

---

=============================

## ■ 拡張性

=============================

本ロジックは以下に拡張可能：

・3人以上の意思決定  
・親子関係  
・営業との相性  
・タイプ別アドバイス  

👉 差分構造により拡張可能  

---

=============================

## ■ 注意点

=============================

・複雑な条件分岐を増やさない  
・必ず「ズレの説明」に戻る  
・ユーザーに理解できる言葉にする  

---

=============================

## ■ 一言でいうと

=============================

👉 違いを「問題」ではなく「構造」として扱うロジック  

---

## ■ END
