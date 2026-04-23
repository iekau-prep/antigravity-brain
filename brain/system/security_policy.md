# security_policy.md

■ 原則
・RLSは必ずON
・開発中はallow_all_devを使用
・本番でallow_all_devは禁止

■ フェーズ
① 開発
RLS ON + allow_all_dev

② Auth導入後
auth.role() = 'authenticated'

③ 本番
auth.uid() = user_id

■ 禁止事項
・RLS OFF
・service_roleのフロント使用
・allow_all_devの本番使用

■ 最重要
セキュリティは段階導入する
