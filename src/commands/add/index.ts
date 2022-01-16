import { Command } from '@oclif/core'
import { ArgInput } from '@oclif/core/lib/interfaces'
import chalk = require('chalk')
import db from '../../utils/db'
export default class Add extends Command {
  static description = 'add git user'

  static args: ArgInput = [{ name: 'name' }, { name: 'email' }]

  async run(): Promise<void> {
    const { args } = await this.parse(Add)
    const name = args.name
    const email = args.email

    if (!name || !email) {
      console.log(chalk.yellow('miss name or email \ngu add name email'))
    } else {
      const flag = db.add({ name, email })
      if (flag) {
        console.log('== add success ==', flag)
      } else {
        console.log('== add failed ==', flag)
      }
    }
  }
}
