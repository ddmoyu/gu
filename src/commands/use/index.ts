import { Command } from '@oclif/core'
import { getLocal, getGlobal, zxTest } from '../../utils/git'

export default class Use extends Command {
  static description = 'use git user'

  async run(): Promise<void> {
    console.log('== use ==', await zxTest())
    const res = getLocal()
    console.log('=== local ===', res)
    const re = getGlobal()
    console.log('=== global ===', re)
  }
}
