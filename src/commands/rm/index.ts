import { Command } from '@oclif/core'

export default class Rm extends Command {
  static description = 'remove git user'

  async run(): Promise<void> {
    console.log('== rm ==')
  }
}
