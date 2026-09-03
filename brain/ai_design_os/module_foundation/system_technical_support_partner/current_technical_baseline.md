# System / Technical Support Partner Role｜Current Technical Baseline

## Classification

Current / Replaceable

## Purpose

本Artifactは、System / Technical Support Partner Roleが毎回ゼロから技術前提を推測しないための、Role-general Current Technical Baseline holderである。

本ArtifactはPermanent Authorityではない。

記載するのは、現在のTechnical Support判断に横断的に影響し、確認済みで、複数Caseで継続利用するtechnical baselineのみとする。

## Baseline Fact Record Rule

各Baseline Factは、最低限以下を区別可能に記録する。

| Field | Required meaning |
|---|---|
| Current Fact | 確認済みのcurrent technical baseline |
| Source | Factの根拠Source |
| Observed / Verified point | 観測または確認した時点・条件 |
| Freshness status | current validity、再確認要否、または期限 |

Current Fact、Source、Observed / Verified point、Freshness statusのいずれかが不足する場合、Current Factとして断定しない。

## Eligible Baseline Categories

以下を、Role-generalかつ確認済みの場合に限り保持できる。

- current primary technical stack
- currently adopted major platform / tool family
- current AI / development tooling baseline
- current repository / tool interaction model
- role-general environment / tool capability baseline
- 複数Caseで継続利用するCurrent Official Fact
- observed / verified date
- source / evidence reference
- freshness / revalidation marker

## Current Fact Register

Current Fact未投入。

本Foundation Completionでは、Current Technical Factのtechnical research、Repository Observation、現行環境確認を行わない。

したがって、以下の各CategoryにはCurrent Factを推測して記載しない。

| Category | Current Fact | Source | Observed / Verified point | Freshness status |
|---|---|---|---|---|
| current primary technical stack | 未投入 | 未投入 | 未投入 | 未確認 |
| adopted major platform / tool family | 未投入 | 未投入 | 未投入 | 未確認 |
| AI / development tooling baseline | 未投入 | 未投入 | 未投入 | 未確認 |
| repository / tool interaction model | 未投入 | 未投入 | 未投入 | 未確認 |
| role-general environment / tool capability baseline | 未投入 | 未投入 | 未投入 | 未確認 |
| reusable Current Official Fact | 未投入 | 未投入 | 未投入 | 未確認 |

## Update / Revalidation Trigger

以下はCurrent Technical BaselineのUpdateまたはRevalidationを必要とするTriggerである。

1. baselineに記載された主要tool / platform / frameworkのcurrent stateが変わった
2. Official specification changeによりTechnical Recommendationへ影響する
3. PJのadopted technical stackが正式変更された
4. repository / tool operating modelが正式変更された
5. baselineの記述とCurrent Official Factにconflictが見つかった
6. freshness-sensitive questionでbaselineのcurrent validityを保証できない
7. General Design / Product Owner / relevant Authorityがbaseline再確認を要求した

Update / Revalidation Trigger成立は、自動書換えAuthorityを意味しない。

必要なCurrent Factは、Official Source、Codex / Technical Observation、または適切な既存Formal SoTで確認する。Repository SoT変更が必要な場合は、Repository Formation / authorized reflection routeへ渡す。

## Non-Ownership

本Artifactは以下を保持しない。

- Permanent Authority
- Product Authority
- Formal Technical Design
- Case-specific Current Repository Fact
- individual Supabase project state
- individual Vercel deployment state
- temporary auth / session state
- credentials / secret values
- case-specific Git branch state
- subject-specific migration status
- Current Technical Question

Case-specific Current State、Current Repository Fact、Current Official External Factは、Technical Questionに直接関係する場合にのみconditional contextとして確認する。
