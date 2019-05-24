const net = require('net');

const client = net.createConnection({port:80},()=>{
	console.log('connecton to server!');
	client.write('world!\r\n');
});

client.on('data',(data)=>{
	console.log(data.toString());
	client.end();
});

client.on('end',()=>{
	console.log('disconnectd from server');
})