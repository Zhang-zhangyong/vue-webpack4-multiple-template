const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const webpackMerge = require("webpack-merge");
const baseConfg = require("./webpack.base.conf");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = webpackMerge(baseConfg,{
	mode: "development",
	devServer: {
		port: "9000",
		publicPath: "/", //publicPath代表的是index.html文件里面引用资源的前缀
		contentBase: '/', // 不设置的话，默认是当前执行的目录，一般是项目根目录。会在项目根目录查找index.html文件
		progress: true, //显示打包的进度
		compress: true, //开启gzip压缩
		overlay: true, //在浏览器上全屏显示编译的errors或warnings
		disableHostCheck: true,
		proxy: {
			// 代理请求
			// "/team": {
			//   target: "http://192.168.0.139:11035",
			//   pathRewrite: {"^/team" : ""}
			// }
		},
		// quiet: true,
	},
	devtool: 'eval-source-map', // 原始源代码（仅限行）
	stats: "minimal", // 控制台日志显示控制
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style/[name].css',
			chunkFilename: 'style/[name].css'
    }),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: '"development"',
				ENV_CONFIG: '"dev"',
				BASE_URL: '"http://***/"'
			}
		}),
		new FriendlyErrorsPlugin()
	]
});
