# PDFの生成

Bun 1.4.4以降とGoogle Chrome 131以降をインストールします。
macOSでは`/Applications/Google Chrome.app`内の実行ファイルを使います。
Chromeの場所が異なる場合は、`CHROME_PATH`に実行ファイルのパスを指定します。
日本語フォントはmacOS標準のヒラギノを使います。LinuxではNoto Sans CJK JPなどをインストールしてください。

リポジトリのルートで実行します。

```sh
vp install
task generate-pdf
```

本文の[README.md](/README.md)から`README.pdf`を生成します。
保存先を変える場合は`task generate-pdf -- /tmp/resume.pdf`のように指定します。
スタイル、用紙サイズ、余白、ページ番号は[style.css](style.css)で設定します。
バッジ画像の取得にはネットワーク接続が必要です。

整形・Lint・型チェックは`vp check`で実行します。
