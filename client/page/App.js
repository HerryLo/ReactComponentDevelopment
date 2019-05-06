import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import loadable from '@loadable/component'

import '../styles/app'
// import ToastExample  from './Toast'
// import ModalExample  from './Modal'
// import LazyImgExample  from './LazyImg'

// 分包加载
const ToastExample = loadable(() => import('./Toast'))
const ModalExample = loadable(() => import('./Modal'))
const LazyImgExample = loadable(() => import('./LazyImg'))

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            type: 'toast',
            navList: [
                {
                   type: 'toast',
                   text: 'toast组件',
                   location: "/"
                },
                {
                    type: 'modal',
                    text: 'modal组件',
                    location: "/modal"
                },
                {
                    type: 'lazyimg',
                    text: 'lazyImg组件',
                    location: "/lazyimg"
                }
            ]
        }
    }

    render() {
        const { navList, type} = this.state;
        return (
            <div className="div">
                <div className="flexDiv">
                {
                    navList.map(item => {
                        return(
                            <div 
                                key={item.type}
                                className={item.type == type?'active':''}>
                                <Link to={item.location}>{item.text}</Link>
                            </div>
                        )
                    })
                }
                </div>
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={ToastExample} />
                        <Route exact path="/modal" component={ModalExample} />
                        <Route exact path="/lazyimg" component={LazyImgExample} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App