//固定写法
import React from 'react'
import ReactDOM from 'react-dom'

//创虚拟DOM元素
//参数 1.创建的元素类型，字符串 2.对象||null，表示当前dom属性 
//3.(子节点，包括其他虚拟dom,文本子节点) 
//参数n ： 其他子节点
// const myh1 = React.createElement('h1',{id: 'myh1', title: "this is a h1"},'hello react!')
// const mydiv = React.createElement('div', null, 'div父元素', myh1)
//使用ReactDOM 吧虚拟dom渲染到页面
//参数1要渲染的那个虚拟dom，参数2 指定页面上一个容器


//使用babel，转换js中的这些标签
//JSX 语法： 在js中混合写入html代码，符合XML规范的js
const mydiv = <div id="dv" title="react div">
hello react 
<h1>嵌套里面的h1</h1>
</div>

ReactDOM.render(mydiv, document.getElementById('app'))
