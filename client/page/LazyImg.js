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
                <LazyImg src='ttps://goss1.vcg.com/creative/vcg/800/version23/VCG211c9338088.jpg' />
                <LazyImg src='https://avatars3.githubusercontent.com/u/20215975?s=400&u=aa4f80e1f79020410e56ef05c689efa6a39b9023&v=4' />
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