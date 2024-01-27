import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'translations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('language').notNullable()
      table.text('message').notNullable()
      table.string('group').notNullable().defaultTo('global')
      table.string('key').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
