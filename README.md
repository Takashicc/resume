# 職務経歴書

## 各種アカウント

<p style="display: flex; gap: 8px">
    <a href="https://github.com/Takashicc"><img src="https://img.shields.io/badge/Takashicc-%23121011.svg?&style=flat-square&logo=Github&logoColor=white" /></a>
    <a href="https://zenn.dev/takashicc" target="_blank"><img alt="Zenn" src="https://img.shields.io/badge/Takashicc-3EA8FF.svg?&style=flat-square&logo=Zenn&logoColor=white" /></a>
</p>

## 技術スキル

|分野|技術・ツール|
|:-:|:-:|
|言語|Go, Java, Rust, Python, TypeScript, JavaScript, Cue, PL/SQL, VBA for Excel|
|クラウド/DevOps|AWS(Cognito, ECS-Fargate/EC2, CDK, CloudFormation, Lambda, S3, RDS, ElastiCache), PlanetScale(MySQL), Momento Cache, GitHub Actions, testcontainers, Renovate, Datadog|

## 職務経歴

### 2023/02 - : 株式会社ambr

#### 2024/04 - : gogh開発

アバター×作業集中アプリ、[gogh](https://gogh.gg)のバックエンド開発に従事。

##### 使用技術

- Golang
- C#
- MySQL
- GitHub Actions
- AWS CDK
- Docker

##### 担当内容

- APIの設計、開発、テスト、運用。
    - Sign in with AppleとCognitoの連携および実装。
        - <https://zenn.dev/ambr_inc/articles/d77b038c51d4f4>
    - 同じ空間で作業できる「スペース」機能の実装。
    - 管理画面からプッシュ通知を予約できる機能の実装。
- CI/CDの構築および改善。
    - testcontainersを導入し、競合を考えずにテストできる機構を用意した。
    - renovateの導入により、ライブラリのバージョンを自動管理できるようにした。
    - ボトルネックを調査し、キャッシュや並列化などにより13分かかっていたCIワークフローが通常でも8分、キャッシュ有効時は5分と大幅な短縮を図ることに成功した。
    - distrolessの導入によりコンテナのイメージサイズを小さくした。
    - GitHub ActionsからAWS認証する方式をアクセスキーからOIDC認証に変更。

#### 2023/02 - 2024/03 : xambrプラットフォーム開発

VRプラットフォーム[xambr](https://xambr.app)の開発に従事。

##### 使用技術

- Golang
- Python
- MySQL
- GitHub Actions
- CloudFormation
- Copilot
- AWS CDK
- Docker

##### 業務内容

- APIの設計、開発、テスト、運用。
    - 運営者権限の設計および実装。
        - CUE言語を導入し、ユーザー・ポリシー・アクション間のリレーショナルなデータ構造を実現。
    - RDS、Redisへ接続する際に踏み台EC2へSSHキーを使っていたが、SessionManagerに乗り換えることで運用コストを減らした。
- CI/CDの構築および改善。
    - もともとE2Eテスト(Tavern)しかやっておらず、LintやFormat、Unit testを実行するようにした。
    - キャッシュも活用するようにし、CIの実行時間を短くした。
    - 本番環境へのデプロイはGitHub Actionsを通して行うが、作成・変更対象のリソースを確認して、承認を通してからデプロイできるように[slack-approval action](https://github.com/Takashicc/slack-approval)を改良し、導入。
- 開発環境の整備
    - [Taskfile](https://taskfile.dev)を導入し、チーム内で頻繁に実行されるコマンドを一元化した。
    - エラーコードがコードとNotionのどちらでも管理されていたため、片方にはあるけどもう片方にはないということが度々あったため、コードから自動的にエラーコードのドキュメントを作成できるようにした。
    - オンボーディング資料やドキュメントの更新。
- ゲームサーバーのインフラの再構成。
    - これまではECS on Fargateだったが、ネットワーク帯域が問題となっていたため、ECS on EC2で再構築した。
- マスターデータを管理するCLIツールのスクラッチ開発。
    - 改善案などを積極的に取り込んで実装。
    - ドキュメントも用意。
- ChatGPT-4が出た際に、Slack×ChatGPT-4ボットを開発。
    - Python+Lambdaで実装。
    - <https://github.com/ambr-tech/chat-gpt-slack>

### 2019/06 - 2022/06 : 株式会社ブレーンナレッジシステムズ

#### 2021/10 - 2022/06 : 販売管理システムのリースアップによるシステム更改

BeAd販売管理システムパッケージのカスタマイズ開発、製造、単体・結合試験を担当。

##### 使用技術

- Java
- Oracle
- BeAd

#### 2020/03 - 2021/09 : 社内システムの保守や人事評価システムの改修

intra-martを基盤とした社内システムのバグ調査や修正を担当。  
バグチケットを元に素早く正確な調査結果をまとめ、修正から試験までを実施。  
社内システムの期替わりにおいては、社員データなどの入れ替えを担当。マニュアルが古い状況の中、独自にマニュアルを作成し、自動化ツールを作成。  
また、人事評価システムの改修においてはExcelで管理された人事評価を集計するExcelマクロの仕様追加や、コードを深く読むことで見つかった既存バグを修正。

##### 使用技術

- Java
- Oracle
- Excel VBA
- intra-mart

#### 2019/10 - 2020/02 : 募集人システムのTERASOLUNA2系から5系への移行作業

TERASOLUNAを基盤としたシステムのアップグレード作業。  
製造、単体試験を担当し、共通部品の実装やバッチ処理の部品を実装。  
単体試験ではJUnitとDBUnitを用いた試験を実施。

##### 使用技術

- Java
- Oracle
- TERASOLUNA

#### 2019/06 - 2019/09 : 購買システムのPL/SQLからJavaへのマイグレーション

PL/SQLで作成された購買システムをJavaへマイグレーション。  
製造、単体・結合試験を担当し、Macchinetta Frameworkを基盤に開発。  
開発はPL/SQLで実装されたソースを読み解き、Javaに落とし込んでいくことで機能を実装。

##### 使用技術

- Java
- Oracle
- PL/SQL
- JSP
- Macchinetta Framework

## 業務外活動

### OSS

- [slack-approval](https://github.com/Takashicc/slack-approval)
    - GitHub Actionでワークフロー内にSlack承認を組み込むカスタムアクション。
    - フォークする形で機能追加や言語のリプレイスなどを行っている。

### チーム開発

- [ondo](https://github.com/team-ondo)
    - 高齢者の熱中症死亡が増加する社会課題を解決するため、家庭内の温湿度異常をモニタリングできるIoT＋Webアプリ。
    - テックリードとして技術選定やコードレビューなどに携わった。

### アウトプット

- Zenn
    - <https://zenn.dev/takashicc>

- GitHub
    - <https://github.com/Takashicc>

## 保有資格

<!-- textlint-disable ja-technical-writing/max-kanji-continuous-len -->
- 実用英語技能検定2級
<!-- textlint-enable -->
- Java SE 7/8 Bronze
- Python3エンジニア認定基礎試験
- AWS Certified Cloud Practitioner
