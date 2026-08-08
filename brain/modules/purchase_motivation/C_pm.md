# C｜Foundation Pack

## Purpose

purchase_motivationがPJを推測せず理解し、PJ内SoTを根拠として判断できる状態を形成する。

Foundation PackはAIの動作仕様ではなく、判断に必要な知識基盤と読み込み順を提供する。

---

## Common

### Foundation Pack運用

以下の運用でFoundation Packを進める。

- Foundation Packで指定された.mdは、1ファイルずつ共有する。
- 各.md読了後、簡潔な理解メモと次に読み込む.md名を返却する。
- 理解メモは記憶定着と現在理解の確認のみを目的とする。
- こちらからフィードバック・補正・評価は行わない。
- Foundation Pack全体完了後に、Stage（1〜6）単位の理解確認を実施する。
- Learning Stage中は、Foundation Packで定義された学習順序を唯一の学習順序として扱う。
- 読了した.mdから関連文書や疑問点が見つかった場合でも、Learning Stage完了まではFoundation Packの順序を優先する。
- 推測は禁止する。
- 不明点は保持せず、その時点で停止する。

---

## Module

### Module Name

purchase_motivation

purchase_motivation（購入動機診断）

### Target Module

purchase_motivation

### Module SoT

- `brain/system/product_roles.md`
- `brain/system/product_connection_design.md`
- `projects/iekau/products/purchase_motivation/README.md`
- `projects/iekau/products/purchase_motivation/product_concept.md`
- `projects/iekau/products/purchase_motivation/question_design.md`
- `projects/iekau/products/purchase_motivation/diagnosis_logic.md`
- `projects/iekau/products/purchase_motivation/output_logic.md`
- `projects/iekau/products/purchase_motivation/result_screen.md`
- `projects/iekau/products/purchase_motivation/ui_flow.md`
- `projects/iekau/products/purchase_motivation/discomfort_connection.md`
- `projects/iekau/products/purchase_motivation/property_reader_connection.md`

### Module Repository

- `projects/iekau/products/purchase_motivation/`

### Module Current State

- Foundation Packの現在Stage
- 読了済み.md
- 次に読み込む.md
- 不明点
- 停止条件

---

## Knowledge

### Stage1｜PJ構造理解

読み込み対象：

1. brain/system/README
2. md_loading_map.md
3. md_structure_tree.md

到達状態：

- PJ全体構造を説明できる
- 必要文書を探せる
- Constitution / System / Module / Implementationの階層を説明できる

### Stage2｜PJ思想理解

Constitution：

- brain/constitution/Constitution.md
- brain/constitution/constitution_judgement.md
- brain/constitution/constitution_transfer.md
- brain/constitution/constitution_channel.md

Core：

- brain/core/persona.md
- brain/core/output_format.md
- 必要に応じて principles.md / task_contract.md

到達状態：

- PJ思想を説明できる
- 判断主体を説明できる
- 判断代行・誘導・固定の禁止を説明できる

### Stage3｜System Core

Decision：

- decision_framework.md
- history.md

STATE：

- state_definition.md
- state_detection.md

CTA：

- cta_role.md
- 必要に応じて cta_strategy.md

Decision OS：

- decision_os_role.md

Comparison：

- comparison_role.md

Product責務：

- product_roles.md
- product_connection_design.md

purchase_motivation固有Learning対象：

- `brain/system/product_roles.md`
- `brain/system/product_connection_design.md`
- `projects/iekau/products/purchase_motivation/README.md`
- `projects/iekau/products/purchase_motivation/product_concept.md`
- `projects/iekau/products/purchase_motivation/question_design.md`
- `projects/iekau/products/purchase_motivation/diagnosis_logic.md`
- `projects/iekau/products/purchase_motivation/output_logic.md`
- `projects/iekau/products/purchase_motivation/result_screen.md`
- `projects/iekau/products/purchase_motivation/ui_flow.md`
- `projects/iekau/products/purchase_motivation/discomfort_connection.md`
- `projects/iekau/products/purchase_motivation/property_reader_connection.md`

到達状態：

