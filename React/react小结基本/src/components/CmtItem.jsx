import React from 'react'
import itemcss from '@/css/cmtitem.css'
//使用function定义无状态组件
import cssobj from '@/css/cmtlist.css'
export default function CmtItem (props) {
    return <div className={itemcss.box}>
    <h1 className={itemcss.title}>评论人: {props.name}</h1>
    <p>评论内容：{props.content}</p>
</div>
}