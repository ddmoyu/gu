import chalk = require('chalk')

interface User { [key: string]: string }
function listTable(arr: User[], local: User, global: User): (string | number)[][] {
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
    for (const [i, user] of arr.entries()) {
      const d = []
      if (user.name === local.name) {
        continue
      }

      if (user.name === global.name) {
        continue
      }

      d.push(idx + i, user.name, user.email, '')
      tb.push(d)
    }

    return tb
  }

  return tb
}

export {
  listTable
}
