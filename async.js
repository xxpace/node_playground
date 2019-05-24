const fs = require('fs')
const crypto = require('crypto');

function readFile(url){
	console.log('read file');
	return new Promise(function(reslove,reject){
		console.log('async read file');
		fs.readFile(url,function(err,res){
			if(err){
				reject(err)
				return
			};
			reslove(res.toString());
		})
	})
	
}

function createHash(data){
	let fsHash = crypto.createHash("sha1");
	fsHash.update(data);
	return fsHash.digest('hex');
}

console.log('begin---');
async function run(){
	console.log('step 1');
	let data = await readFile('./cc.js');
	console.log('step 2');
	console.log(createHash(data));
}
console.log('end---');


run()
.catch(function(err){
	console.log("err",err);
});