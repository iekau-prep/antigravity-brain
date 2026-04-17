# brain/system/user_data_strategy.md
Updated: 2026-04-18
Status: Core

=============================

■ 概要

=============================

本ドキュメントは、  
家買う予備校における

👉 ユーザーデータ設計（user_data_strategy）

を定義する。

本設計の目的は、

👉 「ユーザーの判断を蓄積し、再利用し、精度を上げること」

である。

家買う予備校は、

・type_diagnosis  
・purchase_motivation  
・rent_vs_buy  
・loan_safety  
・property_reader  
・decision_os  
・LINE  

を通じて、

👉 「住宅購入における意思決定OS」

を実現する。

---

=============================

■ 基本思想（最重要）

=============================

① 保存するのは「物件」ではなく「判断」

---

一般的なサービス：

・物件を保存  
・お気に入り管理  

---

家買う予備校：

👉 「どう判断したか」を保存する  

---

👉 user × property × decision で設計する  

---

② decisionが唯一の真実データである

---

👉 decision = source of truth  

---

・何を残したか  
・何を迷っているか  
・何を外したか  

---

👉 すべてdecisionから導く  

---

③ データは「次の判断」のために使う

---

❌ ログ保存のため  
❌ 分析のため  

---

⭕ 次の意思決定の精度を上げるため  

---

④ stateは保存しない

---

👉 stateは動的に算出する  

---

理由：

・decisionが事実  
・stateは解釈  

---

👉 保存すると不整合が起きる  

---

⑤ どこからでも使えるが、繋ぐほど精度が上がる

---

・単発利用OK  
・後からLINEで統合可能  
・後から診断を重ねられる  

---

👉 OSとして進化する設計にする  

---

⑥ LINEは統合基盤であり、主キーではない

---

・内部IDを主キー  
・LINEは紐付け先  

---

👉 将来拡張（家族・共有）に対応する  

---

=============================

■ データ構造（全体像）

=============================

① user  
② profile_context  
③ property  
④ analysis  
⑤ decision（最重要）  
⑥ state（非保存・動的算出）

---

=============================

■ ① user

=============================

役割：

👉 ユーザー識別

---

MVP：

・id（内部ID）  
・line_id  
・created_at  
・updated_at  

---

補足：

・idを主キー  
・line_idは外部キー  

---

将来：

・household_id  
・family構成  
・エリア  
・購入時期  

---

=============================

■ ② profile_context

=============================

役割：

👉 判断前提の統合

---

MVP：

・user_id  
・user_type  
・decision_bias  
・purchase_motivation_summary  
・required_conditions  
・preferred_conditions  
・priority_order  
・safe_budget  
・max_budget  
・loan_position  
・buy_vs_rent_state  
・cost_gap  
・break_even  
・updated_at  

---

意味：

👉 「この人はどう判断する人か」

---

使用：

・property_readerの適合判定  
・CTA最適化  
・出力の個別化  

---

=============================

■ ③ property

=============================

役割：

👉 物件そのもの

---

MVP：

・id  
・price  
・area  
・age  
・repair_fee  
・management_fee  
・station_distance  
・units  
・location  
・raw_input_reference  

---

補足：

・ユーザー依存情報は持たない  

---

=============================

■ ④ analysis

=============================

役割：

👉 物件の評価結果

---

MVP：

・id  
・property_id  
・score  
・layer_scores  
・risks  
・rule_flags  
・ai_comments  
・created_at  

---

意味：

👉 「この物件をどう見たか」

---

=============================

■ ⑤ decision（最重要）

=============================

役割：

👉 ユーザーの意思決定

---

MVP：

・id  
・user_id  
・property_id  
・analysis_id  
・status  
・created_at  
・updated_at  

---

status：

・検討中  
・保留  
・見送り  

---

本質：

👉 物件保存ではなく判断保存  

---

👉 decision_osはこれをUI化したもの  

---

将来：

・reason_code  
・notes  
・compared_flag  
・score_snapshot  

---

=============================

■ ⑥ state（保存しない）

=============================

役割：

👉 現在の意思決定フェーズを表す

---

方針：

👉 保存しない  

---

👉 decision・行動・診断から算出  

---

使用：

・CTA出し分け  
・UX制御  

---

算出要素：

・decision分布  
・比較状態  
・診断実施状況  
・直近行動  

---

👉 常に最新状態を表す  

---

=============================

■ データフロー

=============================

① externalで物件を見る  
② property_readerで分析  
③ decisionを行う  
④ decisionを保存  
⑤ decision_osで蓄積・整理  
⑥ state算出  
⑦ CTA生成  
⑧ 次の判断へ  

---

👉 これが意思決定ループ  

---

=============================

■ 非LINEユーザー

=============================

できる：

・単発利用  

---

できない：

・保存  
・比較  
・履歴  

---

👉 temporary_idで管理  

---

=============================

■ LINEユーザー

=============================

可能：

・保存  
・比較  
・履歴  
・パーソナライズ  
・再開  

---

👉 OS化する  

---

=============================

■ 各プロダクトの役割

=============================

type_diagnosis：

👉 判断のクセ  

---

purchase_motivation：

👉 判断軸  

---

rent_vs_buy：

👉 選択肢理解  

---

loan_safety：

👉 成立性  

---

property_reader：

👉 判断生成  

---

decision_os：

👉 判断管理・更新  

---

LINE：

👉 統合  

---

=============================

■ 活用価値

=============================

① UX最適化  
② パーソナライズ  
③ 比較OS化  
④ CTA最適化  
⑤ BtoB展開  
⑥ データ資産化  

---

=============================

■ MVP範囲

=============================

やる：

・user  
・profile_context  
・property  
・analysis  
・decision  

---

やらない：

・AI推薦  
・高度分析  
・共有機能  

---

=============================

■ 最重要ポイント

=============================

👉 保存するのは物件ではない  

---

👉 判断である  

---

👉 decisionがすべての起点  

---

=============================

■ 最終定義

=============================

user_data_strategyとは、

👉 ユーザーの意思決定を構造化し  
👉 decisionとして蓄積し  
👉 次の判断に活かすための設計  

---

■ 一言

👉 「物件ではなく、判断を蓄積する設計」
