# voice-sample-app

# ボイスアプリ複製手順

- app.json の name と slug は書き換える

```
## 手順
ken $ cp -r voice-sample-app [作りたい名前]
$ cd [作りたい名前]
$ cp config/env.sample.ts config/env.ts && rm -rf .git && rm README.md && rm -rf node_module && yarn
$ git init
$ git ad
$ git commit -m "First commit"
## Gitリポジトリ作成し、ReadMe通りにやる
```
