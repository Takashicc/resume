# 職務経歴書

## 各種アカウント

<p style="display: flex; gap: 8px">
    <a href="https://github.com/Takashicc"><img src="https://img.shields.io/badge/Takashicc-%23121011.svg?&style=flat-square&logo=Github&logoColor=white" /></a>
    <a href="https://zenn.dev/takashicc" target="_blank"><img alt="Zenn" src="https://img.shields.io/badge/Takashicc-3EA8FF.svg?&style=flat-square&logo=Zenn&logoColor=white" /></a>
</p>

## 職務要約

バックエンドエンジニアとして、Go / TypeScript / Javaを中心に、API設計・開発・テスト・運用、CI/CD改善、クラウドインフラの構築・運用改善に従事してきました。

現職では、アバター×作業集中アプリ「gogh」およびVRプラットフォーム「xambr」のバックエンド開発を担当しています。認証連携、権限設計、Cloudflare Workersを用いたAPI実装、GitHub ActionsによるCI/CD改善、AWS環境の運用改善、ゲームサーバーのインフラ再構成など、プロダクト開発と開発基盤改善の両面に取り組んできました。

特に、CI実行時間の短縮、Testcontainers導入、Renovate導入、GitHub ActionsのOIDC認証移行、Slack承認付きデプロイフローの整備など、チームが継続的に開発しやすい状態をつくることを意識して取り組んでいます。

## 技術スキル

|分野|技術|
|:-|:-|
|主な開発言語|Go, TypeScript, Java|
|実務経験あり|Python, Rust, C#, JavaScript, CUE, PL/SQL, VBA|
|バックエンド/API|REST API, Hono, Amazon Cognito, MySQL, SQLite|
|クラウド/インフラ|Amazon ECS, Amazon EC2, AWS Fargate, AWS Lambda, Amazon S3, Amazon RDS, Amazon ElastiCache, AWS Systems Manager Session Manager, Cloudflare Workers, KV, D1, Durable Objects|
|DevOps/運用改善|GitHub Actions, AWS CDK, AWS CloudFormation, AWS Copilot, Docker, Testcontainers, Renovate, Datadog|

## 職務経歴

### 2023/02 - : 株式会社ambr

#### 2024/04 - : gogh開発

