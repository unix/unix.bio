const fs = require('fs-extra')
const path = require('path')
const publicDir = path.join(__dirname, '../public/assets')
const postsPath = path.join(__dirname, '../pages/posts')
const fixedPath = path.join(__dirname, '../pages/fixed')
const postsTemplate = path.join(__dirname, './templates/posts')
const fixedTemplate = path.join(__dirname, './templates/fixed')


;(async () => {
  await fs.remove(postsPath)
  await fs.remove(fixedPath)
  await fs.remove(publicDir)
  await fs.copy(postsTemplate, postsPath)
  await fs.copy(fixedTemplate, fixedPath)
})()
