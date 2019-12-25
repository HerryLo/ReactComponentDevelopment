import React from 'react';
import Router from './router/Router'

const routers = new Router();

import './styles/app'
class App extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log(this);
        return (
            <div className="div content">
                {routers}
            </div>
        )
    }
}

export default App