# BaiduNews-React-Demo

React做的仿百度新闻手机端项目

## 项目简介

一个使用React技术实现的新闻手机端应用，能够分类浏览百度新闻API数据源提供的最新新闻。采用组件化开发，包括新闻卡片、新闻列表、轮播新闻、滚动新闻、新闻详情、评论、无限加载、懒加载、回到顶部等组件。

* 前端使用react-router实现路由，使用Axios调用百度新闻API获取数据，后端使用Webpack+Babel+Express实现动、静态资源打包输出
* 难点为调用百度新闻API需要跨域，而其并未提供CORS或JSONP能力，经过技术选型和测试，跨域问题通过http-proxy中间件实现反向代理解决
* 通过项目，在React的语法模式、state和props的作用和用法、组件间调用传值、Router跳转管理、跨域问题解决、Webpack应用等方面有较大提高。

![url](/static/image/www.agufei.xin.png)

扫描二维码，在手机上尝试

(如使用微信“扫一扫”，请点击“继续访问”)

### 主要技术栈：

* 框架：React v15.5.4
* 路由：React-router v4.1.1
* 服务端：Node.js+Express
* 跨域：http-proxy v1.16.2
* 打包工具：Webpack v2.5.1
* 转码工具：Babel v6.23.0
* API调用：axio v0.16.1

### 主要目录清单：

* static：静态资源目录
* app：应用代码主目录
* app->components：组件代码目录
* app->fetch：异步数据请求相关组件目录
* app->util：辅助工具相关组件目录
* app->constants：初始化常量数据代码目录
* app->action、reducers、store：Redux相关目录

### 主要文件清单：

* .babelrc：Babel配置文件
* .gitignore：git忽略文件列表
* package.json：npm包配置文件
* server.js：express本地运行环境执行文件
* webpack-dev-config.js：webpack打包配置文件

## 安装方法

1. 在本地建立项目目录demo

```shell
mkdir demo
```

2. 进入项目目录

```shell
cd demo
```

3. 使用以下命令克隆项目至本地目录

```shell
git clone https://github.com/agufei/BaiduNews-React-Demo.git
```

4. 运行npm安装依赖

```shell
npm i
```

5. 启动项目

```shell
npm start
```

6. 在浏览器访问以下地址即可

```url
http://127.0.0.1:3000
```
