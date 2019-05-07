import React from 'react';

class ReactChildren extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const App = <div className="ac">
            <div className="child1">children1</div>
        </div>
        console.log(App);
        return (
            <div className="ac">
                <div className="child1">children1</div>
            </div>
        )
    }
}

function Test(props) {
    console.log(props);
    return (
        <div>
            {
                React.Children.map(props.children, (c)=> { 
                    console.log(c);
                    return [[c, c]];
                })
            }
        </div>
    )
}

export default ReactChildren