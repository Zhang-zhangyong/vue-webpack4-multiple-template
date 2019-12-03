// 获取全局公共组件并且注册到全局
import Vue from "vue";

// directory {String} -读取文件的路径
// useSubdirectories {Boolean} -是否遍历文件的子目录
// regExp {RegExp} -匹配文件的正则

const requireComponent = require.context(
  ".",false,/\.vue$/
);
// console.log(requireComponent.keys(), 'commonComponents');

requireComponent.keys().forEach(item => {
  const componentConfig = requireComponent(item);
  Vue.component(componentConfig.default.name, componentConfig.default); // 全局注册组件
});