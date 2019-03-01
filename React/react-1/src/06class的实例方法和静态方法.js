function Person(name, age) {
    this.name = name
    this.age = age
}
Person.info = 'aaa'//静态属性
var p1 = new Person('小明', '18')
Person.prototype.say = function () {
    console.log('is Person 实例方法')
}
Person.show = function () {
    console.log('Person的静态方法')
}
console.log(p1,Person.info)
p1.say()//实例方法
Person.show()// 静态方法

console.log('-----------------------------------------------------------');
/* 注意 
1.在class { } 区间内，只能写 构造器 静态方法和静态属性、实例方法
*/
class Animal { 
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    //动物的实例方法
    jiao () {
        console.log('Animal 的实例方法')
    }
    static info = 'eee'//推荐方法
    static show() {
        console.log('Animal 的静态方法')
    }
} 

const a1 = new Animal('大黄', 3)
console.log(a1,Animal.info);
a1.jiao()
Animal.show()