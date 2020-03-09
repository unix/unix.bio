const fs = require('fs-extra')
const path = require('path')
const postsPath = path.join(__dirname, '../pages/posts')
const fixedPath = path.join(__dirname, '../pages/fixed')
const postsTemplate = path.join(__dirname, './templates/posts')
const fixedTemplate = path.join(__dirname, './templates/fixed')

;(async () => {
  await fs.remove(postsPath)
  await fs.remove(fixedPath)
  await fs.copy(postsTemplate, postsPath)
  await fs.copy(fixedTemplate, fixedPath)
})()
