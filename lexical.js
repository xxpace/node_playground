let code = `let $abc = 1;`;
// `function abc(){
//     let b = 1;
//     return b+3;
// }`
// `a.b()`
const names = /[(a-z)|$]/;
const numbers = /[0-9]/;
const keywords = ["var","function","let","return","switch","break","continue"];
const symbols = ",:(){}?=.[]<>;";
const Type = {
    "Keyword":1,
    "Identifier":2,
    "Punctuator":3,
    "Numeric":4,
}

function token(code){
    let tokens = [];
    let length = code.length;
    let current = 0;
    while(current<length){
        if(names.test(code[current])){
            let str = code[current];
            current++;
            while(names.test(code[current])){
                str += code[current];
                current++;
            }
            tokens.push({
                type:keywords.indexOf(str)==-1?Type.Identifier:Type.Keyword,
                val:str,
            });
        }
        if(symbols.indexOf(code[current])!=-1){
            tokens.push({
                type:Type.Punctuator,
                val:code[current],
            });
        }
        if(numbers.test(code[current])){
            let str = code[current];
            current++;
            while(names.test(code[current])){
                str += code[current];
                current++;
            }
            tokens.push({
                type:Type.Numeric,
                val:str,
            });
        }
        current++;
    }
    return tokens;
}
console.log(token(code));