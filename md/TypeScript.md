**TypeScript**是一种由[微软](https://zh.wikipedia.org/wiki/微軟)开发的[自由](https://zh.wikipedia.org/wiki/自由軟體)和[开源](https://zh.wikipedia.org/wiki/开源)的编程语言。它是[JavaScript](https://zh.wikipedia.org/wiki/JavaScript)的一个严格超集，并添加了可选的静态类型和使用看起来像基于类的[面向对象编程](https://zh.wikipedia.org/wiki/物件導向編程)语法操作 Prototype。

随着互联网的发展，web应用代码量越来越大，js动态类型语言的一些优点，在开发大型js应用的时候也成为了缺点，在此背景之下微软开发了TS。

#### TS带来了什么？

类

TS中的类，使javascript程序员将能够使用基于类的面向对象的方式。TS允许开发者现在就使用这些特性，并且编译后的JavaScript可以在所有主流浏览器和平台上运行，而不需要等到下个JavaScript版本。

```typescript
class Persion{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    say(){
        return "hello "+this.name;
    }
}
let p = new Persion("world");
```

接口

TypeScript的核心原则之一是对值所具有的*结构*进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

```typescript
//ts
interface MyInterface{
	a:number;
	b:string
}
//编译成js

//什么也没有，接口仅在类型检查是起作用，但是TS接口的存在并不仅仅是为了类型检查。
```

静态类型检查可以尽早的发现逻辑错误，而不是上线后才发现。vscode 有很好的代码提示功能，提高开发效率的同时还能避免书写错误。

```typescript
interface Data{
	id:string;
	reward_description:string;
}
let data:Data = {id:"1",reward_description:"奖励提示"};
console.log(data.reward_desc);//ts会在"编译"时候报错
let data = {id:"1",reward_description:"奖励提示"};
console.log(data.reward_desc);//js在执行时候报错

//js
[1]/2 = 0.5;[1,2]/2 = NaN;
//本来要写[].length/2，但是写成[]/2，js并不会报错
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

ts加入了枚举类型

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

TS支持装饰器

*装饰器*是一种特殊类型的声明，它能够被附加到[类声明](https://www.tslang.cn/docs/handbook/decorators.html#class-decorators)，[方法](https://www.tslang.cn/docs/handbook/decorators.html#method-decorators)， [访问符](https://www.tslang.cn/docs/handbook/decorators.html#accessor-decorators)，[属性](https://www.tslang.cn/docs/handbook/decorators.html#property-decorators)或[参数](https://www.tslang.cn/docs/handbook/decorators.html#parameter-decorators)上。 装饰器使用`@expression`这种形式，`expression`求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。

例如，有一个`@sealed`装饰器，我们会这样定义`sealed`函数：

```typescript
function sealed(target) {
    // do something with "target" ...
}
```

例如，通过`@Inject`装饰器来实现依赖注入，解耦Game，User:

```typescript
class Game{
    public user:User = new User();
}

function Inject(target){
    //
}
class Game{
    @Inject
    public user:User;
}
```

#### TS是一门面向对象的编程语言

当面向过程面对复杂的系统，负载的世界时，如何“更好的理解和抽象”编程问题，变得更加重要。通过面向对象语言的特点“封装、继承、多态”，让程序分析和设计能容纳更大的编程范围和系统规模，也让程序设计人员更好的理解和抽象提供了非常重要的作用。

#### TS更方便重构

vscode，webstorm提供了「重构变量名」、「移动文件的时候同步修改引入该文件的地方」、「调整方法参数签名」等功能

#### TS是如何运行的

```shell
npm install -g typescript
tsc a.ts
```

TS并不是作为一个新的浏览器支持的脚本语言直接运行的，需要通过typescript命令行，将.ts文件编译成.js文件，然后直接引用就可以了。