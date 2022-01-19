import path = require('path')
import StormDB = require('stormdb')
import { getLocal, getGlobal, deleteUser } from './git'
import { list } from './table'

interface User { [key: string]: string }

class Database {
  db: StormDB
  constructor() {
    // eslint-disable-next-line unicorn/prefer-module
    const parent = path.resolve(__dirname)
    const file = path.join(parent, 'db.stormdb')
    // eslint-disable-next-line new-cap
    const engine = new StormDB.localFileEngine(file)
    this.db = new StormDB(engine)
    this.db.default({ users: [] })
  }

  all() {
    return this.db.get('users').value()
  }

  add(user: User) {
    const list = this.all()
    if (list.some((l: User) => l.name === user.name)) {
      return false
    }

    try {
      this.db.get('users').get(list.length).set(user).save()
      return true
    } catch {
      return false
    }
  }

  delete(argv: string) {
    const all = this.all()
    const localUser = getLocal()
    const globalUser = getGlobal()
    const users = list(all, localUser, globalUser)
    const reg = /^\d+(\.\d+)?$/

    let name = ''
    if (reg.test(argv)) {
      if (Number(argv) > users.length - 1) return false
      name = users[Number(argv) + 1][1] as string
    } else {
      name = argv
    }

    const idx = all.findIndex((l: User) => l.name === name)
    if (idx >= 0) {
      deleteUser(name)
      this.db.get('users').get(idx).delete(true)
      this.db.save()
      return true
    }

    return false
  }
}

export default new Database()
