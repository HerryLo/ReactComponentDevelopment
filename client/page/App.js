import React from 'react';
import '../styles/app'
import ToastExample  from './Toast'
import ModalExample  from './Modal'
import LazyImgExample  from './LazyImg'
class App extends React.Component {
    constructor(props){
        super(props)
        this.NavTab = this.NavTab.bind(this);
        this.ClickNavTab = this.ClickNavTab.bind(this);
        this.state = {
            type: 'toast',
            navList: [
                {
                   type: 'toast',
                   text: 'toast组件'
                },
                {
                    type: 'modal',
                    text: 'modal组件'
                },
                {
                    type: 'lazyimg',
                    text: 'lazyImg组件'
                }
            ]
        }
    }

    NavTab() {
        const { type } = this.state;
        switch(type){
            case 'toast':
                return <ToastExample />
            case 'modal':
                return <ModalExample />
            case 'lazyimg':
                return <LazyImgExample />
        }
    }

    ClickNavTab(t) {
        this.setState({
            type: t
        })
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
                                className={item.type == type?'active':''}
                                onClick={()=> {this.ClickNavTab(item.type);return;}}>
                                {item.text}
                            </div>
                        )
                    })
                }
                </div>
                {this.NavTab()}
            </div>
        )
    }
}

export default App