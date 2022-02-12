
// 建立 node server
var express = require('express');
var app = express();


// 當網頁為（/ : 根目錄，首頁）時， server 回傳 Hello 到頁面上
app.get('/', function (req, res) {
    res.send('Hello !!!');
})

// server 相關設定
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at 'http://%s:%s'", host, port);
})