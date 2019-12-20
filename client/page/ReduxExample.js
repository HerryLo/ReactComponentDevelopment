import React from 'react';

let $Store = window.$reduxStore;
let $storeState = $Store.getState();

class ReduxExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
        this.addNumber = this.addNumber.bind(this)
    }

    addNumber() {
        $Store.dispatch({
            type: "ADD"
        })
        let { addNumber } = $Store.getState()
        this.setState({
            number: addNumber
        })
    }

    render() {
        let { number } = this.state;
        return (
            <>
                <div>redux 使用：</div>
                <button onClick={this.addNumber} >add</button>
                <div>数字：{number} </div>
            </>
        )
    }
}

export default ReduxExample