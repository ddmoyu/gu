import chalk = require('chalk')
import db from './db'
import { table, TableUserConfig, getBorderCharacters } from 'table'

const hex = chalk.hex('#fec78f')
const config: TableUserConfig = {
  border: getBorderCharacters('norc'),
  columns: [
    { alignment: 'center', width: 50 }
  ]
}

function verify(name: string, email: string): void {
  if (!name || !email) {
    const data = [
      [`${chalk.red('[WARNING]')}\n${chalk.red("Miss user's name or email !")}`]
    ]
    console.log(hex(table(data, config)))
  } else {
    const reg = /^([A-Za-z]|\d)(\w|-)+@[\dA-Za-z]+\.([A-Za-z]{2,4})$/
    if (reg.test(email)) {
      const flag = db.add({ name, email })
      if (flag) {
        const data = [
          [`${chalk.blue('[SUCCESS]')}\n${chalk.blue(`Add { ${name} } success.`)}`]
        ]
        console.log(chalk.green(table(data, config)))
      } else {
        const data = [
          [`${chalk.red('[WARNING]')}\n${chalk.red(`User name: { ${name} } already exists!`)}`]
        ]
        console.log(hex(table(data, config)))
      }
    } else {
      const data = [
        [`${chalk.red('[WARNING]')}\n${chalk.red('The email address is invalid!')}`]
      ]
      console.log(hex(table(data, config)))
    }
  }
}

export {
  verify
}
