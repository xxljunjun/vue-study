const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
//可视化打包：上线前注释
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
//gzip(需要配合nginx配置)
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];
module.exports = {
  //部署正式环境时域名加前缀process.env.NODE_ENV
  publicPath: "/vuestudy/",
  //将构建好的文件输出到哪里process.env.outputDir
  outputDir: "dist",
  //指定生成的index.html的输出路径
  indexPath: "index.html",
  //放置生成的静态资源(js、css、img、fonts)的目录。
  assetsDir: "static",
  //生产环境关闭 source map
  productionSourceMap: false,
  //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: true,
  chainWebpack: (config) => {
    //修复热更新失效
    config.resolve.symlinks(true);
    //开启代码分割
    config.optimization.splitChunks({
      chunks: "all", //async异步代码分割 initial同步代码分割 all同步异步分割都开启
      minSize: 30000, //字节 引入的文件大于30kb才进行分割
      maxSize: 50000, //50kb，尝试将大于50kb的文件拆分成n个50kb的文件
    });
    //配置标题
    config.plugin("html").tap((args) => {
      args[0].title = "xxl-vue-study";
      return args;
    });
    //添加别名
    config.resolve.alias.set("@", resolve("src"));
    //展示图形化信息(上线钱注释掉)
    // config.plugin("webpack-bundle-analyzer").use(BundleAnalyzerPlugin);
  },
  configureWebpack: (config) => {
   
    config.plugins.push(
      new CompressionWebpackPlugin({
        algorithm: "gzip",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
        threshold: 1024,
        minRatio: 0.8,
      })
    );
    //xlsx会报错
    config.externals= { './cptable': 'var cptable' }
  },
  //是否使用css分离插件 ExtractTextPlugin
  css: {
    extract: true,
    sourceMap: false,
  },
  devServer: {
    // 端口号
    port: 8090,
    //配置自动启动浏览器
    open: false,
    // 热更新
    hotOnly: true,
    // 让浏览器 overlay 同时显示警告和错误
    overlay: {
      warnings: false,
      errors: true,
    },
    //配置 DevServer的服务器监听地址
    // host: "127.0.0.0",
    //解决跨域代理
    proxy: {
      "/soso": {
        target: "https://c.y.qq.com", // 目标远程服务器
        ws: true, // 代理的WebSockets
        changeOrigin: true, // 允许改变“域”
      },
      "/api": {
        target: "http://10.20.158.29:9000", // 是IP的内网地址
        changeOrigin: true,
      },
      "/xxl": {
        target: "http://47.102.216.222:8080", // 是IP的内网地址
        changeOrigin: true,
      }
    }
  },
};
