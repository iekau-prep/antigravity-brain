# role_input_contract.md

Status: Draft

Purpose

本書は、各Roleへ渡す最低限のInput Contractを定義する。

本書は、Roleの判断方法を定義しない。

本書は、Role間で受け渡す入力不足を防ぎ、
GPTチャット運用上でAIが推測せず進行できる状態を形成する。

---

Scope

本書が扱うもの

* Builderへの最低限入力
* Design Validationへの最低限入力
* Reviewへの最低限入力
* Implementationへの最低限入力
* Implementation Validationへの最低限入力
* Maturity管理への最低限入力
* Role間Input Contract

本書が扱わないもの

* Role判断方法
* AI設計プロトコル
* System思想
* Product思想
* 各Role責務
* Implementation
* Git操作

---

Common Input Contract

すべてのRoleへ渡す入力は、最低限以下を含む。

* Request ID
* Request Purpose
* Target
* Scope
* Allowed Change
* Forbidden Change
* Out of Scope
* Expected Output
* Transfer Information

不足がある場合、AIは推測せず停止する。

---

Builder Input Contract

Builderへ渡す最低限入力

* Request ID
* Request Purpose
* Design Target
* Design Scope
* Allowed Change
* Forbidden Change
* Out of Scope
* Reference Documents
* Expected Output
* Transfer Information

Builderは、Design Formationのみを行う。

---

Design Validation Input Contract

Design Validationへ渡す最低限入力

* Request ID
* Validation Target
* Builder成果物
* 確定Design差分
* Design Scope
* Forbidden Change
* Validation Criteria
* Expected Output
* Transfer Information

Design Validationは、Builder成果物の妥当性確認に必要な入力のみを受け取る。

---

Review Input Contract

Reviewへ渡す最低限入力

* Request ID
* Review Target
* 対象成果物
* Review Scope
* Forbidden Change
* Review Criteria
* Expected Output
* Transfer Information

Reviewは、指定された対象成果物とScopeのみを扱う。

---

Implementation Input Contract

Implementationへ渡す最低限入力

* Request ID
* Implementation Target
* 確定Design差分
* 実装対象本文
* 対象ファイル
* Allowed Change
* Forbidden Change
* Out of Scope
* Expected Output
* Transfer Information

Implementationは、確定Design差分以外を実装対象にしない。

---

Implementation Validation Input Contract

Implementation Validationへ渡す最低限入力

* Request ID
* Validation Target
* 確定Design差分
* Implementation成果物
* 対象ファイル
* Validation Scope
* Forbidden Change
* Expected Output
* Transfer Information

Implementation Validationは、確定Design差分とImplementation成果物の一致確認を行う。

---

Maturity Management Input Contract

Maturity管理へ渡す最低限入力

* Request ID
* Maturity Target
* 対象成果物
* Maturity Scope
* 更新対象
* 更新禁止対象
* 根拠情報
* Expected Output
* Transfer Information

Maturity管理は、指定された成熟対象と更新範囲のみを扱う。

---

Transfer Information

Role間Transfer Informationは、最低限以下を含む。

* From
* To
* Next Stage
* Transfer Purpose
* Transfer Target
* Transfer Scope
* Transfer Status

Transfer対象が実装または検証を含む場合は、以下も含める。

* 確定Design差分
* 実装対象本文
* 対象ファイル
* 禁止事項

---

Rule

Input Contractに不足がある場合、AIは推測して補完しない。

不足情報がRole実行に必要な場合、AIは停止し、
不足項目をTransfer Informationに明記する。

本書は、Role判断方法を変更しない。

本書は、Role責務を変更しない。

本書は、Role間で渡す最低限入力のみを定義する。
