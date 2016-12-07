
var wee = require('http');

// 檔案模組 fs
var flyer = require('fs');

// serverMe 可換名字
function serverMe(res, path, contentType, responseCode) {
    if (!responseCode) {
        responseCode = 200;
    }
    flyer.readFile(__dirname + path, function(err, data) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 -internal error');
        } else {
            res.writeHead(responseCode, { 'Content-Type': 'contentType' });
            res.end(data);
        }
    });
}

wee.createServer(function(req, res) {
    var play = req.url;
    switch (play) {
        case '/':
            serverMe(res, '/puthere/index.html', 'text/html');
            break;
        case '/about':
            serverMe(res, '/puthere/about.html', 'text/html');
            break;
        default:
            serverMe(res, '/puthere/404.html', 'text/html', 404);
            break;
    }
}).listen(3000);

console.log('Server started! At:');
console.log('-- http://localhost:3000 --');

