import Translation from '#models/translation'
import { createTranslationValidator } from '#validators/translation'
import type { HttpContext } from '@adonisjs/core/http'

export default class TranslationsController {
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
}