- System思想を説明できる
- decision主体を説明できる
- STATE / CTA / comparison / historyの責務境界を説明できる
- Product責務を説明できる
- purchase_motivationは「購入動機を構造化し、判断軸を明確にするプロダクト」であると説明できる
- purchase_motivationは「物件を選ぶ」ためではなく、「選び方を決める」ためのプロダクトであると説明できる
- purchase_motivationは購入動機を必要条件・十分条件・優先順位に変換すると説明できる
- purchase_motivationは診断結果を判断軸として言語化し、行動に変えると説明できる
- purchase_motivationは「decision loopの現在地表示」として扱うと説明できる
- purchase_motivationは「現時点decision整理」として扱うと説明できる
- purchase_motivationは「decision整理入口」として扱うと説明できる
- LINE接続後は「変化していくdecision」として扱うと説明できる
- LINE登録により、単発診断が「decision OS」に変わると説明できる
- 判断軸は更新対象として扱うと説明できる
- purchase_motivationは住宅購入における「購入動機（論理）」を定義すると説明できる
- type_diagnosisは意欲の特性を可視化すると説明できる
- loan_safetyは資力を現実化すると説明できる
- property_readerは物件が判断軸に合っているかを検証すると説明できる
- discomfort_engineは判断軸と現実のズレを検知すると説明できる
- purchase_motivationは「何を基準にdecisionすべきか」を整理すると説明できる
- purchase_motivationは条件を大量に増やすことではなく、「何を固定核として守り、どこを調整可能にするか」を理解すると説明できる
- purchase_motivationは「decision更新基準」として存在すると説明できる
- 購入動機は、トリガー、必要条件、十分条件の3層で扱うと説明できる
- トリガーは入口であり、判断軸そのものではないと説明できる
- 必要条件は、これを外したら買わない条件であると説明できる
- 十分条件は、できれば満たしたい条件であると説明できる
- 最重要ルールは「必要条件を崩さない」であると説明できる
- question_designは、最小の質問数で最大限の動機構造を取得すると説明できる
- question_designは、条件を大量取得することではなく「何を崩すと後悔しやすいか」を整理すると説明できる
- question_designは、固定核と可変条件を分けると説明できる
- question_designは、必要条件を自分で選ばせると説明できる
- diagnosis_logicは、購入動機を構造化し、必要条件・十分条件・判断軸の優先順位を生成すると説明できる
- diagnosis_logicは、正解を決めることではなく、ユーザーが後悔しにくい判断軸を持つことを目的とすると説明できる
- diagnosis_logicの入力は、トリガー入力、現在不満入力、必須条件入力、理想条件入力、感情入力、回避条件入力であると説明できる
- diagnosis_logicの出力は、購入動機、固定核、可変条件、必要条件、十分条件、判断軸の優先順位であると説明できる
- output_logicは、ユーザーの回答を判断軸として言語化し、decisionを前へ進め、現実接触へ繋げると説明できる
- output_logicは、診断結果を見せて終わるものではないと説明できる
- output_logicは「decision loopの現在地表示」として扱うと説明できる
- output_logicは「固定核」と「比較で変わる条件」を分離して扱うと説明できる
- output_logicは、comparison、property_reader、loan_safety、家族相談、内見をdecision更新イベントとして接続すると説明できる
- result_screenは、現在のdecision更新状態を可視化し、fixed_coreを再認識させ、driftを防ぎながら、LINE接続によって判断OSへ進化させると説明できる
- result_screenは、診断結果画面、性格診断結果、条件一覧、完成済みの答え、recommendation画面ではないと説明できる
- result_screenは「現在どこでdecisionが止まりやすいか」を可視化すると説明できる
- fixed_coreはdecision OSの土台であると説明できる
- LINE後に解放するのは情報量ではなく、decision更新補助であると説明できる
- ui_flowは、購入動機を無理なく引き出し、判断軸を一瞬で理解できる形に変換し、次の実務プロダクトへ自然に接続すると説明できる
- ui_flowは希望条件登録、物件検索フォーム、ただのアンケートではないと説明できる
- ui_flowは「自分は何を優先して選ぶ人か」を知る体験であると説明できる
- ui_flowは、LINE登録前でも診断開始、結果閲覧、判断軸の把握を可能にすると説明できる
- LINEは結果を見たあとに、保存したい・つなげたいと思ったタイミングで出すと説明できる
- discomfort_connectionは、purchase_motivationとdiscomfort_engineの接続設計であると説明できる
- discomfortは、ユーザーを止めるため、不安を煽るため、間違い探し、future恐怖訴求装置ではないと説明できる
- discomfortは「本来大事だったものが埋もれ始めていないか」を整理する補助装置であると説明できる
- discomfortはdecision continuityを維持するための軽いreturn signalであると説明できる
- discomfort_engineはdecision drift整理エンジンであると説明できる
- purchase_motivationはfixed_coreと判断軸の定義を行うと説明できる
- discomfort_engineはfixed_coreやdecision progressionが埋もれ始めていないかを監視すると説明できる
- property_reader_connectionは、purchase_motivationとproperty_readerの接続設計であると説明できる
- property_reader_connectionは、判断軸と物件理解を接続し、「自分にとってどういうdecisionになりそうか」を整理すると説明できる
- purchase_motivationからproperty_readerへ、必要条件、十分条件、優先順位、回避条件、動機要約、固定核候補、揺れやすい条件、現時点decisionを渡すと説明できる
- purchase_motivationはフィルターではなくdecision文脈として機能すると説明できる
- product_roles上、各Productはrecommendation、正解提示、AI最適化、決断代行を行わないと説明できる
- product_roles上、各Productはdecision loopへ接続されることを前提とすると説明できる
- product_roles上、purchase_motivationはfixed_core整理moduleであると説明できる
- product_roles上、purchase_motivationはdecisionの固定核形成を扱うと説明できる
- product_roles上、purchase_motivationはdecision drift修正に影響すると説明できる
- product_connection_design上、purchase_motivationは補助decision更新レイヤーとして存在すると説明できる
- product_connection_design上、接続目的は次のdecision更新精度を上げることであると説明できる
- product_connection_design上、固定核driftはpurchase_motivationへ接続すると説明できる

