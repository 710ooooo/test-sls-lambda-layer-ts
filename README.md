# Serverless Framework Lambda Layer テスト

## コマンド

### レイヤー用関数の esbuild とレイヤー用 node_modules のコピー

```
npm run build
```

### デプロイ

serverless に AWS の Config がない場合は、--aws-profile をコマンドに追加するか Config を実施する

```
npm run deploy
```
