import React from 'react';
import { Route, Switch } from "react-router-dom";
import loadable from '@loadable/component';

// 分包加载
const ToastExample = loadable(() => import('../page/Toast'))
const ModalExample = loadable(() => import('../page/Modal'))
const LazyImgExample = loadable(() => import('../page/LazyImg'))
const ReactChildren = loadable(() => import('../page/ReactChildren'))
const ReactRender = loadable(() => import('../page/ReactRender'))
const ReduxExample = loadable(() => import('../page/ReduxExample'))

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={ToastExample} />
            <Route exact path="/modal" component={ModalExample} />
            <Route exact path="/lazyimg" component={LazyImgExample} />
            <Route exact path="/reactChildren" component={ReactChildren} />
            <Route exact path="/reactRender" component={ReactRender} />
            <Route exact path="/reduxExample" component={ReduxExample} />
        </Switch>
    )
}