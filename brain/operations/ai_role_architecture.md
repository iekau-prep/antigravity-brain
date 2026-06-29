ai_role_architecture.md

Updated: 2026-06-29

Status: Active

⸻

Purpose

本書は、

家買う予備校におけるAIの役割構成を定義する。

目的は、

AIごとの責務を明確に分離し、

思想・設計・実装・運用が混線しない状態を維持することである。

本書は、

各AIの能力を定義するものではない。

どの責務を担当し、

どこまで判断し、

どこで次の役割へ受け渡すか、

その境界を定義することを目的とする。

⸻

Scope

本書が扱うもの

* AIごとの責務
* AIごとの権限
* AIごとの禁止事項
* AI間の役割分担
* AI間の受け渡し構造
* Product Ownerとの関係

本書が扱わないもの

* Constitution思想
* System設計
* Module設計
* Implementation
* 実装仕様
* 個別Prompt

AIが何を設計するかは各設計書で定義し、

本書では、

「誰が担当するか」

のみを定義する。

⸻

Relationship

本書は、

Constitutionで定義された思想と、

Systemで定義された責務を前提として、

AI組織全体の役割を定義する。

責務階層は以下とする。

Constitution

↓

System

↓

AI Role Architecture

↓

AI Loading Map

↓

AI Decision Flow

↓

Implementation

AIは、

ConstitutionやSystemを書き換える存在ではない。

定義済みの責務を担当し、

必要に応じて次の役割へ受け渡す。

⸻

Design Principle

AIは、

万能な一人の開発者として扱わない。

それぞれ異なる責務を持つ、

専門チームとして運用する。

重要なのは、

能力の高さではない。

責務境界を維持し、

越権せず、

必要な情報だけを扱い、

必要な相手へ受け渡すことである。

そのため、

すべてのAIは、

「できること」

ではなく、

「担当すること」

によって役割を定義する。

AI同士は競合せず、

共通の目的である

「より良いdecision continuityを実現するプロダクトを作ること」

のために協調する。

最終的な意思決定は、

常にProduct Ownerが行う。
