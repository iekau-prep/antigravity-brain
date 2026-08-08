# AI Terminology Dictionary

## Purpose

本書は、AIがRepository・Artifact・Module・Role・Stage・略称を推測せず一意に解釈するための辞書である。

本書は名称対応のみ扱う。

思想・責務・仕様は定義しない。

---

# Module

| 略称 | Module |
|------|--------|
| td | type_diagnosis |
| pm | purchase_motivation |
| rvb | rent_vs_buy |
| pr | property_reader |
| ls | loan_safety |
| cmp | comparison |
| dos | decision_OS |
| eps | external_property_search |

---

# Foundation Artifact

| Artifact | Meaning |
|----------|---------|
| A_td | type_diagnosis Foundation |
| A_pm | purchase_motivation Foundation |
| A_rvb | rent_vs_buy Foundation |
| A_pr | property_reader Foundation |
| A_ls | loan_safety Foundation |
| A_cmp | comparison Foundation |
| A_dos | decision_OS Foundation |
| A_eps | external_property_search Foundation |

---

# Foundation Documents

| Artifact | Meaning |
|----------|---------|
| A | Foundation |
| B | Role Profile |
| C | Foundation Pack |
| D | Decision / Current State Pack |

---

# Formation Stage

| Name |
|------|
| Discovery |
| Builder Input Sheet |
| Builder |
| Design Validation |
| Review |
| Implementation |
| Implementation Validation |
| Formation Complete |

---

# Role

| Name |
|------|
| Product Owner |
| General Design GPT |
| Review |
| Builder |
| Codex |

---

# Repository

| Path | Meaning |
|------|---------|
| brain/system/ | System SoT |
| brain/modules/ | Module Foundations |
| projects/ | Product Repositories |

---

# Common Terms

| Term | Meaning |
|------|---------|
| SoT | Source of Truth |
| Repository | Repository内実体 |
| Foundation | Module Identity |
| Module | Product単位 |
| Artifact | Formation成果物 |
| Completion Criteria | Formation成立条件 |

---

# Field Definitions

| Field | Meaning |
|-------|---------|
| Module Name | AIが識別する名称。表示名やGPT名を含む場合がある。 |
| Target Module | Repository上で対象となるModule名。 |

---

# Naming Rule

Module Foundationは以下の命名規則を使用する。

```
A_<module abbreviation>
```

例

```
A_pm
```

↓

```
purchase_motivation Foundation
```

```
A_ls
```

↓

```
loan_safety Foundation
```

```
A_pr
```

↓

```
property_reader Foundation
```

---

# Context-specific Naming

本PJでは以下の名称を優先して解釈する。

| Term | This Project | Do Not Interpret As |
|------|--------------|---------------------|
| A | Foundation Artifact | Architecture |
| B | Role Profile | Build |
| C | Foundation Pack | Configuration |
| D | Decision / Current State Pack | Document |
| td | type_diagnosis | 一般的略称 |
| pm | purchase_motivation | Project Management |
| rvb | rent_vs_buy | 一般的略称 |
| pr | property_reader | Pull Request |
| ls | loan_safety | 一般的略称・未定義名称 |
| cmp | comparison | Compare Command |
| dos | decision_OS | DOS (Operating System) |
| eps | external_property_search | EPS形式・画像形式など |

---

# Case Sensitivity

本PJでは大文字・小文字を区別して扱う。

| Expression | Meaning |
|-----------|---------|
| STATE | Concept |
| state | Data / State Value |
| decision_OS | Official Module Name |
| decision_os | Repository Directory（使用している場合） |
