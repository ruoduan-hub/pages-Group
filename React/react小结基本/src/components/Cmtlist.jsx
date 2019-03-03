import React from 'react'
import CmtItem from '@/components/CmtItem'
import cssobj from '@/css/cmtlist.css'
import bootcss from 'bootstrap/dist/css/bootstrap.css'
console.log(bootcss);


//使用class 定义父组件
export default class CmtList extends React.Component {
    constructor () {
        super()
        this.state = {
            CommentList: [
                { id:1, name: 'zs', content: '哈哈哈' },
                { id:2, name: 'as', content: '安抚哈' },
                { id:3, name: 'bg', content: '艾弗森' },
                { id:4, name: 'yu', content: '挨个'   },
                { id:5, name: 'kl', content: '提供商' },
                { id:6, name: 'ty', content: '啊方个' },
            ]
        }
    }
    render () {
        return <div>
            <h1 className={cssobj.title}>评论列表组件</h1>
            <button className={[bootcss.btn, bootcss['btn-primary']].join(' ')}>按钮</button>
            {/* <button className='btn btn-primary'>按钮</button> */}
            {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem> )}
        </div>
    }
}