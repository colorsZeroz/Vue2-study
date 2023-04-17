const path = require('path')

// 导入html-web-plugin插件，得到构造函数
const HtmlPlugin = require('html-webpack-plugin')
// new构造函数，创建插件实例对象
const htmlPlugin= new HtmlPlugin({
    // 复制指定网页
    template:'./src/index.html',
    // 存放位置
    filename:'./index.html'
})

const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
    // development production
    mode:'development',
    // 在开发调试阶段建议设置devtool
    // 在发布项目的时候出于安全性考虑建议关闭SourceMap
    //devtool:'eval-source-map',
    // 在发布时，设置nosources-source-map或直接关闭
    devtool:'nosources-source-map',
    entry:path.join(__dirname,'./src/index.js'),
    output:{
        path:path.join(__dirname,'dist'),
        filename:'js/bundle.js',
    },
    // 在webpack运行是，会加载并调用这些插件
    plugins:[htmlPlugin, new CleanWebpackPlugin()],
    devServer:{
        open:true,
        host:'127.0.0.1',
        port:8080
    },
    module:{
        rules:[
            { test: /\.css$/,use:['style-loader','css-loader']},
            { test: /\.less$/,use:['style-loader','css-loader','less-loader']},
            { test: /\.jpg|png|gif$/,use:'url-loader?limit=700&outputPath=images'},
            // babel-loader处理高级语法
            { test: /\.js$/,use:'babel-loader',exclude:/node_modules/},
        ]
    }
}