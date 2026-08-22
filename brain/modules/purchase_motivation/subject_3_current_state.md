# purchase_motivation Subject 3 Current State

## Purpose

本書は、purchase_motivation Subject 3「Dedicated PostgreSQL Read-only Identity」およびSupabase Official MCP Read-onlyの進行中Current State、Technical Handoff、Operational Safety State、STOP理由、およびReturn Pathを保持する。

本書はProduct SoT、Technical Architecture SoT、Security Design SoT、Decision History、Record、Maturityではない。

## Scope

対象：

- Subject 3｜Dedicated PostgreSQL Read-only Identity
- Target Supabase ProjectにおけるDevelopment環境
- Local client setup、Dedicated Role identity、Catalog read coverage、effective privilege、Large Object blocking surface
- Official MCP Read-onlyのCurrent Formal RouteおよびOperational Safety State
- supportability確認待ちによるDedicated Role Phase 3 STOP
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
- Current Formal DB Read-only Access Method：Official MCP Route成立

## Current Status

Subject 3 Technical Case：

Primary Requirement Closed /
Non-Blocking Residual Items Remain

Current Developmentで必要なPrimary Supabase Access Requirementは成立している。

残存Technical Itemは存在するが、Current Development進行のBlocking Conditionではない。

### Primary Requirement Closed

Current Statusの根拠：

- Official MCP Read-only：Formal Primary Route成立
- Position：Conditional Primary
- M11：PASS / Close維持
- Operational Safety：Formation済み
- Development Supabase Observation Route：利用可能

### Non-Blocking Residual Items

Provider-side OAuth Revoke：

- State：未Closed
- Position：Non-Blocking Residual

Dedicated PostgreSQL Role：

- Role：`purchase_motivation_dev_observer`
- Position：Fallback / Frozen
- Phase 3：STOP維持
- STOP Scope：Fallback Route限定

Large Object ACL：

- State：未Closed
- Position：Fallback Technical Residual

これらをSubject 3全体のSTOPまたは未Closedとして扱わない。

### Technical Investigation Boundary

Current Development用途におけるSupabase Technical Investigationは、Blocking Taskとして終了可能である。

以下のTriggerがない限り再OPENしない。

- Production利用
- Security Requirement強化
- Incident
- MCP config drift
- tool drift
- OAuth drift
- Supabase仕様変更
- Codex MCP仕様変更
- safer official route成立
- Current Official MCP Routeで具体的Requirement不足が成立

Triggerなしに、Provider-side revoke、Dedicated Role、Large Object ACLをBlocking Investigationとして継続しない。

## Current Formal Route

Official MCP Read-onlyは、Development環境のTarget Project `duecfeexhqjzriwaewrv`に対するFormal Primary Routeとして成立している。

Current Position：

Conditional Primary

Product Ownerは、Current Development、Current Project、Current MCP Configuration、およびCurrent Safety Boundaryに限定してConditional Acceptanceしている。

Current Official MCPを永久固定Routeとして扱わない。

## Baseline MCP Configuration

Current Baseline：

- `project_ref=duecfeexhqjzriwaewrv`
- `read_only=true`
- `features=database`
- enabled tools：
  - `list_tables`
  - `list_extensions`
  - `list_migrations`
- `execute_sql`：not enabled
- `apply_migration`：not enabled
- approval mode：prompt
- auth：OAuth
- user-level configuration
- repository-local MCP configなし

## Operational Safety Baseline

通常運用：

- Current Development Project固定
- Developmentのみ
- `read_only=true`
- `features=database`のみ
- tool allowlist：
  - `list_tables`
  - `list_extensions`
  - `list_migrations`
- Manual Approval必須
- Application Row通常Authorityなし
- Write通常Authorityなし
- Production通常Accessなし

## Broad OAuth Residual Risk

Actual OAuth Credential Authority：

READ + WRITE：

- Database
- Edge Functions
- Environment
- Projects
- Storage

READ：

- Secrets
- Organizations
- Analytics

OAuth credential自体はleast-privilege read-onlyではない。

> Tool read-only
> ≠ Credential read-only

この差分はResidual Operational Riskとして保持する。

## Free Plan Monitoring Boundary

Broad OAuth activityを完全監査するMonitoring Boundaryは、Free Planでは成立しない。

Observed limitation：

- API / Database Logs：limited retention
- Auth Audit Logs：limited retention
- Platform Audit Logs：Free Planでは利用不可
- Log Drain：Free Planでは利用不可

Primary Defense：

- minimal tool allowlist
- read-only mode
- project固定
- manual approval
- incident時即STOP

Complete forensic coverageまたはcomplete platform audit coverageとして扱わない。

## Drift / Revalidation

Routine observation candidate：

```sh
npx -y @openai/codex mcp get supabase_purchase_motivation_subject_3
```

確認対象：

- enabled
- `project_ref`
- `read_only`
- features
- enabled_tools
- approval mode
- Auth = OAuth

STOP / Revalidation Required：

- `project_ref`変更
- `read_only`消失または`false`
- features追加
- enabled_tools追加
- approval mode変更
- auth mechanism変更

Critical Drift：

- `execute_sql`
- `apply_migration`
- arbitrary SQL tool
- write-capable tool
- database以外のfeature由来tool

OAuth Revalidation Trigger：

- OAuth再login要求
- Consent画面再表示
- auth failure
- Supabase MCP OAuth docs変更
- fine-grained scope対応
- permission名称変更
- OAuth mechanism変更
- security incident
- Production利用検討

Routine Revalidation Primary Policy：

使う前＋変化時

