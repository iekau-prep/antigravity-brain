# purchase_motivation Subject 3 Current State

## Purpose

本書は、purchase_motivation Subject 3「Dedicated PostgreSQL Read-only Identity」の進行中Current State、Technical Handoff、STOP理由、およびResume時のReturn Pathを保持する。

本書はProduct SoT、Technical Architecture SoT、Security Design SoT、Decision History、Record、Maturityではない。

## Scope

対象：

- Subject 3｜Dedicated PostgreSQL Read-only Identity
- Target Supabase ProjectにおけるDevelopment環境
- Local client setup、Dedicated Role identity、Catalog read coverage、effective privilege、Large Object blocking surface
- supportability確認待ちによるPhase 3 STOP
- 外部回答受領後のReturn Path

対象外：

- Product Definition
- Technical Architecture Definition
- Security Design Definition
- 新Technical / Product Decision
- SQL全文、chat log全文、command transcript全文
- Repository / Git / Production進行記録
- credentialおよびauthentication secret

## Target Environment

- Module：`purchase_motivation`
- Subject：Subject 3
- Case：Dedicated PostgreSQL Read-only Identity
- Target Supabase Project ID：`duecfeexhqjzriwaewrv`
- Environment Positioning：Development
- Dedicated Role：`purchase_motivation_dev_observer`
- Current Formal DB Read-only Access Method：未成立

## Current Phase State

| Phase | Status | Established / Current State |
| --- | --- | --- |
| Phase 1｜Local Client Setup | PASS | Homebrew導入済み。Homebrew 6.0.18、libpq 18.6、psql 18.6が利用可能。PostgreSQL Serverは未導入。libpqはkeg-onlyでabsolute path運用。PATH / shell profile変更なし。 |
| Phase 2｜Identity Formation | PASS | Dedicated Role `purchase_motivation_dev_observer` を形成。CredentialはHuman-controlledで設定済みであり、AI / Prompt / Repositoryへ非共有。 |
| Phase 3｜Minimum Read Permission Formation | STOP | Additional Read GRANT、Application relation SELECT、persistent write privilege、unnecessary schema USAGEはいずれも未実施。Required Catalog Read Coverageは追加GRANTなしで成立確認済み。 |

## Established Identity State

Dedicated Role：

`purchase_motivation_dev_observer`

Established Attributes：

- LOGIN：true
- SUPERUSER：false
- CREATEDB：false
- CREATEROLE：false
- REPLICATION：false
- BYPASSRLS：false
- INHERIT：false
- Role Membership：0

Credential State：

- Human-controlledで設定済み
- Secret valueはAI / Prompt / Repositoryへ非共有

## Established Catalog Read Coverage

Dedicated RoleはApplication row dataを読まずに、`pg_catalog` metadataとして以下を観測可能であることを確認済み。

- relation / table
- column
- index
- constraint
- extension
- RLS enabled state
- RLS policy definition
- function existence
- function signature
- function owner
- SECURITY DEFINER / INVOKER metadata
- migration schema / relation存在確認

Current migration observation：

- `supabase_migrations` relation：0 rows
- Current Phaseではmigration read permissionを先行GRANTしていない

## Effective Privilege Evidence

Public application tablesに対するDedicated Roleのeffective privilege：

- SELECT：false
- INSERT：false
- UPDATE：false
- DELETE：false
- TRUNCATE：false
- TRIGGER：false

Schema privilege：

| Schema | USAGE | CREATE |
| --- | --- | --- |
| `public` | true | false |
| `auth` | false | false |
| `extensions` | false | false |
| `graphql_public` | false | false |
| `pgbouncer` | false | false |
| `realtime` | false | false |
| `storage` | false | false |
| `vault` | false | false |

## Large Object Blocking Surface

Current PO Security Boundary：

Dedicated Read-only Identity / Write-denial Boundary｜Persistent State

Phase 3 validation中、Dedicated Roleが以下の`pg_catalog` Large Object関連functionについてeffective EXECUTEを持つことを確認した。

Observed effective EXECUTE = true：

- `pg_catalog.lo_creat(integer)`
- `pg_catalog.lo_create(oid)`
- `pg_catalog.lo_from_bytea(oid, bytea)`
- `pg_catalog.lo_open(oid, integer)`
- `pg_catalog.lo_put(oid, bigint, bytea)`
- `pg_catalog.lo_truncate(integer, integer)`
- `pg_catalog.lo_truncate64(integer, bigint)`
- `pg_catalog.lo_unlink(oid)`
- `pg_catalog.lowrite(integer, bytea)`

