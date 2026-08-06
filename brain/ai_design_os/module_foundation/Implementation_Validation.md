【Step7｜Implementation Validation｜${FORMATION_TARGET} Repository反映確認（Observationのみ）】

Step対象：
Implementation_Validation.md

Pipeline：
${PIPELINE}

Formation対象：
${FORMATION_TARGET}

Target Module：
${TARGET_MODULE}

Foundation：
${FOUNDATION}

━━━━━━━━━━━━━━━━━━━

改善案は禁止します。

推測は禁止します。

Repository内容は修正しません。

Implementationは実施しません。

Implementation Validationのみ実施してください。

━━━━━━━━━━━━━━━━━━━

■目的

Repositoryへ反映された${FORMATION_TARGET}が、

Builder成果物と一致しているか確認してください。

Implementation Validationでは、

Repository反映結果のみをObservationします。

━━━━━━━━━━━━━━━━━━━

■使用可能入力

① Builder成果物｜${FORMATION_TARGET}

② Repository反映結果
（${REPOSITORY_PATH}）

③ Implementation返却｜${FORMATION_TARGET}

━━━━━━━━━━━━━━━━━━━

■Implementation Validation責務

Implementation Validationでは、

Repository反映結果がBuilder成果物と一致しているかをObservationしてください。

Implementation返却内容とRepository反映結果が整合しているかをObservationしてください。

Builder成果物の修正、

Repository内容の修正、

Implementationの再実施、

Repository事実追加確認は行いません。

━━━━━━━━━━━━━━━━━━━

■確認対象

① Repository反映

確認：

Builder成果物が指定Repositoryへ反映されているか。

━━━━━━━━━━━━━━━━━━━

② Builder成果物一致

確認：

Repository反映内容が、

Builder成果物と一致しているか。

━━━━━━━━━━━━━━━━━━━

③ Implementation返却整合

確認：

Implementation返却内容と、

Repository反映結果が整合しているか。

━━━━━━━━━━━━━━━━━━━

④ Repository Boundary

確認：

指定されたRepository反映先以外へRepository反映が行われていないか。

Git状態やcommit状態ではなく、
Repository反映範囲のみObservationしてください。

━━━━━━━━━━━━━━━━━━━

⑤ Implementation Boundary

確認：

Implementation Validationでは以下を行っていないか。

・Formation

・Discovery

・Design Validation

・Review

・Implementation

・改善案

・推測

・Solution形成

・Repository更新

・Product Owner Decision代行

━━━━━━━━━━━━━━━━━━━

■禁止事項

❌ Formation

❌ Discovery

❌ Design Validation

❌ Review

❌ Implementation

❌ Repository修正

❌ 改善案

❌ 推測

❌ Solution形成

❌ Repository更新

❌ Product Owner Decision代行

━━━━━━━━━━━━━━━━━━━

■返却形式

① Implementation Validation Observation

・Repository反映

・Builder成果物一致

・Implementation返却整合

・Repository Boundary

・Implementation Boundary

各Observationについて、

「何を確認し、なぜそのObservationとなったか」

を1〜2文で記載してください。

━━━━━━━━━━━━━━━━━━━

② 停止有無

あり／なし

━━━━━━━━━━━━━━━━━━━

③ 停止理由

停止した場合のみ返却してください。
