import { Command } from '@oclif/core'
import { table, TableUserConfig } from 'table'
import db from '../../utils/db'
import { getLocal, getGlobal } from '../../utils/git'
import { listTable } from '../../utils/table'
import chalk = require('chalk')

interface User { [key: string]: string }

export default class Ls extends Command {
  static description = 'git users list'

  async run(): Promise<void> {
    const users: User[] = db.all()
    const localUser = getLocal()
    const globalUser = getGlobal()
    const data = listTable(users, localUser, globalUser)
    const config: TableUserConfig = {
      header: {
        alignment: 'center',
        content: 'Git user list'
      },
      columns: [
        { alignment: 'center' },
        { alignment: 'right' },
        { alignment: 'right' },
        { alignment: 'center' }
      ]
    }
    console.log(chalk.blue(table(data, config)))
  }
}
