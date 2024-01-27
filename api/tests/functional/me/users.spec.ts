import { FactorySpecHelper } from "#tests/factories";
import { test } from "@japa/runner";

test.group("Me users", () => {
  test("get logged user", async ({ client }) => {
    const { user, token } = await FactorySpecHelper.create_user({});
    const response = await client.get("/me").header(
      "Authorization",
      `Bearer ${token}`,
    );

    response.assertStatus(200);

    response.assertBodyContains({
      id: user.id,
      email: user.email,
    });
  });
  test("Should not get user without token", async ({ client }) => {
    const response = await client.get("/me");

    response.assertStatus(401);
  });
});
