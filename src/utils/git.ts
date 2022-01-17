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

export {
  getLocal,
  getGlobal
}
