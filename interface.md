# 接口

```
    TypeScript 接口与Golang的接口非常类似 都是 “鸭式辨型法”，区别是Golang通过方法确定接口， TypeScript通过方法与属性。
    接口作用是定义契约，定义物体应该有的“外形”
    不用关心内部细节的实现
```

# 简单的开始
```
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);


<!--使用接口-->
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```

## 可选属性
```
interface SquareConfig {
  color?: string;
  width?: number;
}
```

## 只读属性
```
interface Point {
    readonly x: number;
    readonly y: number;
}
```

## 函数类型
```
interface SearchFunc {
  (source: string, subString: string): boolean;
}

<!--带属性的函数类型-->
interface SearchFunc {
  (source: string, subString: string): boolean;
  proto:string
}


let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  if (result == -1) {
    return false;
  }
  else {
    return true;
  }
}

mySearch.proto ="something"
```

## 可索引的类型,数组类型
```
interface StringArray {
  [index: number]: string;
}
```

##  类类型
```
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
```

## 类静态部分与实例部分的区别

```
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
```


##  扩展接口
```
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```


## 混合类型
```
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

