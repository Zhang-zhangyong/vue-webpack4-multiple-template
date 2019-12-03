# webpack4配置Vue多页面模板

------

# 前言

  > 前两天自己折腾了下基于webpack4.0搭建了个vue-cli模板用来开发单页面应用 [vue-webpack4-template](https://github.com/Zhang-zhangyong/vue-webpack4-template) 感觉有些业务场景复杂可能要明确区分各个业务功能模块，那单页面就不太适合，所以又基于原来的模板修改了下配置折腾出来这个多页面应用[vue-webpack4-multiple-template](https://github.com/Zhang-zhangyong/vue-webpack4-multiple-template)


# 项目结构
```
├── build                                       // webpack配置目录
    ├── webpack.config.base.js                  // 公共配置
    ├── webpak.config.dev.js                    // 开发模式
    ├── webpak.config.prod.js                   // 打包模式
├── config                                      // 多页面配置目录
    ├── pages.js                                // 多页面配置项
├── dist                                        // 项目打包路径(自动生成)
├── src                                         // 源码目录(自定义)
    ├── components                              // 全局公共组件
    ├── img                                     // 图片
    ├── pages                                   // 具体页面文件
        ├── index
            ├── component                       // 页面组件
            ├── index.js                        // 页面入口文件（相当于main.js)
            ├── App.vue                         // 页面根组件
        ...                                     // 其他更多页面
    ├── router                                  // 页面路由
    ├── service                                 // 接口请求处理
    ├── store                                   // vuex
    ├── utils                                   // 其他工具方法类文件
    ...

├── static                                      // 静态资源
├── babelrc                                     // 配置babel-loader以及ui组件库配置
├── eslintirc.js                                // eslint配置（eslint-plugin-vue）
├── postcss.config                              // 样式添加前缀以及pxTorRem移动端适配
├── index.html                                  // html模板
```
# 项目运行
```
    克隆项目

    git clone https://github.com/Zhang-zhangyong/vue-webpack4-multiple-template.git
  
    安装依赖

    npm install  或 yarn

    开发模式

    yarn dev

    里面已经写好了入口文件，启动后可直接访问
    http://localhost:9000/index.html     //演示多页面1
    http://localhost:9000/detail.html    //演示多页面2
    
    打包模式

    yarn build

    打包后生成文件目录

```
# 文件解释

*   多页面配置项(config/pages.js)

    ```
    pages: [
        {
            page: 'index',
            entry: path.resolve(__dirname, "../src/pages/index/index.js"), //指向入口文件
            title: '这是页面1',
            template: path.resolve(__dirname, "../index.html"), //指向模板文件
            filename: 'index.html',
            chunks: ['index','vendor'], // 引入公共模块(vue,vant-ui等)
        },
        {
            page: 'detail',
            entry: path.resolve(__dirname, '../src/pages/detail/index.js'),  //指向入口文件
            title: '这是页面2',
            template: path.resolve(__dirname, "../index.html"), //指向模板文件
            filename: 'detail.html',
            chunks: ['detail', 'vendor'],
        }
        ...更多页面配置
    ]

    ```

# 说明

>  如果对您有帮助，后面会持续更新，您可以点右上角 "Star" 支持一下 谢谢！ ^_^
>  如要在编译过程中遇到错误，点击[联系作者](https://github.com/Zhang-zhangyong/vue-webpack4-multiple-template/issues)

