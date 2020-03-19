## unix.bio

> Modern static blog template.


[中文文档](./README_CN.md)

<br />

### How to use

This is the source code of my [blog](https://unix.bio).

You can also use this project to build your own blog.

 Run `npm init unix-bio` or `yarn create unix-bio` to initialize.

<br />

### Write & Deploy

First, Please make sure your [NodeJS](https://nodejs.org/en/) is in the latest version.

1. In project, run `npm i` to download dependents.

2. run `npm run post` to create your post.

2. run `npm run dev` to browse development page.

3. run `npm i -g now && now` to deploy. (Default deployment to [now](https://now.sh/))

<br />

### Features

#### High optimization

  - High performance optimization thanks to [next.js](http://nextjs.com/)
  - Perfect SEO support
  - High readability
  - Your just need to `write`

<p align="center">
<img width="500" align="center" src="https://user-images.githubusercontent.com/11304944/77065913-1bba2000-6a1d-11ea-868c-8e96dd09ddd5.png">
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
<img width="500" src="https://user-images.githubusercontent.com/11304944/77065795-eca3ae80-6a1c-11ea-9ee8-d143e37a6e44.png">
</p>
<p align="center">
<img width="500" src="https://user-images.githubusercontent.com/11304944/77065706-c1b95a80-6a1c-11ea-83cc-a19ea6c615dd.png">
</p>

<br />

#### Mobile

<p align="center">
<img width="600" src="https://user-images.githubusercontent.com/11304944/76160334-3d392300-6164-11ea-93fb-0527e2eba68a.png">
</p>

<br />

#### Social experience

<p align="center">
<img width="450" src="https://user-images.githubusercontent.com/11304944/77065600-93d41600-6a1c-11ea-9916-562ec1132026.png">
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
  enableViews: false,           // refer to https://docs.views.show
}
```


<br />

### How to migrate

Fortunately, we have a easy to use migrate tool, just run:

```shell
npx unix-bio migrate
```

<br />

### LICENSE

[MIT](./LICENSE)

