## unix.bio

> 现代化的博客模板

<br />

### 如何使用

这是我 [博客](https://unix.bio) 的源码。

你也可以使用此项目来构建属于自己的博客。

运行 `npm init unix-bio` 或 `yarn create unix-bio` 即可初始化你的博客。

<br />

### 写作与部署

首先，请确保你有最新版本的 [NodeJS](https://nodejs.org/en/)。

1. 在项目中，运行 `npm i` 安装依赖。

2. 运行 `npm run post` 创建你的第一篇文章。

2. 运行 `npm run dev` 在本地预览页面。

3. 运行 `npm i -g now && now` 命令开始部署。 (默认会部署到 [now](https://now.sh/))

<br />

### 特色

#### 高优化

  - 得益于 [next.js](http://nextjs.com/) 与 [@zeit-ui/react](https://react.zeit-ui.co/) 的高性能优化与混合渲染
  - 完善的 SEO 支持和服务端渲染
  - 高可读性支持
  - 你只需要专注于写作

<p align="center">
<img width="500" align="center" src="https://user-images.githubusercontent.com/11304944/77065913-1bba2000-6a1d-11ea-868c-8e96dd09ddd5.png">
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
<img width="500" src="https://user-images.githubusercontent.com/11304944/77065795-eca3ae80-6a1c-11ea-9ee8-d143e37a6e44.png">
</p>
<p align="center">
<img width="500" src="https://user-images.githubusercontent.com/11304944/77065706-c1b95a80-6a1c-11ea-83cc-a19ea6c615dd.png">
</p>

<br />

#### 移动设备

<p align="center">
<img width="500" src="https://user-images.githubusercontent.com/11304944/77067355-cc292380-6a1f-11ea-8736-fb25c3563b16.png">
</p>
<p align="center">
<img width="500" src="https://user-images.githubusercontent.com/11304944/77067349-c9c6c980-6a1f-11ea-99a6-b4f2f7daf40b.png">
</p>

<br />

#### 社交体验

<p align="center">
<img width="450" src="https://user-images.githubusercontent.com/11304944/77065600-93d41600-6a1c-11ea-9916-562ec1132026.png">
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
  enableViews: false,           // 参考 https://docs.views.show 
}
```


<br />

### 如何迁移

及时的迁移可以帮助你更新博客源码，其中包括错误修复和新的功能。这不会影响到你现有的博客内容。
建议您每隔一段时间就手动迁移一次。

不必担心，我们现在可以只运行一个简单的命令就完成迁移，更新所有文件到最新版本：

```shell
npx unix-bio migrate
```

<br />

### 只部署静态文件 (不推荐的)

极少数情况下，您可能只想部署静态文件到 CDN 或是静态服务器。你可以运行以下命令：

```bash
npm run export
```

在运行命令后，静态文件会生成在 `/out` 文件夹。

如果你使用自定义的静态部署，将无法获得最好的性能，同时未来所有与服务端渲染、混合渲染相关的功能也不受支持。
此外，静态部署需要您自行解决各类路径与缓存问题。（请不要在 `issues` 中提此类问题）

<br />

### 协议

[MIT](./LICENSE)

