import Translation from '#models/translation'
import type { HttpContext } from '@adonisjs/core/http'

export default class TranslationsController {
  async store({ request }: HttpContext) {
    const { language, message, group, key } = request.only(['language', 'message', 'group', 'key'])

    const { id } = await Translation.create({
      language,
      message,
      group,
      key,
    })

    const translation = await Translation.findOrFail(id)

    return translation.serialize()
  }
}
