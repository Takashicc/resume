# 職務経歴書

## 各種アカウント

<p style="display: flex; gap: 8px">
    <a href="https://github.com/Takashicc"><img src="https://img.shields.io/badge/Takashicc-%23121011.svg?&style=flat-square&logo=Github&logoColor=white" /></a>
    <a href="https://zenn.dev/takashicc" target="_blank"><img alt="Zenn" src="https://img.shields.io/badge/Takashicc-3EA8FF.svg?&style=flat-square&logo=Zenn&logoColor=white" /></a>
</p>

## 職務要約

バックエンドエンジニアとして、Go、TypeScript、Javaを用いたAPIの設計から開発、テスト、運用まで担当してきました。
機能開発に加え、認証と認可、データの永続化、並行処理やリクエストの再送を考慮した設計、CI/CDやクラウド環境の改善にも取り組んでいます。

現職の株式会社ambrでは、アバター×作業集中アプリ「gogh」などのバックエンド開発を担当しています。
GoによるAPI開発に加え、TypeScript、Cloudflare Workers、Durable Objectsを用いたマルチユーザー機能を開発しています。
複数ユーザーの並行操作を想定し、状態管理、データ整合性、アクセス制御を考慮した設計に取り組んでいます。

開発基盤の改善では、Testcontainersによるテスト環境の整備や、GitHub ActionsからAWSへの認証方式の見直しを担当しました。
CI実行時間は約13分から通常時約8分、キャッシュ有効時約5分に短縮しました。

## 技術スキル

- 主な開発言語：Go、TypeScript、Java
- その他の実務経験：Python、Rust、C#、JavaScript、CUE、PL/SQL、VBA
- バックエンドとAPI：REST API、Hono、Valibot、OpenAPI
- データベースと永続化：MySQL、SQLite、Oracle、Drizzle ORM
- 認証とセキュリティ：Amazon Cognito、JWT、OIDC、AWS Secrets Manager
- クラウド基盤：Amazon ECS、Amazon EC2、AWS Fargate、AWS Lambda、Amazon S3、Amazon RDS、Amazon ElastiCache、AWS Systems Manager Session Manager、Cloudflare Workers、KV、D1、Durable Objects、Hyperdrive
- テスト：Vitest、Testcontainers、JUnit、DBUnit
- DevOpsと運用：GitHub Actions、AWS CDK、AWS CloudFormation、AWS Copilot、Docker、Renovate、Datadog

## 職務経歴

### 2023/02 - 現在：株式会社ambr

#### 2024/04 - 現在：gogh開発

