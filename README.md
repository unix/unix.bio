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
<img width="600" src="https://user-images.githubusercontent.com/11304944/79985099-b1dddc00-84dc-11ea-889f-c2c8c61ae6ed.png">
</p>
<p align="center">
<img width="600" src="https://user-images.githubusercontent.com/11304944/79985096-b0141880-84dc-11ea-8d6f-ad52000670ea.png">
</p>

<br />

#### Mobile

<p align="center">
<img width="500" src="https://user-images.githubusercontent.com/11304944/79985319-ff5a4900-84dc-11ea-92b5-c152086449d2.png">
</p>
<p align="center">
<img width="500" src="https://user-images.githubusercontent.com/11304944/79985361-139e4600-84dd-11ea-95a8-110894c90576.png">
</p>

<br />

#### Social Experience

<p align="center">
<img width="450" src="https://user-images.githubusercontent.com/11304944/77065600-93d41600-6a1c-11ea-9916-562ec1132026.png">
</p>

<br />

### Configuration

**First, do not rename any directories！** You can start your writing in the `posts` folder.

In the **root directory** of the project, you can change the configuration for your blog。

All configuration documents please [refer to here](https://github.com/unix/unix.bio/wiki/All-configuration-items-for-Blog)

<br />

### How to migrate

Timely migration can help you get the latest source code, this includes bug fixes and new features.

Fortunately, we have a easy to use migrate tool, just run:

```shell
npx unix-bio migrate
```

<br />

### Deploy only static (Not recommended)

In a few scenarios, you may want to deploy your blog on a CDN or other static server. Use the following commands to deploy:

```bash
npm run export
```

After running the command, the generated static file will be in the `/out` directory.

<br />

### LICENSE

[MIT](./LICENSE)

