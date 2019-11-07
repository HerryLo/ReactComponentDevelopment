import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers} from 'redux'
import { BrowserRouter } from "react-router-dom";
import App from './App'

// action
const ADD = 'ADD';

// Reducer
function addNumber(state = 0, action) {
    console.log(state, action)
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
window.$reduxStore = createStore(storeApp);

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
)