import { Command } from '@oclif/core'
import { ArgInput } from '@oclif/core/lib/interfaces'
import chalk = require('chalk')

export default class Add extends Command {
  static description = 'add git user'

  static args: ArgInput = [{ name: 'name' }, { name: 'email' }]

  async run(): Promise<void> {
    const { args } = await this.parse(Add)
    const name = args.name
    const email = args.email

    if (!name || !email) {
      console.log(chalk.yellow('miss name or email \ngu add name email'))
    }

    console.log('== add ==', name, email)
  }
}
