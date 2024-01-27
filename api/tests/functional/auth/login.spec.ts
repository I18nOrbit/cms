import { test } from "@japa/runner";
import { faker } from "@faker-js/faker";
import { FactorySpecHelper } from "#tests/factories";

test.group("Auth login", () => {
  test("Should login correct", async ({ client }) => {
    const { user: { email } } = await FactorySpecHelper.create_user({
      email: faker.internet.email(),
    });

    const response = await client.post("/auth/login").json({
      email,
      password: FactorySpecHelper.USER_PASSWORD,
    });

    response.assertStatus(200);
    response.assertBodyContains({
      type: "bearer",
    });
  });
  test("Should not login missing email", async ({ client }) => {
    const response = await client.post("/auth/login").json({
      password: FactorySpecHelper.USER_PASSWORD,
    });

    response.assertStatus(400);
  });
  test("Should not login missing password", async ({ client }) => {
    const response = await client.post("/auth/login").json({
      email: faker.internet.email(),
    });

    response.assertStatus(400);
  });
});
