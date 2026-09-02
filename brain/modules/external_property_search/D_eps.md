D｜Decision / Current State Pack
Purpose
過去Decisionを履歴として暗記するのではなく、Observation・Decision理由・成熟経緯を現在判断へ接続する。
同時に、現在のPhase・案件・未完了工程を保持する。

Common
Decision History原則
Formation材料なし
Common Decision History対象
Formation材料なし
Common Current State
最低限保持するもの：
* 現在Phase
* 現在案件
* 案件状態
* 現在Stage
* 前工程成果物
* Product Owner Decisionの有無
* 停止条件
* 未反映差分
* Maturity状態
* Git状態
* 次工程候補
Current StateはDecision Historyと分離し、現在位置のみを扱う。

Module
Module Name
external_property_search
Module Decision History対象
Formation材料なし
Module Current State
* external_property_searchは、外部サービスで見つけた物件を、再び判断ループへ戻すための入口モジュールである。
* external_property_searchは、外部探索を、判断へ戻すための入口レイヤーである。
* external_property_searchは、探索の終了地点ではない。
* externalは「探す場所」である。
* 家買う予備校は「判断する場所」である。
* external_property_searchは物件を探す場所ではない。
* 比較する場所でもない。
* 推薦する場所でもない。
* externalはプロダクトではなく、補助レイヤーであり、プロダクト構造には含めない。
* 外部探索 → 対象選択 → 判断入口生成を役割として扱う。
* 外部探索を否定せず、探す行為は外部で行う。
* 家買う予備校は判断を行い、探索結果を判断へ変換する。
* 本モジュール単体では判断を完了しない。
* 判断主体は常にユーザーである。
* decisionは生成しない。decision更新材料のみ扱う。
* 外部探索結果を受け取る。
* 判断対象を明示する。
* property_readerへ接続する。
* decision continuityを切らない。
* 外部探索からproperty_readerへ判断材料を受け渡し、decision loopへ復帰させる。
* 外部探索を終了地点にせず、decision progressionに戻す。
* 必ず戻る理由を作る。
* 「外に出て終わり」ではなく、「外に出て → 戻って判断」とする。
* 戻り先はproperty_readerを基本とする。
* 物件判断を伴う場合は必ずproperty_readerを経由する。
* いきなりOSに戻さない。
* 必ず「読む」を挟む。
* 外部探索結果を、property_readerに渡せる状態へ変換する。
* 入力補助と入力確定を分離する。
* 入力補助は、外部入力を確認可能状態へ整える。
* 確認入力では、ユーザーが読む対象を確定する。
* 読む前に確認する。
* 入力不足があっても読む導線を維持する。
* 入力と判断を混ぜない。
* 対象確定と同一性判定を分離する。
* 元データを保持するが保存しない。
* 責務移管後は破棄する。
* property_readerへの受渡単位は、confirmed_input ＋ raw_input参照。
* property_readerへの責務移管では、読む前と読む後を分離する。
* input_connection ＝ 対象確定
* property_reader ＝ 判断再構築
* 入力結果を真実としない。
* 入力は材料、判断は後段。
* 責務を渡したら戻さない。
* property_reader以降はexternal_property_searchの責務外。
* decisionへの接続は、property_reader → decision_connection以降で扱う。
* 読むことと決めることを分離する。
* property_reader ＝ 読解
* decision ＝ 現在判断更新
* decisionは新規生成せず、更新のみ。
* decision continuityでは判断を切らず、決着させず、継続可能状態を維持する。
* 探索行動を停止させず、判断入口まで戻す。
* CTAは1つとし、同時複数CTAを扱わない。
* 外部物件探索からproperty_readerへ判断材料を受け渡し、decision loopへ復帰する。
* 物件探索そのものではなく、「判断可能状態へ戻す構造」を担う。
* 外部探索を終了地点にせず、decision progressionに戻す。
* 探索結果をproperty_readerに渡せる状態へ変換する。
* 探索結果を判断可能状態としてproperty_readerに接続する。
* 入力完了後、対象物件を判断可能状態としてproperty_readerに渡す。
* 探索行動を停止させずproperty_readerへ戻す。
* 探索結果を停止させず判断入口まで届ける。
* 探索は終点ではなく、判断への入口として扱う。
* external_property_searchは、外部探索を判断へ戻すための入口レイヤーである。
* external_property_searchは探索の終了地点ではない。
* external_property_searchは物件を探す場所ではない。
* external_property_searchはcomparisonではない。
* external_property_searchはrecommendationではない。
* external_property_searchはproperty_readerではない。
* external_property_searchはdecision_OSではない。
* external_property_searchはSTATEではない。
* externalはプロダクトではなく補助レイヤーである。
* 本モジュール単体では判断を完了しない。
* decisionは生成しない。
* decision更新材料のみ扱う。
* 判断主体は常にユーザーである。
* property_reader以降は責務外である。
* externalはdecisionを扱わない。
* 探索データは保持する。判断は保持しない。
* 入力は外部探索結果。
* 扱う対象は、外部物件URL、外部物件画像、外部資料（PDF等）。
* 入力手段は、URL、画像、PDF、手入力。
* input_typeでは、URL、画像、PDF、手入力、複合入力を許容する。
* raw_inputの保持対象は、raw_url、raw_images、raw_pdf、raw_text。
* 入力補助では、仮読取、仮入力、不足許容を扱う。
* 確認入力は、全項目編集可能、抽出ゼロでも成立、空入力から開始可能。
* 不足情報は許容する。
* 入力精度は問わない。
* 元データとして、元URL、元画像、元PDF、抽出結果を保持する。
* 出力はproperty_reader。
* 外部探索結果を判断可能状態へ変換し、property_readerへ戻す。
* property_reader入口生成の目的は、判断開始可能状態への接続。
* 構造は、外部入力 → 確認入力 → この物件を読む → property_reader。
* property_readerへの受渡単位は、confirmed_input ＋ raw_input参照。
* property_readerへ渡すものは入力コンテキスト。
* 最低保持は、input_type、raw_input、confirmed_input。
* 任意として、source、preview、capture。
* reading_contextはproperty_reader責務へ渡す。
* reading_contextは判断結果を持たない。
* property_reader開始条件は、①読む対象が確定、②ユーザーが読む意思を持つ、③「この物件を読む」押下済。
* 責務移管時は、入力終了 → セッション破棄 → property_reader開始。
* decisionは生成しない。

