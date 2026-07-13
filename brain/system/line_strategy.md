# brain/system/line_strategy.md
Updated: 2026-06-29
Status: Active

=============================

■ 概要

=============================

Purpose

本書は、

Constitutionで定義された
decision continuity思想を、

LINEを通じたSystem設計へ適用するための設計書である。

LINEとは何かは、

Constitutionが扱う。

本書は、

LINEを

decision continuityを時間軸で維持する接続レイヤーとして

どのように設計し、

どのようにSystemへ接続するか

を定義する。

⸻

Scope

本書が扱うもの

* LINEの役割
* decision continuity
* 保存対象
* 再訪構造
* System接続
* 永続化方針

本書が扱わないもの

* LINEマーケティング思想
* 配信戦略
* UI仕様
* Module実装

これらはConstitutionおよび各Module設計を参照する。

⸻

Relationship

Constitution
↓
line_strategy
↓
decision_OS
↓
Implementation

⸻

Design Principle

LINEは、

「集客チャネル」

ではなく、

historyと接続し、
decision continuityを時間軸で維持する
永続化レイヤーとして扱う。

decisionはWebで形成し、

LINEはその判断を継続可能にする。

LINEは、

recommendation、

CV最適化、

通知主体ではなく、

decision continuityを支える構造として設計する。

---

## 基本思想

---

### ① LINEは「リスト」ではない

一般的なLINE運用：

👉 リスト収集（マーケ資産）

---

家買う予備校：

👉 判断OSの中核インフラ

---

役割は

- decision continuity上のdecision保持
- 判断文脈の蓄積
- ユーザー本人によるdecision更新の継続支援
- 判断文脈の再接続
- プロダクト横断接続

---

👉 **「記憶装置」ではなく「意思決定の基盤」**

---

### ② WebとLINEは役割を分ける

---

#### Web（フロント）

- 診断
- 分析
- UI
- 一時的な意思決定

---

#### LINE（バックボーン）

- decision continuity上のdecision保持
- ユーザー識別
- STATE判定に必要な判断文脈の接続
- 再訪時の判断再開
- プロダクト接続

---

👉 **意思決定はWebで行い、LINEに蓄積する**

---

### ③ LINE登録は「強制しない」

---

❌ 最初から登録必須  
❌ 入力前に登録要求  

---

👉 NG

---

👉 **decisionが発生した後に自然に接続する**

---

👉 **有料機能・継続利用はLINE前提とするが、初回体験はLINE不要とする**

---

---

### ④ 課金とLINEを紐づける

---

👉 有料体験はLINE前提

---

理由：

- decisionの保存
- 履歴の再利用
- 比較機能
- 継続判断

---

👉 **課金＝意思決定の継続**

---

---

### ⑤ LINEは統合基盤である

---

LINEの本質は：

👉 **decisionを横断して接続すること**

---

接続対象：

- type_diagnosis（自己理解decision）
- purchase_motivation（意思形成decision）
- loan_safety（現実判断decision）
- property_reader（実務判断decision）

---

👉 単発体験を  
👉 **連続的な意思決定OSへ変換する**

---

---

### ⑥ 診断を進めるほど精度が上がる

---

家買う予備校は：

❌ 全部やらせる構造ではない  

---

⭕ 繋ぐほど精度が上がる構造  

---

特に property_reader は：

- タイプ補正
- 判断軸補正
- 予算補正

---

👉 **LINE接続により“あなた仕様の判断”になる**

---

---

### ⑦ 導線の基本方針

---

❌ 全部やってから使う  

---

⭕ どこからでも使える  
👉 ただし繋ぐほど強くなる  

---

---

## LINEの役割（機能別）

---

### ■ ① ユーザー識別

---

- System上の主キーは内部IDとする
- LINE user_id は内部IDへ接続する外部紐付けIDとして扱う
- WebとLINEを内部IDを介して紐づける

---

👉 ログイン不要UX

---

---

### ■ ② decisionの保存（最重要）

---

保存対象：

