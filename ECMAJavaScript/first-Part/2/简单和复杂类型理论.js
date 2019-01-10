//原始数据类型：number，string，boolean，undefined，null，object
//基本类型（简单类型），值类型：number，string，boolean
//复杂类型（引用类型）：object
//空类型：undefined，null

//值类型的值在那一块空间中存储？==栈中存储
//引用类型的值在那一块空间中存储?==对象在堆上存储，地址在栈上存储
// var num = 10;
// var num2 = num;//他们直接传递的是值
//值类型之间传递，传递的是值
//引用类型直接传递，传递的是引用（地址）；


function f1(x) {
    x=100;
}
var num=10;
f1(num);
console.log(num);//10

var obj={
  name:"小明"
};
function f2(obj2) {
    obj2.name="小红";
}
console.log(obj.name);//小明
f2(obj);//这里是吧对象的引用（地址）传给obj了，所以他们2个就都指向小红了
console.log(obj.name);//小红