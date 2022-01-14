import { Command } from '@oclif/core'

export default class Add extends Command {
  static description = 'add git user'

  async run(): Promise<void> {
    console.log('== add ==')
  }
}
