import React from 'react'
export default class BindEvent extends React.Component {
    constructor() {
        super()
        this.state = {
            mydata : '',
            name: 'zs',
            age: 18
        }
    }

    render() {
        return <div>
            BindEvent 组件
            <hr />
            <button onClick={ ()=>this.show('🚗', '😁', '👩‍💼') }>按钮</button>
            <h3>{this.state.mydata}</h3>
            {/* 如果只把文本框的value绑定state状态而不提供onChange处理函数的话，提供readOnly变成一个只读的文本框 */}
            {/* <input readOnly type="text" style={ {width:'100%'} } value={this.state.mydata} /> */}
            <input ref="txt" onChange={ (e)=>this.txtChange(e) } type="text" style={ {width:'100%'} } value={this.state.mydata} />
        </div>
    }
    //监控文本框的change事件
    txtChange = (e)=>{
        // console.log(this.refs.txt.value)
        // console.log(e)
        const newVal = e.target.value
        this.setState({
            mydata: newVal
        })
    }

    show = (msg1, msg2, msg3)=>{
        this.setState({
            mydata: '123' + msg1 + msg2 + msg3
        }, ()=>console.log(this.state.mydata) )
    }

}