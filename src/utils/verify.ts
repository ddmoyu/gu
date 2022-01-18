import chalk = require('chalk')
import db from './db'
import { table, TableUserConfig } from 'table'

const config: TableUserConfig = {
  columns: [
    { alignment: 'center', width: 50 }
  ]
}

function verify(name: string, email: string): void {
  if (!name || !email) {
    const data = [
      [`\n${chalk.red('[WARNING]')}\n\n${chalk.red("Miss user's name or email !")}\n`],
      [`\n${chalk.green('[EXAMPLE]')}\n\n${chalk.green('gu add name email')}\n`]
    ]
    console.log(chalk.yellow(table(data, config)))
  } else {
    const reg = /^([A-Za-z]|\d)(\w|-)+@[\dA-Za-z]+\.([A-Za-z]{2,4})$/
    if (reg.test(email)) {
      const flag = db.add({ name, email })
      if (flag) {
        const data = [
          [`\n${chalk.blue('[SUCCESS]')}\n\n${chalk.blue(`Add { ${name} } success.`)}\n`]
        ]
        console.log(chalk.green(table(data, config)))
      } else {
        const data = [
          [`\n${chalk.red('[WARNING]')}\n\n${chalk.red(`User name: { ${name} } already exists!`)}\n`]
        ]
        console.log(chalk.yellow(table(data, config)))
      }
    } else {
      const data = [
        [`\n${chalk.red('[WARNING]')}\n\n${chalk.red('The email address is invalid!')}\n`]
      ]
      console.log(chalk.yellow(table(data, config)))
    }
  }
}

export {
  verify
}
