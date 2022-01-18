import { Command, Flags } from '@oclif/core'
import { ArgInput } from '@oclif/core/lib/interfaces'
import { setUser } from '../../utils/git'
import chalk = require('chalk')

export default class Use extends Command {
  static description = 'set git user name'

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
      console.log('\n')
      console.log(chalk.green(`╒=================== [${chalk.blue('SUCCESS')}] ===================╕`))
      console.log(chalk.green('|                                                 |'))
      console.log(chalk.green(`|                  ${chalk.blue('set user success.')}              |`))
      console.log(chalk.green('|                                                 |'))
      console.log(chalk.green('└-------------------------------------------------┘'))
    } else {
      console.log('\n')
      console.log(chalk.yellow(`╒=================== [${chalk.red('WARNING')}] ===================╕`))
      console.log(chalk.yellow('|                                                 |'))
      console.log(chalk.yellow(`|         ${chalk.red('User ID or name does not exist !')}        |`))
      console.log(chalk.yellow('|                                                 |'))
      console.log(chalk.yellow('└-------------------------------------------------┘'))
    }
  }
}
