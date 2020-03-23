const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const prompt = require('prompt-sync')()
const postsPath = path.join(__dirname, '../pages/posts')
const templatePath = path.join(__dirname, 'template.mdx')

const create = async () => {
  const hasPosts = await fs.pathExists(postsPath)
  if (!hasPosts) {
    console.log(chalk.red('  About. Not found dir "/page/posts".\n'))
    process.exit(1)
  }
  
  const promptText = `> You need to specify the post ${chalk.bold('Filename')} (required): `
  const answer = prompt(chalk.hex('#bdbdbd')(promptText))
  
  if (!answer) {
    console.log(chalk.yellow('  About. Nothing has changed.\n'))
    process.exit(1)
  }
  
  if (!/^[a-zA-Z0-9_-]+$/.test(answer)) {
    console.log(chalk.red('  Cancelled. Allowed characters: [A-z, 0-9, _, -]\n'))
    process.exit(1)
  }
  
  const filePath = path.join(postsPath, `${answer}.mdx`)
  
  const hasFile = await fs.pathExists(filePath)
  if (hasFile) {
    console.log(chalk.red(`  About. File ${postsPath} is exists.\n`))
    process.exit(1)
  }
  
  const template = await fs.readFile(templatePath)
  const content = template.toString()
    .replace(/TEMPLATE_DATE/, new Date().toISOString())
    .replace(/TEMPLATE_NAME/, answer)
  
  await fs.writeFile(filePath, content)
  console.log(chalk.cyan('  Successful. Enjoy.\n'))
  process.exit(0)
}

create()
  .catch(err => console.log(err))

