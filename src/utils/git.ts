import shell = require('shelljs')
import db from './db'
import { list } from './table'

interface User { [key: string]: string }

function getLocal(): User {
  const name = shell.exec('git config --local user.name', { silent: true }).stdout
  if (name) {
    const email = shell.exec('git config --local user.email', { silent: true }).stdout
    if (email) {
      return { name: name.replace('\n', ''), email: email.replace('\n', '') }
    }
  }

  return { name: '', email: '' }
}

function getGlobal(): User {
  const name = shell.exec('git config --global user.name', { silent: true }).stdout
  if (name) {
    const email = shell.exec('git config --global user.email', { silent: true }).stdout
    if (email) {
      return { name: name.replace('\n', ''), email: email.replace('\n', '') }
    }
  }

  return { name: '', email: '' }
}

function deleteUser(name: string): boolean {
  const local = getLocal()
  const global = getGlobal()
  if (local.name && local.name === name) {
    shell.exec('git config --unset --local user.name', { silent: true })
    return true
  }

  if (global.name && global.name === name) {
    shell.exec('git config --unset --global user.name', { silent: true })
    return true
  }

  return false
}

function setUser(idName: string, type: string): boolean {
  if (!idName) return false
  const all = db.all()
  const localUser = getLocal()
  const globalUser = getGlobal()
  const users = list(all, localUser, globalUser)
  const reg = /^\d+(\.\d+)?$/
  const user = { name: '', email: '' }
  if (reg.test(idName)) {
    if (Number(idName) > users.length - 1) return false
    user.name = users[Number(idName) + 1][1] as string
    user.email = users[Number(idName) + 1][2] as string
  } else {
    for (const item of users) {
      if (item[1] === idName) {
        user.name = idName
        user.email = item[2] as string
      }
    }

    if (user.name === '') return false
  }

  if (type === 'local') {
    shell.exec(`git config --local user.name ${user.name}`, { silent: true })
    shell.exec(`git config --local user.email ${user.email}`, { silent: true })
    return true
  }

  if (type === 'global') {
    shell.exec(`git config --global user.name ${user.name}`, { silent: true })
    shell.exec(`git config --global user.email ${user.email}`, { silent: true })
    return true
  }

  return false
}

export {
  getLocal,
  getGlobal,
  deleteUser,
  setUser
}
