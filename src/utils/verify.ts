import chalk = require('chalk')
import db from './db'

function verify(name: string, email: string): void {
  if (!name || !email) {
    console.log('\n')
    console.log(chalk.yellow(`╒=================== [${chalk.red('WARNING')}] ===================╕`))
    console.log(chalk.yellow('|                                                 |'))
    console.log(chalk.yellow(`|           ${chalk.red("Miss user's name or email !")}           |`))
    console.log(chalk.yellow('|                                                 |'))
    console.log(chalk.yellow(`├--------------------[${chalk.green('EXAMPLE')}]--------------------┤`))
    console.log(chalk.yellow(`|                ${chalk.green('gu add name email')}                |`))
    console.log(chalk.yellow('└-------------------------------------------------┘'))
  } else {
    const reg = /^([A-Za-z]|\d)(\w|-)+@[\dA-Za-z]+\.([A-Za-z]{2,4})$/
    if (reg.test(email)) {
      const flag = db.add({ name, email })
      if (flag) {
        console.log('\n')
        console.log(chalk.green(`╒=================== [${chalk.blue('SUCCESS')}] ===================╕`))
        console.log(chalk.green('|                                                 |'))
        console.log(chalk.green(`|                 ${chalk.blue('Add user success.')}               |`))
        console.log(chalk.green('|                                                 |'))
        console.log(chalk.green('└-------------------------------------------------┘'))
      } else {
        console.log('\n')
        console.log(chalk.yellow(`╒=================== [${chalk.red('WARNING')}] ===================╕`))
        console.log(chalk.yellow('|                                                 |'))
        console.log(chalk.yellow(`|            ${chalk.red('User name already exists !')}           |`))
        console.log(chalk.yellow('|                                                 |'))
        console.log(chalk.yellow('└-------------------------------------------------┘'))
      }
    } else {
      console.log('\n')
      console.log(chalk.yellow(`╒=================== [${chalk.red('WARNING')}] ===================╕`))
      console.log(chalk.yellow('|                                                 |'))
      console.log(chalk.yellow(`|          ${chalk.red('The email address is invalid !')}         |`))
      console.log(chalk.yellow('|                                                 |'))
      console.log(chalk.yellow('└-------------------------------------------------┘'))
    }
  }
}

export {
  verify
}
