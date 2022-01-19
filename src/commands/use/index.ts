import { Command, Flags } from '@oclif/core'
import { ArgInput } from '@oclif/core/lib/interfaces'
import { setUser } from '../../utils/git'
import chalk = require('chalk')
import { table, TableUserConfig } from 'table'

const config: TableUserConfig = {
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
        [`\n${chalk.blue('[SUCCESS]')}\n\n${chalk.blue(`set { ${args.idName} } success.`)}\n`]
      ]
      console.log(chalk.green(table(data, config)))
    } else {
      const data = [
        [`\n${chalk.red('[WARNING]')}\n\n${chalk.red('User ID or name does not exist!')}\n`]
      ]
      console.log(chalk.yellow(table(data, config)))
    }
  }
}
