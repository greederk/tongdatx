// // 导入http 模块
// var http = require('http');
// // 开启监听事件，每次请求这个都会触发事件
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     // 设置相应编码
//     res.write('<head><meta charset="utf-8" /></head>');
//     // 设置响应体信息
  
//     // 结束事件
//     res.end('nodejs初体验')
// }).listen(8095,'127.0.0.1')

var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req,res){
    if(req.url !=='favicon.ico'){
        var out = fs.createWriteStream('./request.log')
        out.write('客户端请求的方式:'+req.method+'\r\n')
        out.write('客户端请求的url字符串为:'+req.url+'\n\r')
        out.write('客户端请求头对象为:'+JSON.stringify(req.headers)+'\n\r')
        out.end('客户端请求http版本是'+req.httpVersion)
    }
    // res.writeHead(200,{'Content-Type':'text/html'})
    // res.write('<head><meta charset="utf-8" /></head><body><span>空白窗口</span></body>')

    res.end()
})
server.timeout=1000
server.listen(9528,'127.0.0.1')
server.on('connection',function(){
    console.log('服务器已经被连接')
})