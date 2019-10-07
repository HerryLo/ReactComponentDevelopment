import React, { Component } from 'react'

const A = ()=> {
    return 1;
};

class ReactRender extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <>
                <p>1212</p>
                <p>4234</p>
            </>
        )
    }
}

export default ReactRender