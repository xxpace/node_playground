
Function.prototype.call_1 = function(thisObj,...args){
	let source = this.toString(),
	target = thisObj?"thisObj.":"";
	if(thisObj){
		let index = source.indexOf("{")+1;
		source = source.slice(0,index)+"with(thisObj){"+source.slice(index);
		source+="}";
	}
	while(source.indexOf("this.")!=-1){
		source = source.replace("this.",target);
	}
	console.log(source);
	return eval("("+source+")(...args)")
}

var a = 2;
function run(info){
	console.log(this.a,info);
	console.log(this.a);

	return function(){
		return info;
	}
}

let obj = {a:1};
run.call(obj,200);

// let fun = run.call_1(null,200);
// console.log(fun());

let arrFun = (info)=>{
	console.log("arrowFun",this.a,info);
}

arrFun.call(obj,300);
// arrFun.call_1(obj,300);