Knowledge
主要判断原則
* externalは「探す場所」である。
* 家買う予備校は「判断する場所」である。
* 探す場所ではない、判断する場所。
* 外部探索を否定しない。探す行為は外部で行う。
* 家買う予備校は、判断を行う。探索結果を、判断へ変換する。
* external_property_searchでは判断しない。
* decisionしない。
* 本モジュール単体では判断を完了しない。
* 判断主体は常にユーザー。
* 戻り先はproperty_readerを基本とする。
* 物件判断を伴う場合は必ずproperty_readerを経由する。
* いきなりOSに戻さない。
* 必ず「読む」を挟む。
* 読む前と読む後を分離する。
* input_connection ＝ 対象確定
* property_reader ＝ 判断再構築
* 入力結果を真実としない。入力は材料。判断は後段。
* 責務を渡したら戻さない。
* property_reader責務へ、物件読解、理想接触、現実接触、reason生成、decision更新準備、fixed_core接触が移る。
* property_reader以降はexternal_property_searchの責務外。
* 構造は、入力 → 確認 → 読む → property_reader。
* 入力補助と入力確定を分離する。
* 入力補助 ≠ 入力代行。
* 自動読取は補助。最終確定はユーザー。
* 読む前に確認する。
* 入力補助は外部入力を確認可能状態へ整える。
* 確認入力ではユーザーが読む対象を確定する。
* raw_inputの目的は元データ保持。
* confirmed_inputの目的は読む対象固定。
* reading_contextの目的はproperty_reader責務へ渡す。
* 入力不足 ≠ 読む停止。
* 不足時は警告表示し、停止させない。
* 抽出失敗 ≠ 判断停止。
* 不足があっても読む導線を維持する。
* 元データは保持する。
* 保持 ≠ 保存。
* raw_inputは編集しない。保持のみ。保存しない。
* 入力途中はセッション保持のみ。
* 保存しない。
* decisionへ反映しない。
* セッション保持は入力開始から「読む」押下まで。
* 「この物件を読む」→ property_reader開始 → 破棄。
* 責務移管後は破棄する。
* 探索データは保持する。判断は保持しない。
* 構造は、external → property_reader → decision → OS。
* Module側では、external_property_search → property_reader → decision → decision_OS。
* decision接続は、property_reader → decision_connection以降。
* 読むことと決めることを分離する。
* property_reader ＝ 読解
* decision ＝ 現在判断更新
* decisionは生成物ではない。
* decision ≠ AI出力。
* decision ≠ 推薦結果。
* decision ＝ 現在時点判断。
* decisionは新規生成しない。更新のみ。
* 決めない自由を許容する。
* 残す、保留、見送り、すべて成立。
* property_readerからdecisionへ渡すものは判断材料のみ。
* reason候補、理想接触、現実接触、current_priority、fixed_core接触、drift情報を扱う。
* decision結果、recommendation、順位付け、評価点は扱わない。
* decision_OSの役割は、現在decision整理、drift回復、次CTA提示。
* external_property_searchはdecision continuityを切らない。
* decision continuityの目的は、判断を切らないこと。
* 構造は、property_reader → decision → decision_OS → 次decision。
* 決着させない。継続可能状態を維持する。
* external_property_searchのdecision continuity成立条件は、external → property_reader → decision → decision_OSが継続可能であること。
* 次decisionへ接続可能な状態を維持する。
* OSのCTAは「次の候補を探す」。
* 戻り導線のCTAは「この物件を読む」。
* 入力開始時のCTAは「次へ」。
* 確認入力時のCTAは「この物件を読む」。
* 責務移管時のCTAはなし。
* CTAは1つ。迷わせない。
* 同時複数CTAは禁止。
* 入力不足は停止理由にせず、読む導線を残す。
* 判断主体は常にユーザー。
* 自動読取は補助。最終確定はユーザー。
* decision開始条件に判断主体維持が含まれる。
* recommendation未混入の目的は判断主体維持。
* おすすめ、順位、評価点、自動decisionを発生させない。
* property評価
* recommendation
* comparison
* decision判定
* 物件検索
* おすすめ生成
* ランキング
* スコアリング
* 物件保存
* decision保存
* STATE生成
* 自動決定
* 自動保存
* property生成
* decision生成
* external_property_key作成
* 同一物件認定
* decision_result保持
* reasons保持
* STATE保持
* selected_property_ids保持
* recommendation保持
* 比較状態保持
* 読む前decision
* 読む前保存
* OS直通
* 強制決定
* 自動更新
* 推薦反映
* 読む即保存
* 読む即decision
* 読む即OS
* STATE保存
* 比較確定
* 探索終了
* 入力即読む
* 確認スキップ
* おすすめ表示
* 比較開始
* 読む後戻る
* 読む後修正

