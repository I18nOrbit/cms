import { HttpContext } from "@adonisjs/core/http";
import User from "#models/user";

export default class LoginController {
  async store({ request }: HttpContext) {
    const { email, password } = request.only([
      "email",
      "password",
    ]);

    const user = await User.verifyCredentials(email, password);
    const token = await User.authTokens.create(user);

    return token.toJSON();
  }
}
