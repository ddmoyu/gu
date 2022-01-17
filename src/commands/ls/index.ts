import { Command } from '@oclif/core'
import db from '../../utils/db'
import { getLocal, getGlobal } from '../../utils/git'
import { listTable } from '../../utils/table'

interface User { [key: string]: string }

export default class Ls extends Command {
  static description = 'git users list'

  async run(): Promise<void> {
    const users: User[] = db.all()
    const localUser = getLocal()
    const globalUser = getGlobal()
    const table = listTable(users, localUser, globalUser)
    console.log(table)
  }
}
