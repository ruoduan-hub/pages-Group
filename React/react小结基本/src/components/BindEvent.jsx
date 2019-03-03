//#region react中的事件绑定
import React from 'react'
export default class BindEvent extends React.Component {
    constructor() {
        super()
        this.state = {
            mydata : '哈哈',
            name: 'zs',
            age: 18
        }
    }

    render() {
        return <div>
            BindEvent 组件
            <hr />
            {/* <button onClick={function(){alert('ok')}}>按钮</button> */}
            {/* <button onClick={this.myClickFn}>按钮</button> */}
            <button onClick={ ()=>this.show('🚗', '😁', '👩‍💼') }>按钮</button>
            <h3>{this.state.mydata}</h3>
        </div>
    }

    show = (msg1, msg2, msg3)=>{
        //alert('传递过来的参数是：' + msg1 + msg2 + msg3)
        //this.state.mydata = '123'
        //使用React提供的 this.setState({data: xxx}) 对state重新赋值
        this.setState({
            //setState 更新的时候不会覆盖其他状态,而且setState 是异步的需要回调接收结果
            mydata: '123' + msg1 + msg2 + msg3
        }, ()=>console.log(this.state.mydata) )
    }
    // myClickFn (){
    //     alert('ok')
    // }
}
//#endregion