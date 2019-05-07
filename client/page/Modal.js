// Modal 组件示例
import React from 'react';
import Modal from '../../components/modal'
import NavList from '../component/NavList'

const { alert, confirm, prompt } = Modal
class ModalExample extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <NavList></NavList>
                <button onClick={() => { 
                    alert({ contentText: '已退出登录！' }) 
                }}>alert</button>
                <button onClick={() => {confirm({
                    contentText: '确定要删除吗？',
                    onOk() { console.log('文件已删除！') },
                    onCancel() { console.log('用户已取消操作。') }
                }) 
                }}>confirm</button>
                <button onClick={() => { 
                    prompt({
                        contentText: '请输入用户名：',
                        onOk(result) { console.log(`您的用户名已修改为：${result}`) },
                        onCancel() { console.log('用户已取消操作。') }
                    })
                }}>prompt</button>
            </div>
        )
    }
}

export default ModalExample