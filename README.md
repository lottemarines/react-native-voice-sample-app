# voice-sample-app

# ボイスアプリ複製手順
- .gitignoreや.expo以外のファイル、ディレクトリをコピーし、新規のプロジェクトへペーストする
- app.jsonのnameとslugは書き換える
- .gitignoreはファイルを開いて、コピーし、新規のプロジェクトへペーストする
- .envファイルは適宜作成する
- rm -rf node_module && yarn　でインストールする

```
## 手順
ken $ cp -r voice-sample-app [作りたい名前]
$ cd [作りたい名前]
$ cp config/env.sample.ts config/env.ts
$ rm -rf node_module && yarn
```