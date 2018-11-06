import React from 'react';
import '../styles/app'
import ToastExample  from './Toast'
import ModalExample  from './Modal'
import LazyImgExample  from './LazyImg'
class App extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                {/* <ToastExample />
                <ModalExample /> */}
                <LazyImgExample />
            </div>
        )
    }
}

export default App