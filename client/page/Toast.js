// Toast 组件示例
import React from 'react';
import Toast from '../../components/toast'
import NavList from '../component/NavList'
class ToastExample extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <NavList></NavList>
                <button onClick={() => { Toast.info('普通提示') }}>普通提示</button>
                <button onClick={() => { Toast.success('成功提示') }}>成功提示</button>
                <button onClick={() => { Toast.warning('警告提示') }}>警告提示</button>
            </div>
        )
    }
}

export default ToastExample