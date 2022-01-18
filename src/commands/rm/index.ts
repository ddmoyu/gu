import { Command } from '@oclif/core'
import { ArgInput } from '@oclif/core/lib/interfaces'
import db from '../../utils/db'
import chalk = require('chalk')
import { table, TableUserConfig } from 'table'

const config: TableUserConfig = {
  columns: [
    { alignment: 'center', width: 50 }
  ]
}

export default class Rm extends Command {
  static description = 'remove git user'
  static args: ArgInput = [{ name: 'id_name' }]

  async run(): Promise<void> {
    const { args } = await this.parse(Rm)
    const idName = args.id_name
    const flag = db.delete(idName)
    if (flag) {
      const data = [
        [`\n${chalk.blue('[SUCCESS]')}\n\n${chalk.blue(`Delete { ${idName} } success.`)}\n`]
      ]
      console.log(chalk.green(table(data, config)))
    } else {
      const data = [
        [`\n${chalk.red('[WARNING]')}\n\n${chalk.red('User ID or name does not exist !')}\n`]
      ]
      console.log(chalk.yellow(table(data, config)))
    }
  }
}
