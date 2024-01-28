import Translation from '#models/translation'
import { createTranslationValidator, getTranslationsValidator } from '#validators/translation'
import type { HttpContext } from '@adonisjs/core/http'

export default class TranslationsController {
  // POST /me/translations
  async store({ request }: HttpContext) {
    const params = request.all()
    const { language, message, group, key } = await createTranslationValidator.validate(params)

    const translation = await Translation.create({
      language,
      message,
      group: group ?? Translation.default_group_value,
      key,
    })

    return translation.serialize()
  }

  // GET /me/translations
  async index() {
    const translations = await Translation.all()

    return translations.map((translation) => translation.serialize())
  }

  // GET /me/translations/:language/:group
  async translation_group({ params }: HttpContext) {
    const { language, group } = await getTranslationsValidator.validate(params)

    const translations = await Translation.query()
      .where('language', language)
      .where('group', group ?? Translation.default_group_value)
      .exec()

    const data: Record<string, string> = {}

    for (const translation of translations) {
      data[translation.key] = translation.message
    }
    return data
  }
}
