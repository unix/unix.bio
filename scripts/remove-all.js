const fs = require('fs-extra')
const path = require('path')
const assetsDir = path.join(__dirname, '../public/assets')
const pagesPath = path.join(__dirname, '../pages')
const postsPath = path.join(__dirname, '../pages/posts')
const fixedPath = path.join(__dirname, '../pages/fixed')
const postsTemplate = path.join(__dirname, './templates/posts')
const fixedTemplate = path.join(__dirname, './templates/fixed')
const shouldIgnoreFile = [
  'sponsors.js',
]
const shouldKeepImages = [
  'avatar.png',
  'og-main.png',
]

const removeDirsInPages = async files => {
  return await Promise.all(files.map(async name => {
    const fullPath = path.join(pagesPath, name)
    if (!fs.statSync(fullPath).isDirectory()) return
  
    await fs.remove(fullPath)
  }))
}

const removeFilesInRoot = async files => {
  const rootPath = path.join(__dirname, '../')
  
  return await Promise.all(files.map(async name => {
    const fullPath = path.join(rootPath, name)
    await fs.remove(fullPath)
  }))
}

;(async () => {
  const files = await fs.readdir(pagesPath)
  await removeDirsInPages(files)
  await removeFilesInRoot(shouldIgnoreFile)
  
  await fs.copy(postsTemplate, postsPath)
  await fs.copy(fixedTemplate, fixedPath)
  
  await Promise.all(fs.readdirSync(assetsDir).map(async name => {
    if (shouldKeepImages.includes(name)) return
    const imagePath = path.join(assetsDir, name)
    await fs.remove(imagePath)
  }))
})()
