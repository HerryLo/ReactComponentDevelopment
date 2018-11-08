const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin") //生成html

const entryFile = path.join(__dirname, '../client/index.js')
const htmlTemplate = path.join(__dirname, '../client/index.html')
const buildPath = path.join(__dirname, '../build')

module.exports = {
    mode: 'production',
    entry: entryFile,
    output: {
        path: buildPath, //编译到当前目录
        filename: "./[name].js", //编译后的文件名字
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: "babel-loader",
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
                exclude: /node_modules/,
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
    ],
    resolve: {
        extensions: [".js", ".jsx", ".less", ".scss", ".css"] //后缀名自动补全
    }
}