👉 **decision（意思決定）**

---

・何を残したか  
・何を保留にしたか  
・何を見送ったか  

---

👉 **history.mdと完全連動**

---

👉 保存単位：

decision_log

---

👉 保存タイミング：

👉 **decisionが発生した瞬間**

---

（例）
・物件を残す  
・比較で選ぶ  
・条件を決める  

---

---

### ■ ③ STATE判定精度の向上

---

LINE接続後は：

- decision履歴
- 比較履歴
- プロダクト利用履歴

---

👉 STATEそのものを変えるのではなく、判定精度を上げる  

---

👉 **次の意思決定フェーズを正しく特定できるようになる**

---

---

### ■ ④ 再訪導線

---

- decision履歴の再表示
- 比較再開
- 次の意思決定提示

---

👉 **思考の再開をサポート**

---

---

### ■ ⑤ パーソナライズ

---

- タイプ
- 判断軸
- 予算
- decision履歴

---

👉 判断文脈に応じて出力を整理する

---

---

### ■ ⑥ データ統合（OS中核）

---

LINEは：

👉 **すべてのdecisionを統合する**

---

これにより：

- 判断の一貫性
- 比較の精度
- decision速度

が向上する

---

---

### ■ ⑦ decision continuity上のCTA提示

---

LINE接続後：

👉 state_detection（STATE判定）とdecision履歴を元に  
👉 decision continuity上で必要なCTAを1つだけ提示できるようになる  

---

👉 「今この人が整理すべきdecision」を提示できる  

---

---

## 非LINEユーザーの扱い

---

### ■ 原則

👉 LINEなしでも使える

---

### ■ できること

- 単発判断
- 気づき

---

### ■ できないこと

- decision continuity上のdecision保持
- 比較
- 継続判断

---

👉 **一時的な意思決定に限定**

---

---

## LINE接続の位置づけ

---

LINEは：

👉 入口ではない  

---

👉 **意思決定を継続するための接続点**

---

---

## LINE登録のタイミング

---

### ■ ベストタイミング

---

① decision直後  
👉 「この判断を残したい」

---

② 比較したいとき  
👉 「複数decisionを扱いたい」

---

③ 有料に進むとき  
👉 「判断を続けたい」

---

---

### ■ コピー例

---

👉 「この判断を保存する」  
👉 「あとで見返す」  
👉 「比較できるようにする」

---

👉 **decisionベースに統一**

---

---

## LINE内でやること / やらないこと

---

### ■ やること

- decision一覧
- 比較導線
- 再開導線
- STATE表示

---

### ■ やらないこと

- 分析UI
- 長文
- 複雑操作

---

👉 LINEは軽く、Webが本体

---

---

## マイページ構造

---

LINEは：

👉 decisionOSの入口

---

実体はWeb：

- decision履歴
- 比較
- 状態

---

👉 LIFFで連携

---

---

## データ構造（概念）

---

user  
- id（内部ID）
- line_id（LINE user_id / 外部紐付けID）

---

decision_log  
- decision_id  
- property_id  
- decision_type  
- decision_result  

---

👉 **history.mdと一致**

---

---

## 将来拡張

---

・household（共有decision）  
・チーム判断  
・BtoB連携  

---

---

## 最重要ポイント

---

LINEは

❌ 配信ツール  
❌ 保存ツール  

---

👉 **意思決定を継続させる基盤**

---

⸻

Related Documents

Constitution

* constitution_experience.md

System

* decision_framework.md
* decision_os_role.md
* product_connection_design.md
* user_data_strategy.md
* history.md

⸻

Change Policy

line_strategyは、

Systemレイヤーの設計書である。

LINE思想は変更しない。

Constitutionとの整合性を維持した上で、

decision continuityに関する
System設計のみ改善対象とする。

---

## 最終定義

line_strategyとは、

👉 decision continuityを時間軸で維持するために、
decisionを保存・接続・再開可能にする  
👉 家買う予備校のLINE側永続化レイヤーである
