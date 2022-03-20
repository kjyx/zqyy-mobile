module.exports = {
    // 关闭语法检查
    lintOnSave:false,

    // 配置代理服务器
    devServer:{
        proxy:{
            '/erupt-api':{
                target:'http://110.42.240.198:8012',
                // pathRewrite:{'^/api':''}
            }
        }
    }
}