### Stage4｜Operation Core

読み込み対象：

- brain/operations/operation_constitution.md
- brain/operations/README.md
- brain/operations/ai_development_lifecycle_standard.md
- brain/operations/ai_role_architecture.md
- brain/operations/ai_loading_map.md
- brain/operations/role_input_contract.md

必要時：

- builder_operation.md
- design_validation.md
- review_operation.md
- implementation_operation.md
- observation_operation.md
- record_operation.md

到達状態：

- AI設計プロトコルを説明できる
- Stage / Role / Ownerを区別できる
- Request ContractとTransfer Informationを説明できる
- Design Validation / Review / Implementation Validationの確認対象を区別できる

### Stage5｜判断品質向上

読み込み対象：

- decision_update_triggers.md
- decision_loop_core_summary.md
- fixed_core_definition.md
- drift_detection.md
- state_to_cta_connection.md
- state_to_action_routing.md

到達状態：

- 思想を横断接続できる
- 判断材料を整理できる
- decision主体と支援構造を混同しない
- CTA・STATE・continuityの責務境界を維持できる

### Stage6｜Reference

通常起動の必須条件ではない。

案件発生時のみ必要なReferenceを追加で読む。

例：

- monetization.md
- future_expansion.md
- security_policy.md
- release_checklist.md
- kpi_metrics.md
- external_property_search.md

---

## Loading Protocol

### 読み込み順

Foundation Packは以下の順に読み込む。

1. Stage1｜PJ構造理解
2. Stage2｜PJ思想理解
3. Stage3｜System Core
4. Stage4｜Operation Core
5. Stage5｜判断品質向上
6. Stage6｜Reference

### 読み込み単位

- 1ファイルずつ読み込む
- 各.md読了後に理解メモを返却する
- 各.md読了後に次に読み込む.md名を返却する
- Stage（1〜6）単位で理解確認を行う
- Learning Stage完了前に、読了した.md内の参照を根拠として関連文書へ分岐しない

---

## Boundary

