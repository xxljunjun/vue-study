
// 线上打包路径，请根据项目实际线上情况
const path = require("path")
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
const Version  = new Date().getTime();
module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/site/vue-demo/' : '/',  // 公共路径
  // indexPath: 'index.html' , // 相对于打包路径index.html的路径
  // outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
  // assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  // lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  // runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  // productionSourceMap: !IS_PROD, // 生产环境的 source map
  // parallel: require("os").cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  // pwa: {}, // 向 PWA 插件传递选项。

  // chainWebpack: config => {
  //   if(process.env.NODE_ENV !== 'dev'){
  //     config.output.filename('js/[name].[hash].' + Version + '.js').end();
  //     config.output.chunkFilename('js/[name].[hash].' + Version + '.js').end();
  //   }
  //   config.resolve.symlinks(true); // 修复热更新失效
  //   // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
  //   config.plugin("html").tap(args => {
  //     // 修复 Lazy loading routes Error
  //     args[0].chunksSortMode = "none";
  //     return args;
  //   });
  //   config.optimization.splitChunks({ // 开启代码分割
  //     chunks: 'all',  //async异步代码分割 initial同步代码分割 all同步异步分割都开启
  //     // minSize: 30000,   //字节 引入的文件大于30kb才进行分割
  //     maxSize: 50000,  //50kb，尝试将大于50kb的文件拆分成n个50kb的文件
  //   })
    // config.resolve.alias // 添加别名
      // .set('@', resolve('src'))
  // },

  // css: {
  //   extract: IS_PROD,
  //   requireModuleExtension: false,// 去掉文件名中的 .module
  //   loaderOptions: {
  //     // 给 less-loader 传递 Less.js 相关选项
  //     less: {
  //       // `globalVars` 定义全局对象，可加入全局变量
  //       globalVars: {
  //         primary: '#333'
  //       }
  //     }
  //   }
  // },

  devServer: {
    // overlay: { // 让浏览器 overlay 同时显示警告和错误
    //   warnings: true,
    //   errors: true
    // },
    host: "localhost",
    port: 8080, // 端口号
    open: false, //配置自动启动浏览器
    hotOnly: true, // 热更新
    proxy: {
      '/soso': {
        target: 'https://c.y.qq.com',  // 目标远程服务器
        ws: true,
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
