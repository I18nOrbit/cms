import ConflictException from '#exceptions/db_conflict_exception'
import { BaseModel, beforeSave, column } from '@adonisjs/lucid/orm'

export default class Translation extends BaseModel {
  static default_group_value = 'global'

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

  @beforeSave()
  static async checkUniqueKey({
    key,
    language,
    group = Translation.default_group_value,
  }: Translation) {
    const translation = await Translation.query().where({ key, language, group }).first()

    if (translation) {
      throw new ConflictException('This translation already exists.')
    }
  }
}
