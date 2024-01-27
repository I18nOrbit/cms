import { FactorySpecHelper } from "#tests/factories";
import { test } from "@japa/runner";

test.group("Me translations", () => {
  test("Should store a new i18n key", async ({ client }) => {
    const { headers } = await FactorySpecHelper.create_user({});

    const response = await client.post("/me/translations").json({
      language: "en_US",
      message: "Hello World",
      key: "hello_world",
    }).headers(headers);

    response.assertStatus(200);
    const { id } = response.body();

    response.assertBodyContains({
      id,
      language: "en_US",
      message: "Hello World",
      key: "hello_world",
      group: "global",
    });
  }).tags(["translations"]);
});
