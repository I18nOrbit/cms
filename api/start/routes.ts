/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const UsersController = () => import('#controllers/me/users_controller')
const TranslationsController = () => import('#controllers/me/translations_controller')
const LoginController = () => import('#controllers/auth/login_controller')

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
    router.get('/', [UsersController, 'show'])
    router.post('/translations', [TranslationsController, 'store'])
  })
  .prefix('/me')
  .use(
    middleware.auth({
      guards: ['api'],
    })
  )
