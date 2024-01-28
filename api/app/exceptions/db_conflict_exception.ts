import { Exception } from '@adonisjs/core/exceptions'
import { HttpContext } from '@adonisjs/core/http'

export default class ConflictException extends Exception {
  static status = 409
  static code = '_bt_check_unique'
  static message = 'The request could not be completed due to a conflict, data already exists.'

  static handler(ctx: HttpContext) {
    return ctx.response.status(ConflictException.status).send({
      code: ConflictException.code,
      message: ConflictException.message,
    })
  }
}
