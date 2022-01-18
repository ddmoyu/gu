import { Command } from '@oclif/core'
import { ArgInput } from '@oclif/core/lib/interfaces'
import db from '../../utils/db'
import chalk = require('chalk')

export default class Rm extends Command {
  static description = 'remove git user'
  static args: ArgInput = [{ name: 'id_name' }]

  async run(): Promise<void> {
    const { args } = await this.parse(Rm)
    const idName = args.id_name
    const flag = db.delete(idName)
    if (flag) {
      console.log('\n')
      console.log(chalk.green(`╒=================== [${chalk.blue('SUCCESS')}] ===================╕`))
      console.log(chalk.green('|                                                 |'))
      console.log(chalk.green(`|                ${chalk.blue('Delete user success.')}             |`))
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
