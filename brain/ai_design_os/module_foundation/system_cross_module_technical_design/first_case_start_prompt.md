# First Case Start Prompt｜purchase_motivation → comparison fixed_core Connection

## Target Case

Source Module：purchase_motivation
Consumer Module：comparison
Target Connection：fixed_core Connection

## Purpose

成立済みAuthorityの範囲で、
purchase_motivationが整理するfixed_coreと、
comparisonがInputとして扱いreconfirmationを支援するfixed_coreについて、
Cross-Module Technical Designを開始可能かAuthority Readinessを確認する。

## Formation Target

Authority Readinessが成立した場合に限り、
Current Authorityの範囲でTechnical Design Artifactを形成する。

Authority Readinessが未成立の場合は、
Technical Designを推測開始せずSTOP / RETURN Artifactを形成する。

## Authorized Inputs

START
[System Authority Pack]
brain/system/fixed_core_definition.md
brain/system/product_roles.md
brain/system/product_connection_design.md
brain/system/comparison_role.md
END

START
[Source Module and Product Authority Pack]
brain/modules/purchase_motivation/A_pm.md
brain/modules/purchase_motivation/B_pm.md
projects/iekau/products/purchase_motivation/README.md
projects/iekau/products/purchase_motivation/product_concept.md
projects/iekau/products/purchase_motivation/output_logic.md
END

START
[Consumer Module Authority Pack]
brain/modules/comparison/A_cmp.md
brain/modules/comparison/B_cmp.md
END

START
[Conditional Approved Design / Current State / Technical Observation]
[Paste only when selected under the Case-specific Loading Rule.]
END

START
[PO Decision]
[Paste only if a formally provided PO Decision is received.]
END

## Existing Authority

- purchase_motivationにはfixed_coreを整理し、fixed_core / priority / conditionsを
  Outputとして扱うSource responsibilityが確認されている。
- comparisonにはfixed_coreをInputとして扱い、fixed_core reconfirmationと
  current-decision updateを支援するConsumer responsibilityが確認されている。
- System-level fixed_core definitionが確認されている。

## Reopen Prohibition

以下を新設・変更・再定義してはならない。

- Product Meaning
- Module Responsibility
- fixed_core System definition
- person_reference definition
- identity / anonymous context / Auth / Authorization / RLS
- identifier / persistence / DB schema / runtime / environment
- Subject 3 / Supabase residual investigation

Subject 3のResidualはtriggerなしに再OPENしてはならない。

## Required Observation

開始時点ではImplementation Observationを必須としない。

設計上、具体的なRepository FactがGapになった場合だけ、
Codex / Technical Observationへ対象を限定してRequestする。
ObservationはRepository Factを返すものであり、
Product / System Authorityを返すものではない。

## Authority Readiness Check

以下を確認する。

1. Source fixed_core output meaningがCurrent Authorityで十分か。
2. Consumer fixed_core input / reconfirmation responsibilityがCurrent Authorityで十分か。
3. System AuthorityまたはApproved Current Designに、
   直接 purchase_motivation → comparison fixed_core Connection Authorityがあるか。
4. 対象設計にperson_reference、identity、identifier、persistence、
   security、runtime等の未成立Authorityが必要になるか。
5. Product ScopeまたはPO Decisionの追加要否を、
   Authority Routingへ返すべきGapとして識別する必要があるか。

## Stop Condition

以下の場合、Technical Design Artifactを形成してはならない。

- 直接 purchase_motivation → comparison fixed_core Connection Authorityが未成立
- consumer-side technical input boundaryが未成立
- fixed_core persistence / identifier handlingのtechnical source rangeが必要
- person_reference、identity、Auth、Security、Environment Authorityが必要
- PO DecisionまたはRisk Acceptanceが必要
- 設計に必要なRepository Factが未確認で、限定Technical Observationも未実施

STOP時は次のArtifactを返す。

START
[Authority Readiness Stop / Return Artifact]
Gap:
Missing Authority / Missing Repository Fact:
Authority Owner:
Required Input:
Return Target:
Limited Resume Scope:
END

## Expected Artifact

Authority Readinessが成立した場合：

START
[Cross-Module Technical Design Artifact]
Case:
Source Module:
Consumer Module:
Authorized Source Authority:
Authorized Consumer Authority:
Authorized System / Approved Design Authority:
Technical Connection Scope:
Responsibilities Preserved:
Assumptions: None
Open Gaps:
Validation Inputs:
END

Authority Readinessが未成立した場合：

START
[Authority Readiness Stop / Return Artifact]
Gap:
Missing Authority / Missing Repository Fact:
Authority Owner:
Required Input:
Return Target:
Limited Resume Scope:
END

## Validation Route

Technical Design Artifactが成立した後に限り、
Stage 2 Design Validationへhandoffする。
Validationはdesignを再形成しない。

START
[Technical Design Artifact for Validation]
...
END

Validation後、必要に応じてReview Operationへhandoffする。

## Next Role

Authority Readiness成立後：
System / Cross-Module Technical Design Roleが、
成立済みAuthorityの範囲でTechnical Design Artifactを形成する。

Technical Design Artifact成立後：
Design Validation Stage。

## Return Path

- Product scope / PO Decision / Risk Acceptance：
  Authority Routing / Product Owner
- Module Authority不足：
  対象Module Authorityの責任主体
- System Authority不足：
  System Authorityの責任主体
- Repository Fact不足：
  Codex / Technical Observation
- Identity / Security / Environment Authority不足：
  当該Authorityの責任主体

Authority OwnerがCurrent Artifactで未特定の場合、
Ownerを推測せず「Authority Owner未確認」としてAuthority Routingへ返す。
