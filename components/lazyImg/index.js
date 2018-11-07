import React from 'react';
import Utils from './utils'

class LazyImg extends React.Component {
    constructor(props){
        super(props)

        this.initState(props, true);
    }

    componentDidMount() {
        this.init();
    }

    componentWillUnmount() {
        this.el = null;
        window.removeEventListener('scroll', );
    }

    shouldComponentUpdate(nextProps) {
        console.log('shouldComponentUpdate---->lazyimg: %o', this.el);
        // debugger;
        if (this.props.src !== nextProps.src) {
          // console.log('shouldComponentUpdate---init---->lazyimg');
          if (this.filterLoadedImages(nextProps)) {
            console.log('shouldComponentUpdate---->lazyimg');
            return false;
          }
            this.initState(nextProps);
            this.init();
        }
        return true;
      }

    initState(props, isInit) {
        const { src } = props;

        if(isInit){
            this.state = {
                isLoaded: false,
            }
        }

        this.el = null;
        this.currentImg = {
            defaultImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC',
            viewHeight: null,
            proxyImg: new Image(),
            src: src,
            onCallback: Utils.throttle(()=> {
                this.check();
            }, 300)
        }
        console.log(this.currentImg);
    }

    init() {
        let { onCallback } = this.currentImg;
        const viewHeight = window.innerHeight;
        this.currentImg.viewHeight = viewHeight;

        this.check();
        window.addEventListener('scroll', onCallback, false);
    }

    check() {
        console.log('check---<lazyimg');
        let el = this.el;
        const { isLoaded } = this.state;
        const { viewHeight, proxyImg, src} = this.currentImg;
        const BoundingClientRect = el.getBoundingClientRect();

        if(!isLoaded){
            if(viewHeight - BoundingClientRect.top > 0){
                proxyImg.src = src;
                proxyImg.onload = ()=> {
                    this.setState({
                        isLoaded: true
                    })
                }
            }
        }
    }

    render() {
        const { defaultImg, src} = this.currentImg;
        const { isLoaded } = this.state;
        const type = 'img';
        const lazyImgProps = {
            src: defaultImg,
            // 通过ref回调函数获取 DOM元素实例
            ref: el => { this.el = el;return; }
        };
        if(isLoaded){
            lazyImgProps.src = src;
        }
        return React.createElement(
            type,
            lazyImgProps
        );
    }
}

export default LazyImg