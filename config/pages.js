const path = require("path");

// 多页面配置
module.exports = [
  {
    page: "index",
    entry: path.resolve(__dirname, "../src/pages/index/index.js"), //指向入口文件
    title: "首页",
    // template: path.resolve(__dirname, "../index.html"), //指向模板文件
    filename: "index.html",
    chunks: ["index", "vendor"], // 引入公共模块 ---在build/webpack.config.js下配置的公共模块--110行
  },
  {
    page: "detail",
    entry: path.resolve(__dirname, "../src/pages/detail/index.js"), //指向入口文件
    title: "详情",
    filename: "detail.html",
    chunks: ["detail", "vendor"],
    hash: true //生成带有hash值
  }
];
