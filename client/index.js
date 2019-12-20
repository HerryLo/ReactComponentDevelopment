import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers} from 'redux'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import 'babel-polyfill';
import { Provider } from 'react-redux'

// action
const ADD = 'ADD';

// Reducer
function addNumber(state = 0, action) {
    switch (action.type) {
        case ADD:
            return ++state;
        default:
            return state
    }
}

// Reducer
function number(state = 0, action) {
    console.log(state, action)
    switch (action.type) {
        case ADD:
            return ++state;
        default:
            return state
    }
}

// 合并Reducer
let storeApp = combineReducers({
    addNumber,
    number
})

// createStore创建store
let $reduxStore = createStore(storeApp);

window.$reduxStore = $reduxStore

render(
    <Provider store="{{$reduxStore}}">
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)