import Translation from '#models/translation'
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'translations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('language').notNullable()
      table.text('message').notNullable()
      table.string('group').notNullable().defaultTo(Translation.default_group_value)
      table.string('key').notNullable()

      // constraints
      table.unique(['language', 'group', 'key'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
