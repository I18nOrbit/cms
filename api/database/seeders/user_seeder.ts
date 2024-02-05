import User from "#models/user";
import { BaseSeeder } from "@adonisjs/lucid/seeders";

export default class extends BaseSeeder {
  async run() {
    const user = await User.first();
    if (user) {
      return;
    }

    await User.createMany([
      {
        email: "i18n@orbit.com",
        password: "12345678@@aA",
      },
      // Add more users here
    ]);
  }
}
