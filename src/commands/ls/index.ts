import { Command } from '@oclif/core'
import { table, TableUserConfig } from 'table'
import db from '../../utils/db'

interface User { [key: string]: string }

export default class Ls extends Command {
  static description = 'git user list'

  async run(): Promise<void> {
    const users: User[] = db.all()
    const arr = []
    arr.push(['ID', 'Name', 'Email'])
    for (const [i, user] of users.entries()) {
      const d = []
      d.push(i, user.name, user.email)
      arr.push(d)
    }

    const config: TableUserConfig = {
      header: {
        alignment: 'center',
        content: 'Git user list'
      },
      columns: [
        { alignment: 'center' },
        { alignment: 'right' },
        { alignment: 'right' }
      ]
    }
    console.log(table(arr, config))
  }
}
