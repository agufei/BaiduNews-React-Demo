# BaiduNews-React-Demo

学习React时做的仿百度新闻手机端项目

## 项目简介

本项目采用单页面应用形式，调用百度新闻接口，呈现百度新闻列表和内容。前端使用React+Router，调用百度新闻API，实现手机端新闻查看及浏览功能。后端使用Webpack+Babel+Express实现，跨域问题通过http-proxy中间件反向代理解决。

该项目用时十天，边学习React基础知识边制作。仅参考百度新闻页面样式，组件设计、路由、数据流、业务逻辑均是个人根据课程知识并参考网络文档等学习后自行完成。通过项目，对React的语法模式、state和props的作用和用法、组件间调用、Router跳转管理等方面有较大提高。

### 使用到的主要技术栈：

* 框架：React v15.5.4
* 路由：React-router v4.1.1
* 服务端：Node.js+Express
* 跨域：http-proxy v1.16.2
* 打包工具：Webpack v2.5.1
* 转码工具：Babel v6.23.0
* API调用：axio v0.16.1

## 安装方法

1. 在本地建立项目目录demo

```shell
mkdir demo
```

1. 进入项目目录

```shell
cd demo
```

1. 使用以下命令克隆项目至本地目录

```shell
git clone https://github.com/agufei/BaiduNews-React-Demo.git
```

1. 运行npm安装依赖

```shell
npm i
```

1. 启动项目

```shell
npm start
```

1. 在浏览器访问以下地址即可

```
http://127.0.0.1:3000
```