import type { HttpContext } from '@adonisjs/core/http'

export default class UserController {
  async show({ auth }: HttpContext) {
    const user = await auth.authenticate()
    return user.serialize()
  }
}
