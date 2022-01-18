import chalk = require('chalk')
import { table, TableUserConfig } from 'table'
interface User { [key: string]: string }

const config: TableUserConfig = {
  header: {
    alignment: 'center',
    content: chalk.red('Git users list')
  },
  columns: [
    { alignment: 'center' },
    { alignment: 'right' },
    { alignment: 'right' },
    { alignment: 'center' }
  ]
}

function list(arr: User[], local: User, global: User): (string | number)[][] {
  const tb: (string | number)[][] = [[chalk.greenBright('ID'), chalk.greenBright('Name'), chalk.greenBright('Email'), chalk.greenBright('Status')]]
  let idx = 0
  if (local.name) {
    tb.push([idx, local.name, local.email, chalk.yellow('Local')])
    idx++
  }

  if (global.name) {
    tb.push([idx, global.name, global.email, chalk.cyan('Global')])
    idx++
  }

  if (arr.length > 0) {
    for (const user of arr) {
      const d = []
      if (user.name === local.name) {
        continue
      }

      if (user.name === global.name) {
        continue
      }

      d.push(idx++, user.name, user.email, '')
      tb.push(d)
    }

    return tb
  }

  return tb
}

function listTable(arr: User[], local: User, global: User): string {
  const li = list(arr, local, global)
  return chalk.blue(table(li, config))
}

export {
  list,
  listTable
}
