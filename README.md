## unix.bio

> Modern static blog template.


[中文文档](./README_CN.md)

<br />

### How to use

This is the source code of my [blog](https://unix.bio).

You can also use this project to build your own blog.

Click <kbd>Use this template</kbd> button on GitHub.

<br />

### Write & Deploy

First, Please make sure your [NodeJS](https://nodejs.org/en/) is in the latest version.

If you have [yarn](https://classic.yarnpkg.com/zh-Hans/docs/install#alternatives-stable) installed, use the command starting with `yarn`, otherwise use `npm`.

1. In project, run `yarn` or `npm i` to download dependents.

2. run `yarn post` or `npm run post` to create your post.

2. run `yarn dev` or `npm run dev` to browse development page.

3. run `npm i -g now && now` to deploy. (Default deployment to [now](https://now.sh/))

<br />

### Features

#### High optimization

  - High performance optimization thanks to [next.js](http://nextjs.com/)
  - Perfect SEO support
  - High readability
  - Your just need to `write`

<p align="center">
<img width="600" align="center" src="https://user-images.githubusercontent.com/11304944/76160335-3dd1b980-6164-11ea-8e84-535353f5811b.png">
</p>

<br />

#### English & Chinese

You can **switch languages** in the configuration file

<br />

#### Write on MDXJS

  - Full markdown support
  - React Components support
  - More customization possibilities

<p align="center">
<img width="600" src="https://user-images.githubusercontent.com/11304944/76159776-b33a8b80-615e-11ea-9752-19827e5c900d.png">
</p>

<br />

#### Dark mode

<p align="center">
<img width="600" src="https://user-images.githubusercontent.com/11304944/76160332-3ad6c900-6164-11ea-9c2b-d8e810d72bfc.png">

<img width="600" src="https://user-images.githubusercontent.com/11304944/76160333-3ca08c80-6164-11ea-965c-9852ba147d6a.png">
</p>

<br />

#### Mobile

<p align="center">
<img width="600" src="https://user-images.githubusercontent.com/11304944/76160334-3d392300-6164-11ea-93fb-0527e2eba68a.png">
</p>

<br />

### Configuration

**First, do not rename any directories！** You can start your writing in the `posts` folder.

In the **root directory** of the project, you can change the configuration for your blog:

```js
const BLOG = {
  anthor: 'Witt',               // article anthor, used on `Meta`
  title: 'Witt - unix.bio',     // website title
  description: 'Witt\'s blog',  // used on `Meta`
  summary: '',                  // one sentence introduction, show on home page
  language: 'en-us',            // 'en-us' or 'zh-cn'
  latestLimit: 5,               // number of home display lists
  
  labels: {                     // label text
    default: 'default',
    latest: 'latest',
    list: 'all list',
  },
  
  email: '',                    // about social
  github: 'unix',
  twitter: 'echo_witt',
  domain: 'unix.bio',           // your domain name
  
  googleAnalytics: 'UA-x',
  cn: true,                     // chinese translation of some characters
}
```


<br />

### How to migrate

1. click <kbd>Use this template</kbd> button on GitHub
2. create new project
3. copy folder `posts` & `fixed` & `blog.config.js` to your new project

<br />

### LICENSE

[MIT](./LICENSE)