Calendar basisだけの再OAuthはPrimaryとしない。

Critical Drift時、Current Formal Closeを自動継承しない。Revalidationを必要とする。

## Incident Immediate STOP Sequence

Incident suspicion時：

1. Approvalしない。
2. Supabase MCP Toolを追加実行しない。
3. Current Codex TaskをSTOPする。
4. MCP local logoutを行う。
5. Current MCP registrationを利用しない。
6. Current config baselineを読み戻す。
7. 利用可能なSupabase official log / audit surfaceでactivityを確認する。
8. Provider-side revokeが成立している場合のみ、別Authorityでrevokeする。
9. 原因Closedまで再Authorizationしない。

Incident初動に含めない：

- SQL
- repair write
- ACL変更
- migration
- Application mutation

## Local MCP Logout Boundary

Current Local Disconnect Procedure：

```sh
npx -y @openai/codex mcp logout supabase_purchase_motivation_subject_3
```

Codex local clientによるCurrent MCP OAuth credential利用を停止する。

> Local Logout
> ≠ Provider-side OAuth Revocation

## Provider-side OAuth Revocation State

Status：

未Closed

Current Official Fact：

Supabase Management APIにはOAuth authorization revoke endpointが存在する。

Current endpoint：

Beta

必要：

- `client_id`
- `client_secret`
- `refresh_token`

Current Hosted MCP dynamic OAuthでは、Human OperatorはこれらSecretを保持していない。

Human OperatorがDashboard等から安全に即時revokeするCurrent Supported Procedureは未成立である。

> Provider-side revoke未Closed
> ≠ M11再OPEN
> ≠ Formal Primary Route未成立

Provider-side revoke未Closedは、Conditional Primary RouteのResidual Operational Riskとして保持する。

## Incident Evidence and Reauthorization Boundary

利用可能候補：

- MCP current config
- Supabase Logs Explorer
- Account-associated audit evidence
- OAuth consent / permission specification
- Codex-side tool invocation history

Incident後、Automatic Reauthorizationは禁止する。

再Authorizationには以下が必要。

- Incident原因Closed
- config baseline一致
- OAuth permission再確認
- Current PO Security Boundary一致
- New OAuth Accept Authority

Previous GOを自動再利用しない。

## Safer Route Migration Triggers

以下が成立した場合、Conditional Primary Routeを再評価可能とする。

- Supabase MCP fine-grained OAuth対応
- Database read-only OAuth credential成立
- Project-specific OAuth credential成立
- metadata-only credential成立
- Broad write scopes不要化
- Dedicated PostgreSQL Role Hosted supportability成立
- 別Official read-only mechanism成立
- Productionでより強いsecurity requirement成立

## Current Phase State

| Phase | Status | Established / Current State |
| --- | --- | --- |
| Phase 1｜Local Client Setup | PASS | Homebrew導入済み。Homebrew 6.0.18、libpq 18.6、psql 18.6が利用可能。PostgreSQL Serverは未導入。libpqはkeg-onlyでabsolute path運用。PATH / shell profile変更なし。 |
| Phase 2｜Identity Formation | PASS | Dedicated Role `purchase_motivation_dev_observer` を形成。CredentialはHuman-controlledで設定済みであり、AI / Prompt / Repositoryへ非共有。 |
| Phase 3｜Minimum Read Permission Formation | STOP | Dedicated RoleはFallback / Frozen。Additional Read GRANT、Application relation SELECT、persistent write privilege、unnecessary schema USAGEはいずれも未実施。Required Catalog Read Coverageは追加GRANTなしで成立確認済み。 |

## Established Identity State

Dedicated Role：

`purchase_motivation_dev_observer`

Current Position：

Fallback / Frozen

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

Fallback Candidate条件：

Official MCPにsecurity regression、maintenance regression、またはunavailable conditionが成立した場合。

今回、Dedicated Roleについて以下は成立しない。

- Resume
- ALTER
- DROP
- GRANT / REVOKE
- Credential変更

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

- Dedicated Role Phase 3：STOP維持
- Large Object ACL：未Closed
- PUBLIC REVOKE：未実行
- GRANT：未実行
- Application Row Direct Read：未成立
- Write Authority：未成立
- Production：未成立

## Authority State

- Dedicated Read-only Identity / Write-denial Boundary｜Persistent Stateを維持する。
- Official MCP Read-onlyをCurrent Project / Development限定のConditional Primary Routeとして扱う。
- Hosted Supabase system function ACL customizationのsupportabilityは未確定である。
- PUBLIC REVOKE、GRANT、Role再設計、Architecture再設計、Security Design再設計は未判断・未実行である。
- Supabase側のstaff / maintainer回答、またはofficial sourceへ接続する回答をTechnical Evidenceとして優先する。
- community一般回答のみではSupportability Closedと扱わない。

## M11 Relationship

- M11 Boundary：PASS
- M11：PASS / Close維持
- 本書のCurrent State UpdateはM11を再Formation・再判定しない。
- Provider-side OAuth revoke未ClosedはM11再OPENの理由として扱わない。

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

Dedicated Role Phase 3のSTOP Reason：

Hosted Supabase上の`pg_catalog` system function ACL customizationについて、public official informationだけではsupportabilityを確定できない。

DB追加Observationではこのsupportability問題は閉じない。

Supabase側のstaff / maintainer / official source evidenceを受領するまで、Dedicated Role Phase 3をResumeしない。

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

Dedicated Role Phase 3のSingle Resume Trigger：

Supabase Discord / Supportからsupportability回答を受領すること。

回答受領は、Dedicated Role Phase 3の自動Resumeを意味しない。

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
