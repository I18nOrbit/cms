/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import LoginController from '#controllers/auth/login_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import UserController from '#controllers/me/users_controller'
import TranslationsController from '#controllers/me/translations_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .group(() => {
    router.post('/login', [LoginController, 'store'])
  })
  .prefix('/auth')

router
  .group(() => {
    router.get('/', [UserController, 'show'])
    router.post('/translations', [TranslationsController, 'store'])
  })
  .prefix('/me')
  .use(
    middleware.auth({
      guards: ['api'],
    })
  )
