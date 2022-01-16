import path = require('path')
import StormDB = require('stormdb')

interface User { [key: string]: string }

class Database {
  db: StormDB
  constructor() {
    // eslint-disable-next-line unicorn/prefer-module
    const parent = path.resolve(__dirname, '..')
    const dir = path.join(parent, 'database')
    const file = path.join(dir, 'db.stormdb')
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
    const list = this.all()
    const reg = /^\d+(\.\d+)?$/
    if (reg.test(argv)) {
      if (argv < list.length) {
        console.log(this.db.get('users').get(argv).value(), '----')
        this.db.get('users').get(argv).delete(true)
        this.db.save()
        console.log(this.db, 'list')
        return true
      }

      return false
    }

    const idx = list.findIndex((l: User) => l.name === argv)
    if (idx >= 0) {
      this.db.get('users').get(idx).delete(true)
      this.db.save()
      return true
    }

    return false
  }
}

export default new Database()
