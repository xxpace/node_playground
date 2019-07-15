### 什么是TypeScript

**TypeScript**是一种由[微软](https://zh.wikipedia.org/wiki/微軟)开发的[自由](https://zh.wikipedia.org/wiki/自由軟體)和[开源](https://zh.wikipedia.org/wiki/开源)的编程语言。它是[JavaScript](https://zh.wikipedia.org/wiki/JavaScript)的一个严格超集，并添加了可选的静态类型和使用看起来像基于类的[面向对象编程](https://zh.wikipedia.org/wiki/物件導向編程)语法操作 Prototype。

随着互联网的发展，web应用代码量越来越大，js动态类型语言的一些优点，在开发大型js应用的时候也成为了缺点，在此背景之下微软开发了TS。

### TS带来了什么？

类型系统，类，接口，命名空间，泛型

静态类型检查可以尽早的发现逻辑错误，而不是上线后才发现。

```typescript
interface Data{
	id:string;
	reward_description:string;
}
let data:Data = {id:"1",reward_description:"奖励提示"};
console.log(data.reward_desc);//ts会在"编译"时候报错
let data = {id:"1",reward_description:"奖励提示"};
console.log(data.reward_desc);//js在执行时候报错
```

命名空间很好的解决了，js全局变量名污染的问题，方便组织代码。

```typescript
//ts
namespace egret{
	export class DisplayObject{
        
    }
}
//相当于js
window.egret = {};
window.egret = DisplayObject(){};
```

ts加入了枚举

```typescript
//ts
enum Direction{
	Up = 1,
	Down,
	Left,
	Right
}
//js需要这样实现
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));

```

