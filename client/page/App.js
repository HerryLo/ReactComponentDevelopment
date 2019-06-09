import React from 'react';
import Router from './Router'

const routers = new Router();

import '../styles/app'
class App extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="div content">
                {routers}
            </div>
        )
    }
}

export default App