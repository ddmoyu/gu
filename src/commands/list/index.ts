import { Command } from '@oclif/core'

export default class List extends Command {
  static description = 'git user list'

  static examples = [
    `$ gu ls
id name email
0 moyu moyu@email.com
`,
  ]

  async run(): Promise<void> {
    this.log('=== ls ===')
  }
}
