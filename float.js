let result = [];
function fun(a,b,result){
    let temp = a%b;
    let c = Math.floor(temp*10/b);
    let index = result.indexOf(c);
    if(index==-1){
        result.push(c);
        fun((temp*10)%b,b,result);
    }else{
        let first = result.indexOf(c);
        result.push(c);
        let arr = result.slice(first+1);
        if(arr.length>1&&arr.length%2==0){
            if(arr.slice(0,arr.length/2).join("")===arr.slice(arr.length/2).join("")){
                result.pop();
            }else{
                fun((temp*10)%b,b,result);
            }
        }else{
            fun((temp*10)%b,b,result);
        }
    }
}

// fun(3,9,result);
// console.log(result.slice(result.length/2));

let arr = [];
fun(1,13,arr);
console.log(arr.slice(arr.length/2));