Function.prototype.call_1 = function(thisObj,...args){
	if(thisObj instanceof Object){
		let source = thisObj['__fun__'];
		thisObj['__fun__'] = this;
		let result = thisObj['__fun__'](...args);
		if(source){
			thisObj['__fun__'] = source;
		}else{
			delete thisObj['__fun__'];
		}
		return result;
	}else{
		this(...args);
	}
}

var a = 100;
var obj = {a:1};
function run(info){
	console.log(this.a,info);
}

var arrowFun = (info)=>{
	console.log("arrowFun",this.a,info);
}

run.call(null,200);
run.call(obj,200);
run.call_1(null,200);
run.call_1(obj,200);

arrowFun.call_1(obj,300);