import { Command, Flags } from '@oclif/core'
import { ArgInput } from '@oclif/core/lib/interfaces'
import { setUser } from '../../utils/git'
import chalk = require('chalk')
import { table, TableUserConfig, getBorderCharacters } from 'table'

const hex = chalk.hex('#fec78f')
const config: TableUserConfig = {
  border: getBorderCharacters('norc'),
  columns: [
    { alignment: 'center', width: 50 }
  ]
}

export default class Use extends Command {
  static description = 'set git user'

  static args: ArgInput = [{ name: 'idName' }]

  static flags = {
    local: Flags.boolean({ char: 'l' }),
    global: Flags.boolean({ char: 'g' })
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Use)
    const flag = JSON.stringify(flags) === '{}'
    const type = flag ? 'local' : (flags.local ? 'local' : 'global')
    const f = setUser(args.idName, type)
    if (f) {
      const data = [
        [`${chalk.blue('[SUCCESS]')}\n${chalk.blue(`set { ${args.idName} } success.`)}`]
      ]
      console.log(hex(table(data, config)))
    } else {
      const data = [
        [`${chalk.red('[WARNING]')}\n${chalk.red('User ID or name does not exist!')}`]
      ]
      console.log(hex(table(data, config)))
    }
  }
}
