# C｜Foundation Pack

## Purpose

rent_vs_buyがPJを推測せず理解し、PJ内SoTを根拠として判断できる状態を形成する。

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

rent_vs_buy

### Target Module

rent_vs_buy

### Module SoT

- `projects/iekau/products/rent_vs_buy/diagnosis_logic.md`
- `projects/iekau/products/rent_vs_buy/rabbit_types.md`
- `projects/iekau/products/rent_vs_buy/ui_result_flow.md`
- `projects/iekau/products/rent_vs_buy/state_labels.md`
- `projects/iekau/products/rent_vs_buy/character_templates.md`

### Module Repository

- `projects/iekau/products/rent_vs_buy/`

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

rent_vs_buy固有Learning対象：

- `projects/iekau/products/rent_vs_buy/diagnosis_logic.md`
- `projects/iekau/products/rent_vs_buy/rabbit_types.md`
- `projects/iekau/products/rent_vs_buy/ui_result_flow.md`
- `projects/iekau/products/rent_vs_buy/state_labels.md`
- `projects/iekau/products/rent_vs_buy/character_templates.md`

到達状態：

- System思想を説明できる
- decision主体を説明できる
- STATE / CTA / comparison / historyの責務境界を説明できる
- Product責務を説明できる
- rent_vs_buyは「賃貸 vs 購入」の勝敗を決めるプロダクトではないと説明できる
- rent_vs_buyは「未来の住居選択可能性」を時間軸込みで整理するプロダクトであると説明できる
- rent_vs_buyは「購入という選択肢」を現実感あるものとして再認識させる入口であると説明できる
- rent_vs_buyは「今どの前提で悩んでいるか」「将来どんな選択肢変化が起きるか」を整理すると説明できる
- rent_vs_buyは「今の家賃」が未来の住居選択可能性とどう接続するかを整理すると説明できる
- rent_vs_buyは「今買うべきか」を断定するプロダクトではないと説明できる
- rent_vs_buyは「未来の選択肢がどう変化するか」を整理するプロダクトであると説明できる
- rent_vs_buyはdecision OS全体において「購入という選択肢の前提理解」を担うと説明できる
- rent_vs_buyは意思形成STATEを主に担当すると説明できる
- rent_vs_buyは「買う決断」を生まないと説明できる
- rent_vs_buyは「購入という選択肢を、現実的に考えられる状態」を作ると説明できる
- rent_vs_buyが扱う核心は「損得比較」ではなく「未来の住居選択可能性」であると説明できる
- rent_vs_buyはSNS入口性、拡散性、自分ごと化が重要なプロダクトであると説明できる
- rent_vs_buyは不安煽りではなく「整理したくなる違和感」として扱うと説明できる
- LINE前は、気づき、違和感、未来想像、自分ごと化、シェア、会話発生、「え？」を作る入口として扱うと説明できる
- LINE後は、decision補助、fixed_core接続、loan_safety接続、property_reader接続、drift補正、比較、history、future simulation、personalized decision supportへ接続すると説明できる
- rabbit_typesは「未来の住居選択可能性」をどう認識しているかを、うさだの状態として可視化する設計であると説明できる
- rabbit_typesは性格診断、MBTI模倣、賃貸 vs 購入の勝敗分類、買うべき / 買わないべき判定ではないと説明できる
- rabbit_typesはfuture cognition character systemであると説明できる
- rent_vs_buyのうさだは「未来をどう見ているか」の状態表現であると説明できる
- type_diagnosisは「どう迷う人か」を扱い、rent_vs_buyのrabbit_typesは「未来をどう認識しているか」を扱うと説明できる
- rent_vs_buyでは、type_diagnosisと同じ分類にしないと説明できる
- rent_vs_buyでは「未来認識」と「住居選択可能性」をキャラ化すると説明できる
- ui_result_flowは、結果体験 / 前提整理 / 未来想像 / decision更新UXを定義すると説明できる
- ui_result_flowは「買うべきか診断」、賃貸否定ツール、購入誘導コンテンツ、損得比較ツール、投資シミュレーターではないと説明できる
- ui_result_flowはfuture decision moduleであると説明できる
- ui_result_flowの目的は、前提ズレ可視化、decision drift補正、未来想像可能化、選択肢理解、fixed_core整理、比較疲れ軽減、次のdecision更新への接続であると説明できる
- state_labelsは、ユーザーの現在地を一瞬で理解・共感・拡散可能な形に変換する表現レイヤーであると説明できる
- state_labelsは「買った方がいい」「賃貸の方がいい」「損 / 得」「危険 / 安全」を決めるものではないと説明できる
- state_labelsは「どんな前提で未来を見ているか」を可視化すると説明できる
- STATEと状態ラベルは別物であると説明できる
- rent_vs_buyの状態ラベルはfuture cognition labelsであると説明できる
- character_templatesは、キャラクター会話設計、drift correction会話設計、future imagination設計、SNS拡散用narrative設計を定義すると説明できる
- character_templatesは単なる会話テンプレ集ではないと説明できる
- character_templatesはfuture cognitionを生み、decision driftを整理し、fixed_core整理へ繋げ、LINE前後でdecision OSに接続するnarrative systemであると説明できる
- character_templatesは情報説明ではなく「未来認知を発生させる会話」として設計すると説明できる
- character_templatesでは、うさだ、家仙人、サギだの3層構造で認知を整理すると説明できる
- 3層構造はキャラ遊びではなく「脳内意思決定の可視化」であると説明できる
- うさだはユーザー自身であり、不安、迷い、比較疲れ、SNS影響、未来不安、なんとなく感覚を代弁すると説明できる
- 家仙人は正解を教える人ではなく、前提を整理する人であると説明できる
- サギだは悪役ではなく、現代のdecision driftそのものであると説明できる

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

rent_vs_buyは、以下を理解対象として扱う。

- 未来の住居選択可能性
- future cognition
- future decision module
- future drift
- fixed_core整理
- 前提ズレ
- 購入可能性理解
- 未来想像補助
- 時間リスク可視化
- 現状維持リスク整理
- 意思形成STATE
- 状態ラベル
- rabbit_types
- character_templates
- LINE前後の役割変化
- decision progression network
- decision drift
- fixed_core
- future decision
- future cognition labels
- 未来認識状態
- future decision UX

### Authority Boundary

Foundation Packは、PJ内SoTを根拠として判断できる状態を形成するために扱う。

Foundation Packは、PJ思想、System思想、Operation、Product、Module、Implementationを変更しない。

不明点がある場合は推測せず停止する。

rent_vs_buyが扱える範囲は以下とする。

- 未来decisionが停止している状態を扱うが、購入decisionは扱わない

rent_vs_buyは以下を行わない。

- 賃貸が損か得かを断定しない
- 購入を正当化しない
- 「今買うべきか」を断定しない
- 購入decisionを扱わない
- 購入誘導を扱わない
- 賃貸否定を扱わない
- 損得断定を扱わない
- 比較煽りを扱わない
- 正解提示を扱わない
- 未来不安だけを煽らない
- 「賃貸 vs 購入」の勝敗を決めない
- 買わせるための装置ではない
- 賃貸否定ツールではない
- 購入誘導コンテンツではない
- 損得比較ツールではない
- 投資シミュレーターではない
- type_diagnosisと同じ分類にしない
- decisionOS思想を前面に出しすぎて難しくしない
- LINE登録しないと価値がない状態にしない
- decisionを作らない状態にしない

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
