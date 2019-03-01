//固定写法
import React from 'react'
import ReactDOM from 'react-dom'
//导入 hello 组件
// import Hello from './components/Hello.jsx'
// 注意这里的@符号表示项目根目录中的 src 这一层目录
import Hello from '@/components/Hello'

//构造函数的方式创建组件
// function Hello (props) {
//     //return null 则为空 不渲染
//     // props.name = 'zs'
//     console.log(props)
//     return <h1>react hello 组件--- {props.name}--- {props.age}--- {props.sex}</h1>
//     //无论是vue 还是 react 组件中的props 都是只读的 不能重新赋值
// }
const dog = {
    name: '大黄',
    age: 3,
    sex: '雄'
}

ReactDOM.render(<div>
<Hello {...dog}></Hello>
</div>, document.getElementById('app'))

