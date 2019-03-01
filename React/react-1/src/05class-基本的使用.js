function Person(name, age) {
    this.name = name
    this.age = age
}
Person.info = 'aaa'//静态属性
var p1 = new Person('小明', '18')
console.log(p1,Person.info)

console.log('-----------------------------------------------------------');

class Animal { 
    //这是类中的构造器
    //每一个类都有一个构造器，如果没有手动指定，内部会自动有空的构造器，类似于 constructor() {}
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    static info = 'eee'//推荐方法
} 

const a1 = new Animal('大黄', 3)
console.log(a1,Animal.info);