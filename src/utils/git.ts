import { $ } from 'zx'
import shell = require('shelljs')

interface User { [key: string]: string }

function getLocal(): User {
  const name = shell.exec('git config --local user.name').stdout
  if (name) {
    const email = shell.exec('git config --local user.email').stdout
    if (email) {
      return { name: name.replace('\n', ''), email: email.replace('\n', '') }
    }
  }

  return { name: '', email: '' }
}

function getGlobal(): User {
  const name = shell.exec('git config --global user.name').stdout
  if (name) {
    const email = shell.exec('git config --global user.email').stdout
    if (email) {
      return { name: name.replace('\n', ''), email: email.replace('\n', '') }
    }
  }

  return { name: '', email: '' }
}

function zxTest() {
  return $`git config --global user.name`
}

export {
  getLocal,
  getGlobal,
  zxTest
}
