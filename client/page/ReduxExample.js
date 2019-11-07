import React from 'react';

var Promise = require('promise');

var p = new Promise(function (resolve, reject) {
    // resolve(12)
    setTimeout(()=> {
        console.log(12);
        resolve(12)
    },1000)
})
p.then((result) => {
    console.log(1)
})
p.then((result) => {
    console.log(2)
});

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