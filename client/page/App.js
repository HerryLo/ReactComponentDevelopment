import React from 'react';
import '../styles/app'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            defaultImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC'
        };
        this.el = null;
        this.currentImg = {
            viewHeight: null,
            elViewTop: null,
            proxyImg: new Image(),
            onCallback: () => {
                let context = this;
                let args = arguments;
                let fn = this.check;
                let runCallback = function() {
                    fn.apply(context, args);
                };
                setTimeout(()=> {
                    runCallback();
                }, 200)
            }
        }
    }

    componentDidMount() {
        this.init();
    }

    componentWillUnmount() {
        this.el = null;
        el.removeEventListener('click');
    }

    init() {
        console.log('init', '~~~~初始化准备');
        const el = this.el;
        let { onCallback } = this.currentImg;
        const viewHeight = window.innerHeight;
        const elViewTop = el.getBoundingClientRect().top;

        this.currentImg.elViewTop = viewHeight;
        this.currentImg.viewHeight = viewHeight;

        el.addEventListener('click', onCallback, false);
        console.log(elViewTop, '~~~~计算img距离顶部高度');
    }

    check() {
        console.log(arguments)
    }

    // throttle(fn, wait) {
    //     let timeout = null;
    //     let lastRun = 0;
    //     return function() {
    //         if (timeout) {
    //             return;
    //         }
    //         let elapsed = Date.now() - lastRun;
    //         let context = this;
    //         let args = arguments;
    //         console.log(arguments);
    //         let runCallback = function() {
    //             lastRun = Date.now();
    //             timeout = false;
    //             fn.apply(context, args);
    //         };
    //         if (elapsed >= wait) {
    //             runCallback();
    //         } else {
    //             timeout = setTimeout(runCallback, wait);
    //         }
    //     }
    // }

    render() {
        const { defaultImg } = this.state;
        const type = 'img';
        const lazyImgProps = {
            src: defaultImg,
            // 通过ref回调函数获取 DOM元素实例
            ref: el => { this.el = el;return; }
        };
        return React.createElement(
            type,
            lazyImgProps
        )
    }
}

export default App