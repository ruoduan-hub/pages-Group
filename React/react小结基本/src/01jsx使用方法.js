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
    newArr.push(<h5 key={item}>{item}</h5>) 
})
//jsx 控制的区域内 遇到{}则解析为js

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
    {/* {arr}{'Warning: Each child in a list should have a unique "key" prop.  key问题'} */}
    <hr />
    { newArr }
    <hr />
    { arrStr.map((item,i) => <h3 key={i}>{item}~</h3>) }
    <hr />
    <p className="adc">111111</p>
    <label htmlFor="ooo">label标签</label>
    </div>, document.getElementById('app'))

