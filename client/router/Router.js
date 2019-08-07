import React from 'react';
import { Route, Switch } from "react-router-dom";
import loadable from '@loadable/component';

// 分包加载
const ToastExample = loadable(() => import('./Toast'))
const ModalExample = loadable(() => import('./Modal'))
const LazyImgExample = loadable(() => import('./LazyImg'))
const ReactChildren = loadable(() => import('./ReactChildren'))
const ReactRender = loadable(() => import('./ReactRender'))

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={ToastExample} />
            <Route exact path="/modal" component={ModalExample} />
            <Route exact path="/lazyimg" component={LazyImgExample} />
            <Route exact path="/reactChildren" component={ReactChildren} />
            <Route exact path="/reactRender" component={ReactRender} />
        </Switch>
    )
}