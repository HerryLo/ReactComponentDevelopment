import React from 'react';
import Utils from './utils'

class LazyImg extends React.Component {
    constructor(props){
        super(props)

        this.initState(props);
    }

    componentDidMount() {
        this.init();
    }

    componentWillUnmount() {
        this.el = null;
        window.removeEventListener('click');
    }

    initState(props) {
        const { src } = props;
        this.el = null;
        this.currentImg = {
            defaultImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC',
            viewHeight: null,
            elViewTop: null,
            proxyImg: new Image(),
            src: src,
            onCallback: Utils.throttle(()=> {
                this.check();
            }, 300)
        }
        console.log(this.currentImg);
    }

    init() {
        console.log(this.el);
        const el = this.el;
        let { onCallback } = this.currentImg;
        const viewHeight = window.innerHeight;
        const elClientRect = el.getBoundingClientRect();

        this.currentImg.elClientRect = elClientRect;
        this.currentImg.viewHeight = viewHeight;

        window.addEventListener('scroll', onCallback, false);
    }

    check() {
        console.log('check---<lazyimg');
        let el = this.el;
        let currentImg = this.currentImg;
        const { viewHeight,  elClientRect} = currentImg;
        console.log(viewHeight, elClientRect.top);
    }

    render() {
        const { defaultImg } = this.currentImg;
        const type = 'img';
        const lazyImgProps = {
            src: defaultImg,
            // 通过ref回调函数获取 DOM元素实例
            ref: el => { this.el = el;return; }
        };
        return React.createElement(
            type,
            lazyImgProps
        );
    }
}

export default LazyImg