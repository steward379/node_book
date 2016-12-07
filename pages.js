// 導入 http 模組
var hi = require('http');

// 以 http 建立伺服器
hi.createServer(function(req, res) {
	// request 使用者傳的 respond 伺服器回傳
    var place = req.url;
    switch (place) {
        case '/':
        // 200 表示網站正常
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('index page');
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('about me');
            break;
        default:
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('404 -not found');
            break;
    }
}).listen(3000);
