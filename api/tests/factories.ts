import User from '#models/user'
import { faker } from '@faker-js/faker'

export class FactorySpecHelper {
  static USER_PASSWORD = '12345678Kk!'

  static create_user = async ({
    email = faker.internet.email(),
    password = FactorySpecHelper.USER_PASSWORD,
    fullName = faker.person.fullName(),
  }: {
    email?: string
    password?: string
    fullName?: string
  }) => {
    const user = await User.create({ fullName, email, password })
    const authorize = await User.authTokens.create(user)
    const { token } = authorize.toJSON()

    const headers = {
      Authorization: `Bearer ${token}`,
    }

    return { user, token, headers }
  }
}
