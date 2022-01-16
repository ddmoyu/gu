import { Command } from '@oclif/core'
import { ArgInput } from '@oclif/core/lib/interfaces'
import db from '../../utils/db'

export default class Rm extends Command {
  static description = 'remove git user'
  static args: ArgInput = [{ name: 'id_name' }]

  async run(): Promise<void> {
    const { args } = await this.parse(Rm)
    const idName = args.id_name
    const flag = db.delete(idName)
    console.log('== rm flag ==', flag)
  }
}
