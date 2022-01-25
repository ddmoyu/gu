import { Command } from '@oclif/core'
import { ArgInput } from '@oclif/core/lib/interfaces'
import db from '../../utils/db'
import chalk = require('chalk')
import { table, TableUserConfig, getBorderCharacters } from 'table'

const hex = chalk.hex('#fec78f')
const config: TableUserConfig = {
  border: getBorderCharacters('norc'),
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
        [`${chalk.blue('[SUCCESS]')}\n${chalk.blue(`Delete { ${idName} } success.`)}`]
      ]
      console.log(hex(table(data, config)))
    } else {
      const data = [
        [`${chalk.red('[WARNING]')}\n${chalk.red('User ID or name does not exist !')}`]
      ]
      console.log(hex(table(data, config)))
    }
  }
}
