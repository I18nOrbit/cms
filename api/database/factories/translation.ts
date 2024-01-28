import Translation from '#models/translation'
import Factory from '@adonisjs/lucid/factories'

export const TranslationFactory = Factory.define(Translation, ({ faker }) => {
  return {
    language: faker.lorem.word(),
    message: faker.lorem.sentence(),
    group: faker.lorem.word(),
    key: faker.lorem.word(),
  }
}).build()
