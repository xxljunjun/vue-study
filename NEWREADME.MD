### 安装可视化打包体积

- npm install webpack-bundle-analyzer --save-dev
- 配置 vue.config.js

```js
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
module.exports = {
  chainWebpack: (config) => {
    // 展示图形化信息(上线钱注释掉)
    config.plugin("webpack-bundle-analyzer").use(BundleAnalyzerPlugin);
  },
};
```

### 项目安装的插件

| 包名                    | 作用                     |
| :---------------------- | :----------------------- |
| element-ui              | 蚂蚁 UI 库               |
| mockjs                  | mock 模拟数据            |
| nanoid                  | 唯一值                   |
| echarts                 | echarts 图表             |
| js-cookie               | 操作 cookie 的库         |
| sass-loader             | 使用 sass 预编译语言     |
| node-sass               | 使用 sass 预编译语言     |
| less                    | 使用 less 预编译语言     |
| less-loader             | 使用 less 预编译语言     |
| file-saver              | 生成 txt/img/canvas 文件 |
| vue-json-excel          | 生成 excel 文件          |
| vue-pdf                 | 生成 pdf 文件            |
| axios                   | 发送 http 请求           |
| moment                  | 时间处理 功能            |
| webpack-bundle-analyzer | 打包后可视化体积         |
| sortablejs              | 实现拖拽功能             |
| swiper                  | 轮播图                   |
