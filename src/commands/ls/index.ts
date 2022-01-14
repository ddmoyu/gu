import { Command } from '@oclif/core'
import { table, TableUserConfig } from 'table'
import shell = require('shelljs')

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git')
  shell.exit(1)
}

export default class Ls extends Command {
  static description = 'git user list'

  async run(): Promise<void> {
    const users = [
      ['ID', 'Name', 'Email'],
      [0, 'moyu', 'daydaymoyu@gmail.com'],
      [1, 'hunlongyu', 'hunlongyu@gmail.com'],
    ]

    const config: TableUserConfig = {
      header: {
        alignment: 'center',
        content: 'Git user list',
      },
    }

    try {
      const res = shell.exec('git --version')
      console.log('=== res ===', res)
    } catch (error) {
      console.log('== error: ==', error)
    }

    console.log(table(users, config))
  }
}
