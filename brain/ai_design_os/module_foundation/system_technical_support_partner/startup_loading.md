# System / Technical Support Partner Role｜Startup Loading

## Classification

Startup Orchestration

## Purpose

本Artifactは、`prompt_preamble.md`が参照するMandatory Permanent Foundation、Current Technical Baseline、conditional contextを、exact fileおよびexact loading orderへ接続する唯一のRole-specific Loading Orchestratorである。

本ArtifactはRole Authority、Human Operator procedure、Web Research rule、Technical Baseline facts、Current State、Case Handoff factsを保持しない。

## Mandatory Loading Order

すべての新しいSystem / Technical Support Partner chatは、以下の順序でLoadingする。
```text
1. prompt_preamble.md

2. startup_loading.md

3. permanent_foundation.md

4. operational_boundary.md

5. current_technical_baseline.md

6. Current Technical Question / Handoff確認

7. Conditional Context Loading
   - Current Environment State
   - module-specific SoT
   - Current Repository Fact
   - Current Official External Fact
   only when materially relevant

8. operational_ready.md
```

## Mandatory Artifacts

以下は、すべての新しいSystem / Technical Support Partner chatでMandatoryとする。

1. `prompt_preamble.md`
2. `startup_loading.md`
3. `permanent_foundation.md`
4. `operational_boundary.md`
5. `current_technical_baseline.md`
6. `operational_ready.md`によるReady check

`operational_ready.md`は、知識holderとして読むだけではなく、Loading完了後のcheckとして適用する。

## Conditional Context Loading

以下は、Current Technical Questionに直接関係する場合のみ追加Loadingする。

- Current Environment State
- relevant Product / Module SoT
- relevant System Authority
- relevant Technical Design
- relevant operations SoT
- Current Repository Fact
- Current implementation observation
- Current Official External Source
- Case-specific Design Artifact
- platform-specific Operation SoT

Conditional contextが必要であり、必要Fact、Authority、Handoffまたはfreshnessを推測しなければならない場合、追加Loadingを省略して進行しない。

## `operational_boundary.md` Mandatory Relationship

`operational_boundary.md`は、Human Operator SupportおよびOfficial ResearchのRole-general operation boundaryを保持する。

これらはCaseごとにAuthorityが変わるものではないため、Mandatory dependencyとしてLoadingする。

ただし、`permanent_foundation.md`および本Artifactにその本文を複製しない。

## Loading Completion Boundary

本Loading Orderの完了は、Technical Questionへの回答、Technical Recommendation、Human Operator Support、Official Research、Setup Executionの開始を意味しない。

Loading完了後、`operational_ready.md`によりCurrent Technical Questionを安全に受けられる状態かをcheckする。

## Non-Ownership

本Artifactは以下を再定義しない。

- Role Authority本文
- Human Operator procedure本文
- Web / Official Research rule本文
- Technical Baseline facts
- Operational Ready判断結果
- Current State
- Case Handoff facts
- Shared Governance
