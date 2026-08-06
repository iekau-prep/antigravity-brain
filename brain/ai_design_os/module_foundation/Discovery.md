【Step1｜Discovery｜${FORMATION_TARGET}】

Step対象：
Discovery.md

Pipeline：
${PIPELINE}

Formation対象：
${FORMATION_TARGET}

Target Module：
${TARGET_MODULE}

Foundation：
${FOUNDATION}

━━━━━━━━━━━━━━━━━━━

Builder成果物は禁止します。

Builder Input Sheetは禁止します。

推測は禁止します。

Repository本文から確認できる事実のみObservationしてください。

━━━━━━━━━━━━━━━━━━━
■ Formation対象

${FORMATION_TARGET}｜${TARGET_MODULE} Foundation｜${FOUNDATION}

━━━━━━━━━━━━━━━━━━━
■ Purpose

Repository本文から確認できる事実のみを整理し、
Builderが追加推測せずBuilder Input Sheetを作成できるDiscovery Observationを返却してください。

DiscoveryではRepository本文を読むことのみ行います。

━━━━━━━━━━━━━━━━━━━
■ 使用可能入力

① ${TEMPLATE_STRUCTURE}

② ${MODULE_FOUNDATION}

③ ${MODULE_REPOSITORY}

━━━━━━━━━━━━━━━━━━━
■ Discovery責務

Discoveryでは、

Builderが追加推測せずFormationできるよう、

Repository本文から確認できる事実のみObservationしてください。

Formation対象成果物（今回であれば${FORMATION_TARGET}.md）はRepositoryに存在していてもDiscovery入力として使用しません。

DiscoveryはFormation対象より前段のSoT（Common・Module Foundation・Product Repository等）のみを根拠としてObservationしてください。

推測は禁止します。

━━━━━━━━━━━━━━━━━━━
■ 確認対象

① 共通テンプレートを維持する項目

確認：

${TEMPLATE_STRUCTURE}構造として維持する項目を整理してください。

━━━━━━━━━━━━━━━━━━━

② Module固有設定として差し替える項目

確認：

${TARGET_MODULE}固有へ置換する対象を整理してください。

対象：

- Module Name
- Target Module
- Role
- Responsibility
- Module Purpose
- Module Self Recognition
- Module SoT
- Module Repository
- Module Input
- Module Output
- Module Current State
- Product Owner Boundary
- Codex Boundary
- General Design GPT Boundary
- Knowledge Boundary
- Authority Boundary
- Non Responsibility
- Completion Criteria

━━━━━━━━━━━━━━━━━━━

③ ${TARGET_MODULE} Repositoryから取得すべき情報

確認：

${FORMATION_TARGET}形成のため、

Repositoryから取得できる事実のみ整理してください。

Template Structureに対応するFormation材料として返却してください。

対象：

- Module Name
- Target Module
- Role形成材料
- Responsibility形成材料
- Module Purpose形成材料
- Module Self Recognition形成材料
- Module SoT
- Module Repository
- Module Input
- Module Output
- Module Current State形成材料
- Product Owner Boundary形成材料
- Codex Boundary形成材料
- General Design GPT Boundary形成材料
- Knowledge Boundary形成材料
- Authority Boundary形成材料
- Non Responsibility形成材料
- Completion Criteria形成材料

Module Current State形成材料として取得する対象：

Repository本文上で確認できる、
Module固有Current State形成に必要なRepository事実のみ取得対象とします。

例：

- 現在Stage
- 停止条件
- 読了済み.md
- 次に読み込む.md
- その他Repository本文上で確認できるCurrent State形成材料

Repository本文上で確認できないCurrent State項目は取得対象に含めません。

Repository本文上で確認できる事実のみ返却してください。

━━━━━━━━━━━━━━━━━━━

④ Repository不足有無

確認：

追加したModule Current State形成材料についてのみ、
Builderが追加推測せずFormationするために必要なFormation材料の不足有無を整理してください。

Formation対象完成本文として確認できない事項は、不足確認対象に含めません。

完成本文不足確認は行いません。

推測は禁止します。

━━━━━━━━━━━━━━━━━━━
■ 禁止事項

❌ Builder成果物作成

❌ Builder Input Sheet作成

❌ Design Validation

❌ Review

❌ Implementation

❌ Implementation Validation

❌ Prototype Validation

❌ Repository更新

❌ Solution形成

❌ 改善案

❌ 推測

❌ Template変更

━━━━━━━━━━━━━━━━━━━
■ 返却形式

① 共通テンプレートを維持する項目

② Module固有設定として差し替える項目

③ ${TARGET_MODULE} Repositoryから取得すべき情報

④ Repository不足有無

⑤ 停止有無
