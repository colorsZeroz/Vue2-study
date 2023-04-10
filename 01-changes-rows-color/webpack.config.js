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


module.exports = {
    // development production
    mode:'development',
    entry:path.join(__dirname,'./src/index.js'),
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js',
    },
    // 在webpack运行是，会加载并调用这些插件
    plugins:[htmlPlugin],
}