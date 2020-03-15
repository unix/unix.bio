## unix.bio

> 现代化的博客模板

<br />

### 如何使用

这是我 [博客](https://unix.bio) 的源码。

你也可以使用此项目来构建属于自己的博客。

在项目上方点击 <kbd>Use this template</kbd> 按钮即可。

<br />

### 写作与部署

首先，请确保你有最新版本的 [NodeJS](https://nodejs.org/en/)。

如果你有包管理器 [yarn](https://classic.yarnpkg.com/zh-Hans/docs/install#alternatives-stable)，请使用 `yarn` 开头的命令，否则使用 `npm`。

1. 在项目种，运行 `yarn` 或是 `npm i` 安装依赖。

2. 运行 `yarn post` 或是 `npm run post` 创建你的第一篇文章。

2. 运行 `yarn dev` 或是 `npm run dev` 在本地预览页面。

3. 运行 `npm i -g now && now` 命令开始部署。 (默认会部署到 [now](https://now.sh/))

<br />

### 特色

#### 高优化

  - 来自于 [next.js](http://nextjs.com/) 的高性能优化与混合渲染
  - 完善的 SEO 支持
  - 高可读性支持
  - 你只需要专注于写作

<p align="center">
<img width="600" align="center" src="https://user-images.githubusercontent.com/11304944/76160335-3dd1b980-6164-11ea-8e84-535353f5811b.png">
</p>

<br />

#### 中英文

你可以在配置文件种 **切换语言**。

<br />

#### 在 MDXJS 下开始写作

  - 完善的 Markdown 语法支持
  - 可以在 Markdown 种使用 React 组件
  - 更多定制组件的可能性

<p align="center">
<img width="600" src="https://user-images.githubusercontent.com/11304944/76159776-b33a8b80-615e-11ea-9752-19827e5c900d.png">
</p>

<br />

#### 暗黑模式

<p align="center">
<img width="600" src="https://user-images.githubusercontent.com/11304944/76160332-3ad6c900-6164-11ea-9c2b-d8e810d72bfc.png">

<img width="600" src="https://user-images.githubusercontent.com/11304944/76160333-3ca08c80-6164-11ea-965c-9852ba147d6a.png">
</p>

<br />

#### 移动端

<p align="center">
<img width="600" src="https://user-images.githubusercontent.com/11304944/76160334-3d392300-6164-11ea-93fb-0527e2eba68a.png">
</p>

<br />

### 配置

**首先，请不要重命名任何文件夹！** 你可以在 `posts` 文件夹下开始写作。

在项目的 **根文件夹** 下, 你可以通过配置文件 `blog.config.js` 配置博客：

```js
const BLOG = {
  anthor: 'Witt',               // 文章作者，在 `Meta` 上使用
  title: 'Witt - unix.bio',     // 站点标题
  description: 'Witt\'s blog',  // 在 `Meta` 使用
  summary: '',                  // 一句话简介，用于首页
  language: 'en-us',            // 'en-us' 或 'zh-cn' 语言切换
  latestLimit: 5,               // 首页最近显示文章数量
  
  labels: {                     // 标签名称
    default: 'default',
    latest: 'latest',
    list: 'all list',
  },
  
  email: '',                    // 社交
  github: 'unix',
  twitter: 'echo_witt',
  domain: 'unix.bio',           // 域名展示
  
  googleAnalytics: 'UA-x',      // google 分析的 UA ID
  cn: true,                     // 开启中文支持，部分字符需要开启此选项才能得到更好支持
}
```


<br />

### 如何迁移

1. 点击 <kbd>Use this template</kbd> 按钮。
2. 创建新的项目。
3. 赋值文件夹 `posts` 与 `fixed`，还有 `blog.config.js` 到新项目中即可。

<br />

### 协议

[MIT](./LICENSE)

