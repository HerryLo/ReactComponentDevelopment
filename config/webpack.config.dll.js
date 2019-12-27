const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'production',
    entry: {
      // 依赖的库数组
      vendor: [
        'prop-types',
        'babel-polyfill',
        'react',
        'react-dom',
        'react-redux',
        'react-router-dom',
        '@loadable/component',
      ]
    },
    output: {
      path: path.join(__dirname, '../build'),
      filename: '[name].js',
      library: '[name]_[hash]',
    },
    plugins: [
      new webpack.DllPlugin({
        // DllPlugin的name属性需要和libary保持一致
        name: '[name]_[hash]',
        path: path.join(__dirname, '../build', 'manifest.json'),
        // context需要和webpack.config.js保持一致
        context: __dirname,
      }),
    ],
}