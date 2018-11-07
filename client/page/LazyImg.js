// 图片Lazy懒加载示例
import React from 'react';
import LazyImg from '../../components/lazyImg'
class LazyImgExample extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <LazyImg src='http://thumb12.jfcdns.com/2018-08/29/bce5b866526230ae.png' />
                <LazyImg src='http://thumb12.jfcdns.com/2018-08/29/bce5b866526230ae.png' />
                <LazyImg src='http://thumb12.jfcdns.com/2018-08/29/bce5b866526230ae.png' />
                <LazyImg src='http://thumb12.jfcdns.com/2018-08/29/bce5b866526230ae.png' />
                <LazyImg src='http://thumb12.jfcdns.com/2018-08/29/bce5b866526230ae.png' />
                <LazyImg src='http://thumb12.jfcdns.com/2018-08/29/bce5b866526230ae.png' />
                <LazyImg src='http://thumb12.jfcdns.com/2018-08/29/bce5b866526230ae.png' />
                <LazyImg src='http://thumb12.jfcdns.com/2018-08/29/bce5b866526230ae.png' />
            </div>
        )
    }
}

export default LazyImgExample