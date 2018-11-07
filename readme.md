# react 插件开发示例

[Toast插件](#轻量级信息提示组件Toast)

[Modal插件](#全局对话框组件Modal)

[LazyImg插件](#图片懒加载组件LazyImg)

## install
```javascript
$ npm install
```

## 轻量级信息提示组件Toast

    用于在不打断用户操作的情况下提供成功、警告、错误等反馈信息。

### 效果预览

- [点此预览](https://clancysong.github.io/react-components/dist/toast/)

### 如何使用

在组件顶部引入Toast即可直接使用：

``` js
import Toast from '../../components/toast'

...
<button onClick={() => { Toast.info('普通提示') }}>普通提示</button>
...
```

Toast提供的函数调用后返回一个函数，调用这个函数可以立即关闭提示信息。如：

``` js
<button
    onClick={() => {
        const hideLoading = Toast.loading('加载中...', 0, () => {
            Toast.success('加载完成')
        })
        setTimeout(hideLoading, 2000)
    }}
>加载提示
</button>
```

### 调用规则

- Toast提供五种消息提示类型，分别为：
  - info（普通）
  - success（成功）
  - warning（警告）
  - error（错误）
  - loading（加载）
- 这些函数接收3个参数，分别为：
  - content 提示内容 string
  - （可选） duration 提示持续时间 number（单位为ms）
  - （可选） onClose 提示关闭时的回调函数
- info、succcess、warning、error中duration的默认值为2000（2s后自动关闭），而loading的duration默认值为0（即默认不自动关闭）。


### 组件依赖

``` json
{
    "react": "^16.6.0",
    "react-dom": "^16.6.0",
    "react-transition-group": "^2.5.0"
}
```
依赖版本仅供参考，推荐 react、 react-dom 版本 16.0 以上，react-transition-group 版本 2.0 以上。

## 全局对话框组件Modal

用于提示某些重要信息、需要用户确认的操作，以及收集用户的输入内容。

### 效果预览

- [点此预览](https://clancysong.github.io/react-components/dist/modal/)

### 如何使用

Modal组件提供三个方法，分别为：

- alert（提示对话框）
- confirm（确认对话框）
- prompt（输入对话框）

这三个方法统一接收一个对象，对象可选属性有：

- contentText： 对话框提内容文本
- onOk：点击确认按钮时执行的回调函数。如果调用方法为 prompt，那么组件会将用户输入的内容作为此回调函数的参数传入。
- onCancel：点击取消按钮时执行的回调函数。注意：alert 方法不接受 onCancel 函数作为参数。

### 示例

``` js
import Modal from '../../components/modal'

...
const { alert, confirm, prompt } = Modal

alert({ contentText: '已退出登录！' })

confirm({
    contentText: '确定要删除吗？',
    onOk() { console.log('文件已删除！') }，
    onCancel() { console.log('用户已取消操作。') }
})

prompt({
    contentText: '请输入用户名：',
    onOk(result) { console.log(`您的用户名已修改为：${result}`) }，
    onCancel() { console.log('用户已取消操作。') }
})
...
```

### 组件依赖

``` json
{
    "react": "^16.6.0",
    "react-dom": "^16.6.0",
    "react-transition-group": "^2.5.0"
}
```

依赖版本仅供参考。推荐 react、 react-dom 版本 16.0 以上，react-transition-group 版本 2.0 以上。

## 图片懒加载组件LazyImg

    用于图片的懒加载，避免一次加载全部图片，保证页面的流畅性

### 效果预览


### 如何使用

在组件顶部引入LazyImg即可直接使用：

``` js
import LazyImg from '../../components/lazyImg'

...
<LazyImg 
src='http://thumb12.jfcdns.com/2018-08/29/bce5b866526230ae.png' />
...
```

### 组件依赖

``` json
{
    "react": "^16.6.0",
    "react-dom": "^16.6.0"
}
```
依赖版本仅供参考，推荐 react、 react-dom 版本 16.0 以上