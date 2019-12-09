const path = require("path");
const pages = require("../config/pages.js");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}
const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: "eslint-loader",
  enforce: "pre",
  include: [resolve("src")],
  options: {
    formatter: require("eslint-friendly-formatter"),
    emitWarning: true
  }
});

//  生成页面入口文件配置
const createEntry = () => {
  let entry = {};
  pages.forEach( page => {
    entry[page.page] = page.entry;
  });
  return entry;
}

// 配置多入口html模板和分包配置
const createMutipleHtmlPlugin = () => {
  let plugins = [new VueLoaderPlugin()];
  pages.forEach( page => {
    plugins.push(
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../index.html"), //指向模板文件
        filename: page.filename,
        minify: process.env.NODE_ENV === "development" ? 
          {
            removeAttributeQuotes: true, //删除属性的双引号
            collapseInlineTagWhitespace: true, //折叠一行
          } : {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
          },
        chunks: page.chunks,
        hash: true //hash 为了开发中js有缓存效果，加入hash，这样可以有效避免缓存JS
      })
    )
  })
  return plugins;
}

const baseConfig = {
  entry: createEntry(),
  module: {
    rules: [
      ...(process.env.NODE_ENV === "development" ? [createLintingRule()] : []),
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          "css-loader",
          "sass-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(css|scss)$/,
        loader: "postcss-loader",
        options: {
          sourceMap: true,
          config: {
            path: ".postcss.config.js" // 这个得在项目根目录创建此文件
          }
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "img/[name].[hash:7].[ext]"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue: "vue/dist/vue.esm",
      "@": resolve("src")
    }
  },
  plugins: createMutipleHtmlPlugin(),
  // optimization: {
  //   splitChunks: {
  //   //   cacheGroups: {
  //   //     // 将 `node_modules`目录下被打包的代码到`common/common.js`
  //   //     common: {
  //   //       test: /node_modules/,
  //   //       chunks: "initial", //只对入口文件处理
  //   //       name: "vendor",
  //   //       minChunks: 5, //表示被引用次数，默认为1；5说明如果项目中引用次数大过5次，则打包成公共模块
  //   //       maxInitialRequests: 5, // 最大的初始化加载次数，默认为1
  //   //       minSize: 0 //表示在压缩前的最小模块大小，默认为0
  //   //     }
  //   //   }
  //     chunks: "initial",
  //     minSize: 30, // 模块的最小体积
  //     minChunks: 1, // 模块的最小被引用次数
  //     maxAsyncRequests: 5, // 按需加载的最大并行请求数
  //     maxInitialRequests: 3, // 一个入口最大并行请求数
  //     automaticNameDelimiter: '~', // 文件名的连接符
  //     name: 'vendor',
  //     cacheGroups: { // 缓存组
  //     	vendor: {
  //     		test: /[\\/]node_modules[\\/]/,
  //     		priority: 1
  //     	}
  //     }
  //   }
  // }
};
module.exports = baseConfig;
