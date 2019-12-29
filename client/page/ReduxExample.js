import React, { useContext, useMemo } from 'react';
import { connect, ReactReduxContext } from "react-redux";

let $Store = window.$reduxStore;
let $storeState = $Store.getState();

function Add(props) {
    let aa = useContext(ReactReduxContext)
    console.log(aa);

    return (
        <a>123123</a>
    )
}

function ReduxExample(props) {
    console.log(props);
    let { number } = props

    let addNumber = ()=> {
        let { dispatch } = props;
        dispatch({
            type: "ADD"
        })
    }

    let aa = useContext(ReactReduxContext)
    console.log(aa);
    return (
        <>
            <div>redux 使用：</div>
            <button onClick={addNumber} >add</button>
            <div>数字：{number} </div>
            <Add />
        </>
    )
}

const mapStateToProps = (state)=> {
    return  {
        number: state.number
    }
}

let reduxExampleApp = connect(mapStateToProps)(ReduxExample)

console.log(reduxExampleApp);

export default reduxExampleApp