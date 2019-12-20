const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin") //生成html
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const entryFile = path.join(__dirname, '../client/index.js')
const htmlTemplate = path.join(__dirname, '../client/index.html')
const buildPath = path.join(__dirname, '../build')

module.exports = {
    devtool: "source-map",
    mode: 'development',
    entry: entryFile,
    output: {
        path: buildPath, //编译到当前目录
        filename: "./[name].js", //编译后的文件名字
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        host: '0.0.0.0',
        port: 3333,
        headers: {
            'Access-Control-Allow-Origin': '*', // 5
        },
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: "babel-loader?cacheDirectory=true",
                exclude: /^node_modules$/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoader: 1
                    }
                }],
                exclude: /^node_modules$/,
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: 'images/[hash:8].[name].[ext]'
                },
                //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
                exclude: /^node_modules$/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "./index.html", //生成的html存放路径，相对于 path
            template: htmlTemplate, //html模板路径
            hash: true
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            // manifest就是我们第一步中打包出来的json文件
            manifest: require('../build/manifest.json'),
        }),
        new BundleAnalyzerPlugin({
            analyzerPort: 3333
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", ".less", ".scss", ".css"] //后缀名自动补全
    }
}