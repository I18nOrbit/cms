import vine from '@vinejs/vine'
import { isValidLanguagePattern } from './rules/is_language_pattern.js'

export const createTranslationValidator = vine.compile(
  vine.object({
    // Only string_snake_case or string-kebab-case
    key: vine
      .string()
      .trim()
      .escape()
      .regex(/^[a-z0-9]+(?:[-_][a-z0-9]+)*$/),
    language: vine.string().use(isValidLanguagePattern()),
    message: vine.string().trim().escape(),
    group: vine.string().trim().escape().optional(),
  })
)

export const getTranslationsValidator = vine.compile(
  vine.object({
    language: vine.string().use(isValidLanguagePattern()),
    group: vine.string().trim().escape().optional(),
  })
)
