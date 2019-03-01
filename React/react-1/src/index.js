//固定写法
import React from 'react'
// import React, {component} from 'react'
import ReactDOM from 'react-dom'
import '@/07class-继承'
import Aaa from './components/aaa'

//class 关键字创建组件
class Movie extends React.Component {

    render(){//render 函数的作用是，渲染当前组件所对应的 虚拟DOM元素
        return <div>
            这是 Movie 组件
        </div>
    }
}



ReactDOM.render(
    <div>
        123
        <Movie></Movie>
        <Aaa></Aaa>
    </div>
    ,document.getElementById('app'))

 