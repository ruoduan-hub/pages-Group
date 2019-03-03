import React from 'react'

export default function Hello(props) {
    console.log(props);
    return <div>hello组件--{props.name}--- {props.age}--- {props.sex}</div>
    
}

//把组件暴露出去
//export default Hello