アバター×作業集中アプリ「[gogh](https://gogh.gg)」のバックエンド開発を担当しています。
GoによるAPI開発、TypeScriptによるマルチユーザー機能と問い合わせAPIの開発、テスト基盤とデプロイ基盤の改善に取り組んでいます。

##### 使用技術

Go、TypeScript、C#、MySQL、SQLite、Hono、Valibot、Drizzle ORM、Vitest、Cloudflare Workers、Durable Objects、Hyperdrive、GitHub Actions、AWS CDK、Docker、Testcontainers

##### 担当業務

###### アプリケーションの設計と開発

- Goを用いたAPIの設計、開発、テスト、運用を担当
- TypeScript、Cloudflare Workers、Durable Objectsを用いたマルチユーザー機能のバックエンドを設計し、実装
    - ドメインモデルを設計し、状態管理と永続化の処理を実装
    - Drizzle ORMを用いて、SQLiteとMySQLのスキーマ、マイグレーション、リポジトリ層を整備
    - 並行操作やリクエストの再送を考慮し、データの整合性を維持して重複処理を防ぐ仕組みを実装
- TypeScript側のAPI定義からOpenAPI定義を生成し、Goクライアントとの連携を整備
    - 生成したOpenAPI定義の差分をCIで検知する仕組みを追加
- 管理画面からプッシュ通知を予約できる機能を実装

###### セキュリティと信頼性

- Sign in with AppleとAmazon Cognitoの認証連携を設計し、実装
    - JWTの署名、発行者、対象（audience）、有効期限を検証し、nonceの照合と有効期限の管理を実装
    - [実装に関する技術記事](https://zenn.dev/ambr_inc/articles/d77b038c51d4f4)
- ユーザーの権限や利用状態に基づくアクセス制御を実装
    - 操作の実行可否とデータの参照範囲を制御
- 並行リクエストやキャッシュ障害時の挙動を考慮し、レート制限の共通処理を実装
- 外部サービスの認証情報をAWS Secrets Managerで管理する構成へ移行
- リクエスト処理を見直し、認証前の不要なリソース消費を抑制
- 問い合わせAPIのログに機密情報が含まれないよう処理を見直し、操作結果を追跡できる監査ログを追加

###### 開発基盤の整備と運用改善

- Testcontainersを導入し、テストごとに独立したDB環境を利用できる仕組みを整備
    - ローカル環境とCI環境でテスト間の競合を防止
- Vitestを用い、TypeScriptのドメイン処理、Durable Objects、MySQL連携を検証するテスト基盤を整備
- Renovateを導入し、依存ライブラリの更新を自動化
- GitHub Actionsのボトルネックを調査し、キャッシュの活用、処理の並列化、ワークフロー構成の見直しを実施
    - CI実行時間を約13分から通常時約8分、キャッシュ有効時約5分まで短縮
- Distrolessを導入し、コンテナイメージサイズを削減
- GitHub ActionsからAWSへの認証をアクセスキーからOIDCへ移行
    - 長期アクセスキーの管理を不要にし、セキュリティと運用性を改善
- モバイル向けビルドパイプラインをAzure PipelinesからGitHub Actionsのself-hosted runnerへ移行
    - 既存ワークフローを見直し、ビルドパイプラインを再設計

#### 2023/02 - 2024/03：xambrプラットフォーム開発

VRプラットフォーム「xambr」のバックエンド開発と開発基盤の改善を担当しました。
API開発、運営者権限の設計、CI/CDの構築と改善、クラウド環境の運用改善に取り組みました。

##### 使用技術

Go、Python、CUE、MySQL、GitHub Actions、AWS CloudFormation、AWS Copilot、AWS CDK、Docker

##### 担当業務

###### アプリケーションの設計と開発

- Goを用いたAPIの設計、開発、テスト、運用を担当
- 運営者権限を設計し、実装
    - CUEを導入し、ユーザー、ポリシー、アクションの関係をコード上で管理する仕組みを構築
- マスターデータ管理用CLIツールを新規開発
    - 利用者の改善要望を取り込みながら機能を追加し、利用方法と運用手順のドキュメントも整備

###### インフラの運用改善

- Amazon RDSやRedisへの接続に用いる踏み台EC2の運用を見直し、AWS Systems Manager Session Managerへ移行
    - SSHキー管理を不要にし、運用負荷を削減
- ゲームサーバーのインフラを再構成
    - ネットワーク帯域の課題に対応するため、Amazon ECSの実行環境をAWS FargateからAmazon EC2へ移行する構成を設計

###### 開発基盤とCI/CD

- CI/CDの構築と改善を担当
    - 既存のE2Eテストに加え、Lint、フォーマットチェック、単体テストをCIで実行するよう整備
    - キャッシュを活用し、CI実行時間を短縮
- GitHub Actionsによる本番デプロイにSlack承認フローを導入
    - リソース変更内容を確認し、承認後に反映する仕組みを構築
    - [slack-approval](https://github.com/Takashicc/slack-approval)を改良して実務に導入
- Taskfileを導入し、チームで頻繁に利用するコマンドを一元化
- コードとNotionで二重管理されていたエラーコードについて、コードからドキュメントを自動生成する仕組みを構築
- オンボーディング資料や開発ドキュメントを更新

### 2019/06 - 2022/06：株式会社ブレーンナレッジシステムズ

JavaとOracleを用いた業務システムの開発、保守、移行に従事しました。
販売管理システムのカスタマイズ開発、社内システムの保守、人事評価システムの改修、TERASOLUNAのバージョン移行、PL/SQLからJavaへの移行などを担当しました。

#### 主な担当業務

- JavaとOracleを用いた業務システムの実装、単体テスト、結合テストを担当
- TERASOLUNA、Macchinetta Frameworkを用いたWebアプリケーションを開発
- PL/SQLで実装された既存処理を読み解き、Javaへ移行
- intra-martを基盤とした社内システムの不具合調査、修正、テストを担当
- JUnit、DBUnitを用いた単体テストを実施
- Excel VBAを用いた人事評価データ集計マクロを改修
- 古い運用マニュアルをもとに作業内容を整理し、手順書や自動化ツールを作成

#### 使用技術

Java、Oracle、PL/SQL、JSP、Excel VBA、TERASOLUNA、Macchinetta Framework、intra-mart、JUnit、DBUnit

## 業務外活動

### OSS

#### [slack-approval](https://github.com/Takashicc/slack-approval)

GitHub Actionsのワークフロー内にSlack承認フローを組み込むカスタムアクションです。
既存OSSをフォークし、機能追加、保守、実装言語の変更などを行っています。
実務でも本番デプロイ時の承認フローとして活用しました。

### チーム開発

#### [ondo](https://github.com/team-ondo)

高齢者の熱中症による死亡の増加という課題に取り組むため、家庭内の温度や湿度の異常を監視するアプリケーションを、IoTとWebを組み合わせて開発しました。
テックリードとして、技術選定、設計方針の策定、コードレビューなどを担当しました。

## アウトプット

### Zenn

<https://zenn.dev/takashicc>

### GitHub

<https://github.com/Takashicc>

## 保有資格

- 実用英語技能検定2級
- Java SE 7/8 Bronze
- Python3エンジニア認定基礎試験
- AWS Certified Cloud Practitioner
