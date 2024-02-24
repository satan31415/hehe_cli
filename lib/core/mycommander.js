const myAction = require('./action')

const myCommander = function (program) {
  program
    .command('create <projectName> [other...]')
    .description('创建项目')
    .action(myAction)
}

module.exports = myCommander