アバター×作業集中アプリ「[gogh](https://gogh.gg)」のバックエンド開発に従事。

##### 使用技術

- Go
- C#
- TypeScript
- MySQL
- SQLite
- GitHub Actions
- AWS CDK
- Cloudflare Workers
- Hono
- Docker

##### 担当領域・実装

- Goを用いたAPIの設計・開発・テスト・運用を担当
- Sign in with AppleとAmazon Cognitoの連携を設計・実装
    - <https://zenn.dev/ambr_inc/articles/d77b038c51d4f4>
- 同じ空間で作業できる「スペース」機能のバックエンド実装を担当
- 管理画面からプッシュ通知を予約できる機能を実装
- Cloudflare Workers / Honoを用いた問い合わせAPIを設計・実装
- Testcontainersを導入し、テストごとに独立したDB環境を利用できる仕組みを整備
    - ローカルおよびCI環境におけるテスト間の競合を防止
    - 安定した自動テスト実行基盤を構築
- Renovateを導入し、依存ライブラリ更新の自動化を実現
- GitHub Actionsのボトルネックを調査し、キャッシュ・並列化・ワークフロー構成を改善
    - CI実行時間を約13分から通常時約8分、キャッシュ有効時約5分まで短縮
    - 開発サイクルの高速化に貢献
- Distrolessを導入し、コンテナイメージサイズを削減
- GitHub ActionsからAWSへ認証する方式をアクセスキーからOIDC認証へ移行
    - 長期アクセスキーの管理を不要にし、セキュリティと運用性を改善
- モバイル向けビルドパイプラインをAzure PipelinesからGitHub Actions self-hosted runnerへ移行
    - 既存ワークフローを見直し、ビルドパイプラインを再設計

#### 2023/02 - 2024/03 : xambrプラットフォーム開発

VRプラットフォーム「xambr」のバックエンド開発および開発基盤改善。

##### 使用技術

- Go
- Python
- MySQL
- GitHub Actions
- CloudFormation
- AWS Copilot
- AWS CDK
- Docker

##### 担当領域・実装

- Goを用いたAPIの設計・開発・テスト・運用を担当
- 運営者権限の設計・実装を担当
- CUEを導入し、ユーザー・ポリシー・アクション間の関係性をコード上で管理できる仕組みを構築
- RDS / Redis接続時の踏み台EC2運用を見直し、AWS Systems Manager Session Managerへ移行
    - SSHキー管理を不要にし、運用負荷を削減
- CI/CDの構築・改善を担当
    - 既存のE2Eテストに加え、Lint / Format / Unit TestをCIで実行するよう整備
    - キャッシュを活用し、CI実行時間を短縮
- GitHub Actionsによる本番デプロイにSlack承認フローを導入
    - デプロイ時のリソース変更内容を確認し、承認後に反映できる仕組みを構築
    - [slack-approval action](https://github.com/Takashicc/slack-approval)を改良し、実務に導入
- 開発環境を整備
    - Taskfileを導入し、チーム内で頻繁に利用するコマンドを一元化
    - コードとNotionで二重管理されていたエラーコードについて、コードからドキュメントを自動生成できる仕組みを構築
    - オンボーディング資料や開発ドキュメントを更新
- ゲームサーバーのインフラを再構成
    - ECS on Fargateで発生していたネットワーク帯域課題に対し、ECS on EC2構成へ再設計
- マスターデータ管理用CLIツールをスクラッチ開発
    - 改善要望を取り込みながら機能追加
    - 利用方法や運用手順のドキュメントも整備
- Slack向けGPT-4連携ボットを開発
    - Python / AWS Lambdaで実装
    - <https://github.com/ambr-tech/chat-gpt-slack>

### 2019/06 - 2022/06 : 株式会社ブレーンナレッジシステムズ

Java / Oracleを用いた業務システム開発、保守、マイグレーションに従事しました。販売管理システムのカスタマイズ開発、社内システムの保守、人事評価システムの改修、TERASOLUNAのバージョン移行、PL/SQLからJavaへのマイグレーションなどを担当しました。

#### 主な担当業務

- Java / Oracleを用いた業務システムの製造、単体試験、結合試験を担当
- TERASOLUNA / Macchinetta Frameworkを用いたWebアプリケーションを開発
- PL/SQLで実装された既存処理を読み解き、Javaへ移行
- intra-martを基盤とした社内システムのバグ調査、修正、試験を担当
- JUnit / DBUnitを用いた単体試験を実施
- Excel VBAを用いた人事評価データ集計マクロを改修
- 古い運用マニュアルをもとに作業内容を整理し、手順書や自動化ツールを作成

#### 使用技術

- Java
- Oracle
- PL/SQL
- JSP
- Excel VBA
- TERASOLUNA
- Macchinetta Framework
- intra-mart
- JUnit
- DBUnit

## 業務外活動

### OSS

#### [slack-approval](https://github.com/Takashicc/slack-approval)

GitHub Actionsのワークフロー内にSlack承認フローを組み込むカスタムアクションです。
既存OSSをフォークし、機能追加、保守、言語リプレイスなどを行っています。実務でも本番デプロイ時の承認フローとして活用しました。

### チーム開発

#### [ondo](https://github.com/team-ondo)

高齢者の熱中症死亡が増加する社会課題を解決するため、家庭内の温湿度異常をモニタリングできるIoT + Webアプリケーションを開発しました。
テックリードとして、技術選定、設計方針の策定、コードレビューなどを担当しました。

## アウトプット

### Zenn

<https://zenn.dev/takashicc>

### GitHub

<https://github.com/Takashicc>

## 保有資格

<!-- textlint-disable ja-technical-writing/max-kanji-continuous-len -->
- 実用英語技能検定2級
<!-- textlint-enable -->
- Java SE 7/8 Bronze
- Python3エンジニア認定基礎試験
- AWS Certified Cloud Practitioner
