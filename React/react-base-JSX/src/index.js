//固定写法
import React from 'react'
import ReactDOM from 'react-dom'

let a = 10, str = '你好，react', boo = true, title = 'adad'
const eml = <h2>红红火火</h2>
const arr = [
    <h1>111</h1>,
    <h2>222</h2>,
    <h3>333</h3>
]
const arrStr = ['哈哈', '啦啦', '嘻嘻', '嘿嘿']
const newArr = []
arrStr.forEach(item =>{
    newArr.push(<h5>{item}</h5>) 
})
//jsx 控制的区域内 遇到{}则解析为

ReactDOM.render(<div>
    {a + 2}
    <hr />
    { str }
    <hr />
    { boo?'条件为真':'条件为假' }
    <hr />
    <p title={title}>这是p标签</p>
    { eml }
    <hr />
    {arr}{'Warning: Each child in a list should have a unique "key" prop.  key问题'}
    <hr />
    { newArr }
    <hr />
    { arrStr.map(item => <h3>{item}~</h3>) }
    </div>, document.getElementById('app'))

