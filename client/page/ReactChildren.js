import React from 'react';

class ReactChildren extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Test>
                <p>1</p>
                <p>2</p>
            </Test>
        )
    }
}

function Test(props) {
    console.log(props)
    return (
        <>
            {
                React.Children.map(props.children, (c)=> { 
                    {/* console.log(c); */}
                    return [[c, c]];
                })
            }
        </>
    )
}

export default ReactChildren