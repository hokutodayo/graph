# 平面グラフ

## 開発環境の設定

### 前提条件のインストール

1. **Node.js のインストール**

   - Node.js の公式ウェブサイト（https://nodejs.org/ ）からインストーラーをダウンロードし、Node.js と npm をインストールします。
   - Chocolatey のインストールは必要ありません。

2. **Yarn のインストール**

   - Node.js がインストールされた後、コマンドプロンプトで以下のコマンドを実行して Yarn をインストールします：
     ```
     npm install --global yarn
     ```

3. **Webpack のインストール**

   - Yarn を使用して Webpack をインストールします：
     ```
     yarn add webpack webpack-cli --dev
     ```

4. **SweetAlert2 のインストール**
   - アラート、ポップアップ、通知のために SweetAlert2 をインストールします：
     ```
     yarn add sweetalert2
     ```

### コマンド

- **node_modules ディレクトリ**

  - Webpack のインストール時に `node_modules` ディレクトリが作成されますが、`npm install` コマンドを実行することでも再作成することができます。

- **ファイル変更時に自動的にトランスパイル**

  - `npm start` コマンドは、`webpack.config.js` ファイルの設定に基づいてプロジェクトのファイルの変更を監視し、再ビルドを行います。この動作は `webpack.config.js` に設定されているパラメータに依存します。
  - コマンドを実行すると、Webpack がプロジェクトのエントリーポイントから依存関係の解析を開始し、設定に従ってファイルをバンドルします。

- **Webpack を使用した手動ビルド**
  - `yarn webpack --mode development` を使用してプロジェクトを手動でビルドします。これにより `docs` ディレクトリに `bundle.js` が出力されます。

### GitHub Pages へのデプロイ

- 出力フォルダは GitHub Pages での簡単なデプロイを容易にするために `docs` に設定されています。
