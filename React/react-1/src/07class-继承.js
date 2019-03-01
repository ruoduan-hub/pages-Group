class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
        
    }

    sayhello () {
        console.log('父类的hello方法')
    }
}
// class 类中，可以使用extends 关键字，实现，子类继承父类
// 语法 class 子类 extends 父类{}
class American extends Person {
    constructor (naem, age) {
    /**问题1： 为什么一定要在 constructor 中调用 super ？
     * 因为，一个子类，通过extends 关键字继承了父类，那么，在这个子类的 constructor 构造函数中，必须优先调用一下 super();
     * 问题2：super 是什么东西？
     * super是一个函数，而且他是父类的 构造器，子类的super，其实就是父类中的 constructor 构造器的一个引用;
     * 问题3：为什么调用了 super()，之后name和age都变成了undefined？ 
     * 实例化的时候 要把 参数 name age 传递进去 给 constructor再给super;
     */
        super(naem, age)
    }
}
const a1 = new American('Jack', '20')
console.log(a1)
a1.sayhello()

class Chinese extends Person {
    constructor (name, age, IDnumber) {
        super(name, age)
        // 语法规范 在子类中， this 只能放在super 之后
        this.IDnumber = IDnumber
    }
}
const c1 = new Chinese('张三', '23', '123456')
console.log(c1)
c1.sayhello()