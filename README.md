# typescript 分享

## 基本类型
`string`,`number`,`Array`

## 实例
```
let isBool:boolean =false

let str:string ="str"

let str2:string =`str ---> ${str}`

let numb:number =123

let arr :number[] =[1,2,3]

let arr2 :Array<number> =[2,3,4]

enum Color {Red,Green}

let c:Color =Color.Green

<!--任意类型-->
let something:any 
```

## 编译后
```
var isBool = false;
var str = "str";
var str2 = "str ---> " + str;
var numb = 123;
var arr = [1, 2, 3];
var arr2 = [2, 3, 4];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
})(Color || (Color = {}));
var c = Color.Green;
```

