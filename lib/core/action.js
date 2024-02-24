var inquirer = require('inquirer')
var config = require('../../config')
var downloadFun = require('./download')
const myAction = async (project) => {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'framework',
      choices: config.framework,
      message: '请选择你所使用的框架'
    }
  ])
  downloadFun(config.frameworkUrl[answer.framework], project)
}

module.exports = myAction