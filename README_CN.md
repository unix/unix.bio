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

3. 运行 `npm run dev` 在本地预览页面。

4. 运行 `npm i -g now && now` 命令开始部署。 (默认会部署到 [now](https://now.sh/))

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

你可以在配置文件中 **切换语言**。

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
<img width="600" src="https://user-images.githubusercontent.com/11304944/79985099-b1dddc00-84dc-11ea-889f-c2c8c61ae6ed.png">
</p>
<p align="center">
<img width="600" src="https://user-images.githubusercontent.com/11304944/79985096-b0141880-84dc-11ea-8d6f-ad52000670ea.png">
</p>

<br />

#### 移动设备

<p align="center">
<img width="500" src="https://user-images.githubusercontent.com/11304944/79985319-ff5a4900-84dc-11ea-92b5-c152086449d2.png">
</p>
<p align="center">
<img width="500" src="https://user-images.githubusercontent.com/11304944/79985361-139e4600-84dd-11ea-95a8-110894c90576.png">
</p>

<br />

#### 社交体验

<p align="center">
<img width="450" src="https://user-images.githubusercontent.com/11304944/77065600-93d41600-6a1c-11ea-9916-562ec1132026.png">
</p>

<br />

### 配置

**首先，请不要重命名任何文件夹！** 你可以在 `posts` 文件夹下开始写作。

在项目的 **根文件夹** 下, 你可以通过配置文件 `blog.config.js` 配置博客。

你可以在 Wiki 阅读博客 [所有配置的文档](https://github.com/unix/unix.bio/wiki/%E5%8D%9A%E5%AE%A2%E6%89%80%E6%9C%89%E7%9A%84%E9%85%8D%E7%BD%AE%E9%A1%B9)

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
