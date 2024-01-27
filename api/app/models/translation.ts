import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Translation extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare language: string

  @column()
  declare message: string

  @column()
  declare group: string

  @column()
  declare key: string
}
