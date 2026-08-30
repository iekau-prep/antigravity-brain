# LINE-connected Production Release Operation

## Purpose

本書は、LINE-connected Module を Production 一般ユーザー経路まで安全に到達させる際に再利用する、platform-aware Operational Knowledge を保持する。

新Lifecycle、新Role、新しい Production Gate を形成しない。
既存 Generic Operations を置き換えず、Product / System Authority を再定義しない。

## Existing Authority and Operation Reuse

### Identity / Continuity Authority

Identity / Continuity の Meaning は [user_data_strategy.md](../system/user_data_strategy.md) を Formal Authority とする。

本書では以下を再定義しない。

- anonymous continuity
- `person_reference`
- `internal_id`
- verified external identity
- System Session
- no automatic merge
- fail closed

本書は、Production operation においてこれらへの Operational Verification Connection のみを扱う。

### Generic Operations

以下を再形成しない。

- [Production Reflection Operation](production_reflection_operation.md)：Production readiness / reflection gate、evidence、scope、STOP、transfer
- [Git Push Operation](git_push_operation.md)：authorized normal push、final preflight、post-push remote reflection
- [Deployment Observation Operation](deployment_observation_operation.md)：deployment / revision observation、result transfer、independent Completion decision をしない境界
- [Git Reflection Operation](git_reflection_operation.md)：validated scope の local Git reflection、result transfer
- [Record Operation](record_operation.md)：lifecycle current-state / process-history recording

## Development / Production DB Governance

Reusable Operational Rule：

- Development / Production Supabase を分離する
- Production DB formation source は Repository migration とする
- Development DB を Production へ copy しない
- Exact Production Project を確認する
- migration history を apply 前後で確認する
- manual SQL repair を通常の成功 route にしない

Product / Migration Design 本文、case-specific migration version、case-specific Supabase Project Ref は保持しない。

## Supabase Production Migration Operation

```text
Repository migration readiness
↓
CLI authentication
↓
Exact Production project link
↓
remote migration history observation
↓
dry-run / equivalent safe preflight
↓
Explicit Production DB Execution Authorization
↓
formal migration apply
↓
remote migration history verification
↓
final DB state read-only verification
```

Migration execution authority は別途明示的に受領する。
本書は Migration Design、case-specific migration 内容、Secret 値を形成・保持しない。

## Production Runtime Readiness

以下を case-specific Secret Value を保持せず確認する。

- Production Base Origin
- required Production environment variable presence
- Production service target correspondence
- LINE Production callback と Production Origin の対応
- external provider callback registration
- Production build / runtime preflight

## LINE-connected Production Release Connection

既存 Generic Operations へ、platform-specific evidence を接続する。

```text
Production DB readiness
↓
Runtime readiness
↓
External integration readiness
↓
LINE general-user availability
↓
authorized Git push
↓
Production deployment observation
↓
Fresh Production Full Runtime E2E
↓
Final runtime verification
↓
Production Release Close
```

これは新しい Lifecycle Stage ではない。

## Fresh Production E2E Pattern

```text
Fresh anonymous context
↓
Module-specific flow
↓
Module Result / pre-LINE state
↓
explicit LINE connection
↓
LINE authentication
↓
Production callback
↓
System Session resolution
↓
anonymous continuity claim / binding
↓
authoritative module context restoration
↓
Post-LINE state
↓
continuity verification
```

Module-specific pre-LINE flow、Result wording、Product logic は各 Module SoT に委ねる。
`purchase_motivation` 固有の Q1-Q10-2、`fixed_core`、Result wording を全Module共通仕様へ昇格しない。

## Failure / Diagnostic Pattern

- Production failure を manual repair で通過させない
- まず read-only diagnostic を行う
- Product / Authority Gap と Implementation / Runtime Gap を分離する
- 原因未確定時に推測修正しない
- correction 後は fresh context で re-test する
- Blocking Gap と Non-blocking residual を分離する
- Non-blocking residual だけで成立済み Production Release を自動再OPENしない

## Boundary

本書は以下を扱わない。

- Product / System Authority の変更
- identity / continuity meaning の再定義
- Generic Operations の再形成
- case-specific Project Ref、LINE Channel ID、Deployment Commit、migration version の固定
- Secret 値
- case-specific UI wording
- 新Lifecycle、新Role、新Gate
