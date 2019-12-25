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

// class ReduxExample extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             number: 0
//         }
//         this.addNumber = this.addNumber.bind(this)
//     }

//     addNumber() {
//         let { dispatch } = this.props;
//         dispatch({
//             type: "ADD"
//         })
//     }

//     render() {
//         let { number } = this.props;
//         return (
//             <>
//                 <div>redux 使用：</div>
//                 <button onClick={this.addNumber} >add</button>
//                 <div>数字：{number} </div>
//                 <Add />
//             </>
//         )
//     }
// }

const mapStateToProps = (state)=> {
    return  {
        number: state.number
    }
}

export default connect(mapStateToProps)(ReduxExample)