import { FactorySpecHelper } from '#tests/factories'
import { test } from '@japa/runner'
import { faker } from '@faker-js/faker'
import Translation from '#models/translation'
import { TranslationFactory } from '#database/factories/translation'

test.group('POST /me/translations', () => {
  test('Should store a new i18n key', async ({ client }) => {
    // Arrange
    const { headers } = await FactorySpecHelper.create_user({})
    const key = `${faker.lorem.word()}_${faker.lorem.word()}`
    const language = 'en-US'

    // Act
    const response = await client
      .post('/me/translations')
      .json({
        language,
        message: 'Hello World',
        key,
      })
      .headers(headers)

    const { id } = response.body()

    // Assert
    response.assertStatus(200)
    response.assertBodyContains({
      id,
      language,
      message: 'Hello World',
      key,
      group: 'global',
    })
  }).tags(['translations'])
  test('Should not store same group-key-language', async ({ client }) => {
    // Arrange
    const { headers } = await FactorySpecHelper.create_user({})
    const language = 'en-US'
    const key = `${faker.lorem.word()}_${faker.lorem.word()}`
    const group = 'validations'

    // act
    await client
      .post('/me/translations')
      .json({
        language,
        key,
        group,
        message: faker.lorem.sentence(),
      })
      .headers(headers)

    const response = await client
      .post('/me/translations')
      .json({
        language,
        key,
        group,
        message: faker.lorem.sentence(),
      })
      .headers(headers)

    // assert
    response.assertStatus(409)
  }).tags(['translations'])
  test('Should validate the key pattern', async ({ client }) => {
    // Arrange
    const { headers } = await FactorySpecHelper.create_user({})
    const language = 'en-US'
    const key = `${faker.lorem.word()} $ ${faker.lorem.word()}`
    const group = 'validations'

    // act
    const response = await client
      .post('/me/translations')
      .json({
        language,
        key,
        group,
        message: faker.lorem.sentence(),
      })
      .headers(headers)

    // assert
    response.assertStatus(422)
  }).tags(['translations'])
})

test.group('GET /me/translations', ({ each }) => {
  each.setup(async () => {
    Translation.truncate()
  })

  test('Should get all translations', async ({ client, assert }) => {
    // Arrange
    const { headers } = await FactorySpecHelper.create_user({})
    TranslationFactory.merge({ group: 'shared', language: 'en-US' }).createMany(3)
    TranslationFactory.merge({ group: 'shared', language: 'pt-BR' }).createMany(3)

    // act
    const response = await client.get('/me/translations/en-US/shared').headers(headers)

    // assert
    response.assertStatus(200)
    assert.lengthOf(Object.keys(response.body()), 3)
  }).tags(['translations', 'focus'])
})
