import shell = require('shelljs')

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

export {
  getLocal,
  getGlobal,
  deleteUser
}