Observed effective EXECUTE = false：

- `pg_catalog.lo_import(text)`
- `pg_catalog.lo_import(text, oid)`

未実行：

- Large Object mutation
- Large Object function本体の実行
- Large Object mutation test

## ACL Source Observation

上記9 functionについて、Current ACL metadata observationで以下を確認した。

- owner：`supabase_admin`
- current `proacl`：`NULL`
- PUBLIC effective EXECUTE：true
- observer effective EXECUTE：true
- postgres effective EXECUTE：true

`lo_import` overloadsについて確認した事項：

- owner：`supabase_admin`
- explicit ACL
- PUBLIC effective EXECUTE：false
- observer effective EXECUTE：false
- postgres effective EXECUTE：false

Technical Closure：

Dedicated Role-only Closureは不可。

理由：

PUBLIC由来EXECUTEは、Role-specific REVOKEだけではtechnical denyできない。

## Current Technical Classification

Large Object PUBLIC EXECUTE Security Changeは、PostgreSQL ACLとしてProject-wide PUBLIC EXECUTE変更を必要とする。

ただし、Hosted Supabase上で`supabase_admin`所有の`pg_catalog` system function ACLをcustomerが変更することについて、以下が未確定である。

- supportability
- platform compatibility
- internal service dependency
- required grant-back
- upgrade / maintenance / restore preservation

Current Classification：

Result C｜Public Official Information Insufficient

Current State：

- Phase 3はSTOP維持
- PUBLIC REVOKE：未実行
- GRANT：未実行

## Authority State

- Dedicated Read-only Identity / Write-denial Boundary｜Persistent Stateを維持する。
- Hosted Supabase system function ACL customizationのsupportabilityは未確定である。
- PUBLIC REVOKE、GRANT、Role再設計、Architecture再設計、Security Design再設計は未判断・未実行である。
- Supabase側のstaff / maintainer回答、またはofficial sourceへ接続する回答をTechnical Evidenceとして優先する。
- community一般回答のみではSupportability Closedと扱わない。

## Explicitly Not Executed

以下は未実行。

- PUBLIC REVOKE
- GRANT
- ALTER DEFAULT PRIVILEGES
- Large Object mutation
- Large Object mutation test
- Role再設計
- Credential変更
- Dedicated password変更
- Application permission変更
- Migration execution
- Runtime Secret変更
- Repository mutation
- Production access
- 別Project access

## Current STOP Condition

STOP Reason：

Hosted Supabase上の`pg_catalog` system function ACL customizationについて、public official informationだけではsupportabilityを確定できない。

DB追加Observationではこのsupportability問題は閉じない。

Supabase側のstaff / maintainer / official source evidenceを受領するまで、Phase 3をResumeしない。

## External Confirmation State

Supabase Free Plan上、適切なproject-specific technical support categoryは確認できなかった。

Supabase公式Discord communityの`help-and-questions`へ、以下のSupportability Questionを投稿済み。

確認対象：

Hosted Supabase上で、`pg_catalog` built-in Large Object functionsのPUBLIC EXECUTEをREVOKEし、必要Roleだけへexplicit GRANTするACL customizationがcustomer-supported operationか。

Inquiry Scope：

- managed system object boundary
- internal service dependency
- required grant-back
- upgrade compatibility
- maintenance compatibility
- restore preservation
- supported alternative

Current Action：

Discord回答待ち。

## Resume Trigger

Single Resume Trigger：

Supabase Discord / Supportからsupportability回答を受領すること。

回答受領はPhase 3の自動Resumeを意味しない。

## Next Responsible Role

System / Environment Technical Design Authority

回答受領後、当該AuthorityへReturnし、以下を再判定する。

- Officially Supported
- Officially Unsupported
- Supported With Conditions
- Still Insufficient

## Next Formation Target

Supabaseからのsupportability回答をTechnical Evidenceとして受領後、System / Environment Technical Design AuthorityがCurrent Technical Classificationを再判定する。

Phase 3 Resume、PUBLIC REVOKE、GRANT、またはACL変更判断は、その再判定後にのみ別途扱う。

## Update Boundary

本書は、Subject 3進行中のCurrent State / Technical Handoff Sourceである。

Current State変更時には、後続の正式Formation / Reflection Processを経て更新可能である。

Closure後の扱いは未決定であり、本書はClosure policyを形成しない。
