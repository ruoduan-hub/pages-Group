//固定写法
import React from 'react'
// import React, {component} from 'react'
import ReactDOM from 'react-dom'
import '@/07class-继承'

//class 关键字创建组件
class Movie extends React.Component {
    //构造器
    constructor () {
        super()
        this.state = {
            msg: 'class 创建的组件'
        }
    }
    render(){
        this.state.msg = 'aclass 创建的组件 被修改了 因为他是可读可写的'
        //render 函数的作用是，渲染当前组件所对应的 虚拟DOM元素
        //在class 关键字创建的组件中，如果想使用，外界穿透过来的props参数，不需要接收，直接 this.props.xxx

        //无论是 class还是function 创建的组件，他们的props 都是只读的，不能被重新赋值
        //this.props.name = 'ls'

        return <div>
            {/**在class组件内部，this不是 当前组件的实例对象 */}
            这是 Movie 组件---{this.props.name}
            <li>{this.props.age}</li>
            <li>{this.props.sex}</li>
            <p>{this.state.msg}</p>
        </div>
    }
}

const user = {
    name: 'zs',
    age: '22',
    sex: '男'
}


ReactDOM.render(
    <div>
        123
        <Movie {...user}></Movie>
    </div>
    ,document.getElementById('app'))

 