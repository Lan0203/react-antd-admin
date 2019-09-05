# react-antd实现的一些UI组件

## 项目结构
```javascript
+-- config/                                 ---npm run eject 后的配置文件目录
+-- node_modules/                           ---npm下载文件目录
+-- public/
|   --- index.html                          ---首页入口html文件
+-- script/
|   --- build.js                           ---项目打包配置  
|   --- start.js                           ---项目启动配置
|   --- test.js                            ---项目测试配置
|
+-- src/                                    ---核心代码目录  
|   +-- config                              ---公用配置
|   |    +-- menu                           ---菜单 
|   +-- img                                 ---图片
|   +-- pages                               ---页面
|   |    +--charts                          ---图表
|   |    +--components                      ---整体架构组件
|   |       +--footer                       ---底部组件
|   |       +--headerCustom                 ---头部文件
|   |       +--siderCustom                  ---侧边栏组件
|   |    +-- form                           ---表单组件
|   |    +-- home                           ---首页组件
|   |    +-- login                          ---登录组件
|   |    +-- table                          ---tab表单
|   |    +-- ui                             ---UI组件
|   |    |  
|   +-- store                               ---redux状态管理 
|   --- style                               ---组件公共样式文件
--- package.json

```


## 项目地址
  https://github.com/Lan0203/react-antd-admin

## 下载
  git conle https://github.com/Lan0203/react-antd-admin

## 安装配置
  cd react-antd-damin  
  yarn || npm install

## 启动
  yarn start    || npm start  