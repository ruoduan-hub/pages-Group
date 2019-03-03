import React from 'react'
//使用function定义无状态组件
import Style from '@/components/Style'
export default function CmtItem (props) {
    return <div style={Style.item}>
    <h5 style={Style.user}>评论人: {props.name}</h5>
    <p style={Style.content}>评论内容：{props.content}</p>
</div>
}