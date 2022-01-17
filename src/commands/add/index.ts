import { Command } from '@oclif/core'
import { ArgInput } from '@oclif/core/lib/interfaces'
import { verify } from '../../utils/verify'
export default class Add extends Command {
  static description = 'add git user'

  static args: ArgInput = [{ name: 'name' }, { name: 'email' }]

  async run(): Promise<void> {
    const { args } = await this.parse(Add)
    const name = args.name
    const email = args.email
    verify(name, email)
  }
}
