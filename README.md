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

express準備

``` 
$ npm install express --save
```

publicフォルダ作成

```
$ mkdir public
```

server.js作成

```
$ touch server.js
```

```
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// Serve static files
app.use(express.static(__dirname + '/public'));

// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);
```

ローカルサーバ起動

```
$ npm run start
```
