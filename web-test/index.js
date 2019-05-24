const net = require('net');

const content = `HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Type: text/html; charset=UTF-8
Content-Length: 6969
Date: Wed, 10 Apr 2019 06:26:53 GMT
Connection: keep-alive

<html>
	<body>
	<p>你好</p>
	</body>
</html>
`;

const server = net.createServer((c)=>{
	console.log('客户端已经连接');
	c.on('end',()=>{
		console.log('客户端连接断开')
	});
	c.on('data',(data)=>{
		console.log(data.toString());
	});
	console.log("content\n\n"+content);
	c.write(content);
	c.pipe(c);
});

server.on('error',(err)=>{
	throw err;
});

server.listen(80,()=>{
	console.log("服务器已启动");
});