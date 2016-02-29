# d3-floorplan-sample
<img src="http://f.st-hatena.com/images/fotolife/t/tyoshikawa1106/20160229/20160229173713.png" />

<a href="http://dciarletta.github.io/d3-floorplan/" target="_blank">http://dciarletta.github.io/d3-floorplan/</a>

## Node
初期設定

```
$ npm init
```

```
{
  "name": "demo_node_app",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.13.4"
  }
}
```

server.js作成

```
$ touch server.js
```

publicフォルダ作成

```
mkdir public
```

express準備

``` 
$ npm install express --save
```

ローカルサーバ起動

```
$ npm run start
```