### Knowledge Boundary

Foundation Packは、判断に必要な知識基盤と読み込み順を提供する。

Foundation Packは、AIの動作仕様ではない。

purchase_motivationは、以下を理解対象として扱う。

- purchase_motivationのPurpose
- purchase_motivationのRole
- purchase_motivationの質問設計
- purchase_motivationの診断ロジック
- purchase_motivationの出力構造
- purchase_motivationのUI Flow
- purchase_motivationの結果画面
- fixed_core
- 必要条件
- 十分条件
- 優先順位
- 可変条件
- 回避条件
- 動機要約
- discomfort_connection
- property_reader_connection
- type_diagnosisとの関係
- property_readerとの接続
- loan_safetyとの接続
- LINEとの接続
- decision_OSからpurchase_motivationへの接続
- decision drift
- decision continuity
- decision loop
- decision更新基準

### Authority Boundary

Foundation Packは、PJ内SoTを根拠として判断できる状態を形成するために扱う。

Foundation Packは、PJ思想、System思想、Operation、Product、Module、Implementationを変更しない。

不明点がある場合は推測せず停止する。

purchase_motivationが扱える範囲は以下とする。

- 購入動機を構造化する
- 判断軸を明確にする
- fixed_coreを整理する
- 必要条件 / 十分条件を整理する
- 優先順位を整理する
- 判断軸と現実接触を接続する
- 判断軸と物件理解を接続する
- 判断軸と現実条件を接続する
- 何を優先して選ぶかを定義する

purchase_motivationは以下を行わない。

- 正解物件を提示しない
- 正しいエリアを決めない
- 条件を大量に並べることを目的にしない
- おすすめ物件を出さない
- 正解を決めない
- 固定核を軽く扱わない
- AIが正解を決める構造を扱わない
- CTA複数を扱わない
- LINE登録そのものをメインCTAにしない
- 最初からLINE必須にしない
- 自由入力を多くしない

---

## Connected Modules

Connected Modules章は、Foundation Packが接続する学習対象を保持するCommon章として扱う。

Module固有接続情報は、Learning Stage内で保持する。

### Constitution

- Purpose：PJ思想理解
- Responsibility：判断主体、判断代行・誘導・固定禁止の理解
- Boundary：Constitution変更は扱わない
- Input：Constitution文書
- Output：PJ思想理解
- Transfer：System理解へ接続
- Stop Condition：思想理解に必要なSoT不足

### System

- Purpose：System思想理解
- Responsibility：decision / STATE / CTA / comparison / history / Product責務の理解
- Boundary：System変更は扱わない
- Input：System Core文書
- Output：System責務境界理解
- Transfer：Operation理解へ接続
- Stop Condition：System理解に必要なSoT不足

### Operation

- Purpose：AI設計プロトコル理解
- Responsibility：Stage / Role / Owner、Request Contract、Transfer Informationの理解
- Boundary：Operation変更は扱わない
- Input：Operation Core文書
- Output：Operation理解
- Transfer：判断品質向上文書へ接続
- Stop Condition：Operation理解に必要なSoT不足

### Reference

- Purpose：案件発生時の追加参照
- Responsibility：案件に必要なReferenceを追加で読む
- Boundary：通常起動の必須条件ではない
- Input：案件ごとのReference
- Output：案件文脈への接続
- Transfer：現在案件へ接続
- Stop Condition：案件に必要なReference不足

---

## Foundation Pack完了条件

- C｜Foundation Pack構造を維持する
- Module Nameが保持されている
- Target Moduleが保持されている
- Module SoTが保持されている
- Module Repositoryが保持されている
- Module Current Stateが保持されている
- Learning Stageが保持されている
- Learning対象.mdが保持されている
- Knowledge Boundaryが保持されている
- Authority Boundaryが保持されている
- Loading Protocolが保持されている
- Completion Criteriaが保持されている
- 共通テンプレートを変更していない
- Module固有設定のみ差し替えている
- 共通責務へModule固有思想を混在させていない
- Module固有内容を他Moduleへ持ち込んでいない
- Foundation形成で実装・改善を行っていない
