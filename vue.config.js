const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
// 线上打包路径，请根据项目实际线上情况
module.exports = {
  //部署正式环境时域名加前缀process.env.NODE_ENV
  publicPath: '/',

  //将构建好的文件输出到哪里
  outputDir: process.env.outputDir || 'dist',


  //指定生成的index.html的输出路径
  indexPath: 'index.html',

  // 放置生成的静态资源(js、css、img、fonts)的目录。
  assetsDir: 'static',

  // 生产环境关闭 source map
  productionSourceMap: false,

  // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: false,


  chainWebpack: config => {
    config.resolve.symlinks(true); // 修复热更新失效
    config.optimization.splitChunks({ // 开启代码分割
      chunks: 'all',  //async异步代码分割 initial同步代码分割 all同步异步分割都开启
      minSize: 30000,   //字节 引入的文件大于30kb才进行分割
      maxSize: 50000,  //50kb，尝试将大于50kb的文件拆分成n个50kb的文件
    })
    config//配置标题
      .plugin('html')
      .tap(args => {
        args[0].title = 'xxl-vue-study'
        return args
      })
    config.resolve.alias // 添加别名
      .set('@', resolve('src'))
  },

  configureWebpack: (config) => {

  },

  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    sourceMap: false,
  },

  devServer: {
    // 让浏览器 overlay 同时显示警告和错误
    // overlay: {
    //   warnings: false,
    //   errors: true
    // },
    host: "localhost",
    port: 8080, // 端口号
    open: false, //配置自动启动浏览器
    hotOnly: true, // 热更新
    proxy: {
      '/soso': {
        target: 'https://c.y.qq.com',  // 目标远程服务器
        ws: true,  // 代理的WebSockets
        changeOrigin: true   // 允许改变“域”
      },
      '/api': {
        target: 'http://10.20.158.29:9000',   // 是IP的内网地址
        changeOrigin: true
      }
    }
  },

  // module: {
  //   rules:
  //   {
  //     test: /\.less$/,
  //     loader: "style-loader!css-loader!less-loader"
  //   }
  //   ]
  // }

}
