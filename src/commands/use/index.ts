import { Command } from '@oclif/core'

export default class Use extends Command {
  static description = 'use git user'

  async run(): Promise<void> {
    console.log('== use ==')
  }
}
