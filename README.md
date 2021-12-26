# voice-sample-app

# ボイスアプリ複製手順
- .gitignoreや.expo以外のファイル、ディレクトリをコピーし、新規のプロジェクトへペーストする
- app.jsonのnameとslugは書き換える

```
## 手順
ken $ cp -r voice-sample-app [作りたい名前]
$ cd [作りたい名前]
$ cp config/env.sample.ts config/env.ts
$ rm -rf node_module && yarn
$ rm -rf .git
$ git init
$ git ad
$ git commit -m "First commit"
## Gitリポジトリ作成し、ReadMe通りにやる
```
