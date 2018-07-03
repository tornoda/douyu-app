本项目使用 [Create React App](https://github.com/facebookincubator/create-react-app)构建。
## 说明 ##
本项目使用API来自斗鱼官方论坛。支持响应式。
## 技术栈 ##
 - CSS部分：使用`styled-components`，css in js方案；
 - Javascript框架：`React`;
 - http请求：`axios`，可选es6新特性Promise替代；
 - 路由：  `React-router`。
 - 使用`React Redux`实现全部（目前处于分支，实现中）
## 功能实现 ##
1. 使用`react-router`实现路由切换（随便看看/分类/我的关注）
2. 随便看看：热门主播房间随机首页展示，页面底部点击加载新房间
3. 分类：所有游戏列表分类，大屏幕下使用大图，小屏幕下使用圆形小图
4. 关注：可搜索添加到本地关注列表，获取主播开播等信息
5. 前端项目，没有后端代码，斗鱼没有提供视频流api，播放需跳转到斗鱼
## 项目截图 ##
待更新。。。
## 克隆代码到本地 ##
```
git clone git@github.com:fishhtml/FCC.git
```
## 进入目录 ##
运行：
```
npm run start
```