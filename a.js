//8d308d3070b996468d3067d2808658f996467396739667d27396964673964f0d8d309646     8  
//634c      4  
//634c53c1739670b996468d30808653c18d3096f667d24f0d53c196f653c167d24f0d           89 


// const crypto = require("crypto");
// const hmac = crypto.createHmac('sha256', 'secret-key');
// hmac.update('8');
// console.log(hmac.digest('hex')); // 80f7e22570...

let chinaObj = {
	"零":0,
	"壹":1,
	"贰":2,
	"叁":3,
	"肆":4,
	"伍":5,
	"陆":6,
	"柒":7,
	"捌":8,
	"玖":9,
	"点":".",
}

function getChina(value){
	for(let key in chinaObj){
		if(chinaObj[key]==value){
			return key;
		}
	}
}


let obj = {};
let numObj = {};
function consoleInfo(info,source){
	let list = [];
	for(let i=0;i<info.length;i+=4){
		let temp = info.substr(i,4),
			value = parseInt("0x"+temp,16),
			key = ""+value;
		if(!obj[key]){
			obj[key] = 1;
		}else{
			obj[key]+=1;
		}
		list.push([value,temp,value%source,value/source,Math.sqrt(value),info.length/4,source,source.toString().length])
	}
	let str =  source.toString(),
		key = "";
	for(let j=0;j<str.length;j++){
		key = str[j];
		if(!numObj[key]){
			numObj[key] = 1;
		}else{
			numObj[key]+=1;
		}
	}
	list.sort((a,b)=>a[0]-b[0]);
	list.forEach(item=>{
		console.log(item.join(" : "));
	})
	console.log("-------------------");
}

function consoleCode(info,source){
	let value = info,
	str = "";
	for(let i=0;i<value.length;i+=4){
		let temp = value.substr(i,4),
			key = parseInt("0x"+temp,16);
		str+=chinaObj[codeObj[key]];
	}
	let a = Math.sqrt(Math.pow(source,3));
	console.log(source,"-----",str,"------",str.length,"-----",a,"------",a.toString().length,"---",a.toString()===str,"---");
}

consoleInfo("96f6",0);
consoleInfo("58f9",1);
consoleInfo("8d3070b9634c8d30634c80868d3067d258f98d30808667d28086964658f9739696f667d2",2);
consoleInfo("4f0d70b958f97396964658f94f0d8d3080868d308d3067d296f69646964653c158f9",3);
consoleInfo("634c",4);
consoleInfo("58f958f970b958f9634c96f653c153c17396634c634c67d280867396634c73964f0d",5);
consoleInfo("58f9808670b9964673969646739653c1634c80864f0d964696467396739696f696469646",6);
consoleInfo("58f9634c70b94f0d8d3096f68d304f0d739658f967d267d280864f0d8d3058f953c19646",7);
consoleInfo("8d3067d2",9);

let num = 1,
	codeObj = {};
for(let key in obj){
	console.log("index--->",num++,"--key-->",key,"--value-->",obj[key],String.fromCharCode(key));
	codeObj[key] = String.fromCharCode(key);
}

for(let key in numObj){
	console.log("word--->","--key-->",key,"--value-->",numObj[key]);
}

consoleCode("96f6",0);
consoleCode("58f9",1);
consoleCode("8d3070b9634c8d30634c80868d3067d258f98d30808667d28086964658f9739696f667d2",2);
consoleCode("4f0d70b958f97396964658f94f0d8d3080868d308d3067d296f69646964653c158f9",3);
consoleCode("634c",4);
consoleCode("58f958f970b958f9634c96f653c153c17396634c634c67d280867396634c73964f0d",5);
consoleCode("58f9808670b9964673969646739653c1634c80864f0d964696467396739696f696469646",6);
consoleCode("58f9634c70b94f0d8d3096f68d304f0d739658f967d267d280864f0d8d3058f953c19646",7);
consoleCode("8d3067d2",9);



function encode(value){
	console.log("encode--->",value);
	var newValue = Math.sqrt(Math.pow(value,3)),
		newValue = newValue.toString(),
		str = "";
	for(let i=0;i<newValue.length;i++){
		str+=(getChina(newValue[i]).charCodeAt(0).toString(16));
	}
	return str;
}

function decode(info){
	console.log("decode--->",info);
	let value = info,
	str = "";
	for(let i=0;i<value.length;i+=4){
		let temp = value.substr(i,4),
			key = parseInt("0x"+temp,16);
		str+=chinaObj[codeObj[key]];
	}
	return Math.round(Math.pow(Math.pow(parseFloat(str),2),1/3));
}

console.log(encode(100000010));

console.log(decode("58f958f94f0d53c170b99646634c739667d253c18d307396634c67d258f99646964667d2"));