Boundary
Decision History Boundary
Formation材料なし
Current State Boundary
* external_property_searchは、外部探索結果を判断可能状態へ接続する入口までを扱う。
* external_property_searchでは判断しない。
* decisionしない。
* 保存しない。
* 本モジュール単体では判断を完了しない。
* decisionは生成しない。decision更新材料のみ扱う。
* property_reader以降は責務外。
* property_readerへ責務を移したら戻さない。
* 入力補助と入力確定を分離する。
* 入力補助 ≠ 入力代行。
* 入力と判断を混ぜない。
* 入力 ≠ 判断。
* 対象確定と同一性判定を分離する。
* 読む ≠ 識別。
* 保持 ≠ 保存。
* 探索データは保持する。判断は保持しない。
* reading_contextは判断結果を持たない。
* decision_result、reasons、STATE、selected_property_ids、recommendationをreading_contextに持たない。
* decision生成、STATE生成、property生成、比較状態を扱わない。
* property_readerからdecisionへの接続では、読むことと決めることを分離する。
* decisionは新規生成せず、更新のみ。
* decision結果、recommendation、順位付け、評価点を判断材料として渡さない。
* 強制決定、自動更新、推薦反映を行わない。
* decision continuityを切らない。
* 直接OSへ戻さない。
* 判断主体は常にユーザー。
* property評価、recommendation、comparison、decision判定は扱わない。
* external_property_search ≠ property_reader。
* external_property_search ≠ recommendation。
* external_property_search ≠ comparison。
* external_property_search ≠ decision_OS。
* external_property_search ≠ STATE。

Loading
読み込み対象
* projects/iekau/products/external_property_search/
* brain/system/external_property_search.md
* projects/iekau/products/external_property_search/README.md
* projects/iekau/products/external_property_search/input_connection.md
* projects/iekau/products/external_property_search/data_connection.md
* projects/iekau/products/external_property_search/property_reader_connection.md
* projects/iekau/products/external_property_search/decision_connection.md
* projects/iekau/products/external_property_search/ui_flow.md
* projects/iekau/products/external_property_search/screen_structure.md
* projects/iekau/products/external_property_search/completion_definition.md
読み込み目的
* external_property_searchが、外部物件探索からproperty_readerへ判断材料を受け渡し、decision loopへ復帰するための構造を扱う。
* external_property_searchの入口モジュールとしての役割、外部探索と判断の分離、property_reader接続、decision continuity、Input / Output、非責務を扱う。
* 外部から取得した物件情報を判断可能状態へ接続する入力境界と、入力補助・入力確定・「読む」の責務構造を扱う。
* 入力・保持・受渡・破棄のデータ接続構造、raw_input、confirmed_input、reading_context、保持と保存の分離、セッション破棄を扱う。
* external_property_searchからproperty_readerへ責務を移す境界を扱う。
* property_readerからdecisionへの接続境界、decision更新、decision continuity、decision_OSへの接続を扱う。
* external_property_searchの導線責務とCTA責務、入力 → 確認 → 読む → property_readerの責務遷移を扱う。
* external_property_searchの画面責務境界、Screen1 → Screen2 → Screen3 → property_readerの責務分割を扱う。
* external_property_searchの完成候補判定条件、EPS-01からEPS-08、完成候補と公開判定・実装完了の分離を扱う。

Transfer
Transfer対象
* 外部探索結果を判断可能状態へ変換した入力コンテキスト。
* input_type
* raw_input
* confirmed_input
* 任意のsource
* 任意のpreview
* 任意のcapture
* property_readerへの受渡単位は、confirmed_input ＋ raw_input参照。
* reading_contextはproperty_reader責務へ渡す。
* property_readerへの責務移管後、物件読解、理想接触、現実接触、reason生成、decision更新準備、fixed_core接触はproperty_reader責務へ移る。
* property_readerからdecisionへは判断材料のみを渡す。
* 判断材料として、reason候補、理想接触、現実接触、current_priority、fixed_core接触、drift情報を扱う。
* decision結果、recommendation、順位付け、評価点は渡さない。
Transfer目的
* 探索結果をproperty_readerに渡せる状態へ変換する。
* 外部入力で確定した対象を、判断可能状態としてproperty_readerへ渡す。
* 読む前を終え、読む責務を開始する。
* property_readerでの読解結果をdecision更新可能状態へ接続する。
* 決める責務は渡す。決める内容は渡さない。
* decision continuityを切らず、property_reader → decision → decision_OS → 次decisionへ接続する。
* 外部探索を終了地点にせず、decision progressionへ戻す。

Connected Modules
System成熟
Formation材料なし
Operation成熟
Formation材料なし
Foundation成熟
Formation材料なし
AI Design OS成熟
Formation材料なし

## Current Case Connection

- Current Case：external_property_search → property_reader｜Connection
- Case Status：CLOSED
- Production Runtime：PASS WITH COVERAGE LIMIT
- Release Classification：RELEASED WITH COVERAGE LIMIT
- Coverage：PRESERVED NON-BLOCKING
- Historical Close Record：`brain/modules/external_property_search/property_reader_connection_production_release_close.md`
- Blocking Finding：なし
- Current Next State：NONE — CASE CLOSED

Learning
Learning Stage
Formation材料なし
Learning対象.md
* brain/system/external_property_search.md
* projects/iekau/products/external_property_search/README.md
* projects/iekau/products/external_property_search/input_connection.md
* projects/iekau/products/external_property_search/data_connection.md
* projects/iekau/products/external_property_search/property_reader_connection.md
* projects/iekau/products/external_property_search/decision_connection.md
* projects/iekau/products/external_property_search/ui_flow.md
* projects/iekau/products/external_property_search/screen_structure.md
* projects/iekau/products/external_property_search/completion_definition.md
Stageごとの到達状態
Formation材料なし

完了条件
* 完成候補 ≠ 公開判定。
* 完成候補 ≠ 実装完了。
* 公開判断はPM責務。
* 完成は画面数ではない。機能数ではない。
* 成立条件は、責務成立 → 停止しない → 判断へ戻れる。
* 改善余地は許容する。
EPS-01｜外部探索入口成立
* external到達可能。
* 探索開始可能。
* 探索で終了しない。
EPS-02｜入力成立
* URL、画像、PDF、手入力のいずれか成立。
* 不足は許容。
EPS-03｜確認成立
* 目的は読む対象固定。
* 入力確認可能。
* 修正可能。
* 不足許容。
* 読む押下可能。
* 自動決定は禁止。
EPS-04｜property_reader接続成立
* 目的は判断入口へ戻す。
* 責務移管成立。
* 読む後停止なし。
* property_reader開始可能。
* OS直通は禁止。
EPS-05｜decision continuity成立
* 目的は探索で終わらないこと。
* external → property_reader → decision → decision_OSが継続可能。
* 探索終了は禁止。
* 完了は次decision接続可能。
EPS-06｜recommendation未混入
* 目的は判断主体維持。
* おすすめ、順位、評価点、自動decisionが未発生。
EPS-07｜STATE非保存成立
* 目的は責務侵食防止。
* STATE、decision_result、比較状態、property生成が未保持。
EPS-08｜再開破綻なし
* 目的は途中離脱許容。
* 入力途中保持成立。
* 読む後破棄成立。
* 再入力可能。
完成候補判定
* EPS-01 → EPS-08 成立 → external_property_search 完成候補
* 未成立の場合は継続。
* external_property_searchの完成とは、探索行動を停止させず、判断へ戻せる責務が成立した状態。
* 探索は終点ではない。判断入口である。
今回含まないもの
* OCR完成
* parser精度
* URL精度
* recommendation
* comparison
* property保存
* LINE
* Supabase
* 公開判定
* UI改善
